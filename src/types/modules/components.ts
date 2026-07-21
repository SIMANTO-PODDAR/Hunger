// Component prop types for reusable components

export interface FoodCardProps {
    food: import('../shared').Food;
    page: "allFoods" | "manageFoods" | "alsoLike";
}

export interface ImageGalleryProps {
    images: string[];
    name: string;
}

export interface FoodFiltersProps {
    filters: import('../shared').FilterState;
    onChange: (updated: Partial<import('../shared').FilterState>) => void;
}

export interface FoodPaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

export interface FoodDeleteBtnProps {
    foodId: string;
    foodName: string;
    page: "allFoods" | "manageFoods" | "alsoLike";
    userId?: string;
}

export interface AlsoLikeProps {
    category: string;
    currentId: string;
}
