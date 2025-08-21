import { NextResponse } from "next/server";
import { LOCATIONS } from "../data";
export const runtime = "edge";
export async function GET() { return NextResponse.json(LOCATIONS); }

