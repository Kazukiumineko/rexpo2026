"use client";

import Image from "next/image";


interface MenuButtonProps {
    isVisible: boolean;
}

export default function MenuButton({ isVisible }: MenuButtonProps) {
    return (
        <div
            className={`fixed top-4 right-4 md:top-6 md:right-6 z-50 transition-opacity duration-500 ease-in-out
        ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        >
            <Image
                src="/ME.png"
                alt="Menu"
                width={40}
                height={40}
                className="object-contain cursor-pointer w-7 h-7 md:w-12 md:h-12"
            />


        </div>
    );
}
