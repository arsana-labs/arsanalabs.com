import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/gnmlabs",
  assetPrefix: "/gnmlabs/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
