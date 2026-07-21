// Manage foods page specific types

import { Food } from '../shared';

export type FetchState = {
    foods: Food[];
    totalPages: number;
    totalFoods: number;
    loading: boolean;
    error: string | null;
};

export type FetchAction =
    | { type: "FETCH_START" }
    | {
        type: "FETCH_SUCCESS";
        foods: Food[];
        totalPages: number;
        totalFoods: number;
    }
    | { type: "FETCH_ERROR"; error: string };
