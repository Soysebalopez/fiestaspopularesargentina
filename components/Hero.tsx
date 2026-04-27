"use client";

import * as React from "react";
import { Sun, BrushStroke, Confetti, PaperPlane, HeartHand } from "./Decorative";
import { HeartIcon, PinIcon, SearchIcon, SparkleIcon } from "./Icons";

const provincias = [
  "Todas", "Mendoza", "Jujuy", "Córdoba", "Misiones", "Salta",
  "Buenos Aires", "Entre Ríos", "Río Negro",
];
const meses = [
  "Cualquier mes", "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
  "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre",
];

export function Hero() {
  const [q, setQ] = React.useState("");
  const [prov, setProv] = React.useState("Todas");
  const [mes, setMes] = React.useState("Cualquier mes");

  const onSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (typeof window !== "undefined") window.location.hash = "#fiestas";
  };

  return (
    <section style={{ position: "relative", overflow: "hidden", paddingTop: 32, paddingBottom: 100 }}>
      {/* fondo cielo */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(180deg, #E9F3FB 0%, #FBF6EC 60%, #FBF6EC 100%)",
          zIndex: 0,
        }}
      />

      {/* avión decorativo */}
      <div
        className="hide-tablet"
        style={{ position: "absolute", top: 60, left: "6%", zIndex: 5, transform: "rotate(-18deg)" }}
      >
        <PaperPlane size={48} />
        <svg width="120" height="60" style={{ position: "absolute", top: 8, left: -90 }} aria-hidden>
          <path
            d="M2 50 Q 40 10 110 18"
            stroke="#0E1E3A"
            strokeWidth="1.5"
            strokeDasharray="4 4"
            fill="none"
          />
        </svg>
      </div>

      {/* sol grande con rayos */}
      <div style={{ position: "absolute", top: -30, right: "14%", zIndex: 1 }}>
        <Sun size={180} rays={12} color="#F4B83E" spin />
      </div>

      {/* guirnaldas */}
      <svg
        className="brush hide-tablet"
        style={{ position: "absolute", top: 30, right: 0, width: 380, height: 120, zIndex: 3 }}
        viewBox="0 0 380 120"
        aria-hidden
      >
        <path d="M5 20 Q 100 90 200 60 T 375 30" stroke="#0E1E3A" strokeWidth="1.5" fill="none" />
        {[20, 55, 90, 125, 160, 195, 230, 265, 300, 335].map((x, i) => {
          const colors = ["#2B7BD6", "#F4B83E", "#FFFFFF"];
          const c = colors[i % 3];
          const y = 30 + Math.abs(Math.sin(i * 0.7)) * 30;
          return (
            <polygon
              key={i}
              points={`${x},${y} ${x + 18},${y} ${x + 9},${y + 22}`}
              fill={c}
              stroke="#0E1E3A"
              strokeWidth="1"
            />
          );
        })}
      </svg>

      <div
        className="container-fr hero-grid"
        style={{
          position: "relative",
          zIndex: 2,
          display: "grid",
          gridTemplateColumns: "1fr 1.2fr 1fr",
          gap: 24,
          alignItems: "center",
          minHeight: 540,
        }}
      >
        {/* foto izquierda */}
        <div
          className="hide-tablet"
          style={{ position: "relative", height: 460, borderRadius: "24px 4px 24px 4px" }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=900&auto=format&fit=crop"
            alt=""
            style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "24px 4px 24px 4px" }}
          />
          <div
            className="brush"
            style={{
              position: "absolute",
              top: 30,
              right: -20,
              transform: "rotate(8deg)",
              fontFamily: "var(--f-hand)",
              fontSize: 18,
              color: "var(--ink)",
              textAlign: "center",
              lineHeight: 1.25,
            }}
          >
            Cada fiesta<br />
            una historia,<br />
            cada lugar<br />
            <span style={{ color: "var(--azure)" }}>una emoción.</span>
            <HeartHand size={20} color="var(--azure)" fill="#fff" />
          </div>
        </div>

        {/* foto derecha */}
        <div
          className="hide-tablet"
          style={{ position: "relative", height: 460, borderRadius: "4px 24px 4px 24px" }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=900&auto=format&fit=crop"
            alt=""
            style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "4px 24px 4px 24px" }}
          />
          <Confetti
            style={{ position: "absolute", top: -20, left: -30, width: 160, height: 160 }}
            count={20}
          />
        </div>

        {/* contenido central */}
        <div style={{ position: "relative", zIndex: 5, textAlign: "center", padding: "0 12px" }}>
          <div className="t-eyebrow" style={{ color: "var(--ink-soft)", marginBottom: 8 }}>
            ✦ Portal turístico ✦
          </div>

          <h1
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 0,
              margin: "0 0 16px",
              lineHeight: 0.85,
            }}
          >
            <span
              style={{
                fontFamily: "var(--f-display)",
                fontWeight: 400,
                fontSize: "clamp(56px, 9vw, 110px)",
                color: "var(--ink)",
                transform: "rotate(-2deg)",
              }}
            >
              Fiestas
            </span>
            <span
              style={{
                fontFamily: "var(--f-display)",
                fontWeight: 400,
                fontSize: "clamp(56px, 9vw, 110px)",
                color: "var(--azure)",
                transform: "rotate(1deg)",
                marginTop: -12,
              }}
            >
              Populares
            </span>
            <span
              style={{
                fontFamily: "var(--f-display)",
                fontWeight: 400,
                fontSize: "clamp(36px, 5.5vw, 64px)",
                color: "var(--ink)",
                transform: "rotate(-1deg)",
                marginTop: -8,
              }}
            >
              Argentinas
            </span>
          </h1>

          {/* tagline en banda turquesa con pincelada */}
          <div
            style={{
              position: "relative",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              minWidth: 380,
              height: 50,
              margin: "8px auto 0",
            }}
          >
            <BrushStroke
              color="var(--teal)"
              width={420}
              height={50}
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
            />
            <span
              style={{
                position: "relative",
                color: "white",
                fontFamily: "var(--f-hand)",
                fontSize: 22,
                fontWeight: 600,
                padding: "0 24px",
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
              }}
            >
              Viajá. Descubrí. Sentí lo nuestro. <HeartIcon size={16} color="white" />
            </span>
          </div>

          {/* buscador */}
          <form
            onSubmit={onSearch}
            style={{
              display: "flex",
              gap: 8,
              marginTop: 28,
              padding: 8,
              background: "white",
              borderRadius: "var(--r-pill)",
              boxShadow: "var(--sh-card)",
              maxWidth: 680,
              marginLeft: "auto",
              marginRight: "auto",
              flexWrap: "wrap",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                flex: "2 1 240px",
                padding: "0 16px",
                minWidth: 160,
              }}
            >
              <SearchIcon size={18} color="var(--ink-soft)" />
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="¿Qué fiesta querés vivir?"
                style={{
                  border: "none",
                  outline: "none",
                  flex: 1,
                  fontSize: 15,
                  fontFamily: "var(--f-sans)",
                  background: "transparent",
                  color: "var(--ink)",
                }}
              />
            </div>
            <select
              value={prov}
              onChange={(e) => setProv(e.target.value)}
              style={{
                border: "none",
                outline: "none",
                background: "var(--n-50)",
                borderRadius: "var(--r-pill)",
                padding: "0 16px",
                fontSize: 14,
                color: "var(--ink)",
                fontFamily: "var(--f-sans)",
                cursor: "pointer",
              }}
            >
              {provincias.map((p) => (
                <option key={p}>{p}</option>
              ))}
            </select>
            <select
              value={mes}
              onChange={(e) => setMes(e.target.value)}
              className="hide-mobile"
              style={{
                border: "none",
                outline: "none",
                background: "var(--n-50)",
                borderRadius: "var(--r-pill)",
                padding: "0 16px",
                fontSize: 14,
                color: "var(--ink)",
                fontFamily: "var(--f-sans)",
                cursor: "pointer",
              }}
            >
              {meses.map((m) => (
                <option key={m}>{m}</option>
              ))}
            </select>
            <button type="submit" className="btn btn-primary">
              Buscar
            </button>
          </form>

          <div
            style={{
              display: "flex",
              gap: 12,
              marginTop: 18,
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <a href="#fiestas" className="btn btn-dark">
              <SparkleIcon size={16} color="var(--cream)" />
              Explorar fiestas
            </a>
            <a href="/planner" className="btn btn-ghost">
              <PinIcon size={16} />
              Armar mi viaje
            </a>
          </div>
        </div>
      </div>

      {/* polaroids inferiores con ruta punteada */}
      <div className="hide-tablet" style={{ marginTop: 20, position: "relative", zIndex: 2 }}>
        <div className="container-fr" style={{ position: "relative" }}>
          <svg
            style={{ position: "absolute", left: "42%", top: 30, width: 400, height: 60, zIndex: 1 }}
            viewBox="0 0 400 60"
            aria-hidden
          >
            <path
              d="M0 30 Q 100 -10 200 30 T 400 30"
              stroke="var(--ink)"
              strokeWidth="1.5"
              strokeDasharray="3 5"
              fill="none"
            />
          </svg>
          <div
            style={{
              position: "absolute",
              left: "42%",
              top: 8,
              fontFamily: "var(--f-hand)",
              fontSize: 18,
              color: "var(--ink)",
              maxWidth: 200,
            }}
          >
            <PinIcon size={16} color="var(--ink)" /> De norte a sur, nuestras fiestas{" "}
            <span style={{ color: "var(--azure)", borderBottom: "2px solid var(--azure)" }}>
              nos unen.
            </span>
          </div>
          <div style={{ display: "flex", gap: 18, justifyContent: "flex-start", maxWidth: 560 }}>
            <div className="polaroid" style={{ transform: "rotate(-6deg)", width: 180 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1568111561564-08726a1563e8?w=600&auto=format&fit=crop"
                alt="Cataratas"
              />
              <div className="caption">
                Misiones <HeartIcon size={12} color="var(--teal)" fill="var(--teal)" />
              </div>
            </div>
            <div className="polaroid" style={{ transform: "rotate(2deg)", marginTop: 20, width: 180 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=600&auto=format&fit=crop"
                alt="Quebrada"
              />
              <div className="caption">
                Jujuy <HeartIcon size={12} color="var(--amber)" fill="var(--amber)" />
              </div>
            </div>
            <div className="polaroid" style={{ transform: "rotate(-3deg)", marginTop: 6, width: 180 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1574482620881-23a2da16cb02?w=600&auto=format&fit=crop"
                alt="Mendoza"
              />
              <div className="caption">
                Mendoza <HeartIcon size={12} color="var(--teal)" fill="var(--teal)" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE collage */}
      <div className="show-mobile" style={{ paddingBottom: 24 }}>
        <div className="container-fr">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8, marginTop: 24 }}>
            <div className="polaroid" style={{ transform: "rotate(-4deg)" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1568111561564-08726a1563e8?w=400&auto=format&fit=crop"
                alt=""
              />
              <div className="caption">Misiones</div>
            </div>
            <div className="polaroid" style={{ transform: "rotate(2deg)" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=400&auto=format&fit=crop"
                alt=""
              />
              <div className="caption">Jujuy</div>
            </div>
            <div className="polaroid" style={{ transform: "rotate(-2deg)" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1574482620881-23a2da16cb02?w=400&auto=format&fit=crop"
                alt=""
              />
              <div className="caption">Mendoza</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
