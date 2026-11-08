import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { LanguageProvider } from "@/components/LanguageProvider";

export const metadata: Metadata = {
  title: "VERTIGO | Rope Access & Industrial Services",
  description:
    "Professional rope access solutions for complex work in places conventional access cannot reach.",
  openGraph: {
    title: "VERTIGO | Rope Access & Industrial Services",
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
