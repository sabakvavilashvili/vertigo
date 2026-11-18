"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navigation, t } from "@/content";
import { BrandMark } from "@/components/layout/BrandMark";
import { useLanguage } from "@/components/providers/LanguageProvider";

const nav = [
  { id: "home", label: navigation.home },
  { id: "services", label: navigation.services },
  { id: "about", label: navigation.about },
  { id: "projects", label: navigation.projects },
  { id: "contact", label: navigation.contact }
];

function LanguageSwitch() {
  const { lang, setLang } = useLanguage();

  return (
    <div className="lang-switch" role="group" aria-label={t(lang, navigation.languageLabel)}>
      <button type="button" className={lang === "ka" ? "is-active" : ""} aria-pressed={lang === "ka"} aria-label={t(lang, navigation.georgianLabel)} onClick={() => setLang("ka")}>{t(lang, navigation.georgianShort)}</button>
      <button type="button" className={lang === "en" ? "is-active" : ""} aria-pressed={lang === "en"} aria-label={t(lang, navigation.englishLabel)} onClick={() => setLang("en")}>{t(lang, navigation.englishShort)}</button>
    </div>
  );
}

export function Header() {
  const pathname = usePathname();
  const { lang } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (pathname !== "/") return;
    const updateActiveSection = () => {
      const marker = window.innerHeight * 0.3;
      let current: string = "home";
      for (const item of nav) {
        const section = document.getElementById(item.id);
        if (section && section.getBoundingClientRect().top <= marker) current = item.id;
      }
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2) {
        current = "contact";
      }
      setActiveSection(current);
    };
    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);
    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, [pathname]);

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link href="/#home" className="wordmark" aria-label="VERTIGO home" onClick={() => setMenuOpen(false)}>
          <BrandMark />
        </Link>
        <nav className="site-nav" aria-label="Primary navigation">
          {nav.map((item) => (
            <Link key={item.id} href={`/#${item.id}`} className={pathname === "/" && activeSection === item.id ? "is-active" : ""} aria-current={pathname === "/" && activeSection === item.id ? "location" : undefined} onClick={() => setActiveSection(item.id)}>
              <span className="site-nav__label">
                <span aria-hidden="true">{item.label.ka}</span>
                <span aria-hidden="true">{item.label.en}</span>
                <span>{t(lang, item.label)}</span>
              </span>
            </Link>
          ))}
        </nav>
        <div className="site-header__language"><LanguageSwitch /></div>
        <button
          type="button"
          className="menu-toggle"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span />
          <span />
        </button>
      </div>
      <div id="mobile-nav" className={`mobile-nav ${menuOpen ? "is-open" : ""}`}>
        {nav.map((item) => (
          <Link key={item.id} href={`/#${item.id}`} className={pathname === "/" && activeSection === item.id ? "is-active" : ""} aria-current={pathname === "/" && activeSection === item.id ? "location" : undefined} onClick={() => { setActiveSection(item.id); setMenuOpen(false); }}>
            {t(lang, item.label)}
          </Link>
        ))}
        <LanguageSwitch />
        <Link href="/#contact" className="button button--primary button--full" onClick={() => setMenuOpen(false)}>
          {t(lang, navigation.requestQuote)}
        </Link>
      </div>
    </header>
  );
}
