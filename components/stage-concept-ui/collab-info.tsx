import StageInfoList from "@/components/shared/stage-info-list";
import StageCarouselSection from "@/components/shared/stage-carousel-section";

// 企画データ
const projects = [
    {
        title: "Rising Teenager Award 2026",
        img: "/stage-concept/icon/rising.jpg", // 仮の画像
        desc: "若者が若者を審査する新しいアワードが、この冬、札幌で開幕。札幌雪まつりに匹敵するような、新しい若者の祭典を作ろうと集まった学生たち。その学生たちが自ら審査委員を務め、「ファッション」「平和」「食」「伝統文化」「雪」「スポーツ」の6つの分野で独自の活動をする若者を、日本全国からリサーチし、ノミネートしました。授賞式では、選ばれた候補者らが札幌に集い、ファッションショーから伝統民謡の披露、ディベートまで、様々なパフォーマンスが繰り広げられます。若者が、自分たちの世代を象徴する活動を、自ら選んで表彰することで、若者世代の価値観を発信していきます。",
    },
    {
        title: "もののけアートワークショップ",
        img: "/stage-concept/icon/Mononoke.jpg", // 仮の画像
        desc: "絵本「もののけしょくどううらめしや」の作者と共に、思い出の品をもののけアートにアップデート！物の価値を新たな視点で発見し、柔軟な想像力や発想力を育むワークショップです。身の回りの使わなくなったものを 1 点お持ちください。",
    },
    {
        title: "Wallpaper あそび",
        img: "/stage-concept/icon/wall.jpg", // 仮の画像
        desc: "株式会社サンゲツご協力のもと、壁紙を使ったワークショップを開催！もののけしょくどううらめしやのキャラクターを壁紙の端材を利用したアート制作ワークショップや、壁紙のサンプルを利用したフォトフレーム制作も実施。デジタル空間での理想の部屋づくり体験もできます。予約不要ですのでお気軽にお越しください。",
    },
    {
        title: "北昴×慶祥 世代を超えるYOSAKOIソーラン",
        img: "/stage-concept/icon/kitasubaru.jpg", // 仮の画像
        desc: "YOSAKOIソーラン祭で活躍している「北昴」と慶祥生とのコラボステージが実現。見る人に元気を与える力強い演舞作品『もういっちょ！』を披露します。 北昴のメンバーと生徒が一体となって踊り、会場を熱く盛り上げます。 圧倒的な表現力を持つプロの舞と、生徒たちの弾けるエネルギーが融合する、この日限りの特別な共演をぜひご覧ください！",
    },
    {
        title: "300万人が学んだProgate創業者によるライブデモ",
        img: "/stage-concept/icon/ceo.png", // 仮の画像
        desc: "AIを使って実際にプロダクトを創るライブデモを行いながら、創業ストーリーやAI時代のものづくりについてお話しいただきます。「AIでこんなことができる」という話だけでなく、実際にその場で作り上げる体験を共有することで、「自分にもできそう!」という感覚を持ってもらえる内容となっています。",
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
                image="/stage-concept/Collab.jpg"
            />
            <StageInfoList projects={projects} />
        </>
    );
}
