"use client";

import Image from "next/image";
import { motion } from "framer-motion";

// 企画データ（4つに厳選）
const projects = [
    {
        title: "高校海外研修報告",
        img: "/stage-concept/global1.jpg",
        desc: "アメリカ、カナダ、オーストラリアなど、世界5カ国に分かれて実施された語学研修とホームステイの体験報告です。現地高校での授業参加や、ホストファミリーとの生活を通じて直面した「言葉の壁」と「文化の違い」。それらを乗り越える中で得たコミュニケーションの極意や、自分自身の価値観の変化について、具体的なエピソードを交えながら生徒自身の言葉で語ります。",
    },
    {
        title: "中学研修報告",
        img: "/stage-concept/global2.jpg",
        desc: "ニュージーランドやシンガポールなどを訪れた中学研修旅行。初めて親元を離れ、異国の地で過ごした数日間は、彼らにとって驚きの連続でした。現地の同世代との交流で感じた「通じる喜び」と「伝えられないもどかしさ」。事前学習で調べたことと実際の体験はどう違ったのか？中学生ならではの瑞々しい感性で切り取った、発見と成長の記録を発表します。",
    },
    {
        title: "留学報告",
        img: "/stage-concept/global3.jpg",
        desc: "1年間の長期留学を経て帰国した生徒たちによる帰国報告会です。単なる語学の習得にとどまらず、現地の部活動への参加やボランティア活動、コミュニティへの参加を通じて、彼らはどのようにして「外国人」から「地域の一員」となっていったのか。挫折、孤独、そしてそれを乗り越えた先に掴んだ自信と、将来のビジョンについて、深く熱く語ります。",
    },
    {
        title: "トビタテ留学JAPAN",
        img: "/stage-concept/global4.jpg",
        desc: "文部科学省が展開する官民協働海外留学支援制度「トビタテ！留学JAPAN」の日本代表として選出された生徒による探究活動報告です。「日本の伝統文化を広める」「現地の環境問題を調査する」など、自ら設定したユニークな課題解決テーマに基づき、世界各地でフィールドワークを実施。自ら計画し実行する力と、次世代のリーダーとしての志をプレゼンテーションします。",
    },
];

export default function StageInfo() {
    return (
        // 背景は透明
        <section className="w-full bg-transparent text-white pt-12 pb-20 px-6 md:px-12 lg:px-20">
            <div className="max-w-[1600px] mx-auto">

                {/* グリッドレイアウト設定 
                  - スマホ: 1列 (grid-cols-1)
                  - タブレット: 2列 (grid-cols-2)
                  - PC: 4列 (grid-cols-4)
                */}
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
                            {/* 1. 画像エリア */}
                            <div className="relative w-full aspect-[4/3] mb-6 overflow-hidden rounded-sm bg-black/20">
                                <Image
                                    src={project.img}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-700 hover:scale-105"
                                />
                            </div>

                            {/* 2. 企画タイトル (白線を削除しました) */}
                            <h3 className="font-oswald text-2xl font-bold mb-4 text-white">
                                {project.title}
                            </h3>

                            {/* 3. 説明文 */}
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