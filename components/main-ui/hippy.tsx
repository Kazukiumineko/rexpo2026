"use client";

import Image from "next/image";
import { FadeIn } from "@/components/shared/anim-wrapper";

export default function HippySection() {
    return (
        <div className="w-full max-w-[1920px] mx-auto overflow-hidden px-6 md:px-12 lg:px-20 py-20 relative z-20">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">

                {/* Left Side: Text */}
                <FadeIn
                    duration={1.8}
                    viewportAmount={0.3}
                    className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left"
                >
                    <p className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 text-white tracking-widest opacity-90">
                        特別ステージ情報解禁
                    </p>

                    <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 text-white leading-tight">
                        君に捧げる応援歌
                    </h2>

                    <div className="flex items-center gap-4 mb-10 text-white">
                        <p className="text-2xl md:text-3xl font-bold tracking-wider">
                            HIPPYさん
                        </p>
                        {/* Website Link */}
                        <a href="http://hippy-web.com/" target="_blank" rel="noopener noreferrer" className="opacity-70 hover:opacity-100 transition-opacity">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-link">
                                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                            </svg>
                        </a>
                        {/* YouTube Link */}
                        <a href="https://www.youtube.com/watch?v=DiRXDpDL7es" target="_blank" rel="noopener noreferrer" className="opacity-70 hover:opacity-100 transition-opacity">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-youtube">
                                <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" /><path d="m10 15 5-3-5-3z" />
                            </svg>
                        </a>
                    </div>

                    <p className="text-sm md:text-base leading-relaxed text-gray-300 mb-8">
                        困難を乗り越えていく人の背中を押す歌い手として、全国各地で歌い続けている。<br />
                        当時代表曲でなかったこの曲が、リリースから約10年を経て、<br />
                        YouTube、TikTok、ストリーミングで、それぞれ1億回再生を超えを突破。<br />
                        人から人へ広がり繋がる応援歌として、<br />
                        各メディアにて”令和の応援ソング”として注目される。
                    </p>

                </FadeIn>

                {/* Right Side: Image (Original Aspect Ratio) */}
                <FadeIn
                    duration={1.8}
                    viewportAmount={0.3}
                    delay={0.4}
                    className="w-full lg:w-1/2 flex justify-center lg:justify-end"
                >
                    <div className="relative w-full shadow-2xl rounded-xl overflow-hidden">
                        <Image
                            src="/main/hippy.JPG"
                            alt="HIPPY Special Stage"
                            width={800}
                            height={600}
                            className="w-full h-auto object-contain"
                            sizes="(max-width: 768px) 100vw, 50vw"
                            priority
                        />
                    </div>
                </FadeIn>

            </div>
        </div>
    );
}
