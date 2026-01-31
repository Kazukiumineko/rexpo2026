import LazyImage from "@/components/shared/lazy-image";
import { FadeIn } from "@/components/shared/anim-wrapper";

export default function StageTop() {
    return (
        <section className="relative w-full h-dvh bg-black overflow-hidden">
            {/* 1. メイン背景画像：ソースを変更し、brightnessを下げて暗くする */}
            <LazyImage
                src="/main/Satoryo1.png"
                alt="Stage Concept Background"
                fill
                className="object-cover brightness-50" // ここで暗さを調整（50%）
                priority
            />

            {/* 2. テキストコンテナ：画面中央に配置 */}
            <div className="absolute inset-0 flex flex-col items-center justify-center z-20 px-4 pointer-events-none">
                <FadeIn
                    duration={1.5}
                    direction="none"
                    className="w-full flex justify-center"
                >
                    <h1 className="font-oswald text-7xl md:text-8xl lg:text-[10rem] font-bold text-white text-center leading-none tracking-tighter select-none drop-shadow-lg">
                        STAGE<br className="block md:hidden" /> CONCEPT
                    </h1>
                </FadeIn>
                <FadeIn
                    duration={1.5}
                    delay={0.3}
                    direction="up"
                    className="w-full flex justify-center"
                >
                    <p className="mt-4 md:mt-8 text-sm md:text-2xl font-bold text-white font-jp tracking-widest text-center drop-shadow-md opacity-90">
                        個性が輝く多彩なステージ
                    </p>
                </FadeIn>
            </div>

            {/* 3. オプション：下部のグラデーション（次のセクションへの繋ぎ） */}
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </section>
    );
}