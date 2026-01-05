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

export default function AcademicStage() {
    return (
        <section id="academic" className="relative w-full pt-24 pb-0 md:pt-32 md:pb-0 bg-transparent text-white overflow-hidden">

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
                        ACADEMIC STAGE
                    </h2>

                    <div className="max-w-3xl mx-auto">
                        <h3 className="font-jp text-lg md:text-xl lg:text-2xl font-medium tracking-wide leading-relaxed text-gray-300 mb-6">
                            知的好奇心が拓く、探究の地平
                        </h3>
                        <p className="font-jp text-sm md:text-base leading-loose text-gray-400">
                            日頃の学習や研究活動の成果を発表するアカデミックステージ。生徒たちが自ら問いを立て、仮説を検証し、深く考察した探究のプロセス。文献調査から実験、フィールドワークまで、多角的なアプローチで真理に迫る熱き知の冒険をご覧ください。
                        </p>
                    </div>
                </motion.div>

            </motion.div>
        </section>
    );
}
