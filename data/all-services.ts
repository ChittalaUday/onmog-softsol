export interface ServiceDetailSection {
  title: string;
  items: string[];
}

export interface ProcessStep {
  title: string;
  description: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  category: "Rail Engineering" | "IT Solutions" | "Workforce & Staffing" | "Digital Growth";
  description: string;
  longDescription?: string;
  features: string[]; // For summary cards
  sections?: ServiceDetailSection[]; // Flexible sections for detail page
  process?: ProcessStep[]; // Dedicated process section
  complexity: "Basic" | "Advanced" | "Enterprise";
  duration: string;
}

export const allServices: ServiceItem[] = [
  // --- Rail Engineering ---
  {
    id: "rail-signalling",
    title: "Rail Signalling",
    category: "Rail Engineering",
    description: "End-to-end signalling solutions for modern railway and metro networks.",
    longDescription: "Our Rail Signalling services deliver safe, reliable, and efficient signalling solutions for railway and metro infrastructure projects. We provide end-to-end signalling design, consultancy, project support, installation supervision, testing, and commissioning services for both conventional and advanced signalling systems.",
    features: ["Interlocking Design", "Testing & Commissioning", "Safety Critical Systems"],
    complexity: "Enterprise",
    duration: "Ongoing",
    process: [
      { title: "Site Survey", description: "Comprehensive site surveys and correlation to identify existing infrastructure." },
      { title: "Scheme Design", description: "Development of signalling plans and interlocking principles." },
      { title: "Detailed Design", description: "Relay and electronic interlocking design with SSI/CBI integration." },
      { title: "Verification", description: "Independent design verification to ensure safety and compliance." },
      { title: "Commissioning", description: "Final testing and operational handover for safe rail operations." }
    ],
    sections: [
      {
        title: "Scoping & Feasibility",
        items: [
          "Signalling scope development",
          "Feasibility studies & Risk assessments",
          "Site surveys and correlation",
          "Interlocking principles review",
          "Mandatory deficiencies reporting"
        ]
      },
      {
        title: "Scheme Design",
        items: [
          "Signalling calculations",
          "TPWS effectiveness calculations",
          "Final Project Specifications (FPS)",
          "Signalling scheme plans",
          "Material schedule development"
        ]
      },
      {
        title: "Detailed Design",
        items: [
          "Relay and electronic interlocking design",
          "SSI and CBI interlocking design",
          "Independent design verification",
          "Location area plans and bonding plans",
          "Control panel and signal box design"
        ]
      },
      {
        title: "Key Advantages",
        items: [
          "Expertise in conventional and modern systems",
          "IRSE accredited and competent resources",
          "End-to-end signalling delivery capability",
          "Global project delivery experience",
          "Focus on safety, reliability, and efficiency"
        ]
      }
    ]
  },
  {
    id: "rail-consultancy",
    title: "Rail Consultancy",
    category: "Rail Engineering",
    description: "Multidisciplinary engineering and management consultancy for rail infrastructure.",
    longDescription: "Our Rail Consulting services provide specialized engineering, technical, operational, and management consultancy solutions. We support clients throughout the project lifecycle — from concept and feasibility to implementation, commissioning, and maintenance optimization.",
    features: ["Track Design", "OLE & Electrification", "Project Management"],
    complexity: "Advanced",
    duration: "Flexible",
    process: [
      { title: "Consultation", description: "In-depth gathering of multidisciplinary requirements." },
      { title: "Planning", description: "Strategic project scheduling and resource allocation." },
      { title: "Design", description: "Multidisciplinary design across track, civil, and electrical domains." },
      { title: "Delivery", description: "Coordinated project execution with rigorous quality management." }
    ],
    sections: [
      {
        title: "Civil & Track Design",
        items: [
          "Track alignment and layout design",
          "Station design",
          "Civil and structural engineering",
          "Drainage design",
          "BIM and 3D modelling services"
        ]
      },
      {
        title: "OLE & Electrification Design",
        items: [
          "OLE foundation and steelwork design",
          "Track remodelling support",
          "Electrical clearance analysis",
          "Switching station and substation design",
          "Earthing and bonding systems"
        ]
      },
      {
        title: "RAMS & System Assurance",
        items: [
          "Reliability and maintainability analysis",
          "Fault tree analysis",
          "Failure modes and effects analysis (FMEA)",
          "Reliability-centered maintenance",
          "System safety assessments"
        ]
      },
      {
        title: "Key Benefits",
        items: [
          "Multidisciplinary rail engineering expertise",
          "End-to-end consultancy support",
          "Improved project efficiency and safety",
          "Advanced digital engineering capabilities",
          "Global rail project experience"
        ]
      }
    ]
  },

  // --- Workforce & Staffing ---
  {
    id: "staff-contract",
    title: "Contract Staffing",
    category: "Workforce & Staffing",
    description: "Flexible workforce solutions to scale your team with high-skilled professionals.",
    longDescription: "Our Contract Staffing solutions help organizations quickly scale their workforce with highly skilled professionals for short-term, long-term, or project-based assignments. We manage the entire staffing lifecycle — from sourcing and screening to onboarding and compliance.",
    features: ["Rapid Deployment", "Flexible Workforce", "End-to-end Management"],
    complexity: "Basic",
    duration: "Flexible",
    process: [
      { title: "Requirement", description: "Detailed analysis of workforce needs and timelines." },
      { title: "Sourcing", description: "Leveraging our talent network for rapid deployment." },
      { title: "Onboarding", description: "Handling contracts, compliance, and initial training." },
      { title: "Management", description: "Continuous payroll and employee engagement support." }
    ],
    sections: [
      {
        title: "Key Features",
        items: [
          "Temporary and project-based staffing",
          "Skilled, semi-skilled, and unskilled manpower",
          "Rapid deployment of resources",
          "End-to-end employee lifecycle management",
          "Compliance with labor laws",
          "Industry-specific recruitment expertise"
        ]
      },
      {
        title: "Benefits",
        items: [
          "Reduced hiring time and admin burden",
          "Access to specialized talent",
          "Improved operational flexibility",
          "Cost-effective workforce management",
          "Scalable staffing solutions"
        ]
      }
    ]
  },
  {
    id: "staff-permanent",
    title: "Permanent Recruitment",
    category: "Workforce & Staffing",
    description: "Strategic talent acquisition for long-term organizational success.",
    longDescription: "We provide comprehensive Permanent Recruitment solutions designed to help organizations attract, assess, and hire the right talent. Our specialists identify candidates who align with both technical expectations and organizational culture.",
    features: ["Executive Search", "Technical Screening", "Cultural Alignment"],
    complexity: "Advanced",
    duration: "Ongoing",
    process: [
      { title: "Profiling", description: "Creating detailed job profiles and culture alignment maps." },
      { title: "Sourcing", description: "Active headhunting through professional networks." },
      { title: "Assessment", description: "Rigorous technical and behavioral evaluation." },
      { title: "Integration", description: "Onboarding support for successful long-term retention." }
    ],
    sections: [
      {
        title: "Industries Served",
        items: [
          "Information Technology",
          "Engineering & Infrastructure",
          "Railways & Transportation",
          "Manufacturing",
          "Healthcare",
          "Telecom",
          "Banking & Financial Services"
        ]
      },
      {
        title: "Benefits",
        items: [
          "Access to high-quality talent",
          "Faster hiring turnaround",
          "Reduced recruitment costs",
          "Improved employee retention",
          "Customized hiring strategies"
        ]
      }
    ]
  },
  {
    id: "staff-outsourcing",
    title: "Project Outsourcing",
    category: "Workforce & Staffing",
    description: "End-to-end project execution with dedicated expertise and accountability.",
    longDescription: "Our Project Outsourcing services enable organizations to focus on core operations while we manage complete projects or specific functions. We offer end-to-end support including planning, resource allocation, and quality control.",
    features: ["Project Management", "Dedicated Teams", "SLA Management"],
    complexity: "Enterprise",
    duration: "Project-based",
    process: [
      { title: "Scoping", description: "Defining deliverables, timelines, and success metrics." },
      { title: "Setup", description: "Deploying a dedicated team with required infrastructure." },
      { title: "Execution", description: "Managing day-to-day tasks with strict quality control." },
      { title: "Handover", description: "Final delivery and performance review against SLAs." }
    ],
    sections: [
      {
        title: "Service Capabilities",
        items: [
          "End-to-end project management",
          "Dedicated project teams",
          "Technical and operational support",
          "Resource planning and deployment",
          "Quality assurance and reporting",
          "Performance monitoring and SLA management"
        ]
      },
      {
        title: "Project Types",
        items: [
          "Engineering Projects",
          "IT and Software Development",
          "Rail Infrastructure Projects",
          "Business Process Outsourcing",
          "Technical Documentation",
          "Design and Consultancy Services"
        ]
      },
      {
        title: "Benefits",
        items: [
          "Reduced operational costs",
          "Improved efficiency and productivity",
          "Access to specialized expertise",
          "Faster project execution",
          "Better risk management"
        ]
      }
    ]
  },
  {
    id: "staff-payroll",
    title: "Payroll Services",
    category: "Workforce & Staffing",
    description: "Accurate and compliant payroll administration for organizations of all sizes.",
    longDescription: "Our Payroll Services are designed to simplify payroll administration while ensuring accuracy, confidentiality, and compliance. We handle salary calculations, tax deductions, and statutory contributions securely.",
    features: ["Compliance Management", "Tax Deductions", "Secure Processing"],
    complexity: "Basic",
    duration: "Monthly",
    process: [
      { title: "Integration", description: "Setting up payroll systems with existing HR data." },
      { title: "Processing", description: "Accurate monthly salary and deduction calculations." },
      { title: "Filing", description: "Managing statutory filings (PF, ESI, TDS) on time." },
      { title: "Reporting", description: "Providing detailed MIS and analytics reports." }
    ],
    sections: [
      {
        title: "Payroll Services Include",
        items: [
          "Monthly payroll processing",
          "Salary structuring and calculations",
          "Tax deductions and compliance",
          "PF, ESI, PT, TDS management",
          "Payslip generation",
          "Leave and attendance integration",
          "Final settlement processing"
        ]
      },
      {
        title: "Benefits",
        items: [
          "Accurate and timely processing",
          "Reduced administrative workload",
          "Compliance with statutory regulations",
          "Data confidentiality and security",
          "Improved employee satisfaction"
        ]
      }
    ]
  },
  {
    id: "staff-compliance",
    title: "Labor Law Compliance",
    category: "Workforce & Staffing",
    description: "Expert guidance to ensure adherence to statutory regulations and labor laws.",
    longDescription: "We provide comprehensive Labor Law Compliance services to help organizations comply with applicable laws and workplace policies. Our experts minimize risks and penalties by ensuring smooth adherence to legal requirements.",
    features: ["Statutory Audits", "License Registration", "Risk Mitigation"],
    complexity: "Advanced",
    duration: "Ongoing",
    process: [
      { title: "Audit", description: "Reviewing current status and identifying compliance gaps." },
      { title: "Rectification", description: "Executing necessary changes and filings to align with laws." },
      { title: "Advisory", description: "Regular guidance on changing labor regulations." },
      { title: "Monitoring", description: "Ongoing tracking of statutory submissions." }
    ],
    sections: [
      {
        title: "Compliance Services Include",
        items: [
          "PF and ESI compliance",
          "Professional Tax compliance",
          "Labor welfare compliance",
          "Shops & Establishment compliance",
          "Contract Labor Act compliance",
          "Minimum Wages compliance",
          "Statutory audit support"
        ]
      },
      {
        title: "Benefits",
        items: [
          "Reduced legal and compliance risks",
          "Timely statutory filings",
          "Expert guidance on regulations",
          "Improved governance and transparency",
          "Hassle-free management"
        ]
      }
    ]
  },
  {
    id: "staff-hr-outsourcing",
    title: "HR Outsourcing",
    category: "Workforce & Staffing",
    description: "Complete HR operational support to streamline day-to-day functions.",
    longDescription: "Our HR Outsourcing services provide businesses with complete HR operational support. We offer customized solutions covering recruitment, onboarding, payroll, compliance, and performance management.",
    features: ["HR Policy Development", "Employee Engagement", "Performance Management"],
    complexity: "Advanced",
    duration: "Flexible",
    process: [
      { title: "Assessment", description: "Auditing existing HR processes and workforce culture." },
      { title: "Operationalizing", description: "Managing daily HR tasks from recruitment to exit." },
      { title: "Engaging", description: "Implementing performance and engagement programs." },
      { title: "Optimizing", description: "Continuous improvement of HR efficiency and strategy." }
    ],
    sections: [
      {
        title: "HR Services Include",
        items: [
          "Recruitment and talent acquisition",
          "Employee onboarding and induction",
          "HR policy development",
          "Attendance and leave management",
          "Performance management systems",
          "Employee engagement programs",
          "Exit management"
        ]
      },
      {
        title: "Benefits",
        items: [
          "Streamlined HR operations",
          "Reduced administration costs",
          "Improved workforce management",
          "Access to HR expertise and technology",
          "Better employee experience"
        ]
      }
    ]
  },

  // --- IT Solutions ---
  {
    id: "it-web-dev",
    title: "Web Development",
    category: "IT Solutions",
    description: "Custom web applications and enterprise portals built with modern frameworks.",
    longDescription: "We craft high-performance web applications tailored to your business needs. From enterprise portals to consumer-facing platforms, our solutions are built for scale, security, and speed.",
    features: ["Responsive Design", "Performance Optimization", "Secure Architecture"],
    complexity: "Advanced",
    duration: "3-6 Months",
    process: [
      { title: "Discovery", description: "Analyzing requirements and defining project goals." },
      { title: "Design", description: "Creating UI/UX mockups and technical architecture." },
      { title: "Development", description: "Coding the front-end and back-end in agile sprints." },
      { title: "QA & Launch", description: "Rigorous testing followed by cloud deployment." }
    ],
    sections: [
      {
        title: "Core Technologies",
        items: ["React & Next.js", "Node.js Backend", "Cloud Infrastructure (AWS/Azure)", "REST & GraphQL APIs", "PostgreSQL & MongoDB"]
      },
      {
        title: "Key Deliverables",
        items: ["Custom UI/UX Design", "Scalable Architecture", "API Integration", "Automated Testing", "Maintenance & Support"]
      }
    ]
  },
  {
    id: "it-app-dev",
    title: "App Development",
    category: "IT Solutions",
    description: "High-performance iOS, Android, and cross-platform mobile applications.",
    longDescription: "Our mobile development team builds intuitive and powerful applications for both iOS and Android. We focus on delivering native-like performance and exceptional user experiences.",
    features: ["React Native/Flutter", "Native Performance", "User-Centric UI/UX"],
    complexity: "Advanced",
    duration: "4-8 Months",
    process: [
      { title: "Ideation", description: "Mapping user journeys and core application features." },
      { title: "Prototyping", description: "Interactive wireframes for rapid user feedback." },
      { title: "Build", description: "Developing cross-platform apps with native speed." },
      { title: "Deployment", description: "App store optimization and production release." }
    ],
    sections: [
      {
        title: "Development Stack",
        items: ["React Native", "Flutter", "Swift & Kotlin", "Firebase/Supabase Integration", "Offline-first Support"]
      },
      {
        title: "Key Benefits",
        items: ["Cross-platform efficiency", "High user engagement", "Secure data handling", "Scalable backend", "Continuous updates"]
      }
    ]
  },

  // --- Digital Growth ---
  {
    id: "growth-seo",
    title: "SEO & Search Optimization",
    category: "Digital Growth",
    description: "Data-driven strategies to dominate search results and drive organic traffic.",
    longDescription: "We help your brand get discovered by the right audience. Our SEO strategies are focused on long-term visibility, authority, and high-intent organic traffic.",
    features: ["Technical SEO", "Content Strategy", "Backlink Growth"],
    complexity: "Advanced",
    duration: "Ongoing",
    process: [
      { title: "Audit", description: "Technical, content, and competitor SEO analysis." },
      { title: "Optimization", description: "On-page and technical fixes for search rankings." },
      { title: "Authority", description: "Building domain authority through content and links." },
      { title: "Analysis", description: "Continuous tracking and data-driven adjustments." }
    ],
    sections: [
      {
        title: "Benefits",
        items: ["Increased Visibility", "Higher Quality Leads", "Sustainable Growth", "Better User Experience", "Competitive Edge"]
      }
    ]
  }
];
