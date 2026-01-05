"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

// 企画データ
const projects = [
    {
        title: "課題研究ポスターセッション",
        img: "/stage-concept/global1.jpg", // 仮の画像
        desc: "物理・化学・生物・地学の実験・観察報告。身近な自然現象への疑問から始まり、緻密なデータ収集と分析を経て導き出された考察。科学的な思考力と探究心を披露します。",
    },
    {
        title: "SSH国際共同課題研究発表",
        img: "/stage-concept/global2.jpg", // 仮の画像
        desc: "歴史、経済、政治など社会課題への取り組み。文献研究に加え、アンケートやインタビューなどのフィールドワークを実施。得られた生きた情報を基に、独自の視点で社会を分析します。",
    },
    {
        title: "東北メディカルツアー報告",
        img: "/stage-concept/global3.jpg", // 仮の画像
        desc: "数学的な定理の証明や、プログラミングを用いたアプリ開発。論理的な思考プロセスと、技術を駆使して問題を解決する創造性。数理・情報科学分野の課題研究発表です。",
    },
    {
        title: "生徒ブース展示",
        img: "/stage-concept/global4.jpg", // 仮の画像
        desc: "文学作品の分析、言語研究、哲学的な問いへの思索。言葉や文化に対する深い洞察と、豊かな表現力で紡がれる知の世界。多様な価値観に触れ、人間理解を深める機会を提供します。",
    },
];

export default function AcademicInfo() {
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
