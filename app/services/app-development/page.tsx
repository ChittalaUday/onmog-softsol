import type { Metadata } from "next";
import ServiceDetail from "@/components/service-detail";

export const metadata: Metadata = {
  title: "App Development — Onmog Softsol",
  description:
    "High-performance iOS, Android and cross-platform apps with native-like speed and exceptional UX.",
  alternates: { canonical: "/services/app-development" },
};

export default function AppDevelopmentPage() {
  return (
    <ServiceDetail
      accent="#3fa03c"
      tint="rgba(63,160,60,0.13)"
      glow="rgba(63,160,60,0.28)"
      kicker="IT Solutions"
      title="App Development"
      duration="4–8 months"
      complexity="Advanced"
      icon="M7 2 H17 A2 2 0 0 1 19 4 V20 A2 2 0 0 1 17 22 H7 A2 2 0 0 1 5 20 V4 A2 2 0 0 1 7 2 M12 18 h.01"
      intro="High-performance iOS, Android and cross-platform apps with native-like speed and exceptional UX, built to scale from first release to millions of users."
      stats={[
        { n: "60fps", l: "Performance budget" },
        { n: "4-8mo", l: "Typical delivery" },
        { n: "24/7", l: "Support & maintenance" },
      ]}
      process={[
        { title: "Discovery", desc: "Defining platform, features and technical constraints." },
        { title: "Design", desc: "UI/UX design tailored to mobile interaction patterns." },
        { title: "Development", desc: "Native or cross-platform build in agile sprints." },
        { title: "QA & Launch", desc: "Device testing followed by app store release." },
      ]}
      sections={[
        { title: "Core Technologies", items: ["React Native & Flutter", "Swift & Kotlin", "Firebase/Supabase integration", "REST & GraphQL APIs"] },
        { title: "Key Deliverables", items: ["Custom UI/UX design", "Offline-first support", "Push notifications", "App store optimization"] },
        { title: "Platform Coverage", items: ["iOS & Android native", "Cross-platform builds", "Tablet & foldable support", "Wearable integrations"] },
        { title: "Key Advantages", items: ["Native-like performance", "Single codebase efficiency", "Continuous release pipeline", "Post-launch support & maintenance"] },
      ]}
      related={[
        { name: "Web Development", href: "/services/digital" },
        { name: "ERP Integration", href: "/services/erp-integration" },
        { name: "All services", href: "/services" },
      ]}
    />
  );
}
