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

            <div ref={sectionRef} className="w-full max-w-7xl mx-auto px-6 lg:px-12">

                <motion.div
                    className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >

                    <motion.div
                        className="flex flex-col items-start space-y-8"
                        variants={itemVariants}
                    >

                        <h2 className="font-jp text-5xl lg:text-6xl font-bold tracking-tight">
                            R-EXPO とは
                        </h2>

                        <p className="font-zen-kaku text-gray-300 text-sm leading-loose">
                            タイ、マレーシア、ベトナム、アメリカ、オーストラリア、リトアニア、ガラパゴス諸島・・・
                            彼らが語るのは、ネットで調べた情報のまとめではありません。「トビタテ！留学JAPAN」や海外研修で直面したトラブル、現地の人との対話、そして肌で感じた文化の違いという「生きた体験」です。
                        </p>

                        <a
                            href="/event-concept"
                            className="block transition-transform duration-300 hover:scale-105"
                        >
                            <Image
                                src="/ViewMore.png"
                                alt="View More"
                                width={100}
                                height={40}
                                className="object-contain"
                            />
                        </a>
                    </motion.div>


                    <motion.div
                        className="w-full flex justify-center lg:justify-end"
                        variants={itemVariants}
                    >
                        <Carousel
                            plugins={[plugin.current]}
                            className="w-full max-w-lg"
                            opts={{
                                align: "start",
                                loop: true,
                            }}
                        >
                            <CarouselContent>
                                {carouselImages.map((src, index) => (
                                    // ★修正箇所: basis-1/1 は存在しないクラスのため basis-full に修正
                                    <CarouselItem key={index} className="basis-full">
                                        <div className="p-1">
                                            <div className="relative aspect-video w-full overflow-hidden rounded-lg z-40 shadow-2xl border border-white/10">
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
