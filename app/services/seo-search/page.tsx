import type { Metadata } from "next";
import ServiceDetail from "@/components/service-detail";

export const metadata: Metadata = {
  title: "SEO & Search — Onmog Softsol",
  description:
    "Technical SEO, content strategy and backlink growth engineered for long-term visibility and high-intent organic traffic.",
  alternates: { canonical: "/services/seo-search" },
};

export default function SeoSearchPage() {
  return (
    <ServiceDetail
      accent="#6da41c"
      tint="rgba(109,164,28,0.14)"
      glow="rgba(109,164,28,0.28)"
      kicker="Digital Growth"
      title="SEO & Search"
      duration="Ongoing"
      complexity="Advanced"
      icon="M23 6 L13.5 15.5 L8.5 10.5 L1 18 M17 6 H23 V12"
      intro="Technical SEO, content strategy and backlink growth engineered for long-term visibility — so you show up for the searches that actually convert."
      stats={[
        { n: "3-6mo", l: "Time to traction" },
        { n: "100%", l: "White-hat methods" },
        { n: "24/7", l: "Rank tracking" },
      ]}
      process={[
        { title: "Audit", desc: "Technical, content and backlink audit of current standing." },
        { title: "Strategy", desc: "Keyword mapping and content roadmap." },
        { title: "Execution", desc: "On-page, technical and link-building work." },
        { title: "Report & Refine", desc: "Monthly reporting and strategy iteration." },
      ]}
      sections={[
        { title: "Technical SEO", items: ["Site speed & Core Web Vitals", "Crawl & indexation fixes", "Structured data & schema", "Mobile optimization"] },
        { title: "Content Strategy", items: ["Keyword research & mapping", "Content calendar & briefs", "On-page optimization", "Topic cluster building"] },
        { title: "Off-Page", items: ["White-hat link building", "Digital PR outreach", "Local SEO & citations", "Competitor gap analysis"] },
        { title: "Key Advantages", items: ["Transparent monthly reporting", "No black-hat tactics", "Analytics-driven iteration", "Cross-channel alignment"] },
      ]}
      related={[
        { name: "PPC & Performance", href: "/services/ppc-performance" },
        { name: "Brand Strategy", href: "/services/brand-strategy" },
        { name: "All services", href: "/services" },
      ]}
    />
  );
}
