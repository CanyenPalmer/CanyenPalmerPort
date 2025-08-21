import { NextResponse } from "next/server";
import { SECTIONS } from "../data";
export const runtime = "edge";
export async function GET() { return NextResponse.json(SECTIONS); }

