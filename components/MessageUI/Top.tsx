import SectionTop from "@/components/Shared/SectionTop";
import { motion } from "framer-motion";

export default function MessageTop() {
    return (
        <SectionTop
            imageSrc="/event-concept-page/Cotan.jpg"
            imageAlt="Message Background"
            backTitle="MESSAGE"
            backTitleClassName="absolute right-4 md:right-8 lg:right-16 top-[20vh] md:top-auto md:-bottom-[15vh] z-0 font-oswald text-[13vh] md:text-[15vh] lg:text-[25vh] font-bold tracking-tight text-black/20 select-none pointer-events-none leading-none origin-bottom-right"
            containerClassName="relative w-full h-auto md:h-[25vh] bg-white flex items-start md:items-end pt-4 md:pt-0 pb-12 md:pb-6 px-6 md:px-20 lg:px-32 overflow-hidden"
        >
            <div className="w-full max-w-[1600px] mx-auto">
                <div className="w-min md:w-full">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="relative z-10 text-[#092040] text-3xl md:text-5xl lg:text-6xl font-bold tracking-widest leading-none whitespace-nowrap md:whitespace-normal"
                    >
                        開祭にあたって
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                        className="relative z-10 text-gray-700 text-sm md:text-base mt-4 md:mt-6 font-medium leading-relaxed max-w-2xl"
                    >
                        R-EXPO2026の開祭にあたり、代表よりご挨拶申し上げます
                    </motion.p>
                </div>
            </div>
        </SectionTop>
    );
}