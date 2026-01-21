"use client";

import { useState } from "react";
import Header from "@/components/main-ui/header";
import FooterBar from "@/components/main-ui/footer-bar";
import StageTop from "@/components/stage-concept-ui/top";
import GlobalStage from "@/components/stage-concept-ui/global-stage";
import GlobalInfo from "@/components/stage-concept-ui/global-info";
import AcademicStage from "@/components/stage-concept-ui/academic-stage";
import AcademicInfo from "@/components/stage-concept-ui/academic-info";
import EntertainmentStage from "@/components/stage-concept-ui/entertainment-stage";
import EntertainmentInfo from "@/components/stage-concept-ui/entertainment-info";
import CollabStage from "@/components/stage-concept-ui/collab-stage";
import CollabInfo from "@/components/stage-concept-ui/collab-info";
import Jump from "@/components/stage-concept-ui/jump";
import ComingSoonPopup from "@/components/shared/coming-soon-popup";


export default function StageConceptPage() {
    // ヘッダーを常に表示
    const [showHeader] = useState(true);

    return (
        <main className="relative w-full min-h-screen text-white">
            <ComingSoonPopup />
            {/* 固定背景画像 */}
            <div className="fixed inset-0 z-0">
                <div className="relative w-full h-full">
                    <img
                        src="/event-concept-page/Introduction.jpg"
                        alt="Stage Concept Background"
                        className="object-cover w-full h-full"
                    />
                    {/* 暗くするためのオーバーレイ */}
                    <div className="absolute inset-0 bg-black/80" />
                </div>
            </div>

            {/* コンテンツラッパー */}
            <div className="relative z-10 w-full flex flex-col min-h-screen">
                <Header isVisible={showHeader} />

                {/* flex-growでフッターを下に押し下げる */}
                <div className="flex-grow pb-20">
                    <StageTop />
                    <div className="h-32" />
                    <GlobalStage />
                    <GlobalInfo />
                    <div className="h-32" />
                    <AcademicStage />
                    <AcademicInfo />
                    <div className="h-32" />
                    <EntertainmentStage />
                    <EntertainmentInfo />
                    <div className="h-32" />
                    <CollabStage />
                    <CollabInfo />
                    <Jump />
                </div>

                <FooterBar />
            </div>
        </main>
    );
}

/*
// Under Construction Code (Backup)
import UnderConstruction from "@/components/shared/under-construction";
import Header from "@/components/main-ui/header";
import FooterBar from "@/components/main-ui/footer-bar";
import { useState } from "react";

export default function StageConceptPageBackup() {
    const [showHeader] = useState(true);

    return (
        <main className="relative w-full min-h-screen bg-black">
            <Header isVisible={showHeader} invert={true} />
            <div className="pt-20 bg-white">
                <UnderConstruction />
            </div>
            <FooterBar />
        </main>
    );
}
*/