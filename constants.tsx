
import { Experience, Project, Skill } from './types';

export const PERSONAL_INFO = {
  name: "Balasubramanian",
  role: "Full Stack Developer",
  experience_years: 3.7,
  location: "India",
  email: "balasubramanian0819@gmail.com",
  phone: "8012448219",
  github: "https://github.com",
  linkedin: "https://www.linkedin.com/in/balasubramanian-c-79a110263",
  instagram: "https://www.instagram.com/starbala_official/",
  bio: "Passionate Full Stack Developer with 3.7 years of industry experience building scalable web applications. Expert in modern JavaScript frameworks, Azure cloud development, and building high-performance AI-driven systems. I specialize in turning complex requirements into elegant, user-centric solutions."
};

export const EXPERIENCES: Experience[] = [
  {
    company: "Innovate AI Lab",
    role: "Lead Chatbot Developer",
    period: "2024 - 2026",
    description: [
      "Designed and implemented production-grade AI Chat Bots using LLMs and Vector Databases (Pinecone/Milvus).",
      "Integrated RAG (Retrieval-Augmented Generation) architectures to improve response accuracy by 45%.",
      "Built custom middleware for seamless chatbot integration across web and mobile platforms."
    ],
    technologies: ["OpenAI API", "LangChain", "Azure", "Node.js", "Python", "Vector DBs"]
  },
  {
    company: "TechNova Solutions",
    role: "Senior Full Stack Developer",
    period: "2023 - 2024",
    description: [
      "Architected and deployed enterprise-grade web applications using React and Node.js.",
      "Optimized cloud infrastructure on Microsoft Azure, implementing auto-scaling and CI/CD pipelines.",
      "Mentored junior developers and implemented standardized code review processes."
    ],
    technologies: ["React", "Node.js", "Azure", "PostgreSQL", "Docker", "TypeScript"]
  },
  {
    company: "Digital Stream Inc.",
    role: "Full Stack Developer",
    period: "2022 - 2023",
    description: [
      "Built responsive user interfaces for high-traffic e-commerce platforms.",
      "Developed RESTful and GraphQL APIs to support mobile and web clients.",
      "Improved site performance metrics by 30% through advanced caching strategies."
    ],
    technologies: ["Next.js", "Express", "MongoDB", "Redis", "Tailwind CSS"]
  }
];

export const SKILLS: Skill[] = [
  // Frontend
  { name: "React / Next.js", category: "Frontend", level: 95, description: "Expertise in SSR, SSG, and state management (Redux/Zustand)." },
  { name: "TypeScript", category: "Frontend", level: 92, description: "Building type-safe applications with advanced generic types." },
  { name: "JavaScript (ES6+)", category: "Frontend", level: 95, description: "Deep understanding of core concepts, closures, and async patterns." },
  { name: "HTML5 / CSS3", category: "Frontend", level: 98, description: "Semantic markup, flexbox/grid layouts, and responsive design." },
  { name: "Tailwind CSS", category: "Frontend", level: 95, description: "Designing modern, responsive layouts with utility-first CSS." },
  { name: "Bootstrap", category: "Frontend", level: 90, description: "Rapid prototyping and responsive UI development." },
  { name: "Redux / Zustand", category: "Frontend", level: 88, description: "Managing complex global state and asynchronous data flows." },
  
  // Backend
  { name: "Node.js / Express", category: "Backend", level: 90, description: "Developing robust RESTful and real-time APIs using Socket.io." },
  { name: "Python / FastAPI", category: "Backend", level: 82, description: "Creating fast, asynchronous APIs for AI model serving." },
  { name: "PHP", category: "Backend", level: 80, description: "Server-side scripting for dynamic web applications." },
  { name: "AI Agents / RAG", category: "Backend", level: 85, description: "Building intelligent agents with LangChain and vector embeddings." },
  
  // Database
  { name: "PostgreSQL", category: "Database", level: 85, description: "Advanced relational modeling, indexing, and complex queries." },
  { name: "MySQL", category: "Database", level: 85, description: "Relational database management and optimization." },
  { name: "MongoDB / Cosmos DB", category: "Database", level: 88, description: "NoSQL document stores for high-scalability on Azure." },
  { name: "Redis", category: "Database", level: 80, description: "In-memory data structures for caching and session management." },
  
  // DevOps & Tools
  { name: "Microsoft Azure", category: "DevOps", level: 82, description: "Cloud orchestration using App Service, Azure Functions, and Blob Storage." },
  { name: "Vercel", category: "DevOps", level: 90, description: "Automated deployments and hosting for frontend applications." },
  { name: "Docker / K8s", category: "DevOps", level: 80, description: "Containerizing applications for consistent Azure Kubernetes Service (AKS) deployments." },
  { name: "Git / CI/CD", category: "Tools", level: 90, description: "Mastering version control and Azure DevOps pipelines." }
];

export const PROJECTS: Project[] = [
  {
    title: "Star AI English Learning",
    description: "An AI-powered tutor for mastering the English language through conversation.",
    longDescription: "Star AI leverages advanced natural language processing to provide a personalized English learning experience. Users can practice speaking, receive grammar corrections in real-time, and follow adaptive lesson plans generated by AI.",
    features: ["Voice-to-Text Practice", "Grammar Correction AI", "Personalized Vocabulary Paths", "Real-time Conversation Simulation"],
    tags: ["React", "OpenAI", "EdTech"],
    link: "https://star-learning.vercel.app/",
    image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=1200&auto=format&fit=crop"
  },
  {
    title: "Rent Management",
    description: "End-to-end property rental management system.",
    longDescription: "A sophisticated property management portal that handles property listings, automated contract generation, and tenant-landlord communication.",
    features: ["Automated Lease Generation", "Tenant Screening Workflow", "Maintenance Request Tracking", "Integrated Payment Gateway"],
    tags: ["React", "Azure", "RealEstate"],
    link: "https://rent-website-sigma.vercel.app/",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1200&auto=format&fit=crop"
  },
  {
    title: "Samskritasurabhi",
    description: "A comprehensive e-learning platform dedicated to Sanskrit education.",
    longDescription: "Samskritasurabhi is a state-of-the-art learning management system designed to bring the ancient language of Sanskrit to a modern audience. It features interactive course modules, real-time quizzes, and progress tracking for thousands of active students.",
    features: ["Interactive Course Modules", "Real-time Quiz Engine", "Progress Analytics Dashboard", "Student Forum", "Payment Gateway Integration"],
    tags: ["React", "Node.js", "Education"],
    link: "https://www.samskritasurabhi.com/",
    image: "https://images.unsplash.com/photo-1544652478-6653e09f18a2?q=80&w=1200&auto=format&fit=crop"
  },
  {
    title: "Rezingo",
    description: "A modern wellness and lifestyle platform for holistic health.",
    longDescription: "Rezingo focuses on personalized wellness plans. Built with a high-performance frontend to ensure smooth user experiences while navigating complex health data visualizations.",
    features: ["Personalized Health Plans", "Gamified Progress Tracking", "Social Community Integration", "Mobile-first Design"],
    tags: ["Next.js", "TypeScript", "HealthTech"],
    link: "https://www.rezingo.com/",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1200&auto=format&fit=crop"
  },
  {
    title: "Election App",
    description: "Secure and transparent election tracking application.",
    longDescription: "Built for speed and accuracy during high-stakes events. It aggregates data from multiple polling stations and visualizes them instantly using real-time websocket connections.",
    features: ["Real-time Data Sync", "Dynamic Live Charts", "Secure Admin Controls", "Anomaly Detection Alerts"],
    tags: ["Go", "Socket.io", "Analytics"],
    link: "https://rhythm-final.vercel.app",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop"
  },
  {
    title: "Forex Platform",
    description: "High-performance platform for foreign exchange data and brokerage.",
    longDescription: "A specialized financial platform serving millisecond-accurate currency data. Designed to handle 10k+ requests per second with ultra-low latency.",
    features: ["Sub-millisecond Latency", "Rate Limiting & Tiered Access", "Websocket Live Streaming", "Detailed Historical Logs"],
    tags: ["Node.js", "Redis", "FinTech"],
    link: "https://fxbrokerwebsite.vercel.app/",
    image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=1200&auto=format&fit=crop"
  }
];
