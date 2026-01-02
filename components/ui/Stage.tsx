"use client";

import Image from "next/image";

export default function StageSection() {
    const stages = [
        {
            title: "Global Stage",
            description: "タイ、マレーシア、ベトナム、アメリカ、オーストラリア、リトアニア、ガラパゴス諸島・・・彼らが語るのは、ネットで調べた情報のまとめではありません。「トビタテ！留学JAPAN」や海外研修で直面したトラブル、現地の人との対話、そして肌で感じた文化の違いという「生きた体験」です。",
        },
        {
            title: "Academic Stage",
            description: "タイ、マレーシア、ベトナム、アメリカ、オーストラリア、リトアニア、ガラパゴス諸島・・・彼らが語るのは、ネットで調べた情報のまとめではありません。「トビタテ！留学JAPAN」や海外研修で直面したトラブル、現地の人との対話、そして肌で感じた文化の違いという「生きた体験」です。",
        },
        {
            title: "Artistic Stage",
            description: "タイ、マレーシア、ベトナム、アメリカ、オーストラリア、リトアニア、ガラパゴス諸島・・・彼らが語るのは、ネットで調べた情報のまとめではありません。「トビタテ！留学JAPAN」や海外研修で直面したトラブル、現地の人との対話、そして肌で感じた文化の違いという「生きた体験」です。",
        },
    ];

    return (
        // ■トリミング調整ポイントA：セクションの高さ
        // 現在は py-32 (上下の余白) で高さを確保していますが、もし背景を特定の高さで切り取りたい場合は
        // py-32 を削除し、代わりに `h-[800px]` や `h-screen` (画面いっぱい) などを指定してください。
        <section className="relative w-full py-32 text-white overflow-hidden">

            <div className="absolute inset-0 -z-10">
                <Image
                    src="/StageBG.jpg"
                    alt="Stage Background"
                    fill
                    className="object-cover"
                    // ■トリミング調整ポイントB：画像の表示位置 (object-position)
                    // 下記の "center" を書き換えることで、画像のどこを中心に見せるか調整できます。
                    // "top"    : 画像の上端に合わせる
                    // "bottom" : 画像の下端に合わせる
                    // "center" : 中央（デフォルト）
                    // "0% 30%" : 左から0%(左端)、上から30%の位置
                    style={{ objectPosition: "center" }}
                />

                {/* 背景画像を少し暗くして文字を読みやすくする黒いカバー（濃さは opacity-60 で調整） */}
                <div className="absolute inset-0 bg-black/60" />
            </div>

            <div className="w-full max-w-7xl mx-auto px-6 lg:px-12">

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
                    {stages.map((stage, index) => (
                        <div key={index} className="flex flex-col items-left text-left space-y-6">
                            <h3 className="text-3xl lg:text-4xl items-left text-left font-bold tracking-tight">
                                {stage.title}
                            </h3>

                            <p className="text-gray-200 text-xs lg:text-sm leading-loose text-left">
                                {stage.description}
                            </p>

                            <a
                                href="/Subpage"
                                className="mt-4 block transition-transform duration-300 hover:scale-105"
                            >
                                <Image
                                    src="/ViewMore.png"
                                    alt="View More"
                                    width={100}
                                    height={40}
                                    className="object-contain"
                                />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}