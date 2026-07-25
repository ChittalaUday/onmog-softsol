import type { Metadata } from "next";
import ServiceDetail from "@/components/service-detail";

export const metadata: Metadata = {
  title: "ERP Integration — Onmog Softsol",
  description:
    "Connect the systems your business runs on — CRM, finance, inventory and HR — into one reliable data flow.",
  alternates: { canonical: "/services/erp-integration" },
};

export default function ErpIntegrationPage() {
  return (
    <ServiceDetail
      accent="#3fa03c"
      tint="rgba(63,160,60,0.13)"
      glow="rgba(63,160,60,0.28)"
      kicker="IT Solutions"
      title="ERP Integration"
      duration="3–6 months"
      complexity="Advanced"
      icon="M4 5 a8 3 0 0 0 16 0 a8 3 0 0 0 -16 0 M4 5 V19 a8 3 0 0 0 16 0 V5 M4 12 a8 3 0 0 0 16 0"
      intro="Connect the systems your business runs on — CRM, finance, inventory and HR — into one reliable data flow, so teams stop re-keying and start trusting the numbers."
      stats={[
        { n: "99.9%", l: "Sync reliability" },
        { n: "3-6mo", l: "Typical delivery" },
        { n: "24/7", l: "Monitoring" },
      ]}
      process={[
        { title: "Systems Audit", desc: "Mapping existing systems, data flows and gaps." },
        { title: "Integration Design", desc: "API and middleware architecture planning." },
        { title: "Build & Migrate", desc: "Integration build with validated data migration." },
        { title: "Monitor & Support", desc: "Ongoing monitoring and incident response." },
      ]}
      sections={[
        { title: "Integration Scope", items: ["CRM & finance integration", "Inventory & supply chain sync", "HR & payroll data flows", "Third-party API integration"] },
        { title: "Platforms", items: ["SAP & Oracle", "Microsoft Dynamics", "Zoho & Odoo", "Custom legacy systems"] },
        { title: "Data & Security", items: ["Data validation & cleansing", "Encrypted data transfer", "Audit logging", "Role-based access control"] },
        { title: "Key Advantages", items: ["Reduced manual re-entry", "Single source of truth", "Faster reporting cycles", "Vendor-agnostic approach"] },
      ]}
      related={[
        { name: "Web Development", href: "/services/digital" },
        { name: "Cloud & DevOps", href: "/services/cloud-devops" },
        { name: "All services", href: "/services" },
      ]}
    />
  );
}
