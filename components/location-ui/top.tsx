import SectionTop from "@/components/shared/section-top";
import LazyImage from "@/components/shared/lazy-image";
import { FadeIn } from "@/components/shared/anim-wrapper";

export default function LocationTop() {
    return (
        <SectionTop
            className="z-30"
            imageSrc="/location/Location.jpg"
            imageAlt="Location Background"
            imageContainerClassName="h-[60vh]"
            imageClassName="object-bottom brightness-100"
            /* 2. 下部のごく薄いグラデーション */
            imageOverlay={
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#f1f1f1]/30 via-transparent to-transparent" />
            }
            backTitle="LOCATION"
            backTitleClassName="absolute inset-y-0 right-0 flex items-start pt-20 z-20 pr-4 md:pr-8 font-oswald text-[12vh] md:text-[14vh] lg:text-[25vh] font-bold text-black/40 md:text-black/20 leading-none select-none"
            backTitleDirection="up"
            backTitleStyle={{
                height: "400vh",
                textOrientation: "mixed",
            }}
            backTitleViewportAmount={0.01}
            /* ★ 追加: 2/11全館貸切！ポップ画像 */
            absoluteContent={
                <>
                    {/* === 【スマホ用】 (md未満で表示) === */}
                    <FadeIn
                        direction="right"
                        duration={1.0}
                        delay={0.8}
                        className="absolute z-30 w-24 top-20 left-8 block md:hidden"
                    >
                        <LazyImage
                            src="/location/TOPYerrow.png"
                            alt="2/11全館貸切！"
                            width={300}
                            height={300}
                            containerClassName="w-full h-full bg-transparent"
                            className="object-contain drop-shadow-xl"
                        />
                    </FadeIn>

                    {/* === 【PC用】 (md以上で表示) === */}
                    <FadeIn
                        direction="right"
                        duration={1.0}
                        delay={0.8}
                        className="absolute z-30 w-28 lg:w-32 bottom-0 left-24 transform translate-y-1/2 hidden md:block"
                    >
                        <LazyImage
                            src="/location/TOPYerrow.png"
                            alt="2/11全館貸切！"
                            width={300}
                            height={300}
                            className="object-contain drop-shadow-xl"
                        />
                    </FadeIn>
                </>
            }
        />
    );
}