import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // ← AGREGAR ESTA LÍNEA
  images: {
    qualities: [90, 100],
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "source.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "ext.same-assets.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "ugc.same-assets.com",
        pathname: "/**",
      },
    ],
  },
  trailingSlash: true, // ← OPCIONAL pero recomendado para hosting estático
};

export default nextConfig;
