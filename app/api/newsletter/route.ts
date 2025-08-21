import { NextResponse } from "next/server";
export const runtime = "edge";

export async function POST(req: Request) {
  let email = "";

  // Try JSON first
  try {
    const data = await req.clone().json();
    if (typeof data?.email === "string") email = data.email;
  } catch {}

  // Fallback: URL-encoded form (from an HTML <form>)
  if (!email) {
    const body = await req.text();
    const params = new URLSearchParams(body);
    email = params.get("email") ?? "";
  }

  const ok = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email);
  if (!ok) {
    return NextResponse.json({ ok: false, error: "Invalid email" }, { status: 400 });
  }
  return NextResponse.json({ ok: true, email });
}
