// app/services/[id]/page.tsx
import { notFound } from "next/navigation";
import { allServices, ServiceItem } from "@/data/all-services";
import ServiceDetailClient from "@/components/pages/ServiceDetailClient";
import { Service, WithContext } from "schema-dts";

export async function generateStaticParams() {
  return allServices.map((service) => ({ id: service.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const service = allServices.find((s) => s.id === id);
  if (!service) {
    return { title: "Service Not Found" };
  }
  return {
    title: `${service.title} | Onmog Softsol`,
    description: service.description,
    alternates: { canonical: `/services/${service.id}` },
  };
}

export default async function ServicePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const service = allServices.find((s) => s.id === id);
  if (!service) {
    notFound();
    return null;
  }

  const jsonLd: WithContext<Service> = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.title,
    "description": service.description,
    "provider": {
      "@type": "Organization",
      "name": "Onmog Softsol",
      "url": "https://onmog.com"
    },
    "serviceType": service.category,
    "areaServed": "Global"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ServiceDetailClient service={service} />
    </>
  );
}

  