export default function StageConceptBackground() {
    return (
        <div className="fixed inset-0 z-0">
            <div className="relative w-full h-full">
                {/* Desktop Image */}
                <img
                    src="/event-concept-page/Introduction.jpg"
                    alt="Stage Concept Background"
                    className="hidden md:block object-cover w-full h-full"
                />
                {/* Mobile Image */}
                <img
                    src="/mobile/Introduction_mobile.jpg"
                    alt="Stage Concept Background Mobile"
                    className="block md:hidden object-cover w-full h-full"
                />
                {/* 暗くするためのオーバーレイ */}
                <div className="absolute inset-0 bg-black/80" />
            </div>
        </div>
    );
}
