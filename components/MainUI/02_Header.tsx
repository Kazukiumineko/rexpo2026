"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

interface HeaderProps {
    isVisible: boolean;
    invert?: boolean;
}


export function MiniLogo({ isVisible, invert = false }: { isVisible: boolean; invert?: boolean }) {
    const pathname = usePathname();
    const isHomePage = pathname === "/";

    return (
        <div
            className={`absolute top-4 left-4 md:top-4 md:left-4 z-50 transition-opacity duration-500 ease-in-out
        ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        >
            {isHomePage ? (
                <Image
                    src="/main/R-EXPO-LOGO2.png"
                    alt="R-EXPO Mini Logo"
                    width={150}
                    height={50}
                    // lg:invert に変更してスマホ時は白のままにする
                    className={`object-contain cursor-pointer h-auto w-[100px] md:w-[110px] lg:w-[150px] drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)] ${invert ? "lg:[filter:brightness(0)_saturate(100%)_invert(10%)_sepia(35%)_saturate(3086%)_hue-rotate(193deg)_brightness(95%)_contrast(100%)_drop-shadow(0_1px_2px_rgba(255,255,255,0.5))]" : ""}`}
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                />
            ) : (
                <Link href="/">
                    <Image
                        src="/main/R-EXPO-LOGO2.png"
                        alt="R-EXPO Mini Logo"
                        width={150}
                        height={50}
                        // lg:invert に変更してスマホ時は白のままにする
                        className={`object-contain cursor-pointer h-auto w-[100px] md:w-[110px] lg:w-[150px] drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)] ${invert ? "lg:[filter:brightness(0)_saturate(100%)_invert(10%)_sepia(35%)_saturate(3086%)_hue-rotate(193deg)_brightness(95%)_contrast(100%)_drop-shadow(0_1px_2px_rgba(255,255,255,0.5))]" : ""}`}
                    />
                </Link>
            )}
        </div>
    );
}

export function MenuButton({ isVisible = true, invert = false }: { isVisible?: boolean; invert?: boolean }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleLinkClick = () => {
        setIsOpen(false);
    };

    const menuItems = [
        { label: "HOME", href: "/" },
        { label: "INTRODUCTION", href: "/event-concept" },
        { label: "STAGE", href: "/stage-concept" },
        { label: "LOCATION", href: "/location" },
        { label: "SUPPORT", href: "/support" },
        { label: "MESSAGE", href: "/message" },
        { label: "JOIN US", href: "/entry" },
        { label: "APPLICATION", href: "/application" },
    ];

    return (
        <>
            <button
                onClick={toggleMenu}
                aria-label="Toggle Menu"
                className={`absolute -top-2 md:top-0 right-4 z-50 w-16 h-16 flex flex-col justify-center items-center gap-2 transition-opacity duration-500 ease-in-out cursor-pointer drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)] ${invert ? "lg:drop-shadow-[0_1px_2px_rgba(255,255,255,0.5)]" : ""}
                ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"}`}
            >
                <span
                    className={`block w-12 h-0.5 ${isOpen ? "bg-white" : invert ? "bg-white lg:!bg-[#092040]" : "bg-white"} transition-transform duration-300 ease-in-out ${isOpen ? "rotate-45 translate-y-2.5" : ""
                        }`}
                />
                <span
                    className={`block w-12 h-0.5 ${isOpen ? "bg-white" : invert ? "bg-white lg:!bg-[#092040]" : "bg-white"} transition-opacity duration-300 ease-in-out ${isOpen ? "opacity-0" : "opacity-100"
                        }`}
                />
                <span
                    className={`block w-12 h-0.5 ${isOpen ? "bg-white" : invert ? "bg-white lg:!bg-[#092040]" : "bg-white"} transition-transform duration-300 ease-in-out ${isOpen ? "-rotate-45 -translate-y-2.5" : ""
                        }`}
                />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={toggleMenu}
                            className="fixed inset-0 bg-black/60 z-40 backdrop-blur-sm"
                        />

                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            className="fixed top-0 right-0 h-full w-full max-w-sm bg-[#092040]/90 backdrop-blur-sm text-white z-40 shadow-2xl flex flex-col justify-center p-10 border-l border-white/10"
                        >
                            <nav className="flex flex-col space-y-6">
                                {menuItems.map((item, index) => (
                                    <Link
                                        key={index}
                                        href={item.href}
                                        onClick={handleLinkClick}
                                        className="text-2xl font-bold hover:text-gray-400 transition-colors tracking-widest uppercase"
                                    >
                                        {item.label}
                                    </Link>
                                ))}
                                <div className="pt-10">
                                    <Link
                                        href="/license"
                                        className="block w-fit"
                                    >
                                        <Image
                                            src="/main/Rmark.png"
                                            alt="R Mark"
                                            width={60}
                                            height={60}
                                            className="object-contain w-14 h-auto opacity-50 hover:opacity-100 transition-opacity"
                                        />
                                    </Link>
                                </div>
                            </nav>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}

export default function Header({ isVisible, invert }: HeaderProps) {
    return (
        <div className="fixed top-0 left-0 w-full z-[1000] pointer-events-none">
            <div
                className={`absolute top-0 left-0 w-full h-14 lg:h-18 bg-[#092040] md:bg-[#092040] lg:bg-black/0 transition-opacity duration-500 ease-in-out
          ${isVisible ? "opacity-100" : "opacity-0"}`}
            ></div>

            <div className="relative pointer-events-auto">
                <MiniLogo isVisible={isVisible} invert={invert} />
                <MenuButton isVisible={isVisible} invert={invert} />
            </div>
        </div>
    );
}
