"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [workDropdownOpen, setWorkDropdownOpen] = useState(false);
  const [bookDropdownOpen, setBookDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const scrollTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Throttled scroll handler to avoid excessive re-renders
  useEffect(() => {
    const handleScroll = () => {
      if (scrollTimeout.current) return;
      scrollTimeout.current = setTimeout(() => {
        setScrolled(window.scrollY > 50);
        scrollTimeout.current = null;
      }, 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    };
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const closeMobile = useCallback(() => setMobileMenuOpen(false), []);

  const navLinks = [
    { href: "/", label: "Inicio" },
    { href: "/videobook", label: "Videobook" },
    { href: "/book", label: "Book" },
    { href: "/curriculum", label: "Curriculum" },
    { href: "/contact", label: "Contacto" },
  ];

  const workCategories = [
    { href: "/movie", label: "Cine" },
    { href: "/theater", label: "Teatro" },
  ];

  const bookCategories = [
    { href: "/book/profesionales", label: "Profesionales" },
    { href: "/book/retratos", label: "Retratos" },
  ];

  const isWorkPage = ["/movie", "/theater"].includes(pathname);
  const isBookPage =
    pathname.startsWith("/book") ||
    pathname === "/profesionales" ||
    pathname === "/retratos";

  const linkClass = (href: string) =>
    `text-sm font-medium tracking-wide transition-colors ${
      pathname === href ? "text-primary" : "text-foreground hover:text-primary"
    }`;

  const mobileLinkClass = (href: string) =>
    `block text-2xl font-medium transition-colors ${
      pathname === href ? "text-primary" : "text-foreground hover:text-primary"
    }`;

  const mobileSubLinkClass = (href: string) =>
    `block text-xl font-medium transition-colors py-2 ${
      pathname === href ? "text-primary" : "text-foreground hover:text-primary"
    }`;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/80 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex items-center justify-center h-20">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {/* Inicio, Videobook */}
            {navLinks.slice(0, 2).map((link) => (
              <Link key={link.href} href={link.href} className="group relative">
                <span className={linkClass(link.href)}>{link.label}</span>
                {pathname === link.href && (
                  <div className="absolute -bottom-1 left-0 right-0 h-px bg-primary" />
                )}
              </Link>
            ))}

            {/* Book Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setBookDropdownOpen(true)}
              onMouseLeave={() => setBookDropdownOpen(false)}
            >
              <span
                className={`text-sm font-medium tracking-wide cursor-pointer transition-colors ${isBookPage ? "text-primary" : "text-foreground hover:text-primary"}`}
              >
                Book
              </span>
              {isBookPage && (
                <div className="absolute -bottom-1 left-0 right-0 h-px bg-primary" />
              )}

              {bookDropdownOpen && (
                <div className="absolute top-full left-0 pt-4">
                  <div className="bg-card/95 backdrop-blur-md border border-border p-6 min-w-[220px]">
                    <div className="space-y-3">
                      {bookCategories.map((category) => (
                        <Link
                          key={category.href}
                          href={category.href}
                          className="flex items-center gap-4 group/item"
                          onClick={() => setBookDropdownOpen(false)}
                        >
                          <span
                            className={`text-lg font-medium transition-colors ${pathname === category.href ? "text-primary" : "text-foreground group-hover/item:text-primary"}`}
                          >
                            {category.label}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Curriculum */}
            <Link href="/curriculum" className="group relative">
              <span className={linkClass("/curriculum")}>Curriculum</span>
              {pathname === "/curriculum" && (
                <div className="absolute -bottom-1 left-0 right-0 h-px bg-primary" />
              )}
            </Link>

            {/* Proyectos Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setWorkDropdownOpen(true)}
              onMouseLeave={() => setWorkDropdownOpen(false)}
            >
              <span
                className={`text-sm font-medium tracking-wide cursor-pointer transition-colors ${isWorkPage ? "text-primary" : "text-foreground hover:text-primary"}`}
              >
                Proyectos
              </span>
              {isWorkPage && (
                <div className="absolute -bottom-1 left-0 right-0 h-px bg-primary" />
              )}

              {workDropdownOpen && (
                <div className="absolute top-full right-0 pt-4">
                  <div className="bg-card/95 backdrop-blur-md border border-border p-6 min-w-[200px]">
                    <div className="space-y-3">
                      {workCategories.map((category) => (
                        <Link
                          key={category.href}
                          href={category.href}
                          className="flex items-center gap-4 group/item"
                          onClick={() => setWorkDropdownOpen(false)}
                        >
                          <span
                            className={`text-lg font-medium transition-colors ${pathname === category.href ? "text-primary" : "text-foreground group-hover/item:text-primary"}`}
                          >
                            {category.label}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Contacto */}
            <Link href="/contact" className="group relative">
              <span className={linkClass("/contact")}>Contacto</span>
              {pathname === "/contact" && (
                <div className="absolute -bottom-1 left-0 right-0 h-px bg-primary" />
              )}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden absolute right-6 top-1/2 -translate-y-1/2 flex items-center gap-3 min-h-[48px] px-2 -m-2 text-foreground hover:text-primary transition-colors duration-300"
            onClick={() => setMobileMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <span className="font-mono text-[10px] text-muted-foreground tracking-widest">
              {mobileMenuOpen ? "CERRAR" : "MENU"}
            </span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              {mobileMenuOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-background/95 backdrop-blur-md pt-20 px-6 z-40">
          <div className="space-y-6">
            <Link
              href="/"
              className={mobileLinkClass("/")}
              onClick={closeMobile}
            >
              Inicio
            </Link>
            <Link
              href="/videobook"
              className={mobileLinkClass("/videobook")}
              onClick={closeMobile}
            >
              Videobook
            </Link>

            <div className="pt-4 border-t border-border">
              <p className="font-mono text-xs text-muted-foreground tracking-widest mb-4">
                BOOK
              </p>
              {bookCategories.map((category) => (
                <Link
                  key={category.href}
                  href={category.href}
                  className={mobileSubLinkClass(category.href)}
                  onClick={closeMobile}
                >
                  {category.label}
                </Link>
              ))}
            </div>

            <Link
              href="/curriculum"
              className={mobileLinkClass("/curriculum")}
              onClick={closeMobile}
            >
              Curriculum
            </Link>

            <div className="pt-4 border-t border-border">
              <p className="font-mono text-xs text-muted-foreground tracking-widest mb-4">
                PROYECTOS
              </p>
              {workCategories.map((category) => (
                <Link
                  key={category.href}
                  href={category.href}
                  className={mobileSubLinkClass(category.href)}
                  onClick={closeMobile}
                >
                  {category.label}
                </Link>
              ))}
            </div>

            <Link
              href="/contact"
              className={mobileLinkClass("/contact")}
              onClick={closeMobile}
            >
              Contacto
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
