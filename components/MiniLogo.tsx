"use client";

import Image from "next/image";

interface MiniLogoProps {
    isVisible: boolean;
}

export default function MiniLogo({ isVisible }: MiniLogoProps) {
    return (
        <div
            className={`fixed top-4 left-4 md:top-4 md:left-4 z-50 transition-opacity duration-500 ease-in-out
        ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        >
            <Image
                src="/R-EXPO-LOGO2.png"
                alt="R-EXPO Mini Logo"
                width={150}
                height={50}
                className="object-contain cursor-pointer h-auto w-[100px] md:w-[110px] lg:w-[150px]"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            />
        </div>
    );
}
