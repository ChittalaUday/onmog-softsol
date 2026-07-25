import type { Metadata } from "next";
import ServiceDetail from "@/components/service-detail";

export const metadata: Metadata = {
  title: "Cloud & DevOps — Onmog Softsol",
  description:
    "Cloud architecture, CI/CD pipelines and infrastructure automation that gets releases out faster and cuts your infrastructure bill.",
  alternates: { canonical: "/services/cloud-devops" },
};

export default function CloudDevOpsPage() {
  return (
    <ServiceDetail
      accent="#3fa03c"
      tint="rgba(63,160,60,0.13)"
      glow="rgba(63,160,60,0.28)"
      kicker="IT Solutions"
      title="Cloud & DevOps"
      duration="Ongoing"
      complexity="Advanced"
      icon="M7 18 a4 4 0 0 1 0 -8 a5 5 0 0 1 9.8 -1.5 A4.5 4.5 0 0 1 17.5 18 H7"
      intro="Cloud architecture, CI/CD pipelines and infrastructure automation that gets releases out faster, keeps environments consistent, and cuts your infrastructure bill."
      stats={[
        { n: "99.95%", l: "Uptime target" },
        { n: "10x", l: "Faster deployments" },
        { n: "24/7", l: "Monitoring" },
      ]}
      process={[
        { title: "Assessment", desc: "Reviewing current infrastructure and bottlenecks." },
        { title: "Architecture", desc: "Designing scalable, cost-efficient cloud infrastructure." },
        { title: "Automation", desc: "Building CI/CD pipelines and infrastructure as code." },
        { title: "Operate", desc: "Ongoing monitoring, scaling and incident response." },
      ]}
      sections={[
        { title: "Cloud Architecture", items: ["AWS, Azure & GCP", "Containerization (Docker/K8s)", "Auto-scaling infrastructure", "Cost optimization"] },
        { title: "DevOps & CI/CD", items: ["Pipeline automation", "Infrastructure as code", "Automated testing gates", "Blue-green deployments"] },
        { title: "Reliability", items: ["24/7 monitoring & alerting", "Incident response", "Disaster recovery planning", "Security hardening"] },
        { title: "Key Advantages", items: ["Faster, safer releases", "Lower infrastructure spend", "Reduced downtime", "On-call support"] },
      ]}
      related={[
        { name: "Web Development", href: "/services/digital" },
        { name: "ERP Integration", href: "/services/erp-integration" },
        { name: "All services", href: "/services" },
      ]}
    />
  );
}
