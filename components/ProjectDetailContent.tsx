"use client";

import { SectionHeading } from "@/components/SectionHeading";
import { useLanguage } from "@/components/LanguageProvider";
import type { Project } from "@/lib/siteData";
import { t } from "@/lib/siteData";

export function ProjectDetailContent({ project }: { project: Project }) {
  const { lang } = useLanguage();

  return (
    <>
      <section className="project-hero">
        <img
          src={project.image}
          alt={`${t(lang, project.name)} ${lang === "ka" ? "პროექტის ვიზუალი" : "project visual"}`}
        />
        <div className="project-hero__meta container">
          <p className="section-eyebrow">{lang === "ka" ? "პროექტი" : "Project"}</p>
          <h1>{t(lang, project.name)}</h1>
          <p>
            {t(lang, project.location)} · {project.year} · {t(lang, project.category)}
          </p>
        </div>
      </section>

      <section className="section container">
        <p className="notice">
          {lang === "ka"
            ? "დროებითი პროექტის პროფილი. ჩაანაცვლეთ ეს ტექსტი დადასტურებული დოკუმენტაციით."
            : "Placeholder project profile. Replace this content with verified project documentation."}
        </p>
        <div className="project-detail-grid">
          <article>
            <SectionHeading title={lang === "ka" ? "პროექტის მიმოხილვა" : "Project Overview"} />
            <p>{t(lang, project.summary)}</p>
          </article>
          <article>
            <SectionHeading title={lang === "ka" ? "სამუშაოების მოცულობა" : "Scope of Work"} />
            <p>{t(lang, project.scope)}</p>
          </article>
        </div>
      </section>

      <section className="section container section--line">
        <SectionHeading title={lang === "ka" ? "პროექტის გალერეა" : "Project Gallery"} />
        <div className="gallery-grid">
          {project.gallery.map((image, index) => (
            <figure key={image + index}>
              <img
                src={image}
                alt={`${t(lang, project.name)} ${lang === "ka" ? "გალერიის ვიზუალი" : "gallery visual"} ${index + 1}`}
              />
            </figure>
          ))}
        </div>
      </section>

      <section className="section container section--line">
        <SectionHeading title={lang === "ka" ? "შედეგი" : "Outcome"} />
        <p>{t(lang, project.outcome)}</p>
      </section>
    </>
  );
}
