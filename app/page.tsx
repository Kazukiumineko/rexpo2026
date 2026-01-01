"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [opacity, setOpacity] = useState(1);
  const [showMiniLogo, setShowMiniLogo] = useState(false);

  const [overlayOpacity, setOverlayOpacity] = useState(0.5);
  const textRef = useRef<HTMLHeadingElement>(null);

  const [isLoaded, setIsLoaded] = useState(false);
  const [isLogoLoaded, setIsLogoLoaded] = useState(false);
  const [isScrollLoaded, setIsScrollLoaded] = useState(false);

  useEffect(() => {

    const logoTimer = setTimeout(() => {
      setIsLogoLoaded(true);
    }, 2000);

    const scrollTimer = setTimeout(() => {
      setIsScrollLoaded(true);
    }, 2500);

    return () => {
      clearTimeout(logoTimer);
      clearTimeout(scrollTimer);
    };
  }, []);

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

  }, []);


  return (
    <main className="relative w-full">

      <div className="fixed top-0 left-0 w-full h-screen -z-10">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/Drone.mp4" type="video/mp4" />
        </video>

        <div
          className="absolute top-0 left-0 w-full h-full bg-black transition-opacity duration-100 ease-linear"
          style={{ opacity: overlayOpacity }}
        />

        <div
          className={`fixed top-6 left-6 z-50 transition-opacity duration-500 ease-in-out
            ${showMiniLogo ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        >
          <Image
            src="/R-EXPO-LOGO2.png"
            alt="R-EXPO Mini Logo"
            width={150}
            height={50}
            className="object-contain cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          />
        </div>

        <div className="relative z-10 flex h-screen flex-col items-center justify-center pointer-events-none"
          style={{ opacity: opacity }}>

          <div className={`transition-opacity duration-1000 ease-out mb-8
            ${isLogoLoaded ? "opacity-100" : "opacity-0"}`}>

            <Image
              src="/R-EXPO-LOGO1.png"
              alt="R-EXPO Logo"
              width={600}
              height={200}
              priority
              className="object-contain"
            />
          </div>

          <div className={`absolute bottom-20 left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center animate-bounce transition-opacity duration-4000 ease-out
            ${isScrollLoaded ? "opacity-100" : "opacity-0"}`}>
            <div className="w-px h-16 bg-white/80"></div>
            <p className="text-white text-sm mt-4 tracking-widest uppercase opacity-90">
              Scroll Down
            </p>
          </div>


        </div>

      </div>

      <div className="relative z-10">
        <div className="h-screen w-full bg-transparent"></div>
        <div className="min-h-screen w-full bg-transparent  text-white p-24">

          <div className="max-w-4xl mx-auto">

            <h2 ref={textRef}
              className="text-6xl font-bold mb-10 text-center text-white-500">
              教室には収まらない
            </h2>

            <h2 className="text-6xl font-bold mb-30 text-center text-white-500">
              慶祥生の本気
            </h2>

            <p className="text-xl text-center leading-relaxed mb-10">
              R-EXPO2026が目指すのは、未来社会の縮図を描くこと。
            </p>

            <p className="text-xl text-center leading-relaxed mb-10">

              会場に一歩足を踏み入れれば、そこには多様なレイヤーで構成された
            </p>
            <p className="text-xl text-center leading-relaxed mb-10">
              「新しい世界」が広がっています。
            </p>
          </div>

        </div>

      </div>

    </main>

  );
}
