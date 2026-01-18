"use client";

import { useRef, useState } from "react";
import { useLoadingSequence } from "@/hooks/useLoadingSequence";
import { useScrollEffects } from "@/hooks/useScrollEffects";
import BackgroundVideo from "@/components/MainUI/01_BackgroundVideo";
import Header from "@/components/MainUI/02_Header";
import HeroSection from "@/components/MainUI/03_HeroSection";
import ScrollTextSection from "@/components/MainUI/04_ScrollTextSection";
import dynamic from "next/dynamic";
import Opening from "@/components/MainUI/Opening";

const ConceptSection = dynamic(() => import("@/components/MainUI/05_ConceptSection"));
const StageSection = dynamic(() => import("@/components/MainUI/07_StageSection"));
const InformationSection = dynamic(() => import("@/components/MainUI/08_InformationSection"));
const Application = dynamic(() => import("@/components/MainUI/09_Application"));
const FooterBar = dynamic(() => import("@/components/MainUI/10_FooterBar"));


export default function Home() {
  const textRef = useRef<HTMLHeadingElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  // useLoadingSequence内でロゴなどのアニメーション開始タイミングを制御していますが、
  // ここでは「画面全体のローディング」として Opening コンポーネントを使用します。
  const { isLogoLoaded, isScrollLoaded } = useLoadingSequence();
  const { opacity, showMiniLogo, overlayOpacity } = useScrollEffects(textRef);

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
