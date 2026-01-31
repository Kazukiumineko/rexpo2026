
export default function EventBackground() {
    return (
        <div className="fixed inset-0 z-0">
            <div className="relative w-full h-full">
                <img
                    src="/event-concept-page/Introduction.jpg"
                    alt="Background"
                    className="object-cover w-full h-full"
                />
                {/* 暗くするためのオーバーレイ */}
                <div className="absolute inset-0 bg-black/80" />
            </div>
        </div>
    );
}
