"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Play } from "lucide-react";

const MESSAGES = [
    <>
        R-EXPOは、立命館慶祥の、<br className="md:hidden" />30年の集大成です。
    </>,
    <>
        牧場と山に囲まれた校舎からは、<br className="md:hidden" />30年の時を経て、<br />
        こんなにも輝きに満ちた、<br className="md:hidden" />才能に溢れる生徒が生まれました。
    </>,
    <>
        今ここにいるみなさんは、<br className="md:hidden" />新たな30年を創る、<br className="md:hidden" />これからの人たちです。
    </>
];

export default function ClosingMessage() {
    const [isPlaying, setIsPlaying] = useState(false);
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
        if (isPlaying && !isFinished) {
            // Initial delay to allow the "Fin" screen to fade out before first message appears?
            // Or just start immediately. Let's start immediately but handle the transition.

            const timer = setInterval(() => {
                setCurrentIndex((prev) => {
                    if (prev < MESSAGES.length - 1) {
                        return prev + 1;
                    } else {
                        clearInterval(timer);
                        // Wait for the last message's duration to complete
                        // Actually, the interval triggers AFTER 5s.
                        // So at 0s: Msg 0 shows.
                        // At 5s: Msg 1 shows.
                        // At 10s: Msg 2 shows.
                        // At 15s: We are here. We should stop.
                        setIsFinished(true);
                        return prev + 1;
                    }
                });
            }, 5000);

            return () => clearInterval(timer);
        }
    }, [isPlaying, isFinished]);

    const handlePlay = () => {
        setIsPlaying(true);
    };

    return (
        <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black text-white px-4 overflow-hidden select-none">
            {/* Background Effects */}
            <div className="absolute inset-0 z-0 opacity-50">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-[128px] animate-pulse" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-purple-900/20 rounded-full blur-[100px] animate-pulse delay-1000" />
            </div>

            <AnimatePresence mode="wait">
                {!isPlaying && !isFinished && (
                    <motion.div
                        key="start-screen"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="relative z-10 text-center flex flex-col items-center"
                    >
                        <div className="mb-16">
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: "100px" }}
                                transition={{ duration: 1.5, delay: 0.5 }}
                                className="h-[1px] bg-white/30 mx-auto mb-8"
                            />

                            <motion.h1
                                className="text-3xl md:text-5xl lg:text-6xl font-bold font-oswald tracking-[0.1em] mb-4 text-white"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: 0.8 }}
                            >
                                R-EXPO 2026 Fin
                            </motion.h1>

                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: "100px" }}
                                transition={{ duration: 1.5, delay: 0.5 }}
                                className="h-[1px] bg-white/30 mx-auto mt-8"
                            />
                        </div>

                        <motion.button
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ delay: 2, duration: 1 }}
                            className="group relative flex items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 transition-all duration-500 cursor-pointer"
                            onClick={handlePlay}
                        >
                            {/* Ring Animations */}
                            <div className="absolute inset-0 rounded-full border border-white/10 scale-100 opacity-0 group-hover:scale-125 group-hover:opacity-100 transition-all duration-700" />
                            <div className="absolute inset-0 rounded-full border border-white/5 scale-100 opacity-0 group-hover:scale-150 group-hover:opacity-50 transition-all duration-1000 delay-100" />

                            <Play className="w-8 h-8 md:w-10 md:h-10 text-white fill-white ml-1 opacity-80 group-hover:opacity-100 transition-all duration-300" />
                        </motion.button>
                    </motion.div>
                )}

                {isPlaying && !isFinished && currentIndex < MESSAGES.length && (
                    <motion.div
                        key={`message-${currentIndex}`}
                        className="relative z-10 max-w-4xl w-full text-center px-6"
                        initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
                        transition={{
                            duration: 1.5,
                            ease: "easeInOut"
                        }}
                    >
                        <p className="text-lg md:text-2xl lg:text-3xl font-light leading-relaxed tracking-wider text-white whitespace-pre-line">
                            {MESSAGES[currentIndex]}
                        </p>
                    </motion.div>
                )}

                {isFinished && (
                    <motion.div
                        key="finished"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 2 }}
                        className="relative z-10"
                    >
                        {/* Empty state or final logo could go here. For now, just fading to black/empty as implied. */}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
