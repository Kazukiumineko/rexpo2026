import StageInfoList from "@/components/Shared/StageInfoList";

// 企画データ
const projects = [
    {
        title: "バンド・ダンス発表",
        img: "/stage-concept/global1.jpg", // 仮の画像
        desc: "コンクール入賞実績を持つ吹奏楽部による迫力の演奏。クラシックからポップスまで、息の合ったアンサンブルで披露。日々の練習が紡ぎ出す美しいハーモニーが、会場全体を感動で包み込みます。",
    },
    {
        title: "芸術発表",
        img: "/stage-concept/global2.jpg", // 仮の画像
        desc: "生徒が脚本・演出を手掛けるオリジナル演劇。笑いあり涙ありの青春ストーリーや、社会問題を鋭く切り取るシリアスな作品。舞台上で輝く役者たちの熱演にご注目ください。",
    },
    {
        title: "生徒有志企画",
        img: "/stage-concept/global3.jpg", // 仮の画像
        desc: "ヒップホップ、ジャズ、創作ダンスなど多彩なジャンル。躍動感あふれる動きとキレのある振付で表現する、若さ漲るエネルギー。チームワーク抜群の群舞と個性際立つソロ、その融合をお楽しみください。",
    },
    {
        title: "演劇公演",
        img: "/stage-concept/global4.jpg", // 仮の画像
        desc: "美術部・写真部による作品展示。絵画、彫刻、インスタレーション、風景写真、ポートレート。独自の感性で切り取られた世界観と、作品一つひとつに込められた作者の想いを感じてください。",
    },
];

export default function EntertainmentInfo() {
    return <StageInfoList projects={projects} />;
}
