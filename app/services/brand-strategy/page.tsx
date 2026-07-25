import type { Metadata } from "next";
import ServiceDetail from "@/components/service-detail";

export const metadata: Metadata = {
  title: "Brand Strategy — Onmog Softsol",
  description:
    "Positioning, identity and messaging built on research, not guesswork — a brand system your team can apply consistently across every channel.",
  alternates: { canonical: "/services/brand-strategy" },
};

export default function BrandStrategyPage() {
  return (
    <ServiceDetail
      accent="#6da41c"
      tint="rgba(109,164,28,0.14)"
      glow="rgba(109,164,28,0.28)"
      kicker="Digital Growth"
      title="Brand Strategy"
      duration="6–10 weeks"
      complexity="Advanced"
      icon="M12 2 l2.9 6.1 6.7 .7 -5 4.6 1.4 6.6 -6 -3.4 -6 3.4 1.4 -6.6 -5 -4.6 6.7 -.7 Z"
      intro="Positioning, identity and messaging built on research, not guesswork — a brand system your team can apply consistently across every channel."
      stats={[
        { n: "6-10wk", l: "Typical delivery" },
        { n: "100%", l: "Custom systems" },
        { n: "Ongoing", l: "Brand governance" },
      ]}
      process={[
        { title: "Discovery", desc: "Market, competitor and audience research." },
        { title: "Positioning", desc: "Defining differentiation and core messaging." },
        { title: "Identity", desc: "Visual identity system and brand guidelines." },
        { title: "Rollout", desc: "Channel-by-channel brand implementation." },
      ]}
      sections={[
        { title: "Research", items: ["Market & competitor analysis", "Audience persona development", "Brand audit", "Positioning workshops"] },
        { title: "Identity System", items: ["Logo & visual identity", "Brand guidelines", "Tone of voice", "Messaging framework"] },
        { title: "Activation", items: ["Website & collateral rollout", "Social & campaign templates", "Internal brand training", "Launch planning"] },
        { title: "Key Advantages", items: ["Research-backed positioning", "Consistent cross-channel system", "Faster content production", "Stronger brand recall"] },
      ]}
      related={[
        { name: "SEO & Search", href: "/services/seo-search" },
        { name: "PPC & Performance", href: "/services/ppc-performance" },
        { name: "All services", href: "/services" },
      ]}
    />
  );
}
