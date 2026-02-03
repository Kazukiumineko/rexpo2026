"use client";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/shared/carousel";
import { useCarouselAutoPlay } from "@/hooks/useCarouselAutoPlay";
import LazyImage from "@/components/shared/lazy-image";

const carouselImages = [
    "/carouselpic/pic1.jpg",
    "/carouselpic/pic2.jpg",
    "/carouselpic/pic3.jpg",
    "/carouselpic/pic4.jpg",
    "/carouselpic/pic5.jpg",
    "/carouselpic/pic6.jpg",
];

export default function ConceptCarousel() {
    const plugin = useCarouselAutoPlay();

    return (
        <Carousel
            plugins={[plugin.current]}
            className="w-full"
            opts={{
                align: "center",
                loop: true,
            }}
        >
            <CarouselContent>
                {carouselImages.map((src, index) => (
                    <CarouselItem key={index} className="basis-full lg:basis-[28%]">
                        <div className="p-1">
                            <div className="relative aspect-[2/1] w-full overflow-hidden rounded-2xl z-40 shadow-2xl border border-white/10">
                                <a href="/event-concept">
                                    <LazyImage
                                        src={src}
                                        alt={`Event Photo ${index + 1}`}
                                        fill
                                        className="object-cover transition-transform duration-500 hover:scale-110"
                                    />
                                </a>
                            </div>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
    );
}
