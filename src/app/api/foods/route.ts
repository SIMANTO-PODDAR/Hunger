import { db } from "@/app/firebase";
import { collection, getDocs } from "firebase/firestore";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams;

    const search = searchParams.get("search") ?? "";
    const category = searchParams.get("category") ?? "";
    const price = searchParams.get("price") ?? "";
    const sort = searchParams.get("sort") ?? "";
    const excludeId = searchParams.get("excludeId") ?? "";
    const page = parseInt(searchParams.get("page") ?? "1", 10);
    const limit = parseInt(searchParams.get("limit") ?? "8", 10);

    const snapshot = await getDocs(collection(db, "foods"));

    let result = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
    })) as any[];

    result = result.filter((food) => {
        if (search) {
            return food.name.toLowerCase().includes(search.toLowerCase());
        }
        return true;
    });

    if (category) {
        result = result.filter(
            (food) => food.category.toLowerCase() === category.toLowerCase()
        );
    }

    if (excludeId) {
        result = result.filter((food) => food.id !== excludeId);
    }

    if (price) {
        const [minStr, maxStr] = price.split("-");
        const min = parseFloat(minStr);
        const max = parseFloat(maxStr);

        if (!isNaN(min) && !isNaN(max)) {
            result = result.filter(
                (food) => food.price >= min && food.price <= max
            );
        }
    }

    if (sort === "price_asc") {
        result.sort((a, b) => a.price - b.price);
    } else if (sort === "price_desc") {
        result.sort((a, b) => b.price - a.price);
    }

    const totalFoods = result.length;
    const totalPages = Math.max(1, Math.ceil(totalFoods / limit));
    const safePage = Math.min(Math.max(1, page), totalPages);
    const startIndex = (safePage - 1) * limit;

    const paginatedFoods = result.slice(startIndex, startIndex + limit);

    return NextResponse.json({
        foods: paginatedFoods,
        totalFoods,
        totalPages,
        currentPage: safePage,
    });
}