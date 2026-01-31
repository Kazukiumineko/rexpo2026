import Link from "next/link";
import { FadeIn } from "@/components/shared/anim-wrapper";

export default function ScrollTextSection() {
    return (
        /* px-2を削除しw-fullを徹底。はみ出し防止にoverflow-hiddenを追加 */
        <div className="w-full max-w-full mx-auto overflow-hidden">
            <div className="w-full mx-auto">
                <FadeIn
                    duration={1.8}
                    viewportAmount={0.3}
                >
                    <h2
                        className="text-4xl md:text-5xl lg:text-6xl font-bold mb-10 text-center text-white break-words px-2">
                        教室を飛び出せ
                    </h2>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-32 text-center text-white">
                        慶祥生の本気
                    </h2>
                </FadeIn>

                <FadeIn
                    duration={1.8}
                    viewportAmount={0.3}
                    delay={0.6}
                    /* break-keepを削除し、naturalな改行を許可。px-4で余白確保 */
                    className="w-full px-4 break-words"
                >
                    <p className="text-base md:text-xl text-center leading-relaxed mb-10">
                        R-EXPOは、慶祥生の<br className="md:hidden" />個性を発信するイベントです。
                    </p>

                    <p className="text-base md:text-xl text-center leading-relaxed mb-10">
                        学校が用意したプログラムや<br className="md:hidden" />研究にとどまらず、
                    </p>
                    <p className="text-base md:text-xl text-center leading-relaxed mb-20">
                        生徒の「やりたい！」を最大限尊重した、<br className="md:hidden" />多様な企画が展開されます。
                    </p>
                </FadeIn>

                <FadeIn
                    duration={1.8}
                    viewportAmount={0.3}
                    delay={0.6}
                    className="w-full px-4 break-words"
                >
                    <p className="text-base md:text-xl text-center leading-relaxed mb-9">
                        立命館慶祥がお届けする、<br className="md:hidden" />全く新しいイベントのカタチ
                    </p>

                    <p className="text-base md:text-xl text-center leading-relaxed mb-9">
                        どうぞお楽しみください
                    </p>
                    <p className="text-base md:text-xl text-center leading-relaxed mb-35">
                    </p>
                </FadeIn>

                <FadeIn
                    duration={1.8}
                    viewportAmount={0.3}
                    delay={0.8}
                    className="flex justify-center mt-8 pb-4"
                >
                    <Link
                        href="/application"
                        className="bg-white text-black px-8 py-4 rounded-full font-bold text-lg md:text-xl hover:bg-gray-200 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transform hover:scale-105"
                    >
                        公式アプリをインストール
                    </Link>
                </FadeIn>

            </div>
        </div>
    );
}