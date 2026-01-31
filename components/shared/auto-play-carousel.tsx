"use client";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/shared/carousel";
import { useCarouselAutoPlay } from "@/hooks/useCarouselAutoPlay";
import LazyImage from "@/components/shared/lazy-image";

interface AutoPlayCarouselProps {
    images: string[];
    className?: string; // 任意のクラスを受け取れるように拡張
}

export default function AutoPlayCarousel({ images, className = "" }: AutoPlayCarouselProps) {
    const plugin = useCarouselAutoPlay();

    return (
        <Carousel
            plugins={[plugin.current]}
            className={`w-full ${className}`}
            opts={{
                align: "start",
                loop: true,
            }}
        >
            <CarouselContent className="-ml-2 md:-ml-4">
                {images.map((src, index) => (
                    <CarouselItem
                        key={index}
                        className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3"
                    >
                        <div className="relative aspect-video w-full overflow-hidden bg-gray-100 rounded-xl">
                            <LazyImage
                                src={src}
                                alt={`Carousel Image ${index + 1}`}
                                fill
                                className="object-cover"
                            />
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
    );
}
