"use client";

import Image from "next/image";

interface MiniLogoProps {
    isVisible: boolean;
}

export default function MiniLogo({ isVisible }: MiniLogoProps) {
    return (
        <div
            className={`fixed top-6 left-6 z-50 transition-opacity duration-500 ease-in-out
        ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        >
            <Image
                src="/R-EXPO-LOGO2.png"
                alt="R-EXPO Mini Logo"
                width={150}
                height={50}
                className="object-contain cursor-pointer"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            />
        </div>
    );
}
