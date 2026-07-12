"use client";

import { Search } from "lucide-react";

export interface FilterState {
    search: string;
    category: string;
    price: string;
    sort: string;
}

interface FoodFiltersProps {
    filters: FilterState;
    onChange: (updated: Partial<FilterState>) => void;
}

const CATEGORIES = [
    { label: "All Categories", value: "" },
    { label: "Desserts", value: "Desserts" },
    { label: "Seafood", value: "Seafood" },
    { label: "Chicken", value: "Chicken" },
    { label: "Pizza", value: "Pizza" },
];

const PRICES = [
    { label: "All Prices", value: "" },
    { label: "$10 - $19.99", value: "10-19.99" },
    { label: "$20 - $29.99", value: "20-29.99" },
    { label: "$30 - $49.99", value: "30-49.99" },
    { label: "$50+", value: "50-1000000" },
];

const SORTS = [
    { label: "Default", value: "" },
    { label: "Price: Low to High", value: "price_asc" },
    { label: "Price: High to Low", value: "price_desc" },
];

const selectCls =
    "h-10 rounded-xl border border-gray-200 bg-white px-3 text-sm text-gray-700 " +
    "shadow-sm transition focus:border-[#22C55E] focus:outline-none focus:ring-2 " +
    "focus:ring-[#22C55E]/20 cursor-pointer";

export default function FoodFilters({ filters, onChange }: FoodFiltersProps) {
    return (
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center mb-8">
            {/* Search */}
            <div className="relative flex-1 min-w-50">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
                <input
                    type="text"
                    placeholder="Search foods..."
                    value={filters.search}
                    onChange={(e) => onChange({ search: e.target.value })}
                    className={
                        "w-full pl-9 pr-4 h-10 rounded-xl border border-gray-200 bg-white text-sm " +
                        "text-gray-700 shadow-sm transition focus:border-[#22C55E] focus:outline-none " +
                        "focus:ring-2 focus:ring-[#22C55E]/20"
                    }
                />
            </div>

            {/* Category */}
            <select
                value={filters.category}
                onChange={(e) => onChange({ category: e.target.value })}
                className={selectCls}
            >
                {CATEGORIES.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                        {opt.label}
                    </option>
                ))}
            </select>

            {/* Price */}
            <select
                value={filters.price}
                onChange={(e) => onChange({ price: e.target.value })}
                className={selectCls}
            >
                {PRICES.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                        {opt.label}
                    </option>
                ))}
            </select>

            {/* Sort */}
            <select
                value={filters.sort}
                onChange={(e) => onChange({ sort: e.target.value })}
                className={selectCls}
            >
                {SORTS.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                        {opt.label}
                    </option>
                ))}
            </select>
        </div>
    );
}
