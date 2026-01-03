"use client";

import { useState, useEffect } from "react";

// ★UIコンポーネントのインポート
// (フォルダ構成が components/MainUI になっている前提です)
import Header from "@/components/MainUI/02_Header";
import FooterBar from "@/components/MainUI/10_FooterBar";
import Introduction from "@/components/EventConceptUI/Introduction";
import ThemeMessage from "@/components/EventConceptUI/ThemeMessage";

export default function EventConceptPage() {

    const [showHeader, setShowHeader] = useState(true);

    return (
        <main className="relative w-full bg-white min-h-screen">

            <Header isVisible={showHeader} />

            <Introduction />

            <ThemeMessage />

            <FooterBar />

        </main>
    );
}