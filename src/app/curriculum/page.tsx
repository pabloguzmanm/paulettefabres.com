import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import Link from "next/link";

const skills = [
  "Canto: mezzosoprano",
  "Baile: hip hop, contemporáneo, danza urbana",
  "Teatro Musical",
  "Pantomima",
  "Modelaje",
  "Idiomas: inglés intermedio, español Nativo",
  "Natación",
  "Acentos: argentino, castellano",
];

const experienciaAudiovisual = {
  ficcion: [
    {
      rol: "Actriz de reparto",
      proyecto: "Serie Los Hilos del Miedo",
      director: "Prime Video",
      year: "2026",
    },
    {
      rol: "Protagonista",
      proyecto: "Cortometraje Future Chile",
      director: "Rodrigo Roblero",
      year: "2026",
    },
    {
      rol: "Protagonista",
      proyecto: "Cortometraje Ciclos",
      director: "Aloma Martínez",
      year: "2025",
    },
    {
      rol: "Protagonista",
      proyecto: "Cortometraje Malebolge",
      director: "Lorena Larracu",
      year: "2025",
    },
    {
      rol: "Protagonista",
      proyecto: "Cortometraje Los últimos días",
      director: "Rodrigo Roblero",
      year: "2025",
    },
    {
      rol: "Secundaria",
      proyecto: "Cortometraje Las partículas en mi mente",
      director: "Isaías Saldaña",
      year: "2025",
    },
    {
      rol: "Secundaria",
      proyecto: "Cortometraje Gente que estimo",
      director: "Luoana Bustamante",
      year: "2025",
    },
  ],
  videoclips: [
    {
      rol: "Secundaria",
      proyecto: "El Toro y la Luna",
      director: "Coraje Estudios",
      year: "2025",
    },
    {
      rol: "Protagonista",
      proyecto: "RVVE",
      director: "Moises Canchignia",
      year: "2025",
    },
  ],
  doblaje: [
    {
      rol: "Voz de personaje",
      proyecto: "Película 1976",
      director: "Manuela Martelli",
      year: "2022",
    },
  ],
  publicidad: [
    {
      rol: "Protagonista",
      proyecto: "Publicidad Pollos Popeyes",
      director: "Hawai Films",
      year: "2026",
    },
    {
      rol: "Secundaria",
      proyecto: "Publicidad Volkswagen",
      director: "Lee Films",
      year: "2026",
    },
    {
      rol: "Secundaria",
      proyecto: "Copec",
      director: "Modelos al día",
      year: "2020",
    },
  ],
};

const experienciaTeatral = {
  arteDramatico: [
    {
      rol: "Actriz y dramaturga",
      proyecto:"Nuevo Mundo - clasicOFF, Tarambana",
      director: "Diego Hernandez",
      year: "2026",
    },
    {
      rol: "Actriz y dramaturga",
      proyecto:
        "Era una vez un bosque, Nave 73\nFestival ChileEscénicas, Umbral de Primavera - 2026",
      director: "Compañía El Bosque",
      year: "2025",
    },
    {
      rol: "Protagonista",
      proyecto: "La geometría del trigo",
      director: "Alejandra Prieto",
      year: "2025",
    },
    {
      rol: "Protagonista",
      proyecto: "War in Ikea",
      director: "Javier Montero",
      year: "2025",
    },
    {
      rol: "Protagonista",
      proyecto: "Retazos de un duelo tardío",
      director: "Colectivo Insomnio",
      year: "2024",
    },
    {
      rol: "Protagonista",
      proyecto: "Fuenteovejuna",
      director: "Juan Polanco",
      year: "2023",
    },
    {
      rol: "Protagonista",
      proyecto: "Hamlet",
      director: "Francisco Krebs",
      year: "2022",
    },
    {
      rol: "Reparto",
      proyecto: "Un montón de brujas volando por el cielo",
      director: "Manuel Morgado",
      year: "2021",
    },
    {
      rol: "Protagonista",
      proyecto: "Las niñas arañas",
      director: "Gonzalo Ledezma",
      year: "2018",
    },
  ],
  musical: [
    {
      rol: "Secundaria",
      proyecto: "Los Miserables",
      director: "Maitén Montenegro",
      year: "2019",
    },
    {
      rol: "Reparto",
      proyecto: "Musical Grease",
      director: "Rodrigo Aray",
      year: "2019",
    },
    {
      rol: "Secundaria",
      proyecto: "Musical Matilda",
      director: "Ana Albornoz",
      year: "2018",
    },
  ],
  danza: [
    {
      rol: "Bailarina",
      proyecto: "Cantando aprendo a hablar",
      director: "Teatro Mori",
      year: "2017",
    },
  ],
  docencia: [
    {
      rol: "Profesora",
      proyecto: "Actuación e integralidad",
      director: "Maitén Montenegro, Fundación Cultural",
      year: "2022",
    },
    {
      rol: "Profesora auxiliar",
      proyecto: "La actuación contemporánea",
      director: "Universidad Católica de Chile",
      year: "2024",
    },
  ],
};

const formacionSuperior = [
  {
    titulo: "Máster en Interpretación Audiovisual",
    institucion: "Escuela de Artes TAI",
    period: "2024–2025",
  },
  {
    titulo: "Licenciada en Actuación",
    institucion: "Pontificia Universidad Católica de Chile",
    period: "2019–2023",
  },
];

const formacionProfundizacion = [
  {
    titulo: 'Curso "Las 3 disciplinas"',
    institucion: "Natalia Mateo — interpretación, dirección, guion",
    period: "2025–2026",
  },
  {
    titulo: "Curso de Dirección de Actores",
    institucion: "Escuela de cine ECAM",
    period: "2025",
  },
  {
    titulo: "Laboratorio de Movimiento",
    institucion: "José Vidal — Duoc UC",
    period: "2024",
  },
  {
    titulo: "Laboratorio de Interpretación Audiovisual",
    institucion: "Manuela Martelli — Universidad Católica",
    period: "2022",
  },
  {
    titulo: "Curso de Artes Escénicas",
    institucion: "Ángela Cabezas — La Máquina del Arte",
    period: "2018–2019",
  },
  {
    titulo: "Academia de Teatro Musical",
    institucion: "Maitén Montenegro — MDA Studios",
    period: "2008–2017",
  },
];

function ExperienceRow({
  rol,
  proyecto,
  director,
  year,
}: {
  rol: string;
  proyecto: string;
  director: string;
  year: string;
}) {
  return (
    <div className="flex items-start justify-between gap-2 py-3 border-b border-border/40 hover:border-primary/40 transition-colors duration-300">
      <div className="flex flex-col min-w-0 gap-0.5">
        <span className="font-mono text-xs text-primary">{rol}</span>
        <span className="text-foreground font-medium text-sm break-words whitespace-pre-line">
          {proyecto}
        </span>
        <span className="text-muted-foreground text-xs hidden md:block">
          — {director}
        </span>
      </div>
      <span className="font-mono text-xs text-muted-foreground flex-shrink-0 pt-0.5">
        {year}
      </span>
    </div>
  );
}

function SectionBlock({
  title,
  items,
}: {
  title: string;
  items: typeof experienciaAudiovisual.ficcion;
}) {
  return (
    <div className="mb-10">
      <p className="font-mono text-xs text-muted-foreground tracking-widest mb-4 uppercase">
        {title}
      </p>
      <div>
        {items.map((item, i) => (
          <ExperienceRow key={i} {...item} />
        ))}
      </div>
    </div>
  );
}

export default function CurriculumPage() {
  return (
    <main className="flex min-h-screen flex-col bg-background overflow-x-hidden">
      <Navigation />

      {/* Hero Section */}
      <div className="pt-32 pb-16 px-6 md:px-12">
        <div className="container mx-auto">
          <p className="text-primary font-mono text-xs tracking-widest mb-6">
            CURRICULUM
          </p>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
            <div>
              <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-8 text-white">
                <span className="block text-primary">
                  Mi camino en las artes escénicas
                </span>
              </h1>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
                Actriz y creadora chilena residiendo en Madrid, interesada en la
                exploración de personajes complejos y sus sensibilidades.
                Trabajo centrado en una interpretación honesta en búsqueda de la
                verdad, para así poder explorar sus contradicciones desde la
                vulnerabilidad. Actualmente en desarrollo de una investigación
                en torno a la autenticidad en la actuación cinematográfica,
                ampliando el trabajo hacia la práctica de dirección de actores.
              </p>
            </div>
            <div className="relative aspect-[3/4] overflow-hidden">
              <img
                src="/fotoperfil.webp"
                alt="Foto de perfil"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background to-transparent h-32" />
            </div>
          </div>
        </div>
      </div>

      {/* Experiencia Audiovisual */}
      <div className="py-24 px-6 md:px-12 border-t border-border">
        <div className="container mx-auto">
          <p className="text-primary font-mono text-xs tracking-widest mb-6">
            EXPERIENCIA LABORAL
          </p>
          <h2 className="text-white text-3xl md:text-5xl font-bold tracking-tight mb-16">
            AUDIOVISUAL
          </h2>
          <div className="grid lg:grid-cols-2 gap-x-16">
            <div>
              <SectionBlock
                title="Proyectos de Ficción"
                items={experienciaAudiovisual.ficcion}
              />
              <SectionBlock
                title="Videoclips"
                items={experienciaAudiovisual.videoclips}
              />
              <SectionBlock
                title="Doblaje"
                items={experienciaAudiovisual.doblaje}
              />
            </div>
            <div>
              <SectionBlock
                title="Publicidad"
                items={experienciaAudiovisual.publicidad}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Experiencia Teatral */}
      <div className="py-24 px-6 md:px-12 border-t border-border bg-card/30">
        <div className="container mx-auto">
          <h2 className="text-white text-3xl md:text-5xl font-bold tracking-tight mb-16">
            TEATRAL
          </h2>
          <div className="grid lg:grid-cols-2 gap-x-16">
            <div>
              <SectionBlock
                title="Arte Dramático"
                items={experienciaTeatral.arteDramatico}
              />
              <SectionBlock
                title="Danza / Movimiento"
                items={experienciaTeatral.danza}
              />
            </div>
            <div>
              <SectionBlock
                title="Teatro Musical"
                items={experienciaTeatral.musical}
              />
              <SectionBlock
                title="Docencia"
                items={experienciaTeatral.docencia}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Formación */}
      <div className="py-24 px-6 md:px-12 border-t border-border">
        <div className="container mx-auto">
          <p className="text-primary font-mono text-xs tracking-widest mb-6">
            FORMACIÓN
          </p>
          <h2 className="text-white text-3xl md:text-5xl font-bold tracking-tight mb-16">
            ESTUDIOS & <span className="text-primary">FORMACIÓN</span>
          </h2>
          <div className="grid lg:grid-cols-2 gap-x-16 gap-y-16">
            <div>
              <p className="font-mono text-xs text-muted-foreground tracking-widest mb-6 uppercase">
                Estudios Superiores
              </p>
              <div className="space-y-6">
                {formacionSuperior.map((item, i) => (
                  <div key={i} className="border-l-2 border-primary pl-6">
                    <p className="font-mono text-xs text-primary mb-1">
                      {item.period}
                    </p>
                    <p className="text-white font-bold text-lg leading-snug">
                      {item.titulo}
                    </p>
                    <p className="text-muted-foreground text-sm mt-1">
                      {item.institucion}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="font-mono text-xs text-muted-foreground tracking-widest mb-6 uppercase">
                Estudios de Profundización
              </p>
              <div className="space-y-6">
                {formacionProfundizacion.map((item, i) => (
                  <div
                    key={i}
                    className="border-l-2 border-border hover:border-primary pl-6 transition-colors duration-300"
                  >
                    <p className="font-mono text-xs text-primary mb-1">
                      {item.period}
                    </p>
                    <p className="text-white font-medium leading-snug">
                      {item.titulo}
                    </p>
                    <p className="text-muted-foreground text-sm mt-1">
                      {item.institucion}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Habilidades */}
      <div className="py-24 px-6 md:px-12 border-t border-border bg-card/30">
        <div className="container mx-auto">
          <p className="text-primary font-mono text-xs tracking-widest mb-6">
            HABILIDADES
          </p>
          <h2 className="text-white text-3xl md:text-5xl font-bold tracking-tight mb-12">
            HABILIDADES &{" "}
            <span className="text-primary">ESPECIALIZACIONES</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {skills.map((skill) => (
              <div
                key={skill}
                className="border border-border p-4 md:p-6 hover:border-primary hover:bg-primary/5 transition-all duration-300"
              >
                <p className="text-foreground font-medium text-sm md:text-base">
                  {skill}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-24 px-6 md:px-12 bg-card border-t border-border">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-12">
            <div>
              <p className="text-xs font-mono text-primary tracking-widest mb-6">
                COLABORACIÓN
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold leading-tight tracking-tight text-white">
                ¿Quieres trabajar
                <br />
                <span className="text-primary">conmigo?</span>
              </h2>
            </div>
            <Link
              href="/contact"
              className="group flex items-center gap-4 px-8 py-5 bg-primary text-primary-foreground rounded-full font-semibold text-base hover:bg-foreground hover:text-background transition-colors duration-300"
            >
              Contactarme
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

      <Footer />
    </main>
  );
}
