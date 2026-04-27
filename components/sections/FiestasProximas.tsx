"use client";

import * as React from "react";
import Link from "next/link";
import { FIESTAS } from "@/lib/data";
import { ArrowIcon, CalendarIcon, PinIcon } from "../Icons";

const FILTERS = [
  { id: "todas", label: "Todas" },
  { id: "finde", label: "Este finde" },
  { id: "mes", label: "Este mes" },
] as const;
type FilterId = (typeof FILTERS)[number]["id"];

export function FiestasProximas() {
  const scrollRef = React.useRef<HTMLDivElement>(null);
  const [filter, setFilter] = React.useState<FilterId>("todas");

  const filtered = React.useMemo(() => {
    if (filter === "finde") return FIESTAS.slice(0, 4);
    if (filter === "mes") return FIESTAS.slice(0, 6);
    return FIESTAS;
  }, [filter]);

  const scroll = (dir: 1 | -1) => {
    scrollRef.current?.scrollBy({ left: dir * 360, behavior: "smooth" });
  };

  return (
    <section id="fiestas" style={{ padding: "var(--pad-section, 80px) 0", position: "relative" }}>
      <div className="container-fr">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            gap: 24,
            marginBottom: 36,
            flexWrap: "wrap",
          }}
        >
          <div>
            <div className="t-eyebrow" style={{ color: "var(--teal)", marginBottom: 8 }}>
              Próximas fechas
            </div>
            <h2
              style={{
                fontSize: "clamp(32px, 4.5vw, 52px)",
                fontWeight: 600,
                margin: "0 0 12px",
                letterSpacing: "-0.02em",
              }}
            >
              Fiestas que vienen{" "}
              <span
                style={{
                  fontFamily: "var(--f-display)",
                  color: "var(--azure)",
                  fontWeight: 400,
                  paddingLeft: 8,
                }}
              >
                pronto
              </span>
            </h2>
            <p style={{ color: "var(--n-600)", fontSize: 16, maxWidth: 540, margin: 0, lineHeight: 1.55 }}>
              Las que están a la vuelta de la esquina — agendá, sumá al viaje, reservá hospedaje.
            </p>
          </div>
          <div style={{ display: "flex", gap: 8, alignItems: "flex-end", flexWrap: "wrap" }}>
            {FILTERS.map((f) => (
              <button
                key={f.id}
                onClick={() => setFilter(f.id)}
                className={`chip ${filter === f.id ? "chip-active" : ""}`}
              >
                {f.label}
              </button>
            ))}
            <div style={{ display: "flex", gap: 6, marginLeft: 8 }}>
              <button
                onClick={() => scroll(-1)}
                aria-label="Anterior"
                style={{
                  width: 42,
                  height: 42,
                  borderRadius: "50%",
                  border: "1.5px solid var(--ink)",
                  background: "transparent",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                }}
              >
                <ArrowIcon size={18} dir="left" color="var(--ink)" />
              </button>
              <button
                onClick={() => scroll(1)}
                aria-label="Siguiente"
                style={{
                  width: 42,
                  height: 42,
                  borderRadius: "50%",
                  border: "1.5px solid var(--ink)",
                  background: "transparent",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                }}
              >
                <ArrowIcon size={18} color="var(--ink)" />
              </button>
            </div>
          </div>
        </div>

        <div
          ref={scrollRef}
          style={{
            display: "flex",
            gap: 20,
            overflowX: "auto",
            scrollSnapType: "x mandatory",
            paddingBottom: 16,
            scrollbarWidth: "thin",
          }}
        >
          {filtered.map((f) => (
            <Link
              key={f.slug}
              href={`/fiestas/${f.slug}`}
              style={{
                flex: "0 0 340px",
                scrollSnapAlign: "start",
                background: "white",
                borderRadius: 12,
                boxShadow: "var(--sh-card)",
                overflow: "hidden",
                transition: "transform .2s ease, box-shadow .2s ease",
                cursor: "pointer",
              }}
            >
              <div style={{ position: "relative", height: 240, overflow: "hidden", borderRadius: "12px 12px 0 0" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={f.img}
                  alt={f.nombre}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: 12,
                    left: 12,
                    display: "flex",
                    gap: 6,
                    flexWrap: "wrap",
                  }}
                >
                  <span
                    style={{
                      background: f.color,
                      color: "white",
                      padding: "4px 10px",
                      borderRadius: "var(--r-pill)",
                      fontSize: 11,
                      fontWeight: 600,
                      letterSpacing: ".04em",
                      textTransform: "uppercase",
                    }}
                  >
                    {f.region}
                  </span>
                  {f.badge && (
                    <span
                      style={{
                        background: "rgba(255,255,255,.95)",
                        color: "var(--ink)",
                        padding: "4px 10px",
                        borderRadius: "var(--r-pill)",
                        fontSize: 11,
                        fontWeight: 600,
                      }}
                    >
                      {f.badge}
                    </span>
                  )}
                </div>
                <div
                  style={{
                    position: "absolute",
                    bottom: 12,
                    right: 12,
                    background: "rgba(255,255,255,.95)",
                    padding: "6px 10px",
                    borderRadius: 8,
                    fontSize: 11,
                    fontWeight: 600,
                    color: "var(--ink)",
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                  }}
                >
                  <CalendarIcon size={13} /> {f.fecha}
                </div>
              </div>
              <div style={{ padding: "18px 18px 20px" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    fontSize: 12,
                    color: "var(--ink-soft)",
                    marginBottom: 8,
                  }}
                >
                  <PinIcon size={14} /> {f.provincia} ·{" "}
                  <span className="t-mono">{f.tipo}</span>
                </div>
                <h3
                  style={{
                    fontFamily: "var(--f-serif)",
                    fontSize: 22,
                    fontWeight: 600,
                    color: "var(--ink)",
                    margin: "0 0 8px",
                    lineHeight: 1.15,
                  }}
                >
                  {f.nombre}
                </h3>
                <p
                  style={{
                    fontSize: 13.5,
                    lineHeight: 1.55,
                    color: "var(--n-600)",
                    margin: "0 0 14px",
                  }}
                >
                  {f.short}
                </p>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: 12, color: "var(--n-500)" }} className="t-mono">
                    {f.duracion} · {f.asistentes}
                  </span>
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 4,
                      fontSize: 13,
                      fontWeight: 600,
                      color: "var(--azure)",
                    }}
                  >
                    Ver más <ArrowIcon size={14} color="var(--azure)" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
