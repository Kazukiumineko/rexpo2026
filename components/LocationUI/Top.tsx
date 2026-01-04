"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function LocationTop() {
    return (
        /* 文字の突き抜けを許可するため overflow-hidden はなし */
        <section className="relative w-full h-[60vh] bg-white">
            {/* 1. メイン背景画像 */}
            <Image
                src="/location/Location.jpg"
                alt="Location Background"
                fill
                className="object-cover object-bottom brightness-100"
                priority
            />

            {/* 2. 下部のごく薄いグラデーション（Infoセクションへの繋ぎ） */}
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-white/30 via-transparent to-transparent" />

            {/* 3. 右端の縦書き "LOCATION" テキスト */}
            <div className="absolute inset-y-0 right-0 flex items-start pt-20 z-20 pr-4 md:pr-8 pointer-events-none">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 0.2, y: 0 }} // 薄く黒文字を表示
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="font-oswald text-[12vh] md:text-[20vh] lg:text-[25vh] font-bold text-black leading-none select-none"
                    style={{
                        writingMode: "vertical-rl",
                        textOrientation: "mixed",
                        height: "400vh", // Infoセクションへ食い込ませる
                    }}
                >
                    LOCATION
                </motion.h1>
            </div>

            {/* ★ 追加: 2/11全館貸切！ポップ画像 */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.0, ease: "easeOut", delay: 0.8 }}
                // 配置設定:
                // absolute bottom-0 ... 下端に配置
                // translate-y-1/2 ..... 高サの半分だけ下にずらして食い込ませる
                // 【変更点】left-8 md:left-24 に変更し、左端から少し右へ移動させました
                className="absolute bottom-0 left-8 md:left-24 z-30 transform translate-y-1/2 w-24 md:w-28 lg:w-32"
            >
                <Image
                    src="/location/TOPYerrow.png"
                    alt="2/11全館貸切！"
                    width={300}
                    height={300}
                    className="object-contain drop-shadow-xl"
                />
            </motion.div>
        </section>
    );
}