"use client";

import Image from "next/image";

export default function FooterBar() {
    return (
        // フッター全体を包むコンテナ（背景なし・縦並び・中央揃え）
        <footer className="w-full flex flex-col items-center relative z-50">

            {/* --- ① 透明なロゴエリア（黒いバーの上側） --- */}
            {/* bg-transparentで透明背景を指定し、py-6で上下に余白を設ける */}
            <div className="w-full bg-transparent flex justify-center py-20">
                <Image
                    src="/FooterLOGO.png"
                    alt="Footer Logo"
                    // サイズは必要に応じて調整してください
                    width={160}
                    height={160}
                    // レスポンシブ対応のクラス
                    className="object-contain w-28 md:w-36 lg:w-40 h-auto"
                />
            </div>

            {/* --- ② 既存の黒いバー --- */}
            {/* ここに以前のfooterタグのスタイルを適用します */}
            <div className="w-full bg-black/85 text-white h-10 flex items-center justify-center px-4 md:px-8 relative">

                {/* 左側: 立命館ロゴ */}
                <div className="absolute left-4 md:left-8 top-1/2 transform -translate-y-1/2">
                    <Image
                        src="/Ritsumeikan.png"
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