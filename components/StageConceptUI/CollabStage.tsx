import StageCarouselSection from "@/components/Shared/StageCarouselSection";

export default function CollabStage() {
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
            id="collaboration"
            title="COLLABORATION STAGE"
            subtitle="社会と繋がる、共創の架け橋"
            description="協賛企業によるブース出展や講演会、立命館学園との連携企画など、学校と社会がつながるエリアです。 将来のキャリアや進路について考えるきっかけとなることはもちろん、プロによる圧巻のパフォーマンスや、生徒とのスペシャルコラボステージも多数用意しています。"
            images={carouselImages}
        />
    );
}
