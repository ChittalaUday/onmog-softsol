import type { Metadata } from "next";
import Services from "@/components/services";

export const metadata: Metadata = {
  title: "Services — Onmog Softsol",
  description:
    "Ten services across four disciplines: rail engineering, workforce & staffing, IT solutions and digital growth.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return <Services />;
}
