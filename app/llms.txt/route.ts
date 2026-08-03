import { SITE_NAME, SITE_DESCRIPTION, SITE_URL } from "@/lib/site";
import { getCareers } from "@/lib/cms";

export const dynamic = "force-static";
export const revalidate = 3600;

export async function GET() {
  const jobs = await getCareers().catch(() => []);
  const baseUrl = SITE_URL.replace(/\/$/, "");

  let markdown = `# ${SITE_NAME}\n\n`;
  markdown += `> ${SITE_DESCRIPTION}\n\n`;

  markdown += `## Core Sections & Pages\n`;
  markdown += `- [Home](${baseUrl}/): Enterprise technology solutions, staffing, engineering, and digital marketing overview.\n`;
  markdown += `- [About Us](${baseUrl}/about): Mission, timeline, leadership vision, values, and engineering history.\n`;
  markdown += `- [Services Directory](${baseUrl}/services): Full catalogue of Rail Signaling, Staffing, Digital Development, and Marketing.\n`;
  markdown += `- [Careers](${baseUrl}/careers): Active career opportunities, company culture, benefits, and open applications.\n\n`;

  markdown += `## Services Breakdown\n`;
  markdown += `- [Rail Signaling Engineering](${baseUrl}/services/rail): Interlocking designs, RAMS assurance, testing, and consultancy.\n`;
  markdown += `- [Contract & IT Staffing](${baseUrl}/services/staffing): Technical talent sourcing, contract staffing, permanent recruitment, and HR outsourcing.\n`;
  markdown += `- [Web & Mobile Software Development](${baseUrl}/services/digital): Enterprise Web applications, Mobile apps, Cloud/DevOps, and ERP integrations.\n`;
  markdown += `- [Digital Marketing & Brand Growth](${baseUrl}/services/seo-search): SEO optimization, PPC performance campaigns, and brand strategy.\n\n`;

  if (jobs && jobs.length > 0) {
    markdown += `## Open Career Positions\n`;
    jobs.forEach((job) => {
      const loc = job.location ? ` (${job.location})` : "";
      markdown += `- [${job.title}](${baseUrl}/careers/${job.slug}): ${job.department}${loc} — ${job.jobType}\n`;
    });
    markdown += `\n`;
  }

  markdown += `## Contact Information\n`;
  markdown += `- **Email:** hello@onmogsoftsol.com\n`;
  markdown += `- **Phone:** +91 9000161826\n`;
  markdown += `- **Address:** The Business Park – by Pranava Group, 9th Floor, Kondapur, Hyderabad, Telangana – 500084, India\n`;

  return new Response(markdown, {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
    },
  });
}
