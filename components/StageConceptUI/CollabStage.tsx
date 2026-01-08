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

// アニメーション用のVariants
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            duration: 0.8,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

export default function CollabStage() {
    const plugin = useCarouselAutoPlay();

    const carouselImages = [
        "/stage-concept/global1.jpg",
        "/stage-concept/global2.jpg",
        "/stage-concept/global3.jpg",
        "/stage-concept/global4.jpg",
        "/stage-concept/global5.jpg",
        "/stage-concept/global6.jpg",
    ];

    return (
        <section id="collaboration" className="relative w-full pt-24 pb-0 md:pt-32 md:pb-0 bg-transparent text-white overflow-hidden">

            <motion.div
                className="w-full max-w-[1600px] mx-auto px-6 lg:px-20"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
            >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* --- 左側: タイトルエリア --- */}
                    <motion.div
                        className="flex flex-col items-start space-y-6"
                        variants={itemVariants}
                    >
                        <h2 className="font-oswald text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none text-white">
                            COLLABORATION STAGE
                        </h2>

                        <div>
                            <h3 className="font-jp text-lg md:text-xl lg:text-2xl font-medium tracking-wide leading-relaxed text-gray-300 mb-6">
                                社会と繋がる、共創の架け橋
                            </h3>
                            <p className="font-jp text-sm md:text-base leading-loose text-gray-300">
                                協賛企業によるブース出展や講演会、立命館学園との連携企画など、学校と社会がつながるエリアです。 将来のキャリアや進路について考えるきっかけとなることはもちろん、プロによる圧巻のパフォーマンスや、生徒とのスペシャルコラボステージも多数用意しています。
                            </p>
                        </div>
                    </motion.div>

                    {/* --- 右側: カルーセルエリア --- */}
                    <motion.div
                        className="w-full relative"
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
                            <CarouselContent className="-ml-4">
                                {carouselImages.map((src, index) => (
                                    <CarouselItem key={index} className="pl-4 basis-full md:basis-[60%] lg:basis-[65%]">
                                        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm border border-white/10 bg-gray-900">
                                            <Image
                                                src={src}
                                                alt={`Collab Stage ${index + 1}`}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                        </Carousel>
                    </motion.div>

                </div>
            </motion.div>
        </section>
    );
}
