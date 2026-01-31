import SectionTop from "@/components/shared/section-top";

export default function TimeTableTop() {
    return (
        <div className="print:hidden relative z-10">
            <SectionTop
                imageSrc="/main/Timetable-header3.JPG"
                imageContainerClassName="h-[60vh] md:h-[60vh]"
                imageClassName="object-center md:object-[center_80%]"
                imageAlt="Timetable Background"
                backTitle={<><span className="lg:inline-block lg:-translate-y-[20vh]">TIME</span><br className="hidden lg:block" />TABLE</>}
                backTitleClassName="absolute right-4 md:right-12 top-[7vh] md:top-auto md:-bottom-[6vh] lg:bottom-[5vh] z-50 font-oswald text-[12vh] md:text-[20vh] font-bold text-black/50 md:text-black/20 select-none pointer-events-none leading-none origin-bottom-right"
                containerClassName="relative w-full h-auto md:h-[25vh] bg-[#f1f1f1] flex items-start md:items-end pt-8 md:pt-0 pb-6 md:pb-2 px-6 md:px-20 lg:px-32"
            >
                <div className="w-full max-w-[1600px] mx-auto">
                    <h1 className="relative z-10 text-[#092040] text-3xl sm:text-4xl md:text-6xl font-bold tracking-widest leading-none whitespace-nowrap">
                        タイムテーブル
                    </h1>
                    <p className="relative z-10 mt-4 text-[#092040] text-xs md:text-sm font-medium tracking-wide leading-relaxed">
                        R-EXPO当日のタイムテーブルです<br />
                        内容は予告なく変更される場合があります
                    </p>
                </div>
            </SectionTop>
        </div>
    );
}
