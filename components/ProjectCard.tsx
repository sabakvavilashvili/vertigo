"use client";

import Link from "next/link";
import type { Project } from "@/lib/siteData";
import { t } from "@/lib/siteData";
import { useLanguage } from "@/components/LanguageProvider";

export function ProjectCard({ project }: { project: Project }) {
  const { lang } = useLanguage();

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
