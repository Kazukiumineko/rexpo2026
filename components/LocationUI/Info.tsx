"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/MainUI/06_carousel";
import { useCarouselAutoPlay } from "@/hooks/useCarouselAutoPlay";

export default function LocationInfo() {
    const plugin = useCarouselAutoPlay();

    const locationImages = [1, 2, 3, 4, 5, 6, 7].map(
        (num) => `/location/convention${num}.jpg`
    );

    return (
        /* 【修正点】
           section自体に px-6 md:px-20 lg:px-32 を設定しました。
           これにより、内部のカルーセルもテキストも左右に同じ余白（マージン）が生まれ、
           そのラインで写真が消えるようになります。
        */
        <section className="relative w-full bg-white text-black pt-16 md:pt-32 pb-48 px-6 md:px-20 lg:px-32 z-10 overflow-hidden">

            {/* テキストエリア（親のPaddingに従うため、個別のPaddingは削除） */}
            <div className="w-full max-w-4xl mb-24">
                {/* 会場名 */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-2xl sm:text-3xl md:text-6xl lg:text-7xl font-bold mb-8 tracking-tighter text-black whitespace-nowrap">
                        札幌コンベンションセンター
                    </h2>
                </motion.div>

                {/* 説明文 */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="space-y-6 text-sm md:text-base lg:text-lg font-light leading-relaxed tracking-widest text-gray-700 max-w-2xl"
                >
                    <p>
                        北海道の産業・文化の発信地として、2010年APECアジア太平洋経済協力会議をはじめ、数々の国際会議や学会の舞台となってきた施設です。最大2,500名を収容する大ホールや特別会議場、15の会議室を備えた広大な空間が、R-EXPO 2026の舞台となります。
                    </p>
                    <p>
                        地下鉄東西線 東札幌駅から徒歩圏内という好立地にあり、充実した設備が生徒たちの熱量を最大限に引き出します。アカデミックな議論から熱狂のパフォーマンスまで、あらゆる分野の”本気”を受け止めるこの場所で、かつてない体験をお届けします。
                    </p>
                </motion.div>
            </div>

            {/* カルーセルエリア */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
                className="w-full"
            >
                <Carousel
                    plugins={[plugin.current]}
                    className="w-full"
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                >
                    <CarouselContent className="-ml-2 md:-ml-4">
                        {locationImages.map((src, index) => (
                            /* basis-full      : スマホで1枚表示
                               md:basis-1/2    : タブレットで2枚
                               lg:basis-1/3    : PCで3枚表示（適宜変更可能）
                            */
                            <CarouselItem
                                key={index}
                                className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3"
                            >
                                <div className="relative aspect-video w-full overflow-hidden bg-gray-100 group">
                                    <Image
                                        src={src}
                                        alt={`Sapporo Convention Center ${index + 1}`}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </motion.div>
        </section>
    );
}