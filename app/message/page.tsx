"use client";

import { useState } from "react";
import Header from "@/components/MainUI/02_Header";
import FooterBar from "@/components/MainUI/10_FooterBar";
import Message from "@/components/MessageUI/Message";

export default function MessagePage() {
    const [showHeader] = useState(true);

    return (
        <main className="flex flex-col min-h-screen w-full bg-white overflow-hidden">
            {/* ヘッダー */}
            <Header isVisible={showHeader} invert />

            <div className="flex-grow">
                {/* ページ上部メッセージセクション */}
                <Message />
            </div>

            {/* フッター */}
            <FooterBar variant="black" />
        </main>
    );
}