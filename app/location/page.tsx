"use client";

import { useState } from "react";
import Header from "@/components/MainUI/02_Header";
import FooterBar from "@/components/MainUI/10_FooterBar";
import Top from "@/components/LocationUI/Top";
import Info from "@/components/LocationUI/Info";

export default function LocationPage() {
    // メニューバーを常に表示するため true 固定
    const [showHeader] = useState(true);

    return (
        <main className="relative w-full bg-white min-h-screen">
            {/* ヘッダー */}
            <Header isVisible={showHeader} />

            {/* ロケーションTOPセクション */}
            <Top />

            <Info />

            <FooterBar />
        </main>
    );
}