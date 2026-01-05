"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

// 協賛企業データ（ダミー）
const sponsors = [
    {
        name: "株式会社 北海商事",
        logo: "/sponsors/logo_placeholder_1.jpg", // 適切なパスに変更してください
        desc: "北海道の物流を支える総合物流企業。地域社会への貢献を第一に掲げ、持続可能な未来社会の実現を目指しています。教育支援活動にも力を入れており、次世代のリーダー育成をサポートしています。",
        url: "https://example.com",
    },
    {
        name: "札幌テックソリューションズ",
        logo: "/sponsors/logo_placeholder_2.jpg",
        desc: "AIとIoT技術で新しい価値を創造するITスタートアップ。生徒たちの革新的なアイデアに共感し、技術的なアドバイスや機材提供を通じて、本イベントのデジタル領域をバックアップしています。",
        url: "https://example.com",
    },
    {
        name: "みらい食品株式会社",
        logo: "/sponsors/logo_placeholder_3.jpg",
        desc: "「食で笑顔を」をモットーに、安全で美味しい道産食材を全国へ届けています。今回はフードエリアへの食材提供だけでなく、食育をテーマにしたワークショップも共同開催します。",
        url: "https://example.com",
    },
    {
        name: "グローバル・エデュケーション・ラボ",
        logo: "/sponsors/logo_placeholder_4.jpg",
        desc: "世界と繋がる教育プログラムを開発・提供する教育機関。生徒たちの英語スピーチコンテストへの審査員派遣や、海外姉妹校とのオンライン交流のコーディネートを担当しています。",
        url: "https://example.com",
    },
];

export default function SponsorsSection() {
    return (
        <section className="w-full bg-white text-black pt-12 pb-20 px-6 md:px-12 lg:px-20">
            <div className="max-w-[1600px] mx-auto">
                <div className="flex flex-col space-y-12 max-w-6xl mx-auto">

                    {/* 企業リストの表示 */}
                    {sponsors.map((sponsor, index) => (
                        <motion.div
                            key={sponsor.name}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            // 最後の要素以外に下線を入れるなどの装飾が必要であればここで調整
                            className="flex flex-row items-center space-x-6 md:space-x-12 border-b border-gray-100 pb-12 last:border-none last:pb-0"
                        >
                            {/* 1. ロゴ画像エリア */}
                            <div className="relative w-20 h-20 md:w-32 md:h-32 flex-shrink-0 overflow-hidden rounded-full border border-gray-200 bg-gray-50">
                                {/* ロゴがない場合は代替画像を表示するか、object-contain等で調整してください */}
                                <Image
                                    src={sponsor.logo}
                                    alt={sponsor.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            {/* 2. テキストエリア */}
                            <div className="flex-1 flex flex-col justify-center py-2">
                                {/* 企業名 + 三角形 (リンク) */}
                                <div className="mb-3">
                                    <a
                                        href={sponsor.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center group cursor-pointer"
                                    >
                                        <h3 className="font-oswald text-xl md:text-3xl font-bold text-black group-hover:text-blue-700 transition-colors duration-300">
                                            {sponsor.name}
                                        </h3>
                                        {/* 三角形アイコン */}
                                        <Play className="w-4 h-4 md:w-5 md:h-5 ml-3 fill-current text-gray-400 group-hover:text-blue-700 transition-colors duration-300" />
                                    </a>
                                </div>

                                {/* 紹介文 */}
                                <p className="text-gray-600 text-sm md:text-base leading-loose font-jp text-justify">
                                    {sponsor.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}

                </div>
            </div>
        </section>
    );
}