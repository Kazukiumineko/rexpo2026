"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function ComingSoon() {
    return (
        <div className="relative w-full h-screen bg-gray-50 flex flex-col items-center justify-center overflow-hidden px-6">

            {/* 1. メインテキスト */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-center z-10"
            >
                <h1 className="font-oswald text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-black mb-4">
                    COMING SOON
                </h1>
                <p className="text-gray-500 text-sm md:text-base tracking-widest font-medium">
                    現在準備中です。公開まで今しばらくお待ちください。
                </p>
            </motion.div>

            {/* 2. 装飾ライン (アクセント) */}
            <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.0, delay: 0.5, ease: "circOut" }}
                className="w-24 h-[2px] bg-black mt-12 mb-12 origin-left"
            />

            {/* 3. トップに戻るボタン */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
            >
                <Link
                    href="/"
                    className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-black px-8 font-medium text-white transition-all duration-300 hover:bg-gray-800 hover:w-48"
                >
                    <span className="mr-2 transition-transform duration-300 group-hover:-translate-x-1">
                        ←
                    </span>
                    <span className="relative">Back to Top</span>
                </Link>
            </motion.div>

            {/* 4. 背景の装飾文字 (うっすらと大きく配置) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none select-none z-0 flex items-center justify-center opacity-[0.03]">
                <span className="font-oswald text-[20vw] font-bold tracking-tighter whitespace-nowrap">
                    COMING SOON
                </span>
            </div>
        </div>
    );
}