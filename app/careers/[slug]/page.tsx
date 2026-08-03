import { Suspense } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Footer from "@/components/footer";
import RevealEffect from "@/components/reveal-effect";
import ApplicationForm from "@/components/application-form";
import { getCareerBySlug, formatExperience, JOB_TYPE_LABELS, type CmsJob } from "@/lib/cms";

const ACCENT = "#1d59c2";
const TINT = "rgba(29,89,194,0.13)";

const gridBg = {
  position: "absolute" as const,
  inset: 0,
  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='44' height='44'%3E%3Cpath d='M0 .5H43.5V44' fill='none' stroke='%230d2248' stroke-opacity='.05'/%3E%3C/svg%3E")`,
};
const sectionTitle = { margin: "36px 0 16px", fontSize: 22, fontWeight: 800, letterSpacing: "-0.02em", color: "#0e1a2e" };

function formatSalary(job: CmsJob): string | null {
  if (!job.salaryMin && !job.salaryMax) return null;
  const fmt = (n: number) => `${job.currency} ${n.toLocaleString("en-IN")}`;
  if (job.salaryMin && job.salaryMax) return `${fmt(job.salaryMin)} – ${fmt(job.salaryMax)} p.a.`;
  return `${fmt((job.salaryMin ?? job.salaryMax) as number)}+ p.a.`;
}

function Chip({ icon, children }: { icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 7, padding: "9px 16px", borderRadius: 999, fontSize: 12.5, fontWeight: 700, color: "#33456b", background: "rgba(13,34,72,0.05)", border: "1px solid rgba(13,34,72,0.10)" }}>
      {icon}
      {children}
    </span>
  );
}

const iconProps = {
  width: 13,
  height: 13,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

function PinIcon() {
  return (
    <svg {...iconProps}>
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}
function BriefcaseIcon() {
  return (
    <svg {...iconProps}>
      <path d="M4 7 H20 A2 2 0 0 1 22 9 V19 A2 2 0 0 1 20 21 H4 A2 2 0 0 1 2 19 V9 A2 2 0 0 1 4 7 M8 7 V5 A2 2 0 0 1 10 3 H14 A2 2 0 0 1 16 5 V7 M2 12 H22" />
    </svg>
  );
}
function ClockIcon() {
  return (
    <svg {...iconProps}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7 V12 L15 15" />
    </svg>
  );
}
function CalendarIcon() {
  return (
    <svg {...iconProps}>
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M16 2 V6 M8 2 V6 M3 10 H21" />
    </svg>
  );
}
function MoneyIcon() {
  return (
    <svg {...iconProps}>
      <circle cx="12" cy="12" r="9" />
      <path d="M9.5 15 C9.5 16.5 10.5 17 12 17 C13.5 17 14.5 16.2 14.5 15 C14.5 12.5 9.5 13.5 9.5 11 C9.5 9.8 10.5 9 12 9 C13.5 9 14.5 9.5 14.5 11 M12 7 V9 M12 17 V19" />
    </svg>
  );
}

function Prose({ html }: { html: string }) {
  return <div style={{ fontSize: 15, lineHeight: 1.75, color: "#33456b" }} dangerouslySetInnerHTML={{ __html: html }} />;
}

function JobDetailSkeleton() {
  return (
    <div style={{ maxWidth: 860, margin: "0 auto", padding: "150px 24px 80px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "16px 20px", borderRadius: 14, background: "rgba(29,89,194,0.05)", border: "1px solid rgba(29,89,194,0.12)", marginBottom: 32 }}>
        <div style={{ width: 22, height: 22, borderRadius: "50%", border: "2.5px solid rgba(29,89,194,0.2)", borderTopColor: ACCENT, animation: "spin 0.8s linear infinite" }} />
        <span style={{ fontSize: 13.5, fontWeight: 700, color: ACCENT }}>Loading job details...</span>
      </div>
      <div style={{ height: 16, width: 140, borderRadius: 6, background: "rgba(13,34,72,0.08)", animation: "pulse 1.5s infinite", marginBottom: 20 }} />
      <div style={{ height: 44, width: "80%", borderRadius: 10, background: "rgba(13,34,72,0.10)", animation: "pulse 1.5s infinite", marginBottom: 24 }} />
      <div style={{ display: "flex", gap: 10, marginBottom: 30 }}>
        <div style={{ height: 32, width: 100, borderRadius: 999, background: "rgba(13,34,72,0.08)", animation: "pulse 1.5s infinite" }} />
        <div style={{ height: 32, width: 120, borderRadius: 999, background: "rgba(13,34,72,0.08)", animation: "pulse 1.5s infinite" }} />
        <div style={{ height: 32, width: 140, borderRadius: 999, background: "rgba(13,34,72,0.08)", animation: "pulse 1.5s infinite" }} />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 40 }}>
        <div style={{ height: 18, width: "100%", borderRadius: 6, background: "rgba(13,34,72,0.06)", animation: "pulse 1.5s infinite" }} />
        <div style={{ height: 18, width: "92%", borderRadius: 6, background: "rgba(13,34,72,0.06)", animation: "pulse 1.5s infinite" }} />
        <div style={{ height: 18, width: "85%", borderRadius: 6, background: "rgba(13,34,72,0.06)", animation: "pulse 1.5s infinite" }} />
      </div>
      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        @keyframes pulse { 0%, 100% { opacity: 0.4; } 50% { opacity: 0.9; } }
      `}</style>
    </div>
  );
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const job = await getCareerBySlug(slug);
  if (!job) return { title: "Career — Onmog Softsol" };

  const rawTitle = job.metaTitle || job.seoTitle || job.metadata?.metaTitle || job.metadata?.title || job.title;
  const rawDesc = job.metaDescription || job.seoDescription || job.metadata?.metaDescription || job.metadata?.description || job.description;

  const cleanDesc = rawDesc ? rawDesc.replace(/<[^>]+>/g, "").trim().slice(0, 160) : "";
  const pageTitle = rawTitle.includes("Onmog") ? rawTitle : `${rawTitle} — Onmog Softsol Careers`;

  return {
    title: pageTitle,
    description: cleanDesc,
    alternates: { canonical: `/careers/${job.slug}` },
    openGraph: {
      title: pageTitle,
      description: cleanDesc,
      url: `/careers/${job.slug}`,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: cleanDesc,
    },
  };
}

async function CareerDetailContent({ slug }: { slug: string }) {
  const job = await getCareerBySlug(slug);
  if (!job) notFound();

  const salary = formatSalary(job);
  const closing = job.closingDate
    ? new Date(job.closingDate).toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" })
    : null;
  const expText = formatExperience(job.requiredExperience);

  return (
    <>
      <section style={{ position: "relative", overflow: "hidden", padding: "150px 24px 60px" }}>
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
          <div style={{ position: "absolute", width: "60vw", height: "60vw", left: "-18vw", top: "-26vw", borderRadius: "50%", background: `radial-gradient(circle,${TINT},transparent 62%)`, filter: "blur(60px)", animation: "auroraA 26s ease-in-out infinite" }} />
          <div style={gridBg} />
        </div>
        <div style={{ position: "relative", maxWidth: 860, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 22, flexWrap: "wrap" }}>
            <Link href="/careers" style={{ fontSize: 12, fontWeight: 700, color: "#5d6c8a" }}>
              Careers
            </Link>
            <span style={{ color: "#b3bccd", fontSize: 12 }}>/</span>
            <span style={{ fontSize: 12, fontWeight: 800, letterSpacing: "0.14em", textTransform: "uppercase", color: ACCENT }}>{job.department}</span>
          </div>
          <h1 style={{ margin: 0, fontSize: "clamp(32px,4.5vw,58px)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.08 }}>{job.title}</h1>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 22 }}>
            <Chip icon={<PinIcon />}>{job.location}</Chip>
            <Chip icon={<BriefcaseIcon />}>{JOB_TYPE_LABELS[job.jobType]}</Chip>
            {expText && <Chip icon={<ClockIcon />}>{expText}</Chip>}
            {salary && <Chip icon={<MoneyIcon />}>{salary}</Chip>}
            {closing && <Chip icon={<CalendarIcon />}>Closes {closing}</Chip>}
          </div>
          <a
            href="#apply"
            style={{ display: "inline-block", marginTop: 30, padding: "15px 32px", borderRadius: 14, fontSize: 15, fontWeight: 700, color: "#fff", background: ACCENT, boxShadow: `0 8px 30px ${TINT}` }}
          >
            Apply for this role
          </a>
        </div>
      </section>

      <section style={{ padding: "0 24px 20px", maxWidth: 860, margin: "0 auto" }}>
        <Prose html={job.description} />
        {job.responsibilities && (
          <>
            <h2 style={sectionTitle}>Responsibilities</h2>
            <Prose html={job.responsibilities} />
          </>
        )}
        {job.requirements && (
          <>
            <h2 style={sectionTitle}>Requirements</h2>
            <Prose html={job.requirements} />
          </>
        )}
      </section>

      <section id="apply" style={{ padding: "20px 24px 12vh", maxWidth: 860, margin: "0 auto" }}>
        <h2 style={sectionTitle}>Apply for this role</h2>
        <ApplicationForm job={job} accent={ACCENT} tint={TINT} />
      </section>
    </>
  );
}

export default async function CareerDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return (
    <>
      <RevealEffect />
      <Suspense fallback={<JobDetailSkeleton />}>
        <CareerDetailContent slug={slug} />
      </Suspense>
      <Footer />
    </>
  );
}
