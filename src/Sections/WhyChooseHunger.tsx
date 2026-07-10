import { BadgeCheck, Clock, Leaf, Lock, MapPin, } from 'lucide-react';


const WhyChooseHunger = () => {
    return (
        <div>
            {/* Why Choose Hunger Section */}
            <section className="py-10 lg:py-25 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-[#22C55E] font-semibold text-sm tracking-wider uppercase">
                            Why Hunger
                        </span>
                        <h2 className="text-4xl sm:text-5xl font-bold text-heading mt-4">
                            The smarter way to food
                        </h2>
                        <p className="text-body text-lg mt-4 max-w-2xl mx-auto">
                            Every feature is designed to make your food ordering experience smooth, safe, and satisfying.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Feature 1 */}
                        <div className="bg-white rounded-2xl border border-border shadow-sm p-7 hover:shadow-md transition-shadow duration-200">
                            <div className="w-12 h-12 bg-lightGreen rounded-xl flex items-center justify-center mb-5">
                                <BadgeCheck className="w-6 h-6 text-[#22C55E]" />
                            </div>
                            <h3 className="text-xl font-bold text-heading mb-3">Verified Sellers</h3>
                            <p className="text-body leading-relaxed">
                                Every seller on our platform goes through a verification process. You can order
                                with confidence knowing quality and safety standards are met.
                            </p>
                        </div>

                        {/* Feature 2 */}
                        <div className="bg-white rounded-2xl border border-border shadow-sm p-7 hover:shadow-md transition-shadow duration-200">
                            <div className="w-12 h-12 bg-lightGreen rounded-xl flex items-center justify-center mb-5">
                                <Leaf className="w-6 h-6 text-[#22C55E]" />
                            </div>
                            <h3 className="text-xl font-bold text-heading mb-3">Fresh Quality Meals</h3>
                            <p className="text-body leading-relaxed">
                                We prioritize freshness above everything. Meals are prepared with care using
                                quality ingredients, delivered at their best.
                            </p>
                        </div>

                        {/* Feature 3 */}
                        <div className="bg-white rounded-2xl border border-border shadow-sm p-7 hover:shadow-md transition-shadow duration-200">
                            <div className="w-12 h-12 bg-lightGreen rounded-xl flex items-center justify-center mb-5">
                                <Clock className="w-6 h-6 text-[#22C55E]" />
                            </div>
                            <h3 className="text-xl font-bold text-heading mb-3">Fast Ordering</h3>
                            <p className="text-body leading-relaxed">
                                Our streamlined ordering process takes just a few taps. Browse, select, and
                                confirm—your meal is on the way before you know it.
                            </p>
                        </div>

                        {/* Feature 4 */}
                        <div className="bg-white rounded-2xl border border-border shadow-sm p-7 hover:shadow-md transition-shadow duration-200">
                            <div className="w-12 h-12 bg-lightGreen rounded-xl flex items-center justify-center mb-5">
                                <Lock className="w-6 h-6 text-[#22C55E]" />
                            </div>
                            <h3 className="text-xl font-bold text-heading mb-3">Secure Payments</h3>
                            <p className="text-body leading-relaxed">
                                Multiple payment options with bank-level security. Your transactions are
                                encrypted and protected at every step.
                            </p>
                        </div>

                        {/* Feature 5 */}
                        <div className="bg-white rounded-2xl border border-border shadow-sm p-7 hover:shadow-md transition-shadow duration-200">
                            <div className="w-12 h-12 bg-lightGreen rounded-xl flex items-center justify-center mb-5">
                                <BadgeCheck className="w-6 h-6 text-[#22C55E]" />
                            </div>
                            <h3 className="text-xl font-bold text-heading mb-3">Affordable Deals</h3>
                            <p className="text-body leading-relaxed">
                                Great food shouldn&apos;t break the bank. We work with sellers to offer competitive
                                pricing and regular deals you&apos;ll love.
                            </p>
                        </div>

                        {/* Feature 6 */}
                        <div className="bg-white rounded-2xl border border-border shadow-sm p-7 hover:shadow-md transition-shadow duration-200">
                            <div className="w-12 h-12 bg-lightGreen rounded-xl flex items-center justify-center mb-5">
                                <MapPin className="w-6 h-6 text-[#22C55E]" />
                            </div>
                            <h3 className="text-xl font-bold text-heading mb-3">Easy Navigation</h3>
                            <p className="text-body leading-relaxed">
                                Find exactly what you&apos;re craving with intuitive search and filters. Explore by
                                cuisine, seller, or dietary preference effortlessly.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default WhyChooseHunger;