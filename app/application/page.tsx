"use client";

import UnderConstruction from "@/components/Shared/UnderConstruction";
import Header from "@/components/MainUI/02_Header";
import FooterBar from "@/components/MainUI/10_FooterBar";
import { useState } from "react";

export default function ApplicationPage() {
    const [showHeader] = useState(true);

    return (
        <main className="flex flex-col min-h-screen w-full bg-white overflow-hidden">
            {/* ヘッダー */}
            <Header isVisible={showHeader} invert />

            <div className="flex-grow pt-20">
                {/* メインコンテンツ */}
                <UnderConstruction />
            </div>

            {/* フッター */}
            <FooterBar variant="black" />
        </main>
    );
}

/*
// Original Code
import Top from "@/components/ApplicationUI/Top";
import Download from "@/components/ApplicationUI/Download";

export default function TimeTablePageOriginal() {
    const [showHeader] = useState(true);

    return (
        <main className="flex flex-col min-h-screen w-full bg-white overflow-hidden">
            <Header isVisible={showHeader} invert />

            <div className="flex-grow">
                <Top />
                <Download />
            </div>

            <FooterBar variant="black" />
        </main>
    );
}
*/