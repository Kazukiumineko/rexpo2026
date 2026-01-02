"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export default function MessageSection() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    const yRange = useTransform(scrollYProgress, [0, 1], [30, -30]);
    const smoothY = useSpring(yRange, { stiffness: 20, damping: 10 });

    return (
        <section className="relative w-full py-20 min-h-[50vh] flex items-center justify-center overflow-hidden">
            <motion.div
                ref={sectionRef}
                className="max-w-4xl mx-auto px-4 text-center z-10"
                style={{ y: smoothY }}
            >
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 1.0, ease: "easeOut" }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-wider">
                        MESSAGE
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-10 rounded-full" />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 1.0, ease: "easeOut", delay: 0.2 }}
                >
                    <p className="text-xl md:text-2xl text-white/90 leading-relaxed font-light">
                        未来への招待状
                    </p>
                    <p className="mt-4 text-lg text-white/70">
                        Join us in creating the next chapter.
                    </p>
                </motion.div>
            </motion.div>

            {/* Background elements if needed */}
            <div className="absolute inset-0 bg-transparent z-0" />
        </section>
    );
}
