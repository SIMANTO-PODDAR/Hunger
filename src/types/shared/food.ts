// Base Food interface 
export interface Food {
    id: string;
    name: string;
    category: string;
    price: number;
    rating: number;
    description: string;
    images: string[];
    keyInformation: string[];
    userId?: string;
}

// Extended Food interface for AlsoLike component with relatedItems
export interface FoodWithRelated extends Food {
    relatedItems: string[];
}
