"use client";


import { venues, events, CONFIG, CATEGORY_COLORS } from "./data";

// 時間文字列 ("HH:MM") を 分（startからの経過時間）に変換するヘルパー関数
const timeToMinutes = (timeStr: string) => {
    const [h, m] = timeStr.split(":").map(Number);
    return (h - CONFIG.START_HOUR) * 60 + m;
};

export default function EventGrid() {
    return (
        <div
            className="relative"
            style={{
                width: `calc(${venues.length} * var(--col-width))`,
                height: `calc(${CONFIG.END_HOUR - CONFIG.START_HOUR} * var(--hour-height))`
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
                        className={`absolute w-full border-t border-gray-400 print:border-gray-300 solid ${offset === 0 ? "print:hidden" : ""}`}
                        style={{ top: `calc(${offset} * 30 * var(--hour-height) / 60)` }}
                    />
                ))}
            </div>

            {/* 縦線 */}
            {venues.map((_, i) => (
                <div
                    key={i}
                    className="absolute border-r border-gray-200 h-full top-0 print:hidden"
                    style={{
                        left: `calc(${i + 1} * var(--col-width))`,
                    }}
                />
            ))}

            {/* 特別な横断イベント: 一般公開開始 & 終了 */}
            {[
                { start: "10:15", end: "10:30", text: "一般公開開始 10:00" },
                { start: "16:30", end: "16:45", text: "一般公開終了 16:30" }
            ].map((item, idx) => {
                const startMins = timeToMinutes(item.start);
                const endMins = timeToMinutes(item.end);
                const durationMins = endMins - startMins;

                return (
                    <div
                        key={`banner-${idx}`}
                        className="absolute px-0 py-1 z-10 print:z-[70] pointer-events-none"
                        style={{
                            left: 0,
                            width: `calc(${venues.length} * var(--col-width))`,
                            top: `calc(${startMins} * var(--hour-height) / 60)`,
                            height: `calc(${durationMins} * var(--hour-height) / 60)`,
                        }}
                    >
                        <div className="w-full h-full bg-gray-600/90 flex items-center justify-around shadow-md">
                            {[...Array(3)].map((_, i) => (
                                <span
                                    key={i}
                                    className="text-white font-bold tracking-widest whitespace-nowrap print-public-banner-text"
                                    style={{ fontSize: 'var(--fs-banner)' }}
                                >
                                    {item.text}
                                </span>
                            ))}
                        </div>
                    </div>
                );
            })}

            {/* イベントカード */}
            {events.map((evt) => {
                const startMins = timeToMinutes(evt.start);
                const endMins = timeToMinutes(evt.end);
                const durationMins = endMins - startMins;

                // colorId が無いときはデフォルト色 or 黒
                const accentColor = evt.colorId ? CATEGORY_COLORS[evt.colorId] : "#092040";

                return (
                    <div
                        key={evt.id}
                        className="absolute px-1 py-[2px] print:z-[65]"
                        style={{
                            left: `calc(${evt.venueIndex} * var(--col-width))`,
                            top: `calc(${startMins} * var(--hour-height) / 60)`,
                            width: `var(--col-width)`,
                            height: `max(calc(${durationMins} * var(--hour-height) / 60), var(--min-card-height))`,
                        }}
                    >
                        <div
                            className="w-full h-full rounded-md shadow-md p-2 overflow-hidden flex flex-col justify-start hover:brightness-105 transition-all text-white"
                            style={{ backgroundColor: accentColor }}
                        >
                            <p
                                className="text-white/90 font-mono mb-0.5 leading-none print-event-time"
                                style={{ fontSize: 'var(--fs-event-time)' }}
                            >
                                {evt.start} - {evt.end}
                            </p>
                            <h3
                                className="font-bold leading-tight whitespace-pre-wrap print-event-title"
                                style={{ fontSize: 'var(--fs-event-title)' }}
                            >
                                {evt.title}
                            </h3>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
