import { FadeIn } from "@/components/shared/anim-wrapper";
import AutoPlayCarousel from "@/components/shared/auto-play-carousel";

export default function LocationInfo() {
    const locationImages = [1, 2, 3, 4, 5, 6, 7].map(
        (num) => `/location/convention${num}.jpg`
    );

    return (
        /* 【修正点】
           section自体に px-6 md:px-20 lg:px-32 を設定しました。
           これにより、内部のカルーセルもテキストも左右に同じ余白（マージン）が生まれ、
           そのラインで写真が消えるようになります。
        */
        <section className="relative w-full bg-[#f1f1f1] text-[#092040] pt-16 md:pt-32 pb-48 px-6 md:px-20 lg:px-32 z-10 overflow-hidden">

            {/* テキストエリア（親のPaddingに従うため、個別のPaddingは削除） */}
            <div className="w-full max-w-4xl mb-24">
                {/* 会場名 */}
                <FadeIn
                    direction="right"
                    duration={1}
                >
                    <h2 className="text-2xl sm:text-3xl md:text-6xl lg:text-7xl font-bold mb-8 tracking-tighter text-[#092040] whitespace-nowrap">
                        札幌コンベンションセンター
                    </h2>
                </FadeIn>

                {/* 説明文 */}
                <FadeIn
                    direction="right"
                    duration={1}
                    delay={0.3}
                    className="space-y-6 text-sm md:text-base lg:text-lg font-light leading-relaxed tracking-widest text-gray-700 max-w-2xl"
                >
                    <p>
                        北海道の産業・文化の発信地として、2010年APECアジア太平洋経済協力会議をはじめ、数々の国際会議や学会の舞台となってきた施設です。最大2,500名を収容する大ホールや特別会議場、15の会議室を備えた広大な空間が、R-EXPO 2026の舞台となります。
                    </p>
                    <p>
                        地下鉄東西線 東札幌駅から徒歩圏内という好立地にあり、充実した設備が生徒たちの熱量を最大限に引き出します。アカデミックな議論から熱狂のパフォーマンスまで、あらゆる分野の”本気”を受け止めるこの場所で、かつてない体験をお届けします。
                    </p>
                </FadeIn>
            </div>

            {/* カルーセルエリア */}
            <FadeIn
                direction="up"
                duration={1}
                delay={0.5}
                className="w-full"
            >
                <AutoPlayCarousel images={locationImages} />
            </FadeIn>
        </section>
    );
}