import { NextRequest, NextResponse } from "next/server";
import { collection, getDocs, query, where, } from "firebase/firestore";
import { db } from "@/app/firebase";

export async function GET(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url);

        const uid = searchParams.get("uid");
        const page = Number(searchParams.get("page") || 1);
        const limit = Number(searchParams.get("limit") || 8);

        if (!uid) {
            return NextResponse.json(
                {
                    success: false,
                    message: "User ID is required.",
                },
                { status: 400 }
            );
        }

        const foodsRef = collection(db, "foods");

        const q = query(
            foodsRef,
            where("userId", "==", uid)
        );

        const snapshot = await getDocs(q);

        const allFoods = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));

        const totalFoods = allFoods.length;
        const totalPages = Math.max(1, Math.ceil(totalFoods / limit));

        const startIndex = (page - 1) * limit;
        const endIndex = startIndex + limit;

        const foods = allFoods.slice(startIndex, endIndex);

        return NextResponse.json(
            {
                success: true,
                foods,
                totalFoods,
                totalPages,
                currentPage: page,
            },
            { status: 200 }
        );
    } catch (error) {
        console.error("Manage Foods API Error:", error);

        return NextResponse.json(
            {
                success: false,
                message: "Something went wrong.",
            },
            { status: 500 }
        );
    }
}