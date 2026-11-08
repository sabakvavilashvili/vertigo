"use client";

import type { Service } from "@/lib/siteData";
import { t } from "@/lib/siteData";
import { useLanguage } from "@/components/LanguageProvider";

export function ServicesList({ items }: { items: Service[] }) {
  const { lang } = useLanguage();

  return (
    <div className="services-list">
      {items.map((service) => (
        <article key={service.number} className="service-item">
          <p className="service-item__number">{service.number}</p>
          <div>
            <h3>{t(lang, service.title)}</h3>
            <p>{t(lang, service.description)}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
