import type { Metadata } from "next";
import ServiceDetail from "@/components/service-detail";

export const metadata: Metadata = {
  title: "Rail Signalling — Onmog Softsol",
  description:
    "Safe, reliable and efficient signalling for railway and metro infrastructure — design, consultancy, testing and commissioning.",
  alternates: { canonical: "/services/rail" },
};

export default function RailServicePage() {
  return (
    <ServiceDetail
      accent="#1d59c2"
      tint="rgba(29,89,194,0.13)"
      glow="rgba(29,89,194,0.28)"
      kicker="Rail Engineering"
      title="Rail Signalling"
      duration="Ongoing"
      complexity="Enterprise"
      icon="M4 11 H20 M4.5 19 L2 22 M19.5 19 L22 22 M12 2 C8 2 4 2.5 4 6 V15.5 A3.5 3.5 0 0 0 7.5 19 H16.5 A3.5 3.5 0 0 0 20 15.5 V6 C20 2.5 16 2 12 2"
      intro="Safe, reliable and efficient signalling for railway and metro infrastructure — end-to-end design, consultancy, project support, installation supervision, testing and commissioning, for conventional and advanced systems alike."
      stats={[
        { n: "SIL-4", l: "Safety integrity" },
        { n: "IRSE", l: "Accredited resources" },
        { n: "0", l: "Non-conformities" },
      ]}
      process={[
        { title: "Site Survey", desc: "Comprehensive site surveys and correlation to identify existing infrastructure." },
        { title: "Scheme Design", desc: "Development of signalling plans and interlocking principles." },
        { title: "Detailed Design", desc: "Relay and electronic interlocking design with SSI/CBI integration." },
        { title: "Verification", desc: "Independent design verification to ensure safety and compliance." },
        { title: "Commissioning", desc: "Final testing and operational handover for safe rail operations." },
      ]}
      sections={[
        { title: "Scoping & Feasibility", items: ["Signalling scope development", "Feasibility studies & risk assessments", "Site surveys and correlation", "Interlocking principles review", "Mandatory deficiencies reporting"] },
        { title: "Scheme Design", items: ["Signalling calculations", "TPWS effectiveness calculations", "Final Project Specifications (FPS)", "Signalling scheme plans", "Material schedule development"] },
        { title: "Detailed Design", items: ["Relay and electronic interlocking design", "SSI and CBI interlocking design", "Independent design verification", "Location area plans and bonding plans", "Control panel and signal box design"] },
        { title: "Key Advantages", items: ["Expertise in conventional and modern systems", "IRSE accredited and competent resources", "End-to-end signalling delivery capability", "Global project delivery experience", "Focus on safety, reliability and efficiency"] },
      ]}
      related={[
        { name: "Contract Staffing", href: "/services/staffing" },
        { name: "Web Development", href: "/services/digital" },
        { name: "All services", href: "/services" },
      ]}
    />
  );
}
