"use client";

import { useRef, useState, useEffect } from "react";
import { useLoadingSequence } from "@/hooks/useLoadingSequence";
import { useScrollEffects } from "@/hooks/useScrollEffects";
import BackgroundVideo from "@/components/main-ui/background-video";
import Header from "@/components/main-ui/header";
import HeroSection from "@/components/main-ui/hero-section";
import ScrollTextSection from "@/components/main-ui/scroll-text-section";
import dynamic from "next/dynamic";
import Opening from "@/components/main-ui/opening";

import FooterBar from "@/components/main-ui/footer-bar";

const ConceptSection = dynamic(() => import("@/components/main-ui/concept-section"));
const StageSection = dynamic(() => import("@/components/main-ui/stage-section"));
const InformationSection = dynamic(() => import("@/components/main-ui/information-section"));
const Application = dynamic(() => import("@/components/main-ui/application"));


export default function Home() {
  const textRef = useRef<HTMLHeadingElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  // useLoadingSequence内でロゴなどのアニメーション開始タイミングを制御していますが、
  // ここでは「画面全体のローディング」として Opening コンポーネントを使用します。
  const { isLogoLoaded, isScrollLoaded } = useLoadingSequence();
  const { opacity, showMiniLogo, overlayOpacity } = useScrollEffects(textRef);

  // Fallback: If video loading takes too long (10s), force show the content
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVideoLoaded(true);
    }, 10000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="relative w-full">
      {/* オープニング（ローディング）画面 */}
      <Opening isLoaded={isVideoLoaded} />

      <div className="fixed top-0 left-0 w-full h-screen -z-10">
        <BackgroundVideo
          overlayOpacity={overlayOpacity}
          onLoaded={() => setIsVideoLoaded(true)}
        />
        <HeroSection
          opacity={opacity}
          isLogoLoaded={isLogoLoaded}
          isScrollLoaded={isScrollLoaded}
        />
      </div>

      <Header isVisible={showMiniLogo} />


      <div className="relative z-10">
        <div className="h-screen w-full bg-transparent"></div>
        <div className="min-h-screen w-full bg-transparent text-white px-6 py-24 md:p-24">
          <ScrollTextSection headerRef={textRef} />
        </div>
      </div>


      <div className="relative z-10">
        <ConceptSection />
      </div>

      <div className="relative z-10 w-full h-24 lg:h-32"></div>

      <div className="relative z-10">
        <StageSection />
      </div>


      <div className="relative z-10 w-full bg-white text-black">
        <div className="w-full h-24 lg:h-32"></div>
        <InformationSection />
        <div className="w-full h-24 lg:h-48"></div>


        <Application />
        <div className="w-full h-2 lg:h-38"></div>
        <div className="relative z-50">
          <FooterBar />
        </div>
      </div>

    </main >
  );
}
