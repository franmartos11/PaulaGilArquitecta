"use client";

import { useEffect, useState, type CSSProperties } from "react";
import { CloseIcon, MenuIcon } from "./icons";
import { NAV_LINKS, WHATSAPP_URL } from "./site";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <button
        type="button"
        className="menu-button intro intro--down"
        style={{ "--delay": "0.3s" } as CSSProperties}
        aria-label="Abrir menú"
        aria-expanded={open}
        aria-controls="menu-celular"
        onClick={() => setOpen(true)}
      >
        <MenuIcon size={26} strokeWidth={1.2} />
      </button>

      {open && (
        <div
          id="menu-celular"
          className="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Menú"
        >
          <div className="wrap mobile-menu__top">
            <a href="#inicio" className="logo" onClick={close}>
              <span className="logo__name">PAULA GIL</span>
              <span className="logo__sub">ARQUITECTURA</span>
            </a>
            <button
              type="button"
              className="menu-button"
              style={{ display: "flex" }}
              aria-label="Cerrar menú"
              autoFocus
              onClick={close}
            >
              <CloseIcon size={26} strokeWidth={1.2} />
            </button>
          </div>
          <nav aria-label="Secciones" className="wrap mobile-menu__nav">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} onClick={close}>
                {l.label}
              </a>
            ))}
          </nav>
          <div className="wrap mobile-menu__foot">
            <a href={WHATSAPP_URL} className="pill pill--solid pill--center">
              Escribime por WhatsApp
            </a>
          </div>
        </div>
      )}
    </>
  );
}
