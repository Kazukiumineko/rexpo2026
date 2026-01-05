"use client";

import { useState } from "react";
import Header from "@/components/MainUI/02_Header";
import FooterBar from "@/components/MainUI/10_FooterBar";
import StageTop from "@/components/StageConceptUI/top";
import GlobalStage from "@/components/StageConceptUI/GlobalStage";
import GlobalInfo from "@/components/StageConceptUI/GlobalInfo";

export default function StageConceptPage() {
    // ヘッダーを常に表示
    const [showHeader] = useState(true);

    return (
        <main className="relative w-full min-h-screen text-white">
            {/* 固定背景画像 */}
            <div className="fixed inset-0 z-0">
                <div className="relative w-full h-full">
                    <img
                        src="/event-concept-page/Introduction.jpg"
                        alt="Stage Concept Background"
                        className="object-cover w-full h-full"
                    />
                    {/* 暗くするためのオーバーレイ */}
                    <div className="absolute inset-0 bg-black/80" />
                </div>
            </div>

            {/* コンテンツラッパー */}
            <div className="relative z-10 w-full flex flex-col min-h-screen">
                <Header isVisible={showHeader} />

                {/* flex-growでフッターを下に押し下げる */}
                <div className="flex-grow">
                    <StageTop />
                    {/* ここに他のセクション（Infoなど）を追加していきます */}
                    <GlobalStage />
                    <GlobalInfo />
                </div>

                <FooterBar />
            </div>
        </main>
    );
}