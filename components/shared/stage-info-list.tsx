"use client";

import { useState, useRef } from "react";
import LazyImage from "@/components/shared/lazy-image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

export interface Project {
    title: string;
    img: string;
    desc: string;
}

interface StageInfoListProps {
    projects: Project[];
}

export default function StageInfoList({ projects }: StageInfoListProps) {
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
                                        {/* <LazyImage
                                                src={project.img}
                                                alt={project.title}
                                                fill
                                                className="object-cover"
                                            /> */}
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
