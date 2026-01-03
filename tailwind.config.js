/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // ▼ ここに追加してください！
        biz: ["var(--font-biz-udp)"],

        // 既存の設定（そのまま）
        sans: ["var(--font-biz-udp)", "var(--font-zen-kaku)", "var(--font-inter)"],
        kaku: ["var(--font-zen-kaku)"],
        jp: ["var(--font-noto-sans-jp)"],
        cinzel: ["var(--font-cinzel)"],
        oswald: ["var(--font-oswald)"],
      },
    },
  },
  plugins: [],
};