import { Metadata } from "next";
import { ServicesPageClient } from "@/components/pages/ServicesPageClient";

export const metadata: Metadata = {
  title: "Service Catalog | Engineering \u0026 Digital Solutions",
  description: "Browse our comprehensive catalog of 40+ specialized services in Rail Engineering, IT Solutions, Workforce Management, and Digital Growth.",
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesPage() {
  return <ServicesPageClient />;
}
