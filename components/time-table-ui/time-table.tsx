"use client";

import { useRef, useState, useEffect } from "react";
import { venues, CONFIG } from "./data";
import ScrollHint from "./scroll-hint";
import TableHeader from "./table-header";
import TimeColumn from "./time-column";
import EventGrid from "./event-grid";
import { Printer } from "lucide-react";

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

    const handlePrint = () => {
        window.print();
    };

    return (
        <section
            className="w-full py-12 px-0 md:px-2 font-jp relative print:py-0 print:bg-[#ffffff]"
            style={{
                "--col-width": "200px",
                "--hour-height": "180px",
                "--header-height": "60px",
                "--time-col-width": "60px",
                "--min-card-height": "40px",
                "--table-bg": "#f1f1f1",
                backgroundColor: "var(--table-bg)",
            } as React.CSSProperties}
        >

            <div className="max-w-[1600px] mx-auto relative min-h-[80vh] print-container">


                {/* ▼ ScrollHint ギミック */}
                <div className="print:hidden">
                    <ScrollHint showHint={showHint} />
                </div>

                <div className="relative">
                    {/* ヘッダーエリア (Web表示用) */}
                    <TableHeader scrollRef={headerScrollRef} />

                    {/* ボディエリア (横スクロール本体) */}
                    <div
                        className={`overflow-x-auto overflow-y-hidden custom-scrollbar relative select-none print-scroll-container ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
                        ref={bodyScrollRef}
                        onScroll={handleScroll}
                        onMouseDown={handleMouseDown}
                        onMouseMove={handleMouseMove}
                        onMouseUp={handleMouseUp}
                        onMouseLeave={handleMouseUp}
                        style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
                    >
                        {/* コンテンツラッパー (全幅) */}
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
                                        {venue}
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
                    </div>
                </div>

                <div className="mt-4 px-4 flex flex-col md:flex-row justify-between items-end gap-4 print:hidden">
                    <div className="flex items-center gap-4">
                        <button
                            onClick={handlePrint}
                            className="flex items-center gap-2 bg-[#092040] text-white px-4 py-2 rounded-lg hover:bg-[#092040]/90 transition-all hover:scale-105 active:scale-95 shadow-lg"
                        >
                            <Printer size={20} />
                            <span className="font-bold">印刷する</span>
                        </button>
                        <span className="text-sm text-gray-500 font-medium">
                            最終更新：{process.env.NEXT_PUBLIC_LAST_UPDATED}
                        </span>
                    </div>

                    <p
                        ref={footerRef}
                        className="text-xs text-gray-500 text-right"
                    >
                        ※ スケジュールは進行状況により前後する可能性があります。<br />
                        ※ 横にスクロールして全会場を確認できます。
                    </p>
                </div>

                <div className="hidden print:block text-right mt-2 mr-1 text-[8px] text-gray-500">
                    最終更新：{process.env.NEXT_PUBLIC_LAST_UPDATED}
                </div>
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

        @media print {
            @page {
                size: landscape;
                margin: 5mm;
            }
            body {
                -webkit-print-color-adjust: exact;
                print-color-adjust: exact;
                background-color: white !important;
            }
            section {
                --col-width: 90px !important;
                --hour-height: 94px !important;
                --time-col-width: 40px !important;
                --header-height: 40px !important;
                --min-card-height: 20px !important;
                --table-bg: white !important;
                background-color: white !important;
            }
            /* 印刷時はスクロール無効化して見切れ部分を展開 */
            .print-scroll-container {
                overflow: visible !important;
                display: block !important;
                width: auto !important;
                background-color: white !important;
            }
            .print-table-header {
                overflow: visible !important;
                position: relative !important;
                width: auto !important;
                background-color: white !important;
                z-index: 100 !important;
            }
            .print-time-column {
                position: relative !important;
                z-index: auto !important;
                border-right: 1px solid #ccc !important;
                background-color: white !important;
            }
            /* コンテナのリセット (scaleはやめて変数制御にするが、入らない場合は多少scaleしてもOK) */
            .print-container {
                width: 100% !important;
                max-width: none !important;
                margin: 0 !important;
                transform: none !important; /* 変数でサイズ制御するのでスケール不要 */
            }
            
            /* フォントサイズ個別調整 */
            .print-venue-header {
                font-size: 11px !important;
                line-height: normal !important;
            }
            .print-grid-offset {
                margin-top: calc(var(--hour-height) * -0.5) !important;
            }
            .print-time-label {
                font-size: 10px !important;
                line-height: normal !important;
            }
            .print-event-time {
                font-size: 8px !important;
                line-height: 1.1 !important;
            }
            .print-event-title {
                font-size: 9px !important;
                line-height: 1.1 !important;
            }
            .print-public-banner-text {
                font-size: 9px !important;
                line-height: normal !important;
            }
            
            /* 不要な余白をカット & 背景白 */
            section {
                padding: 0 !important;
                margin: 0 !important;
                background-color: white !important;
            }
        }
      `}</style>
        </section >
    );
}
