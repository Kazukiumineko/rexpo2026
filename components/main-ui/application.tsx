import LazyImage from "@/components/shared/lazy-image";
import Link from "next/link";
import { FadeIn } from "@/components/shared/anim-wrapper";


export default function Application() {
    return (
        <section className="relative w-full bg-[#f1f1f1] flex flex-col">

            {/* --- 画像エリア --- */}
            <div className="relative w-full h-[75vh] md:h-[65vh] lg:h-[100vh] overflow-hidden bg-gray-900">
                <LazyImage
                    src="/application/application-header.JPG"
                    alt="Application Header"
                    fill
                    className="object-cover brightness-50" // オーバーレイの代わりにbrightness調整の方がパフォーマンス良いが、既存に合わせてオーバーレイdivを残すか、LazyImageで完結させるか。既存コードはオーバーレイdivがある。
                // 既存: <div className="absolute inset-0 bg-black/60" />
                // 画像のbrightness調整ではなく、別途オーバーレイdivがある方が調整しやすい場合もあるので、画像はそのままfillで、オーバーレイも残す。
                />
                {/* LazyImageはfillの場合absoluteになる。既存のimgもabsoluteだった。 */}

                {/* 明示的に暗くするオーバーレイ */}
                <div className="absolute inset-0 bg-black/60 z-0" />

                {/* 全体コンテンツコンテナ */}
                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-6">

                    {/* 1. APPLICATION (最上部センター) */}
                    <FadeIn
                        direction="down"
                        duration={0.8}
                        className="text-center"
                    >
                        <h2 className="font-oswald text-6xl md:text-8xl lg:text-[10rem] font-bold tracking-tight text-white leading-none">
                            APPLICATION
                        </h2>

                        {/* 2. サブタイトル */}
                        <p className="mt-8 md:mt-10 font-jp text-2xl md:text-4xl font-bold tracking-tight text-white">
                            R-EXPOをもっと楽しむ
                        </p>
                    </FadeIn>

                    {/* 3. 説明文 (中央・3行・細字) */}
                    <FadeIn
                        direction="none"
                        duration={1.2}
                        delay={0.4}
                        className="mt-16 md:mt-24 text-center max-w-2xl"
                    >
                        <div className="text-white text-xs md:text-sm lg:text-base font-extralight leading-[2.2] tracking-[0.15em]">
                            <p>当日のタイムスケジュールや展示内容を、<br className="md:hidden" />あなたの手のひらに。</p>
                            <p>気になる企画をブックマークし、<br className="md:hidden" />当日の行動計画を立てよう。</p>
                            <p>慶祥生が創り上げる「新しいイベント」を、<br className="md:hidden" />このアプリと共に歩んでください。</p>
                        </div>
                    </FadeIn>

                    {/* 【追加】5. ViewMore ボタン */}
                    <FadeIn
                        direction="none" // scaleエフェクトの代わりに単純なフェード
                        duration={0.6}
                        delay={0.6}
                        className="mt-16 md:mt-20"
                    >
                        <Link
                            href="/application"
                            className="inline-flex items-center justify-center px-8 py-3 md:px-16 md:py-4 border border-white text-white text-base md:text-xl font-bold tracking-widest rounded-full hover:bg-white hover:text-[#092040] hover:border-transparent transition-colors duration-300"
                        >
                            今すぐアプリをインストール
                        </Link>
                    </FadeIn>

                </div>
            </div>

            {/* FooterBarとの隙間を埋める */}
            <div className="w-full h-px bg-[#f1f1f1]" />
        </section>
    );
}