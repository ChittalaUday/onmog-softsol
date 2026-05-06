export interface ServiceItem {
  id: string;
  title: string;
  category: "Rail Engineering" | "IT Solutions" | "Workforce & Staffing" | "Digital Growth";
  description: string;
  features: string[];
  complexity: "Basic" | "Advanced" | "Enterprise";
  duration: string;
}

export const allServices: ServiceItem[] = [
  // --- Rail Engineering ---
  {
    id: "rail-signaling",
    title: "Rail Signaling",
    category: "Rail Engineering",
    description: "Advanced signaling systems and interlocking logic design for modern railway networks.",
    features: ["Safety Critical Systems", "Interlocking", "Asset Survey"],
    complexity: "Enterprise",
    duration: "Ongoing"
  },
  {
    id: "rail-consultancy",
    title: "Rail Consultancy",
    category: "Rail Engineering",
    description: "Expert consultancy services for railway operations, project management, and infrastructure development.",
    features: ["Project Management", "Technical Advisory", "Safety Audits"],
    complexity: "Advanced",
    duration: "Flexible"
  },

  // --- IT Solutions ---
  {
    id: "it-web-dev",
    title: "Web Development",
    category: "IT Solutions",
    description: "Custom web applications and enterprise portals built with modern frameworks and cutting-edge technologies.",
    features: ["Responsive Design", "Performance Optimization", "Secure Architecture"],
    complexity: "Advanced",
    duration: "3-6 Months"
  },
  {
    id: "it-app-dev",
    title: "App Development",
    category: "IT Solutions",
    description: "High-performance iOS, Android, and cross-platform mobile applications for enterprise users.",
    features: ["React Native/Flutter", "Native Performance", "User-Centric UI/UX"],
    complexity: "Advanced",
    duration: "4-8 Months"
  },

  // --- Workforce & Staffing ---
  {
    id: "staff-it-hiring",
    title: "IT Talent Acquisition",
    category: "Workforce & Staffing",
    description: "Specialized sourcing for niche technical roles across various technology stacks and domains.",
    features: ["Technical Screening", "Global Sourcing", "Fast Turnaround"],
    complexity: "Basic",
    duration: "Ongoing"
  },
  {
    id: "staff-exec-search",
    title: "Leadership & CXO Search",
    category: "Workforce & Staffing",
    description: "Discreet and strategic search for high-level executive positions and technical leadership.",
    features: ["Executive Networking", "Confidentiality", "Rigorous Vetting"],
    complexity: "Enterprise",
    duration: "3-5 Months"
  },
  {
    id: "staff-contract",
    title: "Contract Staffing",
    category: "Workforce & Staffing",
    description: "Flexible, short-term and long-term expert resources for specific project requirements.",
    features: ["Flexibility", "Rapid Deployment", "Vetted Talent"],
    complexity: "Basic",
    duration: "Flexible"
  },

  // --- Digital Growth ---
  {
    id: "growth-seo",
    title: "SEO & Search Optimization",
    category: "Digital Growth",
    description: "Data-driven strategies to dominate search results, improve visibility, and drive organic traffic.",
    features: ["Technical SEO", "Content Strategy", "Backlink Growth"],
    complexity: "Advanced",
    duration: "Ongoing"
  },
  {
    id: "growth-performance",
    title: "Performance Marketing",
    category: "Digital Growth",
    description: "Precision-targeted ad campaigns designed to maximize ROI on platforms like Google, LinkedIn, and Meta.",
    features: ["ROAS Focus", "A/B Testing", "Conversion Tracking"],
    complexity: "Advanced",
    duration: "Monthly"
  },
  {
    id: "growth-brand",
    title: "Brand Strategy & Positioning",
    category: "Digital Growth",
    description: "Crafting a unique voice and market stance to give you a strong competitive advantage.",
    features: ["Market Research", "Visual Identity", "Messaging Framework"],
    complexity: "Enterprise",
    duration: "2-4 Months"
  }
];
