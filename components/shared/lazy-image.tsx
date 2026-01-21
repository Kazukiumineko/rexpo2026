"use client";

import { useState } from "react";
import Image, { ImageProps } from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface LazyImageProps extends ImageProps {
    containerClassName?: string; // 画像コンテナに追加するクラス
}

export default function LazyImage({ containerClassName, className, ...props }: LazyImageProps) {
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <div className={`relative w-full h-full overflow-hidden ${containerClassName || ""}`}>
            {/* ローディング中のスケルトン表示 */}
            <AnimatePresence>
                {!isLoaded && (
                    <motion.div
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className={`absolute inset-0 bg-gray-200 animate-pulse z-10 ${className || ""}`}
                    />
                )}
            </AnimatePresence>

            {/* 画像本体 */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isLoaded ? 1 : 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="w-full h-full"
            >
                <Image
                    {...props}
                    className={className}
                    onLoad={(e) => {
                        setIsLoaded(true);
                        if (props.onLoad) props.onLoad(e);
                    }}
                />
            </motion.div>
        </div>
    );
}
