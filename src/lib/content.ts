import {
  achievements,
  experiences,
  interests,
  projects,
  skillLogos,
  skills,
  siteProfiles,
} from "@/content/public";
import { locales, type ContentMeta, type Locale, type LocalizedContent } from "@/content/types";

export const isLocale = (value: string): value is Locale =>
  locales.includes(value as Locale);

const publicOnly = <T extends ContentMeta>(entries: readonly T[]): T[] =>
  entries.filter((entry) => entry.visibility === "public");

const byOrder = <T extends { order: number }>(a: T, b: T) => a.order - b.order;

function publicForLocale<T extends ContentMeta>(
  entries: readonly T[],
  locale: Locale,
): T[] {
  return publicOnly(entries)
    .filter((entry) => entry.locale === locale)
    .sort((a, b) => {
      if ("order" in a && "order" in b) {
        return byOrder(a as T & { order: number }, b as T & { order: number });
      }
      return 0;
    });
}

function assertUnique(values: string[], label: string): void {
  const duplicates = values.filter((value, index) => values.indexOf(value) !== index);
  if (duplicates.length > 0) {
    throw new Error(`${label} contains duplicate values: ${[...new Set(duplicates)].join(", ")}`);
  }
}

function assertNonEmpty(value: string | undefined, label: string): void {
  if (!value?.trim()) {
    throw new Error(`${label} must not be empty.`);
  }
}

export function assertContentIntegrity(): void {
  const publicProjects = publicOnly(projects);
  const featuredByLocale = Object.fromEntries(
    locales.map((locale) => [
      locale,
      publicProjects
        .filter((project) => project.locale === locale && project.featured)
        .map((project) => project.key)
        .sort(),
    ]),
  ) as Record<Locale, string[]>;
  const featuredOrderByLocale = Object.fromEntries(
    locales.map((locale) => [
      locale,
      publicProjects
        .filter((project) => project.locale === locale && project.featured)
        .sort(byOrder)
        .map((project) => project.key),
    ]),
  ) as Record<Locale, string[]>;

  if (featuredByLocale.zh.join("|") !== featuredByLocale.en.join("|")) {
    throw new Error(
      `Featured project translations are incomplete. zh=[${featuredByLocale.zh.join(
        ", ",
      )}], en=[${featuredByLocale.en.join(", ")}]`,
    );
  }

  const expectedFeatured = ["medical-multimodal-alignment", "pairselect", "reinsvln"];
  if (featuredByLocale.zh.join("|") !== expectedFeatured.join("|")) {
    throw new Error(
      `Expected featured projects [${expectedFeatured.join(", ")}], received [${featuredByLocale.zh.join(", ")}].`,
    );
  }

  const expectedFeaturedOrder = ["reinsvln", "medical-multimodal-alignment", "pairselect"];
  for (const locale of locales) {
    if (featuredOrderByLocale[locale].join("|") !== expectedFeaturedOrder.join("|")) {
      throw new Error(
        `Expected ${locale} featured project order [${expectedFeaturedOrder.join(", ")}], received [${featuredOrderByLocale[locale].join(", ")}].`,
      );
    }
  }

  for (const locale of locales) {
    const localeProjects = publicProjects.filter((project) => project.locale === locale);
    assertUnique(
      localeProjects.map((project) => project.slug),
      `${locale} project slugs`,
    );
    assertUnique(
      localeProjects.map((project) => project.key),
      `${locale} project translation keys`,
    );
  }

  for (const key of featuredByLocale.zh) {
    const zhProject = publicProjects.find(
      (project) => project.locale === "zh" && project.key === key,
    );
    const enProject = publicProjects.find(
      (project) => project.locale === "en" && project.key === key,
    );

    if (!zhProject || !enProject || zhProject.slug !== enProject.slug) {
      throw new Error(`Project "${key}" must use the same slug in zh and en.`);
    }

    for (const project of [zhProject, enProject]) {
      const label = `${project.locale} featured project "${project.key}"`;
      assertNonEmpty(project.title, `${label} title`);
      assertNonEmpty(project.status, `${label} status`);
      assertNonEmpty(project.homepageContribution, `${label} homepageContribution`);
      assertNonEmpty(project.image.src, `${label} image source`);
      assertNonEmpty(project.image.alt, `${label} image alt`);
    }
  }

  for (const locale of locales) {
    const profiles = publicOnly(siteProfiles).filter((profile) => profile.locale === locale);
    if (profiles.length !== 1) {
      throw new Error(`Expected one public ${locale} profile, received ${profiles.length}.`);
    }
  }

  const skillKeysByLocale = Object.fromEntries(
    locales.map((locale) => [
      locale,
      publicForLocale(skills, locale).map((entry) => entry.key),
    ]),
  ) as Record<Locale, string[]>;
  if (skillKeysByLocale.zh.join("|") !== skillKeysByLocale.en.join("|")) {
    throw new Error(
      `Skill translations are incomplete. zh=[${skillKeysByLocale.zh.join(
        ", ",
      )}], en=[${skillKeysByLocale.en.join(", ")}]`,
    );
  }
}

assertContentIntegrity();

export function getLocalizedContent(locale: Locale): LocalizedContent {
  const profile = publicOnly(siteProfiles).find((entry) => entry.locale === locale);
  if (!profile) {
    throw new Error(`Missing public profile for locale "${locale}".`);
  }

  return {
    profile,
    projects: publicForLocale(projects, locale),
    experiences: publicForLocale(experiences, locale),
    skills: publicForLocale(skills, locale),
    skillLogos,
    achievements: publicForLocale(achievements, locale),
    interests: publicForLocale(interests, locale),
  };
}

export function getPublicProject(locale: Locale, slug: string) {
  return publicForLocale(projects, locale).find((project) => project.slug === slug);
}

export function getPublicProjectParams(): Array<{ lang: Locale; slug: string }> {
  return locales.flatMap((lang) =>
    publicForLocale(projects, lang).map((project) => ({
      lang,
      slug: project.slug,
    })),
  );
}

export function getAlternateLocale(locale: Locale): Locale {
  return locale === "zh" ? "en" : "zh";
}

export function homePath(locale: Locale): string {
  return `/${locale}/`;
}

export function projectPath(locale: Locale, slug: string): string {
  return `/${locale}/projects/${slug}/`;
}
