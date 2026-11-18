"use client";

import { HeroSlideshow } from "@/components/sections/HeroSlideshow";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServicesList } from "@/components/sections/ServicesList";
import { ProjectCard } from "@/components/sections/ProjectCard";
import { ApproachSteps } from "@/components/sections/ApproachSteps";
import { ContactIcon } from "@/components/ui/ContactIcon";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { aboutSection, contactSection, projectsSection, servicesSection, site, t } from "@/content";

export default function HomePage() {
  const { lang } = useLanguage();

  return (
    <>
      <HeroSlideshow lang={lang} />

      <section id="services" className="band">
        <div className="section container">
          <SectionHeading
            title={t(lang, servicesSection.title)}
          />
          <ServicesList items={servicesSection.items} contactLabel={servicesSection.contactButton} />
        </div>
      </section>

      <section id="about" className="band band--alt">
        <div className="section container">
          <SectionHeading title={t(lang, aboutSection.title)} />
          <p className="intro-copy">{t(lang, aboutSection.introduction)}</p>
          <h3 className="about-subheading">{t(lang, aboutSection.approachTitle)}</h3>
          <ApproachSteps steps={aboutSection.steps} />
          <h3 className="about-subheading">{t(lang, aboutSection.safetyTitle)}</h3>
          <div className="approach-item approach-item--safety">
            <p>{t(lang, aboutSection.safetyDescription)}</p>
          </div>
        </div>
      </section>

      <section id="projects" className="band">
        <div className="section container">
          <SectionHeading
            title={t(lang, projectsSection.title)}
          />
          <div className="projects-grid projects-grid--four">
            {projectsSection.items.map((project) => (
              <ProjectCard key={project.slug} project={project}/>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section section--contact band--alt">
        <div className="container cta-block">
          <h2>{t(lang, contactSection.title)}</h2>
          <p>{t(lang, contactSection.description)}</p>
          <a href={site.whatsappUrl} target="_blank" rel="noopener noreferrer" className="button button--primary">{t(lang, contactSection.button)}</a>
          <div className="contact-details">
            <a href={`mailto:${site.email}`}><ContactIcon name="mail" />{site.email}</a>
            <a href={`tel:${site.phone.replace(/\s+/g, "")}`}><ContactIcon name="phone" />{site.phone}</a>
            <span><ContactIcon name="pin" />{t(lang, site.location)}</span>
          </div>
          <div className="contact-bottom-row">
            <SocialLinks />
            <button
              type="button"
              className="scroll-top"
              aria-label={lang === "ka" ? "ზემოთ ასვლა" : "Back to top"}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <span />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
