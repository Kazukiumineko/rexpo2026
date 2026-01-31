"use client";

import { useRef, useEffect } from "react";
import { useGlobalContext } from "@/context/GlobalContext";
import { useLoadingSequence } from "@/hooks/useLoadingSequence";
import { useScrollEffects } from "@/hooks/useScrollEffects";
import Opening from "@/components/main-ui/opening";
import HeroSection from "@/components/main-ui/hero-section";
import Header from "@/components/main-ui/header";

export default function HomeTopController({ children }: { children: React.ReactNode }) {
    // 監視要素の Ref (video overlayの濃度計算用)
    const textRef = useRef<HTMLDivElement>(null);
    const { isHomeVideoLoaded, setVideoOverlayOpacity } = useGlobalContext();
    const { isLogoLoaded, isScrollLoaded } = useLoadingSequence();
    const { opacity, showMiniLogo, overlayOpacity } = useScrollEffects(textRef);

    // 計算した不透明度をグローバル状態へ同期
    useEffect(() => {
        setVideoOverlayOpacity(overlayOpacity);
    }, [overlayOpacity, setVideoOverlayOpacity]);

    return (
        <>
            {/* オープニング（ローディング） */}
            <div className={`transition-opacity duration-500 ${isHomeVideoLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                <Opening isLoaded={isHomeVideoLoaded} />
            </div>

            {/* ヒーローセクション（固定背景） */}
            <div className="fixed top-0 left-0 w-full h-screen z-0">
                <HeroSection
                    opacity={opacity}
                    isLogoLoaded={isLogoLoaded}
                    isScrollLoaded={isScrollLoaded}
                />
            </div>

            {/* ヘッダー */}
            <Header isVisible={showMiniLogo} />

            {/* スクロール連動エリア */}
            <div className="relative z-10">
                <div className="h-screen w-full bg-transparent"></div>
                {/* ここで ref を監視しつつ、中身(children)にはサーバーコンポーネントを表示 */}
                <div ref={textRef} className="min-h-screen w-full bg-transparent text-white px-6 py-24 md:p-24">
                    {children}
                </div>
            </div>
        </>
    );
}
