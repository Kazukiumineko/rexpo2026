"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

// 企画データ
const projects = [
    {
        title: "バンド・ダンス発表",
        img: "/stage-concept/global1.jpg", // 仮の画像
        desc: "コンクール入賞実績を持つ吹奏楽部による迫力の演奏。クラシックからポップスまで、息の合ったアンサンブルで披露。日々の練習が紡ぎ出す美しいハーモニーが、会場全体を感動で包み込みます。",
    },
    {
        title: "芸術発表",
        img: "/stage-concept/global2.jpg", // 仮の画像
        desc: "生徒が脚本・演出を手掛けるオリジナル演劇。笑いあり涙ありの青春ストーリーや、社会問題を鋭く切り取るシリアスな作品。舞台上で輝く役者たちの熱演にご注目ください。",
    },
    {
        title: "生徒有志企画",
        img: "/stage-concept/global3.jpg", // 仮の画像
        desc: "ヒップホップ、ジャズ、創作ダンスなど多彩なジャンル。躍動感あふれる動きとキレのある振付で表現する、若さ漲るエネルギー。チームワーク抜群の群舞と個性際立つソロ、その融合をお楽しみください。",
    },
    {
        title: "演劇公演",
        img: "/stage-concept/global4.jpg", // 仮の画像
        desc: "美術部・写真部による作品展示。絵画、彫刻、インスタレーション、風景写真、ポートレート。独自の感性で切り取られた世界観と、作品一つひとつに込められた作者の想いを感じてください。",
    },
];

export default function EntertainmentInfo() {
    const [isExpanded, setIsExpanded] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    // 表示するプロジェクトを決定
    const visibleProjects = isExpanded ? projects : projects.slice(0, 2);

    return (
        <section ref={sectionRef} className="w-full bg-transparent text-white pt-12 pb-20 px-6 md:px-12 lg:px-20">
            <div className="max-w-[1600px] mx-auto">
                <div className="flex flex-col space-y-12 max-w-6xl mx-auto">
                    <AnimatePresence>
                        {visibleProjects.map((project, index) => {
                            const isLastVisible = !isExpanded && index === 1;

                            return (
                                <motion.div
                                    key={project.title}
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className={`relative flex flex-row items-center space-x-6 md:space-x-12 ${isLastVisible ? 'pb-8' : ''}`}
                                >
                                    {/* 1. 画像エリア (円形アイコン) */}
                                    <div className="relative w-20 h-20 md:w-32 md:h-32 flex-shrink-0 overflow-hidden rounded-full border-2 border-white/20">
                                        <Image
                                            src={project.img}
                                            alt={project.title}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>

                                    {/* 2. テキストエリア */}
                                    <div className="flex-1 flex flex-col justify-center py-2">
                                        {/* 企画タイトル */}
                                        <h3 className="font-oswald text-xl md:text-3xl font-bold mb-3 text-white">
                                            {project.title}
                                        </h3>

                                        {/* 説明文 */}
                                        <p className="text-gray-300 text-sm md:text-base leading-loose font-jp">
                                            {project.desc}
                                        </p>
                                    </div>

                                    {/* グラデーション & ボタン (2番目の要素のみ) */}
                                    {isLastVisible && (
                                        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black via-black/80 to-transparent flex flex-col justify-end items-center z-10 rounded-b-lg">
                                            <button
                                                onClick={() => setIsExpanded(true)}
                                                className="group flex flex-col items-center justify-center text-white/80 hover:text-white transition-colors duration-300 mb-2 cursor-pointer"
                                            >
                                                <div className="p-2 rounded-full bg-white/10 group-hover:bg-white/20 transition-all border border-white/20 backdrop-blur-sm">
                                                    <ChevronDown className="w-6 h-6 animate-bounce" />
                                                </div>
                                            </button>
                                        </div>
                                    )}
                                </motion.div>
                            );
                        })}
                    </AnimatePresence>

                    {/* 閉じるボタン (展開時のみ表示) */}
                    {isExpanded && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="flex justify-center mt-8"
                        >
                            <button
                                onClick={() => {
                                    setIsExpanded(false);
                                    sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
                                }}
                                className="group p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all border border-white/20 backdrop-blur-sm cursor-pointer"
                            >
                                <ChevronUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform" />
                            </button>
                        </motion.div>
                    )}
                </div>
            </div>
        </section>
    );
}
