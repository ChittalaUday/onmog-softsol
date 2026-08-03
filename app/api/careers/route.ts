import { NextResponse } from "next/server";
import { getCareers, getDepartments } from "@/lib/cms";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const department = searchParams.get("department") || undefined;

  try {
    const [jobs, departments] = await Promise.all([
      getCareers(department),
      getDepartments(),
    ]);

    return NextResponse.json({ jobs, departments });
  } catch {
    return NextResponse.json({ jobs: [], departments: [] }, { status: 500 });
  }
}
