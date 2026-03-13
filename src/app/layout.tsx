import type { Metadata } from "next";
import "./globals.css";
import { ClientBody } from "./ClientBody";

export const metadata: Metadata = {
  title: "Paulette Fabres - Actriz",
  description:
    "Paulette Fabres – Actriz. Peliculas, Comerciales, Casting, Otras Producciones. Contacto para agendar reunión.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark" data-scroll-behavior="smooth">
      <head>
        {/* Prevenir FOUC - Sin transición, carga instantánea */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
            html {
              visibility: hidden;
            }
            html.hydrated {
              visibility: visible;
            }
          `,
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <ClientBody>{children}</ClientBody>
    </html>
  );
}
