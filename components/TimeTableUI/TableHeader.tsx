"use client";

import { RefObject } from "react";
import { venues, CONFIG } from "./Data";

type TableHeaderProps = {
    scrollRef: RefObject<HTMLDivElement | null>;
};

export default function TableHeader({ scrollRef }: TableHeaderProps) {
    return (
        <div
            className="sticky top-14 lg:top-[72px] z-[70] bg-[#f1f1f1] w-full overflow-hidden shadow-sm"
            ref={scrollRef}
        >
            <div
                className="flex border-b border-gray-300 bg-[#092040]"
                style={{ width: CONFIG.TIME_COL_WIDTH + venues.length * CONFIG.COLUMN_WIDTH }}
            >
                {/* 左上の角（時間軸の真上） */}
                <div
                    className="flex-shrink-0 bg-[#092040] border-r border-white/20 z-20 sticky left-0"
                    style={{ width: CONFIG.TIME_COL_WIDTH, height: CONFIG.HEADER_HEIGHT }}
                ></div>

                {/* 会場名ヘッダー列 */}
                {venues.map((venue, i) => (
                    <div
                        key={i}
                        className="flex-shrink-0 bg-[#092040] text-white text-base md:text-lg font-bold flex items-center justify-center text-center px-2 border-r border-white/20 last:border-none"
                        style={{ width: CONFIG.COLUMN_WIDTH, height: CONFIG.HEADER_HEIGHT }}
                    >
                        {venue}
                    </div>
                ))}
            </div>
        </div>
    );
}
