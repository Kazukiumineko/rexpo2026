import Header from "@/components/main-ui/header";
import FooterBar from "@/components/main-ui/footer-bar";
import Message from "@/components/message-ui/message";
import MessageTop from "@/components/message-ui/top";


export default function MessagePage() {
    return (
        <main className="flex flex-col min-h-screen w-full bg-white overflow-hidden">

            {/* ヘッダー */}
            <Header isVisible={true} invert />

            <div className="flex-grow">
                {/* ページ上部メッセージセクション */}
                <MessageTop />
                <Message />
            </div>

            {/* フッター */}
            <FooterBar variant="black" />
        </main>
    );
}