"use client";

import * as React from "react";
import { Sun } from "../Decorative";
import { ArrowIcon } from "../Icons";

const STEPS = [
  { n: 1, t: "Elegí fiestas", d: "Marcá las que querés vivir desde el catálogo o el mapa." },
  { n: 2, t: "Ingresá tu origen", d: "Decinos desde dónde salís y cuántos días tenés." },
  { n: 3, t: "Recibí tu viaje completo", d: "Ruta, paradas, combustible, clima y qué llevar." },
  { n: 4, t: "Exportá y andá", d: "Google Maps, calendario .ics o link compartible." },
];

export function ComoFunciona() {
  const [step, setStep] = React.useState(0);

  React.useEffect(() => {
    const t = setInterval(() => setStep((s) => (s + 1) % 4), 3500);
    return () => clearInterval(t);
  }, []);

  return (
    <section
      style={{
        padding: "var(--pad-section, 80px) 0",
        background: "var(--ink)",
        color: "var(--cream)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{ position: "absolute", right: -80, top: -80 }}>
        <Sun size={280} rays={14} color="rgba(244,184,62,.12)" spin />
      </div>

      <div className="container-fr" style={{ position: "relative", zIndex: 2 }}>
        <div style={{ textAlign: "center", maxWidth: 680, margin: "0 auto 56px" }}>
          <div className="t-eyebrow" style={{ color: "var(--amber)", marginBottom: 10 }}>
            Trip Planner
          </div>
          <h2
            style={{
              fontSize: "clamp(32px, 4.5vw, 52px)",
              fontWeight: 600,
              margin: "0 0 12px",
              letterSpacing: "-0.02em",
              color: "var(--cream)",
            }}
          >
            Tu viaje,{" "}
            <span
              style={{
                fontFamily: "var(--f-display)",
                color: "var(--amber)",
                fontWeight: 400,
                paddingLeft: 8,
              }}
            >
              armado en minutos
            </span>
          </h2>
          <p style={{ color: "var(--n-300)", fontSize: 17, lineHeight: 1.55, margin: 0 }}>
            Elegí las fiestas. Nosotros calculamos la ruta, las paradas, el combustible y hasta qué ropa llevar según el clima.
          </p>
        </div>

        {/* Mapa + autito animado */}
        <div
          style={{
            background: "#16305C",
            borderRadius: "var(--r-lg)",
            overflow: "hidden",
            position: "relative",
            boxShadow: "0 24px 60px rgba(0,0,0,.3)",
            marginBottom: 48,
          }}
        >
          <svg viewBox="0 0 800 360" style={{ width: "100%", height: "auto", display: "block" }} aria-hidden>
            <rect width="800" height="360" fill="#16305C" />
            <path
              d="M 360 30 Q 380 20 400 32 L 410 60 Q 430 72 425 100 L 440 140 Q 455 175 440 210 L 450 260 Q 440 290 420 310 L 400 335 Q 385 348 370 335 L 355 320 Q 345 290 350 260 L 335 220 Q 325 185 340 150 L 335 120 Q 340 85 355 60 Z"
              fill="rgba(191,224,244,.08)"
              stroke="rgba(191,224,244,.3)"
              strokeWidth="1.5"
            />
            {[
              { x: 380, y: 60, name: "Jujuy", c: "#C2502E" },
              { x: 395, y: 115, name: "Córdoba", c: "#A06A2C" },
              { x: 355, y: 145, name: "Mendoza", c: "#7A2E3F" },
              { x: 425, y: 170, name: "Areco", c: "#B8A24B" },
              { x: 440, y: 155, name: "Misiones", c: "#6B8E3D" },
              { x: 380, y: 280, name: "Bariloche", c: "#1E3F6E" },
            ].map((p, i) => (
              <g key={i}>
                <circle cx={p.x} cy={p.y} r="14" fill={p.c} opacity=".25">
                  <animate attributeName="r" values="14;22;14" dur="3s" begin={`${i * 0.4}s`} repeatCount="indefinite" />
                </circle>
                <circle cx={p.x} cy={p.y} r="6" fill={p.c} stroke="white" strokeWidth="2" />
                <text x={p.x + 12} y={p.y + 4} fontSize="11" fill="rgba(251,246,236,.8)" fontFamily="Inter">
                  {p.name}
                </text>
              </g>
            ))}
            <path
              id="ruta"
              d="M 380 60 Q 360 90 395 115 Q 420 130 355 145 Q 350 160 425 170 Q 430 165 440 155 Q 410 220 380 280"
              stroke="#F4B83E"
              strokeWidth="3"
              fill="none"
              strokeDasharray="6 6"
              strokeLinecap="round"
            />
            <g>
              <animateMotion dur="14s" repeatCount="indefinite" rotate="auto">
                <mpath href="#ruta" />
              </animateMotion>
              <g transform="translate(-22,-15) scale(0.4)">
                <ellipse cx="60" cy="76" rx="44" ry="4" fill="#000" opacity=".18" />
                <path
                  d="M10 60 Q 8 44 24 42 L 32 32 Q 38 22 50 22 L 78 22 Q 88 22 94 30 L 102 42 Q 112 44 112 56 L 112 64 Q 112 68 108 68 L 100 68 Q 98 76 90 76 Q 82 76 80 68 L 42 68 Q 40 76 32 76 Q 24 76 22 68 L 14 68 Q 10 68 10 64 Z"
                  fill="#F4B83E"
                  stroke="#0E1E3A"
                  strokeWidth="2.4"
                />
                <path
                  d="M34 42 Q 38 28 50 28 L 76 28 Q 86 28 92 36 L 96 42 Z"
                  fill="#BFE0F4"
                  stroke="#0E1E3A"
                  strokeWidth="2.4"
                />
                <circle cx="32" cy="68" r="9" fill="#0E1E3A" />
                <circle cx="90" cy="68" r="9" fill="#0E1E3A" />
              </g>
            </g>
          </svg>

          {/* bubble informativo flotante */}
          <div
            style={{
              position: "absolute",
              top: 30,
              right: 30,
              background: "white",
              color: "var(--ink)",
              padding: "14px 18px",
              borderRadius: 14,
              boxShadow: "var(--sh-pop)",
              minWidth: 200,
              animation: "bubble-float 3s ease-in-out infinite",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
              <div style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--amber)" }} />
              <span className="t-eyebrow" style={{ color: "var(--amber)", fontSize: 10 }}>
                Próxima parada
              </span>
            </div>
            <div
              style={{
                fontFamily: "var(--f-serif)",
                fontSize: 18,
                fontWeight: 600,
                color: "var(--ink)",
                marginBottom: 4,
              }}
            >
              YPF Ruta 40
            </div>
            <div className="t-mono" style={{ fontSize: 12, color: "var(--n-600)" }}>
              en 87 km · ~ 1h 12min
            </div>
          </div>
        </div>

        {/* steps */}
        <div className="cf-steps" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }}>
          {STEPS.map((s, i) => {
            const active = step === i;
            return (
              <div
                key={s.n}
                style={{
                  background: active ? "rgba(244,184,62,.12)" : "rgba(255,255,255,.05)",
                  borderRadius: 14,
                  padding: 24,
                  transition: "all .3s ease",
                  borderWidth: 1,
                  borderStyle: "solid",
                  borderColor: active ? "rgba(244,184,62,.3)" : "rgba(255,255,255,.08)",
                }}
              >
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: "50%",
                    background: active ? "var(--amber)" : "rgba(255,255,255,.1)",
                    color: active ? "var(--ink)" : "var(--cream)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "var(--f-serif)",
                    fontWeight: 700,
                    fontSize: 18,
                    marginBottom: 14,
                    transition: "all .3s",
                  }}
                >
                  {s.n}
                </div>
                <h4
                  style={{
                    fontFamily: "var(--f-serif)",
                    fontSize: 18,
                    fontWeight: 600,
                    color: "var(--cream)",
                    margin: "0 0 6px",
                  }}
                >
                  {s.t}
                </h4>
                <p style={{ fontSize: 13.5, color: "var(--n-300)", lineHeight: 1.55, margin: 0 }}>{s.d}</p>
              </div>
            );
          })}
        </div>

        <div style={{ textAlign: "center", marginTop: 48 }}>
          <a href="/planner" className="btn btn-primary">
            Probá el Trip Planner <ArrowIcon size={16} color="var(--ink)" />
          </a>
        </div>
      </div>
    </section>
  );
}
