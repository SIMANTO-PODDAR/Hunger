import { foods } from "@/data/foods";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams;

    const category = searchParams.get("category");
    const excludeId = searchParams.get("excludeId");

    let result = foods;

    if (category) {
        result = result.filter(
            (food) => food.category.toLowerCase() === category.toLowerCase()
        );
    }

    if (excludeId) {
        result = result.filter(
            (food) => food.id !== excludeId
        );
    }

    return NextResponse.json(result);
}