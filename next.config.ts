import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [],
    unoptimized: false,
  },
  // Turbopack configuration for Next.js 16+ (dev mode uses Turbopack by default)
  turbopack: {},
};

export default nextConfig;
