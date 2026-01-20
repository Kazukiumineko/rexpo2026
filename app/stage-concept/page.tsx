"use client";

import UnderConstruction from "@/components/Shared/UnderConstruction";
import Header from "@/components/MainUI/02_Header";
import FooterBar from "@/components/MainUI/10_FooterBar";
import { useState } from "react";

export default function StageConceptPage() {
    const [showHeader] = useState(true);

    return (
        <main className="relative w-full min-h-screen bg-black">
            {/* ヘッダーは常に表示、黒背景なのでinvertなし(デフォルトが黒)だと見えない？
                元のコード：Header isVisible={showHeader} (invert未指定なのでデフォルト)
                元の背景：画像+黒オーバーレイ -> 白文字OK?
                Headerの実装：デフォルトは bg-[#092040] (Navy) or bg-black/0 (Transparent).
                文字色は白。
                UnderConstructionは白背景。
                Headerが白文字だと白背景で見えない。
                よって invert={true} を指定して黒文字にするか、Headerの背景をNavyにする。
                UnderConstructionは白背景なので、Headerはinvert={true}で黒文字にするのが自然。
             */}
            <Header isVisible={showHeader} invert={true} />
            <div className="pt-20 bg-white">
                <UnderConstruction />
            </div>
            <FooterBar />
        </main>
    );
}

/*
// Original Code
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

export default function StageConceptPageOriginal() {
    // ヘッダーを常に表示
    const [showHeader] = useState(true);

    return (
        <main className="relative w-full min-h-screen text-white">
            // ... (省略) ...
        </main>
    );
}
*/