"use client";

import { useState } from "react";
import Header from "@/components/MainUI/02_Header";
import FooterBar from "@/components/MainUI/10_FooterBar";
import StageTop from "@/components/StageConceptUI/top";
import GlobalStage from "@/components/StageConceptUI/GlobalStage";

export default function StageConceptPage() {
    // ヘッダーを常に表示
    const [showHeader] = useState(true);

    return (
        <main className="relative w-full bg-black min-h-screen flex flex-col">
            <Header isVisible={showHeader} />

            {/* flex-growでフッターを下に押し下げる */}
            <div className="flex-grow">
                <StageTop />
                {/* ここに他のセクション（Infoなど）を追加していきます */}
                <GlobalStage />
            </div>

            <FooterBar />
        </main>
    );
}