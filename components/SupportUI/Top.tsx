"use client";


import LazyImage from "@/components/Shared/LazyImage";
import { motion } from "framer-motion";

export default function MessageTop() {
    return (
        <section className="relative w-full bg-white isolate">
            {/* 1. 画像エリア */}
            <div className="relative w-full h-[55vh] z-0">
                <LazyImage
                    src="/event-concept-page/Atrium.jpg"
                    alt="Message Background"
                    fill
                    className="object-cover object-center"
                    priority
                />
            </div>

            {/* 2. 下部エリア (テキスト用) */}
            {/* 【修正ポイント】
                - overflow-hidden を overflow-visible に変更 (文字が枠からはみ出ても表示されるように)
                - z-index を 30 に設定し、画像(z-0)より手前に配置
            */}
            <div className="relative z-30 w-full h-auto md:h-[25vh] bg-transparent flex items-start md:items-end md:mt-20 pt-12 md:pt-0 pb-4 md:pb-0 px-6 md:px-20 lg:px-32 overflow-visible">

                <div className="w-full max-w-[1600px] mx-auto pointer-events-none">
                    {/* pointer-events-none を入れておくと、文字の上の透明な余白がクリックを邪魔しません（文字自体は pointer-events-auto で操作可能にできます） */}

                    <div className="w-min md:w-full pointer-events-auto">
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                            // 【修正ポイント】relative と z-40 を指定し、強制的に最前面へ
                            className="relative z-40 text-black text-3xl md:text-5xl lg:text-6xl font-bold tracking-widest leading-snug whitespace-nowrap md:whitespace-normal"
                        >
                            ご支援いただいた<br />企業・団体の皆様
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                            className="relative z-40 text-gray-700 text-sm md:text-base mt-4 md:mt-6 font-medium leading-relaxed max-w-2xl"
                        >
                            R-EXPO2026の開催にあたり、ご支援いただいたみなさまを紹介します。※五十音順
                        </motion.p>
                    </div>
                </div>
            </div>

            {/* 3. MESSAGE タイトル (背景用) */}
            <motion.h1
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                // テキスト(z-40)より後ろ、画像(z-0)より手前になるよう z-10
                className="absolute right-4 md:right-8 lg:right-16 top-[20vh] md:top-auto md:-bottom-[15vh] z-10 font-oswald text-[13vh] md:text-[15vh] lg:text-[25vh] font-bold tracking-tight text-black/20 select-none pointer-events-none leading-none origin-bottom-right"
                style={{ writingMode: "vertical-rl" }}
            >
                SUPPORT
            </motion.h1>
        </section>
    );
}