"use client";

import { Suspense, useEffect, useReducer, useState } from "react";
import { MdOutlineMenuBook } from "react-icons/md";
import Link from "next/link";
import { Button } from "@heroui/react";

import FoodCard from "@/Components/FoodCard";
import FoodPagination from "@/Components/foods/FoodPagination";
import FoodCardSkeleton from "@/Components/foods/FoodCardSkeleton";
import { useAuth } from "@/context/AuthContext";
import { ApiResponse } from "@/types/shared";
import { FetchState, FetchAction } from '@/types/modules';

function fetchReducer(state: FetchState, action: FetchAction): FetchState {
    switch (action.type) {
        case "FETCH_START":
            return { ...state, loading: true, error: null };
        case "FETCH_SUCCESS":
            return {
                ...state,
                loading: false,
                foods: action.foods,
                totalPages: action.totalPages,
                totalFoods: action.totalFoods,
            };
        case "FETCH_ERROR":
            return { ...state, loading: false, error: action.error };
        default:
            return state;
    }
}

const LIMIT = 8;
const SKELETON_COUNT = LIMIT;

function buildApiUrl(uid: string, page: number): string {
    const params = new URLSearchParams();
    params.set("uid", uid);
    params.set("page", String(page));
    params.set("limit", String(LIMIT));
    return `/api/manage-foods?${params.toString()}`;
}


function ManageFoodsContent() {
    const { user, loading: authLoading } = useAuth();
    const [page, setPage] = useState(1);

    const [state, dispatch] = useReducer(fetchReducer, {
        foods: [],
        totalPages: 1,
        totalFoods: 0,
        loading: true,
        error: null,
    });

    useEffect(() => {
        if (!user?.uid) return;

        let cancelled = false;
        dispatch({ type: "FETCH_START" });

        (async () => {
            try {
                const url = buildApiUrl(user.uid, page);
                const res = await fetch(url, { cache: "no-store" });
                if (!res.ok) throw new Error("Failed to fetch foods");
                const data: ApiResponse = await res.json();
                if (!cancelled) {
                    dispatch({
                        type: "FETCH_SUCCESS",
                        foods: data.foods,
                        totalPages: data.totalPages,
                        totalFoods: data.totalFoods,
                    });
                }
            } catch (err: unknown) {
                if (!cancelled) {
                    const msg =
                        err instanceof Error ? err.message : "Something went wrong";
                    dispatch({ type: "FETCH_ERROR", error: msg });
                }
            }
        })();

        return () => {
            cancelled = true;
        };
    }, [user?.uid, page]);

    const handlePageChange = (newPage: number) => {
        setPage(newPage);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    if (authLoading || !user) {
        return (
            <section className="w-full bg-white py-5 md:py-10">
                <div className="mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-4">
                        {Array.from({ length: SKELETON_COUNT }).map((_, i) => (
                            <FoodCardSkeleton key={i} />
                        ))}
                    </div>
                </div>
            </section>
        );
    }

    const { foods, totalPages, totalFoods, loading, error } = state;

    return (
        <section className="w-full bg-white py-5 md:py-10">
            <div className="mx-auto px-6 lg:px-8">
                <div className="max-w-3xl mb-8">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-lightGreen border border-green-100 mb-8">
                        <MdOutlineMenuBook className="w-4 h-4 text-[#22C55E] fill-[#22C55E]" />
                        <span className="text-sm font-medium text-[#22C55E]">
                            Manage Your Foods
                        </span>
                    </div>

                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-heading tracking-tight leading-tight mb-6">
                        Manage Foods
                    </h1>

                    <p className="text-lg sm:text-xl text-body leading-relaxed mb-10 max-w-2xl">
                        View and manage all foods that you have added.
                    </p>
                </div>

                {/* Results count */}
                {!loading && !error && (
                    <p className="text-sm text-gray-500 mb-4">
                        {totalFoods === 0
                            ? "No results"
                            : `Showing ${foods.length} of ${totalFoods} item${totalFoods !== 1 ? "s" : ""}`}
                    </p>
                )}

                {/* Error */}
                {error && (
                    <div className="rounded-2xl border border-red-100 bg-red-50 p-6 text-center text-sm text-red-600">
                        Failed to load foods. Please try again later.
                    </div>
                )}

                {/* Loading skeletons */}
                {loading && !error && (
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {Array.from({ length: SKELETON_COUNT }).map((_, i) => (
                            <FoodCardSkeleton key={i} />
                        ))}
                    </div>
                )}

                {/* Empty state */}
                {!loading && !error && foods.length === 0 && (
                    <div className="flex flex-col items-center justify-center py-20 text-center">
                        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gray-100">
                            <MdOutlineMenuBook className="h-8 w-8 text-gray-400" />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900">
                            You haven&apos;t added any foods yet.
                        </h3>
                        <p className="mt-2 text-sm text-gray-500">
                            Start by adding your first food item.
                        </p>
                        <Link href="/add-food" className="mt-4">
                            <Button className="bg-[#2b6f80] text-white hover:bg-[#16A34A]">
                                Add Your First Food
                            </Button>
                        </Link>
                    </div>
                )}

                {/* Food grid */}
                {!loading && !error && foods.length > 0 && (
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {foods.map((food) => (
                            <FoodCard key={food.id} food={food} page="manageFoods" />
                        ))}
                    </div>
                )}

                {/* Pagination */}
                {!loading && !error && totalPages > 1 && (
                    <FoodPagination
                        currentPage={page}
                        totalPages={totalPages}
                        onPageChange={handlePageChange}
                    />
                )}
            </div>
        </section>
    );
}


export default function ManageFoodsPage() {
    return (
        <Suspense
            fallback={
                <section className="w-full bg-white py-5 md:py-10">
                    <div className="mx-auto px-6 lg:px-8">
                        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-4">
                            {Array.from({ length: SKELETON_COUNT }).map((_, i) => (
                                <FoodCardSkeleton key={i} />
                            ))}
                        </div>
                    </div>
                </section>
            }
        >
            <ManageFoodsContent />
        </Suspense>
    );
}