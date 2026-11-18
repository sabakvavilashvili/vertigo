"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { heroSection, t, type Lang } from "@/content";

export function HeroSlideshow({ lang }: { lang: Lang }) {
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const intervalId = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % heroSection.slides.length);
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
      aria-label={t(lang, heroSection.slideshowLabel)}
    >
      <div className="hero__slideshow" aria-live="off">
        {heroSection.slides.map((slide, index) => (
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
        <h1>
          {t(lang, heroSection.title)}
        </h1>
        <p>
          {t(lang, heroSection.description)}
        </p>
        <div className="hero__actions">
          <Link href="/#contact" className="button button--primary">
            {t(lang, heroSection.button)}
          </Link>
        </div>
      </div>
      <a
        href="#about"
        className="hero__scroll"
        aria-label={t(lang, heroSection.scrollLabel)}
      >
        <span aria-hidden="true" />
      </a>
    </section>
  );
}
