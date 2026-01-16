"use client";


import { useState, useRef } from "react";
import LazyImage from "@/components/Shared/LazyImage";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

// 企画データ（4つに厳選）
const projects = [
    {
        title: "高校海外研修報告",
        img: "/stage-concept/global1.jpg",
        desc: "アメリカ、カナダ、オーストラリアなど世界5カ国での語学研修とホームステイ。現地で直面した「言葉の壁」や「文化の違い」を乗り越え、ホストファミリーとの生活から得たコミュニケーションの極意。自身の価値観が揺さぶられた体験を語ります。",
    },
    {
        title: "中学研修報告",
        img: "/stage-concept/global2.jpg",
        desc: "ニュージーランドやシンガポールを訪れた中学研修。初めて親元を離れた異国で、同世代との交流を通じて感じた「通じる喜び」と「伝えられないもどかしさ」。中学生ならではの瑞々しい感性で切り取った、発見と成長の記録です。",
    },
    {
        title: "留学報告",
        img: "/stage-concept/global3.jpg",
        desc: "1年間の長期留学を経た帰国報告会。語学習得を超え、現地の部活や地域活動に参加することで「外国人」から「地域の一員」へと変わっていく過程。挫折と孤独を乗り越え、自信と将来のビジョンを掴むまでの熱い軌跡。",
    },
    {
        title: "トビタテ留学JAPAN",
        img: "/stage-concept/global4.jpg",
        desc: "官民協働海外留学支援制度「トビタテ！留学JAPAN」日本代表による探究報告。「日本の伝統文化発信」や「環境問題調査」など自ら設定したテーマで挑んだフィールドワーク。次世代リーダーとしての実行力と志をプレゼンテーションします。",
    },
];

export default function StageInfo() {
    const [isExpanded, setIsExpanded] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    // 表示するプロジェクトを決定
    const visibleProjects = isExpanded ? projects : projects.slice(0, 2);

    return (
        // 背景は透明
        <section ref={sectionRef} className="w-full bg-transparent text-white pt-12 pb-20 px-6 md:px-12 lg:px-20">
            <div className="max-w-[1600px] mx-auto">

                <div className="flex flex-col space-y-12 max-w-6xl mx-auto">

                    <AnimatePresence>
                        {visibleProjects.map((project, index) => {
                            const isLastVisible = !isExpanded && index === 1;

                            return (
                                <motion.div
                                    key={project.title}
                                    initial={{ opacity: 0, x: -30 }} // 左からフェードインに変更
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