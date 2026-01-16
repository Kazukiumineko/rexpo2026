import { motion } from "framer-motion";
import LazyImage from "@/components/Shared/LazyImage";

// 画像データの配列
const appImages = [
    "/application/App1.png",
    "/application/App2.png",
    "/application/App3.png",
    "/application/App4.png",
];

export default function ApplicationTop() {
    return (
        <>
            <section className="relative w-full h-screen overflow-hidden bg-white">

                {/* 1. 背景動画 */}
                <div className="absolute inset-0 z-0">
                    <video
                        src="/Drone.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                    />
                    {/* 動画を見やすくするための黒いフィルター（薄く） */}
                    <div className="absolute inset-0 bg-black/20" />
                </div>

                {/* 2. 下部の白いぼかし（グラデーション） */}
                {/* 動画の下から白くフェードアウトさせ、次のコンテンツへ自然に繋げます */}
                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none z-10" />

                {/* 3. テキストコンテンツ */}
                <div className="absolute bottom-0 left-0 w-full z-20 flex flex-col items-center justify-end pb-12 md:pb-24 text-center px-6">
                    {/* pb-32だと画像と離れすぎる可能性があるため、少し調整しました */}

                    {/* メインタイトル */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        className="text-black font-bold text-4xl md:text-6xl lg:text-7xl tracking-widest drop-shadow-sm font-jp"
                    >
                        R-EXPO公式アプリ
                    </motion.h1>

                    {/* サブタイトル */}
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                        className="mt-6 text-black md:text-gray-800 text-lg md:text-2xl font-medium tracking-wider drop-shadow-sm font-jp"
                    >
                        すべての企画を、あなたの掌に
                    </motion.p>

                </div>
            </section>

            {/* 4. アプリ画像セクション */}
            {/* 動画の直下に配置。背景は白で統一 */}
            <section className="w-full bg-white pb-20 px-6 md:px-12 lg:px-20 pt-10">
                <div className="max-w-[1200px] mx-auto">

                    {/* グリッドレイアウトの設定 */}
                    {/* grid-cols-2: スマホで2列 */}
                    {/* md:grid-cols-4: PC(タブレット以上)で4列 */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                        {appImages.map((src, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.6, delay: index * 0.1 }} // 順番にふわっと表示
                                className="relative w-full"
                            >
                                {/* 画像コンテナ: スマホ画面らしい縦長比率を維持しても良いですし、autoでもOK */}
                                <div className="relative w-full h-auto aspect-[9/19] md:aspect-[9/18] overflow-hidden rounded-2xl shadow-xl border border-gray-100">
                                    <LazyImage
                                        src={src}
                                        alt={`Application Screen ${index + 1}`}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}