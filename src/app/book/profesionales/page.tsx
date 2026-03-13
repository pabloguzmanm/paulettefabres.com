"use client";

import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";

const photos = [
  {
    id: 1,
    src: "/fotos/profesionales/PauletteFabres-1.webp",
    alt: "Paulette Fabres",
  },
  {
    id: 2,
    src: "/fotos/profesionales/PauletteFabres-2.webp",
    alt: "Paulette Fabres 2",
  },
  {
    id: 3,
    src: "/fotos/profesionales/PauletteFabres-3.webp",
    alt: "Paulette Fabres 3",
  },
  {
    id: 4,
    src: "/fotos/profesionales/PauletteFabres-4.webp",
    alt: "Paulette Fabres 4",
  },
  {
    id: 5,
    src: "/fotos/profesionales/PauletteFabres-5.webp",
    alt: "Paulette Fabres 5",
  },
  {
    id: 6,
    src: "/fotos/profesionales/PauletteFabres-6.webp",
    alt: "Paulette Fabres 6",
  },
  {
    id: 7,
    src: "/fotos/profesionales/PauletteFabres-7.webp",
    alt: "Paulette Fabres 7",
  },
  {
    id: 8,
    src: "/fotos/profesionales/PauletteFabres-8.webp",
    alt: "Paulette Fabres 8",
  },
  {
    id: 9,
    src: "/fotos/profesionales/PauletteFabres-9.webp",
    alt: "Paulette Fabres 9",
  },
  {
    id: 10,
    src: "/fotos/profesionales/PauletteFabres-10.webp",
    alt: "Paulette Fabres 10",
  },
  {
    id: 11,
    src: "/fotos/profesionales/PauletteFabres-11.webp",
    alt: "Paulette Fabres 11",
  },
  {
    id: 12,
    src: "/fotos/profesionales/PauletteFabres-12.webp",
    alt: "Paulette Fabres 12",
  },
  {
    id: 13,
    src: "/fotos/profesionales/PauletteFabres-13.webp",
    alt: "Paulette Fabres 13",
  },
  {
    id: 14,
    src: "/fotos/profesionales/PauletteFabres-14.webp",
    alt: "Paulette Fabres 14",
  },
  {
    id: 15,
    src: "/fotos/profesionales/PauletteFabres-15.webp",
    alt: "Paulette Fabres 15",
  },
];

export default function ProfesionalesPage() {
  const [selectedPhoto, setSelectedPhoto] = useState<(typeof photos)[0] | null>(
    null,
  );

  return (
    <main className="flex min-h-screen flex-col bg-background">
      <Navigation />
      <PageHeader label="BOOK" title="PROFESIONALES" />

      {/* Photo Grid */}
      <div className="px-6 md:px-12 pb-32">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {photos.map((photo, index) => (
              <button
                key={photo.id}
                type="button"
                onClick={() => setSelectedPhoto(photo)}
                className="group relative overflow-hidden cursor-pointer bg-card"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading={index < 6 ? "eager" : "lazy"}
                  decoding="async"
                  className="w-full h-auto block transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-background/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-6"
          onClick={() => setSelectedPhoto(null)}
          onKeyDown={(e) => e.key === "Escape" && setSelectedPhoto(null)}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            className="absolute top-6 right-6 text-white hover:text-primary transition-colors z-10"
            onClick={() => setSelectedPhoto(null)}
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={selectedPhoto.src}
            alt={selectedPhoto.alt}
            className="max-w-full max-h-[90vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      <Footer />
    </main>
  );
}
