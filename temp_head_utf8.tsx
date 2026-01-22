"use client";
import { useRef, useState, useEffect } from "react";
import { venues } from "./data";
import ScrollHint from "./scroll-hint";
import TableHeader from "./table-header";
import PrintOverlay from "./print-overlay";
import PrintModal from "./print-modal";
import TableFooter from "./table-footer";
import ZoomBar from "./zoom-bar";

export default function TimeTable() {
    // 繝倥ャ繝繝ｼ・井ｼ壼ｴ蜷搾ｼ峨・繧ｹ繧ｯ繝ｭ繝ｼ繝ｫ菴咲ｽｮ繧貞酔譛溘＆縺帙ｋ縺溘ａ縺ｮRef
    const headerScrollRef = useRef<HTMLDivElement>(null);
    const bodyScrollRef = useRef<HTMLDivElement>(null);

    // 笆ｼ 繧ｹ繧ｯ繝ｭ繝ｼ繝ｫ繝偵Φ繝医・陦ｨ遉ｺ迥ｶ諷・    const [showHint, setShowHint] = useState(true);

    // 笆ｼ 繧ｺ繝ｼ繝蛟咲紫 (繧ｹ繝槭・逕ｨ)
    const [zoomScale, setZoomScale] = useState(1);

    // 繝吶・繧ｹ繧ｵ繧､繧ｺ螳夂ｾｩ
    const BASE_SIZES = {
        colWidth: 200,      // PC繝吶・繧ｹ縺縺後√せ繝槭・縺ｧ縺ｯCSS縺ｧ隱ｿ謨ｴ縺輔ｌ縺ｦ縺・ｋ縺九ｂ・溯ｦ∫｢ｺ隱・        hourHeight: 180,
        headerHeight: 60,
        timeColWidth: 60,
        minCardHeight: 40
    };

    // ... handleScroll ...


    // 繝懊ョ繧｣蛛ｴ縺ｮ繧ｹ繧ｯ繝ｭ繝ｼ繝ｫ縺ｫ蜷医ｏ縺帙※繝倥ャ繝繝ｼ蛛ｴ繧偵せ繧ｯ繝ｭ繝ｼ繝ｫ縺輔○繧・    // ・・繧ｹ繧ｯ繝ｭ繝ｼ繝ｫ讀懃衍縺ｧ繝偵Φ繝医ｒ豸医☆
    const handleScroll = () => {
        if (headerScrollRef.current && bodyScrollRef.current) {
            // 蜷梧悄蜃ｦ逅・            headerScrollRef.current.scrollLeft = bodyScrollRef.current.scrollLeft;

            // 笆ｼ 繝偵Φ繝医ｒ豸医☆蜃ｦ逅・(蟆代＠縺ｧ繧ゅせ繧ｯ繝ｭ繝ｼ繝ｫ縺励◆繧・
            if (showHint && bodyScrollRef.current.scrollLeft > 10) {
                setShowHint(false);
            }
        }
    };

    // 笆ｼ 繝峨Λ繝・げ繧ｹ繧ｯ繝ｭ繝ｼ繝ｫ螳溯｣・    const [isDragging, setIsDragging] = useState(false);
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
        const walk = (x - startX) * 1.5; // 繝峨Λ繝・げ蛟咲紫
        bodyScrollRef.current.scrollLeft = scrollLeftState - walk;
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    // 笆ｼ 邵ｦ繧ｹ繧ｯ繝ｭ繝ｼ繝ｫ逶｣隕悶さ繝ｼ繝ｫ繝舌ャ繧ｯ
    const handleFooterInView = (inView: boolean) => {
        if (inView && showHint) {
            setShowHint(false);
        }
    };

    // 笆ｼ 蜊ｰ蛻ｷ繝｢繝ｼ繝繝ｫ髢｢騾｣
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
            <section
                className="w-full pt-12 pb-2 md:py-12 px-0 md:px-2 font-jp relative print:py-0 print:bg-[#ffffff]"
                style={{
                    "--col-width": `${BASE_SIZES.colWidth * zoomScale}px`,
                    "--hour-height": `${BASE_SIZES.hourHeight * zoomScale}px`,
                    "--header-height": `${BASE_SIZES.headerHeight * zoomScale}px`,
                    "--time-col-width": `${BASE_SIZES.timeColWidth * zoomScale}px`,
                    "--min-card-height": `${BASE_SIZES.minCardHeight * zoomScale}px`,
                    "--zoom-scale": zoomScale,
                    "--table-bg": "#f1f1f1",
                    "--print-scale": printScale,
                    backgroundColor: "var(--table-bg)",
                } as React.CSSProperties}
            >

                <div className="max-w-[1600px] mx-auto relative min-h-[80vh] print:min-h-0 print-container">

                    {/* 笆ｼ 繧ｺ繝ｼ繝繝舌・ (繧ｹ繝槭・縺ｮ縺ｿ) */}
                    <ZoomBar scale={zoomScale} onScaleChange={setZoomScale} />

                    {/* 笆ｼ ScrollHint 繧ｮ繝溘ャ繧ｯ */}
                    <div className="print:hidden">
                        <ScrollHint showHint={showHint} />
                    </div>

                    <div className="relative">
                        {/* 繝倥ャ繝繝ｼ繧ｨ繝ｪ繧｢ (Web陦ｨ遉ｺ逕ｨ) */}
                        <TableHeader scrollRef={headerScrollRef} />

                        {/* 繝懊ョ繧｣繧ｨ繝ｪ繧｢ (讓ｪ繧ｹ繧ｯ繝ｭ繝ｼ繝ｫ譛ｬ菴・ */}
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
                            {/* 繧ｳ繝ｳ繝・Φ繝・Λ繝・ヱ繝ｼ (蜈ｨ蟷・ */}
                            <PrintOverlay />
                        </div>
                    </div>

                    <div className="hidden print:block text-right mt-2 mr-1 text-[8px] text-gray-500">
                        譛邨よ峩譁ｰ・嘴process.env.NEXT_PUBLIC_LAST_UPDATED}
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
                
                /* 繧ｹ繧ｱ繝ｼ繝ｪ繝ｳ繧ｰ驕ｩ逕ｨ */
                transform: scale(var(--print-scale));
                transform-origin: top left;
                width: calc(100% / var(--print-scale)) !important;
            }
            /* 蜊ｰ蛻ｷ譎ゅ・繧ｹ繧ｯ繝ｭ繝ｼ繝ｫ辟｡蜉ｹ蛹悶＠縺ｦ隕句・繧碁Κ蛻・ｒ螻暮幕 */
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
            /* 繧ｳ繝ｳ繝・リ縺ｮ繝ｪ繧ｻ繝・ヨ (scale縺ｯ繧・ａ縺ｦ螟画焚蛻ｶ蠕｡縺ｫ縺吶ｋ縺後∝・繧峨↑縺・ｴ蜷医・螟壼ｰ壮cale縺励※繧０K) */
            .print-container {
                width: 100% !important;
                max-width: none !important;
                margin: 0 !important;
                transform: none !important; /* 螟画焚縺ｧ繧ｵ繧､繧ｺ蛻ｶ蠕｡縺吶ｋ縺ｮ縺ｧ繧ｹ繧ｱ繝ｼ繝ｫ荳崎ｦ・*/
            }
            
            /* 繝輔か繝ｳ繝医し繧､繧ｺ蛟句挨隱ｿ謨ｴ */
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
            
            /* 荳崎ｦ√↑菴咏區繧偵き繝・ヨ & 閭梧勹逋ｽ */
            section {
                padding: 0 !important;
                margin: 0 !important;
                background-color: white !important;
            }
        }
      `}</style>
            </section >

            {/* 繝輔ャ繧ｿ繝ｼ繧ｨ繝ｪ繧｢ (蛻･繧ｻ繧ｯ繧ｷ繝ｧ繝ｳ) */}
            <TableFooter
                onPrintClick={handlePrintClick}
                lastUpdated={process.env.NEXT_PUBLIC_LAST_UPDATED}
                onInView={handleFooterInView}
            />

            {/* 蜊ｰ蛻ｷ繧ｵ繧､繧ｺ驕ｸ謚槭Δ繝ｼ繝繝ｫ */}
            <PrintModal
                isOpen={isPrintModalOpen}
                onClose={() => setIsPrintModalOpen(false)}
                onPrint={handlePrint}
            />
        </>
    );
}
