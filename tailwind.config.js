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
        // sansは globals.css で定義します
        kaku: ["var(--font-zen-kaku)"],
        jp: ["var(--font-noto-sans-jp)"],
        cinzel: ["var(--font-cinzel)"],
        oswald: ["var(--font-oswald)"],
      },
      colors: {
        "r-expo-blue": "#0066FF",
        "r-expo-green": "#00CC66",
      },
    },
  },
  plugins: [],
};