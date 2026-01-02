"use client";

import { useRef, RefObject } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

interface ScrollTextSectionProps {
    headerRef: RefObject<HTMLHeadingElement | null>;
}

export default function ScrollTextSection({ headerRef }: ScrollTextSectionProps) {
    const textSectionRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: textSectionRef,
        offset: ["start end", "end start"],
    });
    const yRange = useTransform(scrollYProgress, [0, 1], [50, -50]);
    const smoothY = useSpring(yRange, { stiffness: 20, damping: 10 });

    return (
        <div className="w-full max-w-full mx-auto px-2 md:px-0">
            <motion.div
                ref={textSectionRef}
                className="max-w-full mx-auto"
                style={{ y: smoothY }}
            >
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 1.8, ease: "easeOut" }}
                >

                    <h2 ref={headerRef}
                        className="text-2xl md:text-5xl lg:text-6xl font-bold mb-10 text-center text-white-500">
                        教室には収まらない
                    </h2>

                    <h2 className="text-2xl md:text-5xl lg:text-6xl font-bold mb-30 text-center text-white-500">
                        慶祥生の本気
                    </h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 1.8, ease: "easeOut", delay: 0.6 }}
                >

                    <p className="text-base md:text-xl text-center leading-relaxed mb-10">
                        R-EXPO2026が目指すのは、未来社会の縮図を描くこと。
                    </p>

                    <p className="text-base md:text-xl text-center leading-relaxed mb-10">

                        会場に一歩足を踏み入れれば、そこには多様なレイヤーで構成された
                    </p>
                    <p className="text-base md:text-xl text-center leading-relaxed mb-20">
                        「新しい世界」が広がっています。
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 1.8, ease: "easeOut", delay: 0.6 }}
                >

                    <p className="text-base md:text-xl text-center leading-relaxed mb-9">
                        国境を超えた対話
                    </p>

                    <p className="text-base md:text-xl text-center leading-relaxed mb-9">

                        知の冒険
                    </p>
                    <p className="text-base md:text-xl text-center leading-relaxed mb-20">
                        感性の爆発...
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 1.8, ease: "easeOut", delay: 0.6 }}
                >

                    <p className="text-base md:text-xl text-center leading-relaxed mb-9">
                        完成された未来図はまだありません。しかしここには、
                    </p>

                    <p className="text-base md:text-xl text-center leading-relaxed mb-9">

                        未来を創るための「種」が無限に撒かれています。
                    </p>
                    <p className="text-base md:text-xl text-center leading-relaxed mb-9">

                    </p>
                </motion.div>

            </motion.div>
        </div>
    );
}
