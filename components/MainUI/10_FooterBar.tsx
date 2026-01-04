"use client";

import Image from "next/image";

export default function FooterBar() {
    // ナビゲーション項目の定義 (Moved from EventInfo)
    const navItems = [
        { label: "R-EXPOとは", href: "#" },
        { label: "協賛企業", href: "#" },
        { label: "ステージ紹介", href: "#" },
        { label: "代表より", href: "#" },
        { label: "会場", href: "#" },
        { label: "特設アプリ", href: "#" },
    ];

    return (

        // フッター全体を包むコンテナ（背景なし・縦並び・中央揃え）
        <footer className="w-full flex flex-col items-center relative z-50">

            {/* Content Wrapper with White Background */}
            <div className="w-full bg-white pt-28">
                {/* --- ① Moved from EventInfo: Text Content Area --- */}
                <div className="w-full max-w-[1920px] mx-auto px-6 md:px-16 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-10 mb-30 text-gray-800">

                    {/* Left Column: Catchphrase & Nav */}
                    <div className="flex flex-col space-y-12">
                        {/* Catchphrase */}
                        <div>
                            <h2 className="font-oswald text-6xl md:text-8xl lg:text-[10rem] font-bold tracking-tighter leading-none">
                                <span className="inline-block">MOVE</span> <span className="inline-block">FORWARD</span> <br className="hidden lg:block" /> <span className="inline-block">INTO</span> <span className="inline-block">THE</span> <span className="inline-block">FUTURE</span>
                            </h2>
                            <p className="mt-4 text-base md:text-2xl lg:text-4xl font-medium tracking-[0.3em] opacity-80">
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
                                    <span className="mr-2 text-[10px] md:text-xs">▷</span>
                                    <span className="border-b border-transparent group-hover:border-black transition-all">
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


                {/* --- ② 透明なロゴエリア（黒いバーの上側） --- */}
                {/* bg-transparentで透明背景を指定し、py-6で上下に余白を設ける */}
                <div className="w-full bg-white flex justify-center items-center py-10 border-t border-gray-100">
                    <Image
                        src="/main/FooterLOGO.png"
                        alt="Footer Logo"
                        // サイズは必要に応じて調整してください
                        width={160}
                        height={160}
                        // レスポンシブ対応のクラス
                        className="object-contain w-28 md:w-36 lg:w-40 h-auto"
                    />
                </div>
            </div>

            {/* --- ③ 既存の黒いバー --- */}
            {/* ここに以前のfooterタグのスタイルを適用します */}
            <div className="w-full bg-black/85 text-white h-10 flex items-center justify-center px-4 md:px-8 relative">

                {/* 左側: 立命館ロゴ */}
                <div className="absolute left-4 md:left-8 top-1/2 transform -translate-y-1/2">
                    <Image
                        src="/main/Ritsumeikan.png"
                        alt="Ritsumeikan Logo"
                        width={80}
                        height={30}
                        className="object-contain h-6 w-auto md:h-6"
                    />
                </div>

                {/* 中央: 学校名テキスト（スマホでは非表示） */}
                <div className="hidden md:block text-center font-light text-xs px-2">
                    Ritsumeikan Keishi Junior Senior High School
                </div>

                {/* 右側: R-EXPOテキスト */}
                <div className="absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2 text-[10px] md:text-xs opacity-90">
                    R-EXPO2026
                </div>

            </div>
        </footer>
    );
}