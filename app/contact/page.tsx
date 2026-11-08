"use client";

import { SectionHeading } from "@/components/SectionHeading";
import { useLanguage } from "@/components/LanguageProvider";
import { site, t } from "@/lib/siteData";

export default function ContactPage() {
  const { lang } = useLanguage();

  return (
    <>
      <section className="page-hero page-hero--tight">
        <div className="container">
          <SectionHeading
            title={lang === "ka" ? "მოგვიყევით თქვენს პროექტზე." : "Let's talk about your project."}
            description={
              lang === "ka"
                ? "მოგვწერეთ რაზე გჭირდებათ წვდომა და ჩვენ სწრაფად დაგიკავშირდებით."
                : "Tell us what you need access to, and we'll get back to you."
            }
          />
        </div>
      </section>

      <section className="section container">
        <div className="contact-grid">
          <form className="contact-form" onSubmit={(event) => event.preventDefault()}>
            <label>
              {lang === "ka" ? "სახელი" : "Name"}
              <input type="text" name="name" required />
            </label>
            <label>
              {lang === "ka" ? "კომპანია" : "Company"}
              <input type="text" name="company" />
            </label>
            <label>
              {lang === "ka" ? "ელფოსტა" : "Email"}
              <input type="email" name="email" required />
            </label>
            <label>
              {lang === "ka" ? "ტელეფონი" : "Phone"}
              <input type="tel" name="phone" />
            </label>
            <label>
              {lang === "ka" ? "პროექტის მდებარეობა" : "Project location"}
              <input type="text" name="projectLocation" />
            </label>
            <label>
              {lang === "ka" ? "სამუშაოს ტიპი" : "Type of work"}
              <input type="text" name="workType" />
            </label>
            <label className="contact-form__full">
              {lang === "ka" ? "შეტყობინება" : "Message"}
              <textarea name="message" rows={6} required />
            </label>
            <button type="submit" className="button button--primary">{lang === "ka" ? "მოთხოვნის გაგზავნა" : "Send Inquiry"}</button>
          </form>

          <aside className="contact-aside">
            <h2 className="wordmark">{site.brand}</h2>
            <ul>
              <li>
                <span>{lang === "ka" ? "ელფოსტა" : "Email"}</span>
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </li>
              <li>
                <span>{lang === "ka" ? "ტელეფონი" : "Phone"}</span>
                <a href={`tel:${site.phone.replace(/\s+/g, "")}`}>{site.phone}</a>
              </li>
              <li>
                <span>{lang === "ka" ? "ლოკაცია" : "Location"}</span>
                <p>{t(lang, site.location)}</p>
              </li>
            </ul>
          </aside>
        </div>
      </section>
    </>
  );
}
