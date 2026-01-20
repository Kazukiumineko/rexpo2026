import type { Metadata } from "next";
// 必要なフォントだけをインポート
import { Noto_Sans_JP, Oswald, Zen_Kaku_Gothic_New, BIZ_UDPGothic } from "next/font/google";
import "./globals.css";

// 2. 基本日本語 (予備)
const notoSansJP = Noto_Sans_JP({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-noto-sans-jp",
});

// 4. 強調・見出し (採用サイト風)
const oswald = Oswald({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-oswald",
});

// 5. 本文用 (スマート・モダン) ★ここが主役
const zenKaku = Zen_Kaku_Gothic_New({
  weight: ["300", "400", "500", "700"], // 細字(300)もあると綺麗です
  preload: false,
  variable: "--font-zen-kaku",
});

// 6. 強調・ユニバーサルデザイン (BIZ UDPGothic) ★ここが新主役
const bizUdp = BIZ_UDPGothic({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-biz-udp",
});

// サイトのURL（本番環境のドメイン）
const siteUrl = "https://www.r-expo.site/";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "R-EXPO 2026",
    template: "%s | R-EXPO 2026", // 各ページで "Page Name | R-EXPO 2026" となる
  },
  description: "R-EXPO 2026の公式サイトです。イベント情報、スケジュール、スポンサー情報などを掲載しています。",

  // SNSや検索結果で画像を表示するための設定（OGP）
  openGraph: {
    title: "R-EXPO 2026",
    description: "立命館慶祥中高がお届けするイベント R-EXPO2026の公式サイトです。2月3日札幌コンベンションセンターで開催されます。",
    url: siteUrl,
    siteName: "R-EXPO 2026",
    locale: "ja_JP",
    type: "website",
  },

  // Googleのロボットに対する指示
  robots: {
    index: true, // 検索結果に表示する
    follow: true, // リンクを辿らせる
  },
};

import FloatingEntryButton from "@/components/Shared/FloatingEntryButton";

// ... (existing imports)

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`
          ${notoSansJP.variable} 
          ${oswald.variable} 
          ${bizUdp.variable} 
          antialiased
          ${zenKaku.className}
        `}
      >
        {children}
        <FloatingEntryButton />
      </body>
    </html>
  );
}