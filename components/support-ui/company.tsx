"use client";

import { sponsors } from "./sponsors";
import SponsorCard from "./SponsorCard";

export default function SponsorsSection() {
    return (
        <section className="w-full bg-[#f1f1f1] text-[#092040] pt-0 pb-20 md:py-20 px-6 md:px-12 lg:px-20">
            <div className="max-w-[1400px] mx-auto">

                {/* グリッドレイアウト: PCで2列、スマホで1列 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 md:gap-y-8">

                    {sponsors.map((sponsor, index) => (
                        <SponsorCard key={index} sponsor={sponsor} index={index} />
                    ))}

                </div>
            </div>
        </section>
    );
}