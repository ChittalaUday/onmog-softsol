import type { Metadata } from "next";
import ServiceDetail from "@/components/service-detail";

export const metadata: Metadata = {
  title: "Testing & Commissioning — Onmog Softsol",
  description:
    "Independent testing and commissioning services that verify signalling, OLE and systems installations meet design intent and safety case requirements before handover.",
  alternates: { canonical: "/services/testing-commissioning" },
};

export default function TestingCommissioningPage() {
  return (
    <ServiceDetail
      accent="#1d59c2"
      tint="rgba(29,89,194,0.13)"
      glow="rgba(29,89,194,0.28)"
      kicker="Rail Engineering"
      title="Testing & Commissioning"
      duration="Project-based"
      complexity="Enterprise"
      icon="M9 11 l3 3 L22 4 M21 12 v7 a2 2 0 0 1 -2 2 H5 a2 2 0 0 1 -2 -2 V5 a2 2 0 0 1 2 -2 h11"
      intro="Independent testing and commissioning services that verify signalling, OLE and systems installations meet design intent and safety case requirements before handover into service."
      stats={[
        { n: "0", l: "Non-conformities" },
        { n: "SIL-4", l: "Safety integrity" },
        { n: "24/7", l: "Site coverage" },
      ]}
      process={[
        { title: "Test Planning", desc: "Test specifications aligned to design and safety case." },
        { title: "Factory Testing", desc: "Off-site verification of interlocking and control systems." },
        { title: "Site Testing", desc: "On-site functional and integration testing." },
        { title: "Commissioning", desc: "Final handover, sign-off and operational readiness." },
      ]}
      sections={[
        { title: "Test Engineering", items: ["Test specification & planning", "Factory acceptance testing", "Site acceptance testing", "Interlocking & control verification"] },
        { title: "Commissioning", items: ["Stage & final commissioning", "Possession planning", "Handover documentation", "Operational readiness review"] },
        { title: "Safety & Compliance", items: ["Safety case verification", "Independent competent testing", "Non-conformance tracking", "Regulatory liaison"] },
        { title: "Key Advantages", items: ["IRSE accredited engineers", "Zero non-conformity track record", "Conventional & modern systems", "Rapid mobilisation"] },
      ]}
      related={[
        { name: "Rail Signalling", href: "/services/rail" },
        { name: "RAMS & Assurance", href: "/services/rams-assurance" },
        { name: "All services", href: "/services" },
      ]}
    />
  );
}
