import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    URL_SCRIPT_SHEET: process.env.URL_SCRIPT_SHEET,
  },
};

export default nextConfig;
