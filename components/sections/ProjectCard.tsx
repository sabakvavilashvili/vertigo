"use client";

import { useCallback, useState } from "react";
import type { Project } from "@/content";
import { projectsSection, t } from "@/content";
import { DetailModal } from "@/components/ui/DetailModal";
import { useLanguage } from "@/components/providers/LanguageProvider";

export function ProjectCard({ project }: { project: Project }) {
  const { lang } = useLanguage();
  const [open, setOpen] = useState(false);
  const closeModal = useCallback(() => setOpen(false), []);

  return (
    <>
      <article
        className="project-card project-card--interactive"
        role="button"
        tabIndex={0}
        onClick={() => setOpen(true)}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            setOpen(true);
          }
        }}
      >
        <div className="project-card__media">
          <img src={project.image} alt={`${t(lang, project.name)} placeholder visual`} />
        </div>
        <div className="project-card__body">
          <h3>{t(lang, project.name)}</h3>
          <p>{t(lang, project.location)}</p>
          <p>{t(lang, project.category)} · {project.year}</p>
        </div>
      </article>
      {open && (
        <DetailModal
          title={t(lang, project.name)}
          photos={[project.image, ...project.gallery]}
          photoAlt={t(lang, project.name)}
          onClose={closeModal}
        >
          <p className="project-modal__meta">{t(lang, project.location)} · {t(lang, project.category)} · {project.year}</p>
          <p>{t(lang, project.summary)}</p>
          <p><strong>{t(lang, projectsSection.scopeLabel)}:</strong> {t(lang, project.scope)}</p>
          <p><strong>{t(lang, projectsSection.outcomeLabel)}:</strong> {t(lang, project.outcome)}</p>
        </DetailModal>
      )}
    </>
  );
}
