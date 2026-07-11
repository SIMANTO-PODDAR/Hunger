import { headers } from 'next/headers';
import FoodCard from '@/Components/FoodCard';
import { MdOutlineMenuBook } from 'react-icons/md';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "All Foods | Hunger",
};


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

async function getFoods(): Promise<Food[]> {
    const headersList = await headers();
    const host = headersList.get('host');
    const protocol = headersList.get('x-forwarded-proto') || 'http';
    const baseUrl = `${protocol}://${host}`;

    const res = await fetch(`${baseUrl}/api/foods`, { cache: 'no-store' });

    if (!res.ok) {
        throw new Error('Failed to fetch foods');
    }

    return res.json();
}

export const dynamic = 'force-dynamic';

export default async function AllFoodsPage() {
    let foods: Food[];
    let error: string | null = null;

    try {
        foods = await getFoods();
    } catch (err: any) {
        error = err.message || 'Something went wrong';
    }

    return (
        <section className="w-full bg-white py-5 md:py-10">
            <div className="mx-auto px-6 lg:px-8">
                <div className="max-w-3xl">
                    {/* Premium Badge */}
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
                        Browse our complete collection of delicious meals, prepared with the freshest ingredients and delivered straight to your door.
                    </p>
                </div>

                {error ? (
                    <div className="rounded-2xl border border-red-100 bg-red-50 p-6 text-center text-sm text-red-600">
                        Failed to load foods. Please try again later.
                    </div>
                ) : (
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {foods!.map((food) => (
                            <FoodCard key={food.id} food={food} />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}