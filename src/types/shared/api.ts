import { Food } from './food';

// API response for foods endpoints
export interface ApiResponse {
    foods: Food[];
    totalFoods: number;
    totalPages: number;
    currentPage: number;
}

// Filter state for food search/filtering
export interface FilterState {
    search: string;
    category: string;
    price: string;
    sort: string;
}
