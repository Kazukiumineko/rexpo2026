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
        color: "#FF6B6B",
        url: "https://www.smwh.or.jp/",
    },
    {
        name: "株式会社VOREAS（ヴォレアス）",
        color: "#4ECDC4",
        url: "https://voreas.co.jp/",
    },
    {
        name: "株式会社MLP",
        color: "#45B7D1",
        url: "https://jobsolution.jp/",
    },
    {
        name: "北昴",
        logo: "/support/kitasubaru.jpg",
        url: "https://www.instagram.com/kitasubaru/",
    },
    {
        name: "草野作工株式会社",
        color: "#96CEB4",
        url: "https://www.kusanosk.co.jp/",
    },
    {
        name: "株式会社グロースアソシエーション",
        color: "#9B59B6",
        url: "https://g-assoc.co.jp/",
    },
    {
        name: "株式会社JTB",
        color: "#3498DB",
        url: "https://www.jtbcorp.jp/jp/",
    },
    {
        name: "株式会社鈴木商会",
        color: "#E67E22",
        url: "https://www.suzuki-shokai.co.jp/",
    },
    {
        name: "株式会社SOUSHINホールディングス",
        color: "#1ABC9C",
        url: "https://k-soushin.co.jp/",
    },
    {
        name: "電制コムテック株式会社",
        logo: "/support/dencom.jpg",
        url: "https://www.dencom.co.jp/",
    },
    {
        name: "東京科学大学（梅室博行研究室）",
        color: "#E74C3C",
        url: "https://www.affectivelaboratory.org/index.php/ja/",
    },
    {
        name: "北海道医療大学",
        color: "#2ECC71",
        url: "https://www.hoku-iryo-u.ac.jp/",
    },
    {
        name: "北海道ポラコン株式会社",
        color: "#8E44AD",
        url: "https://poracon.jp/",
    },
    {
        name: "株式会社北海道イエロースターズ",
        color: "#F39C12",
        url: "https://hy-stars.jp/",
    },
    {
        name: "株式会社ミライシアホールディング",
        color: "#34495E",
        url: "https://miraisia.co.jp/",
    },
    {
        name: "株式会社レコハイ",
        color: "#16A085",
        url: "https://smaspisport2000.wixsite.com/home",
    },
    {
        name: "Letara株式会社",
        color: "#27AE60",
        url: "https://www.letaranext.com/ja-jp",
    },
];
