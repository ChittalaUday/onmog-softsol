import type { Metadata } from "next";
import ServiceDetail from "@/components/service-detail";

export const metadata: Metadata = {
  title: "Contract Staffing — Onmog Softsol",
  description:
    "Scale your workforce fast with skilled professionals for short-term, long-term or project-based assignments, through our Hire-Train-Deploy model.",
  alternates: { canonical: "/services/staffing" },
};

export default function StaffingServicePage() {
  return (
    <ServiceDetail
      accent="#14a8a2"
      tint="rgba(20,168,162,0.12)"
      glow="rgba(20,168,162,0.25)"
      kicker="Workforce & Staffing"
      title="Contract Staffing"
      duration="Flexible"
      complexity="Full lifecycle"
      icon="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2 M9 11 a4 4 0 1 0 0-8 a4 4 0 0 0 0 8 M23 21v-2a4 4 0 0 0-3-3.87 M16 3.13a4 4 0 0 1 0 7.75"
      intro="Scale your workforce fast with highly skilled professionals for short-term, long-term or project-based assignments. We manage the entire staffing lifecycle — sourcing, screening, onboarding, payroll and compliance — through our Hire-Train-Deploy model."
      stats={[
        { n: "48h", l: "Typical deployment" },
        { n: "7+", l: "Industries served" },
        { n: "100%", l: "Statutory compliance" },
      ]}
      process={[
        { title: "Requirement", desc: "Detailed analysis of workforce needs and timelines." },
        { title: "Sourcing", desc: "Leveraging our talent network for rapid deployment." },
        { title: "Onboarding", desc: "Handling contracts, compliance and initial training." },
        { title: "Management", desc: "Continuous payroll and employee engagement support." },
      ]}
      sections={[
        { title: "Key Features", items: ["Temporary and project-based staffing", "Skilled, semi-skilled and unskilled manpower", "Rapid deployment of resources", "End-to-end employee lifecycle management", "Compliance with labor laws", "Industry-specific recruitment expertise"] },
        { title: "Benefits", items: ["Reduced hiring time and admin burden", "Access to specialized talent", "Improved operational flexibility", "Cost-effective workforce management", "Scalable staffing solutions"] },
        { title: "Industries Served", items: ["Information Technology", "Engineering & Infrastructure", "Railways & Transportation", "Manufacturing", "Healthcare", "Banking & Financial Services"] },
        { title: "Related Workforce Services", items: ["Permanent Recruitment", "Project Outsourcing", "Payroll Services", "Labor Law Compliance", "HR Outsourcing"] },
      ]}
      related={[
        { name: "Rail Signalling", href: "/services/rail" },
        { name: "Web Development", href: "/services/digital" },
        { name: "All services", href: "/services" },
      ]}
    />
  );
}
