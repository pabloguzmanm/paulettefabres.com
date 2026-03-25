import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import Link from "next/link";

const theaterProjects = [
  {
    id: 1,
    title: "Era Una Vez Un Bosque",
    year: "2025",
    type: "Arte Dramático",
    role: "Actriz y dramaturga",
    director: "Compañía El Bosque",
    folder: "EraUnaVezUnBosque(2025)",
    photoCount: 4,
  },
  {
    id: 2,
    title: "War in Ikea",
    year: "2025",
    type: "Arte Dramático",
    role: "Protagonista",
    director: "Javier Montero",
    folder: "WarInIkea(2025)",
    photoCount: 4,
  },
  {
    id: 3,
    title: "Retazos de un Duelo Tardío",
    year: "2024",
    type: "Arte Dramático",
    role: "Protagonista",
    director: "Colectivo Insomnio",
    folder: "RetazosDeUnDueloTardio(2024)",
    photoCount: 4,
  },
  {
    id: 4,
    title: "FuenteOvejuna",
    year: "2023",
    type: "Arte Dramático",
    role: "Protagonista",
    director: "Juan Polanco",
    folder: "FuenteOvejuna(2023)",
    photoCount: 4,
  },
];

export default function TheaterPage() {
  return (
    <main className="flex min-h-screen flex-col bg-background overflow-x-hidden">
      <Navigation />

      <div className="pt-32 pb-16 px-6 md:px-12">
        <div className="container mx-auto">
          <p className="text-primary font-mono text-xs tracking-widest mb-6">
            PROYECTOS
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-8 text-white">
            <span className="block text-primary">TEATRO</span>
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Una selección de obras teatrales que exploran distintos personajes y
            lenguajes escénicos.
          </p>
        </div>
      </div>

      {/* Projects */}
      <div className="px-6 md:px-12 pb-24">
        <div className="container mx-auto space-y-24">
          {theaterProjects.map((project) => (
            <div
              key={project.id}
              className="group border-t border-border pt-12"
            >
              {/* Photo Gallery - Corregido a 2 columnas en móvil y 4 en desktop */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                {Array.from({ length: project.photoCount }).map((_, i) => (
                  <div key={i} className="aspect-[4/3] overflow-hidden bg-card">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={`/fotos/teatro/${project.folder}/${i + 1}.webp`}
                      alt={`${project.title} - foto ${i + 1}`}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-700 hover:scale-105"
                    />
                  </div>
                ))}
              </div>

              {/* Info - Corregido layout flex para evitar desbordamiento */}
              <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4">
                <div className="min-w-0 w-full">
                  <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-2">
                    <span className="font-mono text-xs text-primary">
                      {project.year}
                    </span>
                    <span className="text-muted-foreground">•</span>
                    <span className="font-mono text-xs text-muted-foreground">
                      {project.type}
                    </span>
                    <span className="text-muted-foreground">•</span>
                    <span className="font-mono text-xs text-muted-foreground">
                      {project.role}
                    </span>
                    <span className="text-muted-foreground hidden md:inline">
                      •
                    </span>
                    <span className="font-mono text-xs text-muted-foreground w-full md:w-auto">
                      Dir. {project.director}
                    </span>
                  </div>
                  <h3 className="text-white text-2xl md:text-4xl font-bold tracking-tight group-hover:text-primary transition-colors duration-300 break-words">
                    {project.title}
                  </h3>
                </div>
                <span className="text-6xl md:text-8xl font-bold text-muted-foreground/10 group-hover:text-primary/20 transition-colors duration-300 flex-shrink-0 self-end md:self-auto">
                  {String(project.id).padStart(2, "0")}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="py-24 px-6 md:px-12 bg-card">
        <div className="container mx-auto text-center">
          <p className="text-xs font-mono text-primary tracking-widest mb-6">
            ¿INTERESADO EN ALGÚN PROYECTO?
          </p>
          <h2 className=" text-white text-3xl md:text-5xl font-bold tracking-tight mb-8">
            <span>Cuéntame sobre tu idea</span>
          </h2>
          <Link
            href="/contact"
            className="inline-flex items-center gap-4 px-8 py-5 bg-primary text-primary-foreground rounded-full font-semibold text-base hover:bg-foreground hover:text-background transition-colors duration-300"
          >
            Déjame un mensaje
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
