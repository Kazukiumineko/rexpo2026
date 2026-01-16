"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

interface OpeningProps {
    isLoaded: boolean; // 外部（動画など）の読み込み完了フラグ
}

export default function Opening({ isLoaded }: OpeningProps) {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        if (isLoaded) {
            // 少し待ってからフェードアウトさせる（演出用）
            const timer = setTimeout(() => {
                setIsVisible(false);
            }, 800); // 0.8秒待機
            return () => clearTimeout(timer);
        }
    }, [isLoaded]);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.0, ease: "easeInOut" }}
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-white"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.1 }}
                        transition={{ duration: 0.8 }}
                        className="relative w-[100px] h-[100px]" // ロゴサイズ
                    >
                        <div
                            className="w-full h-full"
                            style={{
                                backgroundImage: 'url("/main/RmarkRED.png")',
                                backgroundSize: 'contain',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                            }}
                        />
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
