"use client";


import LazyImage from "@/components/shared/lazy-image";
import Link from "next/link";
import { motion } from "framer-motion";


export default function Application() {
    return (
        <section className="relative w-full bg-[#f1f1f1] flex flex-col">

            {/* --- 画像エリア --- */}
            <div className="relative w-full h-[75vh] md:h-[65vh] lg:h-[100vh] overflow-hidden bg-gray-900">
                <img
                    src="/application/application-header.JPG"
                    alt="Application Header"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/60" />

                {/* 全体コンテンツコンテナ */}
                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-6">

                    {/* 1. APPLICATION (最上部センター) */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center"
                    >
                        <h2 className="font-oswald text-6xl md:text-8xl lg:text-[10rem] font-bold tracking-tight text-white leading-none">
                            APPLICATION
                        </h2>

                        {/* 2. サブタイトル */}
                        <p className="mt-8 md:mt-10 font-jp text-2xl md:text-4xl font-bold tracking-tight text-white">
                            R-EXPOをもっと楽しむ
                        </p>
                    </motion.div>

                    {/* 3. 説明文 (中央・3行・細字) */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1.2, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="mt-16 md:mt-24 text-center max-w-2xl"
                    >
                        <div className="text-white text-xs md:text-sm lg:text-base font-extralight leading-[2.2] tracking-[0.15em]">
                            <p>当日のタイムスケジュールや展示内容を、<br className="md:hidden" />あなたの手のひらに。</p>
                            <p>気になる企画をブックマークし、<br className="md:hidden" />当日の行動計画を立てよう。</p>
                            <p>慶祥生が創り上げる「新しいイベント」を、<br className="md:hidden" />このアプリと共に歩んでください。</p>
                        </div>
                    </motion.div>

                    {/* 【追加】5. ViewMore ボタン */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        viewport={{ once: true }}
                        className="mt-16 md:mt-20"
                    >
                        <Link
                            href="/application"
                            className="inline-flex items-center justify-center px-8 py-3 md:px-16 md:py-4 border border-white text-white text-base md:text-xl font-bold tracking-widest rounded-full hover:bg-white hover:text-[#092040] hover:border-transparent transition-colors duration-300"
                        >
                            今すぐアプリをインストール
                        </Link>
                    </motion.div>

                </div>
            </div>

            {/* FooterBarとの隙間を埋める */}
            <div className="w-full h-px bg-[#f1f1f1]" />
        </section>
    );
}