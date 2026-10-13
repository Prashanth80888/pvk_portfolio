import { Project, SkillCard, ExperienceItem, Certification, Hackathon } from '../types';

import portraitImg from '../assets/images/prashanth_portrait_1786504079687.png';
import autobizImg from '../assets/images/autobiz_preview_1786504106946.png';
import noctuaImg from '../assets/images/noctua_preview_1786504123672.png';
import fraudImg from '../assets/images/fraud_preview_1786504142216.png';
import aakaarImg from '../assets/images/aakaar_preview_1786504165385.jpg';

export const personalInfo = {
  name: "PRASHANTH GOUDA",
  fullName: "Prashanth Vishweshwar Gouda",
  title: "Computer Science & Design Undergraduate",
  roles: [
    "Full-Stack Developer",
    "React Developer",
    "Node.js Developer",
    "AI/ML Enthusiast",
    "Creative Developer"
  ],
  location: "Siddapur, Uttara Kannada, Karnataka, India",
  email: "goudaprashanth2204@gmail.com",
  phone: "+91 8088244539",
  github: "https://github.com/Prashanth80888",
  linkedin: "https://linkedin.com/in/prashanth-v-gouda",
  portrait: portraitImg,
  education: [
    {
      degree: "Bachelor of Engineering – Computer Science & Design",
      institution: "Alva’s Institute of Engineering and Technology, Karnataka",
      period: "2023 – Present",
      score: "CGPA: 8.80 / 10"
    },
    {
      degree: "Science (PUC)",
      institution: "Government PU College, Nanikatta",
      period: "2021 – 2023",
      score: "81%"
    }
  ],
  summary: "Computer Science & Design undergraduate passionate about building scalable web applications, intelligent systems, and visually engaging digital experiences."
};

export const projectsData: Project[] = [
  {
    id: "autobiz-ai",
    number: "01",
    title: "AutoBiz AI",
    subtitle: "Intelligent Invoice Intelligence System",
    description: "AI-powered invoice automation platform using OCR, Google Gemini AI, React.js, Node.js, Express.js and MongoDB.",
    longDescription: "AutoBiz AI simplifies invoice processing for modern businesses. By leveraging optical character recognition (OCR) and Google Gemini AI, it automatically extracts unstructured financial details from invoices, performs GST verification, detects anomalies or fraudulent patterns, generates instant AI email drafts, and delivers real-time financial analytics.",
    features: [
      "Automated OCR & Gemini AI Invoice Data Extraction",
      "GST Number & Tax Compliance Verification",
      "Fraud & Anomaly Pattern Detection",
      "AI-Generated Vendor Communication Emails",
      "Interactive Financial Analytics Dashboard",
      "Integrated Gemini Support Chatbot"
    ],
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Google Gemini AI", "OCR"],
    image: autobizImg,
    accentColor: "#FF6A2A",
    githubUrl: "https://github.com/Prashanth80888",
    isComplete: true
  },
  {
    id: "noctua",
    number: "02",
    title: "NOCTUA",
    subtitle: "Advanced Night Lab Authorization System",
    description: "Secure role-based authorization system with HOD, AO, and Warden approval workflow.",
    longDescription: "NOCTUA is a streamlined authorization platform designed for academic institutions to manage night lab permits. It automates approval flows across Head of Department (HOD), Administrative Officer (AO), and Warden roles with countdown tracking, real-time status badges, and secure audit logging.",
    features: [
      "Role-Based Authorization (Student, HOD, AO, Warden)",
      "Multi-Tier Approval Workflow Engine",
      "Real-Time Status & Activity Dashboard",
      "Automated Time Countdown & Expiry Tracking",
      "Backend REST API Integration with Express",
      "Digital Pass Generation with Verification QR"
    ],
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    image: noctuaImg,
    accentColor: "#4D8DFF",
    githubUrl: "https://github.com/Prashanth80888",
    isComplete: true
  },
  {
    id: "credit-card-fraud",
    number: "03",
    title: "Credit Card Fraud Detection",
    subtitle: "Machine Learning Fraud Detection System",
    description: "Data-driven Machine Learning system designed to identify fraudulent transactions and anomalous credit card patterns.",
    longDescription: "A comprehensive Machine Learning project focused on transaction analysis, anomaly detection, and fraud classification. Built using Python data science libraries to evaluate transaction features, identify suspicious behavior, and output confidence classifications.",
    features: [
      "Real-Time Transaction Feature Preprocessing",
      "Statistical Anomaly Detection Algorithms",
      "Binary Fraud Classification Modeling",
      "Data Visualizations & Performance Metrics",
      "API Interface for Live Transaction Scoring"
    ],
    technologies: ["Python", "Scikit-Learn", "Pandas", "NumPy", "Machine Learning"],
    image: fraudImg,
    accentColor: "#76DAD5",
    githubUrl: "https://github.com/Prashanth80888",
    isComplete: true
  },
  {
    id: "aakaar-studiox",
    number: "04",
    title: "Aakaar StudioX",
    subtitle: "Creative Studio Website",
    description: "Modern, highly responsive studio agency showcase website built with expressive typography and polished UI interactions.",
    longDescription: "Aakaar StudioX showcases creative design and development capabilities through modern web design, smooth layout animations, responsive interfaces, and an award-winning creative presentation style.",
    features: [
      "Modern Minimalist Visual Language",
      "Fluid Layout & Responsive Design",
      "Custom Micro-Interactions & Hover Effects",
      "Creative Portfolio Showcase Grid",
      "Optimized Performance & Fast Loading"
    ],
    technologies: ["React.js", "Tailwind CSS", "JavaScript", "HTML5", "CSS3"],
    image: aakaarImg,
    accentColor: "#B98CF2",
    githubUrl: "https://github.com/Prashanth80888",
    isComplete: true
  },
  {
    id: "portfolio-website",
    number: "05",
    title: "Personal Portfolio",
    subtitle: "Interactive 3D Developer Portfolio",
    description: "An interactive, editorial developer portfolio featuring floating 3D geometry, custom cursor, and dynamic motion.",
    longDescription: "Built to reflect Prashanth Gouda's identity as a Computer Science & Design undergraduate and full-stack developer. Combines WebGL 3D elements, oversized typography, interactive flip cards, and an award-winning agency aesthetic.",
    features: [
      "Real-time Three.js WebGL Floating 3D Objects",
      "Editorial Typography Scale with Syne & Instrument Serif",
      "Interactive 3D Flip Stack Cards for Tech Skills",
      "Custom Cursor with Dynamic Hover Labels",
      "Responsive Layout across All Screen Breakpoints"
    ],
    technologies: ["React.js", "Three.js", "Tailwind CSS", "Motion", "TypeScript"],
    image: portraitImg,
    accentColor: "#C7E95A",
    githubUrl: "https://github.com/Prashanth80888",
    isComplete: true
  }
];

export const skillsData: SkillCard[] = [
  {
    name: "JavaScript",
    category: "frontend",
    description: "Core Web Language",
    usageDetails: "Building dynamic user interfaces, asynchronous state management, and full-stack API integration.",
    color: "#F4D56A",
    iconName: "Code"
  },
  {
    name: "Python",
    category: "ai",
    description: "AI & Machine Learning",
    usageDetails: "Data manipulation, fraud detection machine learning models, scripting, and backend AI integration.",
    color: "#4D8DFF",
    iconName: "Terminal"
  },
  {
    name: "SQL",
    category: "database",
    description: "Relational Queries",
    usageDetails: "Designing relational database schemas, complex joins, aggregation, and query optimization.",
    color: "#74B8F7",
    iconName: "Database"
  },
  {
    name: "React.js",
    category: "frontend",
    description: "UI Framework",
    usageDetails: "Creating modular component trees, custom hooks, smooth transitions, and responsive web applications.",
    color: "#76DAD5",
    iconName: "Atom"
  },
  {
    name: "Node.js",
    category: "backend",
    description: "Server Runtime",
    usageDetails: "Building scalable backend services, asynchronous event loops, and RESTful web microservices.",
    color: "#C7E95A",
    iconName: "Server"
  },
  {
    name: "Express.js",
    category: "backend",
    description: "Backend Web Framework",
    usageDetails: "Routing, middleware authentication pipelines, JSON payload handling, and API security.",
    color: "#111111",
    iconName: "Cpu"
  },
  {
    name: "Tailwind CSS",
    category: "frontend",
    description: "Utility-First Styling",
    usageDetails: "Crafting custom editorial layouts, responsive grid/flex systems, and pixel-perfect design interfaces.",
    color: "#76DAD5",
    iconName: "Palette"
  },
  {
    name: "MongoDB",
    category: "database",
    description: "NoSQL Database",
    usageDetails: "Designing document schemas, aggregation pipelines, and flexible database persistence for MERN apps.",
    color: "#C7E95A",
    iconName: "HardDrive"
  },
  {
    name: "PostgreSQL",
    category: "database",
    description: "Relational Database",
    usageDetails: "ACID-compliant data modeling, relational indexing, and structured enterprise backend storage.",
    color: "#4D8DFF",
    iconName: "Layers"
  },
  {
    name: "AWS",
    category: "cloud",
    description: "Cloud Infrastructure",
    usageDetails: "Cloud deployment, EC2/S3 asset hosting, serverless functions, and basic cloud environment configuration.",
    color: "#FF6A2A",
    iconName: "Cloud"
  },
  {
    name: "Docker",
    category: "cloud",
    description: "Containerization",
    usageDetails: "Packaging full-stack applications into container images for consistent local and production deployment.",
    color: "#74B8F7",
    iconName: "Box"
  },
  {
    name: "Git & GitHub",
    category: "tools",
    description: "Version Control",
    usageDetails: "Branching strategies, collaborative workflows, commit hygiene, and repository hosting.",
    color: "#FF5B3D",
    iconName: "GitBranch"
  },
  {
    name: "Google AI Studio",
    category: "ai",
    description: "Generative AI Platform",
    usageDetails: "Prompt engineering, Gemini API integration, multi-modal feature construction, and AI prototyping.",
    color: "#B98CF2",
    iconName: "Sparkles"
  },
  {
    name: "Postman & REST APIs",
    category: "tools",
    description: "API Testing & Architecture",
    usageDetails: "Designing RESTful endpoints, testing payloads, request validation, and documentation.",
    color: "#FF6A2A",
    iconName: "Send"
  },
  {
    name: "Data Structures & Algorithms",
    category: "core",
    description: "Problem Solving",
    usageDetails: "Analyzing time/space complexity, optimizing code execution, and implementing efficient algorithms.",
    color: "#B98CF2",
    iconName: "Binary"
  },
  {
    name: "UI/UX & Web Design",
    category: "frontend",
    description: "Creative Design",
    usageDetails: "Applying visual hierarchy, editorial layout composition, color theory, and high-end interaction design.",
    color: "#F4D56A",
    iconName: "Layout"
  }
];

export const experienceItems: ExperienceItem[] = [
  {
    number: "01",
    title: "Full-Stack Development",
    description: "Building responsive frontend experiences paired with robust Node.js/Express REST APIs and database layers.",
    highlights: ["MERN Architecture", "Component Modularization", "REST API Design"],
    category: "Development"
  },
  {
    number: "02",
    title: "AI & Machine Learning",
    description: "Integrating LLMs like Google Gemini AI and training machine learning classification models for real-world tasks.",
    highlights: ["Gemini API Integration", "Scikit-Learn Classification", "OCR & NLP Automation"],
    category: "Intelligence"
  },
  {
    number: "03",
    title: "Cloud & DevOps",
    description: "Understanding application containerization, server deployment, and cloud infrastructure management.",
    highlights: ["Docker Containers", "AWS Basics", "Environment Security"],
    category: "Infrastructure"
  },
  {
    number: "04",
    title: "Creative Web Development",
    description: "Designing award-winning editorial layouts with 3D elements, fluid typography, and thoughtful motion.",
    highlights: ["Three.js WebGL", "Tailwind CSS", "Interaction Motion"],
    category: "Design"
  },
  {
    number: "05",
    title: "Data Structures & Algorithms",
    description: "Strong theoretical and practical foundation in problem-solving, computer science fundamentals, and optimization.",
    highlights: ["NPTEL Certified", "HackerRank SQL", "Algorithm Design"],
    category: "Core CS"
  },
  {
    number: "06",
    title: "Hackathons & Technical Events",
    description: "Active participant in national level hackathons, technical challenges, and collaborative coding sprints.",
    highlights: ["Xypheria Hackathon", "WebWizard Hackathon", "Tackathon 2K25"],
    category: "Community"
  }
];

export const hackathonsData: Hackathon[] = [
  {
    title: "Xypheria National Level Hackathon",
    organizer: "AIET (Alva's Institute of Engineering & Technology)",
    year: "2024",
    description: "Collaborative national hackathon competing in rapid web application building and real-world problem solving."
  },
  {
    title: "WebWizard Hackathon",
    organizer: "Technical Student Chapter",
    year: "2024",
    description: "Front-end and full-stack competition emphasizing responsive design, performance, and creative UI engineering."
  },
  {
    title: "Tackathon 2K25",
    organizer: "Inter-College Tech Fest",
    year: "2025",
    description: "Intensive 24-hour hackathon developing innovative AI/ML and full-stack software solutions."
  }
];

export const currentWork = {
  title: "VISIONBUS",
  subtitle: "AI-Powered Smart College Bus Safety and Attendance System",
  status: "Currently Working On",
  description: "An ongoing intelligent safety platform for college transport. Combines AI computer vision, real-time student attendance tracking, route monitoring, and emergency alert systems."
};

export const certificationsData: Certification[] = [
  {
    title: "Data Structure and Algorithm Design",
    issuer: "NPTEL SWAYAM",
    type: "National Certification",
    color: "#FF6A2A"
  },
  {
    title: "Introduction to Graphic Design",
    issuer: "NPTEL SWAYAM",
    type: "Creative Design",
    color: "#B98CF2"
  },
  {
    title: "Infosys Springboard Certification",
    issuer: "Infosys Springboard",
    type: "Software Development",
    color: "#4D8DFF"
  },
  {
    title: "SQL Gold Badge / Certification",
    issuer: "HackerRank",
    type: "Database Management",
    color: "#C7E95A"
  }
];

export const whatIBuild = [
  {
    number: "01",
    title: "Full-Stack Web Applications",
    description: "End-to-end web products engineered with modern React frontends, robust Node/Express backends, and reliable data persistence.",
    accentColor: "#FF6A2A"
  },
  {
    number: "02",
    title: "AI-Powered Applications",
    description: "Intelligent tools integrating multi-modal Gemini AI capabilities, OCR processing, automated text generation, and smart assistants.",
    accentColor: "#B98CF2"
  },
  {
    number: "03",
    title: "REST APIs & Backend Systems",
    description: "Clean, documented RESTful services featuring secure role-based authorization, request validation, and database operations.",
    accentColor: "#4D8DFF"
  },
  {
    number: "04",
    title: "Machine Learning Solutions",
    description: "Data-driven classification models, anomaly detection systems, and prediction pipelines built with Python and Scikit-Learn.",
    accentColor: "#76DAD5"
  },
  {
    number: "05",
    title: "Responsive Frontend Experiences",
    description: "Visually captivating editorial interfaces with 3D interactions, smooth scrolling, and accessible mobile layouts.",
    accentColor: "#C7E95A"
  },
  {
    number: "06",
    title: "Cloud-Ready Applications",
    description: "Applications packaged for cloud containerization with Docker and deployment across modern hosting infrastructure.",
    accentColor: "#F4D56A"
  }
];

export const beliefsData = [
  {
    quote: "Software engineering is the bridge between creative human imagination and mathematical reality.",
    author: "Prashanth Gouda",
    role: "Core Philosophy"
  },
  {
    quote: "Building useful technology means prioritizing speed, clarity, legibility, and real user value over unnecessary clutter.",
    author: "Design & Code Alignment",
    role: "Development Principles"
  },
  {
    quote: "Continuous curiosity, daily experimentation, and hands-on project creation are the best ways to grow.",
    author: "Learning Mindset",
    role: "Academic & Professional Journey"
  }
];
