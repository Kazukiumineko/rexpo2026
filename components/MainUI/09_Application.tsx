"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Application() {
    return (
        <section className="relative w-full bg-white flex flex-col">

            {/* --- 画像エリア --- */}
            <div className="relative w-full h-[65vh] md:h-[65vh] lg:h-[90vh] overflow-hidden bg-gray-900">
                <Image
                    src="/main/Application.jpg"
                    alt="Event Background"
                    fill
                    className="object-cover brightness-[0.2]"
                    priority
                />

                {/* 全体コンテンツコンテナ */}
                <div className="absolute inset-0 z-10 flex flex-col items-center pt-20 md:pt-28 px-6">

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
                        <p className="mt-4 text-sm md:text-xl lg:text-2xl font-bold tracking-widest text-white">
                            R-EXPOをもっと楽しむ
                        </p>
                    </motion.div>

                    {/* 3. 説明文 (中央・3行・細字) */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1.2, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="mt-12 md:mt-16 text-center max-w-2xl"
                    >
                        <div className="text-white text-xs md:text-sm lg:text-base font-extralight leading-[2.2] tracking-[0.15em]">
                            <p>当日のタイムスケジュールや展示内容を、あなたの手のひらに。</p>
                            <p>会場限定のスタンプラリーに参加して、特別な体験をアンロックしましょう。</p>
                            <p>慶祥生が創り上げる「新しい世界」を、このアプリと共に歩んでください。</p>
                        </div>
                    </motion.div>

                    {/* 【追加】5. ViewMore ボタン */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        viewport={{ once: true }}
                        className="mt-10 md:mt-12"
                    >
                        <Link href="/application" className="group relative transition-transform duration-300 hover:scale-105 inline-block">
                            <Image
                                src="/main/ViewMore.png"
                                alt="View More"
                                width={240}
                                height={80}
                                className="h-auto w-[85px] md:w-[100px] lg:w-[120px] object-contain"
                            />
                        </Link>
                    </motion.div>

                </div>
            </div>

            {/* FooterBarとの隙間を埋める */}
            <div className="w-full h-px bg-white" />
        </section>
    );
}