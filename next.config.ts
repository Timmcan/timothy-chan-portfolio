import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",         // Generates a static /out folder
  basePath: "/timothy-chan-portfolio",  // Must match your GitHub repo name exactly
  images: {
    unoptimized: true,      // Required for static export (no Next.js image server)
  },
};

export default nextConfig;
