"use client";

import Link from "next/link";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

// Hero Section
function HeroSection() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/videos/reel_header_sitio_web.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-screen flex flex-col justify-between px-6 md:px-12 py-32">
        {/* Top Label */}
        <div className="animate-fade-in-up">
          <p className="text-primary font-mono text-xs tracking-widest">
            ACTRIZ CHILENA
          </p>
        </div>

        {/* Center - Name Typography */}
        <div className="flex-1 flex items-center">
          <div className="w-full">
            <h1 className="sr-only">Paulette Fabres</h1>
            <div className="animate-fade-in-up delay-200">
              <span className="block text-5xl sm:text-6xl md:text-8xl lg:text-9xl tracking-tighter text-foreground leading-none hero-name font-signature">
                PAULETTE
              </span>
            </div>
            <div className="animate-fade-in-up delay-300">
              <span className="block text-5xl sm:text-6xl md:text-8xl lg:text-9xl tracking-tighter text-primary leading-none hero-name font-signature">
                FABRES
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Info */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 animate-fade-in-up delay-500">
          {/* Location */}
          <div className="text-sm text-muted-foreground">
            <p>Madrid</p>
          </div>

          {/* Scroll Indicator */}
          <div className="w-full md:w-auto flex justify-center md:justify-end">
            <a
              href="#work"
              className="flex flex-col md:flex-row items-center gap-2 md:gap-3 cursor-pointer group"
            >
              <span className="text-[10px] font-mono text-muted-foreground tracking-widest group-hover:text-primary transition-colors">
                SCROLL
              </span>
              <div className="w-8 h-8 md:w-9 md:h-9 rounded-full border border-border flex items-center justify-center group-hover:border-primary group-hover:bg-primary/10 transition-all">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-muted-foreground group-hover:text-primary transition-colors"
                >
                  <path d="M12 5v14M19 12l-7 7-7-7" />
                </svg>
              </div>
            </a>
          </div>

          {/* Status */}
          <div className="text-sm text-muted-foreground text-right hidden md:block">
            <p>Disponible para Proyectos</p>
          </div>
        </div>
      </div>
    </section>
  );
}

// Work Category Item
function WorkCategoryItem({
  title,
  description,
  href,
}: {
  title: string;
  description: string;
  href: string;
  index: number;
}) {
  return (
    <div>
      <Link
        href={href}
        className="group block border-t border-border py-10 md:py-14 cursor-pointer"
      >
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="flex items-start gap-6 md:gap-10 lg:min-w-[600px]">
            <h3 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white group-hover:text-primary transition-colors duration-500">
              {title}
            </h3>
          </div>
          <div className="flex items-center gap-6 lg:gap-12">
            <p className="text-muted-foreground text-sm w-64 hidden md:block">
              {description}
            </p>
            <div className="w-14 h-14 rounded-full border border-border flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-500">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-foreground group-hover:text-primary-foreground transition-colors duration-500"
              >
                <path d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

// Portfolio Section
function PortfolioSection() {
  const categories = [
    {
      title: "Cine",
      description: "Cortometrajes, videoclips y producciones audiovisuales.",
      href: "/movie",
    },
    {
      title: "Teatro",
      description: "Obras, montajes y creación escénica.",
      href: "/theater",
    },
  ];

  return (
    <section
      id="work"
      className="min-h-screen py-32 px-6 md:px-12 bg-background"
    >
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="mb-24 animate-fade-in-up">
          <p className="text-primary font-mono text-xs tracking-widest mb-6 hidden md:block">
            PORTAFOLIO
          </p>
          <div className="overflow-hidden">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter">
              <span className="block text-primary">MI TRABAJO</span>
            </h2>
          </div>
        </div>

        {/* Work Categories */}
        <div className="space-y-0">
          {categories.map((category, index) => (
            <WorkCategoryItem
              key={category.title}
              title={category.title}
              description={category.description}
              href={category.href}
              index={index}
            />
          ))}
          <div className="border-t border-border" />
        </div>
      </div>

      {/* Marquee */}
      <div className="mt-32 overflow-hidden border-y border-border py-8">
        <div className="flex whitespace-nowrap animate-marquee">
          {[1, 2, 3, 4].map((i) => (
            <span
              key={i}
              className="text-6xl md:text-8xl font-bold text-muted-foreground/10 mx-4"
            >
              ACTRIZ • CINE• MADRID • TEATRO •{" "}
            </span>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="py-24 px-6 md:px-12 bg-card border-t border-border">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-12">
            <div>
              <p className="text-xs font-mono text-primary tracking-widest mb-6">
                DISPONIBLE PARA PROYECTOS
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold leading-tight tracking-tight text-white">
                <span>Contáctame</span>
              </h2>
            </div>
            <Link
              href="/contact"
              className="group flex items-center gap-4 px-8 py-5 bg-primary text-primary-foreground rounded-full font-semibold text-base hover:bg-foreground hover:text-background transition-colors duration-300"
            >
              Déjame un mensaje
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
              >
                <path d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// Main Page
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navigation />
      <HeroSection />
      <PortfolioSection />
      <Footer />
    </main>
  );
}
