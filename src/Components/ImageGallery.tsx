'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ImageGalleryProps } from '@/types/modules';

export default function ImageGallery({ images, name }: ImageGalleryProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const hasMultipleImages = images.length > 1;

    const goToPrevious = () => {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const goToNext = () => {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className="relative overflow-hidden rounded-2xl border border-gray-100 shadow-sm">
            {hasMultipleImages && (
                <>
                    <button
                        onClick={goToPrevious}
                        className="absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/80 p-2 shadow hover:bg-white transition-colors"
                        aria-label="Previous image"
                    >
                        <ChevronLeft className="h-5 w-5 text-gray-700" />
                    </button>
                    <button
                        onClick={goToNext}
                        className="absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/80 p-2 shadow hover:bg-white transition-colors"
                        aria-label="Next image"
                    >
                        <ChevronRight className="h-5 w-5 text-gray-700" />
                    </button>
                </>
            )}
            <img
                src={images[currentIndex]}
                alt={name}
                className="h-auto w-full object-cover aspect-[4/3] rounded-2xl"
                loading="lazy"
            />
        </div>
    );
}