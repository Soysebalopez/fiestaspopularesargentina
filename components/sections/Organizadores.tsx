import * as React from "react";
import { Autito, BrushStroke, Sun } from "../Decorative";

export function Organizadores() {
  return (
    <section style={{ padding: "var(--pad-section, 80px) 0", position: "relative", overflow: "hidden" }}>
      <div className="container-fr">
        <div
          style={{
            background: "var(--ink)",
            borderRadius: "var(--r-2xl)",
            padding: "56px 48px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 32,
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div style={{ position: "absolute", right: -50, top: -50 }}>
            <Sun size={200} rays={12} color="rgba(244,184,62,.15)" spin />
          </div>

          <div style={{ position: "relative", zIndex: 2, maxWidth: 540 }}>
            <div className="t-eyebrow" style={{ color: "var(--amber)", marginBottom: 12 }}>
              ¿Organizás una fiesta?
            </div>
            <h2
              style={{
                fontSize: "clamp(28px, 4vw, 44px)",
                fontFamily: "var(--f-serif)",
                fontWeight: 600,
                color: "var(--cream)",
                margin: "0 0 16px",
                lineHeight: 1.1,
              }}
            >
              Sumá tu fiesta al mapa de Argentina,{" "}
              <span
                style={{
                  fontFamily: "var(--f-display)",
                  color: "var(--amber)",
                  fontWeight: 400,
                }}
              >
                gratis.
              </span>
            </h2>
            <p style={{ color: "var(--n-300)", fontSize: 16, lineHeight: 1.6, margin: "0 0 24px" }}>
              Para municipios, secretarías de turismo y comisiones de fiestas. Cargá fechas, programa, cómo llegar, contactos. Visibilidad nacional, herramientas claras, panel sin vueltas.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a className="btn btn-primary">Sumar mi fiesta</a>
              <a
                className="btn"
                style={{
                  background: "transparent",
                  color: "var(--cream)",
                  border: "1.5px solid var(--n-300)",
                }}
              >
                Cómo funciona
              </a>
            </div>
          </div>

          <div className="hide-mobile" style={{ position: "relative", flexShrink: 0 }}>
            <div style={{ position: "relative" }}>
              <Autito size={140} />
              <BrushStroke
                color="var(--amber)"
                width={180}
                height={20}
                style={{
                  position: "absolute",
                  bottom: -20,
                  left: -10,
                  width: 180,
                  height: 20,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
