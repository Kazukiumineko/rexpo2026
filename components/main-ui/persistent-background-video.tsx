"use client";

import { useGlobalContext } from "@/context/GlobalContext";
import BackgroundVideo from "@/components/main-ui/background-video";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function PersistentBackgroundVideo() {
    const { videoOverlayOpacity, setIsHomeVideoLoaded, isHomeVideoLoaded } = useGlobalContext();
    const pathname = usePathname();
    const isHomePage = pathname === "/";

    // Force open content after 10 seconds if video hasn't loaded (Persist this check globally)
    useEffect(() => {
        if (isHomeVideoLoaded) return;

        const timer = setTimeout(() => {
            setIsHomeVideoLoaded(true);
        }, 10000); // 10s timeout

        return () => clearTimeout(timer);
    }, [isHomeVideoLoaded, setIsHomeVideoLoaded]);

    return (
        <div className={`fixed top-0 left-0 w-full h-screen transition-opacity duration-300 z-0 pointer-events-none ${isHomePage ? 'opacity-100' : 'opacity-0'}`}>
            <BackgroundVideo
                overlayOpacity={isHomePage ? videoOverlayOpacity : 0.6}
                onLoaded={() => setIsHomeVideoLoaded(true)}
            />
        </div>
    );
}
