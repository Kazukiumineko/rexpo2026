"use client";

import { motion, Variants } from "framer-motion";

export default function ThemeMessage() {
    // 親コンテナのアニメーション設定（子要素を順番に実行）
    const containerVariants: Variants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.4, // 0.4秒ごとに次のブロックを表示
            },
        },
    };

    // 各テキストブロックのアニメーション設定
    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
        visible: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: { duration: 1.2, ease: "easeOut" },
        },
    };

    return (
        <section className="w-full bg-transparent text-white py-24 md:py-40 px-6 overflow-hidden">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-10% 0px" }} // 画面に少し入ったら開始
                className="max-w-4xl mx-auto text-center"
            >
                {/* === ヘッドライン === */}
                <motion.div variants={itemVariants} className="mb-24 md:mb-32">
                    <h2 className="font-oswald text-6xl md:text-8xl font-bold tracking-tighter mb-4 text-white">
                        BE THE ORIGINAL
                    </h2>
                    <p className="text-2xl md:text-4xl font-bold tracking-widest text-white">
                        世界で唯一の君へ
                    </p>
                </motion.div>

                {/* === 本文 === */}
                <div className="space-y-16 md:space-y-24 font-jp leading-loose text-gray-300">

                    {/* 塊1 */}
                    <motion.div variants={itemVariants} className="space-y-2">
                        <p className="text-xs md:text-xl">世界で、唯一の君へ。</p>
                        <p className="text-xs md:text-xl">君と同じ人は、世界に一人もいない。</p>
                        <p className="text-xs md:text-xl">君だけの個性が、君を創り、君を動かし、君を君らしく生かす。</p>
                    </motion.div>

                    {/* 塊2 */}
                    <motion.div variants={itemVariants} className="space-y-2">
                        <p className="text-xs md:text-xl">そして、君以外のすべての人たちも、君と同じ唯一の存在。</p>
                        <p className="text-xs md:text-xl">その人の、個性がある。その人の、生き方がある。</p>
                    </motion.div>

                    {/* 塊3 */}
                    <motion.div variants={itemVariants} className="space-y-2">
                        <p className="text-xs md:text-xl">私たちの学校は、ステンドグラスのような場所だ。</p>
                        <p className="text-xs md:text-xl">赤 青 黄色 のガラスが集まって、大きな絵ができる。</p>
                        <p className="text-xs md:text-xl">ひとつひとつのガラスの色は違っても、それはひとつの絵として美しく輝く。</p>
                    </motion.div>

                    {/* 塊4 */}
                    <motion.div variants={itemVariants} className="space-y-8">
                        <div className="space-y-2">
                            <p className="text-xs md:text-xl">R-EXPOは、そんなガラスに光を当てる場所。</p>
                            <p className="text-xs md:text-xl">君の生き様を、ガラスいっぱいの光で輝かせる。</p>
                        </div>

                        <div className="space-y-2">
                            <p className="text-xs md:text-xl">私たちは、君の夢を知りたい。</p>
                            <p className="text-xs md:text-xl">私たちは、君の学びを知りたい。</p>
                            <p className="text-xs md:text-xl">私たちは、君が輝ける瞬間を知りたい。</p>
                        </div>


                    </motion.div>

                    <motion.div variants={itemVariants} className="space-y-8">

                        <p className="text-xs md:text-xl">
                            君だけの個性が光るステージで、美しいガラスのピースを磨こう。
                        </p>
                    </motion.div>


                </div>
            </motion.div>
        </section>
    );
}