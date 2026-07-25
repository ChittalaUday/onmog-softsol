export type QuestionType = "SHORT_TEXT" | "LONG_TEXT" | "SINGLE_CHOICE" | "MULTIPLE_CHOICE" | "YES_NO" | "FILE";

export type CmsJobQuestion = {
  id: string;
  question: string;
  type: QuestionType;
  required: boolean;
  order: number;
  options: string[] | null;
};

export type CmsJob = {
  id: string;
  title: string;
  slug: string;
  department: string;
  location: string;
  jobType: "FULL_TIME" | "PART_TIME" | "CONTRACT" | "INTERNSHIP" | "TEMPORARY";
  description: string;
  responsibilities: string | null;
  requirements: string | null;
  salaryMin: number | null;
  salaryMax: number | null;
  currency: string;
  requiredExperience: string | null;
  closingDate: string | null;
  questions: CmsJobQuestion[];
};

function cmsHeaders(): { base: string; key: string } | null {
  const base = process.env.CMS_API_URL;
  const key = process.env.CMS_API_KEY;
  return base && key ? { base, key } : null;
}

export async function getCareers(department?: string): Promise<CmsJob[]> {
  const cfg = cmsHeaders();
  if (!cfg) return [];

  try {
    const url = new URL(`${cfg.base}/api/public/careers`);
    url.searchParams.set("limit", "100");
    if (department) url.searchParams.set("department", department);
    const res = await fetch(url, { headers: { "x-api-key": cfg.key } });
    if (!res.ok) return [];
    const data = await res.json();
    return data.jobs ?? [];
  } catch {
    return [];
  }
}

export async function getCareerBySlug(slug: string): Promise<CmsJob | null> {
  const cfg = cmsHeaders();
  if (!cfg) return null;

  try {
    const res = await fetch(`${cfg.base}/api/public/careers/${encodeURIComponent(slug)}`, {
      headers: { "x-api-key": cfg.key },
    });
    if (!res.ok) return null;
    const data = await res.json();
    return data.job ?? null;
  } catch {
    return null;
  }
}

export async function getDepartments(): Promise<string[]> {
  const cfg = cmsHeaders();
  if (!cfg) return [];

  try {
    const res = await fetch(`${cfg.base}/api/public/careers/departments`, {
      headers: { "x-api-key": cfg.key },
    });
    if (!res.ok) return [];
    const data = await res.json();
    return data.departments ?? [];
  } catch {
    return [];
  }
}

export const JOB_TYPE_LABELS: Record<CmsJob["jobType"], string> = {
  FULL_TIME: "Full-time",
  PART_TIME: "Part-time",
  CONTRACT: "Contract",
  INTERNSHIP: "Internship",
  TEMPORARY: "Temporary",
};

export const QUESTION_TYPE_LABELS: Record<QuestionType, string> = {
  SHORT_TEXT: "Short answer",
  LONG_TEXT: "Long answer",
  SINGLE_CHOICE: "Single choice",
  MULTIPLE_CHOICE: "Multiple choice",
  YES_NO: "Yes / No",
  FILE: "File upload",
};
