"use client";

import { useState, useEffect, RefObject } from "react";

interface ScrollEffectsReturn {
    opacity: number;
    showMiniLogo: boolean;
    overlayOpacity: number;
}

export function useScrollEffects(textRef: RefObject<HTMLElement | null>): ScrollEffectsReturn {
    const [opacity, setOpacity] = useState(1);
    const [showMiniLogo, setShowMiniLogo] = useState(false);
    const [overlayOpacity, setOverlayOpacity] = useState(0.5);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const threshold = 350;

            const newOpacity = Math.max(0, 1 - scrollY / threshold);
            setOpacity(newOpacity);
            setShowMiniLogo(scrollY > threshold);

            if (textRef.current) {
                const rect = textRef.current.getBoundingClientRect();
                const windowHeight = window.innerHeight;

                let progress = 1 - (rect.top / windowHeight);
                progress = Math.max(0, Math.min(1, progress));

                const minDarkness = 0.5;
                const maxDarkness = 0.9;
                const newOverlayOpacity = minDarkness + (maxDarkness - minDarkness) * progress;

                setOverlayOpacity(newOverlayOpacity);
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, [textRef]);

    return { opacity, showMiniLogo, overlayOpacity };
}
