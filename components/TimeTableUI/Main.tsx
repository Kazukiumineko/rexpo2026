"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { venues, events, CONFIG } from "./Data";

// 時間文字列 ("HH:MM") を 分（startからの経過時間）に変換するヘルパー関数
const timeToMinutes = (timeStr: string) => {
    const [h, m] = timeStr.split(":").map(Number);
    return (h - CONFIG.START_HOUR) * 60 + m;
};

export default function TimeTable() {
    // ヘッダー（会場名）のスクロール位置を同期させるためのRef
    const headerScrollRef = useRef<HTMLDivElement>(null);
    const bodyScrollRef = useRef<HTMLDivElement>(null);

    // ボディ側のスクロールに合わせてヘッダー側をスクロールさせる
    const handleScroll = () => {
        if (headerScrollRef.current && bodyScrollRef.current) {
            headerScrollRef.current.scrollLeft = bodyScrollRef.current.scrollLeft;
        }
    };

    return (
        <section className="w-full bg-[#f1f1f1] py-12 px-0 md:px-2 font-jp">
            <div className="max-w-[1600px] mx-auto relative">

                {/* 
                 * 1. ヘッダーエリア (Sticky) 
                 * ウィンドウのスクロールに対して追従 (top属性で固定位置調整)
                 * ナビゲーションバーの高さ分（スマホ:14/56px, PC:18/72px）ずらす
                 */}
                <div
                    className="sticky top-14 lg:top-[72px] z-[70] bg-[#f1f1f1] w-full overflow-hidden shadow-sm"
                    ref={headerScrollRef}
                >
                    <div
                        className="flex border-b border-gray-300 bg-[#092040]"
                        style={{ width: CONFIG.TIME_COL_WIDTH + venues.length * CONFIG.COLUMN_WIDTH }}
                    >
                        {/* 左上の角（時間軸の真上） */}
                        <div
                            className="flex-shrink-0 bg-[#092040] border-r border-white/20 z-20 sticky left-0"
                            style={{ width: CONFIG.TIME_COL_WIDTH, height: CONFIG.HEADER_HEIGHT }}
                        ></div>

                        {/* 会場名ヘッダー列 */}
                        {venues.map((venue, i) => (
                            <div
                                key={i}
                                className="flex-shrink-0 bg-[#092040] text-white text-sm font-bold flex items-center justify-center text-center px-2 border-r border-white/20 last:border-none"
                                style={{ width: CONFIG.COLUMN_WIDTH, height: CONFIG.HEADER_HEIGHT }}
                            >
                                {venue}
                            </div>
                        ))}
                    </div>
                </div>

                {/* 
                 * 2. ボディエリア (横スクロール本体)
                 * ここを横スクロールすると、handleScrollでヘッダーも連動する
                 */}
                <div
                    className="overflow-x-auto overflow-y-hidden custom-scrollbar bg-white relative"
                    ref={bodyScrollRef}
                    onScroll={handleScroll}
                >
                    <div
                        className="relative flex"
                        style={{
                            width: CONFIG.TIME_COL_WIDTH + venues.length * CONFIG.COLUMN_WIDTH,
                        }}
                    >
                        {/* 左側：時間軸 (Sticky left) */}
                        <div
                            className="flex-shrink-0 bg-[#f1f1f1] border-r border-gray-200 z-40 sticky left-0"
                            style={{ width: CONFIG.TIME_COL_WIDTH, height: (CONFIG.END_HOUR - CONFIG.START_HOUR) * CONFIG.HOUR_HEIGHT }}
                        >
                            <div className="relative w-full h-full">
                                {Array.from({ length: (CONFIG.END_HOUR - CONFIG.START_HOUR) * 2 + 1 }, (_, i) => {
                                    const totalMinutes = i * 30;
                                    const hour = CONFIG.START_HOUR + Math.floor(totalMinutes / 60);
                                    const minute = totalMinutes % 60;
                                    return { hour, minute, offset: i };
                                }).map(({ hour, minute, offset }) => (
                                    <div
                                        key={`${hour}-${minute}`}
                                        className="absolute w-full text-right pr-2 text-xs font-bold text-gray-500 transform -translate-y-1/2"
                                        style={{ top: offset * 30 * (CONFIG.HOUR_HEIGHT / 60) }}
                                    >
                                        {hour === 9 && minute === 0 ? "" : `${hour}:${minute === 0 ? "00" : "30"}`}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* 右側：イベント配置エリア */}
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
                                    const totalMinutes = i * 30;
                                    const offset = i;
                                    const isHour = totalMinutes % 60 === 0;
                                    return { offset, isHour };
                                }).map(({ offset, isHour }) => (
                                    <div
                                        key={`grid-${offset}`}
                                        className={`absolute w-full border-t ${isHour ? "border-gray-200 border-dashed" : "border-gray-50 border-dotted"}`}
                                        style={{ top: offset * 30 * (CONFIG.HOUR_HEIGHT / 60) }}
                                    />
                                ))}
                            </div>

                            {/* 縦線 */}
                            {venues.map((_, i) => (
                                <div
                                    key={`line-${i}`}
                                    className="absolute top-0 bottom-0 border-r border-gray-100"
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

                                return (
                                    <motion.div
                                        key={evt.id}
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        whileHover={{ scale: 1.02, zIndex: 60, backgroundColor: "#EEF2FF" }}
                                        className="absolute px-1 py-1"
                                        style={{
                                            left: evt.venueIndex * CONFIG.COLUMN_WIDTH,
                                            top: top,
                                            width: CONFIG.COLUMN_WIDTH,
                                            height: height,
                                        }}
                                    >
                                        <div className="w-full h-full bg-white border-l-4 border-blue-600 rounded-r-md shadow-sm border-t border-b border-r border-gray-200 p-2 overflow-hidden flex flex-col justify-start hover:shadow-md transition-all cursor-pointer">
                                            <p className="text-[10px] md:text-xs text-gray-500 font-mono mb-0.5 leading-none">
                                                {evt.start} - {evt.end}
                                            </p>
                                            <h3 className="text-xs md:text-sm font-bold text-gray-800 leading-tight line-clamp-3 whitespace-pre-wrap">
                                                {evt.title}
                                            </h3>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </div>

                <p className="mt-4 text-xs text-gray-500 text-right px-4">
                    ※ スケジュールは進行状況により前後する可能性があります。<br />
                    ※ 横にスクロールして全会場を確認できます。
                </p>
            </div>

            <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 10px;
          height: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #c1c1c1;
          border-radius: 5px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #a8a8a8;
        }
      `}</style>
        </section>
    );
}