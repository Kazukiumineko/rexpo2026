"use client";

import { motion, Variants } from "framer-motion";
import LazyImage from "@/components/Shared/LazyImage";
import Link from "next/link";

export default function Jump() {
    // アニメーション設定
    const fadeUpVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" },
        },
    };

    return (
        <section className="w-full bg-[#f1f1f1] text-[#092040] py-24 md:py-32 px-6 md:px-20 lg:px-32 overflow-hidden">
            <div className="max-w-[1400px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                    {/* --- 左側: テキスト & ボタン --- */}
                    <motion.div
                        variants={fadeUpVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        className="flex flex-col space-y-6"
                    >
                        {/* テキストエリア */}
                        <div>
                            <h2 className="font-oswald text-5xl md:text-7xl font-bold tracking-tight mb-6 uppercase">
                                APPLICATION
                            </h2>

                            {/* 説明文 */}
                            <p className="font-jp text-gray-600 leading-relaxed mb-8 text-sm">
                                各企画の詳細情報はアプリでチェック！！<br />
                                現在地マップ、リアルタイムな混雑状況、出場者一覧など、イベントをより快適に楽しむための機能が満載です。
                            </p>

                            {/* テキストボタン */}
                            <Link
                                href="/application"
                                className="inline-block border border-[#092040] px-8 py-3 text-sm tracking-widest hover:bg-[#092040] hover:text-[#f1f1f1] transition-colors duration-300 rounded-full"
                            >
                                詳細を見る
                            </Link>
                        </div>
                    </motion.div>

                    {/* --- 右側: 写真 --- */}
                    <motion.div
                        variants={fadeUpVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ delay: 0.2 }}
                        className="w-full"
                    >
                        {/* 写真比率を自然な 3:2 (スマホは 4:3) に調整 */}
                        <Link href="/application" className="block w-full h-full cursor-pointer group">
                            <div className="relative w-full aspect-[4/3] md:aspect-[2/1] rounded-3xl overflow-hidden border border-[#092040]/10 shadow-xl">
                                <LazyImage
                                    src="/application/App3.png"
                                    alt="Application Image"
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
