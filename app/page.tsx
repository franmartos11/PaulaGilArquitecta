import type { CSSProperties } from "react";
import Image from "next/image";
import MobileMenu from "./_components/MobileMenu";
import Projects from "./_components/Projects";
import RevealObserver from "./_components/RevealObserver";
import { ArrowDown, ArrowRight } from "./_components/icons";
import { EMAIL, LINKEDIN_URL, NAV_LINKS, WHATSAPP_URL } from "./_components/site";

const TOOLS = [
  "Revit Architecture",
  "Revit MEP",
  "Navisworks",
  "BIM 360",
  "AutoCAD",
  "SketchUp",
  "3ds Max + V-Ray",
  "Lumion",
  "Photoshop",
  "CorelDRAW",
];

const SERVICES = [
  {
    title: "Proyecto de arquitectura",
    text: "Anteproyecto, planos y documentación completa de viviendas para construir sin improvisar.",
  },
  {
    title: "Modelado BIM",
    text: "Modelos en Revit, de arquitectura e instalaciones, coordinados y listos para documentar.",
  },
  {
    title: "Cómputos y presupuestos",
    text: "Cómputo de materiales y presupuesto de obra para decidir con números claros.",
  },
  {
    title: "Instalaciones",
    text: "Instalaciones sanitarias, eléctricas, de gas y contra incendio, modeladas y coordinadas con la arquitectura.",
  },
  {
    title: "Renders y recorridos 3D",
    text: "Para ver la obra terminada antes de poner un ladrillo y decidir con seguridad.",
  },
];

const STEPS = [
  {
    title: "Primera reunión",
    text: "Conozco el terreno, el presupuesto y cómo vive tu familia o tu equipo.",
  },
  {
    title: "Anteproyecto",
    text: "Te muestro plantas, volúmenes y renders para ajustar juntos.",
  },
  {
    title: "Proyecto ejecutivo",
    text: "Planos, cómputos y pliegos listos para pedir presupuestos y aprobar.",
  },
  {
    title: "Obra y entrega",
    text: "Acompaño la obra hasta el último detalle y la entrega final.",
  },
];

const JOBS = [
  {
    date: "2024 — hoy",
    role: "BIM Modeler",
    org: "3DE, remoto para proyectos en Estados Unidos",
    text: "Modelos BIM de instalaciones eléctricas y contra incendio bajo normas de EE. UU., documentación para obra y detección de interferencias con Navisworks y BIM 360.",
  },
  {
    date: "2022 — 2024",
    role: "Arquitecta",
    org: "Techno Project, Córdoba",
    text: "Viviendas y remodelaciones del diseño a la obra: cómputos, presupuestos, mediciones, coordinación con ingenieros, contratistas y clientes, y renders para cada presentación.",
  },
];

// Retraso de la entrada del inicio (en segundos) y orden dentro de un grupo
// que aparece al hacer scroll.
const delay = (s: number) => ({ "--delay": `${s}s` }) as CSSProperties;
const order = (n: number) => ({ "--i": n }) as CSSProperties;

export default function Home() {
  return (
    <main>
      <RevealObserver />

      {/* HERO */}
      <section id="inicio" className="hero">
        <Image
          src="/img/hero-los-molinos.jpg"
          alt="Casa en Los Molinos, frente de noche con galería y pileta"
          fill
          preload
          sizes="100vw"
          className="cover hero__img"
        />
        <div aria-hidden="true" className="hero__shade" />

        <header className="wrap site-header">
          <a href="#inicio" className="logo intro intro--down" style={delay(0.2)}>
            <span className="logo__name">PAULA GIL</span>
            <span className="logo__sub">ARQUITECTURA</span>
          </a>
          <nav aria-label="Secciones" className="nav intro intro--down" style={delay(0.3)}>
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href}>
                {l.label}
              </a>
            ))}
          </nav>
          <a href="#contacto" className="header-cta intro intro--down" style={delay(0.4)}>
            Agendar una reunión
          </a>
          <MobileMenu />
        </header>

        <div className="wrap hero__body">
          <h1 className="display display--hero">
            <span className="intro" style={delay(0.35)}>
              ARQUITECTURA QUE
            </span>
            <em className="intro" style={delay(0.55)}>
              se habita.
            </em>
          </h1>
          <div className="hero__foot">
            <p className="hero__lead intro" style={delay(0.85)}>
              Proyectos residenciales, modelado BIM y renders, del primer boceto a la obra.
            </p>
            <a href="#proyectos" className="hero__cta only-desktop intro" style={delay(1)}>
              Conocé los proyectos
              <span className="hero__circle">
                <ArrowDown size={18} />
              </span>
            </a>
            <span className="hero__caption only-desktop intro" style={delay(1.15)}>
              Casa en Los Molinos, Córdoba
            </span>
            <div className="hero__buttons only-mobile intro" style={delay(1)}>
              <a href={WHATSAPP_URL} className="pill pill--solid pill--center">
                Escribime por WhatsApp
              </a>
              <a href="#proyectos" className="pill pill--ghost pill--center">
                Conocé los proyectos
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* HERRAMIENTAS */}
      <section aria-label="Herramientas" className="tools">
        <p className="wrap tools__label" data-reveal>
          Herramientas con las que trabajo
        </p>
        <div className="marquee" data-reveal style={order(1)}>
          <div className="marquee__track">
            {[0, 1].map((copy) => (
              <ul key={copy} className="marquee__group" aria-hidden={copy === 1 || undefined}>
                {TOOLS.map((t) => (
                  <li key={t} className="chip">
                    {t}
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </section>

      {/* PROYECTOS */}
      <section id="proyectos" className="projects">
        <div className="wrap projects__intro">
          <h2 className="display display--xl">
            <span data-reveal="line">OBRAS QUE</span>
            <em data-reveal="line" style={order(1)}>
              cuentan algo.
            </em>
          </h2>
          <p className="projects__text" data-reveal style={order(2)}>
            Cada proyecto parte de una pregunta distinta: cómo entra la luz, cómo se habita, cómo
            se abre al paisaje.
            <span className="only-desktop"> Pasá por encima de cada obra para verla.</span>
          </p>
        </div>
        <Projects />
      </section>

      {/* SOBRE MÍ */}
      <section id="sobre-mi" className="about">
        <div className="wrap about__inner">
          <div className="about__grid">
            <div className="about__photo" data-reveal="photo">
              <Image
                src="/img/retrato-paula.jpg"
                alt="Retrato de Paula Gil, arquitecta"
                fill
                sizes="(max-width: 899px) 100vw, 50vw"
                className="cover"
              />
            </div>
            <div className="about__text">
              <h2 className="display display--lg">
                <span data-reveal="line">UNA ARQUITECTA,</span>
                <em data-reveal="line" style={order(1)}>
                  de principio a fin.
                </em>
              </h2>
              <p className="about__lead" data-reveal style={order(2)}>
                Quien dibuja los planos es quien te acompaña en todo el proceso.
              </p>
              <p className="about__bio only-desktop" data-reveal style={order(3)}>
                Soy arquitecta y urbanista por la Universidad Nacional de Córdoba. Trabajé en
                viviendas y remodelaciones desde el diseño hasta la obra: planos, cómputos,
                presupuestos, coordinación con ingenieros y clientes, y renders para cada
                presentación. Hoy, como BIM Modeler para proyectos en Estados Unidos, modelo
                instalaciones eléctricas y contra incendio en Revit y resuelvo interferencias con
                Navisworks y BIM 360.
              </p>
              <p className="about__bio only-mobile" data-reveal style={order(3)}>
                Arquitecta y urbanista por la Universidad Nacional de Córdoba. Trabajé en viviendas
                y remodelaciones del diseño a la obra: planos, cómputos, presupuestos y renders. Hoy
                modelo instalaciones en BIM para proyectos en Estados Unidos, con Revit, Navisworks
                y BIM 360.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section id="servicios" className="services">
        <div className="wrap services__inner">
          <h2 className="display display--lg display--inline services__title" data-reveal>
            <span>QUE </span>
            <em>hago.</em>
          </h2>
          <div className="rows" data-reveal="rule">
            {SERVICES.map((s, i) => (
              <div key={s.title} className="service" data-reveal style={order(i * 0.6)}>
                <h3 className="service__title">{s.title}</h3>
                <p className="service__text">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESO */}
      <section id="proceso" className="process">
        <div className="wrap process__inner">
          <h2 className="sr-only">Cómo trabajo</h2>
          <ol className="steps">
            {STEPS.map((s, i) => (
              <li key={s.title} className="step" data-reveal style={order(i)}>
                <span className="step__num">{i + 1}</span>
                <div className="step__body">
                  <h3 className="step__title">{s.title}</h3>
                  <p className="step__text">{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* TRAYECTORIA */}
      <section id="trayectoria">
        <div className="wrap career__inner">
          <h2 className="display display--lg career__title">
            <span data-reveal="line">DEL TABLERO</span>
            <em data-reveal="line" style={order(1)}>
              al modelo BIM.
            </em>
          </h2>
          <div className="career__list rows" data-reveal="rule">
            {JOBS.map((j, i) => (
              <div key={j.role} className="job" data-reveal style={order(i)}>
                <div className="job__date">{j.date}</div>
                <div className="job__body">
                  <h3 className="service__title">{j.role}</h3>
                  <div className="job__org">{j.org}</div>
                  <p className="job__text">{j.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="contact">
        <div className="wrap contact__inner">
          <div className="contact__grid">
            <h2 className="display display--contact">
              <span data-reveal="line">HABLEMOS DE</span>
              <em data-reveal="line" style={order(1)}>
                tu proyecto.
              </em>
            </h2>
            <div className="contact__actions">
              <a href={WHATSAPP_URL} className="pill pill--solid" data-reveal style={order(2)}>
                Escribime por WhatsApp
                <ArrowRight />
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="pill pill--line"
                data-reveal
                style={order(3)}
              >
                {EMAIL}
                <ArrowRight />
              </a>
              <p className="contact__note" data-reveal style={order(4)}>
                Desde Córdoba, también de forma remota.
              </p>
            </div>
          </div>
        </div>
        <footer
          className="wrap footer"
          data-reveal="rule"
          style={{ "--rule-color": "var(--footer-line)" } as CSSProperties}
        >
          <span>Paula Gil, Arquitecta, Córdoba</span>
          <a href={LINKEDIN_URL}>LinkedIn</a>
          <span>© 2026</span>
        </footer>
      </section>
    </main>
  );
}
