import Image from "next/image";
import type { Locale, WorkEntry } from "@/content/types";
import type { UiDictionary } from "@/content/ui";
import { projectPath } from "@/lib/content";

export function FeaturedWorkRow({ locale, project, dictionary, priority = false }: {
  locale: Locale; project: WorkEntry; dictionary: UiDictionary; priority?: boolean;
}) {
  const zh = locale === "zh";
  return <article className="research-paper" id={project.key}>
    <figure className="research-thumbnail">
      <a href={project.image.src} target="_blank" rel="noreferrer" aria-label={(zh ? "查看原图：" : "Full-size figure: ") + project.title}>
        <Image src={project.image.src} alt={project.image.alt} width={1600} height={920} priority={priority} sizes="(max-width: 640px) 180px, 224px" unoptimized />
      </a>
    </figure>
    <div className="research-copy">
      <h3><a href={projectPath(locale,project.slug)} title={dictionary.project.viewCase}><strong>{project.title}</strong><span> · {project.subtitle}</span></a></h3>
      <p className="research-meta">{project.venue} · {project.status} · {project.role}</p>
      <p className="research-description">{project.homepageContribution}</p>
      <p className="research-result">{project.homepageResult}</p>
    </div>
  </article>;
}
