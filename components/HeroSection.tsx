"use client";

import Image from "next/image";

interface HeroSectionProps {
    opacity: number;
    isLogoLoaded: boolean;
    isScrollLoaded: boolean;
}

export default function HeroSection({ opacity, isLogoLoaded, isScrollLoaded }: HeroSectionProps) {
    return (
        <div className="relative z-10 flex h-screen flex-col items-center justify-center pointer-events-none"
            style={{ opacity: opacity }}>

            <div className={`transition-opacity duration-1000 ease-out mb-8
        ${isLogoLoaded ? "opacity-100" : "opacity-0"}`}>

                <Image
                    src="/R-EXPO-LOGO1.png"
                    alt="R-EXPO Logo"
                    width={600}
                    height={200}
                    priority
                    className="object-contain"
                />
            </div>

            <div className={`absolute bottom-20 left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center animate-bounce transition-opacity duration-4000 ease-out
        ${isScrollLoaded ? "opacity-100" : "opacity-0"}`}>
                <div className="w-px h-16 bg-white/80"></div>
                <p className="text-white text-sm mt-4 tracking-widest uppercase opacity-90">
                    Scroll Down
                </p>
            </div>
        </div>
    );
}
