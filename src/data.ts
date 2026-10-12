import { TimelineMilestone, SkillItem, ProjectItem, ExperienceItem, AchievementItem } from "./types";

export const TIMELINE_DATA: TimelineMilestone[] = [
  {
    id: "village",
    year: "Early Life",
    title: "The Humble Roots",
    organization: "Rural Village, India",
    description: "Born and raised in a small village, learning the core values of persistence, patience, and curiosity. With limited access to modern digital amenities, curiosity about how things worked began here, sparking an early interest in science, mathematics, and logic.",
    type: "academic",
    icon: "Home",
  },
  {
    id: "gov-school",
    year: "Secondary Education",
    title: "Government Public School",
    organization: "Government School Education",
    description: "Studied at a government school with minimal resources but immense passion. Maintained excellent academic standards and participated in science exhibitions. Taught myself the fundamentals of computing on shared computer labs, turning constraints into driving forces.",
    type: "academic",
    icon: "GraduationCap",
  },
  {
    id: "engineering",
    year: "Undergraduate Study",
    title: "Bachelor of Engineering in Computer Science",
    organization: "VTU Affiliate Engineering College",
    description: "Immersed myself in standard software paradigms, algorithm design, compiler theory, and data structures. Discovered the power of web technologies and developed my first full-stack projects using React, Node.js, and MongoDB, maintaining a high GPA and leading the technical club.",
    type: "academic",
    icon: "Cpu",
    tech: ["C++", "Java", "Python", "Data Structures", "DBMS", "Software Engineering"],
  },
  {
    id: "hackathons",
    year: "Hackathon Era",
    title: "Hackathon Champion & Innovator",
    organization: "National & State Level Hackathons",
    description: "Competed in rapid 24-48 hour hacking marathons, building functional MVPs for critical challenges. Won accolades for building smart routing applications, agricultural prediction modules, and healthcare dispatch systems. Honed rapid prototyping, team leadership, and product presentation skills.",
    type: "hackathon",
    icon: "Trophy",
    tech: ["React", "Express", "Python", "Flask", "Tailwind CSS", "TensorFlow"],
    achievements: ["1st Place State Agri-Tech Hackathon", "Finalist Smart India Hackathon", "Best Innovation Award for Smart Medical Dispatch"],
  },
  {
    id: "ai-projects",
    year: "AI Evolution",
    title: "Advanced AI & Intelligent Systems Engineer",
    organization: "Independent Research & Client Engagements",
    description: "Deepened my expertise in artificial intelligence and agentic workflows. Integrated Large Language Models, customized retrieval-augmented generation (RAG) loops, and deployed smart business agent models using Google AI Studio, Gemini API, and deep neural networks.",
    type: "project",
    icon: "BrainCircuit",
    tech: ["Google AI Studio", "Gemini API", "OpenAI SDK", "LangChain", "Vector Databases", "Python"],
  },
  {
    id: "current-journey",
    year: "Current Journey",
    title: "Full Stack & AI Engineer",
    organization: "Professional Software Engineering",
    description: "Building production-grade distributed applications, high-performance user interfaces, and custom AI agents. Specializing in Node.js, Next.js, and state-of-the-art server-side integrations, aiming to deliver scalable, hyper-performant digital systems.",
    type: "career",
    icon: "Sparkles",
    tech: ["React 19", "Next.js 15", "Express.js", "Docker", "AWS", "TypeScript", "PostgreSQL"],
  }
];

export const SKILLS_DATA: SkillItem[] = [
  // AI category
  { name: "Google AI Studio", level: 95, category: "ai", description: "Prompt engineering, structured outputs, schema optimization, and agent orchestration.", icon: "Sparkles", color: "#00F5FF" },
  { name: "Gemini API", level: 95, category: "ai", description: "Integrating multimodal model pipelines, real-time context streaming, and function calling workflows.", icon: "Brain", color: "#3B82F6" },
  { name: "Python", level: 88, category: "languages", description: "AI workflows, machine learning models, scripting automation, and fast server API development.", icon: "Terminal", color: "#FFD43B" },
  
  // Frontend
  { name: "React 19", level: 94, category: "frontend", description: "Dynamic server components, custom UI rendering, performant hook systems, and concurrent updates.", icon: "Layers", color: "#61DAFB" },
  { name: "Next.js 15", level: 90, category: "frontend", description: "Server-side rendering, routing boundaries, incremental static regeneration, and server actions.", icon: "Globe", color: "#FFFFFF" },
  { name: "Tailwind CSS", level: 98, category: "frontend", description: "Utility-first design systems, custom configuration overrides, responsive design, and animations.", icon: "Palette", color: "#38BDF8" },
  { name: "Framer Motion", level: 92, category: "frontend", description: "Complex hardware-accelerated layouts, orchestrations, and interactive exit-entrance sequences.", icon: "Video", color: "#7C3AED" },
  { name: "TypeScript", level: 93, category: "languages", description: "Strict static typing, complex interface designs, generic utilities, and enterprise-grade code safety.", icon: "Code", color: "#3178C6" },

  // Backend
  { name: "Node.js", level: 91, category: "backend", description: "Asynchronous processing, cluster execution, high-concurrency routing, and custom stream architectures.", icon: "Server", color: "#339933" },
  { name: "Express.js", level: 95, category: "backend", description: "API design, secure middlewares, custom routing trees, and session authentication controllers.", icon: "Cpu", color: "#A3E635" },
  
  // Storage & Infrastructure
  { name: "MongoDB", level: 90, category: "backend", description: "NoSQL schema definitions, high-scale aggregation pipelines, compound indexes, and cloud hosting.", icon: "Database", color: "#47A248" },
  { name: "PostgreSQL", level: 87, category: "backend", description: "Relational modeling, complex SQL joins, transactional security controls, and Drizzle optimization.", icon: "Database", color: "#4169E1" },
  { name: "AWS", level: 80, category: "cloud", description: "Cloud computing architectures, S3 buckets, EC2 virtual instances, and automated serverless lamdas.", icon: "Cloud", color: "#FF9900" },
  { name: "Docker", level: 84, category: "cloud", description: "Containerized environments, multi-stage builds, clean deployment configs, and isolated networking.", icon: "Box", color: "#2496ED" },
  { name: "Git", level: 92, category: "cloud", description: "Branching strategies, multi-developer collaboration, merge-resolution, and GitHub Action CI/CD.", icon: "GitBranch", color: "#F05032" }
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "autobiz-ai",
    title: "AutoBiz AI",
    category: "AI & SaaS",
    tagline: "Autonomous Agentic Platform for Business Workflows",
    description: "An intelligent platform that deploys autonomous AI agents to manage email communications, analyze customer sentiment, and automatically coordinate calendar bookings. It features a stunning visual dashboard showing agent decision trees in real time.",
    techStack: ["Google AI Studio", "Next.js", "Express", "MongoDB", "Nodemailer", "Tailwind CSS"],
    imageUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop",
    challenges: "Handling context-length limitations and infinite execution loops in recursive agent decision chains, and securely matching database states with fast-moving real-time inputs.",
    architecture: "An Express server coordinates a background task-queue containing LLM agents. Client connects via WebSockets to stream visual traces of the agent's prompt logs, tool-calls, and final output sequences.",
    features: [
      "Autonomous prompt agent loops with Gemini Model API integration",
      "Dynamic visual decision trees representing agent thought processes",
      "Robust calendar syncing and automatic client auto-reply routing",
      "Comprehensive sentiment analytics dashboard"
    ],
    timeline: "3 Months (Q1 2026)",
    githubUrl: "https://github.com/prashanth-gouda/autobiz-ai"
  },
  {
    id: "noctua",
    title: "NOCTUA",
    category: "Security & Monitoring",
    tagline: "Smart Real-time Network Telemetry & Intrusion Alert Core",
    description: "A futuristic cybersecurity telemetry platform tracking raw request signatures, visualizing threat vectors on a 3D Earth, and providing smart threat reports generated by embedded AI models.",
    techStack: ["React 19", "Three.js", "Express", "PostgreSQL", "Tailwind v4", "Docker"],
    imageUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&auto=format&fit=crop",
    challenges: "Processing and rendering 10,000 active telemetry streams simultaneously inside the browser canvas without suffering frames-per-second performance degradation.",
    architecture: "Telemetry logs are aggregated inside an Express stream. Raw payloads are hashed, analyzed via a local security check, and piped to a highly-optimized Three.js canvas buffer using custom shaders.",
    features: [
      "Interactive 3D threat globe tracking packet vectors geographically",
      "Instant security classification and automated anomaly detection",
      "AI-synthesized security vulnerability mitigation guides on the fly",
      "Complete export system for server audit compatibility"
    ],
    timeline: "4 Months (Q4 2025)",
    githubUrl: "https://github.com/prashanth-gouda/noctua"
  },
  {
    id: "visionbus",
    title: "VISIONBUS",
    category: "IoT & Transport",
    tagline: "Intelligent Public Transit Tracker & IoT Visualizer",
    description: "An IoT transport grid tracker analyzing passenger density, bus coordinates, and weather interferences. Deploys custom optimization models to re-route buses dynamically, cutting commuter wait times.",
    techStack: ["React", "Node.js", "Express", "PostgreSQL", "Google Maps Platform", "Leaflet"],
    imageUrl: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=1200&auto=format&fit=crop",
    challenges: "Syncing asynchronous transport delays from old IoT sensors with inconsistent packet transmissions and correcting map coordinate drifting.",
    architecture: "IoT modules push coordinate streams to a lightweight Node message broker. The broker updates the Postgres store and broadcasts real-time bus locations to map layers using custom debounce controllers.",
    features: [
      "Real-time geographic live mapping showing commuter density spikes",
      "Interactive routing panels with predictive arrival algorithms",
      "Offline tracker buffering utilizing standard client service-workers",
      "Comprehensive historic reporting panels with interactive charts"
    ],
    timeline: "2 Months (Q3 2025)",
    githubUrl: "https://github.com/prashanth-gouda/visionbus"
  },
  {
    id: "portfolio",
    title: "Futuristic Developer Portfolio",
    category: "Creative Dev",
    tagline: "Ultra-Premium 3D Creative Engineering Hub",
    description: "The digital portfolio you are currently exploring. Combining advanced design structures, custom 3D simulations, scroll-tied visual cameras, interactive code vaults, and a live tracking Express backend.",
    techStack: ["React 19", "Express", "Three.js", "Tailwind CSS", "Framer Motion", "Nodemailer"],
    imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop",
    challenges: "Balancing high-density visual content, rich 3D rendering loops, and fluid animations to achieve an flawless, lag-free user experience on lower-tier mobile hardware.",
    architecture: "React components trigger modular 3D canvas render loops. The backend serves static assets, logs visitor telemetry securely, hosts the contact API, and provides digital file verification streams.",
    features: [
      "Breathtaking particle introduction and text morphing animations",
      "An interactive 3D particle universe reacting dynamically to custom mouse gestures",
      "Digital resume lockbox with incremental counters and file delivery",
      "Fully integrated Express logging, analytics, and contact auto-replies"
    ],
    timeline: "Ongoing",
    githubUrl: "https://github.com/prashanth-gouda/portfolio"
  }
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: "exp-1",
    role: "Full Stack & AI Developer",
    company: "Freelance / Innovative Solutions",
    location: "Remote / Bengaluru, India",
    period: "2024 - Present",
    description: [
      "Architected enterprise-level, production-ready SaaS dashboards with highly optimized API routes.",
      "Integrated Gemini API and Google AI Studio into customer relationship databases to automate communications.",
      "Designed elegant visual identities, interactive websites, and responsive apps for diverse clients.",
      "Maintained close coordination with backend modules to improve latency by 35% on heavily-queried database indexes."
    ],
    skills: ["React", "Express.js", "TypeScript", "Google AI Studio", "Docker", "MongoDB", "PostgreSQL"],
    highlight: "Integrated custom AI models to save enterprise clients up to 20 hours of manual cataloging weekly."
  },
  {
    id: "exp-2",
    role: "Full Stack Engineering Intern",
    company: "Tech Mahindra / Academic Project Affiliate",
    location: "Bengaluru, India",
    period: "2023 - 2024",
    description: [
      "Contributed to database optimization and backend API routes under standard MERN workflows.",
      "Wrote comprehensive unit tests and automated scripts for API testing, improving coverage by 20%.",
      "Collaborated with UI/UX engineers to implement strict pixel-perfect mockups and fluid layouts.",
      "Migrated multiple legacy modules to standardized TypeScript, resolving runtime inconsistencies."
    ],
    skills: ["React", "Node.js", "MongoDB", "Express", "Git", "Jest", "TypeScript"],
    highlight: "Helped refactor legacy dashboards to modern React, reducing application bundle weight by 15%."
  }
];

export const ACHIEVEMENTS_DATA: AchievementItem[] = [
  {
    id: "ach-1",
    title: "1st Place Agri-Tech Hackathon Champion",
    issuer: "State University Innovation Cell",
    date: "2024",
    category: "hackathon",
    description: "Led a team of four to build 'KrishiSutra' - a real-time smart soil-analysis and automated drip irrigation controller powered by a localized machine learning model.",
    metric: "Winner (out of 120 teams)"
  },
  {
    id: "ach-2",
    title: "Google Cloud Skill Badge - AI & ML",
    issuer: "Google Cloud",
    date: "2025",
    category: "certificate",
    description: "Certified in building and deploying generative AI models on Google Cloud, prompt optimization, and integrating Vertex AI pipelines.",
    metric: "Credentialed Badge"
  },
  {
    id: "ach-3",
    title: "LeetCode Competitive Solving Milestones",
    issuer: "LeetCode",
    date: "Ongoing",
    category: "coding-platform",
    description: "Solved over 400 algorithmic problems across Dynamic Programming, Graph Theory, and Tree Traversal. Actively participating in weekly algorithmic contests.",
    metric: "400+ Solved (Top 12%)"
  },
  {
    id: "ach-4",
    title: "CodeChef Division 2 Contender",
    issuer: "CodeChef",
    date: "Ongoing",
    category: "coding-platform",
    description: "Maintained a strong competitive rating in monthly CodeChef Cook-Offs and Lunchtimes, demonstrating analytical efficiency and speedy debugging under pressure.",
    metric: "3-Star Rating (Max 1680)"
  }
];
