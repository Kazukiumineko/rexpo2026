import { FadeIn } from "@/components/shared/anim-wrapper";

export default function Message() {
    return (
        <section className="w-full bg-transparent text-white py-24 md:py-40 px-6 overflow-hidden">
            <div className="max-w-4xl mx-auto text-center">
                {/* === ヘッドライン === */}
                <FadeIn duration={1.2} className="mb-24 md:mb-32">
                    <h2 className="font-oswald text-6xl md:text-8xl font-bold tracking-tighter mb-4 text-white">
                        BE THE ORIGINAL
                    </h2>
                    <p className="text-2xl md:text-4xl font-bold tracking-widest text-white">
                        世界で唯一の君へ
                    </p>
                </FadeIn>

                {/* === 本文 === */}
                <div className="space-y-16 md:space-y-24 font-jp leading-loose text-gray-300">

                    {/* 塊1 */}
                    <FadeIn duration={1.2} delay={0.2} className="space-y-2">
                        <p className="text-xs md:text-xl">世界で、唯一の君へ。</p>
                        <p className="text-xs md:text-xl">君と同じ人は、世界に一人もいない。</p>
                        <p className="text-xs md:text-xl">君だけの個性が、君を創り、君を動かし、君を君らしく生かす。</p>
                    </FadeIn>

                    {/* 塊2 */}
                    <FadeIn duration={1.2} delay={0.4} className="space-y-2">
                        <p className="text-xs md:text-xl">そして、君以外のすべての人たちも、君と同じ唯一の存在。</p>
                        <p className="text-xs md:text-xl">その人の、個性がある。その人の、生き方がある。</p>
                    </FadeIn>

                    {/* 塊3 */}
                    <FadeIn duration={1.2} delay={0.6} className="space-y-2">
                        <p className="text-xs md:text-xl">私たちの学校は、ステンドグラスのような場所だ。</p>
                        <p className="text-xs md:text-xl">赤 青 黄色 のガラスが集まって、大きな絵ができる。</p>
                        <p className="text-xs md:text-xl">ひとつひとつのガラスの色は違っても、それはひとつの絵として美しく輝く。</p>
                    </FadeIn>

                    {/* 塊4 */}
                    <FadeIn duration={1.2} delay={0.8} className="space-y-8">
                        <div className="space-y-2">
                            <p className="text-xs md:text-xl">R-EXPOは、そんなガラスに光を当てる場所。</p>
                            <p className="text-xs md:text-xl">君の生き様を、ガラスいっぱいの光で輝かせる。</p>
                        </div>

                        <div className="space-y-2">
                            <p className="text-xs md:text-xl">私たちは、君の夢を知りたい。</p>
                            <p className="text-xs md:text-xl">私たちは、君の学びを知りたい。</p>
                            <p className="text-xs md:text-xl">私たちは、君が輝ける瞬間を知りたい。</p>
                        </div>
                    </FadeIn>

                    <FadeIn duration={1.2} delay={1.0} className="space-y-8">
                        <p className="text-xs md:text-xl">
                            君だけの個性が光るステージで、美しいガラスのピースを磨こう。
                        </p>
                    </FadeIn>

                </div>
            </div>
        </section>
    );
}