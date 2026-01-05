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

export default function GlobalStage() {
    return (
        <section id="global" className="relative w-full pt-24 pb-0 md:pt-32 md:pb-0 bg-transparent text-white overflow-hidden">

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
                        GLOBAL STAGE
                    </h2>

                    <div className="max-w-3xl mx-auto">
                        <h3 className="font-jp text-lg md:text-xl lg:text-2xl font-medium tracking-wide leading-relaxed text-gray-300 mb-6">
                            国境を越えた学びが生む、慶祥生の未来
                        </h3>
                        <p className="font-jp text-sm md:text-base leading-loose text-gray-400">
                            「トビタテ！留学JAPAN」や海外研修で直面したトラブル、現地の人との対話、そして肌で感じた文化の違いという「生きた体験」。彼らが語るのは、ネットで調べた情報のまとめではありません。教室では得られない学びの軌跡をご覧ください。
                        </p>
                    </div>
                </motion.div>

            </motion.div>
        </section>
    );
}