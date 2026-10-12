import { jsPDF } from 'jspdf';
import fs from 'fs';
import path from 'path';

// Ensure /public directory exists
const publicDir = path.join(process.cwd(), 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// Copy portrait to /public/prashanth_portrait.jpg
const srcPortrait = path.join(process.cwd(), 'src/assets/images/prashanth_portrait_1786504079687.jpg');
const destPortrait = path.join(publicDir, 'prashanth_portrait.jpg');
if (fs.existsSync(srcPortrait)) {
  fs.copyFileSync(srcPortrait, destPortrait);
  console.log('Copied portrait image to public/prashanth_portrait.jpg');
}

// Generate PDF
const doc = new jsPDF({
  orientation: 'portrait',
  unit: 'mm',
  format: 'a4'
});

const fontColorMain = '#111111';
const accentOrange = '#FF6A2A';
const textGray = '#444444';

// Header
doc.setFont('Helvetica', 'bold');
doc.setFontSize(22);
doc.setTextColor(fontColorMain);
doc.text('PRASHANTH VISHWESHWAR GOUDA', 20, 20);

doc.setFont('Helvetica', 'bold');
doc.setFontSize(11);
doc.setTextColor(accentOrange);
doc.text('Computer Science & Design Undergraduate | Full-Stack & AI Developer', 20, 27);

doc.setFont('Helvetica', 'normal');
doc.setFontSize(9);
doc.setTextColor(textGray);
doc.text('Email: goudaprashanth2204@gmail.com | Phone: +91 8088244539 | Location: Siddapur, Karnataka, India', 20, 33);
doc.text('GitHub: github.com/Prashanth80888 | LinkedIn: linkedin.com/in/prashanth-v-gouda', 20, 38);

// Line divider
doc.setDrawColor(220, 220, 220);
doc.setLineWidth(0.5);
doc.line(20, 42, 190, 42);

let y = 49;

// Summary Section
doc.setFont('Helvetica', 'bold');
doc.setFontSize(12);
doc.setTextColor(fontColorMain);
doc.text('PROFESSIONAL SUMMARY', 20, y);
y += 6;

doc.setFont('Helvetica', 'normal');
doc.setFontSize(9.5);
doc.setTextColor(textGray);
const summaryText = "Computer Science & Design undergraduate (CGPA: 8.80) passionate about building scalable full-stack web applications, intelligent systems using LLMs and computer vision, and high-performance interactive interfaces. Proficient in MERN Stack, Python, SQL, REST APIs, and Machine Learning.";
const splitSummary = doc.splitTextToSize(summaryText, 170);
doc.text(splitSummary, 20, y);
y += splitSummary.length * 5 + 4;

// Education Section
doc.setFont('Helvetica', 'bold');
doc.setFontSize(12);
doc.setTextColor(fontColorMain);
doc.text('EDUCATION', 20, y);
y += 6;

doc.setFont('Helvetica', 'bold');
doc.setFontSize(10);
doc.setTextColor(fontColorMain);
doc.text("Bachelor of Engineering - Computer Science & Design", 20, y);
doc.setFont('Helvetica', 'bold');
doc.setTextColor(accentOrange);
doc.text("2023 - Present | CGPA: 8.80 / 10", 190, y, { align: 'right' });
y += 5;
doc.setFont('Helvetica', 'normal');
doc.setFontSize(9);
doc.setTextColor(textGray);
doc.text("Alva's Institute of Engineering and Technology, Moodbidri, Karnataka", 20, y);
y += 8;

doc.setFont('Helvetica', 'bold');
doc.setFontSize(10);
doc.setTextColor(fontColorMain);
doc.text("Pre-University Course (PUC Science - PCMB)", 20, y);
doc.setFont('Helvetica', 'bold');
doc.setTextColor(accentOrange);
doc.text("2021 - 2023 | 81%", 190, y, { align: 'right' });
y += 5;
doc.setFont('Helvetica', 'normal');
doc.setFontSize(9);
doc.setTextColor(textGray);
doc.text("Government PU College, Nanikatta, Karnataka", 20, y);
y += 10;

// Key Projects Section
doc.setFont('Helvetica', 'bold');
doc.setFontSize(12);
doc.setTextColor(fontColorMain);
doc.text('KEY PROJECTS', 20, y);
y += 6;

const projects = [
  {
    name: "AutoBiz AI - Intelligent Invoice Automation",
    tech: "React, Node.js, Express, MongoDB, Gemini AI, OCR",
    desc: "AI-powered invoice management platform featuring optical character recognition (OCR), automated GST verification, anomaly detection, AI email drafting, and interactive analytics."
  },
  {
    name: "NOCTUA - Night Lab Authorization System",
    tech: "React, Node.js, Express, MongoDB, Tailwind CSS",
    desc: "Multi-tier institutional authorization workflow platform for HOD, AO, and Warden approvals with real-time status tracking, countdown timers, and digital QR passes."
  },
  {
    name: "Credit Card Fraud Detection System",
    tech: "Python, Scikit-Learn, Pandas, NumPy, Machine Learning",
    desc: "Data-driven ML classification and anomaly detection model for identifying fraudulent credit card transactions and suspicious activity."
  },
  {
    name: "VISIONBUS - AI Smart College Transport System (Ongoing)",
    tech: "Python, Computer Vision, React, Node.js",
    desc: "Intelligent transport management solution combining AI facial recognition attendance, route safety monitoring, and emergency alert pipelines."
  }
];

projects.forEach(p => {
  doc.setFont('Helvetica', 'bold');
  doc.setFontSize(10);
  doc.setTextColor(fontColorMain);
  doc.text(p.name, 20, y);
  y += 4.5;
  doc.setFont('Helvetica', 'italic');
  doc.setFontSize(8.5);
  doc.setTextColor(accentOrange);
  doc.text(`Tech Stack: ${p.tech}`, 20, y);
  y += 4.5;
  doc.setFont('Helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(textGray);
  const pDesc = doc.splitTextToSize(p.desc, 170);
  doc.text(pDesc, 20, y);
  y += pDesc.length * 4 + 4;
});

y += 2;

// Skills Section
doc.setFont('Helvetica', 'bold');
doc.setFontSize(12);
doc.setTextColor(fontColorMain);
doc.text('TECHNICAL SKILLS', 20, y);
y += 6;

const skillGroups = [
  { label: "Languages & Core", val: "JavaScript, Python, SQL, C, HTML5, CSS3, Data Structures & Algorithms" },
  { label: "Frontend & UI", val: "React.js, Tailwind CSS, Motion, WebGL / Three.js, Responsive UI/UX" },
  { label: "Backend & Databases", val: "Node.js, Express.js, REST APIs, MongoDB, PostgreSQL" },
  { label: "Cloud, AI & Tools", val: "AWS, Docker, Git, GitHub, Google AI Studio (Gemini API), Postman" }
];

skillGroups.forEach(s => {
  doc.setFont('Helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.setTextColor(fontColorMain);
  doc.text(`${s.label}: `, 20, y);
  const labelWidth = doc.getTextWidth(`${s.label}: `);
  doc.setFont('Helvetica', 'normal');
  doc.setTextColor(textGray);
  doc.text(s.val, 20 + labelWidth, y);
  y += 5;
});

y += 4;

// Certifications & Hackathons
doc.setFont('Helvetica', 'bold');
doc.setFontSize(12);
doc.setTextColor(fontColorMain);
doc.text('CERTIFICATIONS & HACKATHONS', 20, y);
y += 6;

const certs = [
  "NPTEL SWAYAM: Data Structure and Algorithm Design",
  "NPTEL SWAYAM: Introduction to Graphic Design",
  "Infosys Springboard Certification in Software Development",
  "HackerRank SQL Gold Badge",
  "Hackathons: Xypheria National Hackathon (AIET), WebWizard Hackathon, Tackathon 2K25"
];

certs.forEach(c => {
  doc.setFont('Helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(textGray);
  doc.text(`* ${c}`, 22, y);
  y += 4.5;
});

// Output file
const pdfPath = path.join(publicDir, 'Prashanth_Gouda_Resume.pdf');
const pdfBuffer = Buffer.from(doc.output('arraybuffer'));
fs.writeFileSync(pdfPath, pdfBuffer);
console.log('Successfully generated public/Prashanth_Gouda_Resume.pdf');
