"use client";

import * as React from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

export default function EventConceptSection() {
    // カルーセルの自動再生設定
    const plugin = React.useRef(
        Autoplay({ delay: 3000, stopOnInteraction: true })
    );

    // カルーセルに表示する画像のリスト
    // ※publicフォルダにある画像名に合わせて変更してください
    const carouselImages = [
        "/CarouselPic/Carousel1.jpg",
        "/CarouselPic/Carousel2.jpg",
        "/CarouselPic/Carousel3.jpg",
        "/CarouselPic/Carousel4.jpg",
    ];

    return (
        <section className="relative w-full py-32 bg-transparent text-white overflow-hidden">

            <div className="absolute inset-0 -z-10 opacity-40 ">

            </div>

            <div className="w-full max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    <div className="flex flex-col items-start space-y-8">
                        <h2 className="text-5xl lg:text-6xl font-bold tracking-tight">
                            Event Concept
                        </h2>

                        <p className="text-gray-300 text-sm leading-loose">
                            タイ、マレーシア、ベトナム、アメリカ、オーストラリア、リトアニア、ガラパゴス諸島・・・
                            彼らが語るのは、ネットで調べた情報のまとめではありません。「トビタテ！留学JAPAN」や海外研修で直面したトラブル、現地の人との対話、そして肌で感じた文化の違いという「生きた体験」です。
                        </p>

                        <a
                            href="/Subpage"
                            className="block transition-transform duration-300 hover:scale-105"
                        >
                            <Image
                                src="/ViewMore.png"
                                alt="View More"
                                width={100}
                                height={40}
                                className="object-contain"
                            />
                        </a>
                    </div>


                    <div className="w-full flex justify-center lg:justify-end">
                        <Carousel
                            plugins={[plugin.current]}
                            className="w-full max-w-lg"
                            onMouseEnter={plugin.current.stop}
                            onMouseLeave={plugin.current.reset}
                            opts={{
                                align: "start",
                                loop: true,
                            }}
                        >
                            <CarouselContent>
                                {carouselImages.map((src, index) => (
                                    <CarouselItem key={index} className="md:basis-1/1 lg:basis-1/1">
                                        <div className="p-1">
                                            {/* 画像カードエリア */}
                                            <div className="relative aspect-video w-full overflow-hidden rounded-lg shadow-2xl border border-white/10">
                                                <Image
                                                    src={src}
                                                    alt={`Event Photo ${index + 1}`}
                                                    fill
                                                    className="object-cover transition-transform duration-500 hover:scale-110"
                                                />
                                            </div>
                                        </div>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                        </Carousel>
                    </div>

                </div>
            </div>
        </section>
    );
}