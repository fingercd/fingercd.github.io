import Image from "next/image";
import type { Locale, WorkEntry } from "@/content/types";
import type { UiDictionary } from "@/content/ui";
import { projectPath } from "@/lib/content";
import { ArrowRightIcon, ArrowUpRightIcon, GithubIcon } from "./Icons";

interface FeaturedWorkRowProps {
  locale: Locale;
  project: WorkEntry;
  dictionary: UiDictionary;
  priority?: boolean;
}

export function FeaturedWorkRow({
  locale,
  project,
  dictionary,
  priority = false,
}: FeaturedWorkRowProps) {
  return (
    <article className="featured-work-row">
      <a
        className="featured-work-media"
        href={projectPath(locale, project.slug)}
        aria-label={`${dictionary.project.viewCase}: ${project.title}`}
      >
        <Image
          src={project.image.src}
          alt={project.image.alt}
          width={1200}
          height={675}
          priority={priority}
          sizes="(max-width: 820px) calc(100vw - 40px), 47vw"
          unoptimized
        />
      </a>

      <div className="featured-work-copy">
        <div className="featured-work-meta">
          <span>{project.kind}</span>
          <span aria-hidden="true">·</span>
          <span>{project.year}</span>
          <span className="featured-work-status">{project.status}</span>
        </div>

        <h3 className="featured-work-title">
          <a href={projectPath(locale, project.slug)}>{project.title}</a>
        </h3>

        {project.authors ? (
          <p className="featured-work-authors">{project.authors}</p>
        ) : null}
        {project.venue ? (
          <p className="featured-work-venue">{project.venue}</p>
        ) : null}

        <p className="featured-work-summary">{project.summary}</p>
        {project.homepageContribution ? (
          <p className="featured-work-contribution">
            {project.homepageContribution}
          </p>
        ) : null}

        <p className="featured-work-methods">
          {project.methods.join(" · ")}
        </p>

        <div className="featured-work-links">
          <a className="text-link" href={projectPath(locale, project.slug)}>
            {dictionary.project.viewCase}
            <ArrowRightIcon />
          </a>
          {project.links.map((link) => (
            <a
              className="text-link is-secondary"
              href={link.href}
              key={`${link.kind}-${link.href}`}
              target="_blank"
              rel="noreferrer"
            >
              {link.kind === "github" ? <GithubIcon /> : null}
              {link.label}
              <ArrowUpRightIcon width={15} height={15} />
            </a>
          ))}
          {project.links.length === 0 ? (
            <span className="project-disclosure">
              {dictionary.project.noPublicCode}
            </span>
          ) : null}
        </div>
      </div>
    </article>
  );
}
