"use client";

import { useRef, useState, useEffect } from "react";
import { venues, CONFIG } from "./data";
import ScrollHint from "./scroll-hint";
import TableHeader from "./table-header";
import TimeColumn from "./time-column";
import EventGrid from "./event-grid";

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

    // ▼ ドラッグスクロール実装
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeftState, setScrollLeftState] = useState(0);

    const handleMouseDown = (e: React.MouseEvent) => {
        if (!bodyScrollRef.current) return;
        setIsDragging(true);
        setStartX(e.pageX - bodyScrollRef.current.offsetLeft);
        setScrollLeftState(bodyScrollRef.current.scrollLeft);
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging || !bodyScrollRef.current) return;
        e.preventDefault();
        const x = e.pageX - bodyScrollRef.current.offsetLeft;
        const walk = (x - startX) * 1.5; // ドラッグ倍率
        bodyScrollRef.current.scrollLeft = scrollLeftState - walk;
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    // ▼ 縦スクロール監視（表の下端が見えたらヒントを消す）
    const footerRef = useRef<HTMLParagraphElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && showHint) {
                    setShowHint(false);
                }
            },
            { threshold: 0.1 } // 10%見えたら反応
        );

        if (footerRef.current) {
            observer.observe(footerRef.current);
        }

        return () => {
            if (footerRef.current) {
                observer.unobserve(footerRef.current);
            }
        };
    }, [showHint]);

    return (
        <section className="w-full bg-[#f1f1f1] py-12 px-0 md:px-2 font-jp">

            <div className="max-w-[1600px] mx-auto relative min-h-[80vh]">

                {/* ▼ ScrollHint ギミック */}
                <ScrollHint showHint={showHint} />

                {/* ヘッダーエリア */}
                <TableHeader scrollRef={headerScrollRef} />

                {/* ボディエリア (横スクロール本体) */}
                <div
                    className={`overflow-x-auto overflow-y-hidden custom-scrollbar bg-white relative ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
                    ref={bodyScrollRef}
                    onScroll={handleScroll}
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                    onMouseLeave={handleMouseUp}
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

                <p
                    ref={footerRef}
                    className="mt-4 text-xs text-gray-500 text-right px-4"
                >
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