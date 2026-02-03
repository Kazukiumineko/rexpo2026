import * as React from "react";
import LazyImage from "@/components/shared/lazy-image";
import { FadeIn } from "@/components/shared/anim-wrapper";

interface StageCarouselSectionProps {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    image: string;
}

export default function StageCarouselSection({
    id,
    title,
    subtitle,
    description,
    image
}: StageCarouselSectionProps) {

    return (
        <section id={id} className="relative w-full pt-24 pb-0 md:pt-32 md:pb-0 bg-transparent text-white overflow-hidden">
            <div className="w-full max-w-[1600px] mx-auto px-6 lg:px-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

                    {/* --- 左側: タイトルエリア --- */}
                    <FadeIn
                        className="flex flex-col items-start space-y-6"
                    >
                        <h2 className="font-oswald text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none text-white">
                            {title}
                        </h2>

                        <div>
                            <h3 className="font-jp text-lg md:text-xl lg:text-2xl font-medium tracking-wide leading-relaxed text-gray-300 mb-6">
                                {subtitle}
                            </h3>
                            <p className="font-jp text-sm md:text-base leading-loose text-gray-300">
                                {description}
                            </p>
                        </div>
                    </FadeIn>

                    {/* --- 右側: 画像エリア (1枚のみ) --- */}
                    <FadeIn
                        delay={0.2}
                        className="w-full relative lg:h-full"
                    >
                        <div className="relative aspect-[4/3] lg:aspect-[16/9] w-full overflow-hidden rounded-sm border border-white/10 bg-gray-900">
                            <LazyImage
                                src={image}
                                alt={title}
                                fill
                                className="object-cover"
                            />
                        </div>
                    </FadeIn>

                </div>
            </div>
        </section>
    );
}
