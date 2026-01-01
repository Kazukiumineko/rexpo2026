"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export default function Home() {
  const [opacity, setOpacity] = useState(1);
  const [showMiniLogo, setShowMiniLogo] = useState(false);
  const [overlayOpacity, setOverlayOpacity] = useState(0.5);
  const textRef = useRef<HTMLHeadingElement>(null);
  const textSectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: textSectionRef,
    offset: ["start end", "end start"],
  });
  const yRange = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const smoothY = useSpring(yRange, { stiffness: 20, damping: 10 });

  const [isLoaded, setIsLoaded] = useState(false);
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

        <div
          className={`fixed top-6 right-6 z-50 transition-opacity duration-500 ease-in-out
            ${showMiniLogo ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        >
          <Image
            src="/ME.png"
            alt="Menu"
            width={40}
            height={40}
            className="object-contain cursor-pointer"
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
            <motion.div
              ref={textSectionRef}
              className="max-w-4xl mx-auto"
              style={{ y: smoothY }}
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 1.8, ease: "easeOut" }}
              >

                <h2 ref={textRef}
                  className="text-6xl font-bold mb-10 text-center text-white-500">
                  教室には収まらない
                </h2>

                <h2 className="text-6xl font-bold mb-30 text-center text-white-500">
                  慶祥生の本気
                </h2>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 1.8, ease: "easeOut", delay: 0.6 }}
              >

                <p className="text-xl text-center leading-relaxed mb-10">
                  R-EXPO2026が目指すのは、未来社会の縮図を描くこと。
                </p>

                <p className="text-xl text-center leading-relaxed mb-10">

                  会場に一歩足を踏み入れれば、そこには多様なレイヤーで構成された
                </p>
                <p className="text-xl text-center leading-relaxed mb-20">
                  「新しい世界」が広がっています。
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 1.8, ease: "easeOut", delay: 0.6 }}
              >

                <p className="text-xl text-center leading-relaxed mb-9">
                  国境を超えた対話
                </p>

                <p className="text-xl text-center leading-relaxed mb-9">

                  知の冒険
                </p>
                <p className="text-xl text-center leading-relaxed mb-20">
                  感性の爆発...
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 1.8, ease: "easeOut", delay: 0.6 }}
              >

                <p className="text-xl text-center leading-relaxed mb-9">
                  完成された未来図はまだありません。しかしここには、
                </p>

                <p className="text-xl text-center leading-relaxed mb-9">

                  未来を創るための「種」が無限に撒かれています。
                </p>
                <p className="text-xl text-center leading-relaxed mb-9">

                </p>
              </motion.div>

            </motion.div>


          </div>

        </div>

      </div>

      <div className="w-full max-w-5xl mx-auto px-12 pb-40">

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="flex flex-row items-center gap-10 mb-32"
        >
          <div className="shrink-0">
            <div className="w-48 h-48 rounded-full overflow-hidden border-2 border-white/20 relative shadow-2xl">
              <Image
                src="/Kenji.png"
                alt="菊地 賢司"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="flex-1 text-left">
            <div className="flex items-end gap-4 mb-4">
              <h3 className="text-4xl font-bold text-white">菊地 賢司</h3>
              <span className="text-base font-bold text-white pb-1">
                立命館慶祥中学校・高等学校　学校長
              </span>
            </div>
            <p className="text-white text-lg leading-relaxed opacity-90">
              教室を飛び出し、世界とつながる「探究」の集大成。 <br />
              多様な個性が響き合い、未来をデザインする瞬間を目撃してください...

            </p>
          </div>

          <div className="shrink-0">
            <a
              href="/Subpage"
              className="block hover:scale-110 transition-transform duration-300 cursor-pointer"
            >
              <Image
                src="/Click.png"
                alt="詳しく見る"
                width={60}
                height={60}
              />
            </a>
          </div>
        </motion.div>


        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-row items-center gap-10"
        >
          <div className="shrink-0">
            <div className="w-48 h-48 rounded-full overflow-hidden border-2 border-white/20 relative shadow-2xl">
              <Image
                src="/Ueno.png"
                alt="上野 政聖"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="flex-1 text-left">
            <div className="flex items-end gap-4 mb-4">
              <h3 className="text-4xl font-bold text-white">上野 政聖</h3>
              <span className="text-base font-bold text-white pb-1">
                行事改革実行委員会　委員長
              </span>
            </div>
            <p className="text-white text-lg leading-relaxed opacity-90">
              「文化祭」から「万博」へ。僕たちが本気で変えた、新しい景色。<br />

              1500人の情熱と、まだ誰も見たことのない1日がここから始まります...

            </p>
          </div>

          <div className="shrink-0">
            <a
              href="/Subpage"
              className="block hover:scale-110 transition-transform duration-300 cursor-pointer"
            >
              <Image
                src="/Click.png"
                alt="詳しく見る"
                width={60}
                height={60}
              />
            </a>
          </div>
        </motion.div>

      </div>

    </main>

  );
}
