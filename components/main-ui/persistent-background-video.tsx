"use client";

import { useGlobalContext } from "@/context/GlobalContext";
import BackgroundVideo from "@/components/main-ui/background-video";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function PersistentBackgroundVideo() {
    const { videoOverlayOpacity, setIsHomeVideoLoaded, isHomeVideoLoaded } = useGlobalContext();
    const pathname = usePathname();
    const isHomePage = pathname === "/";

    // Force open content after 6 seconds if video/image logic hasn't finished (Safety net)
    useEffect(() => {
        if (isHomeVideoLoaded) return;

        const timer = setTimeout(() => {
            setIsHomeVideoLoaded(true);
        }, 6000); // 6s strict timeout rule

        return () => clearTimeout(timer);
    }, [isHomeVideoLoaded, setIsHomeVideoLoaded]);

    return (
        <div className={`fixed top-0 left-0 w-full h-dvh transition-opacity duration-300 z-0 pointer-events-none ${isHomePage ? 'opacity-100' : 'opacity-0'}`}>
            <BackgroundVideo
                overlayOpacity={isHomePage ? videoOverlayOpacity : 0.6}
                onLoaded={() => setIsHomeVideoLoaded(true)}
            />
        </div>
    );
}
