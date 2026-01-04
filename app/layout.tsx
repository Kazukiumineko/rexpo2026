import type { Metadata } from "next";
// 必要なフォントだけをインポート
import { Inter, Noto_Sans_JP, Cinzel, Oswald, Zen_Kaku_Gothic_New, BIZ_UDPGothic } from "next/font/google";
import "./globals.css";

// 1. 基本英語 (予備)
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
});

// 2. 基本日本語 (予備)
const notoSansJP = Noto_Sans_JP({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-noto-sans-jp",
});

// 3. 英語見出し (ファンタジー風)
const cinzel = Cinzel({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-cinzel",
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

export const metadata: Metadata = {
  title: "REXPO 2026",
  description: "REXPO 2026 Official Site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`
          ${inter.variable} 
          ${notoSansJP.variable} 
          ${cinzel.variable} 
          ${oswald.variable} 
          ${bizUdp.variable} 
          antialiased
          ${zenKaku.className}
        `}
      >
        {children}
      </body>
    </html>
  );
}