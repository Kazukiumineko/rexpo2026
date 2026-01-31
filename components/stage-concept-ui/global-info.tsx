import StageInfoList from "@/components/shared/stage-info-list";
import StageCarouselSection from "@/components/shared/stage-carousel-section";

// 企画データ（4つに厳選）
const projects = [
    {
        title: "高校海外研修報告",
        img: "/stage-concept/global1.jpg",
        desc: "アメリカ、カナダ、オーストラリアなど世界5カ国での語学研修とホームステイ。現地で直面した「言葉の壁」や「文化の違い」を乗り越え、ホストファミリーとの生活から得たコミュニケーションの極意。自身の価値観が揺さぶられた体験を語ります。",
    },
    {
        title: "中学研修報告",
        img: "/stage-concept/global2.jpg",
        desc: "ニュージーランドやシンガポールを訪れた中学研修。初めて親元を離れた異国で、同世代との交流を通じて感じた「通じる喜び」と「伝えられないもどかしさ」。中学生ならではの瑞々しい感性で切り取った、発見と成長の記録です。",
    },
    {
        title: "留学報告",
        img: "/stage-concept/global3.jpg",
        desc: "1年間の長期留学を経た帰国報告会。語学習得を超え、現地の部活や地域活動に参加することで「外国人」から「地域の一員」へと変わっていく過程。挫折と孤独を乗り越え、自信と将来のビジョンを掴むまでの熱い軌跡。",
    },
    {
        title: "トビタテ留学JAPAN",
        img: "/stage-concept/global4.jpg",
        desc: "官民協働海外留学支援制度「トビタテ！留学JAPAN」日本代表による探究報告。「日本の伝統文化発信」や「環境問題調査」など自ら設定したテーマで挑んだフィールドワーク。次世代リーダーとしての実行力と志をプレゼンテーションします。",
    },
];

export default function GlobalInfo() {
    return (
        <>
            <StageCarouselSection
                id="global"
                title="GLOBAL STAGE"
                subtitle="国境を越えた学びが生む、慶祥生の未来"
                description="海外研修や留学、国際交流活動に参加した慶祥生が、現地での体験や学びを発表するステージです。国境を越えて異文化に触れ、多様な価値観と向き合ってきた慶祥生。教室にいるだけでは学べない、高校生が見た世界の今をお伝えします。"
                image="/stage-concept/global2.jpg"
            />
            <StageInfoList projects={projects} />
        </>
    );
}