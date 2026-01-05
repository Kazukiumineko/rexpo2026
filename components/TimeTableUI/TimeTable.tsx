"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";

export default function TimeTable() {
    // アニメーション設定
    const containerVariants: Variants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" },
        },
    };

    return (
        <section className="w-full bg-white text-black py-24 md:py-32 px-6 md:px-20 lg:px-32">
            <div className="max-w-4xl mx-auto">

                {/* === ヘッダー === */}
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="font-oswald text-6xl md:text-8xl font-bold tracking-tighter text-center mb-20 md:mb-28"
                >
                    TIME TABLE
                </motion.h2>

                {/* === タイムライン === */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="relative space-y-12 border-l-2 border-gray-200 ml-4 md:ml-0 pl-8 md:pl-0"
                >

                    {/* 09:00 生徒集合 */}
                    <TimelineItem time="09:00" title="生徒集合" variants={itemVariants} />

                    {/* 09:30 開会式 */}
                    <TimelineItem time="09:30" title="開会式" variants={itemVariants} />

                    {/* 10:30 一般入場・午前の部 */}
                    <TimelineItem time="10:30" title="一般入場 / 午前の部 開始" variants={itemVariants}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                            {/* Global Stage */}
                            <StageCard
                                title="Global Stage"
                                description="国際的な視点から社会課題に切り込むプレゼンテーション。"
                                link="/stage/global" // ※仮のリンクです
                            />
                            {/* Academic Stage */}
                            <StageCard
                                title="Academic Stage"
                                description="日頃の研究成果を発表する、知的好奇心溢れるアカデミックな場。"
                                link="/stage/academic" // ※仮のリンクです
                            />
                        </div>
                    </TimelineItem>

                    {/* 13:00 午前の部終了 */}
                    <TimelineItem time="13:00" title="午前の部 終了" variants={itemVariants} />

                    {/* 14:00 第2部開会式 */}
                    <TimelineItem time="14:00" title="第2部 開会式" variants={itemVariants} />

                    {/* 14:30 午後の部開始 */}
                    <TimelineItem time="14:30" title="午後の部 開始" variants={itemVariants}>
                        <div className="mt-6">
                            {/* Artistic Stage */}
                            <StageCard
                                title="Artistic Stage"
                                description="音楽、演劇、ダンスなど、創造性が爆発するエンターテインメントステージ。"
                                link="/stage/artistic" // ※仮のリンクです
                            />
                        </div>
                    </TimelineItem>

                    {/* 16:30 午後の部終了 */}
                    <TimelineItem time="16:30" title="午後の部 終了" variants={itemVariants} />

                    {/* 16:45 閉会式 */}
                    <TimelineItem time="16:45" title="閉会式" variants={itemVariants} />

                </motion.div>

                {/* === 常設企画エリア === */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="mt-32 pt-16 border-t border-gray-200"
                >
                    <h3 className="font-bold text-xl md:text-2xl mb-8 flex items-center gap-3">
                        <span className="w-2 h-8 bg-black block"></span>
                        常設企画
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-gray-50 p-6 rounded-sm border border-gray-100">
                            <h4 className="font-bold text-lg mb-2">北海道大学 コラボ企画</h4>
                            <p className="text-gray-600 text-sm">大学の研究室と連携した展示やワークショップを開催。</p>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-sm border border-gray-100">
                            <h4 className="font-bold text-lg mb-2">協賛企業ブース展示</h4>
                            <p className="text-gray-600 text-sm">地域の企業による最新技術やサービスの紹介ブース。</p>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}

// --- サブコンポーネント: タイムラインの各行 ---
function TimelineItem({ time, title, children, variants }: { time: string, title: string, children?: React.ReactNode, variants: Variants }) {
    return (
        <motion.div variants={variants} className="md:flex items-start group">
            {/* 左側: 時間 */}
            <div className="md:w-32 flex-shrink-0 mb-2 md:mb-0 relative">
                {/* スマホ用のドット装飾 */}
                <span className="absolute -left-[41px] top-2 w-5 h-5 bg-white border-4 border-black rounded-full md:hidden"></span>

                <span className="font-oswald text-3xl md:text-4xl font-bold tracking-tight">
                    {time}
                </span>
            </div>

            {/* 右側: 内容 */}
            <div className="flex-grow pb-8">
                <h3 className="text-lg md:text-xl font-bold flex items-center h-full pt-1">
                    {title}
                </h3>
                {children}
            </div>
        </motion.div>
    );
}

// --- サブコンポーネント: ステージカード ---
function StageCard({ title, description, link }: { title: string, description: string, link: string }) {
    return (
        <div className="bg-black text-white p-6 rounded-sm shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-start h-full">
            <h4 className="font-oswald text-2xl font-bold mb-3 text-yellow-400">
                {title}
            </h4>
            <p className="text-gray-300 text-sm mb-6 flex-grow leading-relaxed">
                {description}
            </p>
            <Link
                href={link}
                className="text-xs font-bold border border-white px-6 py-2 hover:bg-white hover:text-black transition-colors duration-300 tracking-wider"
            >
                詳細を見る
            </Link>
        </div>
    );
}