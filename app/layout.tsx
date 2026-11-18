import type { Metadata } from "next";
import "@/styles/globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LanguageProvider } from "@/components/providers/LanguageProvider";
import { site } from "@/content";

export const metadata: Metadata = {
  title: site.title.ka,
  description:
    "Professional rope access solutions for complex work in places conventional access cannot reach.",
  openGraph: {
    title: site.title.ka,
    description:
      "Professional rope access solutions for complex work in places conventional access cannot reach.",
    type: "website",
    url: "https://example.com"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ka">
      <body>
        <LanguageProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
