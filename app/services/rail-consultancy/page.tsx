import type { Metadata } from "next";
import ServiceDetail from "@/components/service-detail";

export const metadata: Metadata = {
  title: "Rail Consultancy — Onmog Softsol",
  description:
    "Multidisciplinary engineering and management consultancy for rail and metro programmes — track design, OLE & electrification, systems integration and RAMS assurance.",
  alternates: { canonical: "/services/rail-consultancy" },
};

export default function RailConsultancyPage() {
  return (
    <ServiceDetail
      accent="#1d59c2"
      tint="rgba(29,89,194,0.13)"
      glow="rgba(29,89,194,0.28)"
      kicker="Rail Engineering"
      title="Rail Consultancy"
      duration="Flexible"
      complexity="Advanced"
      icon="M9 21 H15 M12 17 V21 M5 3 H19 A2 2 0 0 1 21 5 V15 A2 2 0 0 1 19 17 H5 A2 2 0 0 1 3 15 V5 A2 2 0 0 1 5 3 M7 12 L10 9 L13 12 L17 7"
      intro="Multidisciplinary engineering and management consultancy for rail and metro programmes — track design, OLE & electrification, systems integration and RAMS assurance from feasibility through to handover."
      stats={[
        { n: "25+", l: "Programmes advised" },
        { n: "OLE", l: "& electrification" },
        { n: "100%", l: "Standards compliance" },
      ]}
      process={[
        { title: "Feasibility", desc: "Route studies, options appraisal and business case support." },
        { title: "Concept Design", desc: "Track alignment, OLE and systems integration concepts." },
        { title: "Detailed Design", desc: "Multidisciplinary design coordination and interface management." },
        { title: "Assurance", desc: "Independent review against safety and engineering standards." },
      ]}
      sections={[
        { title: "Track & Civils", items: ["Track alignment & geometry", "Permanent way design", "Civil & structural interfaces", "Drainage & earthworks review"] },
        { title: "OLE & Electrification", items: ["Overhead line equipment design", "Traction power studies", "Clearance & isolation planning", "Energy efficiency review"] },
        { title: "Systems Integration", items: ["Multidisciplinary interface management", "Systems assurance", "Configuration management", "Stakeholder coordination"] },
        { title: "Key Advantages", items: ["Cross-discipline engineering bench", "Standards-led methodology", "Programme & risk management", "Global delivery experience"] },
      ]}
      related={[
        { name: "Rail Signalling", href: "/services/rail" },
        { name: "Testing & Commissioning", href: "/services/testing-commissioning" },
        { name: "All services", href: "/services" },
      ]}
    />
  );
}
