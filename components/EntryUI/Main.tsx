"use client";

import Image from "next/image";
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

export default function EntryMain() {
    return (
        <section className="w-full bg-white pb-24">
            <div className="w-full max-w-[1200px] mx-auto px-6 md:px-20 lg:px-32">

                {/* 1. イントロダクション */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={sectionVariants}
                    className="py-16 md:py-24 text-center md:text-left"
                >
                    <h2 className="text-2xl md:text-3xl font-bold leading-relaxed tracking-wide mb-8 text-black">
                        立命館慶祥中学校・高等学校が主催する、<br className="hidden md:block" />
                        生徒の個性を発信する万博形式のイベント「R-EXPO 2026」。
                    </h2>
                    <p className="text-base md:text-lg text-gray-600 leading-8">
                        パスポートのいらない「世界旅行」へ、皆様をご招待いたします。
                    </p>
                </motion.div>

                <div className="w-full h-[1px] bg-gray-200 mb-16" />

                {/* 2. 開催概要 */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={sectionVariants}
                    className="mb-32 md:mb-40"
                >
                    <h3 className="text-3xl md:text-4xl font-bold mb-10 tracking-wide text-black">
                        開催概要
                    </h3>

                    <dl className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-y-2 md:gap-y-5 gap-x-12 text-left">

                        {/* === 日時 === */}
                        <dt className="text-lg font-bold text-gray-900 h-fit">日時</dt>
                        <dd className="text-base font-normal md:text-lg md:font-bold text-gray-700 mb-8 md:mb-0">
                            2026年2月11日（水・祝）
                        </dd>

                        {/* === 一般公開 === */}
                        <dt className="text-lg font-bold text-gray-900 h-fit">一般公開</dt>
                        <dd className="text-base font-normal md:text-lg md:font-bold text-gray-700 mb-8 md:mb-0">
                            10:30 ～ 16:30
                        </dd>

                        {/* === 会場 === */}
                        <dt className="text-lg font-bold text-gray-900 h-fit">会場</dt>
                        <dd className="text-base font-normal md:text-lg md:font-bold text-gray-700 flex items-center mb-8 md:mb-0">
                            <Link
                                href="/location"
                                className="group inline-flex items-center transition-colors hover:text-blue-600"
                            >
                                札幌コンベンションセンター
                                <span className="text-xs ml-2 transition-transform group-hover:translate-x-1">▶</span>
                            </Link>
                        </dd>

                        {/* === 主催 === */}
                        <dt className="text-lg font-bold text-gray-900 h-fit">主催</dt>
                        <dd className="text-base font-normal md:text-lg md:font-bold text-gray-700 flex items-center">
                            <a
                                href="https://www2.spc.ritsumei.ac.jp/top_menu/topmenu.html"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group inline-flex items-center transition-colors hover:text-blue-600"
                            >
                                立命館慶祥中学校・高等学校
                                <span className="text-xs ml-2 transition-transform group-hover:translate-x-1">▶</span>
                            </a>
                        </dd>
                    </dl>
                </motion.div>

                {/* 3. 情報エリア (2カラムレイアウト) */}
                {/* 修正: gap-12 -> gap-20
                    スマホ時の縦並びの間隔を gap-20 (80px) に広げました。
                    PC時 (md:grid-cols-2) は md:gap-20 が適用され、横の間隔が保たれます。
                */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-20 mb-24">

                    {/* お申込みについて */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={sectionVariants}
                    >
                        <h4 className="text-xl font-bold mb-6 flex items-center text-black">
                            <span className="w-2 h-8 bg-gray-200 mr-3"></span>
                            お申込みについて
                        </h4>

                        <div className="space-y-6 text-sm md:text-base text-gray-600 leading-7">
                            <div>
                                <span className="font-bold text-gray-900 block mb-1">入場対象者</span>
                                <p>本イベントはどなたでも無料でご入場いただけます。</p>
                            </div>

                            <div>
                                <span className="font-bold text-gray-900 block mb-1">在校生の保護者様へ</span>
                                <p>在校生の保護者の方も、本ページよりお申込みが必要です。</p>
                            </div>

                            <div>
                                <span className="font-bold text-gray-900 block mb-1">入場方法</span>
                                <p>申込み完了後に発行される「受付用バーコード」をスマートフォン等に保存し、当日受付にてご提示ください。</p>
                            </div>

                            <div>
                                <span className="font-bold text-gray-900 block mb-1">当日申込み</span>
                                <p>当日、会場での申込みも可能ですが、混雑緩和のため事前登録をおすすめいたします。</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* ご来場の方へのお願い */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={sectionVariants}
                    >
                        <h4 className="text-xl font-bold mb-6 flex items-center text-black">
                            <span className="w-2 h-8 bg-gray-200 mr-3"></span>
                            ご来場の方へのお願い
                        </h4>
                        <div className="space-y-6 text-sm md:text-base text-gray-600 leading-7">
                            <div className="space-y-4">
                                <div className="flex flex-col">
                                    <span className="font-bold text-gray-900 mb-1">撮影・SNSについて</span>
                                    <p>生徒のプライバシー保護のため、生徒が特定できる写真・動画の撮影、およびSNS等へのアップロードはお控えください。</p>
                                </div>
                                <div className="flex flex-col">
                                    <span className="font-bold text-gray-900 mb-1">交通アクセスについて</span>
                                    <p>会場の駐車場には限りがございます。可能な限り、公共交通機関にてご来場ください。</p>
                                </div>
                                <div className="flex flex-col">
                                    <span className="font-bold text-gray-900 mb-1">お食事について</span>
                                    <p>ご来場の方は、センター内のレストランもご利用可能です。</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}