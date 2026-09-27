import Image from "next/image";
import type { Locale, LocalizedContent } from "@/content/types";
import type { UiDictionary } from "@/content/ui";
import { publicCv } from "@/lib/site";
import { FeaturedWorkRow } from "./FeaturedWorkRow";

export function PortfolioPage({ locale, content, dictionary }: {
  locale: Locale; content: LocalizedContent; dictionary: UiDictionary;
}) {
  const { profile } = content;
  const zh = locale === "zh";
  return <main id="main-content" className="compact-home">
    <section className="profile-intro container" aria-labelledby="profile-name">
      <div className="profile-identity">
        <h1 id="profile-name">{profile.name}</h1>
        <Image className="profile-photo" src="/images/portrait.png" alt={zh ? "齐梓桐个人照片" : "Portrait of Zitong Qi"} width={1280} height={1621} priority unoptimized sizes="112px" />
      </div>
      <div className="profile-biography">
        <p>{profile.introduction}</p>
        <p>{profile.publicationSummary}</p>
        <p className="profile-interests">{profile.interestsSummary}</p>
        <div className="profile-links">
          <a href={publicCv[locale]} target="_blank" rel="noreferrer">{zh ? "简历 PDF" : "CV PDF"}</a>
          <a href={"/"+locale+"/cv/"}>{zh ? "完整履历" : "Full profile"}</a>
          <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </div>
    </section>

    <section id="work" className="compact-section container">
      <h2>{zh ? "研究工作" : "Research"}</h2>
      <div className="research-list">
        {content.projects.filter(p => p.featured).map((project,index) => <FeaturedWorkRow key={project.key} locale={locale} project={project} dictionary={dictionary} priority={index===0} />)}
      </div>
      <p className="other-papers">{zh
        ? "其他合作论文：ProSeCIL（第四作者）、TRICE（第三作者），均为 ICASSP 2027 在投。"
        : "Other co-authored papers: ProSeCIL (fourth author) and TRICE (third author), both submitted to ICASSP 2027."}</p>
    </section>

    <section id="experience" className="compact-section container">
      <h2>{zh ? "科研与实践经历" : "Research & practical experience"}</h2>
      <div className="experience-timeline">
        {content.experiences.map(e => <article className="experience-item" key={e.key}>
          <time>{e.period}</time>
          <div>
            <h3>{e.organization}<span className="experience-role"> · {e.role}</span></h3>
            {e.group && <p className="experience-group">{e.group}</p>}
            <p className="experience-summary">{e.summary}</p>
          </div>
        </article>)}
      </div>
    </section>

    <section id="skills" className="compact-section container">
      <h2>{zh ? "技术与方法" : "Technical skills & methods"}</h2>
      <p className="skills-paragraph">{profile.skillsSummary}</p>
    </section>
  </main>;
}
