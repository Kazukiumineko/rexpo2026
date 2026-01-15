"use client";

import { useState } from "react";
import Header from "@/components/MainUI/02_Header";
import FooterBar from "@/components/MainUI/10_FooterBar";
import Top from "@/components/EntryUI/Top";
import Title from "@/components/EntryUI/Title";
import Main from "@/components/EntryUI/Main";
import Entry from "@/components/EntryUI/Entry";

export default function TimeTablePage() {
    const [showHeader] = useState(true);

    return (
        <main className="flex flex-col min-h-screen w-full bg-white overflow-hidden">
            {/* ヘッダー */}
            <Header isVisible={showHeader} invert />

            <div className="flex-grow">
                {/* ページ上部メッセージセクション */}
                <Top />
                {/* メインコンテンツ */}
                <Title />
                <Main />
                <Entry />

            </div>

            {/* フッター */}
            <FooterBar variant="black" />
        </main>
    );
}