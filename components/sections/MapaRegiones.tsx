"use client";

import * as React from "react";
import { FIESTAS, REGIONES } from "@/lib/data";
import { ArrowIcon, PinIcon } from "../Icons";

const REGION_PATHS: { id: string; d: string }[] = [
  { id: "noa",       d: "M 165 60 L 200 50 L 220 90 L 200 140 L 170 130 L 155 100 Z" },
  { id: "nea",       d: "M 220 90 L 270 100 L 280 160 L 250 180 L 220 160 Z" },
  { id: "cuyo",      d: "M 155 140 L 200 150 L 200 220 L 170 240 L 150 200 Z" },
  { id: "centro",    d: "M 200 150 L 250 160 L 260 230 L 220 240 L 200 220 Z" },
  { id: "litoral",   d: "M 250 180 L 290 200 L 290 280 L 260 280 L 260 230 Z" },
  { id: "pampa",     d: "M 170 240 L 260 240 L 270 320 L 240 360 L 180 350 L 160 300 Z" },
  { id: "patagonia", d: "M 160 350 L 250 350 L 260 460 L 230 540 L 200 580 L 180 540 L 170 460 Z" },
];

const POINT_POSITIONS: [number, number][] = [
  [185, 80], [210, 160], [170, 200], [225, 220],
  [270, 210], [200, 290], [230, 400], [225, 330],
];

// Centro is not in REGIONES but exists as a region path; treat it as "pampa" fallback color
const PATH_REGION = (id: string) =>
  REGIONES.find((r) => r.id === id) ?? { color: "var(--r-centro)", count: 0, nombre: id, id, img: "", desc: "" };

export function MapaRegiones() {
  const [hovered, setHovered] = React.useState<string | null>(null);
  const sel = REGIONES.find((r) => r.id === hovered) || null;

  return (
    <section
      id="mapa"
      style={{
        padding: "var(--pad-section, 80px) 0",
        background: "var(--cream)",
        position: "relative",
      }}
    >
      <div className="container-fr">
        <div style={{ textAlign: "center", maxWidth: 640, margin: "0 auto 48px" }}>
          <div className="t-eyebrow" style={{ color: "var(--azure)", marginBottom: 10 }}>
            Explorá por región
          </div>
          <h2
            style={{
              fontSize: "clamp(32px, 4.5vw, 52px)",
              fontWeight: 600,
              margin: "0 0 12px",
              letterSpacing: "-0.02em",
            }}
          >
            De norte a sur,{" "}
            <span
              style={{
                fontFamily: "var(--f-display)",
                color: "var(--azure)",
                fontWeight: 400,
                paddingLeft: 8,
              }}
            >
              nuestras fiestas
            </span>
          </h2>
          <p style={{ color: "var(--n-600)", fontSize: 16, maxWidth: 540, margin: "0 auto", lineHeight: 1.55 }}>
            Cada región tiene su voz, su paleta, su modo de celebrar. Tocá una para conocer las suyas.
          </p>
        </div>

        <div
          className="mr-grid"
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }}
        >
          {/* Mapa SVG estilizado */}
          <div style={{ position: "relative" }}>
            <svg viewBox="0 0 400 600" style={{ width: "100%", height: "auto" }} aria-hidden>
              <path
                d="M 200 20 L 230 30 L 240 60 L 260 100 L 270 140 L 280 180 L 270 220 L 280 260 L 290 300 L 280 340 L 270 380 L 260 420 L 250 460 L 240 500 L 220 540 L 200 580 L 180 540 L 170 500 L 175 450 L 165 400 L 160 350 L 150 300 L 145 250 L 155 200 L 150 150 L 165 100 L 180 60 Z"
                fill="rgba(14,30,58,.04)"
                stroke="var(--ink)"
                strokeWidth="0.6"
              />
              {REGION_PATHS.map((r) => {
                const region = PATH_REGION(r.id);
                const isHover = hovered === r.id;
                return (
                  <path
                    key={r.id}
                    d={r.d}
                    fill={region.color}
                    fillOpacity={isHover ? 0.9 : 0.6}
                    stroke="white"
                    strokeWidth="2"
                    onMouseEnter={() => setHovered(r.id)}
                    onMouseLeave={() => setHovered(null)}
                    onClick={() => setHovered(r.id)}
                    style={{ cursor: "pointer", transition: "fill-opacity .2s" }}
                  />
                );
              })}
              {FIESTAS.slice(0, 8).map((_, i) => {
                const [x, y] = POINT_POSITIONS[i] || [200, 300];
                return (
                  <circle
                    key={i}
                    cx={x}
                    cy={y}
                    r="3"
                    fill="white"
                    stroke="var(--ink)"
                    strokeWidth="1.5"
                  />
                );
              })}
            </svg>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 8,
                marginTop: 20,
                justifyContent: "center",
              }}
            >
              {REGIONES.map((r) => (
                <button
                  key={r.id}
                  onMouseEnter={() => setHovered(r.id)}
                  onMouseLeave={() => setHovered(null)}
                  style={{
                    border: "1.5px solid",
                    borderColor: r.color,
                    padding: "6px 14px",
                    borderRadius: "var(--r-pill)",
                    fontSize: 13,
                    fontWeight: 500,
                    cursor: "pointer",
                    transition: "all .2s",
                    display: "inline-flex",
                    alignItems: "center",
                    fontFamily: "var(--f-sans)",
                    background: hovered === r.id ? r.color : "transparent",
                    color: hovered === r.id ? "white" : "var(--ink)",
                  }}
                >
                  <span
                    style={{
                      width: 10,
                      height: 10,
                      borderRadius: "50%",
                      background: r.color,
                      marginRight: 8,
                      display: "inline-block",
                    }}
                  />
                  {r.nombre}{" "}
                  <span style={{ opacity: 0.6, marginLeft: 4 }}>{r.count}</span>
                </button>
              ))}
            </div>
          </div>

          {/* panel de detalle */}
          <div
            style={{
              background: "white",
              borderRadius: "var(--r-lg)",
              padding: 24,
              boxShadow: "var(--sh-card)",
              minHeight: 340,
            }}
          >
            {sel ? (
              <div>
                <div
                  style={{
                    height: 200,
                    borderRadius: 12,
                    overflow: "hidden",
                    marginBottom: 20,
                    position: "relative",
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={sel.img}
                    alt={sel.nombre}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: `linear-gradient(0deg, ${sel.color}cc, transparent 60%)`,
                    }}
                  />
                  <div style={{ position: "absolute", bottom: 16, left: 16, color: "white" }}>
                    <div className="t-eyebrow" style={{ opacity: 0.85, marginBottom: 4 }}>
                      Región
                    </div>
                    <div
                      style={{
                        fontFamily: "var(--f-serif)",
                        fontSize: 36,
                        fontWeight: 600,
                        lineHeight: 1,
                      }}
                    >
                      {sel.nombre}
                    </div>
                  </div>
                </div>
                <p style={{ fontSize: 16, color: "var(--n-700)", lineHeight: 1.6, margin: "0 0 16px" }}>
                  {sel.desc}
                </p>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "14px 0",
                    borderTop: "1px solid var(--n-200)",
                  }}
                >
                  <div>
                    <div
                      style={{
                        fontFamily: "var(--f-serif)",
                        fontSize: 32,
                        fontWeight: 600,
                        color: sel.color,
                        lineHeight: 1,
                      }}
                    >
                      {sel.count}
                    </div>
                    <div style={{ fontSize: 12, color: "var(--n-500)" }}>fiestas registradas</div>
                  </div>
                  <a className="btn btn-dark btn-sm">
                    Ver fiestas <ArrowIcon size={14} color="var(--cream)" />
                  </a>
                </div>
              </div>
            ) : (
              <div style={{ textAlign: "center", padding: "40px 20px", color: "var(--n-500)" }}>
                <PinIcon size={32} color="var(--n-300)" />
                <p style={{ marginTop: 12, fontSize: 15 }}>
                  Pasá el mouse sobre el mapa para explorar las regiones
                </p>
                <div
                  style={{
                    fontFamily: "var(--f-hand)",
                    fontSize: 22,
                    color: "var(--azure)",
                    marginTop: 24,
                  }}
                >
                  ↖ tocá una región
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
