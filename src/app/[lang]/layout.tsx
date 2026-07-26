import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ui } from "@/content/ui";
import { getLocalizedContent, isLocale } from "@/lib/content";
import { publicCv, siteUrl } from "@/lib/site";
import "../globals.css";

export const dynamicParams = false;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: "Zitong Qi Portfolio",
  creator: "Zitong Qi",
  publisher: "Zitong Qi",
  manifest: "/site.webmanifest",
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#F7F9FC",
  colorScheme: "light",
};

export function generateStaticParams() {
  return [{ lang: "zh" }, { lang: "en" }];
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  const content = getLocalizedContent(lang);
  const dictionary = ui[lang];

  return (
    <html lang={lang === "zh" ? "zh-CN" : "en"}>
      <body>
        <a className="skip-link" href="#main-content">
          {dictionary.skipToContent}
        </a>
        <Header locale={lang} dictionary={dictionary} cvHref={publicCv[lang]} />
        {children}
        <Footer locale={lang} dictionary={dictionary} github={content.profile.github} />
      </body>
    </html>
  );
}
