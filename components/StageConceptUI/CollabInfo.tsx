"use client";


import { useState, useRef } from "react";
import LazyImage from "@/components/Shared/LazyImage";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

// 企画データ
const projects = [
    {
        title: "北海道大学コラボ企画",
        img: "/stage-concept/global1.jpg", // 仮の画像
        desc: "地元企業との協力で挑む新商品開発やマーケティング戦略立案。ビジネスのプロからのフィードバックを受け、市場調査からコンセプト設計、試作までを実践。若者の視点を取り入れた斬新なアイデアを提案します。",
    },
    {
        title: "RED Talks",
        img: "/stage-concept/global2.jpg", // 仮の画像
        desc: "大学研究室での専門的な設備と指導の下で進める高度な研究活動。高校の枠を超えた専門分野に触れ、大学生や教授との議論で磨かれた知見。アカデミックな世界の入り口に立ち、将来の研究者としての第一歩を踏み出します。",
    },
    {
        title: "株式会社Progate CEO加藤氏 講演会",
        img: "/stage-concept/global3.jpg", // 仮の画像
        desc: "地域の商店街や自治会と連携する、まちづくりや活性化イベントの企画・運営。地域の人々との交流で見えてきた課題と、高校生なりの解決アプローチ。地域に根差し、社会に貢献する喜びと責任感を語ります。",
    },
    {
        title: "協賛企業ブース展示",
        img: "/stage-concept/global4.jpg", // 仮の画像
        desc: "持続可能な開発目標（SDGs）達成に向けたアクションプラン。環境保全、貧困対策、ジェンダー平等など、グローバルな課題を自分事として捉え、身近な一歩から始める具体的な取り組みを提言します。",
    },
    {
        title: "開閉会式コラボステージ",
        img: "/stage-concept/global4.jpg", // 仮の画像
        desc: "持続可能な開発目標（SDGs）達成に向けたアクションプラン。環境保全、貧困対策、ジェンダー平等など、グローバルな課題を自分事として捉え、身近な一歩から始める具体的な取り組みを提言します。",
    },
    {
        title: "立命館附属校 課題研究発表",
        img: "/stage-concept/global4.jpg", // 仮の画像
        desc: "持続可能な開発目標（SDGs）達成に向けたアクションプラン。環境保全、貧困対策、ジェンダー平等など、グローバルな課題を自分事として捉え、身近な一歩から始める具体的な取り組みを提言します。",
    },
    {
        title: "立命館大学コラボ企画",
        img: "/stage-concept/global4.jpg", // 仮の画像
        desc: "持続可能な開発目標（SDGs）達成に向けたアクションプラン。環境保全、貧困対策、ジェンダー平等など、グローバルな課題を自分事として捉え、身近な一歩から始める具体的な取り組みを提言します。",
    },
];

export default function CollabInfo() {
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
                                        <LazyImage
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
