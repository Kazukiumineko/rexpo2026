"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";

// セクションごとのアニメーション設定
const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" }
    }
};

export default function Form() {
    return (
        <section className="relative w-full text-white py-20">

            {/* 背景画像の設定 */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/entry/SchoolView.jpg"
                    alt="Background"
                    fill
                    className="object-cover object-center"
                    // 画像を暗くして文字を見やすくするフィルタ
                    style={{ filter: "brightness(0.3) grayscale(0.5)" }}
                />
            </div>

            {/* コンテンツエリア */}
            <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-20 lg:px-32">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={sectionVariants}
                    className="flex flex-col md:flex-row items-center gap-12 md:gap-20"
                >
                    {/* 左側: 情報とボタン */}
                    <div className="w-full md:w-1/2 order-2 md:order-1">
                        <h3 className="font-oswald text-6xl md:text-8xl font-bold mb-6 tracking-wide">
                            JOIN US
                        </h3>
                        <p className="text-lg mb-8 font-medium">
                            お申し込みは、3分程度で完了します。
                        </p>
                        <p className="text-gray-300 mb-8 leading-relaxed">
                            以下の情報をご入力いただき、登録をお願いいたします。<br />
                            <span className="text-sm block mt-2 opacity-80">
                                ・代表者様のお名前<br />
                                ・メールアドレス<br />
                                ・参加区分（一般 / 在校生保護者 / 中学生 / 教育関係者 など）<br />
                                ・ご来場人数　など
                            </span>
                        </p>

                        <a
                            href="https://program-service.ritsumei.ac.jp/public/seminar/view/40459"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative inline-flex h-16 w-full md:w-auto items-center justify-center bg-white px-10 text-lg font-bold text-black transition-colors duration-300 hover:bg-gray-200 rounded-sm"
                        >
                            {/* 修正: 矢印を削除し、テキストのみにしました（mr-3も不要なため削除） */}
                            <span className="text-xl">申込みフォームへ</span>
                        </a>
                    </div>

                    {/* 右側: 写真（スマホでは非表示） */}
                    <div className="hidden md:block w-full md:w-1/2 h-[300px] md:h-[450px] relative order-1 md:order-2">
                        <Image
                            src="/entry/Media.jpg"
                            alt="Registration Form Icon"
                            fill
                            className="object-contain object-center"
                        />
                    </div>

                </motion.div>
            </div>
        </section>
    );
}