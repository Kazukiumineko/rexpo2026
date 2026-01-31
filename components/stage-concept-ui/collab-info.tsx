import StageInfoList from "@/components/shared/stage-info-list";
import StageCarouselSection from "@/components/shared/stage-carousel-section";

// 企画データ
const projects = [
    {
        title: "Rising Teenager Award 2026",
        img: "/stage-concept/global1.jpg", // 仮の画像
        desc: "若者が若者を審査する新しいアワードが、この冬、札幌で開幕。札幌雪まつりに匹敵するような、新しい若者の祭典を作ろうと集まった学生たち。その学生たちが自ら審査委員を務め、「ファッション」「平和」「食」「伝統文化」「雪」「スポーツ」の6つの分野で独自の活動をする若者を、日本全国からリサーチし、ノミネートしました。授賞式では、選ばれた候補者らが札幌に集い、ファッションショーから伝統民謡の披露、ディベートまで、様々なパフォーマンスが繰り広げられます。若者が、自分たちの世代を象徴する活動を、自ら選んで表彰することで、若者世代の価値観を発信していきます。",
    },
    {
        title: "もののけアートワークショップ",
        img: "/stage-concept/global2.jpg", // 仮の画像
        desc: "絵本「もののけしょくどううらめしや」の作者と共に、思い出の品をもののけアートにアップデート！物の価値を新たな視点で発見し、柔軟な想像力や発想力を育むワークショップです。身の回りの使わなくなったものを 1 点お持ちください。",
    },
    {
        title: "Wallpaper あそび",
        img: "/stage-concept/global2.jpg", // 仮の画像
        desc: "株式会社サンゲツご協力のもと、壁紙を使ったワークショップを開催！もののけしょくどううらめしやのキャラクターを壁紙の端材を利用したアート制作ワークショップや、壁紙のサンプルを利用したフォトフレーム制作も実施。デジタル空間での理想の部屋づくり体験もできます。予約不要ですのでお気軽にお越しください。",
    },
    {
        title: "協賛企業ブース展示",
        img: "/stage-concept/global4.jpg", // 仮の画像
        desc: "持続可能な開発目標（SDGs）達成に向けたアクションプラン。環境保全、貧困対策、ジェンダー平等など、グローバルな課題を自分事として捉え、身近な一歩から始める具体的な取り組みを提言します。",
    },
    {
        title: "開閉会式コラボステージ",
        img: "/stage-concept/global4.jpg", // 仮の画像
        desc: "持続可能な開発目標（SDGs）達成に向けたアクションプラン。環境保全、貧困対策、ジェンダー平等など、グローバルな課題を自分事として捉え、身近な一歩から始める具体的な取り組みを提言します。",
    },
    {
        title: "北昴×慶祥 世代を超えるYOSAKOIソーラン",
        img: "/stage-concept/global4.jpg", // 仮の画像
        desc: "持続可能な開発目標（SDGs）達成に向けたアクションプラン。環境保全、貧困対策、ジェンダー平等など、グローバルな課題を自分事として捉え、身近な一歩から始める具体的な取り組みを提言します。",
    },
    {
        title: "立命館大学コラボ企画",
        img: "/stage-concept/global4.jpg", // 仮の画像
        desc: "持続可能な開発目標（SDGs）達成に向けたアクションプラン。環境保全、貧困対策、ジェンダー平等など、グローバルな課題を自分事として捉え、身近な一歩から始める具体的な取り組みを提言します。",
    },
];

export default function CollabInfo() {
    return (
        <>
            <StageCarouselSection
                id="collaboration"
                title="COLLABORATION STAGE"
                subtitle="社会と繋がる、共創の架け橋"
                description="協賛企業によるブース出展や講演会、立命館学園との連携企画など、学校と社会がつながるエリアです。 将来のキャリアや進路について考えるきっかけとなることはもちろん、プロによる圧巻のパフォーマンスや、生徒とのスペシャルコラボステージも多数用意しています。"
                image="/stage-concept/global1.jpg"
            />
            <StageInfoList projects={projects} />
        </>
    );
}
