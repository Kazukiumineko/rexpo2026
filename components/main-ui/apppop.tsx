"use client";

import { motion } from "framer-motion";
import { AlertCircle } from "lucide-react";

export default function AppMaintenanceBanner() {
    return (
        <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="fixed top-0 left-0 w-full z-[9999] bg-gradient-to-r from-red-900/90 to-red-800/90 backdrop-blur-md border-b border-red-500/30 shadow-lg text-white px-4 py-3 md:py-4"
        >
            <div className="max-w-6xl mx-auto flex items-start md:items-center justify-center gap-3 md:gap-4">
                <AlertCircle className="w-5 h-5 md:w-6 md:h-6 text-red-200 shrink-0 mt-0.5 md:mt-0" />
                <div className="text-sm md:text-base font-zen-kaku tracking-wide">
                    <p className="font-bold mb-0.5 md:mb-0 md:inline md:mr-3">
                        R-EXPOアプリのメンテナンスについて
                    </p>
                    <span className="hidden md:inline text-white/50 mx-2">|</span>
                    <p className="inline md:inline md:font-light text-white/90">
                        アプリは現在停止しております。復旧に努めておりますので今しばらくお待ちください
                    </p>
                </div>
            </div>
        </motion.div>
    );
}
