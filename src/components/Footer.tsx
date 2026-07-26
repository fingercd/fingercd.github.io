import Link from "next/link";
import type { Locale } from "@/content/types";
import type { UiDictionary } from "@/content/ui";
import { ArrowUpRightIcon, GithubIcon } from "./Icons";

interface FooterProps {
  locale: Locale;
  dictionary: UiDictionary;
  github: string;
}

export function Footer({ locale, dictionary, github }: FooterProps) {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <Link className="footer-brand" href={`/${locale}/`}>
            Zitong Qi
          </Link>
          <p>{dictionary.footer.note}</p>
        </div>
        <div className="footer-meta">
          <a href={github} target="_blank" rel="noreferrer">
            <GithubIcon />
            GitHub
            <ArrowUpRightIcon width={15} height={15} />
          </a>
          <span>{dictionary.footer.updated}</span>
          <span>{dictionary.footer.privacy}</span>
        </div>
      </div>
    </footer>
  );
}
