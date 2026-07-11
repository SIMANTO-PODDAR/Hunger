import { foods } from "@/data/foods";
import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json(foods);
}