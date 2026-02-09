"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";
import { Play } from "lucide-react";

export default function ClosingMessage() {
    // スクロールを無効化
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);

    return (
        <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black text-white px-4 overflow-hidden select-none">
            {/* Background Effects */}
            <div className="absolute inset-0 z-0 opacity-50">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-[128px] animate-pulse" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-purple-900/20 rounded-full blur-[100px] animate-pulse delay-1000" />
            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
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
                    transition={{ delay: 2, duration: 1 }}
                    className="group relative flex items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 transition-all duration-500 cursor-pointer"
                    onClick={() => { console.log('Action pending...'); }}
                >
                    {/* Ring Animations */}
                    <div className="absolute inset-0 rounded-full border border-white/10 scale-100 opacity-0 group-hover:scale-125 group-hover:opacity-100 transition-all duration-700" />
                    <div className="absolute inset-0 rounded-full border border-white/5 scale-100 opacity-0 group-hover:scale-150 group-hover:opacity-50 transition-all duration-1000 delay-100" />

                    <Play className="w-8 h-8 md:w-10 md:h-10 text-white fill-white ml-1 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300" />
                </motion.button>

            </motion.div>
        </div>
    );
}
