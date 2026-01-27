import StageInfoList from "@/components/shared/stage-info-list";

// 企画データ
const projects = [
    {
        title: "課題研究ポスターセッション",
        img: "/stage-concept/global1.jpg", // 仮の画像
        desc: "立命館慶祥ならではの「課題研究」の授業や、個人的な探究活動における生徒の成果発表をポスターセッションを通じて行います。また、学園125周年イベントにて掲示された博士課程の立命館大学大学院生のポスターや、立命館附属校の課題研究ポスターも掲示しています。",
    },
    {
        title: "SSH国際共同課題研究発表",
        img: "/stage-concept/global2.jpg", // 仮の画像
        desc: "SSH（スーパーサイエンスハイスクール）重点枠に指定されている慶祥が行ってきた、国際共同課題研究のステージです。当日はタイの提携校「Princess Chulabhorn Science High School」の生徒と共同研究の成果を発表し、慶祥が展開しているトルコやインドといった多様なコースの紹介もします。",
    },
    {
        title: "東北メディカルツアー報告",
        img: "/stage-concept/academic/Medical.jpg",
        desc: "医療に携わる方々から伺ったお話や、東日本大震災の被災地を実際に訪れて得た経験をもとに、次の世代に継承していきたい学びを、「地域医療」や「原子力災害」といった観点からリアルにお伝えします。",
    },
    {
        title: "立命館附属校 課題研究発表",
        img: "/stage-concept/global4.jpg", // 仮の画像
        desc: "学校法人立命館の附属校4校による課題研究発表会です。身近な疑問や国際的な課題からインスピレーションを受けた、独創的な研究が目白押し。瑞々しい感覚を持った高校生が全国から集まり、自身の興味関心を突き詰めた成果を発表します。。",
    },
];

export default function AcademicInfo() {
    return <StageInfoList projects={projects} />;
}
