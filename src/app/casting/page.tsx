import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import Link from "next/link";

const castingProjects = [
  {
    id: 1,
    title: "Mediterranean Dreams",
    year: "2025",
    type: "Feature Film",
    talent: "45+ actors cast",
    production: "Atlas Films",
  },
  {
    id: 2,
    title: "The New Wave",
    year: "2024",
    type: "TV Series (S1-S2)",
    talent: "120+ actors cast",
    production: "Nordic Entertainment",
  },
  {
    id: 3,
    title: "Eternal Light",
    year: "2024",
    type: "Feature Film",
    talent: "30+ actors cast",
    production: "Sunrise Pictures",
  },
  {
    id: 4,
    title: "City Limits",
    year: "2023",
    type: "Commercial Campaign",
    talent: "15+ actors cast",
    production: "Global Brands Agency",
  },
];

const services = [
  {
    title: "Film Casting",
    description:
      "Comprehensive casting services for feature films, from lead roles to supporting characters.",
  },
  {
    title: "Television",
    description:
      "Ongoing casting support for TV series, pilots, and episodic productions.",
  },
  {
    title: "Commercial",
    description:
      "Fast-turnaround casting for commercials, branded content, and advertising campaigns.",
  },
  {
    title: "Talent Scouting",
    description:
      "Discovery and development of emerging talent for productions seeking fresh faces.",
  },
];

export default function CastingPage() {
  return (
    <main className="flex min-h-screen flex-col bg-background">
      <Navigation />

      <div className="pt-32 pb-16 px-6 md:px-12">
        <div className="container mx-auto">
          <p className="text-primary font-mono text-xs tracking-widest mb-6">
            [ WORK / CASTING ]
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-8">
            CASTING
            <span className="block text-primary">DEPARTMENT</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Connecting productions with exceptional talent. Specializing in
            finding the perfect fit for every role, from leading characters to
            ensemble casts.
          </p>
        </div>
      </div>

      {/* Services */}
      <div className="px-6 md:px-12 pb-24">
        <div className="container mx-auto">
          <p className="text-primary font-mono text-xs tracking-widest mb-8">
            [ SERVICES ]
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="group border border-border p-8 hover:border-primary transition-all duration-300"
              >
                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Projects */}
      <div className="px-6 md:px-12 pb-24 border-t border-border pt-24">
        <div className="container mx-auto">
          <p className="text-primary font-mono text-xs tracking-widest mb-8">
            [ RECENT PROJECTS ]
          </p>
          <div className="space-y-0">
            {castingProjects.map((project, index) => (
              <div
                key={project.id}
                className="group border-t border-border py-8"
              >
                <div className="grid md:grid-cols-12 gap-4 items-center">
                  <div className="md:col-span-1">
                    <span className="text-4xl font-bold text-muted-foreground/20 group-hover:text-primary/40 transition-colors">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="md:col-span-4">
                    <h3 className="text-xl md:text-2xl font-bold group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <div className="md:col-span-2">
                    <span className="font-mono text-xs text-primary">
                      {project.year}
                    </span>
                  </div>
                  <div className="md:col-span-2">
                    <span className="text-sm text-muted-foreground">
                      {project.type}
                    </span>
                  </div>
                  <div className="md:col-span-2">
                    <span className="text-sm text-foreground">
                      {project.talent}
                    </span>
                  </div>
                  <div className="md:col-span-1 flex justify-end">
                    <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center group-hover:border-primary group-hover:bg-primary/10 transition-all">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="text-muted-foreground group-hover:text-primary transition-colors"
                      >
                        <path d="M7 17L17 7M17 7H7M17 7v10" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div className="border-t border-border" />
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="py-16 px-6 md:px-12 bg-card">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl md:text-5xl font-bold text-primary mb-2">
                500+
              </p>
              <p className="text-sm text-muted-foreground font-mono">
                Actors Cast
              </p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold text-primary mb-2">
                80+
              </p>
              <p className="text-sm text-muted-foreground font-mono">
                Productions
              </p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold text-primary mb-2">
                12
              </p>
              <p className="text-sm text-muted-foreground font-mono">
                Countries
              </p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold text-primary mb-2">
                10+
              </p>
              <p className="text-sm text-muted-foreground font-mono">
                Years Experience
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-24 px-6 md:px-12">
        <div className="container mx-auto text-center">
          <p className="text-xs font-mono text-primary tracking-widest mb-6">
            [ LOOKING FOR TALENT? ]
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-8">
            Let&apos;s find the{" "}
            <span className="text-primary">perfect cast</span>
          </h2>
          <Link
            href="/contact"
            className="inline-flex items-center gap-4 px-8 py-5 bg-primary text-primary-foreground rounded-full font-semibold text-base hover:bg-foreground hover:text-background transition-colors duration-300"
          >
            Discuss Your Project
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
