"use client";

import { useGlobalContext } from "@/context/GlobalContext";
import BackgroundVideo from "@/components/main-ui/background-video";
import { usePathname } from "next/navigation";

export default function PersistentBackgroundVideo() {
    const { videoOverlayOpacity, setIsHomeVideoLoaded, isHomeVideoLoaded } = useGlobalContext();
    const pathname = usePathname();
    const isHomePage = pathname === "/";

    return (
        <div className={`fixed top-0 left-0 w-full h-screen transition-opacity duration-300 -z-50 ${isHomePage ? 'opacity-100' : 'opacity-0'}`}>
            <BackgroundVideo
                overlayOpacity={isHomePage ? videoOverlayOpacity : 0.6}
                onLoaded={() => setIsHomeVideoLoaded(true)}
            />
        </div>
    );
}
