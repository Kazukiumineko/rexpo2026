"use client";

import { useState } from "react";
import Header from "@/components/MainUI/02_Header";
import FooterBar from "@/components/MainUI/10_FooterBar";
import Top from "@/components/ApplicationUI/Top";
import Download from "@/components/ApplicationUI/Download";

export default function TimeTablePage() {
    const [showHeader] = useState(true);

    return (
        <main className="flex flex-col min-h-screen w-full bg-white overflow-hidden">
            {/* ヘッダー */}
            <Header isVisible={showHeader} invert />

            <div className="flex-grow">

                {/* メインコンテンツ */}
                <Top />
                <Download />
            </div>

            {/* フッター */}
            <FooterBar variant="black" />
        </main>
    );
}