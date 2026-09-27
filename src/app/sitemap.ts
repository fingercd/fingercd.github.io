import type { MetadataRoute } from "next";
import { getLocalizedContent, projectPath } from "@/lib/content";
import { absoluteUrl } from "@/lib/site";

export const dynamic = "force-static";

const lastModified = new Date("2026-09-27T00:00:00.000Z");

export default function sitemap(): MetadataRoute.Sitemap {
  const homeEntries: MetadataRoute.Sitemap = (["zh", "en"] as const).map((lang) => ({
    url: absoluteUrl(`/${lang}/`),
    lastModified,
    changeFrequency: "monthly",
    priority: 1,
    alternates: {
      languages: {
        "zh-CN": absoluteUrl("/zh/"),
        en: absoluteUrl("/en/"),
      },
    },
  }));

  const projectEntries: MetadataRoute.Sitemap = getLocalizedContent("zh").projects.flatMap(
    (project) =>
      (["zh", "en"] as const).map((lang) => ({
        url: absoluteUrl(projectPath(lang, project.slug)),
        lastModified: new Date(`${project.updatedAt}T00:00:00.000Z`),
        changeFrequency: "monthly" as const,
        priority: 0.8,
        alternates: {
          languages: {
            "zh-CN": absoluteUrl(projectPath("zh", project.slug)),
            en: absoluteUrl(projectPath("en", project.slug)),
          },
        },
      })),
  );

  const cvEntries: MetadataRoute.Sitemap = (["zh", "en"] as const).map((lang) => ({
    url: absoluteUrl(`/${lang}/cv/`),
    lastModified,
    changeFrequency: "monthly",
    priority: 0.8,
    alternates: { languages: { "zh-CN": absoluteUrl("/zh/cv/"), en: absoluteUrl("/en/cv/") } },
  }));
  return [...homeEntries, ...cvEntries, ...projectEntries];
}
