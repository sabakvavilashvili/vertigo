"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { site, t, uiText } from "@/lib/siteData";
import { useLanguage } from "@/components/LanguageProvider";

const nav = [
  { key: "projects", href: "/projects" },
  { key: "about", href: "/about" },
  { key: "contact", href: "/contact" }
] as const;

export function Header() {
  const pathname = usePathname();
  const { lang, setLang } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const transparent = pathname === "/" && !scrolled;

  return (
    <header className={`site-header ${transparent ? "site-header--overlay" : ""}`}>
      <div className="site-header__inner">
        <Link href="/" className="wordmark" aria-label="VERTIGO home">
          {site.brand}
        </Link>
        <nav className="site-nav" aria-label="Primary navigation">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className={pathname === item.href ? "is-active" : ""}>
              {item.key === "projects" && t(lang, uiText.navProjects)}
              {item.key === "about" && t(lang, uiText.navAbout)}
              {item.key === "contact" && t(lang, uiText.navContact)}
            </Link>
          ))}
          <div className="lang-switch" role="group" aria-label="Language switch">
            <button type="button" className={lang === "ka" ? "is-active" : ""} onClick={() => setLang("ka")}>KA</button>
            <button type="button" className={lang === "en" ? "is-active" : ""} onClick={() => setLang("en")}>EN</button>
          </div>
          <Link href="/contact" className="button button--primary">
            {t(lang, uiText.requestQuote)}
          </Link>
        </nav>
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
          <Link key={item.href} href={item.href} className={pathname === item.href ? "is-active" : ""}>
            {item.key === "projects" && t(lang, uiText.navProjects)}
            {item.key === "about" && t(lang, uiText.navAbout)}
            {item.key === "contact" && t(lang, uiText.navContact)}
          </Link>
        ))}
        <div className="lang-switch" role="group" aria-label="Language switch">
          <button type="button" className={lang === "ka" ? "is-active" : ""} onClick={() => setLang("ka")}>KA</button>
          <button type="button" className={lang === "en" ? "is-active" : ""} onClick={() => setLang("en")}>EN</button>
        </div>
        <Link href="/contact" className="button button--primary button--full">
          {t(lang, uiText.requestQuote)}
        </Link>
      </div>
    </header>
  );
}
