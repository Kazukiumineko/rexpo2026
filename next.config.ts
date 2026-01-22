import type { NextConfig } from "next";

const configDate = new Date();
const lastUpdated = `${configDate.getMonth() + 1}月${configDate.getDate()}日 ${configDate.getHours()}:${configDate.getMinutes().toString().padStart(2, '0')}`;

const nextConfig: NextConfig = {
  env: {
    NEXT_PUBLIC_LAST_UPDATED: lastUpdated,
  },
  /* config options here */
};

export default nextConfig;
