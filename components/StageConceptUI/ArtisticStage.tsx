"use client";

import * as React from "react";
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
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export default function ArtisticStage() {
    return (
        <section id="artistic" className="relative w-full pt-24 pb-0 md:pt-32 md:pb-0 bg-transparent text-white overflow-hidden">

            <motion.div
                className="w-full max-w-[1000px] mx-auto px-6 lg:px-20"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
            >
                {/* --- タイトルエリア (中央揃え) --- */}
                <motion.div
                    className="flex flex-col items-center text-center space-y-6"
                    variants={itemVariants}
                >
                    <h2 className="font-oswald text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none text-white">
                        ARTISTIC STAGE
                    </h2>

                    <div className="max-w-3xl mx-auto">
                        <h3 className="font-jp text-lg md:text-xl lg:text-2xl font-medium tracking-wide leading-relaxed text-gray-300 mb-6">
                            感性が共鳴する、創造の舞台
                        </h3>
                        <p className="font-jp text-sm md:text-base leading-loose text-gray-400">
                            音楽、演劇、ダンス、美術。多様な芸術表現を通じて、生徒たちの瑞々しい感性が爆発するアーティスティックステージ。言葉では伝えきれない想いや感情を身体や作品全体で表現し、観客の心に直接訴えかける感動のパフォーマンスをお届けします。
                        </p>
                    </div>
                </motion.div>

            </motion.div>
        </section>
    );
}
