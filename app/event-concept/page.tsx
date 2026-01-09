"use client";

import { useState, useEffect } from "react";

// ★UIコンポーネントのインポート
// (フォルダ構成が components/MainUI になっている前提です)
import Header from "@/components/MainUI/02_Header";
import FooterBar from "@/components/MainUI/10_FooterBar";
import Introduction from "@/components/EventConceptUI/Introduction";
import Topic from "@/components/EventConceptUI/Topic";
import Message from "@/components/EventConceptUI/Message";
import Pic from "@/components/EventConceptUI/Pic";
import Jump from "@/components/EventConceptUI/Jump";

export default function EventConceptPage() {

    const [showHeader, setShowHeader] = useState(true);

    return (
        <main className="relative w-full min-h-screen text-white overflow-x-hidden">
            {/* 固定背景画像 */}
            <div className="fixed inset-0 z-0">
                <div className="relative w-full h-full">
                    <img
                        src="/event-concept-page/Introduction.jpg"
                        alt="Background"
                        className="object-cover w-full h-full"
                    />
                    {/* 暗くするためのオーバーレイ */}
                    <div className="absolute inset-0 bg-black/80" />
                </div>
            </div>

            {/* コンテンツラッパー (z-indexを上げて背景の上に表示) */}
            <div className="relative z-10 w-full">
                <Header isVisible={showHeader} />

                <Introduction />
                <Pic />
                <Message />
                <Topic />
                <Jump />
                <FooterBar />
            </div>

        </main>
    );
}