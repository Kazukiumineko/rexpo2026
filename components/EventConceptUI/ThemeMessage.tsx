"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ThemeMessage() {
    return (
        <section className="relative w-full bg-black py-24 md:py-40 overflow-hidden min-h-[80vh] flex items-center justify-center">

            <div className="absolute inset-0 z-0 pointer-events-none">
                <Image
                    src="/event-concept-page/Introduction.jpg"
                    alt="Background Texture"
                    fill
                    className="object-cover object-center opacity-20"
                />
            </div>

            <div className="relative z-10 w-full h-[40vh] md:h-[80vh] lg:h-[80vh] px-4 md:px-10 flex items-center justify-center">

                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 40 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: false }}
                    className="relative w-full max-w-xl md:max-w-2xl lg:max-w-3xl"
                >
                    <Image
                        src="/event-concept-page/ThemeMessage.png"
                        alt="Theme Message"
                        width={1200}
                        height={800}
                        className="w-full h-auto items-center justify-center object-contain drop-shadow-2xl"
                        priority
                    />
                </motion.div>

            </div>

        </section>
    );
}