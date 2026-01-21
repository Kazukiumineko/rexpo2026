"use client";

import { useState } from "react";
import Header from "@/components/main-ui/header";
import FooterBar from "@/components/main-ui/footer-bar";
import Top from "@/components/application-ui/top";
import Download from "@/components/application-ui/download";

export default function ApplicationPage() {
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

/*
// Under Construction Code (Backup)
import UnderConstruction from "@/components/shared/under-construction";
import Header from "@/components/main-ui/header";
import FooterBar from "@/components/main-ui/footer-bar";
import { useState } from "react";

export default function ApplicationPageBackup() {
    const [showHeader] = useState(true);

    return (
        <main className="flex flex-col min-h-screen w-full bg-white overflow-hidden">
            {/* ヘッダー * /}
            <Header isVisible={showHeader} invert />

            <div className="flex-grow pt-20">
                {/* メインコンテンツ * /}
                <UnderConstruction />
            </div>

            {/* フッター * /}
            <FooterBar variant="black" />
        </main>
    );
}
*/