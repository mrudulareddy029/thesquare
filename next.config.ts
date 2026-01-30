import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // RESOLVES: Errors in your terminal for quality 80 and 85
    qualities: [75, 80, 85],
    // OPTIMIZES: Image delivery to save the 163 KiB flagged in your report
    formats: ['image/avif', 'image/webp'],
  },
  // OPTIMIZES: Reduces "Legacy JavaScript" by removing logs in production
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
};

export default nextConfig;