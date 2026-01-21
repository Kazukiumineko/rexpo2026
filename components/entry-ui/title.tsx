"use client";


import LazyImage from "@/components/shared/lazy-image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

// セクションごとのアニメーション設定
const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" }
    }
};

export default function EntryTitle() {
    return (
        <section className="w-full bg-[#f1f1f1] px-6 md:px-20 lg:px-32">
            <div className="w-full max-w-[1600px] mx-auto">
                {/* 1. イントロダクション */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={sectionVariants}
                    className="pt-16 pb-8 md:pt-24 md:pb-12 text-center md:text-left"
                >

                </motion.div>


                {/* 2. 開催概要 */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={sectionVariants}
                    className="mb-40 md:-mb-12"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-start">
                        <div className="w-full">
                            <h3 className="hidden md:block text-3xl md:text-4xl font-bold mb-10 tracking-wide text-[#092040]">
                                開催概要
                            </h3>

                            <dl className="grid grid-cols-1 md:grid-cols-[100px_1fr] gap-y-1 md:gap-y-5 gap-x-8 text-left">

                                {/* === 日時 === */}
                                <dt className="text-lg font-bold text-[#092040] h-fit">日時</dt>
                                <dd className="text-base font-normal md:text-lg md:font-bold text-gray-700 mb-2 md:mb-0">
                                    2026年2月11日（水・祝）
                                </dd>

                                {/* === 一般公開 === */}
                                <dt className="text-lg font-bold text-[#092040] h-fit">一般公開</dt>
                                <dd className="text-base font-normal md:text-lg md:font-bold text-gray-700 mb-2 md:mb-0">
                                    10:30 ～ 16:30
                                </dd>

                                {/* === 会場 === */}
                                <dt className="text-lg font-bold text-[#092040] h-fit">会場</dt>
                                <dd className="text-base font-normal md:text-lg md:font-bold text-gray-700 flex items-center mb-2 md:mb-0">
                                    <Link
                                        href="/location"
                                        className="group inline-flex items-center transition-colors"
                                    >
                                        札幌コンベンションセンター
                                        <span className="text-xs ml-2 transition-transform group-hover:translate-x-1">▶</span>
                                    </Link>
                                </dd>

                                {/* === 主催 === */}
                                <dt className="text-lg font-bold text-[#092040] h-fit">主催</dt>
                                <dd className="text-base font-normal md:text-lg md:font-bold text-gray-700 flex items-center">
                                    <a
                                        href="https://www2.spc.ritsumei.ac.jp/top_menu/topmenu.html"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group inline-flex items-center transition-colors"
                                    >
                                        立命館慶祥中学校・高等学校
                                        <span className="text-xs ml-2 transition-transform group-hover:translate-x-1">▶</span>
                                    </a>
                                </dd>
                            </dl>

                            {/* === 申し込みボタン === */}
                            <div className="mt-10">
                                <a
                                    href="https://program-service.ritsumei.ac.jp/public/seminar/view/40459" // リンク先は手動で設定
                                    className="group relative inline-flex h-16 w-full md:w-[300px] items-center justify-center bg-white px-12 text-lg font-bold text-black border border-black transition-colors duration-300 hover:!bg-[#092040] hover:text-white hover:border-[#092040] rounded-full"
                                >
                                    <span className="text-xl">今すぐ申込む</span>
                                </a>
                            </div>
                        </div>

                        <div className="w-full h-full hidden md:flex items-start justify-center md:justify-end md:mt-20">
                            <div className="relative w-full max-w-[500px] aspect-square">
                                <LazyImage
                                    src="/entry/Logo.png"
                                    alt="R-EXPO 2026 Logo"
                                    fill
                                    containerClassName="w-full h-full bg-transparent"
                                    className="object-contain object-top"
                                />
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
