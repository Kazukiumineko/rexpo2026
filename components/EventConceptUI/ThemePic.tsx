"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ThemePic() {
    return (
        <section className="relative w-full bg-black py-24 md:py-40 overflow-hidden flex flex-col items-center">
            {/* メインビジュアルエリア */}
            <div className="relative z-10 w-full px-4 md:px-10 flex items-center justify-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 40 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="relative w-full max-w-xl md:max-w-2xl lg:max-w-3xl"
                >
                    <Image
                        src="/event-concept-page/ThemeMessage.png"
                        alt="Theme Message"
                        width={1200}
                        height={800}
                        className="w-full h-auto object-contain drop-shadow-2xl"
                        priority
                    />
                </motion.div>
            </div>
        </section>
    );
}
