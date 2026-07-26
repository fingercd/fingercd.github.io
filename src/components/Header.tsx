"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import type { Locale } from "@/content/types";
import type { UiDictionary } from "@/content/ui";
import { CloseIcon, DownloadIcon, MenuIcon } from "./Icons";

interface HeaderProps {
  locale: Locale;
  dictionary: UiDictionary;
  cvHref: string;
}

export function Header({
  locale,
  dictionary,
  cvHref,
}: HeaderProps) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const homeHref = `/${locale}/`;
  const alternateLocale = locale === "zh" ? "en" : "zh";
  const alternateHref =
    pathname?.replace(/^\/(zh|en)(?=\/|$)/, `/${alternateLocale}`) ||
    `/${alternateLocale}/`;
  const isHome = pathname === `/${locale}` || pathname === homeHref;

  const navItems = useMemo(
    () => [
      { id: "research", label: dictionary.nav.research },
      { id: "work", label: dictionary.nav.work },
      { id: "experience", label: dictionary.nav.experience },
      { id: "life", label: dictionary.nav.life },
    ],
    [dictionary],
  );

  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  useEffect(() => {
    if (!isHome) {
      return;
    }

    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) {
          setActiveSection(visible.target.id);
        }
      },
      {
        rootMargin: "-30% 0px -58% 0px",
        threshold: [0, 0.1, 0.35],
      },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [isHome, navItems]);

  const sectionHref = (id: string) => (isHome ? `#${id}` : `${homeHref}#${id}`);
  const displayedActiveSection = isHome ? activeSection : "";

  return (
    <header className="site-header" data-menu-open={menuOpen ? "true" : "false"}>
      <div className="container header-shell">
        <Link
          className="brand"
          href={homeHref}
          aria-label={`ZQ · ${dictionary.localeName} home`}
          onClick={() => setMenuOpen(false)}
        >
          <span className="brand-mark" aria-hidden="true">
            ZQ
          </span>
          <span className="brand-copy">
            <strong>Zitong Qi</strong>
            <small>Vision · Language · Systems</small>
          </span>
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={sectionHref(item.id)}
              className={displayedActiveSection === item.id ? "is-active" : undefined}
              aria-current={displayedActiveSection === item.id ? "location" : undefined}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <a className="header-cv" href={cvHref} target="_blank" rel="noreferrer">
            <DownloadIcon width={16} height={16} />
            <span>{dictionary.nav.cv}</span>
          </a>
          <Link
            className="language-switch"
            href={alternateHref}
            hrefLang={locale === "zh" ? "en" : "zh-CN"}
            onClick={() => setMenuOpen(false)}
          >
            {dictionary.languageSwitch}
          </Link>
          <button
            className="menu-button"
            type="button"
            aria-label={menuOpen ? dictionary.menuClose : dictionary.menuOpen}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      <nav
        id="mobile-navigation"
        className="mobile-nav"
        aria-label="Mobile navigation"
        hidden={!menuOpen}
      >
        <div className="container mobile-nav-inner">
          {navItems.map((item, index) => (
            <a
              key={item.id}
              href={sectionHref(item.id)}
              onClick={() => setMenuOpen(false)}
              aria-current={displayedActiveSection === item.id ? "location" : undefined}
            >
              <span aria-hidden="true">0{index + 1}</span>
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
