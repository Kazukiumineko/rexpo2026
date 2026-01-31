import Header from "@/components/main-ui/header";
import FooterBar from "@/components/main-ui/footer-bar";
import Top from "@/components/entry-ui/top";
import Title from "@/components/entry-ui/title";
import Main from "@/components/entry-ui/main";

export default function EntryPage() {
    return (
        <main className="flex flex-col min-h-screen w-full bg-white overflow-hidden">
            {/* ヘッダー */}
            <Header isVisible={true} invert />

            <div className="flex-grow">
                {/* ページ上部メッセージセクション */}
                <Top />
                {/* メインコンテンツ */}
                <Title />
                <Main />
            </div>

            {/* フッター */}
            <FooterBar variant="black" />
        </main>
    );
}