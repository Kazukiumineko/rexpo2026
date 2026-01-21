"use client";

import { useState } from "react";
import Header from "@/components/MainUI/02_Header";
import FooterBar from "@/components/MainUI/10_FooterBar";
import StageTop from "@/components/StageConceptUI/top";
import GlobalStage from "@/components/StageConceptUI/GlobalStage";
import GlobalInfo from "@/components/StageConceptUI/GlobalInfo";
import AcademicStage from "@/components/StageConceptUI/AcademicStage";
import AcademicInfo from "@/components/StageConceptUI/AcademicInfo";
import EntertainmentStage from "@/components/StageConceptUI/EntertainmentStage";
import EntertainmentInfo from "@/components/StageConceptUI/EntertainmentInfo";
import CollabStage from "@/components/StageConceptUI/CollabStage";
import CollabInfo from "@/components/StageConceptUI/CollabInfo";
import Jump from "@/components/StageConceptUI/Jump";
import ComingSoonPopup from "@/components/Shared/ComingSoonPopup";


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
import UnderConstruction from "@/components/Shared/UnderConstruction";
import Header from "@/components/MainUI/02_Header";
import FooterBar from "@/components/MainUI/10_FooterBar";
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