import type { Metadata } from "next";
import ServiceDetail from "@/components/service-detail";

export const metadata: Metadata = {
  title: "Project Outsourcing — Onmog Softsol",
  description:
    "End-to-end project execution with dedicated delivery teams, strict quality control and SLA management.",
  alternates: { canonical: "/services/project-outsourcing" },
};

export default function ProjectOutsourcingPage() {
  return (
    <ServiceDetail
      accent="#14a8a2"
      tint="rgba(20,168,162,0.12)"
      glow="rgba(20,168,162,0.25)"
      kicker="Workforce & Staffing"
      title="Project Outsourcing"
      duration="Project-based"
      complexity="Enterprise"
      icon="M21 16 V8 a2 2 0 0 0 -1 -1.73 l-7 -4 a2 2 0 0 0 -2 0 l-7 4 A2 2 0 0 0 3 8 v8 a2 2 0 0 0 1 1.73 l7 4 a2 2 0 0 0 2 0 l7 -4 A2 2 0 0 0 21 16 M3.3 7 L12 12 l8.7 -5 M12 22 V12"
      intro="End-to-end project execution with dedicated delivery teams, strict quality control and SLA management — you own the outcome, we own the delivery."
      stats={[
        { n: "100%", l: "SLA adherence" },
        { n: "Dedicated", l: "Delivery teams" },
        { n: "7+", l: "Industries delivered" },
      ]}
      process={[
        { title: "Scoping", desc: "Defining deliverables, milestones and SLAs." },
        { title: "Team Mobilisation", desc: "Assembling a dedicated delivery team." },
        { title: "Execution", desc: "Managed delivery against agreed milestones." },
        { title: "QA & Handover", desc: "Quality assurance, reporting and sign-off." },
      ]}
      sections={[
        { title: "Delivery Model", items: ["Dedicated project teams", "Milestone-based execution", "SLA-backed commitments", "Single point of contact"] },
        { title: "Quality & Reporting", items: ["QA & testing protocols", "Weekly status reporting", "Risk & issue tracking", "Post-delivery support"] },
        { title: "Governance", items: ["Steering committee cadence", "Change management process", "Escalation pathways", "Contract & SLA management"] },
        { title: "Key Advantages", items: ["Fixed accountability for outcomes", "Reduced management overhead", "Flexible engagement models", "Proven delivery track record"] },
      ]}
      related={[
        { name: "Contract Staffing", href: "/services/staffing" },
        { name: "Permanent Recruitment", href: "/services/permanent-recruitment" },
        { name: "All services", href: "/services" },
      ]}
    />
  );
}
