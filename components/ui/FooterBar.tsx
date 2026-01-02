"use client";

import Image from "next/image";

export default function FooterBar() {
    return (
        <footer className="relative w-full bg-black/85 text-white h-10 flex items-center justify-center px-4 md:px-8 z-50">

            <div className="absolute left-4 md:left-8 top-1/2 transform -translate-y-1/2">
                <Image
                    src="/Ritsumeikan.png"
                    alt="Ritsumeikan Logo"
                    width={80}
                    height={30}
                    className="object-contain h-6 w-auto md:h-6"
                />
            </div>


            <div className="hidden md:block text-center font-light text-xs px-2">
                Ritsumeikan Keishi Junior Senior High School
            </div>


            <div className="absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2 text-[10px] md:text-xs opacity-90">
                R-EXPO2026
            </div>

        </footer>
    );
}