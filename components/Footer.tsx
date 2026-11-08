"use client";

import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";
import { site, t, uiText } from "@/lib/siteData";

export function Footer() {
  const { lang } = useLanguage();

  return (
    <footer className="site-footer">
      <div className="site-footer__top">
        <div>
          <p className="wordmark">{site.brand}</p>
          <p className="footer-tagline">{t(lang, site.tagline)}</p>
        </div>
        <div className="footer-grid">
          <div>
            <p className="footer-label">{t(lang, uiText.footerNavigation)}</p>
            <ul>
              <li><Link href="/projects">{t(lang, uiText.navProjects)}</Link></li>
              <li><Link href="/about">{t(lang, uiText.navAbout)}</Link></li>
              <li><Link href="/contact">{t(lang, uiText.navContact)}</Link></li>
            </ul>
          </div>
          <div>
            <p className="footer-label">{t(lang, uiText.footerContact)}</p>
            <ul>
              <li><a href={`mailto:${site.email}`}>{site.email}</a></li>
              <li><a href={`tel:${site.phone.replace(/\s+/g, "")}`}>{site.phone}</a></li>
              <li>{t(lang, site.location)}</li>
            </ul>
          </div>
          <div>
            <p className="footer-label">{t(lang, uiText.footerSocial)}</p>
            <ul>
              {site.social.map((link) => (
                <li key={link.label}><a href={link.href}>{link.label}</a></li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <p className="site-footer__copyright">{t(lang, uiText.copyright)}</p>
    </footer>
  );
}
