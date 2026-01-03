"use client";

import * as React from "react";
import Image from "next/image";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/MainUI/06_carousel";

export default function CarouselSection() {
    const carouselImages = [
        "/CarouselPic/Carousel1.jpg",
        "/CarouselPic/Carousel2.jpg",
        "/CarouselPic/Carousel3.jpg",
        "/CarouselPic/Carousel4.jpg",
    ];

    return (
        <section className="relative w-full py-12 lg:py-24 bg-transparent text-white overflow-hidden">
            <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 flex flex-col items-center space-y-12">

                <div className="text-center space-y-4">
                    <h2 className="text-4xl lg:text-5xl font-bold tracking-tight">
                        Highlights
                    </h2>
                    <p className="text-gray-300 max-w-2xl mx-auto">
                        Explore the vibrant moments and experiences from our previous events.
                    </p>
                </div>

                <div className="w-full flex justify-center">
                    <Carousel
                        className="w-full max-w-4xl"
                        opts={{
                            align: "start",
                            loop: true,
                        }}
                    >
                        <CarouselContent>
                            {carouselImages.map((src, index) => (
                                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                                    <div className="p-2">
                                        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-white/10 shadow-lg">
                                            <Image
                                                src={src}
                                                alt={`Highlight ${index + 1}`}
                                                fill
                                                className="object-cover transition-transform duration-500 hover:scale-110"
                                            />
                                        </div>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="hidden md:flex left-[-3rem]" />
                        <CarouselNext className="hidden md:flex right-[-3rem]" />
                    </Carousel>
                </div>

            </div>
        </section>
    );
}
