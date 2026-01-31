"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useGlobalContext } from "@/context/GlobalContext";

interface OpeningProps {
    isLoaded: boolean; // 外部（動画など）の読み込み完了フラグ
}

export default function Opening({ isLoaded }: OpeningProps) {
    const { hasIntroShown, setHasIntroShown } = useGlobalContext();
    const [isVisible, setIsVisible] = useState(!hasIntroShown);

    useEffect(() => {
        if (hasIntroShown) {
            setIsVisible(false);
            return;
        }

        if (isLoaded) {
            // 少し待ってからフェードアウトさせる（演出用）
            const timer = setTimeout(() => {
                setIsVisible(false);
                setHasIntroShown(true);
            }, 800); // 0.8秒待機
            return () => clearTimeout(timer);
        }
    }, [isLoaded, hasIntroShown, setHasIntroShown]);

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
                        className="flex flex-col items-center justify-center gap-6"
                    >
                        <div className="relative w-[150px] h-[150px]">
                            <Image
                                src="/main/Loading3.png"
                                alt="Loading Logo"
                                fill
                                sizes="100px"
                                className="object-contain"
                                priority
                            />
                        </div>
                        <p className="text-base font-bold tracking-widest text-gray-600 font-kaku pl-2">
                            Loading...
                        </p>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
