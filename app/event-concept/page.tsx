// ★ MainUI からインポートするように修正しています
import { MenuButton } from "@/components/MainUI/02_Header";
import FooterBar from "@/components/MainUI/09_FooterBar";

export default function EventConceptPage() {
    return (
        <main className="relative w-full bg-transparent text-white min-h-screen">
            <MenuButton />

            {/* ページヘッダー */}
            <div className="pt-32 pb-12 px-6 text-center">
                <h1 className="text-4xl font-bold mb-4">Event Concept</h1>
                <p>イベントのコンセプトと3つのステージについて</p>
            </div>

            {/* --- Global Stage Section --- */}
            {/* id="global" を設定（トップページからジャンプするため） */}
            <section id="global" className="py-24 px-6 border-t border-gray-200">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold mb-6 text-[#800000]">Global Stage</h2>
                    <p className="leading-relaxed mb-4">
                        （ここにGlobal Stageの説明文が入ります）<br />
                        世界中から集まる参加者と共に、多様な文化に触れ合うステージです。
                    </p>
                    {/* 必要であればここに画像などを追加 */}
                </div>
            </section>

            {/* --- Academic Stage Section --- */}
            <section id="academic" className="py-24 px-6 border-t border-gray-200">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold mb-6 text-[#800000]">Academic Stage</h2>
                    <p className="leading-relaxed mb-4">
                        （ここにAcademic Stageの説明文が入ります）<br />
                        知的好奇心を刺激し、深い学びと対話を生み出すアカデミックなプログラムです。
                    </p>
                </div>
            </section>

            {/* --- Artistic Stage Section --- */}
            <section id="artistic" className="py-24 px-6 border-t border-gray-200">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold mb-6 text-[#800000]">Artistic Stage</h2>
                    <p className="leading-relaxed mb-4">
                        （ここにArtistic Stageの説明文が入ります）<br />
                        創造性を解放し、表現することの喜びを分かち合う芸術的なステージです。
                    </p>
                </div>
            </section>

            {/* フッター */}
            <div className="relative z-50">
                <FooterBar />
            </div>
        </main>
    );
}