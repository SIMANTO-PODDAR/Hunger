import React from "react";
import Image, { StaticImageData } from "next/image";
import { MapPin, Clock, Navigation } from "lucide-react";

import SantoriniSeasideOutlet from "../../public/Santorini-Seaside-Outlet.jpg";
import TimesSquareOutlet from "../../public/Times-Square-Outlet.jpeg";
import MarinaBayDining from "../../public/Marina-Bay-Dining.jpg";

interface Outlet {
    image: StaticImageData;
    title: string;
    description: string;
    location: string;
    hours: string;
    badges: string[];
}

const outlets: Outlet[] = [
    {
        image: SantoriniSeasideOutlet,
        title: "Santorini Seaside Outlet",
        description:
            "Enjoy handcrafted meals with breathtaking sea views in one of the world's most beautiful coastal destinations.",
        location: "Santorini, Greece",
        hours: "Open Daily • 10:00 AM – 11:00 PM",
        badges: ["Sea View", "Fresh Seafood", "Family Friendly"],
    },
    {
        image: TimesSquareOutlet,
        title: "Times Square Outlet",
        description:
            "Located in the heart of the city, takeaway, and freshly prepared meals for travelers and locals alike.",
        location: "New York City, USA",
        hours: "Open Daily • 9:00 AM – 10:30 PM",
        badges: ["Takeaway", "Fast Service", "Home Delivery"],
    },
    {
        image: MarinaBayDining,
        title: "Marina Bay Dining",
        description:
            "Experience elegant interiors, premium hospitality, and chef-crafted dishes in a luxurious dining atmosphere.",
        location: "Singapore",
        hours: "Open Daily • 11:00 AM – 11:30 PM",
        badges: ["Premium Dining", "Air Conditioned", "Free Wi-Fi"],
    },
];

const OutletCard: React.FC<{ outlet: Outlet }> = ({ outlet }) => {
    return (
        <div className="group bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden transition-shadow duration-300 hover:shadow-md h-full flex flex-col">
            {/* Image Container */}
            <div className="relative w-full h-56 overflow-hidden shrink-0">
                <Image
                    src={outlet.image}
                    alt={outlet.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col grow">
                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-2 leading-tight">
                    {outlet.title}
                </h3>

                {/* Description */}
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                    {outlet.description}
                </p>

                {/* Location */}
                <div className="flex items-center gap-2 text-gray-500 mb-2">
                    <MapPin className="w-4 h-4 shrink-0 text-[#22C55E]" />
                    <span className="text-sm">{outlet.location}</span>
                </div>

                {/* Hours */}
                <div className="flex items-center gap-2 text-gray-500 mb-4">
                    <Clock className="w-4 h-4 shrink-0 text-[#22C55E]" />
                    <span className="text-sm">{outlet.hours}</span>
                </div>

                {/* Badges */}
                <div className="flex flex-wrap gap-2 mb-5">
                    {outlet.badges.map((badge, index) => (
                        <span
                            key={index}
                            className="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-4 py-2 text-sm font-medium text-green-700"
                        >
                            {badge}
                        </span>
                    ))}
                </div>

                {/* Get Directions Button - pushes to bottom */}
                <div className="mt-auto">
                    <button className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-white border border-[#22C55E] text-[#22C55E] rounded-xl font-medium text-sm transition-colors duration-200 hover:bg-[#22C55E] hover:text-white">
                        <Navigation className="w-4 h-4" />
                        Get Directions
                    </button>
                </div>
            </div>
        </div>
    );
};

export default function OurOutlets() {
    return (
        <section id="Outlets" className="py-16 px-4 bg-white">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <span className="text-sm font-semibold uppercase tracking-wider text-[#22C55E]">
                        Outlets
                    </span>
                    <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Our Outlets
                    </h2>
                    <p className="mt-4 max-w-2xl mx-auto text-base leading-relaxed text-gray-500">
                        Visit our signature outlets around the world and enjoy the same
                        fresh flavors, quality ingredients, and exceptional dining
                        experience wherever you go.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {outlets.map((outlet, index) => (
                        <OutletCard key={index} outlet={outlet} />
                    ))}
                </div>
            </div>
        </section>
    );
}