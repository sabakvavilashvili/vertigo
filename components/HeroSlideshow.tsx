"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import type { Lang } from "@/lib/siteData";

const slides = [
  {
    src: "/images/hero/miami-window-washers.jpg",
    alt: "Window cleaners suspended against a glass high-rise in downtown Miami.",
    location: "Miami, USA",
    photographer: "B137",
    source: "https://commons.wikimedia.org/wiki/File:Window_washers_downtown_high_rise_Miami.jpg",
    license: "https://creativecommons.org/publicdomain/zero/1.0/",
    licenseName: "CC0"
  },
  {
    src: "/images/hero/shard-window-cleaners.jpg",
    alt: "Rope-access window cleaners working on the Shard in London.",
    location: "London, UK",
    photographer: "Christoph Braun",
    source: "https://commons.wikimedia.org/wiki/File:Window_cleaners,_Shard_London_Bridge,_London,_England,_GB,_IMG_5136_edit.jpg",
    license: "https://creativecommons.org/publicdomain/zero/1.0/",
    licenseName: "CC0"
  },
  {
    src: "/images/hero/perth-window-washers.jpg",
    alt: "Window washers working high above the streets of Perth, Australia.",
    location: "Perth, Australia",
    photographer: "Evad37",
    source: "https://commons.wikimedia.org/wiki/File:Window_washers_on_BHP_tower_-_view_from_108_St_Georges_Terrace,_Perth_(E37@OpenHousePerth2014).JPG",
    license: "https://creativecommons.org/publicdomain/zero/1.0/",
    licenseName: "CC0"
  },
  {
    src: "/images/hero/prague-rope-access.jpg",
    alt: "A rope-access worker cleaning the glass facade of an office building in Prague.",
    location: "Prague, Czechia",
    photographer: "ŠJů",
    source: "https://commons.wikimedia.org/wiki/File:Bubensk%C3%A9_n%C3%A1b%C5%99e%C5%BE%C3%AD,_%C4%8Di%C5%A1t%C4%9Bn%C3%AD_oken_ni%C5%BE%C5%A1%C3%AD_budovy_Lighthouse.jpg",
    license: "https://creativecommons.org/licenses/by/4.0/",
    licenseName: "CC BY 4.0"
  }
] as const;

export function HeroSlideshow({ lang }: { lang: Lang }) {
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const intervalId = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % slides.length);
    }, 6500);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <section
      id="home"
      className="hero"
      role="region"
      aria-roledescription="carousel"
      lang={lang}
      aria-label={lang === "ka" ? "თოკზე წვდომის ფოტოები" : "Rope access photography"}
    >
      <div className="hero__slideshow" aria-live="off">
        {slides.map((slide, index) => (
          <Image
            key={slide.src}
            src={slide.src}
            alt={index === activeIndex ? slide.alt : ""}
            className={`hero__image ${index === activeIndex ? "is-active" : ""}`}
            fill
            priority={index === 0}
            sizes="100vw"
            aria-hidden={index !== activeIndex}
          />
        ))}
      </div>
      <div className="hero__overlay" />
      <div className="hero__content container">
        <p className="section-eyebrow">
          {lang === "ka" ? "VERTIGO — თოკზე წვდომა" : "VERTIGO — ROPE ACCESS"}
        </p>
        <h1>
          {lang === "ka" ? "სიმაღლეზე სამუშაოები." : "Work at height."}
          <br />
          {lang === "ka" ? "შეზღუდვების გარეშე." : "Without limits."}
        </h1>
        <p>
          {lang === "ka"
            ? "პროფესიული წვდომის გადაწყვეტები რთული ადგილებისთვის."
            : "Professional access for the places others can't reach."}
        </p>
        <div className="hero__actions">
          <Link href="/#contact" className="button button--primary">
            {lang === "ka" ? "დაგვიკავშირდით" : "Contact us"}
          </Link>
        </div>
      </div>
      <a
        href="#about"
        className="hero__scroll"
        aria-label={lang === "ka" ? "გადადით შემდეგ სექციაზე" : "Scroll to the next section"}
      >
        <span aria-hidden="true" />
      </a>
    </section>
  );
}
