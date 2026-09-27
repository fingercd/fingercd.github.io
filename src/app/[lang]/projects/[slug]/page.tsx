import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowUpRightIcon,
  GithubIcon,
} from "@/components/Icons";
import { ui } from "@/content/ui";
import {
  getLocalizedContent,
  getPublicProject,
  getPublicProjectParams,
  isLocale,
  projectPath,
} from "@/lib/content";
import { absoluteUrl } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return getPublicProjectParams();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}): Promise<Metadata> {
  const { lang, slug } = await params;
  if (!isLocale(lang)) notFound();

  const project = getPublicProject(lang, slug);
  if (!project) notFound();

  const title = `${project.title} · ${lang === "zh" ? "齐梓桐" : "Zitong Qi"}`;
  const description = project.summary;

  return {
    title,
    description,
    alternates: {
      canonical: projectPath(lang, slug),
      languages: {
        "zh-CN": projectPath("zh", slug),
        en: projectPath("en", slug),
        "x-default": projectPath("zh", slug),
      },
    },
    openGraph: {
      type: "article",
      title,
      description,
      url: projectPath(lang, slug),
      siteName: "Zitong Qi Portfolio",
      locale: lang === "zh" ? "zh_CN" : "en_US",
      images: [
        {
          url: project.image.src,
          width: 1200,
          height: 675,
          alt: project.image.alt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [project.image.src],
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  if (!isLocale(lang)) notFound();

  const project = getPublicProject(lang, slug);
  if (!project) notFound();

  const dictionary = ui[lang];
  const localized = getLocalizedContent(lang);
  const projectIndex = localized.projects.findIndex((entry) => entry.slug === slug);
  const nextProject =
    localized.projects[(projectIndex + 1) % localized.projects.length];
  const github = project.links.find((link) => link.kind === "github");

  const projectJsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.summary,
    author: {
      "@type": "Person",
      name: "Zitong Qi",
    },
    dateModified: project.updatedAt,
    url: absoluteUrl(projectPath(lang, project.slug)),
    image: absoluteUrl(project.image.src),
    sameAs: github?.href,
  };

  return (
    <main id="main-content" className="project-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(projectJsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <section className="project-hero">
        <div className="container">
          <a className="back-link" href={`/${lang}/#work`}>
            <ArrowLeftIcon />
            {dictionary.project.back}
          </a>
          <div className="project-hero-grid">
            <div>
              <div className="project-meta">
                <span>{project.kind}</span>
                <span aria-hidden="true">·</span>
                <span>{project.year}</span>
                <span className="project-status">{project.status}</span>
              </div>
              <h1>{project.title}</h1>
              {project.subtitle ? <p className="paper-subtitle">{project.subtitle}</p> : null}
              {project.venue ? <p className="experience-role">{project.venue} · {project.status}</p> : null}
              <p className="project-lead">{project.summary}</p>
            </div>
            <dl className="project-hero-facts">
              <div>
                <dt>{dictionary.project.role}</dt>
                <dd>{project.role}</dd>
              </div>
              <div>
                <dt>{dictionary.project.methods}</dt>
                <dd>{project.methods.slice(0, 4).join(" · ")}</dd>
              </div>
            </dl>
          </div>
          <div className="project-hero-image">
            <Image
              src={project.image.src}
              alt={project.image.alt}
              width={1200}
              height={675}
              priority
              sizes="(max-width: 1168px) calc(100vw - 48px), 1120px"
              unoptimized
            />
          </div>
        </div>
      </section>

      <section className="project-body">
        <div className="container project-body-grid">
          <aside className="project-toc" aria-label={dictionary.project.overview}>
            <span className="micro-label">{dictionary.project.overview}</span>
            <a href="#challenge">{dictionary.project.challenge}</a>
            <a href="#contributions">{dictionary.project.contributions}</a>
            <a href="#evidence">{dictionary.project.evidence}</a>
          </aside>

          <div className="project-narrative">
            <section id="challenge">
              <p className="section-label">01</p>
              <h2>{dictionary.project.challenge}</h2>
              <p>{project.challenge}</p>
            </section>

            <section id="contributions">
              <p className="section-label">02</p>
              <h2>{dictionary.project.contributions}</h2>
              {project.homepageContribution ? <div className="contribution-note"><h4>{lang === "zh" ? "我的贡献" : "My contribution"}</h4><p>{project.homepageContribution}</p></div> : null}
              {project.featured ? <h3 className="method-title">{lang === "zh" ? "方法流程" : "Method"}</h3> : null}
              <ol className="contribution-list">
                {project.contributions.map((contribution, index) => (
                  <li key={contribution}>
                    <span aria-hidden="true">0{index + 1}</span>
                    <p>{contribution}</p>
                  </li>
                ))}
              </ol>
            </section>

            <section id="evidence">
              <p className="section-label">03</p>
              <h2>{dictionary.project.evidence}</h2>
              <p>{project.result}</p>
              <ul className="tag-list project-methods" aria-label={dictionary.project.methods}>
                {project.methods.map((method) => (
                  <li key={method}>{method}</li>
                ))}
              </ul>
              {github ? (
                <a
                  className="button button-primary"
                  href={github.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  <GithubIcon />
                  {dictionary.project.github}
                  <ArrowUpRightIcon />
                </a>
              ) : (
                <p className="disclosure-note">{dictionary.project.noPublicCode}</p>
              )}
            </section>
          </div>
        </div>
      </section>

      <nav className="next-project" aria-label={dictionary.project.next}>
        <a href={projectPath(lang, nextProject.slug)}>
          <span>{dictionary.project.next}</span>
          <strong>{nextProject.title}</strong>
          <ArrowRightIcon />
        </a>
      </nav>
    </main>
  );
}
