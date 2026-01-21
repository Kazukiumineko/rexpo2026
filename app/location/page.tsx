"use client";

import { useState } from "react";
import Header from "@/components/main-ui/header";
import FooterBar from "@/components/main-ui/footer-bar";
import Top from "@/components/location-ui/top";
import Info from "@/components/location-ui/info";
import Access from "@/components/location-ui/access";

export default function LocationPage() {
    const [showHeader] = useState(true);

    return (
        /* 【修正のポイント】
           1. flex flex-col: 子要素を縦に並べる
           2. min-h-screen: 最低でも画面いっぱいの高さを確保する
           3. bg-black: 背景を黒に指定（もし白が良い場合は bg-white）
        */
        <main className="flex flex-col min-h-screen w-full bg-white overflow-hidden">

            {/* ヘッダー */}
            <Header isVisible={showHeader} invert />

            {/* 【重要：コンテンツエリア】
                flex-grow をつけることで、中身（TopやInfo）が少なくても、
                このエリアが自動で伸びてフッターを一番下まで押し下げます。
            */}
            <div className="flex-grow pb-24">
                {/* ロケーションTOPセクション */}
                <Top />
                <Info />
                <Access />
            </div>

            {/* フッター：これで必ず「コンテンツの直後」かつ「最低でも画面最下部」に配置されます */}
            <FooterBar variant="black" />
        </main>
    );
}