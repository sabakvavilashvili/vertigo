export type Lang = "ka" | "en";

export type Localized = {
  ka: string;
  en: string;
};

export function t(lang: Lang, value: Localized): string {
  return value[lang];
}

export type Service = {
  title: Localized;
  description?: Localized;
  image: string;
  details: Localized[];
  custom?: boolean;
};

export type Project = {
  slug: string;
  name: Localized;
  location: Localized;
  category: Localized;
  year: string;
  image: string;
  summary: Localized;
  scope: Localized;
  outcome: Localized;
  gallery: string[];
};
