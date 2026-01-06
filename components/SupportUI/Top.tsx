"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function MessageTop() {
    return (
        <section className="relative w-full bg-white">
            {/* 1. 画像エリア */}
            <div className="relative w-full h-[55vh]">
                <Image
                    src="/event-concept-page/Atrium.jpg"
                    alt="Message Background"
                    fill
                    className="object-cover object-center"
                    priority
                />
            </div>

            {/* 2. 下部白エリア (テキスト用) */}
            {/* 【変更点】
                スマホの pt (padding-top) を 6 から 16 に増やし、画像との距離を広げました。
            */}

            <div className="relative w-full h-auto md:h-[25vh] bg-white flex items-start md:items-end pt-16 md:pt-0 pb-12 md:pb-6 px-6 md:px-20 lg:px-32 overflow-hidden">
                {/* 開祭にあたって */}
                <div className="w-full max-w-[1600px] mx-auto">
                    <div className="w-min md:w-full">
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                            className="relative z-10 text-black text-3xl md:text-5xl lg:text-6xl font-bold tracking-widest leading-none whitespace-nowrap md:whitespace-normal"
                        >
                            協賛いただいた<br className="md:hidden" />企業のみなさま
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                            className="relative z-10 text-gray-700 text-sm md:text-base mt-4 md:mt-6 font-medium leading-relaxed max-w-2xl"
                        >
                            R-EXPO2026の開催にあたり、ご協力いただいた企業のみなさまを紹介します。※五十音順
                        </motion.p>
                    </div>
                </div>
            </div>

            {/* 3. MESSAGE タイトル (全体にまたがる縦書き配置) */}
            <motion.h1
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                // MESSAGEの大きさは前回の修正（13vh）を維持しています
                className="absolute right-4 md:right-8 lg:right-16 top-[20vh] md:top-auto md:-bottom-[15vh] z-0 font-oswald text-[13vh] md:text-[15vh] lg:text-[25vh] font-bold tracking-tight text-black/20 select-none pointer-events-none leading-none origin-bottom-right"
                style={{ writingMode: "vertical-rl" }}
            >
                SUPPORT
            </motion.h1>
        </section>
    );
}