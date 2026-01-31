import JumpSection, { JumpLinkContent } from "@/components/shared/jump-section";

const contents: JumpLinkContent[] = [
    {
        title: "APPLICATION",
        description: (
            <>
                各企画の詳細情報はアプリでチェック！！<br />
                現在地マップ、リアルタイムな混雑状況、出場者一覧など、イベントをより快適に楽しむための機能が満載です。
            </>
        ),
        href: "/application",
        imageSrc: "/application/application-header.JPG",
        imageAlt: "Application Image",
    },
];

export default function Jump() {
    return <JumpSection contents={contents} theme="light" />;
}
