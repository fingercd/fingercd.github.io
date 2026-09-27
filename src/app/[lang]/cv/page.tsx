import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getLocalizedContent, isLocale, projectPath } from "@/lib/content";
import { publicCv } from "@/lib/site";
import { DownloadIcon } from "@/components/Icons";

export async function generateMetadata({params}: {params:Promise<{lang:string}>}): Promise<Metadata> {
  const {lang}=await params;
  return {title:lang==="zh" ? "齐梓桐 · 完整履历" : "Zitong Qi · Full Research Profile",
    alternates:{canonical:"/"+lang+"/cv/",languages:{"zh-CN":"/zh/cv/",en:"/en/cv/"}}};
}

export default async function CvPage({params}: {params:Promise<{lang:string}>}) {
  const {lang}=await params;
  if (!isLocale(lang)) notFound();
  const content=getLocalizedContent(lang);
  const zh=lang==="zh";
  return <main id="main-content" className="container cv-page">
    <p className="eyebrow">{zh ? "完整履历 · 更新于 2026.09.27" : "RESEARCH PROFILE · UPDATED 27 SEP 2026"}</p>
    <h1>{content.profile.name}</h1>
    <p>{content.profile.field}</p>
    <p>{content.profile.introduction}</p>
    <div className="hero-actions cv-download"><a className="button button-primary" href={publicCv[lang]} target="_blank" rel="noreferrer"><DownloadIcon />{zh ? "下载一页简历" : "Download one-page CV"}</a><a className="text-link" href={"/"+lang+"/"}>{zh ? "返回个人主页" : "Back to portfolio"}</a></div>
    <section className="cv-section"><h2>{zh ? "科研与实践经历" : "Research & practical experience"}</h2>
      {content.experiences.map(e=><article className="cv-entry" key={e.key}><h3>{e.organization}</h3><p className="cv-meta">{e.period} · {e.group ? e.group+" · " : ""}{e.role}</p><p>{e.summary}</p></article>)}
    </section>
    <section className="cv-section"><h2>{zh ? "核心研究" : "Selected research"}</h2>
      {content.projects.filter(p=>p.featured).map(p=><article className="cv-entry" key={p.key}><h3><a href={projectPath(lang,p.slug)}>{p.title} · {p.subtitle}</a></h3><p className="cv-meta">{p.venue} · {p.status} · {p.role}</p><p><strong>{zh ? "本人贡献：" : "My contribution: "}</strong>{p.homepageContribution}</p><ol>{p.contributions.map(c=><li key={c}>{c}</li>)}</ol><p><strong>{zh ? "项目结果：" : "Project results: "}</strong>{p.result}</p></article>)}
    </section>
    <section className="cv-section"><h2>{zh ? "合作论文" : "Co-authored papers"}</h2>
      <article className="cv-entry"><h3>ProSeCIL</h3><p>Prototype-Calibrated Semantic Fusion for Exemplar-Free Class-Incremental Learning</p><p className="cv-meta">{zh ? "ICASSP 2027 在投 · 第四作者" : "Submitted to ICASSP 2027 · Fourth author"}</p></article>
      <article className="cv-entry"><h3>TRICE</h3><p>Tri-Branch Calibrated Ensemble for Optimization-Free Incremental Adaptation in Few-Shot Class-Incremental Learning</p><p className="cv-meta">{zh ? "ICASSP 2027 在投 · 第三作者" : "Submitted to ICASSP 2027 · Third author"}</p></article>
    </section>
    <section className="cv-section"><h2>{zh ? "技术能力与项目应用" : "Technical skills & application"}</h2>
      <p className="skills-paragraph">{content.profile.skillsSummary}</p>
    </section>
  </main>;
}
