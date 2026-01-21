"use client";


import { venues, events, CONFIG, CATEGORY_COLORS } from "./Data";

// 時間文字列 ("HH:MM") を 分（startからの経過時間）に変換するヘルパー関数
const timeToMinutes = (timeStr: string) => {
    const [h, m] = timeStr.split(":").map(Number);
    return (h - CONFIG.START_HOUR) * 60 + m;
};

export default function EventGrid() {
    return (
        <div
            className="relative bg-white"
            style={{
                width: venues.length * CONFIG.COLUMN_WIDTH,
                height: (CONFIG.END_HOUR - CONFIG.START_HOUR) * CONFIG.HOUR_HEIGHT
            }}
        >
            {/* グリッド背景 (横線) */}
            <div className="absolute top-0 left-0 w-full pointer-events-none z-0">
                {Array.from({ length: (CONFIG.END_HOUR - CONFIG.START_HOUR) * 2 + 1 }, (_, i) => {
                    const offset = i;
                    return { offset };
                }).map(({ offset }) => (
                    <div
                        key={`grid-${offset}`}
                        className="absolute w-full border-t border-gray-400 solid"
                        style={{ top: offset * 30 * (CONFIG.HOUR_HEIGHT / 60) }}
                    />
                ))}
            </div>

            {/* 縦線 */}
            {venues.map((_, i) => (
                <div
                    key={i}
                    className="absolute border-r border-gray-200 h-full top-0"
                    style={{
                        left: (i + 1) * CONFIG.COLUMN_WIDTH,
                    }}
                />
            ))}

            {/* イベントカード */}
            {events.map((evt) => {
                const startMins = timeToMinutes(evt.start);
                const endMins = timeToMinutes(evt.end);
                const durationMins = endMins - startMins;

                const top = startMins * (CONFIG.HOUR_HEIGHT / 60);
                const height = Math.max(durationMins * (CONFIG.HOUR_HEIGHT / 60), 40);

                // colorId が無いときはデフォルト色 or 黒
                const accentColor = evt.colorId ? CATEGORY_COLORS[evt.colorId] : "#092040";

                return (
                    <div
                        key={evt.id}
                        className="absolute px-1 py-1"
                        style={{
                            left: evt.venueIndex * CONFIG.COLUMN_WIDTH,
                            top: top,
                            width: CONFIG.COLUMN_WIDTH,
                            height: height,
                        }}
                    >
                        <div
                            className="w-full h-full rounded-md shadow-md p-2 overflow-hidden flex flex-col justify-start hover:brightness-105 transition-all text-white"
                            style={{ backgroundColor: accentColor }}
                        >
                            <p className="text-[10px] md:text-xs text-white/90 font-mono mb-0.5 leading-none">
                                {evt.start} - {evt.end}
                            </p>
                            <h3 className="text-xs md:text-sm font-bold leading-tight whitespace-pre-wrap">
                                {evt.title}
                            </h3>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
