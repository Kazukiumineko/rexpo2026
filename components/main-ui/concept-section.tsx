import { FadeIn } from "@/components/shared/anim-wrapper";
import ConceptCarousel from "./concept-carousel";

export default function ConceptSection() {
    return (
        <section className="relative w-full pt-4 pb-32 bg-transparent text-white overflow-hidden">

            <div className="absolute inset-0 -z-10 opacity-40 "></div>

            <div className="w-full max-w-[1600px] mx-auto px-6 lg:px-20">

                <div className="flex flex-col gap-8 md:gap-16 lg:gap-24 items-center">

                    <FadeIn
                        direction="down"
                        className="flex flex-col items-center space-y-8"
                    >

                        <h2 className="font-oswald text-6xl md:text-8xl lg:text-[10rem] font-bold tracking-tight whitespace-nowrap">
                            INTRODUCTION
                        </h2>

                        <div className="flex flex-col items-center space-y-4 lg:space-y-20">
                            <h2 className="font-jp text-2xl md:text-5xl font-bold tracking-tight flex items-center gap-3">
                                <a href="/event-concept" className="hover:opacity-80 transition-opacity">
                                    R-EXPO が目指す場所
                                </a>
                                <a
                                    href="/event-concept"
                                    className="flex items-center justify-center p-1 opacity-80 hover:opacity-100 transition-opacity text-white"
                                >
                                    <svg
                                        className="w-5 h-5 md:w-8 md:h-8"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                </a>
                            </h2>
                        </div>
                    </FadeIn>


                    <FadeIn
                        delay={0.2}
                        className="w-full flex justify-center"
                    >
                        <ConceptCarousel />
                    </FadeIn>

                </div>
            </div>
        </section>
    );
}
