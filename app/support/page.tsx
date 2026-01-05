"use client";

import { useState } from "react";
import Header from "@/components/MainUI/02_Header";
import FooterBar from "@/components/MainUI/10_FooterBar";
import SupportTop from "@/components/SupportUI/Top";
import Company from "@/components/SupportUI/Company";

export default function SupportPage() {
    const [showHeader] = useState(true);

    return (
        <main className="flex flex-col min-h-screen w-full bg-white overflow-hidden">
            {/* ヘッダー */}
            <Header isVisible={showHeader} invert />

            <div className="flex-grow flex flex-col gap-24">
                {/* ページ上部メッセージセクション */}
                <SupportTop />
                <Company />
            </div>

            {/* フッター */}
            <FooterBar variant="black" />
        </main>
    );
}