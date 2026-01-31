"use client";

import * as React from "react";
import LazyImage from "@/components/shared/lazy-image";
import { motion } from "framer-motion";

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

interface StageCarouselSectionProps {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    images: string[];
}

export default function StageCarouselSection({
    id,
    title,
    subtitle,
    description,
    images
}: StageCarouselSectionProps) {

    return (
        <section id={id} className="relative w-full pt-24 pb-0 md:pt-32 md:pb-0 bg-transparent text-white overflow-hidden">
            <motion.div
                className="w-full max-w-[1600px] mx-auto px-6 lg:px-20"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
            >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

                    {/* --- 左側: タイトルエリア --- */}
                    <motion.div
                        className="flex flex-col items-start space-y-6"
                        variants={itemVariants}
                    >
                        <h2 className="font-oswald text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none text-white">
                            {title}
                        </h2>

                        <div>
                            <h3 className="font-jp text-lg md:text-xl lg:text-2xl font-medium tracking-wide leading-relaxed text-gray-300 mb-6">
                                {subtitle}
                            </h3>
                            <p className="font-jp text-sm md:text-base leading-loose text-gray-300">
                                {description}
                            </p>
                        </div>
                    </motion.div>

                    {/* --- 右側: 画像エリア (1枚のみ) --- */}
                    <motion.div
                        className="w-full relative lg:h-full"
                        variants={itemVariants}
                    >
                        <div className="relative aspect-[4/3] lg:aspect-auto lg:h-full w-full overflow-hidden rounded-sm border border-white/10 bg-gray-900">
                            {images.length > 0 && (
                                <LazyImage
                                    src={images[0]}
                                    alt={title}
                                    fill
                                    className="object-cover"
                                />
                            )}
                        </div>
                    </motion.div>

                </div>
            </motion.div>
        </section>
    );
}
