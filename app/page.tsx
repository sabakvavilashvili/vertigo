"use client";

import Link from "next/link";
import { SectionHeading } from "@/components/SectionHeading";
import { ServicesList } from "@/components/ServicesList";
import { ProjectCard } from "@/components/ProjectCard";
import { useLanguage } from "@/components/LanguageProvider";
import { projects, ropeAccessAdvantages, services, site, t } from "@/lib/siteData";

export default function HomePage() {
  const { lang } = useLanguage();
  const featuredProjects = projects.slice(0, 3);

  return (
    <>
      <section className="hero">
        <img
          src="/images/hero/hero-main.svg"
          alt={lang === "ka" ? "თოკზე წვდომის სპეციალისტები სიმაღლეზე" : "Rope access technicians at height"}
        />
        <div className="hero__overlay" />
        <div className="hero__content container">
          <p className="section-eyebrow">
            {lang === "ka" ? "VERTIGO — თოკზე წვდომა და სამრეწველო სერვისები" : "VERTIGO — ROPE ACCESS & INDUSTRIAL SERVICES"}
          </p>
          <h1>
            {lang === "ka" ? "სიმაღლეზე სამუშაოები." : "Work at height."}
            <br />
            {lang === "ka" ? "შეზღუდვების გარეშე." : "Without limits."}
          </h1>
          <p>
            {lang === "ka"
              ? "პროფესიული თოკზე წვდომის გადაწყვეტები რთული სამუშაოებისთვის, სადაც ტრადიციული მეთოდები ვერ აღწევს."
              : "Professional rope access solutions for complex work in places conventional access can't reach."}
          </p>
          <div className="hero__actions">
            <Link href="/projects" className="button button--primary">
              {lang === "ka" ? "ჩვენი პროექტები" : "Our Projects"}
            </Link>
            <Link href="/contact" className="button button--ghost">
              {lang === "ka" ? "დაგვიკავშირდით" : "Get in Touch"}
            </Link>
          </div>
        </div>
      </section>

      <section className="section container">
        <SectionHeading title={lang === "ka" ? "რთული წვდომის სპეციალისტები." : "Specialists in difficult access."} />
        <p className="intro-copy">
          {lang === "ka"
            ? "VERTIGO უზრუნველყოფს პროფესიულ თოკზე წვდომასა და სამრეწველო სერვისებს პროექტებისთვის, სადაც ტრადიციული წვდომის მეთოდები არაეფექტური ან შეუძლებელია."
            : "VERTIGO provides professional rope access and industrial services for projects where conventional access methods are inefficient, impractical, or impossible."}
        </p>
        <Link href="/about" className="text-link">{lang === "ka" ? "VERTIGO-ს შესახებ →" : "About VERTIGO →"}</Link>
      </section>

      <section className="section container section--line">
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

      <section className="section container section--line">
        <SectionHeading
          eyebrow={lang === "ka" ? "რჩეული პროექტები" : "Selected Projects"}
          title={lang === "ka" ? "საველე სამუშაოები ვერტიკალურ, რთულ და შეზღუდულ პირობებში." : "Field work in vertical, complex, and restricted conditions."}
        />
        <div className="projects-grid">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
        <Link href="/projects" className="text-link">{lang === "ka" ? "ყველა პროექტის ნახვა →" : "View all projects →"}</Link>
      </section>

      <section className="section container section--line">
        <SectionHeading title={lang === "ka" ? "შექმნილია რთული გარემოსთვის." : "Built for difficult places."} />
        <p className="intro-copy">
          {lang === "ka"
            ? "ჩვენ ვაერთიანებთ ტექნიკურ ექსპერტიზას, ზუსტ დაგეგმვას, უსაფრთხოებაზე ორიენტირებულ შესრულებას და პრაქტიკულ პრობლემების გადაწყვეტას."
            : "We combine technical expertise, planning discipline, safety-first execution, and practical problem solving for challenging access requirements."}
        </p>
        <Link href="/about" className="text-link">{lang === "ka" ? "ჩვენ შესახებ →" : "About us →"}</Link>
      </section>

      <section className="section section--cta">
        <div className="container cta-block">
          <p className="section-eyebrow">{site.brand}</p>
          <h2>{lang === "ka" ? "გაქვთ რთული წვდომის პრობლემა?" : "Have a difficult access problem?"}</h2>
          <p>{lang === "ka" ? "მოგვწერეთ რა გჭირდებათ. ჩვენ ვიპოვით გზას მისაწვდომად." : "Tell us what you need. We'll find a way to reach it."}</p>
          <Link href="/contact" className="button button--primary">{lang === "ka" ? "დაუკავშირდით VERTIGO-ს" : "Contact VERTIGO"}</Link>
        </div>
      </section>
    </>
  );
}
