"use client";
import { useRef, useState, useEffect } from "react";
import { venues } from "./data";
import ScrollHint from "./scroll-hint";
import TableHeader from "./table-header";
import PrintOverlay from "./print-overlay";
import PrintModal from "./print-modal";
import TableFooter from "./table-footer";
import ZoomBar from "./zoom-bar";
import PrintLayout from "./print-layout";

export default function TimeTable() {
    // ヘッダー（会場名）のスクロール位置を同期させるためのRef
    const headerScrollRef = useRef<HTMLDivElement>(null);
    const bodyScrollRef = useRef<HTMLDivElement>(null);

    // ▼ スクロールヒントの表示状態
    const [showHint, setShowHint] = useState(true);

    // ▼ ズーム倍率 (スマホ用)
    const [zoomScale, setZoomScale] = useState(1);

    useEffect(() => {
        // 初回ロード時のデフォルト倍率設定
        // PC (>= 768px): 120%, スマホ (< 768px): 90%
        if (window.innerWidth >= 768) {
            setZoomScale(1.2);
        } else {
            setZoomScale(0.9);
        }
    }, []);

    // ベースサイズ定義
    const BASE_SIZES = {
        colWidth: 200,      // PCベースだが、スマホではCSSで調整されているかも？要確認
        hourHeight: 180,
        headerHeight: 60,
        timeColWidth: 60,
        minCardHeight: 40
    };

    // ... handleScroll ...


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

    // ▼ 縦スクロール監視コールバック
    const handleFooterInView = (inView: boolean) => {
        if (inView && showHint) {
            setShowHint(false);
        }
    };

    // ▼ 印刷モーダル関連
    const [isPrintModalOpen, setIsPrintModalOpen] = useState(false);
    const [printScale, setPrintScale] = useState(1);

    const handlePrintClick = () => {
        setIsPrintModalOpen(true);
    };

    const handlePrint = (scale: number) => {
        setPrintScale(scale);
        setIsPrintModalOpen(false);
        setTimeout(() => {
            window.print();
        }, 100);
    };

    return (
        <>
            {/* 印刷専用レイアウト (Web変更の影響を受けず、Git上の固定レイアウトを維持) */}
            <PrintLayout
                scale={printScale}
                lastUpdated={process.env.NEXT_PUBLIC_LAST_UPDATED}
            />

            <section
                className="w-full pt-4 pb-2 md:pt-6 md:pb-4 px-0 md:px-2 font-jp relative print:hidden"
                style={{
                    "--col-width": `${BASE_SIZES.colWidth * zoomScale}px`,
                    "--hour-height": `${BASE_SIZES.hourHeight * zoomScale}px`,
                    "--header-height": `${BASE_SIZES.headerHeight * zoomScale}px`,
                    "--time-col-width": `${BASE_SIZES.timeColWidth * zoomScale}px`,
                    "--min-card-height": `${BASE_SIZES.minCardHeight * zoomScale}px`,
                    "--zoom-scale": zoomScale,

                    /* フォントサイズ変数 (Web用動的計算 - ズームスライダー連動) */
                    "--fs-venue": `calc(14px * ${zoomScale})`,
                    "--fs-time-col": `calc(12px * ${zoomScale})`,
                    "--fs-banner": `calc(18px * ${zoomScale})`,
                    "--fs-event-time": `calc(10px * ${zoomScale})`,
                    "--fs-event-title": `calc(12px * ${zoomScale})`,

                    "--table-bg": "#f1f1f1",
                    "--print-scale": printScale,
                    backgroundColor: "var(--table-bg)",
                } as React.CSSProperties}
            >

                <div className="max-w-[1600px] mx-auto relative min-h-[80vh]">

                    {/* ▼ ScrollHint ギミック (スライダー移動中も邪魔にならないよう最上部に) */}
                    <div>
                        <ScrollHint showHint={showHint} />
                    </div>

                    {/* ▼ スライダーと固定ヘッダー (まとめてSticky化) */}
                    <div className="sticky top-0 z-[95] bg-[#f1f1f1] w-full print:hidden pb-1 pt-14 lg:pt-[72px]">
                        {/* ▼ ズームバー (スマホのみ -> PCも表示) */}
                        <ZoomBar scale={zoomScale} onScaleChange={setZoomScale} />

                        {/* ヘッダーエリア (Web表示用) */}
                        <TableHeader scrollRef={headerScrollRef} />
                    </div>

                    <div className="relative">
                        {/* ボディエリア (横スクロール本体) */}
                        <div
                            className={`overflow-x-auto overflow-y-hidden custom-scrollbar relative select-none ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
                            ref={bodyScrollRef}
                            onScroll={handleScroll}
                            onMouseDown={handleMouseDown}
                            onMouseMove={handleMouseMove}
                            onMouseUp={handleMouseUp}
                            onMouseLeave={handleMouseUp}
                            style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
                        >
                            {/* コンテンツラッパー (全幅) */}
                            <PrintOverlay />
                        </div>
                    </div>

                    <div className="hidden text-right mt-2 mr-1 text-[8px] text-gray-500">
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
      `}</style>
            </section >

            {/* フッターエリア (別セクション) - 印刷時は非表示 */}
            <div className="print:hidden">
                <TableFooter
                    onPrintClick={handlePrintClick}
                    lastUpdated={process.env.NEXT_PUBLIC_LAST_UPDATED}
                    onInView={handleFooterInView}
                />
            </div>

            {/* 印刷サイズ選択モーダル */}
            <PrintModal
                isOpen={isPrintModalOpen}
                onClose={() => setIsPrintModalOpen(false)}
                onPrint={handlePrint}
            />
        </>
    );
}
