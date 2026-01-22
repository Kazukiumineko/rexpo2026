"use client";

import { CONFIG } from "./data";

export default function TimeColumn() {
    return (
        <div
            className="flex-shrink-0 border-r border-gray-200 z-40 sticky left-0 print-time-column"
            style={{
                width: `var(--time-col-width)`,
                height: `calc(${CONFIG.END_HOUR - CONFIG.START_HOUR} * var(--hour-height))`,
                backgroundColor: "var(--table-bg)",
            }}
        >
            <div className="relative w-full h-full border-r border-gray-300 print:border-none">
                {Array.from({ length: (CONFIG.END_HOUR - CONFIG.START_HOUR) * 2 + 1 }, (_, i) => {
                    const totalMinutes = i * 30;
                    const hour = CONFIG.START_HOUR + Math.floor(totalMinutes / 60);
                    const minute = totalMinutes % 60;
                    const offset = i;
                    return { hour, minute, offset };
                }).map(({ hour, minute, offset }) => (
                    <div key={`${hour}-${minute}`}>
                        <div
                            className={`absolute w-full text-right pr-2 font-bold text-gray-500 transform -translate-y-1/2 print-time-label ${hour === 9 && minute === 30 ? "print:hidden" : ""}`}
                            style={{
                                top: `calc(${offset} * 30 * var(--hour-height) / 60)`,
                                fontSize: 'var(--fs-time-col)'
                            }}
                        >
                            {hour === 9 && minute === 0 ? "" : (hour === 17 && minute === 30 ? "" : `${hour}:${minute === 0 ? "00" : "30"}`)}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
