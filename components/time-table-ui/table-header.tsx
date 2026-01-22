"use client";

import { RefObject } from "react";
import { venues, CONFIG } from "./data";

type TableHeaderProps = {
    scrollRef: RefObject<HTMLDivElement | null>;
};

export default function TableHeader({ scrollRef }: TableHeaderProps) {
    return (
        <div
            className="sticky top-14 lg:top-[72px] z-[70] w-full overflow-hidden print-table-header print:hidden"
            ref={scrollRef}
            style={{ backgroundColor: "var(--table-bg)" }}
        >
            <div
                className="flex"
                style={{ width: `calc(var(--time-col-width) + ${venues.length} * var(--col-width))` }}
            >
                {/* 左上の角（時間軸の真上） */}
                <div
                    className="flex-shrink-0 bg-[#f1f1f1] border-r border-gray-300 z-[80] sticky left-0"
                    style={{ width: `var(--time-col-width)`, height: `var(--header-height)` }}
                ></div>

                {/* 会場名ヘッダー列 */}
                {venues.map((venue, i) => (
                    <div
                        key={i}
                        className="flex-shrink-0 bg-[#092040] text-white text-base md:text-lg font-bold flex items-center justify-center text-center px-2 border-r border-b border-white/20 border-b-gray-300 last:border-none print-venue-header"
                        style={{ width: `var(--col-width)`, height: `var(--header-height)` }}
                    >
                        {venue}
                    </div>
                ))}
            </div>
        </div>
    );
}
