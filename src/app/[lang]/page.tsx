import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PortfolioPage } from "@/components/PortfolioPage";
import { ui } from "@/content/ui";
import { getLocalizedContent, isLocale } from "@/lib/content";
import { absoluteUrl } from "@/lib/site";

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  const { profile } = getLocalizedContent(lang);
  const isZh = lang === "zh";
  const title = isZh
    ? "齐梓桐 · 计算机视觉、多模态学习与具身 VLN"
    : "Zitong Qi · Computer Vision, Multimodal Learning, and Embodied VLN";
  const description = isZh
    ? "齐梓桐的个人主页，记录计算机视觉、多模态学习、视频理解和具身视觉语言导航方向的项目与研究。"
    : "Zitong Qi's work in computer vision, multimodal learning, video understanding, and embodied vision-language navigation.";

  return {
    title,
    description,
    keywords: isZh
      ? ["齐梓桐", "计算机视觉", "多模态学习", "视觉语言模型", "视频理解", "宁波大学"]
      : [
          "Zitong Qi",
          "computer vision",
          "multimodal learning",
          "vision-language models",
          "video understanding",
          "embodied VLN",
          "Ningbo University",
        ],
    alternates: {
      canonical: `/${lang}/`,
      languages: {
        "zh-CN": "/zh/",
        en: "/en/",
        "x-default": "/zh/",
      },
    },
    openGraph: {
      type: "profile",
      title,
      description,
      url: `/${lang}/`,
      siteName: "Zitong Qi Portfolio",
      locale: isZh ? "zh_CN" : "en_US",
      alternateLocale: isZh ? ["en_US"] : ["zh_CN"],
      images: [
        {
          url: "/images/og-card.png",
          width: 1200,
          height: 630,
          alt: isZh
            ? "齐梓桐：计算机视觉、多模态学习与具身 VLN"
            : "Zitong Qi: Computer Vision, Multimodal Learning, and Embodied VLN",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/images/og-card.png"],
    },
    other: {
      "profile:first_name": profile.name,
    },
  };
}

export default async function LocaleHomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  const content = getLocalizedContent(lang);
  const dictionary = ui[lang];
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Zitong Qi",
    alternateName: "齐梓桐",
    url: absoluteUrl(`/${lang}/`),
    sameAs: [content.profile.github],
    affiliation: {
      "@type": "CollegeOrUniversity",
      name: lang === "zh" ? "宁波大学" : "Ningbo University",
    },
    knowsAbout: [
      "Computer Vision",
      "Video Understanding",
      "Vision-Language Models",
      "Multimodal Learning",
      "Embodied AI",
      "Vision-Language Navigation",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <PortfolioPage locale={lang} content={content} dictionary={dictionary} />
    </>
  );
}
