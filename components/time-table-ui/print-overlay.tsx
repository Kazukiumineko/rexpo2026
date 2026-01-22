import { venues, CONFIG } from "./data";
import TimeColumn from "./time-column";
import EventGrid from "./event-grid";

export default function PrintOverlay() {
    return (
        <div
            className="print:overflow-hidden print:mt-2 relative"
            style={{ width: `calc(var(--time-col-width) + ${venues.length} * var(--col-width))` }}
        >
            {/* 印刷用外枠 (時間軸を除いたエリアを囲む) */}
            <div
                className="hidden print:block absolute top-0 bottom-0 right-0 border-t border-b border-r border-gray-300 pointer-events-none z-[60]"
                style={{ left: 'var(--time-col-width)' }}
            />

            {/* 印刷用：縦線の一本化 (ヘッダーから表底まで貫通) */}
            {venues.slice(0, -1).map((_, i) => (
                <div
                    key={`print-vline-${i}`}
                    className="hidden print:block absolute top-0 bottom-0 border-r border-gray-300 pointer-events-none z-[55]"
                    style={{ left: `calc(var(--time-col-width) + ${i + 1} * var(--col-width))` }}
                />
            ))}

            {/* 印刷用ヘッダー (本体と一体化させるためここに配置) */}
            <div className="hidden print:flex w-full relative z-40" style={{ height: 'var(--header-height)' }}>
                {/* 左上（時間軸上） */}
                <div
                    className="flex-shrink-0 border-r border-white/20 invisible"
                    style={{ width: 'var(--time-col-width)' }}
                />
                {/* 会場名 */}
                {venues.map((venue, i) => (
                    <div
                        key={`print-header-${i}`}
                        className="flex-shrink-0 flex items-center justify-center text-center font-bold text-white bg-[#092040] last:border-none print-venue-header"
                        style={{ width: 'var(--col-width)' }}
                    >
                        {venue === "エントランスホール" ? (
                            <>
                                エントランス<br />ホール
                            </>
                        ) : (
                            venue
                        )}
                    </div>
                ))}
            </div>

            {/* 本体グリッド */}
            <div
                className="relative flex print-grid-offset"
                style={{
                    height: `calc(${CONFIG.END_HOUR - CONFIG.START_HOUR} * var(--hour-height))`,
                }}
            >
                {/* 左側：時間軸 (Sticky left) */}
                <TimeColumn />

                {/* 右側：メイングリッド */}
                <EventGrid />
            </div>
        </div>
    );
}
