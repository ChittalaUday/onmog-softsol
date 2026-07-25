import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    { url: `${SITE_URL}/`, lastModified, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE_URL}/services`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/services/rail`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/services/rail-consultancy`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/services/testing-commissioning`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/services/rams-assurance`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/services/staffing`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/services/permanent-recruitment`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/services/payroll-services`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/services/hr-outsourcing`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/services/project-outsourcing`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/services/labor-law-compliance`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/services/digital`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/services/app-development`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/services/erp-integration`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/services/cloud-devops`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/services/seo-search`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/services/ppc-performance`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/services/brand-strategy`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/about`, lastModified, changeFrequency: "yearly", priority: 0.7 },
    { url: `${SITE_URL}/careers`, lastModified, changeFrequency: "weekly", priority: 0.8 },
  ];
}
