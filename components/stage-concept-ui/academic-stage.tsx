import StageCarouselSection from "@/components/shared/stage-carousel-section";

export default function AcademicStage() {
    const carouselImages = [
        "/stage-concept/global1.jpg",
    ];

    return (
        <StageCarouselSection
            id="academic"
            title="ACADEMIC STAGE"
            subtitle="知的好奇心が拓く、探究の地平"
            description="理数系の研究発表から社会問題や文化に関する研究まで、慶祥独自の学びが集結するエリアです。ほとんどの企画が”授業”の枠を飛び出して、生徒ひとりひとりが独自のテーマで進めた研究の成果です。ポスターセッションやプレゼン、ブース形式で紹介します。"
            images={carouselImages}
        />
    );
}
