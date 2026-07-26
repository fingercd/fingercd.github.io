import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { siteUrl } from "@/lib/site";
import "../globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "齐梓桐 · Zitong Qi",
  description:
    "Zitong Qi's work in computer vision, multimodal learning, and embodied VLN.",
  robots: {
    index: false,
    follow: true,
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#F7F9FC",
};

export default function RootFallbackLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
