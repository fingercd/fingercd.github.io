import Link from "next/link";
import Image from "next/image";
import type { Locale, LocalizedContent, WorkEntry } from "@/content/types";
import type { UiDictionary } from "@/content/ui";
import { projectPath } from "@/lib/content";
import { publicCv } from "@/lib/site";
import {
  ArrowRightIcon,
  ArrowUpRightIcon,
  DownloadIcon,
  GithubIcon,
  LocationIcon,
} from "./Icons";
import { SectionHeading } from "./SectionHeading";

interface PortfolioPageProps {
  locale: Locale;
  content: LocalizedContent;
  dictionary: UiDictionary;
}

function ProjectCard({
  locale,
  project,
  dictionary,
  index,
}: {
  locale: Locale;
  project: WorkEntry;
  dictionary: UiDictionary;
  index: number;
}) {
  const github = project.links.find((link) => link.kind === "github");

  return (
    <article className="project-card">
      <Link
        className="project-visual"
        href={projectPath(locale, project.slug)}
        aria-label={`0${index + 1} · ${dictionary.project.viewCase}: ${project.title}`}
      >
        <Image
          src={project.image.src}
          alt={project.image.alt}
          width={1200}
          height={675}
          priority={index === 0}
          sizes="(max-width: 980px) calc(100vw - 48px), 46vw"
          unoptimized
        />
        <span className="project-index" aria-hidden="true">
          0{index + 1}
        </span>
      </Link>
      <div className="project-copy">
        <div className="project-meta">
          <span>{project.kind}</span>
          <span aria-hidden="true">·</span>
          <span>{project.year}</span>
          <span className="project-status">{project.status}</span>
        </div>
        <h3>
          <Link href={projectPath(locale, project.slug)}>{project.title}</Link>
        </h3>
        <p className="project-summary">{project.summary}</p>
        <dl className="project-facts">
          <div>
            <dt>{dictionary.project.role}</dt>
            <dd>{project.role}</dd>
          </div>
          <div>
            <dt>{dictionary.project.result}</dt>
            <dd>{project.result}</dd>
          </div>
        </dl>
        <ul className="tag-list" aria-label={dictionary.project.methods}>
          {project.methods.slice(0, 5).map((method) => (
            <li key={method}>{method}</li>
          ))}
        </ul>
        <div className="project-links">
          <Link className="text-link" href={projectPath(locale, project.slug)}>
            {dictionary.project.viewCase}
            <ArrowRightIcon />
          </Link>
          {github ? (
            <a
              className="text-link is-secondary"
              href={github.href}
              target="_blank"
              rel="noreferrer"
            >
              <GithubIcon />
              GitHub
              <ArrowUpRightIcon width={15} height={15} />
            </a>
          ) : (
            <span className="project-disclosure">{dictionary.project.noPublicCode}</span>
          )}
        </div>
      </div>
    </article>
  );
}

export function PortfolioPage({
  locale,
  content,
  dictionary,
}: PortfolioPageProps) {
  const { profile } = content;

  return (
    <main id="main-content">
      <section className="hero" aria-labelledby="hero-title">
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="availability">
              <span aria-hidden="true" />
              {profile.availability}
            </div>
            <p className="hero-name">
              {profile.name}
              <span aria-hidden="true"> / </span>
              <span>{profile.alternateName}</span>
            </p>
            <h1 id="hero-title">{profile.field}</h1>
            <p className="hero-eyebrow">{profile.eyebrow}</p>
            <p className="hero-introduction">{profile.introduction}</p>

            <div className="hero-actions">
              <a className="button button-primary" href="#work">
                {dictionary.hero.selectedWork}
                <ArrowRightIcon />
              </a>
              <a
                className="button button-secondary"
                href={publicCv[locale]}
                target="_blank"
                rel="noreferrer"
              >
                <DownloadIcon />
                {dictionary.hero.downloadCv}
              </a>
              <a
                className="icon-link"
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                aria-label={dictionary.hero.github}
                title={dictionary.hero.github}
              >
                <GithubIcon />
              </a>
            </div>
          </div>

          <aside className="hero-card" aria-label="Profile summary">
            <div className="hero-card-section">
              <span className="micro-label">{dictionary.hero.current}</span>
              <strong>{profile.current}</strong>
              <span className="location-line">
                <LocationIcon />
                {profile.location}
              </span>
            </div>
            <div className="hero-card-section">
              <span className="micro-label">{dictionary.hero.focus}</span>
              <ol className="focus-list">
                {profile.focus.map((item, index) => (
                  <li key={item}>
                    <span aria-hidden="true">0{index + 1}</span>
                    {item}
                  </li>
                ))}
              </ol>
            </div>
            <div className="hero-card-section">
              <span className="micro-label">{dictionary.hero.links}</span>
              <a href={profile.github} target="_blank" rel="noreferrer">
                github.com/fingercd
                <ArrowUpRightIcon width={15} height={15} />
              </a>
            </div>
          </aside>
        </div>
        <div className="container hero-scroll">
          <a href="#research">
            <span aria-hidden="true" />
            {dictionary.hero.scroll}
          </a>
        </div>
      </section>

      <section id="research" className="section section-research">
        <div className="container">
          <SectionHeading {...dictionary.sections.research} />
          <div className="research-grid">
            {content.researchAreas.map((area, index) => (
              <article className="research-card" key={area.key}>
                <span className="research-number" aria-hidden="true">
                  0{index + 1}
                </span>
                <h3>{area.title}</h3>
                <p className="research-question">{area.question}</p>
                <p>{area.description}</p>
                <ul className="tag-list is-compact" aria-label={dictionary.project.methods}>
                  {area.methods.map((method) => (
                    <li key={method}>{method}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="work" className="section section-work">
        <div className="container">
          <SectionHeading {...dictionary.sections.work} />
          <div className="project-list">
            {content.projects
              .filter((project) => project.featured)
              .map((project, index) => (
                <ProjectCard
                  key={project.key}
                  locale={locale}
                  project={project}
                  dictionary={dictionary}
                  index={index}
                />
              ))}
          </div>
        </div>
      </section>

      <section id="experience" className="section section-experience">
        <div className="container">
          <SectionHeading {...dictionary.sections.experience} />
          <div className="timeline">
            {content.experiences.map((entry) => (
              <article className="timeline-entry" key={entry.key}>
                <div className="timeline-date">
                  <span>{entry.period}</span>
                </div>
                <div className="timeline-content">
                  <div className="timeline-heading">
                    <div>
                      <h3>{entry.organization}</h3>
                      <p>{entry.role}</p>
                    </div>
                  </div>
                  <p className="timeline-summary">{entry.summary}</p>
                  <ul className="clean-list">
                    {entry.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                  <ul className="tag-list is-compact" aria-label={dictionary.project.methods}>
                    {entry.methods.map((method) => (
                      <li key={method}>{method}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-skills">
        <div className="container">
          <SectionHeading {...dictionary.sections.skills} compact />
          <div className="skill-grid">
            {content.skillGroups.map((group, index) => (
              <article className="skill-group" key={group.key}>
                <span aria-hidden="true">0{index + 1}</span>
                <h3>{group.title}</h3>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="life" className="section section-life">
        <div className="container">
          <SectionHeading {...dictionary.sections.achievements} />
          <div className="achievement-grid">
            {content.achievements.map((achievement) => (
              <article className="achievement-card" key={achievement.key}>
                <div className="achievement-meta">
                  <span>{achievement.scope}</span>
                  <time>{achievement.date}</time>
                </div>
                <h3>{achievement.title}</h3>
                <p>{achievement.note}</p>
              </article>
            ))}
          </div>

          <div className="interests-block">
            <SectionHeading {...dictionary.sections.interests} compact />
            <div className="interest-grid">
              {content.interests.map((interest) => (
                <article className="interest-card" key={interest.key}>
                  <span>{interest.marker}</span>
                  <h3>{interest.title}</h3>
                  <p>{interest.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="section section-contact">
        <div className="container">
          <div className="contact-panel">
            <div>
              <p className="section-label">{dictionary.sections.contact.label}</p>
              <h2>{dictionary.sections.contact.title}</h2>
              <p>{dictionary.sections.contact.description}</p>
            </div>
            <div className="contact-actions">
              <a
                className="button button-primary"
                href={profile.github}
                target="_blank"
                rel="noreferrer"
              >
                <GithubIcon />
                GitHub
                <ArrowUpRightIcon />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
