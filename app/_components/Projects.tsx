"use client";

import Image from "next/image";
import { useState, type CSSProperties } from "react";

type Project = {
  title: string;
  description: string;
  tags: string[];
  place?: string;
  images: { src: string; alt: string }[];
};

const PROJECTS: Project[] = [
  {
    title: "Casa en Los Molinos",
    description:
      "Renders de día y de noche, interiores y exteriores, para una vivienda en un nuevo desarrollo urbano: living, comedor y cocina integrados, dos dormitorios, dos baños y una galería con asador abierta al solárium y la pileta.",
    tags: ["Renders 3D", "Interiores", "Exteriores"],
    place: "Los Molinos, Córdoba",
    images: [
      { src: "/img/los-molinos-pileta.jpg", alt: "Casa en Los Molinos, pileta desbordante frente al living" },
      { src: "/img/los-molinos-galeria.jpg", alt: "Casa en Los Molinos, galería abierta al comedor de noche" },
    ],
  },
  {
    title: "Módulo Urbano",
    description:
      "Equipamiento prefabricado y adaptable: un módulo de 6,20 m que reúne estar, dormitorio, kitchenette y baño, revestido en listones de madera, hormigón y mármol oscuro, con iluminación LED integrada.",
    tags: ["Proyecto", "Documentación", "Instalación eléctrica"],
    images: [
      { src: "/img/modulo-exterior.jpg", alt: "Módulo Urbano, exterior negro con deck de madera en el bosque" },
      { src: "/img/modulo-dormitorio.jpg", alt: "Módulo Urbano, dormitorio con kitchenette" },
    ],
  },
  {
    title: "Housing Villa Allende",
    description:
      "Conjunto de viviendas escalonado sobre la pendiente, con un plan paisajístico que acompaña la topografía. Ingreso bajo una cubierta de madera, cerramiento de parasoles y terrazas verdes en cada nivel.",
    tags: ["Proyecto", "Paisajismo", "En desarrollo"],
    place: "Villa Allende, Córdoba",
    images: [
      { src: "/img/villa-allende-conjunto.jpg", alt: "Housing Villa Allende, conjunto escalonado sobre la pendiente" },
      { src: "/img/villa-allende-acceso.jpg", alt: "Housing Villa Allende, acceso vehicular y garita" },
    ],
  },
  {
    title: "Microestadio Belgrano",
    description:
      "Propuesta para el microestadio del Club Atlético Belgrano: cancha de básquet y vóley, gradas de madera, vestuarios, gimnasio y cantina. Pórticos a la vista, madera, negro y el celeste del club traído por la luz.",
    tags: ["Propuesta", "Interiorismo", "Renders 3D"],
    place: "Córdoba",
    images: [
      { src: "/img/belgrano-cancha.jpg", alt: "Microestadio Belgrano, cancha con pórticos y escudo del club" },
      { src: "/img/belgrano-voley.jpg", alt: "Microestadio Belgrano, cielorraso celeste y cancha de vóley" },
    ],
  },
  {
    title: "Escuela de Oficios",
    description:
      "Proyecto académico en el ingreso a Ciudad Universitaria. Dos volúmenes tallados que siguen la topografía, con patios internos, parasoles verticales de hormigón y una cubierta metálica que filtra el sol.",
    tags: ["Proyecto académico", "FAUD, UNC"],
    place: "Ciudad Universitaria, Córdoba",
    images: [
      { src: "/img/escuela-fachada.jpg", alt: "Escuela de Oficios, fachada de parasoles verticales sobre la avenida" },
      { src: "/img/escuela-escalinata.jpg", alt: "Escuela de Oficios, escalinata de ingreso bajo la cubierta metálica" },
      { src: "/img/escuela-pergola.jpg", alt: "Escuela de Oficios, volumen de hormigón bajo la pérgola" },
    ],
  },
];

// Ancho que ocupa cada foto en escritorio según cuántas tiene la galería.
const DESKTOP_SIZES: Record<number, string[]> = {
  2: ["55vw", "37vw"],
  3: ["45vw", "23vw", "23vw"],
};

function imageSizes(count: number, i: number) {
  const mobile = count === 3 && i > 0 ? "50vw" : "100vw";
  return `(max-width: 899px) ${mobile}, ${DESKTOP_SIZES[count][i]}`;
}

export default function Projects() {
  const [open, setOpen] = useState(-1);

  return (
    <ul className="projects__list" data-reveal="rule">
      {PROJECTS.map((p, i) => (
        <li
          key={p.title}
          className="project"
          data-open={open === i}
          data-reveal
          style={{ "--i": i * 0.6 } as CSSProperties}
          tabIndex={0}
          aria-label={p.title}
          onMouseEnter={() => setOpen(i)}
          onMouseLeave={() => setOpen(-1)}
          onFocus={() => setOpen(i)}
          onBlur={() => setOpen(-1)}
        >
          <div className="wrap project__row">
            <h3 className="project__title">{p.title}</h3>
            <p className="project__desc">{p.description}</p>
            <div className="project__meta">
              <div className="project__tags">
                {p.tags.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
              {p.place && <div>{p.place}</div>}
            </div>
          </div>
          <div className="project__media">
            <div className="project__media-inner">
              <div
                className={`wrap project__gallery${p.images.length === 3 ? " project__gallery--3" : ""}`}
              >
                {p.images.map((img, j) => (
                  <div key={img.src} className="shot">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      sizes={imageSizes(p.images.length, j)}
                      className="cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
