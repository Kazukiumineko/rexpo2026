import type { Metadata } from "next";
// 必要なフォントだけをインポート
import { Oswald, Zen_Kaku_Gothic_New } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"

// 4. 強調・見出し (採用サイト風)
const oswald = Oswald({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-oswald",
});

// 5. 本文用 (スマート・モダン) ★ここが主役
const zenKaku = Zen_Kaku_Gothic_New({
  weight: ["300", "400", "500", "700"], // 細字(300)もあると綺麗です
  subsets: ["latin"],
  variable: "--font-zen-kaku",
});

// サイトのURL（本番環境のドメイン）
const siteUrl = "https://www.r-expo.site/";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "R-EXPO 2026",
    template: "%s | R-EXPO 2026", // 各ページで "Page Name | R-EXPO 2026" となる
  },
  description: "立命館慶祥中高がお届けする新しいイベント R-EXPO2026の公式サイトです。2月11日札幌コンベンションセンターで開催されます。イベント情報、参加申し込み、タイムテーブルをチェック！",

  // SNSや検索結果で画像を表示するための設定（OGP）
  openGraph: {
    title: "R-EXPO 2026",
    description: "立命館慶祥中高がお届けする新しいイベント R-EXPO2026の公式サイトです。2月11日札幌コンベンションセンターで開催されます。イベント情報、参加申し込み、タイムテーブルをチェック！",
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

import FloatingEntryButton from "@/components/shared/floating-entry-button";
import { GlobalProvider } from "@/context/GlobalContext";
import PersistentBackgroundVideo from "@/components/main-ui/persistent-background-video";

import Script from "next/script";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${zenKaku.variable} ${oswald.variable}`}>
      <body className="font-sans">
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-85T7RJBRDM"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-85T7RJBRDM');
          `}
        </Script>
        <Analytics />
        <GlobalProvider>
          <PersistentBackgroundVideo />
          {children}
          <FloatingEntryButton />
        </GlobalProvider>
      </body>
    </html>
  );
}