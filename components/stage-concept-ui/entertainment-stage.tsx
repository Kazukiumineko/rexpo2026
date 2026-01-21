import StageCarouselSection from "@/components/shared/stage-carousel-section";

export default function EntertainmentStage() {
    const carouselImages = [
        "/stage-concept/global1.jpg",
        "/stage-concept/global2.jpg",
        "/stage-concept/global3.jpg",
        "/stage-concept/global4.jpg",
        "/stage-concept/global5.jpg",
        "/stage-concept/global6.jpg",
    ];

    return (
        <StageCarouselSection
            id="entertainment"
            title="ENTERTAINMENT STAGE"
            subtitle="感性が共鳴する、創造の舞台"
            description="バンド、ダンス、演劇などのステージで、生徒たちの情熱と創造性が爆発します。ステージ上のパフォーマンスだけでなく、美術作品展示やお茶会、E-Sports大会など、五感で楽しめる多彩なプログラムが会場を彩ります。"
            images={carouselImages}
        />
    );
}
