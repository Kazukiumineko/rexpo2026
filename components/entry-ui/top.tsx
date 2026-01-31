import SectionTop from "@/components/shared/section-top";
import { FadeIn } from "@/components/shared/anim-wrapper";

export default function EntryTop() {
    return (
        <SectionTop
            imageSrc="/event-concept-page/DB5A1637.JPG"
            imageAlt="Entry Background"

            containerClassName="relative w-full h-auto md:h-[25vh] bg-[#f1f1f1] flex items-start md:items-end pt-4 md:pt-0 pb-12 md:pb-6 px-6 md:px-20 lg:px-32 overflow-hidden"
        >
            <div className="w-full max-w-[1600px] mx-auto">
                <FadeIn delay={0.2} duration={0.8}>
                    <p className="relative z-10 text-[#092040] text-3xl md:text-5xl lg:text-6xl font-bold tracking-widest leading-none whitespace-nowrap md:whitespace-normal">
                        参加申し込み
                    </p>
                </FadeIn>
                <FadeIn delay={0.4} duration={0.8}>
                    <p className="relative z-10 text-gray-700 text-sm md:text-base mt-4 md:mt-6 font-medium leading-relaxed max-w-2xl">
                        一般来場の方、保護者の方の来場もお待ちしております
                    </p>
                </FadeIn>
            </div>
        </SectionTop>
    );
}