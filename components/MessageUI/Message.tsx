"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";

export default function Message() {
    // アニメーション設定
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3, // 子要素を順番に表示
            },
        },
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" },
        },
    };

    return (
        <section className="w-full bg-white text-black py-24 md:py-32 px-6 md:px-20 lg:px-32 overflow-hidden">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="max-w-[1600px] mx-auto"
            >
                {/* --- ページタイトル --- */}


                {/* ブロック間の距離 (スマホ: gap-40, PC: gap-32) */}
                <div className="flex flex-col gap-40 lg:gap-32">

                    {/* === 1人目: 菊地賢司 校長 === */}
                    {/* 【修正点】スマホの時の gap を 16 -> 6 に詰めて、写真と文章を近づけました */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-24 items-start">

                        {/* メッセージエリア (order-2: スマホでは写真の下) */}
                        <div className="order-2 lg:order-1">
                            <motion.div variants={itemVariants} className="space-y-10">
                                <div>
                                    <p className="text-gray-600 text-sm md:text-base tracking-wider font-light mb-1">
                                        立命館慶祥中学校・高等学校 学校長
                                    </p>
                                    <h2 className="text-3xl md:text-4xl font-bold tracking-wide">
                                        菊地 賢司
                                    </h2>
                                </div>
                                <div className="font-jp text-gray-800 leading-relaxed space-y-4 text-justify">
                                    <p>
                                        平素より本校の教育活動にご理解とご協力を賜り、心より感謝申し上げます。
                                        今年度、私たちは「R-EXPO2026」という新たな挑戦の第一歩を踏み出しました。これは単なる学校行事の枠を超え、生徒たちが自らの手で未来を創造し、世界とつながるための壮大な実験の場です。
                                    </p>
                                    <p>
                                        予測不可能な現代社会において、受動的に知識を得るだけでは不十分です。自ら問いを立て、仲間と協働し、最適解を導き出す力。そして、それを多様な価値観を持つ他者へと伝える表現力が必要です。R-EXPOは、まさにその力を養うための実践的なステージとなります。
                                    </p>
                                    <p>
                                        生徒たちが主体となり、試行錯誤しながら創り上げるこのイベントが、彼らにとってかけがえのない経験となり、やがて世界を舞台に活躍するための確かな礎となることを確信しています。どうぞ、彼らの挑戦に温かいご支援とご期待をお寄せください。
                                    </p>
                                </div>
                            </motion.div>
                        </div>

                        {/* 写真エリア (order-1: スマホでは上) */}
                        {/* 【修正点】mb-10 を削除し、下の文章との余白を削減しました */}
                        <div className="order-1 lg:order-2 lg:sticky lg:top-24 h-fit lg:mt-20 lg:mb-0">
                            <motion.div
                                variants={itemVariants}
                                className="relative aspect-[3/2] w-full rounded-sm overflow-hidden border border-black/10 bg-gray-100"
                            >
                                <Image
                                    src="/message/Kocho.jpg"
                                    alt="菊地賢司 学校長"
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-700"
                                />
                            </motion.div>
                        </div>
                    </div>

                    {/* === 2人目: 上野政聖 委員長 === */}
                    {/* 【修正点】同様に gap-6 に変更 */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-24 items-start">

                        {/* メッセージエリア */}
                        <div className="order-2 lg:order-1">
                            <motion.div variants={itemVariants} className="space-y-10">
                                <div>
                                    <p className="text-gray-600 text-sm md:text-base tracking-wider font-light mb-1">
                                        行事改革実行委員会 委員長
                                    </p>
                                    <h2 className="text-3xl md:text-4xl font-bold tracking-wide">
                                        上野 政聖
                                    </h2>
                                </div>
                                <div className="font-jp text-gray-800 leading-relaxed space-y-4 text-justify">
                                    <p>
                                        「自分たちの学校行事は、自分たちの手で面白くする」
                                        そんな単純で、熱い思いから行事改革実行委員会は立ち上がりました。これまでの伝統を大切にしつつも、今の私たちにしかできない、新しい時代の熱狂を生み出したい。それがR-EXPOの原点です。
                                    </p>
                                    <p>
                                        準備の過程は決して平坦ではありませんでした。意見の衝突、予期せぬトラブル、見えないゴールへの不安。しかし、それを乗り越えるたびに、私たちの結束は強まり、実現したい未来の解像度は高まっていきました。
                                    </p>
                                    <p>
                                        私たちが目指すのは、参加するすべての人が主役になれる場所です。学年の壁を越え、それぞれの個性が化学反応を起こす瞬間を、ぜひ会場で体感してください。私たちが創り出す「本気」の熱量を、皆さんに届けます。
                                    </p>
                                </div>
                            </motion.div>
                        </div>

                        {/* 写真エリア */}
                        {/* 【修正点】mb-10 を削除 */}
                        <div className="order-1 lg:order-2 lg:sticky lg:top-24 h-fit lg:mt-20 lg:mb-0">
                            <motion.div
                                variants={itemVariants}
                                className="relative aspect-[3/2] w-full rounded-sm overflow-hidden border border-black/10 bg-gray-100"
                            >
                                <Image
                                    src="/message/Students.jpg"
                                    alt="行事改革実行委員会の生徒たち"
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-700"
                                />
                            </motion.div>
                        </div>
                    </div>

                </div>
            </motion.div>
        </section>
    );
}