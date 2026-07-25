import type { Metadata } from "next";
import ServiceDetail from "@/components/service-detail";

export const metadata: Metadata = {
  title: "PPC & Performance — Onmog Softsol",
  description:
    "Paid search and social campaigns managed for return, not just reach — tight targeting, continuous testing and budgets that follow what converts.",
  alternates: { canonical: "/services/ppc-performance" },
};

export default function PpcPerformancePage() {
  return (
    <ServiceDetail
      accent="#6da41c"
      tint="rgba(109,164,28,0.14)"
      glow="rgba(109,164,28,0.28)"
      kicker="Digital Growth"
      title="PPC & Performance"
      duration="Ongoing"
      complexity="Advanced"
      icon="M12 22 a10 10 0 1 0 0 -20 a10 10 0 0 0 0 20 M12 16 a4 4 0 1 0 0 -8 a4 4 0 0 0 0 8 M12 12 h.01"
      intro="Paid search and social campaigns managed for return, not just reach — tight targeting, continuous A/B testing and budgets that follow what actually converts."
      stats={[
        { n: "3-5x", l: "Typical ROAS" },
        { n: "Weekly", l: "Optimization cycles" },
        { n: "24/7", l: "Campaign monitoring" },
      ]}
      process={[
        { title: "Audit & Strategy", desc: "Reviewing account history and setting targets." },
        { title: "Campaign Build", desc: "Audience targeting, creative and bid strategy setup." },
        { title: "Launch & Test", desc: "Continuous A/B testing across ad variants." },
        { title: "Scale", desc: "Reallocating budget to top-performing channels." },
      ]}
      sections={[
        { title: "Paid Search", items: ["Google & Bing Ads", "Search & shopping campaigns", "Keyword bid management", "Landing page optimization"] },
        { title: "Paid Social", items: ["Meta & LinkedIn Ads", "Audience targeting & lookalikes", "Creative testing", "Retargeting funnels"] },
        { title: "Performance Tracking", items: ["Conversion tracking setup", "ROAS & CAC reporting", "Attribution modelling", "Budget pacing"] },
        { title: "Key Advantages", items: ["Performance-first budget allocation", "Transparent weekly reporting", "Cross-platform expertise", "Continuous creative testing"] },
      ]}
      related={[
        { name: "SEO & Search", href: "/services/seo-search" },
        { name: "Brand Strategy", href: "/services/brand-strategy" },
        { name: "All services", href: "/services" },
      ]}
    />
  );
}
