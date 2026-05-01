import { TrainFront, Users, Laptop, BarChart3 } from "lucide-react";

export const SERVICES_CONFIG = [
  {
    id: "01",
    title: "Rail Signaling",
    shortTitle: "Rail Signaling",
    icon: TrainFront,
    theme: {
      color: "text-blue-500",
      bg: "bg-blue-500",
      bgGlow: "from-blue-500/20",
      borderColor: "border-blue-500/20",
      shadow: "shadow-blue-500/20",
    },
    description: "End-to-end safety-critical rail infrastructure solutions. From signaling design and interlocking logic to rigorous testing and commissioning, we ensure SIL-4 compliant operations for modern transit networks.",
  },
  {
    id: "02",
    title: "Staffing Solutions",
    shortTitle: "Staffing Solutions",
    icon: Users,
    theme: {
      color: "text-emerald-500",
      bg: "bg-emerald-500",
      bgGlow: "from-emerald-500/20",
      borderColor: "border-emerald-500/20",
      shadow: "shadow-emerald-500/20",
    },
    description: "Bridging the talent gap with our unique 'Hire-Train-Deploy' model. We manage the full lifecycle—sourcing, screening, and compliance—to provide job-ready IT and non-IT professionals.",
  },
  {
    id: "03",
    title: "Digital Innovation",
    shortTitle: "Digital Innovation",
    icon: Laptop,
    theme: {
      color: "text-indigo-500",
      bg: "bg-indigo-500",
      bgGlow: "from-indigo-500/20",
      borderColor: "border-indigo-500/20",
      shadow: "shadow-indigo-500/20",
    },
    description: "Crafting high-performance digital ecosystems. We specialize in scalable web platforms, cloud-native architectures (AWS/K8s), and seamless ERP integrations tailored to enterprise workflows.",
  },
  {
    id: "04",
    title: "Business Strategy",
    shortTitle: "Business Strategy",
    icon: BarChart3,
    theme: {
      color: "text-amber-500",
      bg: "bg-amber-500",
      bgGlow: "from-amber-500/20",
      borderColor: "border-amber-500/20",
      shadow: "shadow-amber-500/20",
    },
    description: "Driving growth through data-driven brand positioning and operational optimization. Our strategic consulting covers SEO/PPC, market scaling, and bridging physical-to-digital transitions.",
  },
];

export const getServiceTheme = (index: number) => SERVICES_CONFIG[index % SERVICES_CONFIG.length].theme;
