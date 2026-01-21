"use client";

import { useState, useEffect } from "react";

// ★UIコンポーネントのインポート
// (フォルダ構成が components/MainUI になっている前提です)
import Header from "@/components/main-ui/header";
import FooterBar from "@/components/main-ui/footer-bar";
import Introduction from "@/components/event-concept-ui/introduction";
import Topic from "@/components/event-concept-ui/topic";
import Message from "@/components/event-concept-ui/message";
import Pic from "@/components/event-concept-ui/pic";
import Jump from "@/components/event-concept-ui/jump";

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