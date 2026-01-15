"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Topic() {
    // 【調整箇所②】01~04の各セクション間の距離
    const sectionGap = "gap-12 md:gap-20";

    const sections = [
        {
            num: "01",
            title: "多彩な才能を持つ生徒が主役",
            desc: "文化・芸術・科学など、特定の枠組みに捉われない多様なジャンルで、生徒一人ひとりが磨き上げた独自の「本気」を社会に発信します。"
        },
        {
            num: "02",
            title: "生徒の個性が輝くステージ",
            desc: "発表者と来場者、あるいは異なる分野の生徒同士が交差することで、新しいアイデアや価値観が生まれるプラットフォームを提供します。"
        },
        {
            num: "03",
            title: "学校の枠を超えた知の交差点",
            desc: "教室の壁を取り払い、企業や大学と接続する新たな取り組み。授業では知り得ない多様な「知」とのコラボレーションで、生徒の創造性を引き出します。"
        },
        {
            num: "04",
            title: "「世界に通用する18歳」へ",
            desc: "知識を得るだけでなく、自ら感じ、考え、行動する実践の場。会場でのあらゆる体験と挑戦で、「世界に通用する力」を育みます。"
        }
    ];

    return (
        <section className="relative w-full bg-transparent py-24 md:py-40 overflow-hidden flex flex-col items-center">

            {/* 背景画像エリア削除済 */}

            {/* ヘッダーエリア */}
            <div className="relative z-10 w-full flex flex-col items-center mb-20 md:mb-32 text-center px-4">
                <h2 className="font-oswald text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight text-white mb-4">
                    CONCEPTS
                </h2>
                <p className="text-sm md:text-3xl font-bold tracking-widest text-white font-sans">
                    R-EXPOとは
                </p>
            </div>

            {/* コンテンツエリア */}
            <div className="relative z-10 w-full max-w-7xl px-6 md:px-12 flex flex-col items-center">

                <div className={`w-full flex flex-col ${sectionGap}`}>
                    {sections.map((item, idx) => (
                        <motion.div
                            key={item.num}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                            /* items-stretch で左右のブロックの高さを揃える */
                            className={`flex flex-row items-stretch gap-6 md:gap-10 w-full max-w-2xl md:max-w-4xl ${idx % 2 === 0 ? "md:self-start" : "md:self-end"
                                }`}
                        >
                            {/* 数字：親の高さ(items-stretch)をそのまま受け継ぐ */}
                            <div className="flex items-center justify-center">
                                <span className="font-oswald text-[80px] md:text-[140px] lg:text-[160px] font-black text-white/30 leading-[0.8] tracking-tighter inline-block">
                                    {item.num}
                                </span>
                            </div>

                            {/* テキスト内容：ここの高さが数字の基準になる */}
                            <div className="flex flex-col justify-center py-2">
                                <h4 className="text-xl md:text-4xl font-black text-white mb-4 tracking-tight leading-tight uppercase">
                                    {item.title}
                                </h4>
                                <p className="text-sm md:text-xl text-gray-300 font-medium leading-relaxed tracking-wide">
                                    {item.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}