import { ExternalLink } from "lucide-react";
import LazyImage from "@/components/shared/lazy-image";
import { Sponsor } from "./sponsors";
import { FadeIn } from "@/components/shared/anim-wrapper";

interface SponsorCardProps {
    sponsor: Sponsor;
    index: number;
}

export default function SponsorCard({ sponsor, index }: SponsorCardProps) {
    return (
        <FadeIn delay={index * 0.05} className="h-full">
            <a
                href={sponsor.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center p-4 border border-gray-100 rounded-lg shadow-md hover:border-[#113f7d] hover:shadow-lg transition-[border-color,box-shadow] duration-300 h-full"
            >
                {/* 1. ロゴ画像エリア（左） */}
                <div className="relative w-[70px] h-[70px] md:w-[74px] md:h-[74px] flex-shrink-0 overflow-hidden rounded-md border border-gray-200 bg-white mr-5 flex items-center justify-center">
                    {sponsor.logo ? (
                        <LazyImage
                            src={sponsor.logo}
                            alt={sponsor.name}
                            fill
                            containerClassName="w-full h-full bg-transparent"
                            className="object-cover"
                        />
                    ) : (
                        <div
                            className="w-full h-full flex items-center justify-center text-white font-bold text-2xl md:text-3xl select-none"
                            style={{ backgroundColor: sponsor.color || '#ccc' }}
                        >
                            {sponsor.name.charAt(0)}
                        </div>
                    )}
                </div>

                {/* 2. 会社名（右） */}
                <div className="flex-1 min-w-0">
                    <h3 className="font-oswald text-base md:text-lg font-bold text-[#092040] group-hover:text-[#092040] transition-colors break-words">
                        {sponsor.name}
                    </h3>
                </div>

                {/* 3. 外部リンクマーク（さらに右端） */}
                <div className="ml-4 flex-shrink-0">
                    <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-[#092040] transition-colors" />
                </div>
            </a>
        </FadeIn>
    );
}
