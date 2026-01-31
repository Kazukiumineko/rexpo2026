import JumpSection, { JumpLinkContent } from "@/components/shared/jump-section";

const contents: JumpLinkContent[] = [
    {
        title: "STAGE CONCEPT",
        description: "R-EXPOには、多様な個性が輝く4つのステージがあります。学術的な探求から芸術的な表現、そしてグローバルな視点まで、生徒たちが自らの熱量を解き放つ多彩なコンセプトを紹介します。",
        href: "/stage-concept",
        imageSrc: "/main/Satoryo1.png",
        imageAlt: "Stage Concept Image",
    },
    {
        title: "MESSAGE",
        description: "立命館慶祥中学校・高等学校 校長よりご挨拶申し上げます。 本イベントの企画・運営を担う、有志生徒によって結成された「行事改革実行委員会（行事部）」の 部長からのメッセージもあわせて掲載いたします。",
        href: "/message",
        imageSrc: "/message/Kocho.jpg",
        imageAlt: "Message Image",
    },
];

export default function Jump() {
    return <JumpSection contents={contents} />;
}