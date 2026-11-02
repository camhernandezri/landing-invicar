import { Target, Eye, Wrench, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";

const pillars = [
  {
    icon: Target,
    title: "Misión",
    text: "Autobuses INVICAR se dedica al diseño, fabricación, ensamble y reparación de carrocerias para el transporte de pasajeros (buses, busetones y busetas), brindando bienestar a nuestros colaboradores y cumpliendo con estándares de homologación de calidad acordes a los requerimientos específicos de nuestros clientes.",
  },
  {
    icon: Eye,
    title: "Visión",
    text: "Ser una empresa valorada dentro del sector por su crecimiento, liderazgo, capacidad de adaptación, estándares de calidad, servicio al cliente y la constante innovación en cuanto al diseño de sus productos, posicionándose de esta forma en el mercado de fabricación de carrocerías para autobuses en los países de la región",
  },
{
    icon: Wrench,
    title: "Servicios",
    text: "Autobuses INVICAR es una empresa seria y responsable que se caracteriza por cumplir las necesidades y expectativas de sus clientes, prestando los siguientes servicios:",
    items: [
      "Diseño, fabricación y ensamble de carrocerías para buses, busetones y busetas.",
      "Reparación, mantenimiento y reconstrucción de carrocerías.",
      "Adaptaciones e interiorismo de vehículos para transporte de pasajeros.",
      "Venta y suministro de repuestos y accesorios para carrocerías.",
      "Asesoría técnica y cumplimiento de estándares de homologación."
    ]
  },
  {
    icon: ShieldCheck,
    title: "Valores",
    text: "Nuestros pilares fundamentales para garantizar la máxima calidad y confianza:",
    items: [
      "Calidad y Seguridad: Compromiso con estándares rígidos en cada unidad ensamblada.",
      "Innovación Continua: Evolución constante en el diseño y materiales de nuestras carrocerías.",
      "Responsabilidad y Cumplimiento: Entregas a tiempo y respeto por las especificaciones del cliente.",
      "Orientación al Cliente: Soluciones personalizadas adaptadas a sus necesidades.",
      "Trabajo en Equipo y Bienestar: Prioridad en el desarrollo personal y seguridad de nuestros colaboradores."
    ]
  },
];

const historyChapters = [
  {
    year: "1992",
    title: "El nacimiento de Autobuses INVICAR",
    text: "Autobuses INVICAR es una empresa colombiana dedicada al diseño, fabricación y ensamble de carrocerías para buses, busetones y busetas, surgida en el año de 1992 como la nueva generación de Carrocerías Invicta y como respuesta al aumento en la demanda y el apogeo del transporte urbano.",
    images: ["/images/historia1.jpeg", "/images/historia2.jpeg"],
  },
  {
    year: "1992 – 1996",
    title: "Primeros pasos y apertura económica",
    text: "En un principio nuestro trabajo estuvo orientado a la fabricación de colectivos para servicio público, ensamblando posteriormente buses de dirección adelantada hasta el año de 1996. En los años siguientes se produce la apertura económica que modifica las condiciones del mercado, globalizándolo y motivando el consumo de bienes y servicios de mayor calidad; originando así el lanzamiento del modelo HORUS para buses y busetas en donde se mezcla innovación y confort, calidad, modernos acabados y seguridad para el cliente.",
    images: ["/images/historia3.jpeg", "/images/bus1.jpeg"],
  },
  {
    year: "2004",
    title: "Modelo OSIRIS",
    text: "Para el año 2004 se da una evolución importante creando el modelo OSIRIS, estandarizando sus piezas y desarrollando la mayoría de sus partes en fibra de vidrio para su interior, combinando colores y texturas y logrando un producto excelente en sus terminados tanto internos como externos.",
    images: ["/images/historia4.jpeg", "/images/buseta1.jpeg"],
  },
  {
    year: "2006",
    title: "Modelo ISIS",
    text: "En el año 2006 y en concordancia con sus principios de innovación, Autobuses INVICAR lanza el modelo ISIS, que incorpora materias primas importadas y nuevas líneas de diseño, así como la adopción de nuevas tecnologías que aportan mayor funcionalidad y modernidad.",
    images: ["/images/historia5.jpeg", "/images/bus2.jpeg"],
  },
];

export function AboutSection() {
  return (
    <section
      id="nosotros"
      className="relative flex min-h-screen snap-start flex-col items-center justify-center overflow-hidden bg-brand-blue-dark py-24"
    >
      <div className="absolute inset-0">
        <img
          src="/images/combo3.jpeg"
          alt="Instalaciones de fabricación Invicar"
          className="h-full w-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-linear-to-b from-brand-blue-dark/95 via-brand-blue-dark/90 to-black/95" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6">
        <div className="mb-14 text-center">
          <span className="text-xs font-medium uppercase tracking-[0.25em] text-brand-gold">
            Quiénes somos
          </span>
          <h2 className="mt-4 text-4xl font-semibold tracking-[0.3em] text-white sm:text-6xl">
            NOSOTROS
          </h2>
          <div className="mx-auto mt-4 h-px w-20 bg-brand-gold" />
          <p className="mx-auto mt-4 max-w-xl text-pretty text-sm leading-relaxed text-white/65">
            Más de una década construyendo carrocerías que transforman la manera
            en que Colombia se mueve.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {pillars.map(({ icon: Icon, title, text, items }) => (
            <div
              key={title}
              className="flex flex-col items-center rounded-2xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-sm transition-colors hover:border-brand-gold/40"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-brand-gold/60 bg-brand-gold/10">
                <Icon className="h-6 w-6 text-brand-gold" strokeWidth={1.5} />
              </div>
              <h3 className="mt-6 text-lg font-semibold tracking-[0.2em] text-white">
                {title.toUpperCase()}
              </h3>
              <div className="mx-auto mt-3 h-px w-10 bg-brand-gold/60" />
              <p className="mt-4 text-sm leading-relaxed text-white/65 text-pretty">
                {text}
              </p>
              {items && (
                <ul className="mt-4 space-y-2 text-left">
                  {items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm leading-relaxed text-white/65 text-pretty"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand-gold" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        <div className="mt-24">
          <div className="mb-14 text-center">
            <span className="text-xs font-medium uppercase tracking-[0.25em] text-brand-gold">
              Nuestro recorrido
            </span>
            <h3 className="mt-4 text-3xl font-semibold tracking-[0.25em] text-white sm:text-4xl">
              HISTORIA
            </h3>
            <div className="mx-auto mt-4 h-px w-20 bg-brand-gold" />
          </div>

          <div className="mx-auto max-w-5xl space-y-20 md:space-y-28">
            {historyChapters.map((chapter, index) => {
              const isReversed = index % 2 === 1;

              return (
                <div
                  key={chapter.year}
                  className="grid gap-10 md:grid-cols-2 md:items-center md:gap-16"
                >
                  <div
                    className={cn(
                      "relative mb-8 md:mb-0",
                      isReversed && "md:order-2"
                    )}
                  >
                    <div className="overflow-hidden rounded-2xl border border-white/10">
                      <img
                        src={chapter.images[0]}
                        alt={chapter.title}
                        className="aspect-4/3 w-full object-cover"
                      />
                    </div>
                    {chapter.images[1] && (
                      <div
                        className={cn(
                          "absolute -bottom-8 w-2/5 overflow-hidden rounded-xl border-4 border-brand-blue-dark shadow-xl",
                          isReversed ? "-left-6" : "-right-6"
                        )}
                      >
                        <img
                          src={chapter.images[1]}
                          alt={chapter.title}
                          className="aspect-square w-full object-cover"
                        />
                      </div>
                    )}
                  </div>

                  <div className={cn(isReversed && "md:order-1")}>
                    <span className="text-sm font-semibold tracking-[0.2em] text-brand-gold">
                      {chapter.year}
                    </span>
                    <h4 className="mt-2 text-2xl font-semibold tracking-wide text-white sm:text-3xl">
                      {chapter.title}
                    </h4>
                    <div className="mt-3 h-px w-16 bg-brand-gold/60" />
                    <p className="mt-4 text-sm leading-relaxed text-white/70 sm:text-base">
                      {chapter.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}