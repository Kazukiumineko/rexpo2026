"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Hand } from "lucide-react";

type ScrollHintProps = {
    showHint: boolean;
};

export default function ScrollHint({ showHint }: ScrollHintProps) {
    return (
        <AnimatePresence>
            {showHint && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    // pointer-events-none: ヒントの下にある要素を操作できるようにする重要設定
                    className="absolute inset-0 z-[100] pointer-events-none pt-[180px] md:pt-[300px]"
                >
                    {/* 固定配置ではなく、テーブルの中央付近に来るように調整 */}
                    <div className="sticky top-[180px] md:top-[300px] mx-auto w-fit flex flex-col items-center">
                        <div className="bg-black/60 text-white px-8 py-6 rounded-3xl flex flex-col items-center shadow-2xl backdrop-blur-sm border border-white/10">
                            <div className="relative w-12 h-12 mb-3">
                                {/* 指のアニメーション: 左右に揺れる */}
                                <motion.div
                                    animate={{
                                        x: [-15, 15, -15],
                                        opacity: [0.7, 1, 0.7]
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                >
                                    <Hand className="w-10 h-10 md:w-12 md:h-12 fill-white/20 stroke-white stroke-[1.5]" />
                                </motion.div>
                            </div>
                            <span className="text-sm md:text-base font-bold tracking-[0.2em] animate-pulse">
                                SCROLL &gt;&gt;
                            </span>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
