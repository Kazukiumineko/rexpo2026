"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function LocationTop() {
    return (
        /* 文字の突き抜けを許可するため overflow-hidden はなし */
        <section className="relative w-full h-[60vh] bg-white">
            {/* 1. メイン背景画像 */}
            <Image
                src="/location/Location.jpg"
                alt="Location Background"
                fill
                className="object-cover object-bottom brightness-100"
                priority
            />

            {/* 2. 下部のごく薄いグラデーション（Infoセクションへの繋ぎ） */}
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-white/30 via-transparent to-transparent" />

            {/* 3. 右端の縦書き "LOCATION" テキスト */}
            <div className="absolute inset-y-0 right-0 flex items-start pt-20 z-20 pr-4 md:pr-8 pointer-events-none">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 0.2, y: 0 }} // 薄く黒文字を表示
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="font-oswald text-[12vh] md:text-[20vh] lg:text-[25vh] font-bold text-black leading-none select-none"
                    style={{
                        writingMode: "vertical-rl",
                        textOrientation: "mixed",
                        height: "400vh", // Infoセクションへ食い込ませる
                    }}
                >
                    LOCATION
                </motion.h1>
            </div>
        </section>
    );
}