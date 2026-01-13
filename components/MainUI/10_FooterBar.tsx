"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface FooterBarProps {
    variant?: "default" | "black";
}

export default function FooterBar({ variant = "default" }: FooterBarProps) {
    // ナビゲーション項目の定義 (Moved from EventInfo)
    const navItems = [
        { label: "R-EXPOとは", href: "event-concept" },
        { label: "ステージ", href: "stage-concept" },
        { label: "会場", href: "location" },
        { label: "開祭にあたって", href: "message" },
        { label: "協賛企業", href: "support" },
        { label: "一般来場の方", href: "entry" },
        { label: "特設アプリ", href: "application" },
    ];

    const isBlack = variant === "black";
    const bgClass = isBlack ? "bg-black" : "bg-white";
    const textClass = isBlack ? "text-white" : "text-gray-800";
    const hoverBorderClass = isBlack ? "group-hover:border-white" : "group-hover:border-black";

    return (

        // フッター全体を包むコンテナ（背景なし・縦並び・中央揃え）
        <footer className="w-full flex flex-col items-center relative z-[999]">

            {/* Content Wrapper */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className={`w-full ${bgClass} pt-28`}
            >
                {/* --- ① Moved from EventInfo: Text Content Area --- */}
                <div className={`w-full max-w-[1920px] mx-auto px-6 md:px-16 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-10 mb-30 ${textClass}`}>

                    {/* Left Column: Catchphrase & Nav */}
                    <div className="flex flex-col space-y-12">
                        {/* Catchphrase */}
                        <div>
                            <h2 className="font-oswald text-6xl md:text-8xl lg:text-[10rem] font-bold tracking-tighter leading-none">
                                <span className="inline-block">MOVE</span> <span className="inline-block">FORWARD</span> <br className="hidden lg:block" /> <span className="inline-block">INTO</span> <span className="inline-block">THE</span> <span className="inline-block">FUTURE</span>
                            </h2>
                            <p className="mt-4 text-base md:text-2xl lg:text-4xl font-medium tracking-[0.3em]">
                                進もう、ミライへ。
                            </p>
                        </div>

                        {/* Navigation */}
                        <div className="hidden lg:block grid grid-cols-2 gap-x-4 gap-y-3 md:gap-x-0">
                            {navItems.map((item, index) => (
                                <a
                                    key={index}
                                    href={item.href}
                                    className="group flex items-center text-xs md:text-sm font-medium tracking-wider hover:opacity-60 transition-opacity"
                                >
                                    <span className="mr-2 text-[10px] md:text-xs">▷</span>
                                    <span className={`border-b border-transparent ${hoverBorderClass} transition-all`}>
                                        {item.label}
                                    </span>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Date & Location */}
                    <div className="flex flex-col justify-end items-end lg:items-end text-left lg:text-right">
                        <div className="leading-none mb-2">
                            <span className="font-oswald text-[100px] md:text-[140px] lg:text-[160px] font-bold tracking-tighter">
                                2/11
                            </span>
                        </div>
                        <p className="text-sm md:text-xl lg:text-2xl font-black tracking-tighter uppercase">
                            札幌コンベンションセンター
                        </p>
                    </div>
                </div>



            </motion.div>

            {/* --- ③ 既存の黒いバー --- */}
            {/* ここに以前のfooterタグのスタイルを適用します */}
            <div className={`w-full ${isBlack ? "bg-black border-t border-white/20" : "bg-black/85"} text-white h-10 flex items-center justify-center px-4 md:px-8 relative`}>

                {/* 左側: 立命館ロゴ */}
                <div className="absolute left-4 md:left-8 top-1/2 transform -translate-y-1/2">
                    <a href="https://www2.spc.ritsumei.ac.jp/top_menu/topmenu.html" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
                        <Image
                            src="/main/Ritsumeikan.png"
                            alt="Ritsumeikan Logo"
                            width={80}
                            height={30}
                            className="object-contain h-6 w-auto md:h-6"
                        />
                    </a>
                </div>

                {/* 中央: 学校名テキスト（スマホでは非表示） */}
                <div className="hidden md:block text-center font-light text-xs px-2">
                    <a href="https://www2.spc.ritsumei.ac.jp/top_menu/topmenu.html" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
                        Ritsumeikan Keishi Junior Senior High School
                    </a>
                </div>

                {/* 右側: R-EXPOテキスト */}
                <div className="absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2 text-[10px] md:text-xs opacity-90">
                    R-EXPO2026
                </div>

            </div>
        </footer>
    );
}