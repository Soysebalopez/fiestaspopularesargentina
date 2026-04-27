import * as React from "react";
import Link from "next/link";
import type { Fiesta, FiestaDetail } from "@/lib/data";
import { CalendarIcon, PinIcon, ShareIcon } from "./Icons";

const F = {
  hero: {
    position: "relative" as const,
    minHeight: 560,
    display: "flex",
    alignItems: "flex-end",
    paddingBottom: 80,
    overflow: "hidden",
    color: "white",
  },
  heroBg: { position: "absolute" as const, inset: 0, zIndex: 0 },
  heroContent: { position: "relative" as const, zIndex: 2, paddingTop: 80 },
  h1: {
    fontFamily: "var(--f-serif)",
    fontSize: "clamp(40px, 6vw, 84px)",
    fontWeight: 600,
    lineHeight: 1,
    letterSpacing: "-0.02em",
    margin: "0 0 20px",
    maxWidth: 920,
  },
  heroLead: {
    fontSize: "clamp(16px, 1.6vw, 21px)",
    lineHeight: 1.55,
    color: "rgba(255,255,255,.88)",
    maxWidth: 680,
    margin: 0,
  },
  heroMeta: {
    display: "flex",
    gap: 24,
    marginTop: 28,
    flexWrap: "wrap" as const,
    fontSize: 14,
    color: "rgba(255,255,255,.92)",
  },
  body: { display: "grid", gridTemplateColumns: "1fr 340px", gap: 64, padding: "72px 24px" },
  sec: { padding: "40px 0", borderTop: "1px solid var(--n-200)" },
  eyebrow: {
    textTransform: "uppercase" as const,
    letterSpacing: ".12em",
    fontSize: 12,
    color: "var(--azure)",
    fontFamily: "var(--f-sans)",
    fontWeight: 600,
  },
  h2: {
    fontFamily: "var(--f-serif)",
    fontSize: "clamp(28px, 3.5vw, 44px)",
    fontWeight: 600,
    color: "var(--ink)",
    margin: "0 0 24px",
    lineHeight: 1.1,
  },
  p: { fontSize: 17, lineHeight: 1.7, color: "var(--n-700)", margin: "0 0 16px" },
  pLarge: {
    fontSize: 19,
    lineHeight: 1.6,
    color: "var(--n-800)",
    margin: "0 0 16px",
    fontFamily: "var(--f-serif)",
    fontWeight: 400,
  },
  quote: {
    fontFamily: "var(--f-serif)",
    fontStyle: "italic" as const,
    fontSize: 22,
    color: "var(--ink)",
    borderLeft: "3px solid var(--amber)",
    paddingLeft: 24,
    margin: "32px 0",
    lineHeight: 1.4,
  },
  timeline: { position: "relative" as const, paddingLeft: 24 },
  tlItem: {
    position: "relative" as const,
    paddingBottom: 32,
    paddingLeft: 32,
    borderLeft: "2px solid var(--n-200)",
  },
  tlDot: {
    position: "absolute" as const,
    left: -9,
    top: 6,
    width: 16,
    height: 16,
    borderRadius: "50%",
    background: "var(--r-cuyo)",
    border: "3px solid var(--cream)",
  },
  gallery: { display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8 },
  gItem: {
    position: "relative" as const,
    aspectRatio: "4/3",
    overflow: "hidden",
    borderRadius: 8,
    margin: 0,
    background: "var(--n-100)",
  },
  credit: {
    position: "absolute" as const,
    bottom: 0,
    left: 0,
    right: 0,
    padding: "20px 12px 8px",
    background: "linear-gradient(transparent, rgba(0,0,0,.7))",
    color: "white",
    fontSize: 11,
    fontFamily: "var(--f-sans)",
  },
  table: { width: "100%", borderCollapse: "collapse" as const, fontSize: 14 },
  afiGrid: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginTop: 8 },
  afiCard: {
    background: "white",
    border: "1px solid var(--n-200)",
    borderRadius: 12,
    padding: "18px 20px",
    cursor: "pointer",
    display: "block",
    transition: "border-color .2s",
  },
  aside: {
    display: "flex" as const,
    flexDirection: "column" as const,
    gap: 20,
    position: "sticky" as const,
    top: 90,
    alignSelf: "start" as const,
  },
  asideCard: {
    background: "white",
    borderRadius: "var(--r-lg)",
    padding: 24,
    boxShadow: "var(--sh-card)",
  },
  asideH: {
    fontFamily: "var(--f-serif)",
    fontSize: 18,
    fontWeight: 600,
    color: "var(--ink)",
    margin: "0 0 16px",
  },
  checkList: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    display: "flex",
    flexDirection: "column" as const,
    gap: 14,
  },
  checkItem: { display: "flex", alignItems: "flex-start" },
  related: {
    display: "flex",
    justifyContent: "space-between",
    padding: "12px 0",
    borderBottom: "1px solid var(--n-100)",
    fontSize: 13.5,
    color: "var(--ink)",
    cursor: "pointer",
  },
};

type Props = { fiesta: Fiesta; detail: FiestaDetail };

export function FichaFiesta({ fiesta, detail }: Props) {
  return (
    <>
      {/* Hero ficha */}
      <section style={F.hero}>
        <div style={F.heroBg}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={fiesta.img.replace("w=1200", "w=2000")}
            alt=""
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(180deg, rgba(14,30,58,.2), rgba(14,30,58,.85))",
            }}
          />
        </div>
        <div className="container-fr" style={F.heroContent}>
          <div style={{ display: "flex", gap: 8, marginBottom: 18, flexWrap: "wrap" }}>
            <span
              className="chip"
              style={{ background: fiesta.color, color: "white", borderColor: fiesta.color }}
            >
              {fiesta.region} · {fiesta.provincia}
            </span>
            <span
              className="chip"
              style={{
                background: "rgba(255,255,255,.15)",
                color: "white",
                borderColor: "rgba(255,255,255,.3)",
              }}
            >
              {fiesta.tipo}
            </span>
            {fiesta.badge && (
              <span
                className="chip"
                style={{ background: "var(--amber)", color: "var(--ink)", borderColor: "var(--amber)" }}
              >
                ★ {fiesta.badge}
              </span>
            )}
          </div>

          <h1 style={F.h1}>
            {fiesta.nombre.split(" ").slice(0, -1).join(" ")}{" "}
            <span style={{ fontFamily: "var(--f-display)", fontWeight: 400, color: "var(--amber)" }}>
              {fiesta.nombre.split(" ").slice(-1)}
            </span>
          </h1>

          <p style={F.heroLead}>{fiesta.short}</p>

          <div style={F.heroMeta}>
            <div>
              <CalendarIcon size={18} color="var(--amber)" /> <span className="t-mono">{fiesta.fecha}</span>
            </div>
            <div>
              <PinIcon size={18} color="var(--amber)" /> {fiesta.provincia}
            </div>
            <div>★ Desde {fiesta.desde}</div>
            <div>{fiesta.asistentes} asistentes</div>
          </div>

          <div style={{ display: "flex", gap: 10, marginTop: 28, flexWrap: "wrap" }}>
            <Link href="/planner" className="btn btn-primary">
              <PinIcon size={16} /> Sumar a mi viaje
            </Link>
            <a
              className="btn"
              style={{
                background: "rgba(255,255,255,.1)",
                color: "white",
                backdropFilter: "blur(10px)",
              }}
            >
              <ShareIcon size={16} color="white" /> Compartir
            </a>
          </div>
        </div>
      </section>

      <div className="container-fr ficha-body" style={F.body}>
        {/* main column */}
        <div>
          {/* El qué */}
          <section style={F.sec}>
            <h2 style={F.h2}>
              <span style={F.eyebrow}>Sobre la fiesta</span>
              <br />
              El qué.
            </h2>
            {detail.acerca.map((p, i) => (
              <p key={i} style={F.p} dangerouslySetInnerHTML={{ __html: p }} />
            ))}
          </section>

          {/* Cronograma */}
          <section style={F.sec}>
            <h2 style={F.h2}>
              <span style={F.eyebrow}>Día por día</span>
              <br />
              Cronograma.
            </h2>
            <div style={F.timeline}>
              {detail.cronograma.map((c, i) => (
                <div key={i} style={F.tlItem}>
                  <div style={F.tlDot} />
                  <div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "baseline",
                        gap: 12,
                        flexWrap: "wrap",
                      }}
                    >
                      <div
                        className="t-mono"
                        style={{ fontSize: 13, color: "var(--r-cuyo)", fontWeight: 600 }}
                      >
                        {c.dia} · {c.hora}
                      </div>
                    </div>
                    <h3
                      style={{
                        fontFamily: "var(--f-serif)",
                        fontSize: 22,
                        fontWeight: 600,
                        margin: "4px 0 6px",
                        color: "var(--ink)",
                      }}
                    >
                      {c.titulo}
                    </h3>
                    <div
                      style={{
                        fontSize: 13,
                        color: "var(--n-500)",
                        marginBottom: 8,
                        display: "flex",
                        alignItems: "center",
                        gap: 6,
                      }}
                    >
                      <PinIcon size={13} /> {c.lugar}
                    </div>
                    <p style={{ fontSize: 14.5, lineHeight: 1.6, color: "var(--n-700)", margin: 0 }}>
                      {c.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Galería */}
          <section style={F.sec}>
            <h2 style={F.h2}>
              <span style={F.eyebrow}>Galería</span>
              <br />
              Cómo se ve.
            </h2>
            <div style={F.gallery}>
              {detail.galeria.map((g, i) => (
                <figure
                  key={i}
                  style={{ ...F.gItem, gridColumn: g.span === 2 ? "span 2" : "span 1" }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={g.src}
                    alt=""
                    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                  />
                  <figcaption style={F.credit}>{g.credit}</figcaption>
                </figure>
              ))}
            </div>
          </section>

          {/* Historia */}
          <section style={F.sec}>
            <h2 style={F.h2}>
              <span style={F.eyebrow}>Origen y memoria</span>
              <br />
              Historia.
            </h2>
            <div>
              {detail.historia.map((p, i) => (
                <p
                  key={i}
                  style={i === 0 ? F.pLarge : F.p}
                  dangerouslySetInnerHTML={{ __html: p }}
                />
              ))}
              {detail.cita && (
                <blockquote style={F.quote}>
                  &ldquo;{detail.cita.texto}&rdquo;
                  <cite style={{ display: "block", marginTop: 8, fontSize: 14, fontStyle: "normal" }}>
                    — {detail.cita.autor}
                  </cite>
                </blockquote>
              )}
            </div>
          </section>

          {/* Cómo llegar */}
          <section style={F.sec}>
            <h2 style={F.h2}>
              <span style={F.eyebrow}>Logística</span>
              <br />
              Cómo llegar.
            </h2>
            <div style={{ overflowX: "auto" }}>
              <table className="ficha-table" style={F.table}>
                <thead>
                  <tr>
                    <th>Desde</th>
                    <th>Distancia</th>
                    <th>En auto</th>
                    <th>Avión</th>
                    <th>Bus</th>
                  </tr>
                </thead>
                <tbody>
                  {detail.comoLlegar.map((c, i) => (
                    <tr key={i}>
                      <td style={{ fontWeight: 600 }}>{c.ciudad}</td>
                      <td className="t-mono">{c.km} km</td>
                      <td className="t-mono">{c.auto}</td>
                      <td className="t-mono">{c.avion}</td>
                      <td className="t-mono">{c.bus}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Dónde dormir (afiliados) */}
          <section style={F.sec}>
            <h2 style={F.h2}>
              <span style={F.eyebrow}>Hospedaje</span>
              <br />
              Dónde dormir.
            </h2>
            <p style={F.p}>
              Las fechas de {fiesta.nombre} se llenan rápido. Estos son los partners que recomendamos:
            </p>
            <div style={F.afiGrid}>
              {detail.hospedaje.map((h, i) => (
                <a key={i} style={F.afiCard}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                    }}
                  >
                    <div>
                      <div
                        style={{
                          fontFamily: "var(--f-serif)",
                          fontSize: 17,
                          fontWeight: 600,
                          color: "var(--ink)",
                        }}
                      >
                        {h.name}
                      </div>
                      <div style={{ fontSize: 12, color: "var(--n-500)", marginTop: 4 }}>
                        <PinIcon size={12} /> {h.zona} · {h.rango}
                      </div>
                    </div>
                    <span className="chip" style={{ fontSize: 10 }}>
                      ↗ Booking
                    </span>
                  </div>
                  <div
                    style={{
                      marginTop: 14,
                      paddingTop: 14,
                      borderTop: "1px solid var(--n-200)",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <span style={{ fontSize: 11, color: "var(--n-500)" }}>Desde</span>
                    <span
                      className="t-mono"
                      style={{ fontSize: 15, fontWeight: 600, color: "var(--ink)" }}
                    >
                      {h.desde}/noche
                    </span>
                  </div>
                </a>
              ))}
            </div>
            <p style={{ fontSize: 11, color: "var(--n-500)", marginTop: 8 }}>
              ↗ Links externos. FiestasAR puede recibir una comisión por reservas confirmadas.
            </p>
          </section>
        </div>

        {/* sidebar */}
        <aside style={F.aside}>
          <div style={F.asideCard}>
            <h3 style={F.asideH}>Qué llevar</h3>
            <ul style={F.checkList}>
              {detail.queLlevar.map((q, i) => (
                <li key={i} style={F.checkItem}>
                  <span style={{ fontSize: 18, marginRight: 10 }} aria-hidden>
                    {q.emoji}
                  </span>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 600, color: "var(--ink)" }}>{q.label}</div>
                    <div style={{ fontSize: 12, color: "var(--n-500)", marginTop: 2 }}>{q.why}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div style={{ ...F.asideCard, background: "var(--ink)", color: "var(--cream)" }}>
            <h3 style={{ ...F.asideH, color: "var(--cream)" }}>Sumá a tu viaje</h3>
            <p
              style={{
                fontSize: 14,
                color: "var(--n-300)",
                lineHeight: 1.55,
                margin: "0 0 16px",
              }}
            >
              ¿Querés combinarla con otras fiestas del calendario? El Trip Planner arma la ruta en
              segundos.
            </p>
            <Link
              href="/planner"
              className="btn btn-primary"
              style={{ width: "100%", justifyContent: "center" }}
            >
              <PinIcon size={16} /> Armar mi viaje
            </Link>
          </div>

          <div style={F.asideCard}>
            <h3 style={F.asideH}>Fiestas cercanas</h3>
            {detail.cercanas.map((r, i) => (
              <a key={i} style={F.related}>
                <strong>{r.nombre}</strong>
                <span>{r.lugar}</span>
              </a>
            ))}
          </div>
        </aside>
      </div>
    </>
  );
}
