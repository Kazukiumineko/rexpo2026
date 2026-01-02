"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView, Variants } from "framer-motion";

export default function TopicSection() {
    const topics = [
        {
            title: "LOCATION",
            src: "/topic/Location.jpg",
            description: "彼らが語るのは、ネットで調べた情報のまとめではありません。「トビタテ！留学JAPAN」や海外研修で直面したトラブル、現地の人との対話、そして肌で感じた文化の違いという「生きた体験」です。",
        },
        {
            title: "SUPPORT",
            src: "/topic/Support.jpg",
            description: "彼らが語るのは、ネットで調べた情報のまとめではありません。「トビタテ！留学JAPAN」や海外研修で直面したトラブル、現地の人との対話、そして肌で感じた文化の違いという「生きた体験」です。",
        },
        {
            title: "COMMENTS",
            src: "/topic/Comments.jpg",
            description: "彼らが語るのは、ネットで調べた情報のまとめではありません。「トビタテ！留学JAPAN」や海外研修で直面したトラブル、現地の人との対話、そして肌で感じた文化の違いという「生きた体験」です。",
        },
        {
            title: "APPLICATION",
            src: "/topic/Application.jpg",
            description: "彼らが語るのは、ネットで調べた情報のまとめではありません。「トビタテ！留学JAPAN」や海外研修で直面したトラブル、現地の人との対話、そして肌で感じた文化の違いという「生きた体験」です。",
        },
    ];

    // スクロール検知設定
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: false, amount: 0.2 });

    // アニメーション設定（親）
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    // アニメーション設定（子）
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
            className="relative w-full py-24 bg-transparent text-black overflow-hidden"
            ref={sectionRef}
        >
            <div className="w-full max-w-7xl mx-auto px-6 lg:px-12">

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    {topics.map((topic, index) => (
                        <motion.div
                            key={index}
                            className="flex flex-col items-start space-y-4"
                            variants={itemVariants}
                        >
                            <div className="relative w-full aspect-video overflow-hidden rounded-sm shadow-lg border border-gray-200">
                                <Image
                                    src={topic.src}
                                    alt={topic.title}
                                    fill
                                    className="object-cover transition-transform duration-500 hover:scale-110"
                                />
                            </div>

                            <div className="flex flex-col space-y-3">
                                <h3 className="text-xl font-bold tracking-widest uppercase mt-2">
                                    {topic.title}
                                </h3>
                                <p className="text-gray-600 text-xs leading-relaxed">
                                    {topic.description}
                                </p>
                            </div>

                            <a
                                href="/Subpage"
                                className="block transition-transform duration-300 hover:scale-105 pt-2"
                            >
                                <Image
                                    src="/ViewMore.png"
                                    alt="View More"
                                    width={100}
                                    height={36}
                                    className="object-contain invert"
                                />
                            </a>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}