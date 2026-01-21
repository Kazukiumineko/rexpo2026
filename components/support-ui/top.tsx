import SectionTop from "@/components/shared/section-top";
import { motion } from "framer-motion";

export default function MessageTop() {
    return (
        <SectionTop
            imageSrc="/event-concept-page/Atrium.jpg"
            imageAlt="Message Background"
            backTitle="SUPPORT"
            backTitleClassName="absolute right-4 md:right-8 lg:right-16 top-[18vh] md:top-auto md:-bottom-[15vh] z-10 font-oswald text-[13vh] md:text-[15vh] lg:text-[25vh] font-bold tracking-tight text-black/20 select-none pointer-events-none leading-none origin-bottom-right"
            containerClassName="relative z-30 w-full h-auto md:h-[25vh] bg-transparent flex items-start md:items-end md:mt-20 pt-4 md:pt-0 pb-4 md:pb-0 px-6 md:px-20 lg:px-32 overflow-visible"
        >
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                // 【修正ポイント】relative と z-40 を指定し、強制的に最前面へ
                className="relative z-40 text-[#092040] text-3xl md:text-5xl lg:text-6xl font-bold tracking-widest leading-snug whitespace-nowrap md:whitespace-normal"
            >
                ご支援いただいた<br />企業・団体の皆様
            </motion.p>
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                className="relative z-40 text-gray-700 text-sm md:text-base mt-4 md:mt-6 font-medium leading-relaxed max-w-2xl"
            >
                R-EXPO2026の開催にあたり、ご支援いただいたみなさまを紹介します。※五十音順
            </motion.p>
        </SectionTop>
    );
}