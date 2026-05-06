export interface Client {
  name: string;
  logoUrl?: string;
  industry?: string;
  description?: string;
}

export const clients: Client[] = [
  { 
    name: "Nippon Signal India", 
    industry: "Rail & Infrastructure",
    description: "Leading provider of railway signaling and safety systems."
  },
  { 
    name: "Medha Servo Drives", 
    industry: "Rail & Infrastructure",
    description: "Global leader in locomotive control systems and power electronics."
  },
  { 
    name: "Tranway Technologies", 
    industry: "Rail & Infrastructure",
    description: "Specialized in railway engineering and signaling solutions."
  },
  { 
    name: "Infosys", 
    industry: "IT & Digital Solutions",
    description: "Global leader in next-generation digital services and consulting."
  },
  { 
    name: "Wipro", 
    industry: "IT & Digital Solutions",
    description: "Leading technology services and consulting company."
  },
  { 
    name: "Deloitte", 
    industry: "IT & Digital Solutions",
    description: "World-class professional services and digital transformation."
  },
  { 
    name: "Lancesoft", 
    industry: "Workforce Solutions",
    description: "Global pioneer in talent acquisition and staffing services."
  },
  { 
    name: "Bloom Consulting", 
    industry: "Workforce Solutions",
    description: "Expert strategy and talent management solutions."
  },
  { 
    name: "Dharani Life Sciences", 
    logoUrl: "/dharani-life-sciences.png",
    industry: "Life Sciences",
    description: "Innovation in pharmaceutical and life sciences technologies."
  },
  { 
    name: "Brigidlife", 
    industry: "Life Sciences",
    description: "Advanced healthcare and biotechnology solutions."
  },
  { 
    name: "GHSL Technologies", 
    industry: "IT & Digital Solutions" 
  },
  { 
    name: "Bellfast", 
    industry: "Workforce Solutions" 
  },
  { 
    name: "Incrivelsoft", 
    industry: "IT & Digital Solutions" 
  },
  { 
    name: "Pragota", 
    industry: "Infrastructure" 
  },
  { 
    name: "Lotus Constructions", 
    industry: "Infrastructure" 
  },
  { 
    name: "Fidrox", 
    industry: "IT & Digital Solutions" 
  },
];
