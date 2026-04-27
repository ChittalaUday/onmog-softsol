import { siteConfig } from "@/data/site-config";
import { Organization, LocalBusiness, WithContext } from "schema-dts";

export const OrganizationSchema = () => {
  const schema: WithContext<Organization> = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": siteConfig.name,
    "url": siteConfig.url,
    "logo": `${siteConfig.url}/logo.png`,
    "description": siteConfig.description,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "4th Floor, The Business Park – by Pranava Group",
      "addressLocality": "Kondapur, Hyderabad",
      "addressRegion": "Telangana",
      "postalCode": "500084",
      "addressCountry": "IN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": siteConfig.contact.phone,
      "contactType": "customer service",
      "email": siteConfig.contact.email
    },
    "sameAs": [
      siteConfig.links.twitter,
    ],
    "keywords": siteConfig.tags.join(", ")
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export const LocalBusinessSchema = () => {
  const schema: WithContext<LocalBusiness> = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": siteConfig.name,
    "image": siteConfig.ogImage,
    "url": siteConfig.url,
    "telephone": siteConfig.contact.phone,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "The Business Park – by Pranava Group, 4th Floor",
      "addressLocality": "Kondapur, Hyderabad",
      "addressRegion": "Telangana",
      "postalCode": "500084",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 17.4622, // Approximate for Kondapur
      "longitude": 78.3568
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "09:00",
      "closes": "18:00"
    },
    "knowsAbout": ["Web Development", "IT Services", "Rail Signaling", "Staffing Solutions"],
    "subjectOf": [
      {
        "@type": "WebPage",
        "name": "Dharani Life Sciences",
        "url": "https://www.dharanilifesciences.com/"
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};
