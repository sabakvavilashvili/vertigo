"use client";

import { useEffect, useState, type ReactNode } from "react";
import { BrandMark } from "@/components/layout/BrandMark";

type DetailModalProps = {
  title: string;
  photos: string[];
  photoAlt: string;
  onClose: () => void;
  children: ReactNode;
};

export function DetailModal({ title, photos, photoAlt, onClose, children }: DetailModalProps) {
  const [closing, setClosing] = useState(false);

  const close = () => {
    setClosing(true);
    window.setTimeout(onClose, 280);
  };

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setClosing(true);
        window.setTimeout(onClose, 280);
      }
    };
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  const uniquePhotos = Array.from(new Set(photos));

  return (
    <div className={`project-modal${closing ? " project-modal--closing" : ""}`} role="dialog" aria-modal="true" aria-label={title}>
      <div className={`project-modal__photos${uniquePhotos.length === 1 ? " project-modal__photos--single" : ""}`}>
        {uniquePhotos.map((image, index) => (
          <img key={`${image}-${index}`} src={image} alt={`${photoAlt} ${index + 1}`} />
        ))}
      </div>
      <aside className="project-modal__details">
        <button type="button" className="project-modal__close" aria-label="Close" onClick={close}>
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            <path d="M5 5l14 14M19 5L5 19" />
          </svg>
        </button>
        <h3>{title}</h3>
        {children}
        <div className="project-modal__logo wordmark" aria-hidden="true">
          <BrandMark />
        </div>
      </aside>
    </div>
  );
}
