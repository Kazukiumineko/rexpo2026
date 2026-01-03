"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView, Variants } from "framer-motion";

export default function StageSection() {
    const stages = [
        {
            title: "Global Stage",
            description: "タイ、マレーシア、ベトナム、アメリカ、オーストラリア、リトアニア、ガラパゴス諸島・・・彼らが語るのは、ネットで調べた情報のまとめではありません。「トビタテ！留学JAPAN」や海外研修で直面したトラブル、現地の人との対話、そして肌で感じた文化の違いという「生きた体験」です。",
        },
        {
            title: "Academic Stage",
            description: "タイ、マレーシア、ベトナム、アメリカ、オーストラリア、リトアニア、ガラパゴス諸島・・・彼らが語るのは、ネットで調べた情報のまとめではありません。「トビタテ！留学JAPAN」や海外研修で直面したトラブル、現地の人との対話、そして肌で感じた文化の違いという「生きた体験」です。",
        },
        {
            title: "Artistic Stage",
            description: "タイ、マレーシア、ベトナム、アメリカ、オーストラリア、リトアニア、ガラパゴス諸島・・・彼らが語るのは、ネットで調べた情報のまとめではありません。「トビタテ！留学JAPAN」や海外研修で直面したトラブル、現地の人との対話、そして肌で感じた文化の違いという「生きた体験」です。",
        },
    ];

    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: false, amount: 0.3 });

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
                    src="/StageBG.jpg"
                    alt="Stage Background"
                    fill
                    className="object-cover"
                    style={{ objectPosition: "center" }}
                />
                <div className="absolute inset-0 bg-black/60" />
            </div>

            <div className="w-full max-w-7xl mx-auto px-6 lg:px-12">

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    {/* ▼ 追加箇所: STAGE CONCEPT 見出しとサブタイトル ▼ */}
                    <motion.div
                        className="col-span-full flex flex-col items-center mb-16 lg:mb-24 text-center"
                        variants={itemVariants}
                    >
                        <h2 className="text-white font-oswald text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-none">
                            STAGE CONCEPT
                        </h2>
                        <p className="mt-6 text-sm md:text-lg font-bold text-gray-200 font-jp tracking-widest">
                            個性が輝く多彩なステージ
                        </p>
                    </motion.div>
                    {/* ▲ 追加箇所ここまで ▲ */}

                    {stages.map((stage, index) => (
                        <motion.div
                            key={index}
                            className="flex flex-col items-left text-left space-y-6"
                            variants={itemVariants}
                        >
                            {/* ▼ 元のデザインに戻しました（白線を削除し、元のクラス名を使用） ▼ */}
                            <h3 className="text-3xl lg:text-4xl items-left text-left font-bold tracking-tight">
                                {stage.title}
                            </h3>

                            <p className="text-gray-200 text-xs lg:text-sm leading-loose text-left">
                                {stage.description}
                            </p>

                            <a
                                href="/Subpage"
                                className="mt-4 block transition-transform duration-300 hover:scale-105"
                            >
                                <Image
                                    src="/ViewMore.png"
                                    alt="View More"
                                    width={100}
                                    height={40}
                                    className="object-contain"
                                />
                            </a>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}