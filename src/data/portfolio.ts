// ============================================================
// Portfolio Data - Trading-Themed Developer Portfolio
// ============================================================

export interface Stat {
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
  change: number; // percentage change (positive = green, negative = red)
  icon: string;
}

export interface Skill {
  name: string;
  proficiency: number; // 0-100
  category: "frontend" | "backend" | "tools" | "concepts";
}

export interface SkillGrowth {
  month: string;
  frontend: number;
  backend: number;
  tools: number;
}

export interface Project {
  id: string;
  name: string;
  ticker: string; // stock ticker style
  description: string;
  techStack: string[];
  githubLink: string;
  demoLink?: string;
  metrics: {
    complexity: number; // 1-100
    stars: number;
    linesOfCode: number;
    completionDate: string;
  };
  priceHistory: { date: string; value: number }[]; // mock growth chart
  change: number; // percentage
  status: "active" | "completed" | "in-development";
}

export interface Experience {
  id: string;
  title: string;
  organization: string;
  duration: string;
  description: string;
  type: "internship" | "hackathon" | "certification" | "open-source";
  metrics: { label: string; value: number; suffix?: string }[];
}

export interface GithubStats {
  totalCommits: number;
  totalRepos: number;
  totalStars: number;
  followers: number;
  topLanguages: { name: string; percentage: number; color: string }[];
  contributionData: { week: string; contributions: number }[];
  monthlyCommits: { month: string; commits: number }[];
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

// ============================================================
// Developer Stats (KPI Cards)
// ============================================================
export const developerStats: Stat[] = [
  {
    label: "Total Projects",
    value: 24,
    change: 12.5,
    icon: "folder",
  },
  {
    label: "GitHub Commits",
    value: 1847,
    change: 8.3,
    icon: "git-commit",
  },
  {
    label: "Technologies",
    value: 18,
    change: 15.0,
    icon: "cpu",
  },
  {
    label: "Years Coding",
    value: 4,
    suffix: "+",
    change: 25.0,
    icon: "clock",
  },
];

// ============================================================
// Skills Data
// ============================================================
export const skills: Skill[] = [
  // Frontend
  { name: "JavaScript", proficiency: 92, category: "frontend" },
  { name: "TypeScript", proficiency: 85, category: "frontend" },
  { name: "React", proficiency: 90, category: "frontend" },
  { name: "Next.js", proficiency: 82, category: "frontend" },
  { name: "HTML/CSS", proficiency: 95, category: "frontend" },
  { name: "Tailwind CSS", proficiency: 88, category: "frontend" },
  // Backend
  { name: "Python", proficiency: 87, category: "backend" },
  { name: "Node.js", proficiency: 80, category: "backend" },
  { name: "Express.js", proficiency: 75, category: "backend" },
  { name: "MongoDB", proficiency: 70, category: "backend" },
  { name: "PostgreSQL", proficiency: 68, category: "backend" },
  { name: "REST APIs", proficiency: 85, category: "backend" },
  // Tools
  { name: "Git", proficiency: 90, category: "tools" },
  { name: "Docker", proficiency: 65, category: "tools" },
  { name: "AWS", proficiency: 55, category: "tools" },
  { name: "Linux", proficiency: 72, category: "tools" },
  // Concepts
  { name: "Data Structures", proficiency: 88, category: "concepts" },
  { name: "System Design", proficiency: 72, category: "concepts" },
  { name: "Algorithms", proficiency: 85, category: "concepts" },
  { name: "OOP", proficiency: 80, category: "concepts" },
];

export const skillGrowthData: SkillGrowth[] = [
  { month: "Jan", frontend: 65, backend: 40, tools: 30 },
  { month: "Feb", frontend: 68, backend: 42, tools: 32 },
  { month: "Mar", frontend: 72, backend: 48, tools: 35 },
  { month: "Apr", frontend: 75, backend: 52, tools: 40 },
  { month: "May", frontend: 78, backend: 58, tools: 45 },
  { month: "Jun", frontend: 80, backend: 62, tools: 48 },
  { month: "Jul", frontend: 83, backend: 65, tools: 52 },
  { month: "Aug", frontend: 85, backend: 70, tools: 55 },
  { month: "Sep", frontend: 87, backend: 73, tools: 58 },
  { month: "Oct", frontend: 89, backend: 76, tools: 62 },
  { month: "Nov", frontend: 91, backend: 79, tools: 65 },
  { month: "Dec", frontend: 93, backend: 82, tools: 68 },
];

// Radar chart data for skills overview
export const radarSkillData = [
  { subject: "Frontend", A: 90, fullMark: 100 },
  { subject: "Backend", A: 75, fullMark: 100 },
  { subject: "DevOps", A: 60, fullMark: 100 },
  { subject: "DSA", A: 85, fullMark: 100 },
  { subject: "System Design", A: 72, fullMark: 100 },
  { subject: "Databases", A: 70, fullMark: 100 },
];

// ============================================================
// Projects Data
// ============================================================
export const projects: Project[] = [
  {
    id: "1",
    name: "E-Commerce Platform",
    ticker: "ECOM",
    description:
      "Full-stack e-commerce platform with payment integration, admin dashboard, and real-time inventory management.",
    techStack: ["React", "Node.js", "MongoDB", "Stripe"],
    githubLink: "https://github.com/username/ecommerce-platform",
    demoLink: "https://ecom-demo.vercel.app",
    metrics: {
      complexity: 85,
      stars: 48,
      linesOfCode: 12400,
      completionDate: "2025-08",
    },
    priceHistory: [
      { date: "W1", value: 20 },
      { date: "W2", value: 35 },
      { date: "W3", value: 30 },
      { date: "W4", value: 45 },
      { date: "W5", value: 55 },
      { date: "W6", value: 50 },
      { date: "W7", value: 65 },
      { date: "W8", value: 85 },
    ],
    change: 24.5,
    status: "completed",
  },
  {
    id: "2",
    name: "AI Chat Application",
    ticker: "AICHAT",
    description:
      "Real-time chat application powered by AI with natural language processing and smart reply suggestions.",
    techStack: ["Next.js", "Python", "OpenAI", "WebSocket"],
    githubLink: "https://github.com/username/ai-chat",
    demoLink: "https://ai-chat-demo.vercel.app",
    metrics: {
      complexity: 92,
      stars: 127,
      linesOfCode: 8700,
      completionDate: "2025-11",
    },
    priceHistory: [
      { date: "W1", value: 30 },
      { date: "W2", value: 42 },
      { date: "W3", value: 55 },
      { date: "W4", value: 48 },
      { date: "W5", value: 62 },
      { date: "W6", value: 75 },
      { date: "W7", value: 88 },
      { date: "W8", value: 92 },
    ],
    change: 31.2,
    status: "active",
  },
  {
    id: "3",
    name: "Task Management System",
    ticker: "TASK",
    description:
      "Kanban-style task management with drag-and-drop, team collaboration features, and analytics dashboard.",
    techStack: ["React", "TypeScript", "PostgreSQL", "Express"],
    githubLink: "https://github.com/username/task-manager",
    metrics: {
      complexity: 78,
      stars: 35,
      linesOfCode: 9200,
      completionDate: "2025-06",
    },
    priceHistory: [
      { date: "W1", value: 15 },
      { date: "W2", value: 22 },
      { date: "W3", value: 28 },
      { date: "W4", value: 35 },
      { date: "W5", value: 42 },
      { date: "W6", value: 50 },
      { date: "W7", value: 58 },
      { date: "W8", value: 78 },
    ],
    change: 18.7,
    status: "completed",
  },
  {
    id: "4",
    name: "Portfolio Analytics",
    ticker: "FOLIO",
    description:
      "This very portfolio website - a trading-themed dashboard showcasing skills, projects, and achievements.",
    techStack: ["Next.js", "TypeScript", "Tailwind", "Recharts"],
    githubLink: "https://github.com/username/portfolio",
    demoLink: "https://portfolio-demo.vercel.app",
    metrics: {
      complexity: 70,
      stars: 15,
      linesOfCode: 5400,
      completionDate: "2026-03",
    },
    priceHistory: [
      { date: "W1", value: 10 },
      { date: "W2", value: 18 },
      { date: "W3", value: 25 },
      { date: "W4", value: 38 },
      { date: "W5", value: 45 },
      { date: "W6", value: 52 },
      { date: "W7", value: 60 },
      { date: "W8", value: 70 },
    ],
    change: 42.1,
    status: "in-development",
  },
  {
    id: "5",
    name: "Weather Dashboard",
    ticker: "WTHR",
    description:
      "Real-time weather monitoring dashboard with interactive maps, forecasts, and historical data visualization.",
    techStack: ["React", "D3.js", "OpenWeather API", "Node.js"],
    githubLink: "https://github.com/username/weather-dashboard",
    demoLink: "https://weather-dash.vercel.app",
    metrics: {
      complexity: 65,
      stars: 22,
      linesOfCode: 6100,
      completionDate: "2025-03",
    },
    priceHistory: [
      { date: "W1", value: 25 },
      { date: "W2", value: 30 },
      { date: "W3", value: 28 },
      { date: "W4", value: 35 },
      { date: "W5", value: 40 },
      { date: "W6", value: 38 },
      { date: "W7", value: 52 },
      { date: "W8", value: 65 },
    ],
    change: 15.3,
    status: "completed",
  },
  {
    id: "6",
    name: "Crypto Tracker",
    ticker: "CRYP",
    description:
      "Cryptocurrency portfolio tracker with real-time price updates, alerts, and portfolio performance analytics.",
    techStack: ["Next.js", "TypeScript", "CoinGecko API", "Chart.js"],
    githubLink: "https://github.com/username/crypto-tracker",
    metrics: {
      complexity: 74,
      stars: 41,
      linesOfCode: 7300,
      completionDate: "2025-09",
    },
    priceHistory: [
      { date: "W1", value: 40 },
      { date: "W2", value: 38 },
      { date: "W3", value: 45 },
      { date: "W4", value: 42 },
      { date: "W5", value: 55 },
      { date: "W6", value: 60 },
      { date: "W7", value: 58 },
      { date: "W8", value: 74 },
    ],
    change: -2.8,
    status: "completed",
  },
];

// ============================================================
// Experience Data
// ============================================================
export const experiences: Experience[] = [
  {
    id: "1",
    title: "Frontend Developer Intern",
    organization: "Tech Corp Inc.",
    duration: "Jun 2025 - Aug 2025",
    description:
      "Built responsive web applications using React and TypeScript. Collaborated with a team of 8 developers on a customer-facing product.",
    type: "internship",
    metrics: [
      { label: "PRs Merged", value: 47 },
      { label: "Features Shipped", value: 12 },
      { label: "Bug Fixes", value: 23 },
    ],
  },
  {
    id: "2",
    title: "Smart India Hackathon",
    organization: "Government of India",
    duration: "Dec 2024",
    description:
      "Led a team of 6 to develop an AI-based document verification system. Won first place in the software edition.",
    type: "hackathon",
    metrics: [
      { label: "Team Size", value: 6 },
      { label: "Hours Coded", value: 36 },
      { label: "Rank", value: 1, suffix: "st" },
    ],
  },
  {
    id: "3",
    title: "AWS Cloud Practitioner",
    organization: "Amazon Web Services",
    duration: "Mar 2025",
    description:
      "Earned AWS Cloud Practitioner certification demonstrating foundational cloud computing knowledge.",
    type: "certification",
    metrics: [
      { label: "Score", value: 87, suffix: "%" },
      { label: "Study Hours", value: 120 },
    ],
  },
  {
    id: "4",
    title: "Open Source Contributor",
    organization: "Various Projects",
    duration: "2024 - Present",
    description:
      "Active contributor to open source projects including React component libraries and developer tools.",
    type: "open-source",
    metrics: [
      { label: "PRs Merged", value: 32 },
      { label: "Repos Contributed", value: 8 },
      { label: "Issues Closed", value: 15 },
    ],
  },
];

// ============================================================
// GitHub Analytics Data
// ============================================================
export const githubStats: GithubStats = {
  totalCommits: 1847,
  totalRepos: 42,
  totalStars: 288,
  followers: 156,
  topLanguages: [
    { name: "JavaScript", percentage: 35, color: "#f7df1e" },
    { name: "TypeScript", percentage: 28, color: "#3178c6" },
    { name: "Python", percentage: 20, color: "#3572A5" },
    { name: "HTML/CSS", percentage: 10, color: "#e34c26" },
    { name: "Other", percentage: 7, color: "#6b7280" },
  ],
  contributionData: [
    { week: "W1", contributions: 12 },
    { week: "W2", contributions: 18 },
    { week: "W3", contributions: 8 },
    { week: "W4", contributions: 22 },
    { week: "W5", contributions: 15 },
    { week: "W6", contributions: 28 },
    { week: "W7", contributions: 20 },
    { week: "W8", contributions: 35 },
    { week: "W9", contributions: 25 },
    { week: "W10", contributions: 30 },
    { week: "W11", contributions: 18 },
    { week: "W12", contributions: 42 },
  ],
  monthlyCommits: [
    { month: "Jan", commits: 120 },
    { month: "Feb", commits: 145 },
    { month: "Mar", commits: 132 },
    { month: "Apr", commits: 168 },
    { month: "May", commits: 155 },
    { month: "Jun", commits: 190 },
    { month: "Jul", commits: 175 },
    { month: "Aug", commits: 160 },
    { month: "Sep", commits: 148 },
    { month: "Oct", commits: 182 },
    { month: "Nov", commits: 195 },
    { month: "Dec", commits: 210 },
  ],
};

// ============================================================
// Social Links
// ============================================================
export const socialLinks: SocialLink[] = [
  {
    platform: "GitHub",
    url: "https://github.com/username",
    icon: "github",
  },
  {
    platform: "LinkedIn",
    url: "https://linkedin.com/in/username",
    icon: "linkedin",
  },
  {
    platform: "Twitter",
    url: "https://twitter.com/username",
    icon: "twitter",
  },
  {
    platform: "Email",
    url: "mailto:developer@email.com",
    icon: "mail",
  },
];

// ============================================================
// Developer Profile
// ============================================================
export const developerProfile = {
  name: "Manpreet Singh",
  title: "Full Stack Developer",
  tagline: "Building the future, one commit at a time",
  bio: "Computer Science student passionate about building modern web applications. Experienced in full-stack development with a focus on React, Node.js, and cloud technologies.",
  location: "Chandigarh, India",
  university: "Chandigarh University, CU",
  graduationYear: 2028,
  resumeUrl: "/resume.pdf",
};