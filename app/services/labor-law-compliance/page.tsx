import type { Metadata } from "next";
import ServiceDetail from "@/components/service-detail";

export const metadata: Metadata = {
  title: "Labor Law Compliance — Onmog Softsol",
  description:
    "Statutory audits, licensing and risk mitigation across PF, ESI, contract labor and minimum wages compliance.",
  alternates: { canonical: "/services/labor-law-compliance" },
};

export default function LaborLawCompliancePage() {
  return (
    <ServiceDetail
      accent="#14a8a2"
      tint="rgba(20,168,162,0.12)"
      glow="rgba(20,168,162,0.25)"
      kicker="Workforce & Staffing"
      title="Labor Law Compliance"
      duration="Ongoing"
      complexity="Advanced"
      icon="M12 22 c5.5 -1.5 9 -5.5 9 -11 V5 L12 2 L3 5 v6 c0 5.5 3.5 9.5 9 11 M9 12 l2 2 l4 -4"
      intro="Statutory audits, licensing and risk mitigation across PF, ESI, contract labour and minimum wage regulations — stay compliant without building an in-house legal team."
      stats={[
        { n: "100%", l: "Audit pass rate" },
        { n: "0", l: "Statutory penalties" },
        { n: "Pan-India", l: "Coverage" },
      ]}
      process={[
        { title: "Compliance Audit", desc: "Baseline review against applicable statutes." },
        { title: "Remediation", desc: "Closing gaps and correcting documentation." },
        { title: "Licensing", desc: "Registration and license renewals handled end-to-end." },
        { title: "Ongoing Monitoring", desc: "Continuous tracking of regulatory changes." },
      ]}
      sections={[
        { title: "Statutory Audits", items: ["PF & ESI compliance audits", "Contract labour audits", "Minimum wage verification", "Documentation review"] },
        { title: "Licensing", items: ["Contract labour licensing", "Shops & establishment registration", "License renewals", "Regulatory filings"] },
        { title: "Risk Mitigation", items: ["Gap remediation plans", "Policy documentation", "Regulatory change tracking", "Dispute support"] },
        { title: "Key Advantages", items: ["Zero-penalty track record", "Pan-India regulatory coverage", "Dedicated compliance desk", "Proactive change alerts"] },
      ]}
      related={[
        { name: "Payroll Services", href: "/services/payroll-services" },
        { name: "HR Outsourcing", href: "/services/hr-outsourcing" },
        { name: "All services", href: "/services" },
      ]}
    />
  );
}
