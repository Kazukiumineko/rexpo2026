"use client";

import UnderConstruction from "@/components/Shared/UnderConstruction";
import Header from "@/components/MainUI/02_Header";
import FooterBar from "@/components/MainUI/10_FooterBar";
import { useState } from "react";

export default function TimetablePage() {
    const [showHeader] = useState(true);

    return (
        <main className="flex flex-col min-h-screen bg-[#f1f1f1]">
            <Header isVisible={showHeader} invert />
            <div className="pt-20"> {/* ヘッダー分の余白 */}
                <UnderConstruction />
            </div>
            <FooterBar variant="black" />
        </main>
    );
}

/*
// Original Code
import SectionTop from "@/components/Shared/SectionTop";
import TimeTable from "@/components/TimeTableUI/Main";

export default function TimetablePageOriginal() {
    const [showHeader] = useState(true);

    return (
        <main className="flex flex-col min-h-screen bg-[#f1f1f1]">
            <Header isVisible={showHeader} invert />

            <SectionTop
                imageSrc="/topic/TimeTable.jpg"
                imageAlt="Timetable Background"
                backTitle="TIMETABLE"
                backTitleClassName="absolute right-4 md:right-12 top-[20vh] md:top-auto md:-bottom-[10vh] z-0 font-oswald text-[12vh] md:text-[20vh] font-bold text-black/10 select-none pointer-events-none leading-none origin-bottom-right"
                containerClassName="relative w-full h-auto md:h-[25vh] bg-[#f1f1f1] flex items-start md:items-end pt-8 md:pt-0 pb-12 md:pb-6 px-6 md:px-20 lg:px-32 overflow-hidden"
            >
                <div className="w-full max-w-[1600px] mx-auto">
                    <h1 className="relative z-10 text-[#092040] text-4xl md:text-6xl font-bold tracking-widest leading-none">
                        タイムテーブル
                    </h1>
                </div>
            </SectionTop>

            <TimeTable />

            <FooterBar variant="black" />
        </main>
    );
}
*/
