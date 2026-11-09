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
              <li><Link href="/#home">{t(lang, uiText.navHome)}</Link></li>
              <li><Link href="/#about">{t(lang, uiText.navAbout)}</Link></li>
              <li><Link href="/#services">{t(lang, uiText.navServices)}</Link></li>
              <li><Link href="/#projects">{t(lang, uiText.navProjects)}</Link></li>
              <li><Link href="/#join">{t(lang, uiText.navJoin)}</Link></li>
              <li><Link href="/#contact">{t(lang, uiText.navContact)}</Link></li>
            </ul>
          </div>
          <p className="site-footer__attribution">
            {lang === "ka" ? "ფოტო" : "Photo"}: <a href="https://commons.wikimedia.org/wiki/File:Bubensk%C3%A9_n%C3%A1b%C5%99e%C5%BE%C3%AD,_%C4%8Di%C5%A1t%C4%9Bn%C3%AD_oken_ni%C5%BE%C5%A1%C3%AD_budovy_Lighthouse.jpg">ŠJů, Wikimedia Commons</a> · <a href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a> · {lang === "ka" ? "მოჭრილი" : "cropped"}
          </p>
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
