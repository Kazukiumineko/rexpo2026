"use client";

import Link from "next/link";
import { useRef } from "react";
import LazyImage from "@/components/Shared/LazyImage";
import ViewMoreButton from "@/components/Shared/ViewMoreButton";
import { motion, useInView, Variants } from "framer-motion";

export default function InformationSection() {
    const topics = [
        {
            title: "会場",
            src: "/topic/Location.jpg",
            link: "/location",
            description: "世界的な会議や学会が開催される札幌コンベンションセンターが舞台。東札幌駅から徒歩圏内、最大2,500名収容の広大な空間が、生徒の熱量を最大限に引き出します。研究発表からライブまで、生徒の熱量を引き出すこの会場で、かつてない体験をお届けします。",
        },
        {
            title: "タイムテーブル",
            src: "/topic/Form.jpg",
            link: "/timetable",
            description: "当日のステージ発表や各エリアのタイムスケジュールをご案内します。見逃せないイベントの時間をチェックして、R-EXPOを存分に楽しんでください。",
        },
        {
            title: "開祭にあたって",
            src: "/topic/Comments.jpg",
            link: "/message",
            description: "立命館慶祥中学校・高等学校 校長よりご挨拶申し上げます。 本イベントの企画・運営を担う、有志生徒によって結成された「行事改革実行委員会（行事部）」の 部長からのメッセージもあわせて掲載いたします。",
        },
        {
            title: "ご支援",
            src: "/topic/Support.jpg",
            link: "/support",
            description: "R-EXPO 2026は、20を超える企業・団体の皆様より多大なるご支援をいただいています。 当日は、講演会や企業ブース、そして生徒とのコラボステージなど、ここでしかできない特別なプログラムが満載です。",
        },
    ];

    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" },
        },
    };

    return (
        <section
            className="relative w-full py-24 bg-[#f1f1f1] text-black overflow-hidden"
            ref={sectionRef}
        >
            <div className="w-full max-w-7xl mx-auto px-6 lg:px-12">

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-24 md:gap-8 lg:gap-12"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    {/* ▼ 修正箇所: INFORMATION とその下の文字 ▼ */}
                    {/* flex-col items-center で縦並び・中央寄せにします */}
                    <motion.div
                        className="col-span-full flex flex-col items-center mb-8 lg:mb-32"
                        variants={itemVariants}
                    >
                        <h2 className="text-[#092040] font-oswald text-6xl md:text-8xl lg:text-[10rem] tracking-tighter font-bold leading-none">
                            INFORMATION
                        </h2>
                        {/* ▼ 追加した文字 ▼ */}
                        <p className="mt-4 text-sm md:text-2xl font-bold text-[#092040] font-jp tracking-widest">
                            R-EXPOをもっと知る
                        </p>
                    </motion.div>
                    {/* ▲ 修正箇所ここまで ▲ */}

                    {topics.map((topic, index) => (
                        <motion.div
                            key={index}
                            className="flex flex-col items-start space-y-4 h-full"
                            variants={itemVariants}
                        >
                            <Link
                                href={topic.link}
                                className="block relative w-full aspect-video overflow-hidden rounded-sm shadow-lg border border-gray-200 cursor-pointer"
                            >
                                <LazyImage
                                    src={topic.src}
                                    alt={topic.title}
                                    fill
                                    className="object-cover transition-transform duration-500 hover:scale-110"
                                />
                            </Link>

                            <div className="flex flex-col space-y-3 flex-grow">
                                <h3 className="font-biz text-2xl font-bold tracking-widest uppercase mt-2 flex items-center gap-2">
                                    <div className="w-[5px] h-6 bg-[#092040]"></div>
                                    <Link href={topic.link} className="md:pointer-events-none md:cursor-auto">
                                        {topic.title}
                                    </Link>
                                    <Link
                                        href={topic.link}
                                        className="md:hidden flex items-center justify-center p-1 -ml-1 hover:opacity-100 transition-opacity text-[#113f7d]"
                                    >
                                        <svg
                                            width="26"
                                            height="26"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M8 5v14l11-7z" />
                                        </svg>
                                    </Link>
                                </h3>
                                <p className="font-kaku text-gray-600 text-sm leading-relaxed">
                                    {topic.description}
                                </p>
                            </div>

                            <div className="hidden md:block pt-2">
                                <ViewMoreButton
                                    href={topic.link}
                                    theme="dark"
                                />
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}