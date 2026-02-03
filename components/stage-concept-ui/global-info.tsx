import StageInfoList from "@/components/shared/stage-info-list";
import StageCarouselSection from "@/components/shared/stage-carousel-section";

// 企画データ（4つに厳選）
const projects = [
    {
        title: "高校海外研修報告",
        img: "/stage-concept/icon/Kenshu.jpg",
        desc: "「世界に通用する18歳」を育てる、本校の真骨頂ともいえる海外研修プログラム。 今年度も世界9カ国・地域に渡り、教室では得られない実践的な学びを行ってきました。単なる語学学習や観光にとどまらず、現地の高校生徒の交流やや企業・研究施設でのフィールドワークを通じて、多様な価値観と向き合い、自らの視野を大きく広げます。彼らが現地で何を見て、何を感じ、何を問い直したのか、その成果と成長の軌跡を発表します。",
    },
    {
        title: "中学研修報告",
        img: "/stage-concept/icon/nz.jpg",
        desc: "中学生が9月から10月にかけて行ってきた、北海道・京都・ニュージーランドでの経験をプレゼンテーション形式で発表します。授業の時間を通してそれぞれの探究テーマを立てた中学生が、学校を出て国内外で得た知見を独自の感性を交え、研修報告を行います。",
    },
    {
        title: "トビタテ！留学JAPAN特別企画",
        img: "/stage-concept/icon/tobitate.jpg",
        desc: "トビタテ！留学JAPANの広報を行う学生団体「Smile」との特別企画です。本校から留学に行った生徒2名に加え、学外からも道内のトビタテ生が集結。それぞれが取り組んできた留学や探究活動を報告します。留学を考えている生徒への相談ブースも用意しています。",
    },
    {
        title: "国際部 留学報告",
        img: "/stage-concept/icon/gray_placeholder.svg",
        desc: "準備中",
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
                image="/stage-concept/Global.jpg"
            />
            <StageInfoList projects={projects} />
        </>
    );
}