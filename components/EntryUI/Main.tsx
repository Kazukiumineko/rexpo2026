"use client";

import Link from "next/link";
import { motion, Variants } from "framer-motion";
import EntryTitle from "./Title";

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
        <section className="w-full bg-white pb-60 px-6 md:px-20 lg:px-32">
            <div className="w-full max-w-[1600px] mx-auto">

                {/* 3. 情報エリア (2カラムレイアウト) */}
                {/* 修正: gap-12 -> gap-20
                    スマホ時の縦並びの間隔を gap-20 (80px) に広げました。
                    PC時 (md:grid-cols-2) は md:gap-20 が適用され、横の間隔が保たれます。
                */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-32 md:gap-20 mb-4">

                    {/* お申込みについて */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={sectionVariants}
                    >
                        <h4 className="text-xl font-bold mb-6 flex items-center text-[#092040]">
                            <span className="w-2 h-8 bg-gray-200 mr-3"></span>
                            お申込みについて
                        </h4>

                        <div className="space-y-6 text-sm md:text-base text-gray-600 leading-7">
                            <div>
                                <span className="font-bold text-[#092040] block mb-1">入場対象者</span>
                                <p>本イベントはどなたでも無料でご入場いただけます。在校生保護者の方につきましても、事前登録が必要です。</p>
                            </div>


                            <div>
                                <span className="font-bold text-[#092040] block mb-1">入場方法</span>
                                <p>申込み完了後に発行される「受付用バーコード」をスマートフォン等に保存し、当日受付にてご提示ください。</p>
                            </div>

                            <div>
                                <span className="font-bold text-[#092040] block mb-1">当日申込み</span>
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
                        <h4 className="text-xl font-bold mb-6 flex items-center text-[#092040]">
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