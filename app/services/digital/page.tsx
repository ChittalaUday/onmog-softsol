import type { Metadata } from "next";
import ServiceDetail from "@/components/service-detail";

export const metadata: Metadata = {
  title: "Web Development — Onmog Softsol",
  description:
    "High-performance web applications tailored to your business — enterprise portals, consumer platforms, mobile apps and cloud architecture.",
  alternates: { canonical: "/services/digital" },
};

export default function DigitalServicePage() {
  return (
    <ServiceDetail
      accent="#3fa03c"
      tint="rgba(63,160,60,0.13)"
      glow="rgba(63,160,60,0.28)"
      kicker="IT Solutions"
      title="Web Development"
      duration="3–6 months"
      complexity="Advanced"
      icon="M16 18 L22 12 L16 6 M8 6 L2 12 L8 18"
      intro="High-performance web applications tailored to your business — from enterprise portals to consumer platforms. Aesthetic UI/UX on top of scalable, secure back-end architecture, evolved iteratively so software grows with your business."
      stats={[
        { n: "60fps", l: "Performance budget" },
        { n: "3–6mo", l: "Typical delivery" },
        { n: "24/7", l: "Support & maintenance" },
      ]}
      process={[
        { title: "Discovery", desc: "Analyzing requirements and defining project goals." },
        { title: "Design", desc: "UI/UX mockups and technical architecture." },
        { title: "Development", desc: "Front-end and back-end built in agile sprints." },
        { title: "QA & Launch", desc: "Rigorous testing followed by cloud deployment." },
      ]}
      sections={[
        { title: "Core Technologies", items: ["React & Next.js", "Node.js backend", "Cloud infrastructure (AWS/Azure)", "REST & GraphQL APIs", "PostgreSQL & MongoDB"] },
        { title: "Key Deliverables", items: ["Custom UI/UX design", "Scalable architecture", "API integration", "Automated testing", "Maintenance & support"] },
        { title: "App Development", items: ["React Native & Flutter", "Swift & Kotlin", "Firebase/Supabase integration", "Offline-first support", "App store optimization"] },
        { title: "Digital Growth Add-ons", items: ["Technical SEO", "Content strategy", "PPC & performance marketing", "Analytics & reporting"] },
      ]}
      related={[
        { name: "Rail Signalling", href: "/services/rail" },
        { name: "Contract Staffing", href: "/services/staffing" },
        { name: "All services", href: "/services" },
      ]}
    />
  );
}
