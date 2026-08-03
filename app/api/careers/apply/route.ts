import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const base = process.env.CMS_API_URL;
  const key = process.env.CMS_API_KEY;
  if (!base || !key) {
    return NextResponse.json({ error: "Careers API is not configured" }, { status: 500 });
  }

  const formData = await request.formData();
  try {
    const res = await fetch(`${base}/api/public/careers/apply`, {
      method: "POST",
      headers: { "x-api-key": key },
      body: formData,
    });

    const text = await res.text();
    let data;
    try {
      data = JSON.parse(text);
    } catch {
      data = { error: "Received non-JSON response from CMS API" };
    }

    return NextResponse.json(data, { status: res.ok ? 200 : res.status || 500 });
  } catch (err: any) {
    return NextResponse.json({ error: err.message || "Failed to reach CMS API" }, { status: 500 });
  }
}
