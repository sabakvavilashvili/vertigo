"use client";

import type { Localized } from "@/lib/siteData";
import { t } from "@/lib/siteData";
import { useLanguage } from "@/components/LanguageProvider";

type Step = {
  number: string;
  title: Localized;
  description: Localized;
};

export function ApproachSteps({ steps }: { steps: Step[] }) {
  const { lang } = useLanguage();

  return (
    <ol className="approach-grid">
      {steps.map((step) => (
        <li key={step.number} className="approach-item">
          <p className="approach-item__number">{step.number} — {t(lang, step.title)}</p>
          <p>{t(lang, step.description)}</p>
        </li>
      ))}
    </ol>
  );
}
