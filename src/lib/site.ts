export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://zitong-qi-portfolio.wiggly-lynx-0873.chatgpt.site"
).replace(/\/$/, "");

export function absoluteUrl(pathname: string): string {
  const normalizedPath = pathname.startsWith("/") ? pathname : `/${pathname}`;
  return `${siteUrl}${normalizedPath}`;
}

export const publicCv = {
  zh: "/cv/qi-zitong-cv-zh.pdf",
  en: "/cv/zitong-qi-cv-en.pdf",
} as const;
