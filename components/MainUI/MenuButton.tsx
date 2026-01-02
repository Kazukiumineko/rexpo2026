"use client";

import Image from "next/image";


interface MenuButtonProps {
    isVisible?: boolean;
}

export default function MenuButton({ isVisible = true }: MenuButtonProps) {
    return (
        <div
            className={`fixed top-4 right-4 md:top-4 md:right-4 z-50 transition-opacity duration-500 ease-in-out
        ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        >
            <Image
                src="/ME.png"
                alt="Menu"
                width={40}
                height={40}
                className="object-contain cursor-pointer w-7 h-7 md:w-8 md  :h-8 lg:w-10 lg:h-10"
            />


        </div>
    );
}
