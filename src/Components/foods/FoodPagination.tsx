"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

interface FoodPaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

export default function FoodPagination({
    currentPage,
    totalPages,
    onPageChange,
}: FoodPaginationProps) {
    if (totalPages <= 1) return null;

    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

    const btnBase =
        "flex items-center justify-center h-9 min-w-[36px] rounded-xl border text-sm font-medium " +
        "transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#22C55E]/30";

    const btnActive =
        "bg-[#22C55E] border-[#22C55E] text-white shadow-sm";

    const btnDefault =
        "bg-white border-gray-200 text-gray-700 hover:border-[#22C55E] hover:text-[#22C55E]";

    const btnDisabled =
        "bg-white border-gray-100 text-gray-300 cursor-not-allowed";

    return (
        <div className="mt-10 flex items-center justify-center gap-2 flex-wrap">
            {/* Previous */}
            <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`${btnBase} px-3 gap-1 ${currentPage === 1 ? btnDisabled : btnDefault
                    }`}
                aria-label="Previous page"
            >
                <ChevronLeft className="h-4 w-4" />
                <span className="hidden sm:inline">Prev</span>
            </button>

            {/* Page numbers */}
            {pages.map((page) => (
                <button
                    key={page}
                    onClick={() => onPageChange(page)}
                    className={`${btnBase} px-3 ${page === currentPage ? btnActive : btnDefault
                        }`}
                    aria-label={`Page ${page}`}
                    aria-current={page === currentPage ? "page" : undefined}
                >
                    {page}
                </button>
            ))}

            {/* Next */}
            <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`${btnBase} px-3 gap-1 ${currentPage === totalPages ? btnDisabled : btnDefault
                    }`}
                aria-label="Next page"
            >
                <span className="hidden sm:inline">Next</span>
                <ChevronRight className="h-4 w-4" />
            </button>
        </div>
    );
}
