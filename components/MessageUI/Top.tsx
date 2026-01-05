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
            <div className="relative w-full h-[25vh] bg-white flex items-end pb-8 md:pb-12 px-6 md:px-20 lg:px-32 overflow-hidden">
                {/* 開祭にあたって */}
                <div className="w-full max-w-[1600px] mx-auto">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="relative z-10 text-black text-3xl md:text-5xl lg:text-6xl font-bold tracking-widest leading-none"
                    >
                        開祭にあたって
                    </motion.p>
                </div>
            </div>

            {/* 3. MESSAGE タイトル (全体にまたがる縦書き配置) */}
            {/* 上端が見えるように位置を下げる、色はグレー */}
            <motion.h1
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="absolute right-4 md:right-8 lg:right-16 -bottom-[15vh] z-0 font-oswald text-[15vh] md:text-[20vh] lg:text-[25vh] font-bold tracking-tight text-black/20 select-none pointer-events-none leading-none origin-bottom-right"
                style={{ writingMode: "vertical-rl" }}
            >
                MESSAGE
            </motion.h1>
        </section>
    );
}