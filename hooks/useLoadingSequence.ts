"use client";

import { useState, useEffect } from "react";

export function useLoadingSequence() {
    const [isLogoLoaded, setIsLogoLoaded] = useState(false);
    const [isScrollLoaded, setIsScrollLoaded] = useState(false);

    useEffect(() => {
        const logoTimer = setTimeout(() => {
            setIsLogoLoaded(true);
        }, 1500);

        const scrollTimer = setTimeout(() => {
            setIsScrollLoaded(true);
        }, 2000);

        return () => {
            clearTimeout(logoTimer);
            clearTimeout(scrollTimer);
        };
    }, []);

    return { isLogoLoaded, isScrollLoaded };
}
