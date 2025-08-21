import { NextResponse } from "next/server";
export const runtime = "edge";
export async function POST(req: Request) {
  const data = await req.json().catch(() => ({}));
  const email = typeof data?.email === "string" ? data.email : "";
  const ok = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email);
  if (!ok) return NextResponse.json({ ok: false, error: "Invalid email" }, { status: 400 });
  return NextResponse.json({ ok: true, email });
}

