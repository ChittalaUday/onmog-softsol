import type { Metadata } from "next";
import ServiceDetail from "@/components/service-detail";

export const metadata: Metadata = {
  title: "Payroll Services — Onmog Softsol",
  description:
    "Accurate, confidential and fully compliant payroll — salary processing, statutory deductions and MIS reporting.",
  alternates: { canonical: "/services/payroll-services" },
};

export default function PayrollServicesPage() {
  return (
    <ServiceDetail
      accent="#14a8a2"
      tint="rgba(20,168,162,0.12)"
      glow="rgba(20,168,162,0.25)"
      kicker="Workforce & Staffing"
      title="Payroll Services"
      duration="Monthly"
      complexity="Basic"
      icon="M14 2 H6 A2 2 0 0 0 4 4 V20 A2 2 0 0 0 6 22 H18 A2 2 0 0 0 20 20 V8 Z M14 2 V8 H20 M9 15 L11 17 L15 13"
      intro="Accurate, confidential and fully compliant payroll — salary processing, statutory deductions and MIS reporting so your workforce gets paid right, every time."
      stats={[
        { n: "100%", l: "Statutory compliance" },
        { n: "0", l: "Missed cycles" },
        { n: "24/7", l: "Employee support" },
      ]}
      process={[
        { title: "Onboarding", desc: "Employee data capture and system setup." },
        { title: "Processing", desc: "Monthly salary runs with statutory deductions." },
        { title: "Compliance", desc: "PF, ESI and TDS filings handled end-to-end." },
        { title: "Reporting", desc: "MIS dashboards and reconciliation reports." },
      ]}
      sections={[
        { title: "Payroll Processing", items: ["Monthly salary processing", "Variable pay & bonus runs", "Full & final settlements", "Payslip distribution"] },
        { title: "Statutory Compliance", items: ["PF & ESI management", "TDS computation & filing", "Professional tax", "Labour welfare fund"] },
        { title: "Reporting", items: ["MIS & cost-centre reports", "Reconciliation statements", "Audit-ready records", "Custom dashboards"] },
        { title: "Key Advantages", items: ["Bank-grade data security", "Zero compliance penalties track record", "Dedicated payroll desk", "Scales with headcount"] },
      ]}
      related={[
        { name: "Contract Staffing", href: "/services/staffing" },
        { name: "Labor Law Compliance", href: "/services/labor-law-compliance" },
        { name: "All services", href: "/services" },
      ]}
    />
  );
}
