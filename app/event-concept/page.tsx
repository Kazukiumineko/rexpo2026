// ★UIコンポーネントのインポート
// (フォルダ構成が components/MainUI になっている前提です)
import Header from "@/components/main-ui/header";
import FooterBar from "@/components/main-ui/footer-bar";
import Introduction from "@/components/event-concept-ui/introduction";
import Topic from "@/components/event-concept-ui/topic";
import Message from "@/components/event-concept-ui/message";
import Pic from "@/components/event-concept-ui/pic";
import Jump from "@/components/event-concept-ui/jump";
import EventBackground from "@/components/event-concept-ui/background";

export default function EventConceptPage() {

    return (
        <main className="relative w-full min-h-screen text-white overflow-x-hidden">
            <EventBackground />

            {/* コンテンツラッパー (z-indexを上げて背景の上に表示) */}
            <div className="relative z-10 w-full">
                <Header isVisible={true} />

                <Introduction />
                <Pic />
                <Message />
                <Topic />
                <Jump />
                <FooterBar />
            </div>

        </main>
    );
}