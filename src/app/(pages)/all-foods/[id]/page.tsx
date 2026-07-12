import { headers } from 'next/headers';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Star, CheckCircle } from 'lucide-react';
import ImageGallery from '@/Components/ImageGallery';
import AlsoLike from '@/Components/AlsoLike';

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

async function getFood(id: string): Promise<Food> {
    const headersList = await headers();
    const host = headersList.get('host');
    const protocol = headersList.get('x-forwarded-proto') || 'http';
    const baseUrl = `${protocol}://${host}`;

    const res = await fetch(`${baseUrl}/api/foods/${id}`, {
        cache: 'no-store',
    });

    if (res.status === 404) notFound();
    if (!res.ok) throw new Error('Failed to fetch food details');

    return res.json();
}

export default async function FoodDetailPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const food = await getFood(id);

    const { name, category, price, rating, description, images, keyInformation } = food;

    return (
        <main className="bg-white py-12 md:py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* ========== HERO SECTION ========== */}
                <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
                    {/* Image Gallery (now with toggle functionality) */}
                    <ImageGallery images={images} name={name} />

                    {/* Food Details */}
                    <div className="flex flex-col justify-center">
                        <span className="mb-3 inline-block w-fit rounded-full bg-[#dcfce7] px-3 py-1 text-sm font-semibold text-[#22C55E]">
                            {category}
                        </span>
                        <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
                            {name}
                        </h1>
                        <div className="mt-3 flex items-center gap-1">
                            <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                            <span className="text-lg font-medium text-gray-700">{rating}</span>
                        </div>
                        <p className="mt-4 text-4xl font-bold text-[#22C55E]">${price.toFixed(2)}</p>
                        <hr className="my-6 border-gray-100" />
                        <div className="flex flex-col gap-3 sm:flex-row">
                            <button className="inline-flex items-center justify-center rounded-xl bg-[#22C55E] px-8 py-3 text-base font-semibold text-white shadow-sm transition-all hover:bg-[#16A34A] hover:shadow-md focus:outline-none">
                                Order Now
                            </button>
                            <Link
                                href="/all-foods"
                                className="inline-flex items-center justify-center rounded-xl border border-gray-200 bg-white px-8 py-3 text-base font-medium text-gray-700 transition-all hover:border-[#22C55E] hover:text-[#22C55E]"
                            >
                                Back to All Foods
                            </Link>
                        </div>
                    </div>
                </div>

                {/* ========== DESCRIPTION ========== */}
                <section className="mt-16 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm sm:p-8">
                    <h2 className="text-2xl font-bold text-gray-900">Description</h2>
                    <p className="mt-4 text-base leading-relaxed text-gray-600">{description}</p>
                </section>

                {/* ========== KEY INFORMATION ========== */}
                <section className="mt-8 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm sm:p-8">
                    <h2 className="text-2xl font-bold text-gray-900">Key Information</h2>
                    <ul className="mt-4 space-y-3">
                        {keyInformation.map((info, index) => (
                            <li key={index} className="flex items-start gap-3">
                                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-[#22C55E]" />
                                <span className="text-base text-gray-600">{info}</span>
                            </li>
                        ))}
                    </ul>
                </section>

                {/* ========== RATINGS & PRICE ========== */}
                <section className="mt-8 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm sm:p-8">
                    <h2 className="text-2xl font-bold text-gray-900">Ratings & Price</h2>
                    <div className="mt-4 grid gap-6 sm:grid-cols-2">
                        <div className="flex flex-col items-start rounded-xl border border-gray-100 bg-gray-50 p-5">
                            <div className="flex items-center gap-2">
                                <Star className="h-8 w-8 fill-yellow-400 text-yellow-400" />
                                <span className="text-4xl font-bold text-gray-900">{rating}</span>
                            </div>
                            <p className="mt-1 text-sm text-gray-500">Overall Rating</p>
                        </div>
                        <div className="flex flex-col items-start rounded-xl border border-gray-100 bg-gray-50 p-5">
                            <span className="text-4xl font-bold text-[#22C55E]">${price.toFixed(2)}</span>
                            <p className="mt-1 text-sm text-gray-500">Price</p>
                        </div>
                    </div>
                </section>

                {/* ========== GIVE RATING (UI ONLY) ========== */}
                <section className="mt-8 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm sm:p-8">
                    <h2 className="text-2xl font-bold text-gray-900">Leave a Review</h2>
                    <div className="mt-4 space-y-5">
                        {/* Stars */}
                        <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, i) => (
                                <button
                                    key={i}
                                    className="text-gray-300 transition-colors hover:text-yellow-400"
                                    aria-label={`Rate ${i + 1} star`}
                                >
                                    <Star className="h-8 w-8" />
                                </button>
                            ))}
                        </div>
                        <textarea
                            rows={3}
                            placeholder="Write your review..."
                            className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 shadow-sm focus:border-[#22C55E] focus:outline-none focus:ring-2 focus:ring-[#22C55E]/20"
                        />
                        <button className="inline-flex items-center gap-2 rounded-xl bg-[#22C55E] px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-[#16A34A] hover:shadow-md">
                            Submit Review
                        </button>
                    </div>
                </section>

                {/* ========== YOU MAY ALSO LIKE ========== */}
                <AlsoLike category={category} currentId={id} />
            </div>
        </main>
    );
}