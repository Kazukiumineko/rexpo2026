"use client";

import { useState, useEffect } from "react";
import { useGlobalContext } from "@/context/GlobalContext";

export function useLoadingSequence() {
    const { hasIntroShown, setHasIntroShown } = useGlobalContext();

    // If intro has shown, start as loaded. Otherwise start as false.
    const [isLogoLoaded, setIsLogoLoaded] = useState(hasIntroShown);
    const [isScrollLoaded, setIsScrollLoaded] = useState(hasIntroShown);

    useEffect(() => {
        if (hasIntroShown) {
            // Already shown, ensure states are true (safeguard)
            setIsLogoLoaded(true);
            setIsScrollLoaded(true);
            return;
        }

        const logoTimer = setTimeout(() => {
            setIsLogoLoaded(true);
        }, 1500);

        const scrollTimer = setTimeout(() => {
            setIsScrollLoaded(true);
            // Mark intro as fully shown after the last animation
            // setHasIntroShown(true); // Removed to prevent premature loading screen dismissal. Now controlled by video loading.
        }, 2000);

        return () => {
            clearTimeout(logoTimer);
            clearTimeout(scrollTimer);
        };
    }, [hasIntroShown, setHasIntroShown]);

    return { isLogoLoaded, isScrollLoaded };
}
