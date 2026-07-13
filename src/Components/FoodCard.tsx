import React from 'react';
import { Star, ArrowRight } from 'lucide-react';
import { Button } from '@heroui/react';
import Link from 'next/link';
import FoodDeleteBtn from './FoodDeleteBtn';

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

interface FoodCardProps {
    food: Food;
    page: "allFoods" | "manageFoods" | "alsoLike";
}

const FoodCard: React.FC<FoodCardProps> = ({ food, page }) => {
    const imageUrl = food.images[0];

    return (
        <div className="group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            {/* Image */}
            <div className="relative aspect-4/3 w-full overflow-hidden">
                <img
                    src={imageUrl}
                    alt={food.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
            </div>

            {/* Content */}
            <div className="flex flex-1 flex-col p-5">
                {/* Category & Rating Row */}
                <div className="mb-3 flex items-center justify-between">
                    <span className="inline-block rounded-full bg-[#dcfce7] px-3 py-1 text-xs font-semibold text-[#22C55E]">
                        {food.category}
                    </span>
                    <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium text-gray-700">{food.rating}</span>
                    </div>
                </div>

                {/* Food Name */}
                <h3 className="mb-2 text-lg font-bold text-gray-900 line-clamp-1">
                    {food.name}
                </h3>

                {/* Description */}
                <p className="mb-4 text-sm leading-relaxed text-gray-500 line-clamp-2">
                    {food.description}
                </p>

                {/* Bottom Row: Price and Button */}
                <div className="mt-auto flex items-center justify-between">
                    <span className="text-2xl font-bold text-[#22C55E]">
                        ${food.price.toFixed(2)}
                    </span>

                    <Link href={`/all-foods/${food.id}`}>
                        <Button
                            className="bg-[#22C55E] hover:bg-[#16A34A] text-white font-medium text-sm px-4 py-2 h-auto rounded-xl transition-colors duration-200"
                        >
                            View Details <ArrowRight className="h-4 w-4" />
                        </Button>
                    </Link>
                </div>

                <FoodDeleteBtn
                    foodId={food.id}
                    foodName={food.name}
                    page={page}
                />
            </div>
        </div>
    );
};

export default FoodCard;