"use client";

import { useState } from "react";
import Header from "@/components/main-ui/header";
import FooterBar from "@/components/main-ui/footer-bar";
import SupportTop from "@/components/support-ui/top";
import Company from "@/components/support-ui/company";

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