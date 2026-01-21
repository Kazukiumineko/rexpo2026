"use client";


import LazyImage from "@/components/shared/lazy-image";
import { motion } from "framer-motion";

export default function Pic() {
    return (
        <section className="relative w-full bg-transparent pt-40 pb-24 md:py-40 overflow-hidden flex flex-col items-center">
            {/* メインビジュアルエリア */}
            <div className="relative z-10 w-full px-4 md:px-10 flex items-center justify-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 40 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="relative w-full max-w-xl md:max-w-2xl lg:max-w-3xl"
                >
                    <LazyImage
                        src="/event-concept-page/ThemeMessage2.png"
                        alt="Theme Message"
                        width={1200}
                        height={800}
                        containerClassName="w-full h-full bg-transparent"
                        className="w-full h-auto object-contain drop-shadow-2xl"
                        priority
                    />
                </motion.div>
            </div>
        </section>
    );
}
