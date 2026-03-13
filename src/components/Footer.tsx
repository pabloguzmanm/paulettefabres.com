"use client";

import { useState } from "react";
import Link from "next/link";

export function Footer() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <footer className="border-t border-border bg-background px-6 md:px-12">
      <div className="container mx-auto">
        {/* Menú expandible */}
        {menuOpen && (
          <div className="py-6 border-b border-border grid grid-cols-2 md:grid-cols-4 gap-3">
            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Inicio
            </Link>
            <Link
              href="/videobook"
              onClick={() => setMenuOpen(false)}
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Videobook
            </Link>
            <Link
              href="/book/profesionales"
              onClick={() => setMenuOpen(false)}
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Book Profesionales
            </Link>
            <Link
              href="/book/retratos"
              onClick={() => setMenuOpen(false)}
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Book Retratos
            </Link>
            <Link
              href="/curriculum"
              onClick={() => setMenuOpen(false)}
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Curriculum
            </Link>
            <Link
              href="/movie"
              onClick={() => setMenuOpen(false)}
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Cine
            </Link>
            <Link
              href="/theater"
              onClick={() => setMenuOpen(false)}
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Teatro
            </Link>
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Contacto
            </Link>
          </div>
        )}

        {/* Barra principal */}
        <div className="flex items-center justify-between py-5 gap-6">
          {/* Copyright */}
          <p className="text-xs text-muted-foreground font-mono">
            © 2026 Paulette Fabres.
          </p>

          {/* Redes + correo */}
          <div className="flex items-center gap-3">
            <a
              href="mailto:contacto@paulettefabres.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-muted-foreground hover:text-primary transition-colors font-mono hidden md:block"
            >
              contacto@paulettefabres.com
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/paulettefabres/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex items-center justify-center w-8 h-8 border border-border text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>

            {/* YouTube */}
            <a
              href="https://www.youtube.com/@PauletteFabres/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="flex items-center justify-center w-8 h-8 border border-border text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>

            {/* Botón menú */}
            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex items-center gap-2 px-3 py-1.5 border border-border text-xs font-mono text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
            >
              MENÚ
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className={`transition-transform duration-300 ${menuOpen ? "rotate-180" : ""}`}
              >
                <path d="M18 15l-6-6-6 6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
