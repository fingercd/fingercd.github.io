export const locales = ["zh", "en"] as const;

export type Locale = (typeof locales)[number];
export type Visibility = "public" | "review" | "private";

export interface ContentMeta {
  locale: Locale;
  visibility: Visibility;
  featured: boolean;
  updatedAt: string;
}

export interface SiteProfile extends ContentMeta {
  name: string;
  alternateName: string;
  field: string;
  eyebrow: string;
  introduction: string;
  availability: string;
  current: string;
  location: string;
  github: string;
  focus: string[];
}

export interface ResearchArea extends ContentMeta {
  key: string;
  order: number;
  title: string;
  question: string;
  description: string;
  methods: string[];
}

export interface ProjectLink {
  label: string;
  href: string;
  kind: "github" | "paper" | "demo";
}

export interface WorkEntry extends ContentMeta {
  key: string;
  slug: string;
  order: number;
  kind: string;
  title: string;
  year: string;
  status: string;
  summary: string;
  challenge: string;
  role: string;
  contributions: string[];
  result: string;
  methods: string[];
  image: {
    src: string;
    alt: string;
  };
  links: ProjectLink[];
}

export interface ExperienceEntry extends ContentMeta {
  key: string;
  order: number;
  period: string;
  organization: string;
  role: string;
  summary: string;
  highlights: string[];
  methods: string[];
}

export interface AchievementEntry extends ContentMeta {
  key: string;
  order: number;
  date: string;
  title: string;
  scope: string;
  note: string;
}

export interface InterestEntry extends ContentMeta {
  key: string;
  order: number;
  marker: string;
  title: string;
  description: string;
}

export interface SkillGroup extends ContentMeta {
  key: string;
  order: number;
  title: string;
  items: string[];
}

export interface LocalizedContent {
  profile: SiteProfile;
  researchAreas: ResearchArea[];
  projects: WorkEntry[];
  experiences: ExperienceEntry[];
  achievements: AchievementEntry[];
  interests: InterestEntry[];
  skillGroups: SkillGroup[];
}
