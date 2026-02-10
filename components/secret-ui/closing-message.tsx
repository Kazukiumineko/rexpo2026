"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

import Image from "next/image";

const MESSAGES = [
    {
        text: (
            <>
                R-EXPOは、立命館慶祥の、<br className="md:hidden" />30年の集大成です。
            </>
        ),
        duration: 4000,
    },
    {
        text: (
            <>
                緑豊かな校舎からは、<br className="md:hidden" />
                こんなにも輝きに満ちた、<br className="md:hidden" />才能に溢れる生徒が生まれました。
            </>
        ),
        duration: 6000,
    },
    {
        text: (
            <>
                これまでの30年。これからの30年。<br />
                明日からの未来を、どう生きる？
            </>
        ),
        duration: 5400,
    },
    {
        text: (
            <>
                来たる慶祥生へ、<br className="md:hidden" />今こそ、輝こう。
            </>
        ),
        duration: 5400,
    }
];

export default function ClosingMessage() {
    const [isPlaying, setIsPlaying] = useState(true);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isFinished, setIsFinished] = useState(false);

    // スクロールを無効化
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);

    useEffect(() => {
        if (!isPlaying || isFinished) return;

        const currentDuration = MESSAGES[currentIndex]?.duration || 5400;

        const timer = setTimeout(() => {
            setCurrentIndex((prev) => {
                if (prev < MESSAGES.length - 1) {
                    return prev + 1;
                } else {
                    setIsFinished(true);
                    return prev;
                }
            });
        }, currentDuration);

        return () => clearTimeout(timer);
    }, [currentIndex, isPlaying, isFinished]);



    return (
        <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black text-white px-4 overflow-hidden select-none">
            {/* Background Effects */}
            <div className="absolute inset-0 z-0 opacity-50">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-[128px] animate-pulse" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-purple-900/20 rounded-full blur-[100px] animate-pulse delay-1000" />
            </div>

            {/* 画像をプリロードしておく */}
            <div className="fixed opacity-0 pointer-events-none">
                <Image
                    src="/main/hippy-text.png"
                    alt="Preload"
                    width={600}
                    height={300}
                    priority
                />
            </div>

            <AnimatePresence mode="wait">


                {isPlaying && !isFinished && currentIndex < MESSAGES.length && (
                    <motion.div
                        key={`message-${currentIndex}`}
                        className="relative z-10 max-w-4xl w-full text-center px-6"
                        initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
                        transition={{
                            duration: 1.0,
                            ease: "easeInOut"
                        }}
                    >
                        <p className="text-lg md:text-2xl lg:text-3xl font-light leading-relaxed tracking-wider text-white whitespace-pre-line">
                            {MESSAGES[currentIndex].text}
                        </p>
                    </motion.div>
                )}

                {isFinished && (
                    <motion.div
                        key="finished"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="relative z-10 p-8 flex flex-col items-center"
                    >
                        <Image
                            src="/main/hippy-text.png"
                            alt="Final Message"
                            width={600}
                            height={300}
                            className="w-full max-w-md md:max-w-xl lg:max-w-2xl h-auto object-contain"
                            priority
                        />
                        <p className="mt-12 text-base md:text-lg font-bold font-zen-kaku tracking-widest text-white/50">
                            R-EXPO2026 Fin
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
