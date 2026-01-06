"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Jump() {
    // アニメーション設定
    const fadeUpVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" },
        },
    };

    return (
        <section className="w-full bg-transparent text-white py-24 md:py-32 px-6 md:px-20 lg:px-32 overflow-hidden">
            <div className="max-w-[1400px] mx-auto">

                {/* === ブロック: STAGE CONCEPT === */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

                    {/* --- 左側: テキスト & ボタン --- */}
                    <motion.div
                        variants={fadeUpVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        className="flex flex-col space-y-6"
                    >
                        {/* テキストエリア */}
                        <div>
                            <h2 className="font-oswald text-5xl md:text-7xl font-bold tracking-tight mb-6">
                                STAGE CONCEPT
                            </h2>

                            {/* 説明文 */}
                            <p className="font-jp text-gray-300 leading-relaxed mb-8">
                                多様な個性が輝く、それぞれのステージ。学術的な探求から芸術的な表現、そしてグローバルな視点まで、生徒たちが自らの熱量を解き放つ多彩なコンセプトを紹介します。
                            </p>

                            {/* テキストボタンに変更 */}
                            <Link
                                href="/stage-concept"
                                className="inline-block border border-white px-8 py-3 text-sm tracking-widest hover:bg-white hover:text-black transition-colors duration-300"
                            >
                                詳細を見る →
                            </Link>
                        </div>
                    </motion.div>

                    {/* --- 右側: 写真 --- */}
                    <motion.div
                        variants={fadeUpVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ delay: 0.2 }}
                        className="w-full"
                    >
                        {/* 写真比率を自然な 3:2 (スマホは 4:3) に調整 */}
                        <Link href="/stage-concept" className="block w-full h-full cursor-pointer group">
                            <div className="relative w-full aspect-[4/3] md:aspect-[2/1] rounded-sm overflow-hidden border border-white/10">
                                <Image
                                    src="/main/StageBG.jpg"
                                    alt="Stage Concept Image"
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                        </Link>
                    </motion.div>

                </div>



                {/* === ブロック: MESSAGE === */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center mt-24 md:mt-32">

                    {/* --- 左側: テキスト & ボタン --- */}
                    <motion.div
                        variants={fadeUpVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        className="flex flex-col space-y-6"
                    >
                        {/* テキストエリア */}
                        <div>
                            <h2 className="font-oswald text-5xl md:text-7xl font-bold tracking-tight mb-6">
                                MESSAGE
                            </h2>

                            {/* 説明文 */}
                            <p className="font-jp text-gray-300 leading-relaxed mb-8">
                                R-EXPO2026の開催にあたり、校長および生徒代表からのメッセージをお届けします。私たちがこのイベントにかける想い、そして皆様への感謝の言葉をご覧ください。
                            </p>

                            {/* テキストボタンに変更 */}
                            <Link
                                href="/message"
                                className="inline-block border border-white px-8 py-3 text-sm tracking-widest hover:bg-white hover:text-black transition-colors duration-300"
                            >
                                詳細を見る →
                            </Link>
                        </div>
                    </motion.div>

                    {/* --- 右側: 写真 --- */}
                    <motion.div
                        variants={fadeUpVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ delay: 0.2 }}
                        className="w-full"
                    >
                        {/* 写真比率を自然な 3:2 (スマホは 4:3) に調整 */}
                        <Link href="/message" className="block w-full h-full cursor-pointer group">
                            <div className="relative w-full aspect-[4/3] md:aspect-[2/1] rounded-sm overflow-hidden border border-white/10">
                                <Image
                                    src="/message/Kocho.jpg"
                                    alt="Message Image"
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                        </Link>
                    </motion.div>

                </div>

            </div>
        </section>
    );
}