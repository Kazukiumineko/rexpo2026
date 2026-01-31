import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/shared/anim-wrapper";

interface FooterBarProps {
    variant?: "default" | "black";
}

export default function FooterBar({ variant = "default" }: FooterBarProps) {
    // ナビゲーション項目の定義 (Moved from EventInfo)
    const navItems = [
        { label: "TOPにもどる", href: "/" },
        { label: "コンセプト", href: "event-concept" },
        { label: "ステージ", href: "stage-concept" },
        { label: "会場", href: "location" },
        { label: "タイムテーブル", href: "timetable" },
        { label: "開祭にあたって", href: "message" },
        { label: "ご支援", href: "support" },
        { label: "参加申し込み", href: "entry" },
        { label: "特設アプリ", href: "application" },
    ];

    const isBlack = variant === "black";
    const bgClass = isBlack ? "bg-[#092040]" : "bg-white";
    const textClass = isBlack ? "text-[#f1f1f1]" : "text-[#092040]";
    const hoverBorderClass = isBlack ? "group-hover:border-[#f1f1f1]" : "group-hover:border-black";

    return (

        // フッター全体を包むコンテナ（背景なし・縦並び・中央揃え）
        <footer className="w-full flex flex-col items-center relative z-[999]">

            {/* Content Wrapper */}
            <FadeIn
                duration={0.8}
                className={`w-full ${bgClass} pt-28`}
            >
                {/* --- ① Moved from EventInfo: Text Content Area --- */}
                <div className={`w-full max-w-[1920px] mx-auto px-6 md:px-16 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-10 mb-30 ${textClass}`}>

                    {/* Left Column: Catchphrase & Nav */}
                    <div className="flex flex-col space-y-12">
                        {/* Catchphrase */}
                        <div>
                            <h2 className="font-oswald text-6xl md:text-8xl lg:text-[10rem] font-bold tracking-tighter leading-none">
                                <span className="inline-block">MOVE</span> <span className="inline-block">FORWARD</span> <br className="hidden lg:block" /> <span className="inline-block">INTO</span> <span className="inline-block">THE</span> <span className="inline-block">FUTURE</span>
                            </h2>
                            <p className="mt-4 text-base md:text-2xl lg:text-4xl font-medium tracking-[0.3em]">
                                進もう、ミライへ。
                            </p>
                        </div>

                        {/* Navigation */}
                        <div className="hidden lg:block grid grid-cols-2 gap-x-4 gap-y-3 md:gap-x-0">
                            {navItems.map((item, index) => (
                                <a
                                    key={index}
                                    href={item.href}
                                    className="group flex items-center text-xs md:text-sm font-medium tracking-wider hover:opacity-60 transition-opacity"
                                >
                                    <span className={`mr-2 text-[10px] md:text-xs ${isBlack ? "text-[#f1f1f1]" : "text-[#092040]"}`}>▶</span>
                                    <span className={`border-b border-transparent ${hoverBorderClass} transition-all`}>
                                        {item.label}
                                    </span>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Date & Location */}
                    <div className="flex flex-col justify-end items-end lg:items-end text-left lg:text-right">
                        <div className="leading-none mb-2">
                            <span className="font-oswald text-[100px] md:text-[140px] lg:text-[160px] font-bold tracking-tighter">
                                2/11
                            </span>
                        </div>
                        <p className="text-sm md:text-xl lg:text-2xl font-black tracking-tighter uppercase">
                            札幌コンベンションセンター
                        </p>
                    </div>
                </div>



            </FadeIn>


            {/* --- ③ 既存の黒いバーやっほー --- */}
            {/* ここに以前のfooterタグのスタイルを適用します */}
            <div className={`w-full ${isBlack ? "bg-[#092040] border-t border-white/20" : "bg-[#092040]"} text-white h-10 flex items-center justify-center px-4 md:px-8 relative`}>

                {/* 左側: 立命館ロゴ と SNSアイコン */}
                <div className="absolute left-4 md:left-8 top-1/2 transform -translate-y-1/2 flex items-center gap-4 md:gap-6">
                    <Image
                        src="/main/Ritsumeikan.png"
                        alt="Ritsumeikan Logo"
                        width={80}
                        height={30}
                        className="object-contain h-6 w-auto md:h-6"
                    />

                    {/* アイコン群 */}
                    <div className="flex items-center gap-3">
                        <a href="https://www2.spc.ritsumei.ac.jp/top_menu/topmenu.html" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition-colors">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                                <polyline points="9 22 9 12 15 12 15 22"></polyline>
                            </svg>
                        </a>
                        <a href="https://www.instagram.com/ritsumeikan_keisho_official/?hl=ja" target="_blank" rel="noopener noreferrer" className="opacity-50 hover:opacity-100 transition-opacity">
                            <Image
                                src="/main/Instagram_Glyph_White.svg"
                                alt="Instagram"
                                width={16}
                                height={16}
                                className="object-contain w-4 h-4"
                            />
                        </a>
                    </div>
                </div>

                {/* 右側: R-EXPOテキスト */}
                <div className="absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2 text-[10px] md:text-xs opacity-90">
                    <Link href="/license" className="hover:opacity-70 transition-opacity">
                        © 2026 R-EXPO Kazuki Nishijima
                    </Link>
                </div>

            </div>
        </footer>
    );
}