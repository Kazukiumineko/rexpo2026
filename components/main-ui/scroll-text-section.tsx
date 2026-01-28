"use client";

import { useRef, RefObject } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Link from "next/link";

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
        /* px-2を削除しw-fullを徹底。はみ出し防止にoverflow-hiddenを追加 */
        <div className="w-full max-w-full mx-auto overflow-hidden">
            <motion.div
                ref={textSectionRef}
                className="w-full mx-auto"
                style={{ y: smoothY }}
            >
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 1.8, ease: "easeOut" }}
                >
                    <h2 ref={headerRef}
                        /* whitespace-nowrapでスマホの見出し1行を強制 */
                        className="text-4xl md:text-5xl lg:text-6xl font-bold mb-10 text-center text-white whitespace-nowrap md:whitespace-normal">
                        教室を飛び出せ
                    </h2>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-32 text-center text-white">
                        慶祥生の本気
                    </h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 1.8, ease: "easeOut", delay: 0.6 }}
                    /* break-keepで変な改行を防止。w-fullで横幅を使い切る */
                    className="w-full break-keep word-break-keep"
                >
                    <p className="text-base md:text-xl text-center leading-relaxed mb-10">
                        R-EXPOは、慶祥生の個性を発信するイベントです。
                    </p>

                    <p className="text-base md:text-xl text-center leading-relaxed mb-10">
                        学校が用意したプログラムや研究にとどまらず、
                    </p>
                    <p className="text-base md:text-xl text-center leading-relaxed mb-20">
                        生徒の「やりたい！」を最大限尊重した、多様な企画が展開されます。
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 1.8, ease: "easeOut", delay: 0.6 }}
                    className="w-full break-keep word-break-keep"
                >
                    <p className="text-base md:text-xl text-center leading-relaxed mb-9">
                        立命館慶祥がお届けする、全く新しいイベントのカタチ
                    </p>

                    <p className="text-base md:text-xl text-center leading-relaxed mb-9">
                        どうぞお楽しみください
                    </p>
                    <p className="text-base md:text-xl text-center leading-relaxed mb-35">
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 1.8, ease: "easeOut", delay: 0.8 }}
                    className="flex justify-center mt-8 pb-20"
                >
                    <Link
                        href="/application"
                        className="bg-white text-black px-8 py-4 rounded-full font-bold text-lg md:text-xl hover:bg-gray-200 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transform hover:scale-105"
                    >
                        公式アプリをインストール
                    </Link>
                </motion.div>

            </motion.div>
        </div>
    );
}