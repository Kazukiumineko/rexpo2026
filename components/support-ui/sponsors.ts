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
        logo: "/support/Hospital.png",
        url: "https://www.smwh.or.jp/",
    },
    {
        name: "株式会社VOREAS（ヴォレアス）",
        color: "#FF4081",
        url: "https://voreas.co.jp/",
    },
    {
        name: "株式会社MLP",
        color: "#448AFF",
        url: "https://top.metulab.co.jp/",
    },
    {
        name: "北昴",
        logo: "/support/kitasubaru.jpg",
        url: "https://kitasubaru.net",
    },
    {
        name: "草野作工株式会社",
        logo: "/support/kusano.jpg",
        url: "https://www.kusanosk.co.jp/",
    },
    {
        name: "株式会社グロースアソシエーション",
        color: "#E040FB",
        url: "https://g-assoc.co.jp/",
    },
    {
        name: "株式会社JTB",
        color: "#00BCD4",
        url: "https://www.jtbcorp.jp/jp/",
    },
    {
        name: "株式会社鈴木商会",
        logo: "/support/Suzuki.jpg",
        url: "https://www.suzuki-shokai.co.jp/",
    },
    {
        name: "株式会社SOUSHINホールディングス",
        logo: "/support/Soushin.jpg",
        url: "https://k-soushin.co.jp/",
    },
    {
        name: "電制コムテック株式会社",
        logo: "/support/dencom_v2.jpg",
        url: "https://www.dencom.co.jp/",
    },
    {
        name: "東京科学大学（梅室博行研究室）",
        logo: "/support/Tokyo.jpg",
        url: "https://www.affectivelaboratory.org/index.php/ja/",
    },
    {
        name: "北海道医療大学",
        logo: "/support/Iryodai.jpg",
        url: "https://www.hoku-iryo-u.ac.jp/",
    },
    {
        name: "北海道ポラコン株式会社",
        logo: "/support/Porakon.jpg",
        url: "https://poracon.jp/",
    },
    {
        name: "株式会社北海道イエロースターズ",
        color: "#FFAB40",
        url: "https://hy-stars.jp/",
    },
    {
        name: "株式会社ミライシアホールディング",
        color: "#B2FF59",
        url: "https://miraisia.co.jp/",
    },
    {
        name: "株式会社レコハイ",
        logo: "/support/rekohai.jpg",
        url: "https://smaspisport2000.wixsite.com/home",
    },
    {
        name: "Letara株式会社",
        logo: "/support/Letara.jpg",
        url: "https://www.letaranext.com/ja-jp",
    },
];
