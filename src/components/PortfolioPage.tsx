import Image from "next/image";
import type { Locale, LocalizedContent } from "@/content/types";
import type { UiDictionary } from "@/content/ui";
import { publicCv } from "@/lib/site";
import {
  ArrowRightIcon,
  ArrowUpRightIcon,
  DownloadIcon,
  GithubIcon,
} from "./Icons";
import { FeaturedWorkRow } from "./FeaturedWorkRow";
import { SectionHeading } from "./SectionHeading";

interface PortfolioPageProps {
  locale: Locale;
  content: LocalizedContent;
  dictionary: UiDictionary;
}

export function PortfolioPage({
  locale,
  content,
  dictionary,
}: PortfolioPageProps) {
  const { profile } = content;
  const featuredProjects = content.projects
    .filter((project) => project.featured)
    .slice(0, 2);
  const chronologicalExperiences = [...content.experiences].sort(
    (a, b) => a.order - b.order,
  );

  return (
    <main id="main-content">
      <section className="hero" aria-labelledby="hero-title">
        <div className="container hero-inner">
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
        </div>
      </section>

      <section id="work" className="section section-work">
        <div className="container">
          <SectionHeading
            title={dictionary.sections.work.title}
            description={dictionary.sections.work.description}
          />
          <div className="featured-work-list">
            {featuredProjects.map((project, index) => (
              <FeaturedWorkRow
                key={project.key}
                locale={locale}
                project={project}
                dictionary={dictionary}
                priority={index === 0}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="section section-experience">
        <div className="container">
          <SectionHeading
            title={dictionary.sections.experience.title}
            description={dictionary.sections.experience.description}
          />
          <div className="experience-timeline">
            {chronologicalExperiences.map((entry) => (
              <article className="experience-item" key={entry.key}>
                <time className="experience-date">{entry.period}</time>
                <span className="experience-marker" aria-hidden="true" />
                <div className="experience-body">
                  <div className="experience-heading">
                    {entry.logo ? (
                      <Image
                        className="experience-logo"
                        src={entry.logo.src}
                        alt={entry.logo.alt}
                        width={220}
                        height={58}
                        sizes="220px"
                        unoptimized
                      />
                    ) : null}
                    <div>
                      <h3>{entry.organization}</h3>
                      {entry.group ? (
                        <p className="experience-group">{entry.group}</p>
                      ) : null}
                    </div>
                  </div>
                  <p className="experience-role">{entry.role}</p>
                  <p className="experience-summary">{entry.summary}</p>
                  {entry.highlights.length > 0 ? (
                    <ul className="experience-highlights">
                      {entry.highlights.map((highlight) => (
                        <li key={highlight}>{highlight}</li>
                      ))}
                    </ul>
                  ) : null}
                  {entry.methods.length > 0 ? (
                    <p className="experience-methods">
                      {entry.methods.join(" · ")}
                    </p>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="section section-skills">
        <div className="container">
          <SectionHeading
            title={dictionary.sections.skills.title}
            description={dictionary.sections.skills.description}
          />
          <div className="skill-grid">
            {content.skills.map((group, index) => (
              <article className="skill-group" key={group.key}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{group.title}</h3>
                  <p>{group.items.join(" · ")}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="skill-logo-strip" aria-label="Selected technology logos">
            {content.skillLogos.map((logo) => (
              <figure key={logo.key}>
                <Image
                  src={logo.src}
                  alt=""
                  width={38}
                  height={38}
                  sizes="38px"
                  unoptimized
                />
                <figcaption>{logo.label}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section id="life" className="section section-life">
        <div className="container">
          <SectionHeading
            title={dictionary.sections.achievements.title}
            description={dictionary.sections.achievements.description}
          />
          <div className="achievement-list">
            {content.achievements.map((achievement) => (
              <article className="achievement-row" key={achievement.key}>
                <time className="achievement-date">{achievement.date}</time>
                <div className="achievement-copy">
                  <span className="achievement-scope">{achievement.scope}</span>
                  <h3>{achievement.title}</h3>
                  <p>{achievement.note}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="interests-block">
            <SectionHeading
              title={dictionary.sections.interests.title}
              description={dictionary.sections.interests.description}
              compact
            />
            <div className="interest-list">
              {content.interests.map((interest) => (
                <article className="interest-row" key={interest.key}>
                  <h3>{interest.title}</h3>
                  <p>{interest.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="section home-contact">
        <div className="container contact-line">
          <div>
            <h2>{dictionary.sections.contact.title}</h2>
            <p>{dictionary.sections.contact.description}</p>
          </div>
          <a
            className="text-link"
            href={profile.github}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
            <ArrowUpRightIcon />
          </a>
        </div>
      </section>
    </main>
  );
}
