"use client";

import Image from "next/image";
import { motion } from "framer-motion";

// 企画データ
const projects = [
    {
        title: "自然科学研究発表",
        img: "/stage-concept/global1.jpg", // 仮の画像
        desc: "物理・化学・生物・地学の各分野における実験や観察の結果を報告します。身近な自然現象への疑問から始まり、緻密なデータ収集と分析を経て導き出された考察。科学的な思考力と、未知の事象に対する探究心を披露します。",
    },
    {
        title: "社会科学探究",
        img: "/stage-concept/global2.jpg", // 仮の画像
        desc: "歴史、経済、政治、社会問題など、人間社会の諸課題に取り組んだ探究活動の成果です。文献研究だけでなく、アンケート調査やインタビュー取材など、フィールドワークを通じて得た生の情報を基に、独自の視点で社会を分析します。",
    },
    {
        title: "数学・情報課題研究",
        img: "/stage-concept/global3.jpg", // 仮の画像
        desc: "数学的な定理の証明や、プログラミングを用いたアプリケーション開発など、数理・情報科学分野の課題研究発表です。論理的な思考のプロセスと、技術を駆使して問題を解決する創造性をアピールします。",
    },
    {
        title: "人文科学・語学研究",
        img: "/stage-concept/global4.jpg", // 仮の画像
        desc: "文学作品の分析や言語の研究、哲学的な問いへの思索など、人文科学分野の発表です。言葉や文化に対する深い洞察と、豊かな表現力で紡がれる知の世界。多様な価値観に触れ、人間への理解を深める機会を提供します。",
    },
];

export default function AcademicInfo() {
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
