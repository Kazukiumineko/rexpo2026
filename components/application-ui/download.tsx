import LazyImage from "@/components/shared/lazy-image";
import { FadeIn, ScaleOnHover } from "@/components/shared/anim-wrapper";

export default function DownloadSection() {
    return (
        <section className="w-full bg-gray-100 py-24 px-6 md:px-12 text-center">
            <FadeIn
                viewportAmount={0.3}
                duration={0.8}
                className="max-w-4xl mx-auto flex flex-col items-center"
            >
                {/* 1. タイトル */}
                <h2 className="text-black font-bold text-3xl md:text-4xl lg:text-5xl tracking-wider font-jp mb-12">
                    いますぐインストール
                </h2>

                {/* 2. ダウンロードバッジ (App Store & Google Play) */}
                <div className="flex flex-row items-center justify-center gap-3 md:gap-8 mb-16">

                    {/* App Store Badge (左) */}
                    <a
                        href="https://apps.apple.com/jp/app/r-expo/id6756552415"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative w-[140px] h-[46px] md:w-[200px] md:h-[65px]"
                    >
                        <ScaleOnHover className="w-full h-full">
                            <LazyImage
                                src="/application/Download_on_the_App_Store_Badge_JP_RGB_blk_100317.svg"
                                alt="Download on the App Store"
                                fill
                                className="object-contain"
                            />
                        </ScaleOnHover>
                    </a>

                    {/* Google Play Badge (右) */}
                    <a
                        href="https://play.google.com/store/apps/details?id=com.ichi.rexpo"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative w-[155px] h-[46px] md:w-[220px] md:h-[65px]"
                    >
                        <ScaleOnHover className="w-full h-full">
                            <LazyImage
                                src="/application/GetItOnGooglePlay_Badge_Web_color_Japanese.svg"
                                alt="Get it on Google Play"
                                fill
                                className="object-contain"
                            />
                        </ScaleOnHover>
                    </a>
                </div>

                {/* 3. 商標に関する注釈 */}
                <div className="text-gray-400 text-[10px] md:text-xs leading-relaxed font-jp">
                    <p>Apple、Appleのロゴ、App Storeは、米国および他国のApple Inc.の登録商標です。</p>
                    <p>Google Play は Google LLC の商標です。</p>
                </div>

            </FadeIn>
        </section>
    );
}