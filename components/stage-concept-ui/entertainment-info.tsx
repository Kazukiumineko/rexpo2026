import StageInfoList from "@/components/shared/stage-info-list";
import StageCarouselSection from "@/components/shared/stage-carousel-section";

// 企画データ
const projects = [
    {
        title: "バンド・ダンス発表",
        img: "/stage-concept/icon/band.jpg", // 仮の画像
        desc: "有志の生徒たちが繰り広げる、熱気あふれるバンド＆ダンスステージ！ 個性豊かな5組のバンドと7組のダンスチームが集結しました。 それぞれの情熱が詰まったパフォーマンスが、次々とステージを彩ります。生徒たちが作り出す圧倒的なエネルギーを、ぜひライブで体感してください。",
    },
    {
        title: "芸術発表",
        img: "/stage-concept/icon/geijyutu.jpg", // 仮の画像
        desc: "ピアノやヴァイオリン、バレエなど、多様な芸術領域に取り組む有志生徒による発表です。各分野で技術と感性を磨き続ける生徒たちが、日頃の練習の成果をステージ上で披露します。ぜひご覧ください。",
    },
    {
        title: "e-Sports大会",
        img: "/stage-concept/icon/esports.jpg", // 仮の画像
        desc: "「大乱闘スマッシュブラザーズ」を使ったe-Sports大会を開催！白熱の対戦を通して、ゲームの魅力や競技としての面白さを伝えます。ゲームも一つの個性としてR-EXPOの場で表現し、多様性を発信します。",
    },
];

export default function EntertainmentInfo() {
    return (
        <>
            <StageCarouselSection
                id="entertainment"
                title="ENTERTAINMENT STAGE"
                subtitle="感性が共鳴する、創造の舞台"
                description="バンド、ダンス、演劇などのステージで、生徒たちの情熱と創造性が爆発します。ステージ上のパフォーマンスだけでなく、美術作品展示やお茶会、E-Sports大会など、五感で楽しめる多彩なプログラムが会場を彩ります。"
                image="/stage-concept/Entame.jpg"
            />
            <StageInfoList projects={projects} />
        </>
    );
}
