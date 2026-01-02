"use client";

import { useRef } from "react";
import { useLoadingSequence } from "@/hooks/useLoadingSequence";
import { useScrollEffects } from "@/hooks/useScrollEffects";
import BackgroundVideo from "@/components/MainUI/BackgroundVideo";
import MiniLogo from "@/components/MainUI/MiniLogo";
import MenuButton from "@/components/MainUI/MenuButton";
import HeroSection from "@/components/MainUI/HeroSection";
import ScrollTextSection from "@/components/MainUI/ScrollTextSection";
import EventConceptSection from "@/components/MainUI/EventConceptSection";
import StageSection from "@/components/MainUI/Stage";
import TopicSection from "@/components/MainUI/TopicSection";
import FooterBar from "@/components/MainUI/FooterBar";


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
          className={`absolute top-0 left-0 w-full h-14 lg:h-18 bg-black/85 md:bg-black/85 lg:bg-black/0 transition-opacity duration-500 ease-in-out
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


      <div className="relative z-10 w-full bg-white text-black">
        <div className="w-full h-24 lg:h-32"></div>
        <TopicSection />
        <div className="w-full h-24 lg:h-32"></div>
      </div>

      <div className="relative z-50">
        <FooterBar />
      </div>

    </main>
  );
}
