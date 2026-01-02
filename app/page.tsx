"use client";

import { useRef } from "react";
import { useLoadingSequence } from "@/hooks/useLoadingSequence";
import { useScrollEffects } from "@/hooks/useScrollEffects";
import BackgroundVideo from "@/components/BackgroundVideo";
import MiniLogo from "@/components/MiniLogo";
import MenuButton from "@/components/MenuButton";
import HeroSection from "@/components/HeroSection";
import ScrollTextSection from "@/components/ScrollTextSection";
import EventConceptSection from "@/components/ui/EventConceptSection";
import StageSection from "@/components/ui/Stage";


export default function Home() {
  const textRef = useRef<HTMLHeadingElement>(null);

  const { isLogoLoaded, isScrollLoaded } = useLoadingSequence();
  const { opacity, showMiniLogo, overlayOpacity } = useScrollEffects(textRef);

  return (
    <main className="relative w-full">

      <div className="fixed top-0 left-0 w-full h-screen -z-10">
        <BackgroundVideo overlayOpacity={overlayOpacity} />

        <HeroSection
          opacity={opacity}
          isLogoLoaded={isLogoLoaded}
          isScrollLoaded={isScrollLoaded}
        />
      </div>

      <div className="fixed top-0 left-0 w-full z-50 pointer-events-none">
        <div
          className={`absolute top-0 left-0 w-full h-14 lg:h-0 bg-black/85 transition-opacity duration-500 ease-in-out
            ${showMiniLogo ? "opacity-100" : "opacity-0"}`}
        ></div>

        <div className="relative">
          <MiniLogo isVisible={showMiniLogo} />
          <MenuButton isVisible={showMiniLogo} />
        </div>
      </div>


      <div className="relative z-10">
        <div className="h-screen w-full bg-transparent"></div>
        <div className="min-h-screen w-full bg-transparent text-white p-24">
          <ScrollTextSection headerRef={textRef} />
        </div>
      </div>


      <div className="relative z-10">
        <EventConceptSection />
      </div>

      <div className="relative z-10 w-full h-24 lg:h-32"></div>

      <div className="relative z-10">
        <StageSection />
      </div>
    </main>
  );
}
