import type { NextConfig } from "next";
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";

const isStaticExport = process.env.STATIC_EXPORT === "1";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  ...(isStaticExport ? { output: "export" as const } : {}),
  experimental: {
    globalNotFound: true,
    inlineCss: true,
  },
};

if (!isStaticExport) {
  nextConfig.redirects = async () => [
    {
      source: "/",
      destination: "/zh/",
      permanent: false,
    },
  ];
  nextConfig.headers = async () => [
    {
      source: "/:path*",
      headers: [
        {
          key: "X-Content-Type-Options",
          value: "nosniff",
        },
        {
          key: "Referrer-Policy",
          value: "strict-origin-when-cross-origin",
        },
        {
          key: "Permissions-Policy",
          value: "camera=(), microphone=(), geolocation=()",
        },
        {
          key: "X-Frame-Options",
          value: "DENY",
        },
      ],
    },
  ];
}

if (process.env.NODE_ENV === "development" && !isStaticExport) {
  initOpenNextCloudflareForDev();
}

export default nextConfig;
