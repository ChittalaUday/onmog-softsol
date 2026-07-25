import type { Metadata } from "next";
import ServiceDetail from "@/components/service-detail";

export const metadata: Metadata = {
  title: "Permanent Recruitment — Onmog Softsol",
  description:
    "Strategic talent acquisition for long-term hires — executive search, technical screening and cultural-fit assessment across seven industries.",
  alternates: { canonical: "/services/permanent-recruitment" },
};

export default function PermanentRecruitmentPage() {
  return (
    <ServiceDetail
      accent="#14a8a2"
      tint="rgba(20,168,162,0.12)"
      glow="rgba(20,168,162,0.25)"
      kicker="Workforce & Staffing"
      title="Permanent Recruitment"
      duration="4–8 weeks"
      complexity="Advanced"
      icon="M11 19 a8 8 0 1 0 0-16 a8 8 0 0 0 0 16 M21 21 L16.65 16.65"
      intro="Strategic talent acquisition for long-term hires — executive search, technical screening and cultural-fit assessment across seven industries, so you hire right the first time."
      stats={[
        { n: "4-8wk", l: "Typical time-to-hire" },
        { n: "7+", l: "Industries served" },
        { n: "90%", l: "12-month retention" },
      ]}
      process={[
        { title: "Role Scoping", desc: "Defining requirements, seniority and success criteria." },
        { title: "Search", desc: "Executive search and market mapping across our network." },
        { title: "Screening", desc: "Technical assessment and cultural alignment checks." },
        { title: "Offer & Onboarding", desc: "Offer management through to day-one onboarding." },
      ]}
      sections={[
        { title: "Search Services", items: ["Executive search", "Technical & functional hiring", "Market mapping", "Confidential search"] },
        { title: "Assessment", items: ["Technical screening", "Structured interviews", "Reference & background checks", "Cultural-fit evaluation"] },
        { title: "Candidate Care", items: ["Offer negotiation support", "Onboarding coordination", "30-60-90 day check-ins", "Retention tracking"] },
        { title: "Key Advantages", items: ["Seven-industry specialist network", "Faster time-to-hire", "Reduced mis-hire risk", "Dedicated account management"] },
      ]}
      related={[
        { name: "Contract Staffing", href: "/services/staffing" },
        { name: "HR Outsourcing", href: "/services/hr-outsourcing" },
        { name: "All services", href: "/services" },
      ]}
    />
  );
}
