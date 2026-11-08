"use client";

import { ApproachSteps } from "@/components/ApproachSteps";
import { SectionHeading } from "@/components/SectionHeading";
import { approach } from "@/lib/siteData";
import { useLanguage } from "@/components/LanguageProvider";

export default function AboutPage() {
  const { lang } = useLanguage();

  return (
    <>
      <section className="page-hero page-hero--tight">
        <div className="container">
          <SectionHeading title={lang === "ka" ? "შექმნილია რთული გარემოსთვის." : "Built for difficult places."} />
        </div>
      </section>

      <section className="section container">
        <div className="about-grid">
          <article>
            <SectionHeading title={lang === "ka" ? "ვინ ვართ ჩვენ" : "Who We Are"} />
            <p>
              {lang === "ka"
                ? "VERTIGO არის პროფესიული თოკზე წვდომისა და სამრეწველო სერვისების კომპანია, რომელიც ფოკუსირებულია უსაფრთხო და ტექნიკურ შესრულებაზე რთულ გარემოში."
                : "VERTIGO is a professional rope access and industrial services company focused on safe, technical execution in complex environments where access is the core challenge."}
            </p>
          </article>
          <article>
            <img
              src="/images/about/about-vertical-grid.svg"
              alt={lang === "ka" ? "აბსტრაქტული ვერტიკალური სტრუქტურის ვიზუალი" : "Abstract vertical structural placeholder visual"}
            />
          </article>
        </div>
      </section>

      <section className="section container section--line">
        <SectionHeading title={lang === "ka" ? "ჩვენი მიდგომა" : "Our Approach"} />
        <ApproachSteps steps={approach} />
      </section>

      <section className="section container section--line">
        <SectionHeading title={lang === "ka" ? "უსაფრთხოება" : "Safety"} />
        <p>
          {lang === "ka"
            ? "ყოველი ოპერაცია იწყება დაგეგმვით, რისკების შეფასებითა და მეთოდის დიზაინით. სამუშაო სრულდება პროფესიული აღჭურვილობით, განსაზღვრული პროცედურებით და ობიექტის კოორდინაციით."
            : "Every operation starts with planning, risk assessment, and method design. Work is executed with professional equipment, defined procedures, and site coordination to maintain control and safety throughout the task lifecycle."}
        </p>
      </section>

      <section className="section container section--line">
        <SectionHeading
          title={lang === "ka" ? "გამოცდილება" : "Experience"}
          description={
            lang === "ka"
              ? "დროებითი ზონა კომპანიის ისტორიის, სერტიფიკატების, გუნდისა და გამოცდილების დადასტურებული ინფორმაციით შესავსებად."
              : "Placeholder area for verified company history, certifications, team members, and project experience."
          }
        />
        <div className="placeholder-block">
          <p>{lang === "ka" ? "ჩაანაცვლეთ დადასტურებული კომპანიის ტაიმლაინით და შესაძლებლობების პროფილით." : "Replace with approved company timeline and capability profile."}</p>
          <p>{lang === "ka" ? "ჩაანაცვლეთ სერტიფიკატებითა და წევრობებით." : "Replace with certifications and memberships."}</p>
          <p>{lang === "ka" ? "ჩაანაცვლეთ გუნდის ძირითადი წევრებით და სპეციალისტების როლებით." : "Replace with key personnel and specialist roles."}</p>
        </div>
      </section>
    </>
  );
}
