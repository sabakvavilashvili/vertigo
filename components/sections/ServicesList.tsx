"use client";

import { useEffect, useRef, useState } from "react";
import type { Localized, Service } from "@/content";
import { t } from "@/content";
import { useLanguage } from "@/components/providers/LanguageProvider";

export function ServicesList({ items, contactLabel }: { items: Service[]; contactLabel: Localized }) {
  const { lang } = useLanguage();
  const [active, setActive] = useState<number | null>(null);
  const [expanded, setExpanded] = useState(false);
  const [geo, setGeo] = useState<{ w: number; h: number; left: number; top: number; width: number; height: number } | null>(null);
  const gridRef = useRef<HTMLDivElement>(null);
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
    if (s.bottom >= g.bottom - 2) {
      height = Math.min(fullH, s.bottom - g.top);
      top = -(height - h);
    } else {
      height = Math.min(fullH, g.bottom - s.top);
    }
    setGeo({ w, h, left, top, width, height });
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
            style={isActive && geo ? { height: geo.h } : undefined}
            onPointerLeave={(event) => {
              if (event.pointerType === "mouse" && isActive) close();
            }}
          >
            <article
              className={`project-card project-card--interactive service-card${isActive ? " service-card--open" : ""}${isActive && expanded ? " service-card--grown" : ""}`}
              style={
                isActive && geo
                  ? expanded
                    ? { left: geo.left, top: geo.top, width: geo.width, height: geo.height }
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
              <div className="project-card__media">
                <img src={item.image} alt={`${t(lang, item.title)} placeholder visual`} />
              </div>
              <div className="project-card__body">
                <h3>{t(lang, item.title)}</h3>
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
              </div>
            </article>
          </div>
        );
      })}
    </div>
  );
}
