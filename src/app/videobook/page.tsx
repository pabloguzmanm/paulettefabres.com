import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import Link from "next/link";

export default function VideobookPage() {
  return (
    <main className="flex min-h-screen flex-col bg-background">
      <Navigation />

      <div className="pt-32 pb-16 px-6 md:px-12">
        <div className="container mx-auto">
          <p className="text-primary font-mono text-xs tracking-widest mb-6">
            VIDEOBOOK
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-8">
            <span className="block text-primary">REEL</span>
          </h1>
        </div>
      </div>

      {/* Hero Video */}
      <div className="px-6 md:px-12 pb-16">
        <div className="container mx-auto max-w-4xl">
          {/* Outer frame */}
          <div
            className="relative p-[1px] rounded-lg"
            style={{
              background:
                "linear-gradient(135deg, #c9a96e 0%, #2a2a2a 40%, #c9a96e 100%)",
            }}
          >
            {/* Inner dark border */}
            <div
              className="rounded-lg overflow-hidden bg-black"
              style={{
                boxShadow:
                  "0 0 0 1px rgba(201,169,110,0.08), 0 32px 80px rgba(0,0,0,0.7), 0 8px 24px rgba(0,0,0,0.5)",
              }}
            >
              {/* Top bar — cine label */}
              <div
                className="flex items-center justify-between px-5 py-3 border-b"
                style={{
                  borderColor: "rgba(201,169,110,0.15)",
                  background: "rgba(0,0,0,0.6)",
                }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary opacity-80" />
                  <span className="font-mono text-[10px] tracking-[0.25em] text-primary opacity-70 uppercase">
                    Reel Principal
                  </span>
                </div>
                <span className="font-mono text-[10px] tracking-widest opacity-30 text-white">
                  2026
                </span>
              </div>

              {/* Video */}
              <div className="relative w-full aspect-video">
                <iframe
                  src="https://www.youtube.com/embed/2h8mUcpVwK0?si=iK-7QmYjooESxL5c"
                  title="Reel Principal"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>

              {/* Bottom bar */}
              <div
                className="flex items-center justify-between px-5 py-3 border-t"
                style={{
                  borderColor: "rgba(201,169,110,0.15)",
                  background: "rgba(0,0,0,0.6)",
                }}
              >
                <span className="font-mono text-[10px] tracking-widest opacity-30 text-white uppercase">
                  Paulette Fabres
                </span>
                <div className="flex items-center gap-1.5 opacity-40">
                  <div className="w-4 h-[1px] bg-primary" />
                  <div className="w-1 h-[1px] bg-primary" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-24 px-6 md:px-12 bg-card">
        <div className="container mx-auto text-center">
          <p className="text-xs font-mono text-primary tracking-widest mb-6">
            INTERESADO?
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-8 text-white">
            ¿Quieres trabajar
            <br />
            <span className="text-primary">conmigo?</span>
          </h2>
          <Link
            href="/contact"
            className="inline-flex items-center gap-4 px-8 py-5 bg-primary text-primary-foreground rounded-full font-semibold text-base hover:bg-foreground hover:text-background transition-colors duration-300"
          >
            Contactarme
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </Link>
        </div>
      </div>

      <Footer />
    </main>
  );
}
