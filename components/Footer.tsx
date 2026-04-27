import * as React from "react";
import { Sun } from "./Decorative";

const provincias = [
  "Buenos Aires", "CABA", "Catamarca", "Chaco", "Chubut", "Córdoba",
  "Corrientes", "Entre Ríos", "Formosa", "Jujuy", "La Pampa", "La Rioja",
  "Mendoza", "Misiones", "Neuquén", "Río Negro", "Salta", "San Juan",
  "San Luis", "Santa Cruz", "Santa Fe", "Sgo. del Estero", "T. del Fuego", "Tucumán",
];
const tipos = [
  "Carnavales", "Vendimias", "Folklóricas", "Gauchas", "Andinas",
  "Inmigración", "Artesanales", "Religiosas", "Patronales",
];
const meses = [
  "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
  "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre",
];

const linkStyle: React.CSSProperties = {
  color: "var(--n-300)",
  fontSize: 13,
  cursor: "pointer",
};
const headStyle: React.CSSProperties = {
  fontFamily: "var(--f-serif)",
  fontSize: 16,
  color: "var(--cream)",
  margin: "0 0 14px",
  fontWeight: 600,
};

export function Footer() {
  return (
    <footer
      style={{
        background: "var(--ink)",
        color: "var(--cream)",
        padding: "64px 0 24px",
        marginTop: 80,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div className="container-fr">
        <div
          className="footer-top"
          style={{
            display: "grid",
            gridTemplateColumns: "1.4fr 1fr 1fr 1fr",
            gap: 48,
            paddingBottom: 48,
            borderBottom: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <div style={{ maxWidth: 360 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
              <Sun size={36} color="var(--amber)" />
              <span style={{ fontFamily: "var(--f-display)", fontSize: 30, color: "var(--cream)" }}>
                FiestasAR
              </span>
            </div>
            <p style={{ color: "var(--n-200)", lineHeight: 1.6, fontSize: 14, margin: 0 }}>
              Todas las fiestas populares de Argentina, en un solo lugar. Planificá tu viaje, descubrí pueblos y viví lo nuestro.
            </p>
            <div style={{ display: "flex", gap: 10, marginTop: 18 }}>
              {["IG", "FB", "TW", "YT"].map((s) => (
                <a
                  key={s}
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.08)",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 11,
                    fontWeight: 600,
                    color: "var(--cream)",
                    cursor: "pointer",
                  }}
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 style={headStyle}>Por provincia</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              {provincias.map((p) => (
                <a key={p} style={linkStyle}>{p}</a>
              ))}
            </div>
          </div>

          <div>
            <h4 style={headStyle}>Por tipo</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              {tipos.map((t) => (
                <a key={t} style={linkStyle}>{t}</a>
              ))}
            </div>
          </div>

          <div>
            <h4 style={headStyle}>Por mes</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              {meses.map((m) => (
                <a key={m} style={linkStyle}>{m}</a>
              ))}
            </div>
          </div>
        </div>

        <div
          style={{
            paddingTop: 24,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 16,
            flexWrap: "wrap",
            color: "var(--n-300)",
            fontSize: 13,
          }}
        >
          <span>© 2026 FiestasAR — Hecho con cariño en Argentina</span>
          <div style={{ display: "flex", gap: 18, flexWrap: "wrap" }}>
            <a style={linkStyle}>Sobre nosotros</a>
            <a style={linkStyle}>Términos</a>
            <a style={linkStyle}>Privacidad</a>
            <a style={linkStyle}>Créditos de fotos</a>
            <a style={linkStyle}>Contacto</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
