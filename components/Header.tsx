"use client";

import * as React from "react";
import Link from "next/link";
import { Sun } from "./Decorative";
import { ArrowIcon, CloseIcon, MenuIcon } from "./Icons";

type HeaderProps = {
  active?: "home" | "fiestas" | "ficha" | "planner" | "mapa";
};

const links = [
  { id: "home" as const, label: "Inicio", href: "/" },
  { id: "fiestas" as const, label: "Fiestas", href: "/#fiestas" },
  { id: "ficha" as const, label: "Vendimia", href: "/fiestas/vendimia-mendoza" },
  { id: "planner" as const, label: "Trip Planner", href: "/planner" },
  { id: "mapa" as const, label: "Mapa", href: "/#mapa" },
];

export function Header({ active = "home" }: HeaderProps) {
  const [open, setOpen] = React.useState(false);
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "rgba(251,246,236,0.9)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid var(--n-100)",
      }}
    >
      <div
        className="container-fr"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 72,
          gap: 24,
        }}
      >
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <Sun size={32} rays={8} />
          <div style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
            <span className="t-eyebrow" style={{ color: "var(--ink-soft)", fontSize: 10 }}>
              Portal turístico
            </span>
            <span style={{ fontFamily: "var(--f-display)", fontSize: 22, color: "var(--ink)", marginTop: 2 }}>
              FiestasAR
            </span>
          </div>
        </Link>

        <nav className="hide-mobile" style={{ display: "flex", gap: 28, alignItems: "center" }}>
          {links.map((l) => (
            <Link
              key={l.id}
              href={l.href}
              style={{
                fontSize: 14,
                fontWeight: active === l.id ? 600 : 500,
                color: active === l.id ? "var(--ink)" : "var(--ink-soft)",
                position: "relative",
                padding: "4px 0",
              }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
          <Link href="/planner" className="btn btn-dark btn-sm hide-mobile">
            Armar mi viaje
            <ArrowIcon size={16} color="var(--cream)" />
          </Link>
          <button
            className="show-mobile"
            onClick={() => setOpen(!open)}
            aria-label="Menú"
            style={{
              background: "var(--ink)",
              color: "var(--cream)",
              border: "none",
              width: 44,
              height: 44,
              borderRadius: "var(--r-md)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {open ? <CloseIcon size={22} color="var(--cream)" /> : <MenuIcon size={22} color="var(--cream)" />}
          </button>
        </div>
      </div>

      {open && (
        <div
          className="show-mobile"
          style={{
            padding: "8px 16px 20px",
            display: "flex",
            flexDirection: "column",
            gap: 4,
            borderTop: "1px solid var(--n-100)",
          }}
        >
          {links.map((l) => (
            <Link
              key={l.id}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{
                padding: "14px 8px",
                fontSize: 16,
                fontWeight: 500,
                color: "var(--ink)",
                borderBottom: "1px solid var(--n-100)",
              }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/planner"
            className="btn btn-primary"
            style={{ marginTop: 8, justifyContent: "center" }}
          >
            Armar mi viaje
          </Link>
        </div>
      )}
    </header>
  );
}
