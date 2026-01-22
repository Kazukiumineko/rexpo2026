"use client";

import SectionTop from "@/components/shared/section-top";
import FooterBar from "@/components/main-ui/footer-bar";
import Header from "@/components/main-ui/header";
import TimeTable from "@/components/time-table-ui/time-table";
import Jump from "@/components/time-table-ui/jump";
import ComingSoonPopup from "@/components/shared/coming-soon-popup";
import { useState } from "react";

export default function TimetablePage() {
    const [showHeader] = useState(true);

    return (
        <main className="flex flex-col min-h-screen bg-[#f1f1f1] print:bg-[#ffffff] w-full" style={{ overflowX: "clip" }}>
            <div className="print:hidden">
                <ComingSoonPopup />
            </div>
            <div className="print:hidden">
                <Header isVisible={showHeader} invert />
            </div>

            <div className="print:hidden">
                <SectionTop
                    imageSrc="/topic/TimeTable.jpg"
                    imageAlt="Timetable Background"
                    backTitle="TIMETABLE"
                    backTitleClassName="absolute right-4 md:right-12 top-[10vh] md:top-auto md:-bottom-[2vh] z-0 font-oswald text-[12vh] md:text-[15vh] font-bold text-black/10 select-none pointer-events-none leading-none origin-bottom-right"
                    containerClassName="relative w-full h-auto md:h-[25vh] bg-[#f1f1f1] flex items-start md:items-end pt-8 md:pt-0 pb-12 md:pb-6 px-6 md:px-20 lg:px-32 overflow-hidden"
                >
                    <div className="w-full max-w-[1600px] mx-auto">
                        <h1 className="relative z-10 text-[#092040] text-3xl sm:text-4xl md:text-6xl font-bold tracking-widest leading-none whitespace-nowrap">
                            タイムテーブル
                        </h1>
                    </div>
                </SectionTop>
            </div>

            <TimeTable />

            <div className="print:hidden">
                <Jump />
                <FooterBar variant="black" />
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

export default function TimetablePageBackup() {
    const [showHeader] = useState(true);

    return (
        <main className="flex flex-col min-h-screen bg-[#f1f1f1]">
            <Header isVisible={showHeader} invert />
            <div className="pt-20"> {/* ヘッダー分の余白 * /}
                <UnderConstruction />
            </div>
            <FooterBar variant="black" />
        </main>
    );
}
*/
