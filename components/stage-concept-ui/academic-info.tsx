import StageInfoList from "@/components/shared/stage-info-list";

// 企画データ
const projects = [
    {
        title: "課題研究ポスターセッション",
        img: "/stage-concept/global1.jpg", // 仮の画像
        desc: "物理・化学・生物・地学の実験・観察報告。身近な自然現象への疑問から始まり、緻密なデータ収集と分析を経て導き出された考察。科学的な思考力と探究心を披露します。",
    },
    {
        title: "SSH国際共同課題研究発表",
        img: "/stage-concept/global2.jpg", // 仮の画像
        desc: "歴史、経済、政治など社会課題への取り組み。文献研究に加え、アンケートやインタビューなどのフィールドワークを実施。得られた生きた情報を基に、独自の視点で社会を分析します。",
    },
    {
        title: "東北メディカルツアー報告",
        img: "/stage-concept/global3.jpg", // 仮の画像
        desc: "数学的な定理の証明や、プログラミングを用いたアプリ開発。論理的な思考プロセスと、技術を駆使して問題を解決する創造性。数理・情報科学分野の課題研究発表です。",
    },
    {
        title: "生徒ブース展示",
        img: "/stage-concept/global4.jpg", // 仮の画像
        desc: "文学作品の分析、言語研究、哲学的な問いへの思索。言葉や文化に対する深い洞察と、豊かな表現力で紡がれる知の世界。多様な価値観に触れ、人間理解を深める機会を提供します。",
    },
];

export default function AcademicInfo() {
    return <StageInfoList projects={projects} />;
}
