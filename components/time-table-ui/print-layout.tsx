"use client";

import PrintOverlay from "./print-overlay";

interface PrintLayoutProps {
    scale: number;
    lastUpdated?: string;
}

export default function PrintLayout({ scale, lastUpdated }: PrintLayoutProps) {
    return (
        <div className="hidden print:block absolute top-0 left-0 w-full bg-white z-[9999]">
            <div
                className="print-layout-container w-full"
                style={{
                    "--print-scale": scale,
                    "--col-width": "90px",
                    "--hour-height": "94px",
                    "--time-col-width": "40px",
                    "--header-height": "40px",
                    "--min-card-height": "20px",
                    "--table-bg": "white",
                } as React.CSSProperties}
            >
                <div className="print-structure-wrapper" style={{
                    transform: "scale(var(--print-scale))",
                    transformOrigin: "top left",
                    width: "calc(100% / var(--print-scale))"
                }}>
                    <div className="print-scroll-container">
                        {/* 本体グリッド (PrintOverlayが内部でヘッダー等も持っている) */}
                        <PrintOverlay />
                    </div>

                    <div className="text-right mt-2 mr-1 text-[8px] text-gray-500">
                        最終更新：{lastUpdated}
                    </div>
                </div>
            </div>

            <style jsx global>{`
                @media print {
                    @page {
                        size: landscape;
                        margin: 5mm;
                    }
                    body {
                        -webkit-print-color-adjust: exact;
                        print-color-adjust: exact;
                        background-color: white !important;
                        overflow: visible !important;
                    }
                    
                    /* メインコンテンツ以外の非表示は layout.tsx や globals.css レベルで行われているか、
                       親の time-table.tsx 側で制御する */

                    /* 変数定義の強制適用 */
                    .print-layout-container {
                        --col-width: 90px !important;
                        --hour-height: 94px !important;
                        --time-col-width: 40px !important;
                        --header-height: 40px !important;
                        --min-card-height: 20px !important;
                        --table-bg: white !important;
                        background-color: white !important;
                        width: 100% !important;
                    }

                    .print-structure-wrapper {
                        width: calc(100% / var(--print-scale, 1)) !important;
                        transform: scale(var(--print-scale, 1)) !important;
                        transform-origin: top left !important;
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
                }
            `}</style>
        </div>
    );
}
