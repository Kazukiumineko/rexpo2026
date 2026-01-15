"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/MainUI/06_carousel";
import { useCarouselAutoPlay } from "@/hooks/useCarouselAutoPlay";
import { useEventConceptAnimation } from "@/hooks/useEventConceptAnimation";

export default function ConceptSection() {
    const plugin = useCarouselAutoPlay();
    const { sectionRef, isInView, containerVariants, itemVariants } = useEventConceptAnimation();

    const carouselImages = [
        "/carouselpic/Carousel1.jpg",
        "/carouselpic/Carousel2.jpg",
        "/carouselpic/Carousel3.jpg",
        "/carouselpic/Carousel4.jpg",
    ];

    return (
        <section className="relative w-full py-32 bg-transparent text-white overflow-hidden">

            <div className="absolute inset-0 -z-10 opacity-40 "></div>

            <div ref={sectionRef} className="w-full max-w-[1600px] mx-auto px-6 lg:px-20">

                <motion.div
                    className="flex flex-col gap-8 md:gap-16 lg:gap-24 items-center"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >

                    <motion.div
                        className="flex flex-col items-center space-y-8"
                        variants={itemVariants}
                    >

                        <h2 className="font-oswald text-6xl md:text-8xl lg:text-[10rem] font-bold tracking-tight whitespace-nowrap">
                            INTRODUCTION
                        </h2>

                        <div className="flex flex-col items-center space-y-4 lg:space-y-20">
                            <h2 className="font-jp text-2xl md:text-5xl font-bold tracking-tight flex items-center gap-3">
                                <a href="/event-concept" className="hover:opacity-80 transition-opacity">
                                    R-EXPO が目指す場所
                                </a>
                                <a
                                    href="/event-concept"
                                    className="flex items-center justify-center p-1 opacity-80 hover:opacity-100 transition-opacity text-white"
                                >
                                    <svg
                                        className="w-5 h-5 md:w-8 md:h-8"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                </a>
                            </h2>



                        </div>
                    </motion.div>


                    <motion.div
                        className="w-full flex justify-center"
                        variants={itemVariants}
                    >
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
                                                    <Image
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
                    </motion.div>

                </motion.div>
            </div>
        </section>
    );
}
