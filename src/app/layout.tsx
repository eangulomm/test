import type { Metadata } from "next";
import "@/styles/globals.css";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Navbar }          from "@/components/layout/Navbar";
import { Footer }          from "@/components/layout/Footer";

export const metadata: Metadata = {
  title:       "Playland — Artículos exclusivos de tus artistas favoritos",
  description: "Descubre vinilos, artículos autografiados y ediciones limitadas de tus artistas favoritos.",
  keywords:    ["vinyl", "music", "collectibles", "the neighbourhood", "playland"],
  openGraph: {
    title:       "Playland",
    description: "Artículos exclusivos de tus artistas favoritos",
    // REPLACE: /assets/images/og-image.jpg → real Open Graph image (1200×630)
    images:      ["/assets/images/og-image.jpg"],
    type:        "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        {/*
         * Google Fonts are loaded in globals.css via @import.
         * Preconnect tags below improve load speed.
         */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* REPLACE: /assets/icons/favicon.ico → your real favicon */}
        <link rel="icon" href="/assets/icons/favicon.ico" />
      </head>
      <body className="min-h-screen flex flex-col">
        <AnnouncementBar />
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
