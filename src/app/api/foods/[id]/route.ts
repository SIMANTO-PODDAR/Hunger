import { foods } from "@/data/foods";
import { NextResponse } from "next/server";

type Props = {
    params: Promise<{
        id: string;
    }>;
};

export async function GET(_: Request, { params }: Props) {
    const { id } = await params;

    const food = foods.find((item) => item.id === id);

    if (!food) {
        return NextResponse.json(
            { message: "Food not found" },
            { status: 404 }
        );
    }

    return NextResponse.json(food);
}