export interface Sponsor {
    name: string;
    url: string;
    color?: string;
    logo?: string;
}

// 協賛企業データ（画像から抽出）
// ※ logoのパスは仮定のものです。実際の画像ファイル名に合わせて変更するか、
//   public/sponsors/ フォルダに以下の名前で画像を保存してください。
export const sponsors: Sponsor[] = [
    {
        name: "医療法人明日葉会 札幌マタニティウィメンズホスピタル",
        logo: "/support/resize_Hospital.jpg",
        url: "https://www.smwh.or.jp/",
    },
    {
        name: "株式会社VOREAS（ヴォレアス）",
        logo: "/support/resize_voreas.jpeg",
        url: "https://voreas.co.jp/",
    },
    {
        name: "株式会社MLP",
        logo: "/support/mlp-logo.jpg",
        url: "https://top.metulab.co.jp/",
    },
    {
        name: "株式会社グロースアソシエーション",
        color: "#E040FB",
        url: "https://g-assoc.co.jp/",
    },
    {
        name: "株式会社サンゲツ",
        logo: "/support/Sangetsu.jpg",
        url: "https://www.sangetsu.co.jp/",
    },
    {
        name: "株式会社JTB",
        logo: "/support/jtb.jpg",
        url: "https://www.jtbcorp.jp/jp/",
    },
    {
        name: "株式会社鈴木商会",
        logo: "/support/resize_Suzuki.jpg",
        url: "https://www.suzuki-shokai.co.jp/",
    },
    {
        name: "株式会社SOUSHINホールディングス",
        logo: "/support/resize_Soushin.jpg",
        url: "https://k-soushin.co.jp/",
    },
    {
        name: "株式会社ビズリーチ",
        logo: "/support/Bizreach.jpg",
        url: "https://www.bizreach.co.jp/sustainability/",
    },
    {
        name: "株式会社北海道イエロースターズ",
        logo: "/support/resize_Yellow.jpg",
        url: "https://hy-stars.jp/",
    },
    {
        name: "株式会社HONNOW",
        logo: "/support/honnow.jpg",
        url: "https://honnow-tokyo.com/",
    },
    {
        name: "株式会社ミライシアホールディング",
        color: "#B2FF59",
        url: "https://miraisia.co.jp/",
    },

    {
        name: "株式会社レコハイ",
        logo: "/support/resize_rekohi.jpg",
        url: "https://smaspisport2000.wixsite.com/home",
    },
    {
        name: "北昴",
        logo: "/support/resize_kitasubaru.jpg",
        url: "https://kitasubaru.net",
    },
    {
        name: "草野作工株式会社",
        logo: "/support/resize_Kusano.jpg",
        url: "https://www.kusanosk.co.jp/",
    },
    {
        name: "電制コムテック株式会社",
        logo: "/support/resize_dencom.jpg",
        url: "https://www.dencom.co.jp/",
    },
    {
        name: "東京科学大学（梅室博行研究室）",
        logo: "/support/resize_Tokyo.jpg",
        url: "https://www.affectivelaboratory.org/index.php/ja/",
    },
    {
        name: "北海道医療大学",
        logo: "/support/resize_Iryodai.jpg",
        url: "https://www.hoku-iryo-u.ac.jp/",
    },
    {
        name: "北海道大学 社会・地域創発本部",
        logo: "/support/resize_Hokudai.jpg",
        url: "https://coi-next.fmi.hokudai.ac.jp/about",
    },
    {
        name: "北海道ポラコン株式会社",
        logo: "/support/resize_porakon.jpg",
        url: "https://poracon.jp/",
    },


    {
        name: "Letara株式会社",
        logo: "/support/resize_Letara.jpg",
        url: "https://www.letaranext.com/ja-jp",
    },
];
