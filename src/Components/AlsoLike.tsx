import { headers } from 'next/headers';
import FoodCard from '@/Components/FoodCard';

interface Food {
    id: string;
    name: string;
    category: string;
    price: number;
    rating: number;
    description: string;
    images: string[];
    keyInformation: string[];
    relatedItems: string[];
}

type Props = {
    category: string;
    currentId: string;
};

async function getRelatedFoods(category: string, excludeId: string): Promise<Food[]> {
    const headersList = await headers();
    const host = headersList.get('host');
    const protocol = headersList.get('x-forwarded-proto') || 'http';
    const baseUrl = `${protocol}://${host}`;

    const res = await fetch(
        `${baseUrl}/api/foods?category=${encodeURIComponent(category)}&excludeId=${encodeURIComponent(excludeId)}`,
        { cache: 'no-store' }
    );

    if (!res.ok) return [];
    const data = await res.json();
    return data.foods ?? [];
}

export default async function AlsoLike({ category, currentId }: Props) {
    const foods = await getRelatedFoods(category, currentId);

    if (!foods || foods.length === 0) return null;

    return (
        <section className="mt-16">
            <h2 className="text-3xl font-bold text-gray-900">You May Also Like</h2>
            <p className="mt-2 max-w-2xl text-base text-gray-500">
                Discover more favorites loved by our customers
            </p>
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {foods.map((food) => (
                    <FoodCard key={food.id} food={food} page='alsoLike'/>
                ))}
            </div>
        </section>
    );
}