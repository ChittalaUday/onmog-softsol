import type { Metadata } from "next";
import ServiceDetail from "@/components/service-detail";

export const metadata: Metadata = {
  title: "HR Outsourcing — Onmog Softsol",
  description:
    "End-to-end HR administration — onboarding, employee lifecycle management, compliance and helpdesk support.",
  alternates: { canonical: "/services/hr-outsourcing" },
};

export default function HrOutsourcingPage() {
  return (
    <ServiceDetail
      accent="#14a8a2"
      tint="rgba(20,168,162,0.12)"
      glow="rgba(20,168,162,0.25)"
      kicker="Workforce & Staffing"
      title="HR Outsourcing"
      duration="Ongoing"
      complexity="Advanced"
      icon="M3 4 H21 A1 1 0 0 1 22 5 V19 A1 1 0 0 1 21 20 H3 A1 1 0 0 1 2 19 V5 A1 1 0 0 1 3 4 M7 10 a2 2 0 1 0 0 -4 a2 2 0 0 0 0 4 M4 17 c0 -2 2 -3 3 -3 s3 1 3 3 M14 8 H19 M14 12 H19 M14 16 H17"
      intro="End-to-end HR administration — onboarding, employee lifecycle management, compliance and helpdesk support — so your internal team can focus on people, not paperwork."
      stats={[
        { n: "100%", l: "Process compliance" },
        { n: "<24h", l: "Helpdesk response" },
        { n: "7+", l: "Industries supported" },
      ]}
      process={[
        { title: "Assessment", desc: "Mapping current HR processes and pain points." },
        { title: "Transition", desc: "Migrating employee records and workflows." },
        { title: "Operation", desc: "Day-to-day HR administration and support." },
        { title: "Continuous Improvement", desc: "Quarterly reviews and process optimisation." },
      ]}
      sections={[
        { title: "Core HR Admin", items: ["Onboarding & offboarding", "Employee record management", "Policy administration", "HR helpdesk"] },
        { title: "Lifecycle Management", items: ["Performance review coordination", "Leave & attendance management", "Employee engagement support", "Exit management"] },
        { title: "Compliance", items: ["Statutory documentation", "Audit readiness", "Policy compliance tracking", "Grievance handling support"] },
        { title: "Key Advantages", items: ["Single point of accountability", "Reduced admin overhead", "Scales with headcount", "Cross-industry expertise"] },
      ]}
      related={[
        { name: "Payroll Services", href: "/services/payroll-services" },
        { name: "Permanent Recruitment", href: "/services/permanent-recruitment" },
        { name: "All services", href: "/services" },
      ]}
    />
  );
}
