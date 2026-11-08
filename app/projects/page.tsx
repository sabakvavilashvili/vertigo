"use client";

import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeading } from "@/components/SectionHeading";
import { projects } from "@/lib/siteData";
import { useLanguage } from "@/components/LanguageProvider";

export default function ProjectsPage() {
  const { lang } = useLanguage();

  return (
    <>
      <section className="page-hero page-hero--tight">
        <div className="container">
          <SectionHeading
            eyebrow={lang === "ka" ? "პროექტები" : "Projects"}
            title={lang === "ka" ? "ჩვენი პროექტები" : "Our Projects"}
            description={
              lang === "ka"
                ? "VERTIGO-ს მიერ შესრულებული თოკზე წვდომისა და სამრეწველო პროექტების შერჩევა."
                : "A selection of rope access and industrial projects completed by VERTIGO."
            }
          />
        </div>
      </section>

      <section className="section container">
        <div className="projects-grid projects-grid--full">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </>
  );
}
