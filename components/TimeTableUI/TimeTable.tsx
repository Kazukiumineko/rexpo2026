"use client";

import { useRef, useState } from "react";
import { venues, CONFIG } from "./Data";
import ScrollHint from "./ScrollHint";
import TableHeader from "./TableHeader";
import TimeColumn from "./TimeColumn";
import EventGrid from "./EventGrid";

export default function TimeTable() {
    // ヘッダー（会場名）のスクロール位置を同期させるためのRef
    const headerScrollRef = useRef<HTMLDivElement>(null);
    const bodyScrollRef = useRef<HTMLDivElement>(null);

    // ▼ スクロールヒントの表示状態
    const [showHint, setShowHint] = useState(true);

    // ボディ側のスクロールに合わせてヘッダー側をスクロールさせる
    // ＋ スクロール検知でヒントを消す
    const handleScroll = () => {
        if (headerScrollRef.current && bodyScrollRef.current) {
            // 同期処理
            headerScrollRef.current.scrollLeft = bodyScrollRef.current.scrollLeft;

            // ▼ ヒントを消す処理 (少しでもスクロールしたら)
            if (showHint && bodyScrollRef.current.scrollLeft > 10) {
                setShowHint(false);
            }
        }
    };

    return (
        <section className="w-full bg-[#f1f1f1] py-12 px-0 md:px-2 font-jp">

            <div className="max-w-[1600px] mx-auto relative min-h-[80vh]">

                {/* ▼ ScrollHint ギミック */}
                <ScrollHint showHint={showHint} />

                {/* ヘッダーエリア */}
                <TableHeader scrollRef={headerScrollRef} />

                {/* ボディエリア (横スクロール本体) */}
                <div
                    className="overflow-x-auto overflow-y-hidden custom-scrollbar bg-white relative"
                    ref={bodyScrollRef}
                    onScroll={handleScroll}
                >
                    <div
                        className="relative flex"
                        style={{
                            width: CONFIG.TIME_COL_WIDTH + venues.length * CONFIG.COLUMN_WIDTH,
                            height: (CONFIG.END_HOUR - CONFIG.START_HOUR) * CONFIG.HOUR_HEIGHT,
                        }}
                    >
                        {/* 左側：時間軸 (Sticky left) */}
                        <TimeColumn />

                        {/* 右側：メイングリッド */}
                        <EventGrid />
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