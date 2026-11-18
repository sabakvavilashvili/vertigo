import { BrandMark } from "@/components/layout/BrandMark";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <span className="site-footer__rule" aria-hidden="true" />
        <p className="wordmark"><BrandMark /></p>
        <span className="site-footer__rule site-footer__rule--right" aria-hidden="true" />
      </div>
    </footer>
  );
}
