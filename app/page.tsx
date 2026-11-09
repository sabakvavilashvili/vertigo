"use client";

import { HeroSlideshow } from "@/components/HeroSlideshow";
import { SectionHeading } from "@/components/SectionHeading";
import { ServicesList } from "@/components/ServicesList";
import { ProjectCard } from "@/components/ProjectCard";
import { ApproachSteps } from "@/components/ApproachSteps";
import { useLanguage } from "@/components/LanguageProvider";
import { approach, projects, ropeAccessAdvantages, services, site, t } from "@/lib/siteData";

export default function HomePage() {
  const { lang } = useLanguage();

  return (
    <>
      <HeroSlideshow lang={lang} />

      <section id="about" className="section container">
        <SectionHeading title={lang === "ka" ? "რთული წვდომის სპეციალისტები." : "Specialists in difficult access."} />
        <p className="intro-copy">
          {lang === "ka"
            ? "VERTIGO უზრუნველყოფს პროფესიულ თოკზე წვდომასა და სამრეწველო სერვისებს პროექტებისთვის, სადაც ტრადიციული წვდომის მეთოდები არაეფექტური ან შეუძლებელია."
            : "VERTIGO provides professional rope access and industrial services for projects where conventional access methods are inefficient, impractical, or impossible."}
        </p>
        <h3 className="about-subheading">{lang === "ka" ? "ჩვენი მიდგომა" : "Our approach"}</h3>
        <ApproachSteps steps={approach} />
        <h3 className="about-subheading">{lang === "ka" ? "უსაფრთხოება" : "Safety"}</h3>
        <p className="intro-copy">
          {lang === "ka"
            ? "ყოველი ოპერაცია იწყება დაგეგმვით, რისკების შეფასებითა და მეთოდის დიზაინით. სამუშაო სრულდება პროფესიული აღჭურვილობით, განსაზღვრული პროცედურებით და ობიექტის კოორდინაციით."
            : "Every operation starts with planning, risk assessment, and method design. Work is executed with professional equipment, defined procedures, and site coordination."}
        </p>
      </section>

      <section id="services" className="section container section--line">
        <SectionHeading
          eyebrow={lang === "ka" ? "სერვისები" : "Services"}
          title={lang === "ka" ? "ზუსტი სერვისები ტექნიკური გარემოებისთვის." : "Precision services for technical environments."}
        />
        <ServicesList items={services} />
      </section>

      <section className="section container section--line">
        <SectionHeading
          eyebrow={lang === "ka" ? "რატომ თოკზე წვდომა" : "Why Rope Access"}
          title={lang === "ka" ? "შექმნილია ეფექტურობისთვის რთულ გარემოში." : "Engineered for efficiency in difficult places."}
        />
        <div className="advantages-grid">
          {ropeAccessAdvantages.map((item, index) => (
            <article key={`${index}-${t(lang, item.title)}`}>
              <h3>{t(lang, item.title)}</h3>
              <p>{t(lang, item.description)}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="projects" className="section container section--line">
        <SectionHeading
          eyebrow={lang === "ka" ? "რჩეული პროექტები" : "Selected Projects"}
          title={lang === "ka" ? "საველე სამუშაოები ვერტიკალურ, რთულ და შეზღუდულ პირობებში." : "Field work in vertical, complex, and restricted conditions."}
        />
        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} inline />
          ))}
        </div>
      </section>

      <section className="section container section--line">
        <SectionHeading title={lang === "ka" ? "შექმნილია რთული გარემოსთვის." : "Built for difficult places."} />
        <p className="intro-copy">
          {lang === "ka"
            ? "ჩვენ ვაერთიანებთ ტექნიკურ ექსპერტიზას, ზუსტ დაგეგმვას, უსაფრთხოებაზე ორიენტირებულ შესრულებას და პრაქტიკულ პრობლემების გადაწყვეტას."
            : "We combine technical expertise, planning discipline, safety-first execution, and practical problem solving for challenging access requirements."}
        </p>
      </section>

      <section id="join" className="section section--cta">
        <div className="container cta-block">
          <p className="section-eyebrow">{site.brand}</p>
          <h2>{lang === "ka" ? "გახდი ჩვენი გუნდის წევრი" : "Join our team"}</h2>
          <p>{lang === "ka" ? "გაინტერესებთ სიმაღლეზე მუშაობა? მოგვწერეთ და გაგვიზიარეთ თქვენი გამოცდილება." : "Interested in working at height? Contact us and tell us about your experience."}</p>
          <a href={`mailto:${site.email}?subject=${encodeURIComponent(lang === "ka" ? "გუნდის წევრობა" : "Join the team")}`} className="button button--primary">
            {lang === "ka" ? "მოგვწერეთ" : "Contact us"}
          </a>
        </div>
      </section>

      <section id="contact" className="section section--contact">
        <div className="container cta-block">
          <p className="section-eyebrow">{site.brand}</p>
          <h2>{lang === "ka" ? "გაქვთ რთული წვდომის პრობლემა?" : "Have a difficult access problem?"}</h2>
          <p>{lang === "ka" ? "მოგვწერეთ რა გჭირდებათ. ჩვენ ვიპოვით გზას მისაწვდომად." : "Tell us what you need. We'll find a way to reach it."}</p>
          <a href={`mailto:${site.email}`} className="button button--primary">{lang === "ka" ? "დაუკავშირდით VERTIGO-ს" : "Contact VERTIGO"}</a>
          <div className="contact-details">
            <a href={`mailto:${site.email}`}>{site.email}</a>
            <a href={`tel:${site.phone.replace(/\s+/g, "")}`}>{site.phone}</a>
            <span>{t(lang, site.location)}</span>
          </div>
        </div>
      </section>
    </>
  );
}
