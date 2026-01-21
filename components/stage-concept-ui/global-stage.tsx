import StageCarouselSection from "@/components/shared/stage-carousel-section";

export default function GlobalStage() {
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
            id="global"
            title="GLOBAL STAGE"
            subtitle="国境を越えた学びが生む、慶祥生の未来"
            description="海外研修や留学、国際交流活動に参加した慶祥生が、現地での体験や学びを発表するステージです。国境を越えて異文化に触れ、多様な価値観と向き合ってきた慶祥生。教室にいるだけでは学べない、高校生が見た世界の今をお伝えします。"
            images={carouselImages}
        />
    );
}