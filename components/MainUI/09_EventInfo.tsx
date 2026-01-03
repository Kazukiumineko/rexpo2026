"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function EventInfo() {
    // ナビゲーション項目の定義
    const navItems = [
        { label: "R-EXPOとは", href: "#" },
        { label: "協賛企業", href: "#" },
        { label: "ステージ紹介", href: "#" },
        { label: "代表より", href: "#" },
        { label: "会場", href: "#" },
        { label: "特設アプリ", href: "#" },
    ];

    return (
        <section className="relative w-full bg-white flex flex-col">

            {/* --- 画像エリア --- */}
            <div className="relative w-full h-[70vh] md:h-[80vh] lg:h-[90vh] overflow-hidden bg-gray-900">
                <Image
                    src="/Cotan.jpg"
                    alt="Event Background"
                    fill
                    className="object-cover brightness-[0.25]"
                    priority
                />

                {/* 1. 英語キャッチコピー (左上端) */}
                <div className="absolute top-8 left-6 md:top-14 md:left-16 lg:top-16 lg:left-14 z-10 text-white">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: false }}
                    >
                        <h2 className="font-oswald text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-none whitespace-nowrap">
                            BE THE ORIGINAL
                        </h2>
                        <p className="mt-4 text-xs md:text-2xl lg:text-3xl font-medium tracking-[0.3em] opacity-90">
                            世界に一人の、君を見せろ
                        </p>
                    </motion.div>
                </div>

                {/* 2. ナビゲーションメニュー (左下端) */}
                <div className="absolute bottom-20 left-4 md:bottom-25 md:left-16 lg:left-16 z-10 text-white/95">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.4 }}
                        viewport={{ once: false }}
                        className="grid grid-cols-2 gap-x-8 gap-y-2 md:gap-x-12"
                    >
                        {navItems.map((item, index) => (
                            <a
                                key={index}
                                href={item.href}
                                className="group flex items-center text-xs md:text-sm lg:text-base font-medium tracking-wider hover:opacity-70 transition-opacity"
                            >
                                <span className="mr-2 text-[10px] md:text-xs">▷</span>
                                <span className="border-b border-transparent group-hover:border-white transition-all">
                                    {item.label}
                                </span>
                            </a>
                        ))}
                    </motion.div>
                </div>

                {/* 3. 開催情報 (右下端) */}
                <div className="absolute bottom-12 right-6 md:bottom-20 md:right-20 lg:right-18 z-10 text-white text-right">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        viewport={{ once: false }}
                    >
                        <div className="leading-none mb-2">
                            <span className="font-oswald text-[100px] md:text-[180px] lg:text-[200px] font-bold tracking-tighter">
                                2/11
                            </span>
                        </div>
                        <p className="text-base md:text-2xl lg:text-3xl font-black tracking-tighter uppercase">
                            札幌コンベンションセンター
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* FooterBarとの隙間を埋める */}
            <div className="w-full h-px bg-white" />
        </section>
    );
}