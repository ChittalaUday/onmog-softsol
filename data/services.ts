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
    description: "Precision-engineered safety systems and signaling solutions for modern rail networks. We provide end-to-end integration of automatic train protection and interlocking systems.",
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
    description: "Strategic talent acquisition for high-stakes industries. We connect organizations with elite technical talent, specialized engineers, and visionary leaders.",
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
    description: "Accelerating digital transformation through custom software ecosystems, cloud-native architectures, and robust web applications designed for scale.",
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
    description: "Data-driven strategic consulting that bridges the gap between traditional operations and future-ready business models. Optimize, scale, and lead.",
  },
];

export const getServiceTheme = (index: number) => SERVICES_CONFIG[index % SERVICES_CONFIG.length].theme;
