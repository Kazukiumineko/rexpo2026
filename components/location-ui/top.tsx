"use client";


import LazyImage from "@/components/shared/lazy-image";
import { motion } from "framer-motion";

export default function LocationTop() {
    return (
        /* 文字の突き抜けを許可するため overflow-hidden はなし */
        <section className="relative w-full h-[60vh] bg-[#f1f1f1]">
            {/* 1. メイン背景画像 */}
            <LazyImage
                src="/location/Location.jpg"
                alt="Location Background"
                fill
                className="object-cover object-bottom brightness-100"
                priority
            />

            {/* 2. 下部のごく薄いグラデーション（Infoセクションへの繋ぎ） */}
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#f1f1f1]/30 via-transparent to-transparent" />

            {/* 3. 右端の縦書き "LOCATION" テキスト */}
            <div className="absolute inset-y-0 right-0 flex items-start pt-20 z-20 pr-4 md:pr-8 pointer-events-none">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 0.2, y: 0 }} // 薄く黒文字を表示
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="font-oswald text-[12vh] md:text-[20vh] lg:text-[25vh] font-bold text-[#092040] leading-none select-none"
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

            {/* === 【スマホ用】 (md未満で表示) === */}
            <motion.div
                // 左側からスライドさせるアニメーション設定
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.0, ease: "easeOut", delay: 0.8 }}
                // 配置設定:
                // block md:hidden ... スマホのみ表示
                // top-20 ............ 上から少し離す
                // left-8 ............ 左寄りに配置
                className="absolute z-30 w-24 top-20 left-8 block md:hidden"
            >
                <LazyImage
                    src="/location/TOPYerrow.png"
                    alt="2/11全館貸切！"
                    width={300}
                    height={300}
                    containerClassName="w-full h-full bg-transparent"
                    className="object-contain drop-shadow-xl"
                />
            </motion.div>

            {/* === 【PC用】 (md以上で表示) === */}
            <motion.div
                // 【変更】PCも左側からスライドさせるアニメーションに変更
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.0, ease: "easeOut", delay: 0.8 }}
                // 配置設定:
                // hidden md:block ... PCのみ表示
                // bottom-0 .......... 下端に配置
                // translate-y-1/2 ... 下に食い込ませる
                className="absolute z-30 w-28 lg:w-32 bottom-0 left-24 transform translate-y-1/2 hidden md:block"
            >
                <LazyImage
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