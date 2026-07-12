"use client";

import { Suspense, useCallback, useEffect, useRef, useState } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { MdOutlineMenuBook } from "react-icons/md";

import FoodCard from "@/Components/FoodCard";
import FoodFilters, { type FilterState } from "@/Components/foods/FoodFilters";
import FoodPagination from "@/Components/foods/FoodPagination";
import FoodCardSkeleton from "@/Components/foods/FoodCardSkeleton";
import Link from "next/link";
import { Button } from "@heroui/react";

interface Food {
    id: string;
    name: string;
    category: string;
    price: number;
    rating: number;
    description: string;
    images: string[];
    keyInformation: string[];
}

interface ApiResponse {
    foods: Food[];
    totalFoods: number;
    totalPages: number;
    currentPage: number;
}

const LIMIT = 8;
const DEBOUNCE_MS = 350;
const SKELETON_COUNT = LIMIT;

/* ─── Helpers ─── */
function buildApiUrl(filters: FilterState, page: number): string {
    const params = new URLSearchParams();
    if (filters.search) params.set("search", filters.search);
    if (filters.category) params.set("category", filters.category);
    if (filters.price) params.set("price", filters.price);
    if (filters.sort) params.set("sort", filters.sort);
    params.set("page", String(page));
    params.set("limit", String(LIMIT));
    return `/api/foods?${params.toString()}`;
}

function buildRouteUrl(
    pathname: string,
    filters: FilterState,
    page: number
): string {
    const params = new URLSearchParams();
    if (filters.search) params.set("search", filters.search);
    if (filters.category) params.set("category", filters.category);
    if (filters.price) params.set("price", filters.price);
    if (filters.sort) params.set("sort", filters.sort);
    if (page > 1) params.set("page", String(page));
    const qs = params.toString();
    return qs ? `${pathname}?${qs}` : pathname;
}

/* ─── Inner component ──── */
function AllFoodsContent() {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    /* ── Initialise from URL ── */
    const [filters, setFilters] = useState<FilterState>({
        search: searchParams.get("search") ?? "",
        category: searchParams.get("category") ?? "",
        price: searchParams.get("price") ?? "",
        sort: searchParams.get("sort") ?? "",
    });
    const [page, setPage] = useState<number>(
        parseInt(searchParams.get("page") ?? "1", 10)
    );

    /* ── Data state ── */
    const [foods, setFoods] = useState<Food[]>([]);
    const [totalPages, setTotalPages] = useState(1);
    const [totalFoods, setTotalFoods] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const [debouncedSearch, setDebouncedSearch] = useState(filters.search);
    const debounceTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

    /* ── Fetch ── */
    const fetchFoods = useCallback(
        async (currentFilters: FilterState, currentPage: number) => {
            setLoading(true);
            setError(null);
            try {
                const url = buildApiUrl(currentFilters, currentPage);
                const res = await fetch(url, { cache: "no-store" });
                if (!res.ok) throw new Error("Failed to fetch foods");
                const data: ApiResponse = await res.json();
                setFoods(data.foods);
                setTotalPages(data.totalPages);
                setTotalFoods(data.totalFoods);
            } catch (err: unknown) {
                const msg =
                    err instanceof Error ? err.message : "Something went wrong";
                setError(msg);
            } finally {
                setLoading(false);
            }
        },
        []
    );

    /* ── filter / page changes ──── */
    useEffect(() => {
        const effectiveFilters = { ...filters, search: debouncedSearch };
        fetchFoods(effectiveFilters, page);

        // Sync URL
        router.replace(buildRouteUrl(pathname, effectiveFilters, page), {
            scroll: false,
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [debouncedSearch, filters.category, filters.price, filters.sort, page]);

    const handleFilterChange = (updated: Partial<FilterState>) => {
        const next = { ...filters, ...updated };
        setFilters(next);

        // Debounce only the search field; reset page immediately for everything
        if ("search" in updated) {
            if (debounceTimer.current) clearTimeout(debounceTimer.current);
            debounceTimer.current = setTimeout(() => {
                setDebouncedSearch(updated.search ?? "");
                setPage(1);
            }, DEBOUNCE_MS);
        } else {
            // For dropdowns, apply instantly and reset page
            setPage(1);
        }
    };

    const handlePageChange = (newPage: number) => {
        setPage(newPage);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };


    return (
        <section className="w-full bg-white py-5 md:py-10">
            <div className="mx-auto px-6 lg:px-8">
                <div className="max-w-3xl mb-8">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-lightGreen border border-green-100 mb-8">
                        <MdOutlineMenuBook className="w-4 h-4 text-[#22C55E] fill-[#22C55E]" />
                        <span className="text-sm font-medium text-[#22C55E]">
                            Explore Our Menu
                        </span>
                    </div>

                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-heading tracking-tight leading-tight mb-6">
                        All Foods
                    </h1>

                    <p className="text-lg sm:text-xl text-body leading-relaxed mb-10 max-w-2xl">
                        Browse our complete collection of delicious meals, prepared
                        with the freshest ingredients and delivered straight to your
                        door.
                    </p>
                </div>

                {/* ── Filters ── */}
                <FoodFilters filters={filters} onChange={handleFilterChange} />

                {!loading && !error && (
                    <p className="text-sm text-gray-500 mb-4">
                        {totalFoods === 0
                            ? "No results"
                            : `Showing ${foods.length} of ${totalFoods} item${totalFoods !== 1 ? "s" : ""}`}
                    </p>
                )}

                {/* ── Error ─── */}
                {error && (
                    <div className="rounded-2xl border border-red-100 bg-red-50 p-6 text-center text-sm text-red-600">
                        Failed to load foods. Please try again later.
                    </div>
                )}

                {/* ── Loading skeletons ─── */}
                {loading && !error && (
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {Array.from({ length: SKELETON_COUNT }).map((_, i) => (
                            <FoodCardSkeleton key={i} />
                        ))}
                    </div>
                )}

                {/* ── Empty state ─── */}
                {!loading && !error && foods.length === 0 && (
                    <div className="flex flex-col items-center justify-center py-20 text-center">
                        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gray-100">
                            <MdOutlineMenuBook className="h-8 w-8 text-gray-400" />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900">
                            No foods found.
                        </h3>
                        <p className="mt-2 text-sm text-gray-500">
                            Try changing your search or filters.
                        </p>
                        <Link href={'/all-foods'} className="mt-1">
                            <Button
                                className="bg-[#2b6f80] text-white hover:bg-[#16A34A] w-full"
                            >Clear search or filters</Button>
                        </Link>
                    </div>
                )}

                {!loading && !error && foods.length > 0 && (
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {foods.map((food) => (
                            <FoodCard key={food.id} food={food} />
                        ))}
                    </div>
                )}

                {!loading && !error && (
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


export default function AllFoodsPage() {
    return (
        <Suspense
            fallback={
                <section className="w-full bg-white py-5 md:py-10">
                    <div className="mx-auto px-6 lg:px-8">
                        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-4">
                            {Array.from({ length: 8 }).map((_, i) => (
                                <div
                                    key={i}
                                    className="flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm animate-pulse"
                                >
                                    <div className="aspect-4/3 w-full bg-gray-100" />
                                    <div className="flex flex-1 flex-col p-5 gap-3">
                                        <div className="h-5 w-16 rounded-full bg-gray-100" />
                                        <div className="h-5 w-3/4 rounded bg-gray-100" />
                                        <div className="h-3.5 w-full rounded bg-gray-100" />
                                        <div className="h-3.5 w-5/6 rounded bg-gray-100" />
                                        <div className="mt-auto flex items-center justify-between pt-1">
                                            <div className="h-7 w-16 rounded bg-gray-100" />
                                            <div className="h-9 w-28 rounded-xl bg-gray-100" />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            }
        >
            <AllFoodsContent />
        </Suspense>
    );
}