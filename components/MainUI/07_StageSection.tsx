"use client";

import { useRef } from "react";

import LazyImage from "@/components/Shared/LazyImage";
import { motion, useInView, Variants } from "framer-motion";

export default function StageSection() {
    const stages = [
        {
            title: "Global",
            description: "海外研修や留学、国際交流活動に参加した慶祥生が、現地での体験や学びを発表するステージです。国境を越えて異文化に触れ、多様な価値観と向き合ってきた慶祥生。教室にいるだけでは学べない、高校生が見た世界の今をお伝えします。",
            href: "/stage-concept#global"
        },
        {
            title: "Academic",
            description: "理数系の研究発表から社会問題や文化に関する研究まで、慶祥独自の学びが集結するエリアです。ほとんどの企画が”授業”の枠を飛び出して、生徒ひとりひとりが独自のテーマで進めた研究の成果です。ポスターセッションやプレゼン、ブース形式で紹介します。",
            href: "/stage-concept#academic"
        },
        {
            title: "Entertainment",
            description: "バンド、ダンス、演劇などのステージで、生徒たちの情熱と創造性が爆発します。ステージ上のパフォーマンスだけでなく、美術作品展示やお茶会、E-Sports大会など、五感で楽しめる多彩なプログラムが会場を彩ります。",
            href: "/stage-concept#entertainment"
        },
        {
            title: "Collaboration",
            description: "協賛企業によるブース出展や講演会、立命館学園との連携企画など、学校と社会がつながるエリアです。 将来のキャリアや進路について考えるきっかけとなることはもちろん、プロによる圧巻のパフォーマンスや、生徒とのスペシャルコラボステージも多数用意しています。",
            href: "/stage-concept#collaboration"
        },
    ];

    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" },
        },
    };

    return (
        <section
            className="relative w-full py-32 text-white overflow-hidden"
            ref={sectionRef}
        >

            <div className="absolute inset-0 -z-10">
                <LazyImage
                    src="/main/Satoryo1.png"
                    alt="Stage Background"
                    fill
                    className="object-cover"
                    style={{ objectPosition: "center" }}
                />
                <div className="absolute inset-0 bg-black/60" />
            </div>

            <div className="w-full max-w-[1400px] mx-auto px-6 lg:px-12">

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    {/* Header: STAGE CONCEPT */}
                    <motion.div
                        className="flex flex-col items-center mb-16 lg:mb-24 text-center"
                        variants={itemVariants}
                    >
                        <h2 className="text-white font-oswald text-6xl md:text-8xl lg:text-[10rem] font-bold tracking-tighter leading-none">
                            STAGE CONCEPT
                        </h2>
                        <p className="mt-6 text-sm md:text-2xl font-bold text-gray-200 font-jp tracking-widest">
                            個性が輝く多彩なステージ
                        </p>
                    </motion.div>

                    {/* Stage Lists */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14 md:gap-8">
                        {stages.map((stage, index) => (
                            <motion.div
                                key={index}
                                className="flex flex-col items-start text-left space-y-6 h-full"
                                variants={itemVariants}
                            >
                                <h3 className="text-4xl lg:text-4xl items-start text-left font-bold tracking-tight flex items-center gap-2">
                                    <a href={stage.href} className="md:pointer-events-none md:cursor-auto">
                                        {stage.title}
                                    </a>
                                    <a
                                        href={stage.href}
                                        className="md:hidden flex items-center justify-center p-1 opacity-80 hover:opacity-100 transition-opacity text-white mt-2"
                                    >
                                        <svg
                                            width="20"
                                            height="20"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M8 5v14l11-7z" />
                                        </svg>
                                    </a>
                                </h3>

                                <p className="text-gray-200 text-sm lg:text-sm leading-loose text-left">
                                    <a href={stage.href} className="md:pointer-events-none md:cursor-auto">
                                        {stage.description}
                                    </a>
                                </p>

                                <a
                                    href={stage.href}
                                    className="mt-auto hidden md:block transition-transform duration-300 hover:scale-105"
                                >
                                    <LazyImage
                                        src="/main/ViewMore.png"
                                        alt="View More"
                                        width={100}
                                        height={40}
                                        containerClassName="w-[100px] bg-transparent"
                                        className="object-contain"
                                    />
                                </a>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}