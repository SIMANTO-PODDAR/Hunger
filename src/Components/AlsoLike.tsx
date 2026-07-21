import { headers } from 'next/headers';
import FoodCard from '@/Components/FoodCard';
import { FoodWithRelated } from '@/types/shared';
import { AlsoLikeProps } from '@/types/modules';

async function getRelatedFoods(category: string, excludeId: string): Promise<FoodWithRelated[]> {
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

export default async function AlsoLike({ category, currentId }: AlsoLikeProps) {
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