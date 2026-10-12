import express from "express";
import path from "path";
import fs from "fs/promises";
import { existsSync, mkdirSync } from "fs";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

const app = express();
const PORT = Number(process.env.PORT) || 3000;
const IS_PRODUCTION = process.env.NODE_ENV === "production";

// Only trust proxy headers when explicitly configured (or in a known production
// proxy setup). Trusting them blindly lets clients spoof their IP and bypass
// the rate limiter.
if (process.env.TRUST_PROXY === "true") {
  app.set("trust proxy", 1);
} else if (process.env.TRUST_PROXY === "false") {
  app.set("trust proxy", false);
} else if (IS_PRODUCTION) {
  app.set("trust proxy", 1);
}

// Ensure database/storage directory exists
const DATA_DIR = path.join(process.cwd(), "data");
if (!existsSync(DATA_DIR)) {
  mkdirSync(DATA_DIR, { recursive: true });
}

const DB_FILE = path.join(DATA_DIR, "portfolio_db.json");

// Helper to manage our lightweight JSON-based persistent data store
interface DatabaseSchema {
  messages: Array<{
    id: string;
    name: string;
    email: string;
    subject: string;
    message: string;
    timestamp: string;
  }>;
  stats: {
    resumeDownloads: number;
    totalVisitors: number;
    contactSubmissions: number;
  };
  visitorLog: Array<{
    ipHash: string;
    device: string;
    timestamp: string;
  }>;
}

const defaultDB: DatabaseSchema = {
  messages: [],
  stats: {
    resumeDownloads: 0,
    totalVisitors: 0,
    contactSubmissions: 0,
  },
  visitorLog: [],
};

function normalizeDB(parsed: unknown): DatabaseSchema {
  const source = (parsed && typeof parsed === "object" ? parsed : {}) as Partial<DatabaseSchema>;
  return {
    messages: Array.isArray(source.messages) ? source.messages : [],
    stats: { ...defaultDB.stats, ...(source.stats || {}) },
    visitorLog: Array.isArray(source.visitorLog) ? source.visitorLog : [],
  };
}

// Atomic write: write to a temp file first, then rename so a crash mid-write
// can never leave a truncated/corrupted database behind.
async function writeDB(data: DatabaseSchema): Promise<void> {
  const tmpFile = `${DB_FILE}.${process.pid}.${Date.now()}.tmp`;
  await fs.writeFile(tmpFile, JSON.stringify(data, null, 2), "utf8");
  await fs.rename(tmpFile, DB_FILE);
}

async function readDB(): Promise<DatabaseSchema> {
  try {
    const data = await fs.readFile(DB_FILE, "utf8");
    return normalizeDB(JSON.parse(data));
  } catch (err: any) {
    if (err && err.code === "ENOENT") {
      // First run: create the store, but never treat a corrupted file as empty
      // (that would silently overwrite real data on the next write).
      await writeDB(defaultDB);
      return structuredClone(defaultDB);
    }
    throw err;
  }
}

// Serialize all read-modify-write cycles so concurrent requests can't clobber
// each other's updates (lost-update race on the JSON store).
let dbQueue: Promise<unknown> = Promise.resolve();

function mutateDB<T>(mutator: (db: DatabaseSchema) => T | Promise<T>): Promise<T> {
  const run = dbQueue.then(async () => {
    const db = await readDB();
    const result = await mutator(db);
    await writeDB(db);
    return result;
  });
  dbQueue = run.catch(() => undefined);
  return run;
}

// Simple in-memory rate limiting to prevent spamming
const rateLimitMap = new Map<string, { count: number; lastReset: number }>();
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute
const RATE_LIMIT_MAX_REQUESTS = 15; // Max 15 requests per minute

function getClientIp(req: express.Request): string {
  return req.ip || req.socket.remoteAddress || "anonymous";
}

function rateLimiter(req: express.Request, res: express.Response, next: express.NextFunction): void {
  const ip = getClientIp(req);
  const now = Date.now();

  // Bound memory usage by evicting stale entries once the map grows large.
  if (rateLimitMap.size > 5000) {
    for (const [key, value] of rateLimitMap) {
      if (now - value.lastReset > RATE_LIMIT_WINDOW_MS) {
        rateLimitMap.delete(key);
      }
    }
  }

  const rateData = rateLimitMap.get(ip);

  if (!rateData || now - rateData.lastReset > RATE_LIMIT_WINDOW_MS) {
    rateLimitMap.set(ip, { count: 1, lastReset: now });
    return next();
  }

  if (rateData.count >= RATE_LIMIT_MAX_REQUESTS) {
    res.status(429).json({
      error: "Too many requests. Please wait a minute before trying again.",
    });
    return;
  }

  rateData.count += 1;
  next();
}

// Escape any user-controlled value before interpolating it into HTML emails,
// to prevent HTML/script injection through the contact form.
function escapeHtml(value: unknown): string {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function asTrimmedString(value: unknown, maxLength: number): string | null {
  if (typeof value !== "string") return null;
  const trimmed = value.trim();
  if (trimmed.length > maxLength) return null;
  return trimmed;
}

// Log server-side details, never the raw client payload, and return a generic
// message so internal errors/paths are not exposed to callers.
function serverError(res: express.Response, err: unknown, context: string): void {
  console.error(`[error] ${context}:`, err);
  res.status(500).json({ success: false, error: "Internal server error." });
}

function securityHeaders(_req: express.Request, res: express.Response, next: express.NextFunction): void {
  res.setHeader("X-Content-Type-Options", "nosniff");
  res.setHeader("X-Frame-Options", "SAMEORIGIN");
  res.setHeader("Referrer-Policy", "strict-origin-when-cross-origin");
  next();
}

// Express middlewares
app.use(securityHeaders);
app.use(express.json({ limit: "100kb" }));
app.use(express.urlencoded({ extended: true, limit: "100kb" }));

// Custom API Logging (path only, no query strings / payloads)
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.path}`);
  next();
});

// Locate the resume asset (served statically from /public in dev, /dist in prod)
const PUBLIC_DIR = path.join(process.cwd(), "public");
if (!existsSync(PUBLIC_DIR)) {
  mkdirSync(PUBLIC_DIR, { recursive: true });
}
const RESUME_PATH = path.join(PUBLIC_DIR, "Prashanth_Gouda_Resume.pdf");

// ==================== API ROUTES ====================

// Rate limit applied to contacts and downloads
app.use("/api/contact", rateLimiter);
app.use("/api/resume/download", rateLimiter);

// Get Statistics (for widgets)
app.get("/api/stats", async (_req, res) => {
  try {
    const db = await readDB();
    res.json({
      success: true,
      stats: db.stats,
    });
  } catch (err) {
    serverError(res, err, "GET /api/stats");
  }
});

// Increment and serve Resume download
app.get("/api/resume/download", async (_req, res) => {
  try {
    if (!existsSync(RESUME_PATH)) {
      res.status(404).send("Resume file not found.");
      return;
    }

    await mutateDB((db) => {
      db.stats.resumeDownloads += 1;
    });

    res.setHeader("Content-Disposition", "attachment; filename=Prashanth_Gouda_Resume.pdf");
    res.setHeader("Content-Type", "application/pdf");
    res.sendFile(RESUME_PATH);
  } catch (err) {
    console.error("[error] GET /api/resume/download:", err);
    res.status(500).send("Error compiling file.");
  }
});

// Track Visitor Hit
app.post("/api/analytics/hit", async (req, res) => {
  try {
    const userAgent = String(req.headers["user-agent"] || "unknown");
    const ip = getClientIp(req);

    // Simple IP hashing for privacy
    const ipHash = ip.split("").reduce((acc, char) => (acc << 5) - acc + char.charCodeAt(0), 0).toString(16);

    const stats = await mutateDB((db) => {
      // Filter to avoid multiple double hits in same short timeframe (e.g. 5 minutes)
      const fiveMinutesAgo = Date.now() - 5 * 60 * 1000;
      const isRecent = db.visitorLog.some(
        (v) => v.ipHash === ipHash && new Date(v.timestamp).getTime() > fiveMinutesAgo
      );

      if (!isRecent) {
        db.stats.totalVisitors += 1;
        db.visitorLog.push({
          ipHash,
          device: userAgent.includes("Mobile") ? "Mobile" : userAgent.includes("Tablet") ? "Tablet" : "Desktop",
          timestamp: new Date().toISOString(),
        });
      }
      return db.stats;
    });

    res.json({ success: true, stats });
  } catch (err) {
    serverError(res, err, "POST /api/analytics/hit");
  }
});

// Contact Form Handler
app.post("/api/contact", async (req, res) => {
  try {
    const body = (req.body && typeof req.body === "object" ? req.body : {}) as Record<string, unknown>;
    const name = asTrimmedString(body.name, 100);
    const email = asTrimmedString(body.email, 254);
    const subject = asTrimmedString(body.subject, 150) || "No Subject";
    const message = asTrimmedString(body.message, 5000);

    if (!name || !email || !message) {
      res.status(400).json({
        success: false,
        error: "Required fields are missing or too long. Please complete all fields.",
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      res.status(400).json({
        success: false,
        error: "Please enter a valid email address.",
      });
      return;
    }

    // Store in DB
    const newMessage = {
      id: Math.random().toString(36).substring(2, 11),
      name,
      email,
      subject,
      message,
      timestamp: new Date().toISOString(),
    };

    const stats = await mutateDB((db) => {
      db.messages.push(newMessage);
      db.stats.contactSubmissions += 1;
      return db.stats;
    });

    // Log only a non-identifying event; never log message contents or PII.
    console.log(`[contact] stored submission ${newMessage.id}`);

    // Setup Nodemailer transporter. If SMTP is not configured we persist the
    // message but report emailSent/autoReplySent as false (never a false success).
    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = parseInt(process.env.SMTP_PORT || "587", 10);
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const notifyTo = process.env.CONTACT_NOTIFY_EMAIL || "goudaprashant2204@gmail.com";

    let emailSent = false;
    let autoReplySent = false;

    if (smtpHost && smtpUser && smtpPass) {
      try {
        const transporter = nodemailer.createTransport({
          host: smtpHost,
          port: smtpPort,
          secure: smtpPort === 465,
          auth: {
            user: smtpUser,
            pass: smtpPass,
          },
        });

        // 1. Notify Portfolio Owner (Prashanth Gouda)
        const notificationHTML = `
          <div style="font-family: sans-serif; padding: 24px; background: #0f172a; color: #f8fafc; border-radius: 8px; border: 1px solid #334155;">
            <h2 style="color: #00f5ff; border-bottom: 1px solid #1e293b; padding-bottom: 12px; margin-top: 0;">New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${escapeHtml(name)}</p>
            <p><strong>Email:</strong> ${escapeHtml(email)}</p>
            <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
            <p style="margin-top: 16px;"><strong>Message:</strong></p>
            <blockquote style="background: #1e293b; padding: 16px; border-left: 4px solid #7c3aed; margin: 0; border-radius: 4px; font-style: italic;">
              ${escapeHtml(message).replace(/\n/g, "<br>")}
            </blockquote>
            <p style="font-size: 11px; color: #64748b; margin-top: 24px; border-top: 1px solid #1e293b; padding-top: 12px;">Sent from Prashanth Gouda's AI Developer Portfolio.</p>
          </div>
        `;

        await transporter.sendMail({
          from: `"Portfolio Alerts" <${smtpUser}>`,
          to: notifyTo,
          subject: `Portfolio: ${subject} from ${name}`,
          html: notificationHTML,
        });
        emailSent = true;

        // 2. Auto-Reply Confirmation to the User
        const autoReplyHTML = `
          <div style="font-family: sans-serif; padding: 24px; background: #0b0f19; color: #e2e8f0; border-radius: 12px; border: 1px solid #1e293b; max-width: 600px; margin: 0 auto;">
            <div style="text-align: center; margin-bottom: 24px;">
              <span style="font-size: 32px; font-weight: bold; background: linear-gradient(135deg, #00f5ff, #7c3aed); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">Prashanth Gouda</span>
              <p style="color: #64748b; margin: 4px 0 0 0; font-size: 14px;">Full Stack & AI Engineer</p>
            </div>
            <h2 style="color: #00f5ff; font-weight: 500; font-size: 20px; text-align: center;">Thank You for Reaching Out!</h2>
            <p>Hi ${escapeHtml(name)},</p>
            <p>I have received your contact message regarding <strong>"${escapeHtml(subject)}"</strong>. It is exciting to connect with fellow builders and innovators.</p>
            <p>My automated server agent has logged your message. I am currently reviewing my inbox and will get back to you personally within 24 to 48 hours.</p>
            <div style="background: #111827; border: 1px solid #1f2937; border-radius: 8px; padding: 16px; margin: 20px 0;">
              <p style="margin: 0; font-size: 12px; color: #4b5563; text-transform: uppercase; letter-spacing: 0.05em;">Your Message Summary</p>
              <p style="margin: 8px 0 0 0; font-size: 14px; font-style: italic; color: #9ca3af;">"${escapeHtml(message.length > 150 ? message.substring(0, 150) + "..." : message)}"</p>
            </div>
            <p style="margin-top: 24px;">Let's build something extraordinary together.</p>
            <p style="margin-bottom: 0;">Best Regards,</p>
            <p style="font-weight: bold; color: #3b82f6; margin-top: 4px;">Prashanth Gouda</p>
            <div style="text-align: center; margin-top: 32px; border-top: 1px solid #1f2937; padding-top: 16px; font-size: 12px; color: #4b5563;">
              <a href="${escapeHtml(process.env.APP_URL || "#")}" style="color: #00f5ff; text-decoration: none; margin: 0 8px;">Portfolio</a> | 
              <a href="https://linkedin.com" style="color: #00f5ff; text-decoration: none; margin: 0 8px;">LinkedIn</a> | 
              <a href="https://github.com" style="color: #00f5ff; text-decoration: none; margin: 0 8px;">GitHub</a>
            </div>
          </div>
        `;

        await transporter.sendMail({
          from: `"Prashanth Gouda" <${smtpUser}>`,
          to: email,
          subject: `Connection Received: Thank you for reaching out!`,
          html: autoReplyHTML,
        });
        autoReplySent = true;

      } catch (mailErr) {
        console.error("[contact] Nodemailer service failed (SMTP server rejected or misconfigured):", mailErr);
      }
    } else {
      console.warn("[contact] SMTP credentials not set; message stored but no email was sent.");
    }

    res.json({
      success: true,
      message: "Message received successfully!",
      stats,
      emailSent,
      autoReplySent,
    });
  } catch (err) {
    serverError(res, err, "POST /api/contact");
  }
});

// ==================== VITE ENGINE DEVELOPMENT MIDDLEWARE ====================

async function startServer() {
  if (!IS_PRODUCTION) {
    // Vite is only needed for the dev server, so it is loaded lazily and is
    // never required by the production bundle.
    const { createServer: createViteServer } = await import("vite");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
    console.log("Vite development server middleware mounted.");
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
    console.log("Serving compiled production assets.");
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Express server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
