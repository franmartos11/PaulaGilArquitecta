"use client";

import { useEffect } from "react";

// Marca con .is-visible cada [data-reveal] cuando entra en pantalla. El CSS solo
// esconde esos elementos cuando <html> tiene .reveal-ready, así que sin JS todo
// queda visible.
export default function RevealObserver() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));

    // Lo que ya está a la vista al hidratar (p. ej. al recargar a mitad de página)
    // se muestra sin animar, para que no parpadee.
    for (const el of els) {
      const r = el.getBoundingClientRect();
      if (r.top < innerHeight && r.bottom > 0) el.classList.add("is-visible", "is-instant");
    }
    document.documentElement.classList.add("reveal-ready");

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          e.target.classList.add("is-visible");
          io.unobserve(e.target);
        }
      },
      // Margen chico: con uno grande el pie, que es lo último, nunca llega a entrar.
      { rootMargin: "0px 0px -60px 0px", threshold: 0 },
    );
    for (const el of els) if (!el.classList.contains("is-visible")) io.observe(el);

    return () => io.disconnect();
  }, []);

  return null;
}
