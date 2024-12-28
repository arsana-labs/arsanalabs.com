import type { NextConfig } from "next";

const isProduction = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isProduction ? "/arsanalabs" : "",
  assetPrefix: isProduction ? "/arsanalabs/" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
