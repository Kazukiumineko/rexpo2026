import type { NextConfig } from "next";

const configDate = new Date();
// UTC時間を計算し、日本時間（+9時間）に変換
const jstOffset = 9 * 60 * 60 * 1000;
const utcCurent = configDate.getTime() + (configDate.getTimezoneOffset() * 60 * 1000);
const jstDate = new Date(utcCurent + jstOffset);

const lastUpdated = `${jstDate.getMonth() + 1}月${jstDate.getDate()}日 ${jstDate.getHours()}:${jstDate.getMinutes().toString().padStart(2, '0')}`;

const nextConfig: NextConfig = {
  env: {
    NEXT_PUBLIC_LAST_UPDATED: lastUpdated,
  },
  /* config options here */
};

export default nextConfig;
