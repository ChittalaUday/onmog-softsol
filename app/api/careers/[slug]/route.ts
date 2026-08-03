import { NextResponse } from "next/server";
import { getCareerBySlug } from "@/lib/cms";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  try {
    const job = await getCareerBySlug(slug);
    if (!job) {
      return NextResponse.json({ error: "Job not found" }, { status: 404 });
    }
    return NextResponse.json({ job });
  } catch {
    return NextResponse.json({ error: "Failed to fetch job" }, { status: 500 });
  }
}
