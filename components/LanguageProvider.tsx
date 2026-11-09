"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { site, type Lang } from "@/lib/siteData";

type LanguageContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("ka");

  useEffect(() => {
    const saved = localStorage.getItem("vertigo-lang");
    if (saved === "ka" || saved === "en") {
      setLangState(saved);
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = site.title[lang];
    localStorage.setItem("vertigo-lang", lang);
  }, [lang]);

  const value = useMemo(
    () => ({
      lang,
      setLang: (next: Lang) => setLangState(next)
    }),
    [lang]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}
