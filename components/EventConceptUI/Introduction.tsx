"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Introduction() {
    return (
        <section className="w-full flex flex-col">

            <div className={
                "w-full bg-black text-white pt-32 px-6 md:px-20 lg:px-32 flex justify-center relative z-20 " +
                "pb-24 md:pb-36"
            }>
                <div className={
                    "max-w-4xl w-full flex flex-col items-start relative z-40 " +
                    "gap-10 md:gap-14"
                }>

                    {/* 1行目: まだ見ぬ */}
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-[0.2em]"
                    >
                        まだ見ぬ
                    </motion.h2>

                    {/* 2行目: 個性を */}
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-[0.2em]"
                    >
                        個性を
                    </motion.h2>

                </div>
            </div>

            {/* ▼ 修正点1: ここから overflow-hidden を削除しました（文字をはみ出させるため） */}
            <div className={
                "relative w-full h-[80vh] md:h-[80vh] lg:h-[100vh] bg-black z-30 " +
                "-mt-20 md:-mt-28"
            }>

                {/* ▼ 追加: 背景画像だけを切り取るためのラッパーを作成 */}
                <div className="absolute inset-0 overflow-hidden">
                    <Image
                        src="/event-concept-page/Introduction.jpg"
                        alt="Introduction Background"
                        fill
                        priority
                        className="object-cover object-[center_65%] opacity-60"
                    />
                    <div className="absolute inset-0 bg-black/30"></div>
                </div>
                {/* ▲ 画像エリアここまで */}


                <div className={
                    "absolute top-0 left-0 w-full px-6 md:px-20 lg:px-32 flex justify-center " +
                    "pt-4 md:pt-8"
                }>
                    <div className="max-w-4xl w-full flex flex-col items-start">
                        {/* 3行目: 映し出せ。 */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="mt-0"
                        >
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-[0.2em] text-white pb-3 border-b-4 border-white inline-block">
                                映し出せ。
                            </h2>
                        </motion.div>
                    </div>
                </div>

                <div className="absolute inset-0 flex items-end justify-center pt-20 pointer-events-none">
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: false }}
                        className="font-oswald text-white/30 text-5xl md:text-6xl lg:text-9xl font-bold tracking-normal drop-shadow-lg justify-center translate-y1/4 z-50"
                    >
                        INTRODUCTION
                    </motion.h1>
                </div>

                <div className="absolute right-6 md:right-10 lg:right-32 top-1/4 transform -translate-y-1/2">
                    <p className="text-white/80 text-xs md:text-sm lg:text-base font-light tracking-[0.2em] [writing-mode:vertical-rl] rotate-180 uppercase drop-shadow-md">
                        Discover Your Inner World
                    </p>
                </div>

            </div>

        </section>
    );
}