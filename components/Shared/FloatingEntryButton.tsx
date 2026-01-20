"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function FloatingEntryButton() {
    const pathname = usePathname();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // スクロール検知：100px以上スクロールしたら表示
            if (window.scrollY > 100) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // ホームディレクトリ（トップページ）以外では表示しない
    if (pathname !== "/") {
        return null;
    }

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    key="floating-entry-btn"
                    className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-50"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <Link href="/entry" className="block group cursor-pointer">
                        <motion.div
                            className="flex flex-col items-center justify-center w-24 h-24 md:w-32 md:h-32 rounded-full border-2 border-white bg-[#092040] text-white shadow-xl"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <span className="text-xs md:text-lg font-bold leading-tight text-center font-jp tracking-wider">
                                申込みは
                                <br />
                                <span className="text-sm md:text-lg mt-1 block">こちら</span>
                            </span>
                        </motion.div>
                    </Link>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
