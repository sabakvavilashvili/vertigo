"use client";

import Link from "next/link";
import type { Project } from "@/lib/siteData";
import { t } from "@/lib/siteData";
import { useLanguage } from "@/components/LanguageProvider";

export function ProjectCard({ project, inline = false }: { project: Project; inline?: boolean }) {
  const { lang } = useLanguage();

  if (inline) {
    return (
      <article className="project-card">
        <div className="project-card__media">
          <img src={project.image} alt={`${t(lang, project.name)} placeholder visual`} />
        </div>
        <div className="project-card__body">
          <h3>{t(lang, project.name)}</h3>
          <p>{t(lang, project.location)}</p>
          <p>{t(lang, project.category)} · {project.year}</p>
          <details className="project-card__details">
            <summary>{lang === "ka" ? "პროექტის შესახებ" : "Project details"}</summary>
            <p>{t(lang, project.summary)}</p>
            <p><strong>{lang === "ka" ? "სამუშაოების მოცულობა" : "Scope of work"}:</strong> {t(lang, project.scope)}</p>
            <p><strong>{lang === "ka" ? "შედეგი" : "Outcome"}:</strong> {t(lang, project.outcome)}</p>
            <div className="project-card__gallery">
              {project.gallery.map((image, index) => (
                <img key={`${image}-${index}`} src={image} alt={`${t(lang, project.name)} ${lang === "ka" ? "გალერიის ვიზუალი" : "gallery visual"} ${index + 1}`} />
              ))}
            </div>
          </details>
        </div>
      </article>
    );
  }

  return (
    <Link href={`/projects/${project.slug}`} className="project-card">
      <div className="project-card__media">
        <img src={project.image} alt={`${t(lang, project.name)} placeholder visual`} />
      </div>
      <div className="project-card__body">
        <h3>{t(lang, project.name)}</h3>
        <p>{t(lang, project.location)}</p>
        <p>
          {t(lang, project.category)} · {project.year}
        </p>
      </div>
    </Link>
  );
}
