import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const cdnUrl = process.env.NEXT_PUBLIC_CDN_URL;

const nextConfig: NextConfig = {
  // Enables edge compression (Gzip / Brotli)
  compress: true,

  // CDN asset prefix support (e.g. Cloudflare / CloudFront CDN domain)
  assetPrefix: isProd && cdnUrl ? cdnUrl : undefined,

  // Image optimization settings optimized for CDN delivery
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days CDN cache TTL
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // HTTP headers optimized for CDN edge caching & security
  async headers() {
    return [
      {
        source: "/:path*.(jpg|jpeg|png|webp|avif|ico|svg|woff2)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/(llm.txt|llms.txt|robots.txt|sitemap.xml)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=86400, stale-while-revalidate=604800",
          },
          {
            key: "Content-Type",
            value: "text/plain; charset=utf-8",
          },
        ],
      },
      {
        source: "/:path*",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
        ],
      },
    ];
  },

  // Allow accessing the dev server from other devices on LAN
  allowedDevOrigins: [
    "localhost",
    "127.0.0.1",
    "192.168.*.*",
    "10.*.*.*",
    "172.16.*.*",
    "172.17.*.*",
    "172.18.*.*",
    "172.19.*.*",
    "172.2*.*.*",
    "172.30.*.*",
    "172.31.*.*",
  ],
};

export default nextConfig;
