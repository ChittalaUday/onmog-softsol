import { Metadata } from "next";
import { ClientsPageClient } from "@/components/pages/ClientsPageClient";

export const metadata: Metadata = {
  title: "Our Clients | Global Partnerships",
  description: "Explore the global alliances and partnerships that drive innovation across rail, IT, and life sciences at Onmog Softsol.",
  alternates: {
    canonical: "/clients",
  },
};

export default function ClientsPage() {
  return <ClientsPageClient />;
}
