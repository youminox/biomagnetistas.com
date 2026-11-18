import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [480, 640, 828, 1080, 1280, 1600],
    imageSizes: [64, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
  async headers() {
    return [
      {
        source: "/images/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=2592000, stale-while-revalidate=86400" }],
      },
    ];
  },
  async redirects() {
    return [
      // Evita contenido duplicado: el dominio de producción de Vercel redirige al principal.
      {
        source: "/:path*",
        has: [{ type: "host", value: "biomagnetistascom.vercel.app" }],
        destination: "https://biomagnetistas.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
