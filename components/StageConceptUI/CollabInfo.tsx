"use client";

import Image from "next/image";
import { motion } from "framer-motion";

// 企画データ
const projects = [
    {
        title: "産学連携プロジェクト",
        img: "/stage-concept/global1.jpg", // 仮の画像
        desc: "地元企業と協力し、新商品の開発やマーケティング戦略の立案に取り組んだプロジェクトの最終報告です。ビジネスの第一線で活躍するプロフェッショナルからのフィードバックを受けながら、市場調査からコンセプト設計、試作までを実践。若者の視点を取り入れた斬新なアイデアを提案します。",
    },
    {
        title: "高大連携研究",
        img: "/stage-concept/global2.jpg", // 仮の画像
        desc: "大学の研究室に所属し、専門的な設備や指導の下で行った高度な研究活動の成果発表です。高校の授業では扱わない専門分野に触れ、大学生や教授と議論を交わす中で磨かれた知見。アカデミックな世界の入り口に立ち、将来の研究者としての萌芽を感じさせます。",
    },
    {
        title: "地域創生ボランティア",
        img: "/stage-concept/global3.jpg", // 仮の画像
        desc: "地域の商店街や自治会と連携し、まちづくりや活性化イベントの企画・運営に携わった活動報告です。地域の人々との交流を通じて見えてきた課題と、その解決に向けた高校生なりのアプローチ。地域に根差し、社会に貢献する喜びと責任感を語ります。",
    },
    {
        title: "SDGsアクション",
        img: "/stage-concept/global4.jpg", // 仮の画像
        desc: "持続可能な開発目標（SDGs）の達成に向けた具体的なアクションプランの発表です。環境保全、貧困対策、ジェンダー平等など、グローバルな課題を自分事として捉え、身近なところからできる取り組みを実践。未来の地球のために、今私たちができることを提言します。",
    },
];

export default function CollabInfo() {
    return (
        <section className="w-full bg-transparent text-white pt-12 pb-20 px-6 md:px-12 lg:px-20">
            <div className="max-w-[1600px] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="flex flex-col"
                        >
                            <div className="relative w-full aspect-[4/3] mb-6 overflow-hidden rounded-sm bg-black/20">
                                <Image
                                    src={project.img}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-700 hover:scale-105"
                                />
                            </div>
                            <h3 className="font-oswald text-2xl font-bold mb-4 text-white">
                                {project.title}
                            </h3>
                            <p className="text-gray-200 text-sm leading-loose font-jp">
                                {project.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
