import StageInfoList from "@/components/shared/stage-info-list";
import StageCarouselSection from "@/components/shared/stage-carousel-section";

// 企画データ
const projects = [
    {
        title: "課題研究ポスターセッション",
        img: "/stage-concept/icon/kenkyu.jpg", // 仮の画像
        desc: "立命館慶祥ならではの「課題研究」の授業や、個人的な探究活動における生徒の成果発表をポスターセッションを通じて行います。また、学園125周年イベントにて掲示された博士課程の立命館大学大学院生のポスターや、立命館学園附属校の課題研究ポスターも掲示しています。",
    },
    {
        title: "SSH国際共同課題研究発表",
        img: "/stage-concept/icon/ssh.png", // 仮の画像
        desc: "SSH（スーパーサイエンスハイスクール）重点枠に指定されている慶祥が行ってきた国際共同課題研究は、世界各地にある提携校の生徒と約半年間英語で共同研究活動を行い、お互いの国を訪問し合うプロジェクトです。当日はタイの提携校「Princess Chulabhorn Science High School」の生徒と共同研究の成果を発表します。また、慶祥が展開しているトルコやインドといった多様なコースの紹介もします。",
    },
    {
        title: "東北メディカルツアー報告",
        img: "/stage-concept/icon/Medical.jpg",
        desc: "医療に携わる方々から伺ったお話や東日本大震災の被災地を実際に訪れて得た経験をもとに、次の世代に継承していきたい学びを、「地域医療」や「原子力災害」といった観点からリアルにお伝えします。",
    },
    {
        title: "立命館附属校 課題研究発表",
        img: "/stage-concept/icon/gray_placeholder.svg", // 仮の画像
        desc: "学校法人立命館の附属校4校による課題研究発表会です。身近な疑問や国際的な課題からインスピレーションを受けた、独創的な研究が目白押し。瑞々しい感覚を持った高校生が全国から集まり、自身の興味関心を突き詰めた成果を発表します。",
    },
];

export default function AcademicInfo() {
    return (
        <>
            <StageCarouselSection
                id="academic"
                title="ACADEMIC STAGE"
                subtitle="知的好奇心が拓く、探究の地平"
                description="理数系の研究発表から社会問題や文化に関する研究まで、慶祥独自の学びが集結するエリアです。ほとんどの企画が”授業”の枠を飛び出して、生徒ひとりひとりが独自のテーマで進めた研究の成果です。ポスターセッションやプレゼン、ブース形式で紹介します。"
                image="/stage-concept/Academic.jpg"
            />
            <StageInfoList projects={projects} />
        </>
    );
}
