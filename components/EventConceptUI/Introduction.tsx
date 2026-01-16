"use client";


import LazyImage from "@/components/Shared/LazyImage";
import { motion } from "framer-motion";

export default function Introduction() {
    return (
        <section className="relative w-full flex flex-col overflow-visible z-20">
            <div className="absolute inset-0 z-[200] flex justify-center px-6 md:px-24 lg:px-32 pointer-events-none">
                <div className="w-full max-w-4xl relative h-full">

                    <div className="absolute top-32 -left-2 md:-left-16 lg:-left-16">
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: false }}
                            transition={{ duration: 1.2, delay: 0.6 }}
                            className="text-white/80 text-xs md:text-sm lg:text-base font-light tracking-[0.2em] [writing-mode:vertical-rl] rotate-180 uppercase drop-shadow-md"
                        >
                            Discover Your Inner World
                        </motion.p>
                    </div>

                </div>
            </div>


            <div className={
                "w-full bg-transparent text-white pt-32 flex justify-center relative z-20 " +
                "pl-14 pr-4 md:px-20 lg:px-32 " +
                "pb-24 md:pb-36"
            }>
                <div className={
                    "max-w-4xl w-full flex flex-col items-start relative z-40 " +
                    "gap-10 md:gap-14"
                }>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-[0.2em]"
                    >
                        まだ見ぬ
                    </motion.h2>

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

            <div className={
                "relative w-full h-[80vh] md:h-[80vh] lg:h-[100vh] bg-transparent z-[100] " +
                "-mt-20 md:-mt-28"
            }>

                {/* 背景画像エリア */}
                <div className="absolute inset-0 overflow-hidden">
                    <LazyImage
                        src="/event-concept-page/Introduction2.jpg"
                        alt="Introduction Background"
                        fill
                        priority
                        className="object-cover object-[center_65%] opacity-100"
                    />
                    <div className="absolute inset-0 bg-black/20"></div>
                </div>

                {/* 3行目: 映し出せ。 */}
                <div className={
                    "absolute top-0 left-0 w-full flex justify-center " +
                    "pl-14 pr-4 md:px-20 lg:px-32 " +
                    "pt-4 md:pt-8"
                }>
                    <div className="max-w-4xl w-full flex flex-col items-start">
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

                <div className="absolute top-0 right-0 h-[130%] md:h-[140%] w-full flex items-center justify-end pr-4 md:pr-10 pointer-events-none">
                    <motion.h1
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: false }}
                        className="font-oswald text-white/30 text-5xl md:text-8xl lg:text-[10rem] font-bold tracking-normal drop-shadow-lg [writing-mode:vertical-rl] z-[100] translate-y-40 md:translate-y-52 lg:translate-y-32"
                    >
                        INTRODUCTION
                    </motion.h1>
                </div>

            </div>

        </section>
    );
}