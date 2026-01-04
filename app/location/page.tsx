"use client";

import { useState } from "react";
import Header from "@/components/MainUI/02_Header";
import FooterBar from "@/components/MainUI/10_FooterBar";
import Top from "@/components/LocationUI/Top";
import Info from "@/components/LocationUI/Info";

export default function LocationPage() {
    const [showHeader] = useState(true);

    return (
        /* 【修正のポイント】
           1. flex flex-col: 子要素を縦に並べる
           2. min-h-screen: 最低でも画面いっぱいの高さを確保する
           3. bg-black: 背景を黒に指定（もし白が良い場合は bg-white）
        */
        <main className="flex flex-col min-h-screen w-full bg-black overflow-hidden">

            {/* ヘッダー */}
            <Header isVisible={showHeader} />

            {/* 【重要：コンテンツエリア】
                flex-grow をつけることで、中身（TopやInfo）が少なくても、
                このエリアが自動で伸びてフッターを一番下まで押し下げます。
            */}
            <div className="flex-grow">
                {/* ロケーションTOPセクション */}
                <Top />
                <Info />
            </div>

            {/* フッター：これで必ず「コンテンツの直後」かつ「最低でも画面最下部」に配置されます */}
            <FooterBar />
        </main>
    );
}