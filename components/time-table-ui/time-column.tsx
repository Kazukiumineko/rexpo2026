"use client";

import { CONFIG } from "./data";

export default function TimeColumn() {
    return (
        <div
            className="flex-shrink-0 bg-[#f1f1f1] border-r border-gray-200 z-40 sticky left-0"
            style={{ width: CONFIG.TIME_COL_WIDTH, height: (CONFIG.END_HOUR - CONFIG.START_HOUR) * CONFIG.HOUR_HEIGHT }}
        >
            <div className="relative w-full h-full border-r border-gray-300">
                {Array.from({ length: (CONFIG.END_HOUR - CONFIG.START_HOUR) * 2 + 1 }, (_, i) => {
                    const totalMinutes = i * 30;
                    const hour = CONFIG.START_HOUR + Math.floor(totalMinutes / 60);
                    const minute = totalMinutes % 60;
                    const offset = i;
                    return { hour, minute, offset };
                }).map(({ hour, minute, offset }) => (
                    <div key={`${hour}-${minute}`}>
                        <div
                            className="absolute w-full text-right pr-2 text-sm md:text-base font-bold text-gray-500 transform -translate-y-1/2"
                            style={{ top: offset * 30 * (CONFIG.HOUR_HEIGHT / 60) }}
                        >
                            {hour === 9 && minute === 0 ? "" : (hour === 17 && minute === 30 ? "" : `${hour}:${minute === 0 ? "00" : "30"}`)}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
