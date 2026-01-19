"use client";

import LazyImage from "@/components/Shared/LazyImage";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionTopProps {
    imageSrc: string;
    imageAlt: string;
    backTitle: string;
    /**
     * Vertical Title のクラス
     * 位置(top/bottom)や z-index を指定する
     */
    backTitleClassName: string;
    /**
     * テキストエリアを含むコンテナのクラス
     * padding, background, z-index, overflow などを指定する
     */
    containerClassName: string;
    /**
     * 画像の上に重ねるオーバーレイ要素 (オプション)
     * 色付きフィルターなどを適用する場合に使用
     */
    imageOverlay?: ReactNode;
    children: ReactNode;
}

export default function SectionTop({
    imageSrc,
    imageAlt,
    backTitle,
    backTitleClassName,
    containerClassName,
    imageOverlay,
    children
}: SectionTopProps) {
    return (
        <section className="relative w-full bg-[#f1f1f1] isolate">
            {/* 1. 画像エリア */}
            <div className="relative w-full h-[55vh] z-0">
                <LazyImage
                    src={imageSrc}
                    alt={imageAlt}
                    fill
                    className="object-cover object-center"
                    priority
                />
                {imageOverlay}
            </div>

            {/* 2. 下部エリア (テキスト用) */}
            <div className={containerClassName}>
                <div className="w-full max-w-[1600px] mx-auto pointer-events-none">
                    <div className="w-min md:w-full pointer-events-auto">
                        {children}
                    </div>
                </div>
            </div>

            {/* 3. 背景タイトル (縦書き) */}
            <motion.h1
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={backTitleClassName}
                style={{ writingMode: "vertical-rl" }}
            >
                {backTitle}
            </motion.h1>
        </section>
    );
}
