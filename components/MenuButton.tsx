"use client";

import Image from "next/image";


interface MenuButtonProps {
    isVisible: boolean;
}

export default function MenuButton({ isVisible }: MenuButtonProps) {
    return (
        <div
            className={`fixed top-6 right-6 z-50 transition-opacity duration-500 ease-in-out
        ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        >
            <Image
                src="/ME.png"
                alt="Menu"
                width={40}
                height={40}
                className="object-contain cursor-pointer"
            />


        </div>
    );
}
