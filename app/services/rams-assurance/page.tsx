import type { Metadata } from "next";
import ServiceDetail from "@/components/service-detail";

export const metadata: Metadata = {
  title: "RAMS & Assurance — Onmog Softsol",
  description:
    "Reliability, Availability, Maintainability and Safety engineering that builds the evidence base regulators and operators need, from hazard identification to safety case acceptance.",
  alternates: { canonical: "/services/rams-assurance" },
};

export default function RamsAssurancePage() {
  return (
    <ServiceDetail
      accent="#1d59c2"
      tint="rgba(29,89,194,0.13)"
      glow="rgba(29,89,194,0.28)"
      kicker="Rail Engineering"
      title="RAMS & Assurance"
      duration="Ongoing"
      complexity="Enterprise"
      icon="M12 22 c5.5 -1.5 9 -5.5 9 -11 V5 L12 2 L3 5 v6 c0 5.5 3.5 9.5 9 11 M9 12 l2 2 l4 -4"
      intro="Reliability, Availability, Maintainability and Safety engineering that builds the evidence base regulators and operators need — from hazard identification through to safety case acceptance."
      stats={[
        { n: "IRSE", l: "Accredited assessors" },
        { n: "EN 50126", l: "Standards aligned" },
        { n: "0", l: "Non-conformities" },
      ]}
      process={[
        { title: "Hazard Identification", desc: "Systematic identification of hazards across the system lifecycle." },
        { title: "Risk Assessment", desc: "Quantitative and qualitative risk analysis." },
        { title: "Safety Case Development", desc: "Evidence-based safety case authoring and review." },
        { title: "Independent Assurance", desc: "Third-party verification and acceptance support." },
      ]}
      sections={[
        { title: "RAMS Engineering", items: ["Hazard identification & logs", "FMEA & fault tree analysis", "Reliability & availability modelling", "Maintainability studies"] },
        { title: "Safety Assurance", items: ["Safety case development", "Independent safety assessment", "Common safety method compliance", "Regulatory submissions"] },
        { title: "Standards", items: ["EN 50126 / 50128 / 50129", "Cenelec compliance", "Cross-acceptance support", "Audit & assessment"] },
        { title: "Key Advantages", items: ["IRSE accredited assessors", "Track record of zero non-conformities", "Conventional & CBTC systems", "End-to-end lifecycle support"] },
      ]}
      related={[
        { name: "Rail Signalling", href: "/services/rail" },
        { name: "Testing & Commissioning", href: "/services/testing-commissioning" },
        { name: "All services", href: "/services" },
      ]}
    />
  );
}
