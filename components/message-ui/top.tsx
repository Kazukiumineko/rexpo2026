import SectionTop from "@/components/shared/section-top";
import { FadeIn } from "@/components/shared/anim-wrapper";

export default function MessageTop() {
    return (
        <SectionTop
            imageSrc="/event-concept-page/Cotan.jpg"
            imageAlt="Message Background"
            imageContainerClassName="h-[60vh] md:h-[60vh]"
            backTitle="MESSAGE"
            backTitleClassName="absolute right-4 md:right-8 lg:right-16 top-[10vh] md:top-[10vh] md:-bottom-[15vh] z-0 font-oswald text-[13vh] md:text-[15vh] lg:text-[25vh] font-bold tracking-tight text-black/50 md:text-black/20 select-none pointer-events-none leading-none origin-bottom-right"
            containerClassName="relative w-full h-auto md:h-[25vh] bg-[#f1f1f1] flex items-start md:items-end pt-4 md:pt-0 pb-12 md:pb-6 px-6 md:px-20 lg:px-32 overflow-hidden"
        >
            <div className="w-full max-w-[1600px] mx-auto">
                <div className="w-min md:w-full">
                    <FadeIn
                        duration={0.8}
                        delay={0.2}
                    >
                        <p className="relative z-10 text-[#092040] text-3xl md:text-5xl lg:text-6xl font-bold tracking-widest leading-none whitespace-nowrap md:whitespace-normal">
                            開祭にあたって
                        </p>
                    </FadeIn>
                    <FadeIn
                        duration={0.8}
                        delay={0.4}
                    >
                        <p className="relative z-10 text-gray-700 text-sm md:text-base mt-4 md:mt-6 font-medium leading-relaxed max-w-2xl">
                            R-EXPO2026の開祭にあたり、代表よりご挨拶申し上げます
                        </p>
                    </FadeIn>
                </div>
            </div>
        </SectionTop>
    );
}