import { NextResponse } from "next/server";
import { METRICS } from "../data";
export const runtime = "edge";
export async function GET() { return NextResponse.json(METRICS); }

