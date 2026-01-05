"use client";

import Image from "next/image";
import { motion } from "framer-motion";

// 企画データ
const projects = [
    {
        title: "吹奏楽演奏",
        img: "/stage-concept/global1.jpg", // 仮の画像
        desc: "コンクールでの入賞実績を持つ吹奏楽部による迫力の演奏です。クラシックからポップスまで幅広いジャンルの名曲を、息の合ったアンサンブルで披露。日々の厳しい練習の成果である美しいハーモニーが、会場全体を包み込みます。",
    },
    {
        title: "演劇公演",
        img: "/stage-concept/global2.jpg", // 仮の画像
        desc: "生徒たちが脚本から演出までを手掛けるオリジナル演劇。笑いあり、涙ありの青春ストーリーや、社会問題を鋭く切り取るシリアスな作品など、多彩な演目で観客を魅了します。舞台上で輝く役者たちの熱演にご注目ください。",
    },
    {
        title: "ダンスパフォーマンス",
        img: "/stage-concept/global3.jpg", // 仮の画像
        desc: "ヒップホップ、ジャズ、創作ダンスなど、様々なジャンルのダンスパフォーマンス。躍動感あふれる動きとキレのある振付で、若さ漲るエネルギーを表現します。チームワーク抜群の群舞と、個性際立つソロパートの見事な融合。",
    },
    {
        title: "美術・写真展示",
        img: "/stage-concept/global4.jpg", // 仮の画像
        desc: "美術部や写真部による作品展示です。絵画、彫刻、インスタレーション、風景写真、ポートレートなど、独自の感性で切り取られた世界観。作品一つひとつに込められた作者の想いやメッセージを感じ取ってください。",
    },
];

export default function ArtisticInfo() {
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
