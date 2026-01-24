"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface GlobalContextType {
    isHomeVideoLoaded: boolean;
    setIsHomeVideoLoaded: (loaded: boolean) => void;
    hasIntroShown: boolean;
    setHasIntroShown: (shown: boolean) => void;
    videoOverlayOpacity: number;
    setVideoOverlayOpacity: (opacity: number) => void;
}

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

export function GlobalProvider({ children }: { children: ReactNode }) {
    const [isHomeVideoLoaded, setIsHomeVideoLoaded] = useState(false);
    const [hasIntroShown, setHasIntroShown] = useState(false);
    const [videoOverlayOpacity, setVideoOverlayOpacity] = useState(0);

    return (
        <GlobalContext.Provider
            value={{
                isHomeVideoLoaded,
                setIsHomeVideoLoaded,
                hasIntroShown,
                setHasIntroShown,
                videoOverlayOpacity,
                setVideoOverlayOpacity,
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
}

export function useGlobalContext() {
    const context = useContext(GlobalContext);
    if (context === undefined) {
        throw new Error("useGlobalContext must be used within a GlobalProvider");
    }
    return context;
}
