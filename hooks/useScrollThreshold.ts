"use client";

import { useState, useEffect } from "react";

interface UseScrollThresholdOptions {
    /** Whether the scroll listener is active. Defaults to true. */
    enabled?: boolean;
    /** Minimum window width required to enable the listener. Defaults to 0 (always enabled). */
    minWidth?: number;
}

export function useScrollThreshold(threshold: number = 100, options: UseScrollThresholdOptions = {}) {
    const { enabled = true, minWidth = 0 } = options;
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        if (!enabled) return;

        const handleScroll = () => {
            if (minWidth > 0 && window.innerWidth < minWidth) {
                return;
            }
            setIsScrolled(window.scrollY > threshold);
        };

        window.addEventListener("scroll", handleScroll);
        // Initial check
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, [threshold, enabled, minWidth]);

    return isScrolled;
}
