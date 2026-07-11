import BrowseFoodsBtn from "@/Components/BrowseFoodsBtn";
import { Card } from "@heroui/react";
import { Leaf, Heart, Truck, Users, Utensils, Apple } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative min-h-screen bg-white overflow-hidden">
            {/* Subtle Background Decorative Elements */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Green circle - top right */}
                <div className="absolute -top-20 -right-20 w-96 h-96 bg-green-50 rounded-full opacity-30" />

                {/* Orange shape - bottom left */}
                <div className="absolute -bottom-32 -left-32 w-125 h-125 bg-orange-50 rounded-full opacity-30" />

                {/* Floating decorative icons */}
                <Leaf className="absolute top-20 left-[10%] w-8 h-8 text-green-200 opacity-20 rotate-12" />
                <Apple className="absolute top-40 right-[45%] w-6 h-6 text-orange-200 opacity-20 -rotate-12" />
                <Utensils className="absolute bottom-40 left-[20%] w-8 h-8 text-green-200 opacity-15" />
                <Heart className="absolute top-60 right-[15%] w-6 h-6 text-orange-200 opacity-20" />
                <Leaf className="absolute bottom-32 right-[30%] w-7 h-7 text-green-200 opacity-15 -rotate-45" />
            </div>

            {/* Main Content Container */}
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-5 pb-16 lg:pt-10 lg:pb-24">
                {/* Two Column Grid */}
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                    {/* Left Column - Content */}
                    <div className="space-y-8">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-4 py-2">
                            <Utensils className="w-4 h-4 text-green-600" />
                            <span className="text-sm font-medium text-green-700">
                                Limited-Time Deals
                            </span>
                        </div>

                        {/* Main Heading */}
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight tracking-tight">
                            Fresh Surplus Food,
                            <br />
                            <span className="text-[#22C55E]">At Discounted Prices.</span>
                        </h1>

                        {/* Description */}
                        <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
                            Discover discounted meals from your favorite partner restaurants and bakeries. Save food and save money before it goes to waste through our premium food marketplace.
                        </p>

                        {/* CTA Buttons */}
                        <div >
                            <BrowseFoodsBtn />
                        </div>
                    </div>

                    {/* Right Column - Illustration */}
                    <div className="relative flex items-center justify-center">
                        <div className="w-full max-w-md lg:max-w-lg">
                            {/* Clean flat illustration using simple shapes */}
                            <div className="relative bg-linear-to-br from-green-50 to-orange-50 rounded-3xl p-8 border border-gray-100">

                                {/* Illustration Elements */}
                                <div className="space-y-6">

                                    {/* Top section - Fruits */}
                                    <div className="flex justify-center gap-4">
                                        <div className="w-16 h-16 bg-orange-200 rounded-2xl flex items-center justify-center transform -rotate-6">
                                            <span className="text-3xl">🍊</span>
                                        </div>
                                        <div className="w-16 h-16 bg-green-200 rounded-2xl flex items-center justify-center transform rotate-6">
                                            <span className="text-3xl">🥬</span>
                                        </div>
                                        <div className="w-16 h-16 bg-red-200 rounded-2xl flex items-center justify-center transform -rotate-3">
                                            <span className="text-3xl">🍎</span>
                                        </div>
                                    </div>

                                    {/* Middle section - People interaction */}
                                    <div className="flex items-center justify-center gap-8 py-6">
                                        {/* Donor -> Partner Store */}
                                        <div className="flex flex-col items-center gap-2">
                                            <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center">
                                                <Users className="w-10 h-10 text-gray-600" />
                                            </div>
                                            <div className="w-16 h-2 bg-gray-200 rounded-full" />
                                            <div className="text-xs font-medium text-gray-600">Partner Store</div>
                                        </div>

                                        {/* Food Box */}
                                        <div className="flex flex-col items-center gap-2">
                                            <div className="w-20 h-20 bg-[#22C55E] bg-opacity-20 rounded-2xl flex items-center justify-center border-2 border-[#22C55E] border-opacity-30">
                                                <span className="text-3xl">📦</span>
                                            </div>
                                            <div className="text-xs font-medium text-gray-600">Discounted Meal</div>
                                        </div>

                                        {/* Volunteer -> Happy Shopper */}
                                        <div className="flex flex-col items-center gap-2">
                                            <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center">
                                                <Heart className="w-10 h-10 text-[#F97316]" />
                                            </div>
                                            <div className="w-16 h-2 bg-gray-200 rounded-full" />
                                            <div className="text-xs font-medium text-gray-600">Happy Shopper</div>
                                        </div>
                                    </div>

                                    {/* Bottom section - Arrow showing transfer */}
                                    <div className="flex justify-center">
                                        <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm border border-gray-100">
                                            <Truck className="w-4 h-4 text-[#22C55E]" />
                                            <span className="text-sm font-medium text-gray-700">Quick Delivery</span>
                                        </div>
                                    </div>

                                    {/* Background decorative dots */}
                                    <div className="absolute top-4 right-4 flex gap-1">
                                        <div className="w-2 h-2 bg-green-300 rounded-full" />
                                        <div className="w-2 h-2 bg-orange-300 rounded-full" />
                                        <div className="w-2 h-2 bg-green-300 rounded-full" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Statistics Section */}
                <div className="mt-24 lg:mt-32">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">

                        {/* Stat Card 1 */}
                        <Card className="p-6 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                            <div className="space-y-2">
                                <div className="text-3xl font-bold text-gray-900">12K+</div>
                                <div className="text-sm text-gray-600">Discounted Meals</div>
                                <div className="flex items-center gap-2 pt-2">
                                    <Utensils className="w-4 h-4 text-[#22C55E]" />
                                    <span className="text-xs text-green-600 font-medium">+15% this month</span>
                                </div>
                            </div>
                        </Card>

                        {/* Stat Card 2 */}
                        <Card className="p-6 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                            <div className="space-y-2">
                                <div className="text-3xl font-bold text-gray-900">350+</div>
                                <div className="text-sm text-gray-600">Active Shoppers</div>
                                <div className="flex items-center gap-2 pt-2">
                                    <Users className="w-4 h-4 text-[#22C55E]" />
                                    <span className="text-xs text-green-600 font-medium">Growing community</span>
                                </div>
                            </div>
                        </Card>

                        {/* Stat Card 3 */}
                        <Card className="p-6 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                            <div className="space-y-2">
                                <div className="text-3xl font-bold text-gray-900">95+</div>
                                <div className="text-sm text-gray-600">Partner Restaurants</div>
                                <div className="flex items-center gap-2 pt-2">
                                    <Heart className="w-4 h-4 text-[#22C55E]" />
                                    <span className="text-xs text-green-600 font-medium">Across 12 cities</span>
                                </div>
                            </div>
                        </Card>

                        {/* Stat Card 4 */}
                        <Card className="p-6 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                            <div className="space-y-2">
                                <div className="text-3xl font-bold text-gray-900">2.5 Tons</div>
                                <div className="text-sm text-gray-600">Food Saved</div>
                                <div className="flex items-center gap-2 pt-2">
                                    <Leaf className="w-4 h-4 text-[#22C55E]" />
                                    <span className="text-xs text-green-600 font-medium">Sustainable shopping</span>
                                </div>
                            </div>
                        </Card>

                    </div>
                </div>
            </div>
        </section>
    );
}