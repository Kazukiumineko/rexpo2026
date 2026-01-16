"use client";


import LazyImage from "@/components/Shared/LazyImage";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

// 協賛企業データ（画像から抽出）
// ※ logoのパスは仮定のものです。実際の画像ファイル名に合わせて変更するか、
//   public/sponsors/ フォルダに以下の名前で画像を保存してください。
const sponsors = [
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


export default function SponsorsSection() {
    return (
        <section className="w-full bg-white text-black pt-0 pb-20 md:py-20 px-6 md:px-12 lg:px-20">
            <div className="max-w-[1400px] mx-auto">

                {/* グリッドレイアウト: PCで2列、スマホで1列 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 md:gap-y-8">



                    {sponsors.map((sponsor, index) => (
                        <motion.a
                            key={index} // URLや名前が重複する可能性も考慮しindexも使用可能ですが、今回はユニークなのでnameでもOK
                            href={sponsor.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.05 }} // 少しずつ順番に出現させる
                            // 少し浮き出るようなホバーエフェクト
                            className="group flex items-center p-4 border border-gray-100 rounded-lg hover:bg-gray-50 hover:shadow-sm transition-all duration-300"
                        >
                            {/* 1. ロゴ画像エリア（左） */}
                            <div className="relative w-16 h-16 md:w-20 md:h-20 flex-shrink-0 overflow-hidden rounded-md border border-gray-200 bg-white mr-5 flex items-center justify-center">
                                {sponsor.logo ? (
                                    <LazyImage
                                        src={sponsor.logo}
                                        alt={sponsor.name}
                                        fill
                                        containerClassName="w-full h-full bg-transparent"
                                        className="object-contain p-2"
                                    />
                                ) : (
                                    <div
                                        className="w-full h-full flex items-center justify-center text-white font-bold text-2xl md:text-3xl select-none"
                                        style={{ backgroundColor: sponsor.color || '#ccc' }}
                                    >
                                        {sponsor.name.charAt(0)}
                                    </div>
                                )}
                            </div>

                            {/* 2. 会社名（右） */}
                            <div className="flex-1 min-w-0"> {/* min-w-0 はテキスト切り詰め用 */}
                                <h3 className="font-oswald text-base md:text-lg font-bold text-gray-800 group-hover:text-blue-700 transition-colors break-words">
                                    {sponsor.name}
                                </h3>
                            </div>

                            {/* 3. 外部リンクマーク（さらに右端） */}
                            <div className="ml-4 flex-shrink-0">
                                <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-blue-700 transition-colors" />
                            </div>

                        </motion.a>
                    ))}



                </div>
            </div>
        </section>
    );
}