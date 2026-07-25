import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const base = process.env.CMS_API_URL;
  const key = process.env.CMS_API_KEY;
  if (!base || !key) {
    return NextResponse.json({ error: "Careers API is not configured" }, { status: 500 });
  }

  const formData = await request.formData();
  const res = await fetch(`${base}/api/public/careers/apply`, {
    method: "POST",
    headers: { "x-api-key": key },
    body: formData,
  });
  const data = await res.json().catch(() => ({ error: "Unexpected response from careers API" }));
  return NextResponse.json(data, { status: res.status });
}
