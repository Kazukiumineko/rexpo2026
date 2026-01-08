"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView, Variants } from "framer-motion";

export default function StageSection() {
    const stages = [
        {
            title: "Global Stage",
            description: "タイ、マレーシア、ベトナム、アメリカ、オーストラリア、リトアニア、ガラパゴス諸島・・・彼らが語るのは、ネットで調べた情報のまとめではありません。「トビタテ！留学JAPAN」や海外研修で直面したトラブル、現地の人との対話、そして肌で感じた文化の違いという「生きた体験」です。",
            href: "/stage-concept#global"
        },
        {
            title: "Academic Stage",
            description: "タイ、マレーシア、ベトナム、アメリカ、オーストラリア、リトアニア、ガラパゴス諸島・・・彼らが語るのは、ネットで調べた情報のまとめではありません。「トビタテ！留学JAPAN」や海外研修で直面したトラブル、現地の人との対話、そして肌で感じた文化の違いという「生きた体験」です。",
            href: "/stage-concept#academic"
        },
        {
            title: "Artistic Stage",
            description: "タイ、マレーシア、ベトナム、アメリカ、オーストラリア、リトアニア、ガラパゴス諸島・・・彼らが語るのは、ネットで調べた情報のまとめではありません。「トビタテ！留学JAPAN」や海外研修で直面したトラブル、現地の人との対話、そして肌で感じた文化の違いという「生きた体験」です。",
            href: "/stage-concept#artistic"
        },
        {
            title: "Collab Stage",
            description: "地域企業や大学との連携による、実践的なプロジェクト発表です。学校の枠を飛び出し、社会との関わりの中で生まれた新たな価値創造への挑戦。大人たちとの本気の議論を経て磨かれたアイデアと、共創のストーリーをお届けします。",
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
                <Image
                    src="/main/StageBG.jpg"
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
                                <h3 className="text-3xl lg:text-4xl items-start text-left font-bold tracking-tight flex items-center gap-2">
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

                                <p className="text-gray-200 text-xs lg:text-sm leading-loose text-left">
                                    <a href={stage.href} className="md:pointer-events-none md:cursor-auto">
                                        {stage.description}
                                    </a>
                                </p>

                                <a
                                    href={stage.href}
                                    className="mt-auto hidden md:block transition-transform duration-300 hover:scale-105"
                                >
                                    <Image
                                        src="/main/ViewMore.png"
                                        alt="View More"
                                        width={100}
                                        height={40}
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