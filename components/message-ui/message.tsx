"use client";

import { motion, Variants } from "framer-motion";
import LazyImage from "@/components/shared/lazy-image";

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
        <section className="w-full bg-[#f1f1f1] text-[#092040] py-24 md:py-32 px-6 md:px-20 lg:px-32 overflow-hidden">
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
                                <div className="font-jp text-[#092040] leading-relaxed space-y-4 text-justify">
                                    <p>
                                        平素より本校の教育活動にご理解とご協力を賜り、心より感謝申し上げます。
                                        2025年、本校は「北の立命館」として北海道に誕生してから、開校30周年の節目を迎えました。1996年の開校以来、立命館学園の建学の精神「自由と清新」、教学理念「平和と民主主義」を具現化するため、私たちは常に時代の最先端と、人類が抱える課題の現場を学びの場として教育を実践してまいりました。
                                        現在、世界は大きな危機を迎えています。終わりの見えない紛争、異常気象、差別など「地球規模の課題」は、その深刻さを益々深めています。そのような中、本校は、自分の目で真実を見つめ、自分の肌で感じ、自分が何をすべきなのかを決意させる教育を展開してきました。
                                    </p>
                                    <p>
                                        現在、世界は大きな転換点を迎えています。終わりの見えない紛争、異常気象、そして根深い差別。「地球規模の課題」は、その深刻さを増し続けています。こうした時代だからこそ、本校は、生徒が自らの目で真実を見つめ、自らの肌で感じ、自らがなすべきことを決意する教育を追求してきました。
                                    </p>
                                    <p>
                                        この度、私たちはその集大成であり、新たな一歩となる挑戦の場「R-EXPO」を始動いたします。これは単なる学校行事の枠を超え、生徒たちが自らの手で未来を創造し、世界とつながるための「壮大な実験ステージ」です。

                                    </p>
                                    <p>
                                        予測不可能な現代社会において、受動的に知識を得るだけでは十分ではありません。自ら問いを立て、仲間と協働して最適解を導き出す力。そして、多様な価値観を持つ他者へと思いを届ける表現力。R-EXPOは、まさにこれらの力を養うための実践の場となります。

                                    </p>
                                    <p>
                                        生徒たちが主体となり、試行錯誤しながら創り上げるこの時間が、彼らにとってかけがえのない経験となり、世界を舞台に活躍するための確かな礎となると確信しています。開校以来、学校目標として掲げてきた「世界に通用する18歳」への新たな扉が、この挑戦によって開かれることを強く期待しています。
                                    </p>
                                    <p>
                                        どうぞ、生徒たちの新たな挑戦に、温かいご支援とご期待をお寄せください。

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
                                <LazyImage
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
                                        私たち行事改革実行委員会は、今年度創立30周年を迎えた立命館慶祥の学校祭を、時代に合った形へさらに進化させるため、昨年度から活動してきました。夏の立命祭では、キッチンカー数の増便や本校初の開催となる後夜祭・花火の実施など、様々な改革を行ってきました。
                                    </p>
                                    <p>
                                        そしてこの冬には、冬の立命祭とも言われるR-EXPOの開催に辿り着きました。コンセプトや企画の立案から当日の運営まで、開催に向けて約20人の行事部生徒が試行錯誤を重ね、ゼロから創り上げてきました。
                                    </p>
                                    <p>
                                        R-EXPOは、完成された成果を見せ合うだけの発表会ではありません。「個性の祭典」として生徒一人ひとりの色を最大限輝かせるためのイベントです。R-EXPOが「世界に通用する18歳」への一つの扉となり、自分の可能性を広げるための一歩となるようなイベントとなることを、心から願っています。
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
                                <LazyImage
                                    src="/message/Ueno.JPG"
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