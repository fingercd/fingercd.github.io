export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://fingercd.github.io"
).replace(/\/$/, "");

export function absoluteUrl(pathname: string): string {
  const normalizedPath = pathname.startsWith("/") ? pathname : `/${pathname}`;
  return `${siteUrl}${normalizedPath}`;
}

export const publicCv = {
  zh: "/cv/qi-zitong-cv-zh.pdf",
  en: "/cv/zitong-qi-cv-en.pdf",
} as const;

export const publicCvImage = {
  zh: "/cv/qi-zitong-cv-zh.png",
  en: "/cv/zitong-qi-cv-en.png",
} as const;
