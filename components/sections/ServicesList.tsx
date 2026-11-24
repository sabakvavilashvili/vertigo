"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import type { Localized, Service } from "@/content";
import { t } from "@/content";
import { useLanguage } from "@/components/providers/LanguageProvider";

// Shrinks the font until the title fits in two lines
function FitTitle({ text }: { text: string }) {
  const ref = useRef<HTMLHeadingElement>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const fit = () => {
      el.style.fontSize = "";
      el.style.minHeight = "0";
      let size = parseFloat(getComputedStyle(el).fontSize);
      const min = 12;
      while (size > min && el.scrollHeight > size * 1.2 * 2 + 1) {
        size -= 0.25;
        el.style.fontSize = `${size}px`;
      }
      el.style.minHeight = "";
    };
    fit();
    const observer = new ResizeObserver(fit);
    observer.observe(el);
    return () => observer.disconnect();
  }, [text]);

  return <h3 ref={ref}>{text}</h3>;
}

export function ServicesList({ items, contactLabel }: { items: Service[]; contactLabel: Localized }) {
  const { lang } = useLanguage();
  const [active, setActive] = useState<number | null>(null);
  const [expanded, setExpanded] = useState(false);
  const [geo, setGeo] = useState<{ single: boolean; w: number; h: number; left: number; top: number; width: number; height: number } | null>(null);
  const [fitH, setFitH] = useState<number | null>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLElement | null>(null);
  const timer = useRef<ReturnType<typeof setTimeout>>();

  const close = () => {
    clearTimeout(timer.current);
    setExpanded(false);
    timer.current = setTimeout(() => setActive(null), 320);
  };

  useEffect(() => {
    if (active === null) return;
    const onDown = (event: MouseEvent) => {
      const slot = gridRef.current?.children[active];
      if (slot && !slot.contains(event.target as Node)) close();
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };
    document.addEventListener("mousedown", onDown);
    window.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      window.removeEventListener("keydown", onKey);
    };
  }, [active]);

  useEffect(() => () => clearTimeout(timer.current), []);

  // In a single-column layout the card grows to fit its content
  useLayoutEffect(() => {
    const el = cardRef.current;
    if (!geo?.single || !expanded || !el) {
      setFitH(null);
      return;
    }
    const prev = el.style.height;
    el.style.height = "auto";
    const natural = el.offsetHeight;
    el.style.height = prev;
    setFitH(natural);
  }, [expanded, geo, lang, active]);

  // Grows the card to 2x2 grid cells, extending toward the inside of the grid
  const open = (index: number, slot: HTMLElement) => {
    if (active === index && expanded) return;
    clearTimeout(timer.current);
    const grid = gridRef.current;
    if (!grid) return;
    const s = slot.getBoundingClientRect();
    const g = grid.getBoundingClientRect();
    const gap = parseFloat(getComputedStyle(grid).columnGap) || 0;
    const w = s.width;
    const h = s.height;
    const fullW = 2 * w + gap;
    const fullH = 2 * h + gap;
    let width = w;
    let left = 0;
    if (s.left + fullW <= g.right + 2) {
      width = fullW;
    } else if (s.right - fullW >= g.left - 2) {
      width = fullW;
      left = -(fullW - w);
    }
    // Rows can differ in height, so clamp to the grid's bounds
    let height: number;
    let top = 0;
    const singleColumn = fullW > g.width + 2;
    if (singleColumn) {
      height = fullH;
    } else if (s.bottom >= g.bottom - 2) {
      height = Math.min(fullH, s.bottom - g.top);
      top = -(height - h);
    } else {
      height = Math.min(fullH, g.bottom - s.top);
    }
    setGeo({ single: singleColumn, w, h, left, top, width, height });
    setActive(index);
    setExpanded(false);
    requestAnimationFrame(() => requestAnimationFrame(() => setExpanded(true)));
  };

  return (
    <div className="projects-grid" ref={gridRef}>
      {items.map((item, index) => {
        const isActive = active === index;
        return (
          <div
            key={index}
            className="service-slot"
            style={isActive && geo ? { height: geo.single && expanded ? fitH ?? geo.h : geo.h } : undefined}
            onPointerLeave={(event) => {
              if (event.pointerType === "mouse" && isActive) close();
            }}
          >
            <article
              ref={isActive ? cardRef : undefined}
              className={`project-card project-card--interactive service-card${isActive ? " service-card--open" : ""}${isActive && expanded ? " service-card--grown" : ""}`}
              style={
                isActive && geo
                  ? expanded
                    ? { left: geo.left, top: geo.top, width: geo.width, height: geo.single ? fitH ?? geo.h : geo.height }
                    : { left: 0, top: 0, width: geo.w, height: geo.h }
                  : undefined
              }
              role="button"
              tabIndex={0}
              aria-expanded={isActive && expanded}
              onClick={(event) => {
                if (isActive) close();
                else open(index, event.currentTarget.parentElement as HTMLElement);
              }}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  if (isActive) close();
                  else open(index, event.currentTarget.parentElement as HTMLElement);
                }
              }}
            >
              <div
                className="project-card__media"
                style={isActive && expanded && geo?.single ? { flex: `0 0 ${geo.h / 2}px` } : undefined}
              >
                <img src={item.image} alt={`${t(lang, item.title)} placeholder visual`} />
              </div>
              <div className="project-card__body">
                <FitTitle text={t(lang, item.title)} />
                {!(isActive && expanded) && (
                  <ul className="service-card__preview">
                    {item.details.slice(0, 2).map((detail, i) => (
                      <li key={i}>{t(lang, detail)}</li>
                    ))}
                  </ul>
                )}
                {isActive && expanded && (
                  <div className="service-card__details">
                    {item.custom ? (
                      <>
                        <p>{t(lang, item.details[0])}</p>
                        <button
                          type="button"
                          className="button button--primary service-card__cta"
                          onClick={(event) => {
                            event.stopPropagation();
                            close();
                            document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                          }}
                        >
                          {t(lang, contactLabel)}
                        </button>
                      </>
                    ) : (
                      <ul>
                        {item.details.map((detail, i) => (
                          <li key={i}>{t(lang, detail)}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                )}
                <span className="service-card__chevron" aria-hidden="true" />
              </div>
            </article>
          </div>
        );
      })}
    </div>
  );
}
