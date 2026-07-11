import React from 'react';
import {
  ChefHat,
  Heart,
  ShoppingBag,
  Star,
  Target,
  TrendingUp,
  Users
} from 'lucide-react';
import type { Metadata } from "next";
import BrowseFoodsBtn from '@/Components/BrowseFoodsBtn';
import WhyChooseHunger from '@/Sections/WhyChooseHunger';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "About | Hunger",
};


const AboutPage: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 md:py-10">
          <div className="max-w-3xl">
            {/* Premium Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-lightGreen border border-green-100 mb-8">
              <Star className="w-4 h-4 text-[#22C55E] fill-[#22C55E]" />
              <span className="text-sm font-medium text-[#22C55E]">
                Trusted Food Marketplace
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-heading tracking-tight leading-tight mb-6">
              About Hunger
            </h1>

            <p className="text-lg sm:text-xl text-body leading-relaxed mb-10 max-w-2xl">
              We connect you with the finest local food sellers, making it effortless to discover
              and order fresh, quality meals—all in one place. From curated dishes to everyday
              favorites, Hunger brings the best of your local food scene right to your doorstep.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <BrowseFoodsBtn />
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-heading bg-white border border-border rounded-xl hover:bg-gray-50 transition-colors duration-200"
              >
                Contact
                <Users className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Subtle decorative element */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-lightGreen rounded-full opacity-50 blur-3xl -z-10" />
      </section>

      {/* Our Story Section */}
      <section className="bg-alternate py-10 lg:py-25">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-5 lg:gap-16 items-center">
            <div>
              <span className="text-[#22C55E] font-semibold text-sm tracking-wider uppercase">
                Our Story
              </span>
              <h2 className="text-4xl sm:text-5xl font-bold text-heading mt-4 mb-6 leading-tight">
                Built for food lovers,<br />by food lovers
              </h2>
              <div className="space-y-5">
                <p className="text-body text-lg leading-relaxed">
                  Hunger was born from a simple frustration: finding quality food from trusted local
                  sellers shouldn&apos;t be complicated. We saw an opportunity to create a seamless platform
                  where customers could browse, compare, and order fresh meals without the hassle.
                </p>
                <p className="text-body text-lg leading-relaxed">
                  Today, we&apos;ve brought together hundreds of passionate food sellers, from home-based
                  chefs to established local kitchens. Every meal on Hunger is a chance to discover
                  something delicious while supporting the people who make your community taste great.
                </p>
                <p className="text-body text-lg leading-relaxed">
                  Our team is dedicated to making food ordering fast, reliable, and genuinely enjoyable.
                  We handle the technology so you can focus on what matters most—enjoying great food.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square max-w-md mx-auto bg-lightGreen rounded-3xl flex items-center justify-center">
                <div className="text-center p-8">
                  <ChefHat className="w-16 h-16 text-[#22C55E] mx-auto" />
                  <p className="text-heading font-semibold text-xl">
                    Connecting you with<br />local food makers
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-10 lg:py-25 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#22C55E] font-semibold text-sm tracking-wider uppercase">
              Our Purpose
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-heading mt-4">
              What drives us forward
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission Card */}
            <div className="bg-white rounded-2xl border border-border shadow-sm p-8 sm:p-10 hover:shadow-md transition-shadow duration-200">
              <div className="w-14 h-14 bg-lightGreen rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-[#22C55E]" />
              </div>
              <h3 className="text-2xl font-bold text-heading mb-4">Our Mission</h3>
              <p className="text-body text-lg leading-relaxed">
                To make discovering and ordering quality food effortless. We&apos;re building the most
                trusted marketplace where customers can find exactly what they&apos;re craving—whether
                it&apos;s a home-cooked meal, artisanal baked goods, or a quick lunch—all from verified
                local sellers who take pride in their craft.
              </p>
              <div className="mt-6 pt-6 border-t border-border">
                <p className="text-sm text-body italic">
                  &quot;Quality food, simplified ordering, happier customers.&quot;
                </p>
              </div>
            </div>

            {/* Vision Card */}
            <div className="bg-white rounded-2xl border border-border shadow-sm p-8 sm:p-10 hover:shadow-md transition-shadow duration-200">
              <div className="w-14 h-14 bg-lightGreen rounded-2xl flex items-center justify-center mb-6">
                <TrendingUp className="w-7 h-7 text-[#22C55E]" />
              </div>
              <h3 className="text-2xl font-bold text-heading mb-4">Our Vision</h3>
              <p className="text-body text-lg leading-relaxed">
                We envision a future where every neighborhood has a thriving food ecosystem powered
                by Hunger—where talented local cooks and bakers can build sustainable businesses, diverse meals without compromise. We&apos;re creating
                the go-to platform that reshapes how communities experience food.
              </p>
              <div className="mt-6 pt-6 border-t border-border">
                <p className="text-sm text-body italic">
                  &quot;Empowering local food communities, one order at a time.&quot;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Highlights Section */}
      <section className="bg-alternate py-10 lg:py-25">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#22C55E] font-semibold text-sm tracking-wider uppercase">
              By the Numbers
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-heading mt-4">
              Hunger in figures
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Stat Card 1 */}
            <div className="bg-white rounded-2xl border border-border shadow-sm p-6 text-center hover:shadow-md transition-shadow duration-200">
              <div className="w-12 h-12 bg-lightGreen rounded-xl flex items-center justify-center mx-auto mb-4">
                <ShoppingBag className="w-6 h-6 text-[#22C55E]" />
              </div>
              <p className="text-3xl font-bold text-heading mb-1">12K+</p>
              <p className="text-sm font-medium text-body mb-2">Foods Listed</p>
              <p className="text-xs text-body leading-relaxed">
                Fresh meals, baked goods, and more
              </p>
            </div>

            {/* Stat Card 2 */}
            <div className="bg-white rounded-2xl border border-border shadow-sm p-6 text-center hover:shadow-md transition-shadow duration-200">
              <div className="w-12 h-12 bg-lightGreen rounded-xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-[#22C55E]" />
              </div>
              <p className="text-3xl font-bold text-heading mb-1">350+</p>
              <p className="text-sm font-medium text-body mb-2">Active Sellers</p>
              <p className="text-xs text-body leading-relaxed">
                Verified and trusted by our team
              </p>
            </div>

            {/* Stat Card 3 */}
            <div className="bg-white rounded-2xl border border-border shadow-sm p-6 text-center hover:shadow-md transition-shadow duration-200">
              <div className="w-12 h-12 bg-lightGreen rounded-xl flex items-center justify-center mx-auto mb-4">
                <Heart className="w-6 h-6 text-[#22C55E]" />
              </div>
              <p className="text-3xl font-bold text-heading mb-1">20K+</p>
              <p className="text-sm font-medium text-body mb-2">Happy Customers</p>
              <p className="text-xs text-body leading-relaxed">
                Returning for quality meals daily
              </p>
            </div>

            {/* Stat Card 4 */}
            <div className="bg-white rounded-2xl border border-border shadow-sm p-6 text-center hover:shadow-md transition-shadow duration-200">
              <div className="w-12 h-12 bg-lightGreen rounded-xl flex items-center justify-center mx-auto mb-4">
                <Star className="w-6 h-6 text-[#22C55E] fill-[#22C55E]" />
              </div>
              <p className="text-3xl font-bold text-heading mb-1">98%</p>
              <p className="text-sm font-medium text-body mb-2">Satisfaction Rate</p>
              <p className="text-xs text-body leading-relaxed">
                Based on customer reviews
              </p>
            </div>
          </div>
        </div>
      </section>

      <WhyChooseHunger />
    </div>
  );
};

export default AboutPage;