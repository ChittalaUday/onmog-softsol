import { getCareerBySlug, JOB_TYPE_LABELS } from "@/lib/cms";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import { NextRequest } from "next/server";

export const revalidate = 3600;

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const job = await getCareerBySlug(slug);

  if (!job) {
    return new Response(`# Job Not Found\n\nThe requested position "${slug}" was not found or is closed.`, {
      status: 404,
      headers: { "Content-Type": "text/plain; charset=utf-8" },
    });
  }

  const siteUrl = SITE_URL.replace(/\/$/, "");
  let markdown = `# ${job.title}\n\n`;
  markdown += `> ${job.department} position at ${SITE_NAME} (${job.location || "Remote / On-site"}).\n\n`;

  markdown += `## Position Details\n`;
  markdown += `- **Department:** ${job.department}\n`;
  markdown += `- **Location:** ${job.location || "Hyderabad, India / Remote"}\n`;
  markdown += `- **Job Type:** ${JOB_TYPE_LABELS[job.jobType] || job.jobType}\n`;

  if (job.salaryMin || job.salaryMax) {
    const min = job.salaryMin ? `${job.currency} ${job.salaryMin.toLocaleString()}` : "";
    const max = job.salaryMax ? `${job.currency} ${job.salaryMax.toLocaleString()}` : "";
    markdown += `- **Salary:** ${min} ${max ? `– ${max}` : "+"} p.a.\n`;
  }
  markdown += `\n`;

  if (job.description) {
    markdown += `## Overview\n${job.description}\n\n`;
  }

  if (job.responsibilities) {
    markdown += `## Responsibilities\n${job.responsibilities}\n\n`;
  }

  if (job.requirements) {
    markdown += `## Requirements\n${job.requirements}\n\n`;
  }

  markdown += `## How to Apply\n`;
  markdown += `Apply directly online at [${siteUrl}/careers/${job.slug}](${siteUrl}/careers/${job.slug}) or send your CV to hello@onmogsoftsol.com.\n`;

  return new Response(markdown, {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
    },
  });
}
