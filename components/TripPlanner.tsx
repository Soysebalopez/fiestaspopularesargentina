"use client";

import * as React from "react";
import { FIESTAS, TRIP_COORDS, type Fiesta } from "@/lib/data";
import {
  BedIcon,
  CalendarIcon,
  CloseIcon,
  ForkIcon,
  GasIcon,
  PinIcon,
  ShareIcon,
  SparkleIcon,
} from "./Icons";

type WaypointType = "gas" | "noche" | "comida" | "poi" | "fiesta";
type Bubble = {
  type: WaypointType;
  x: number;
  y: number;
  label: string;
  sub: string;
  color?: string;
};

const intermediateWaypoints: Bubble[] = [
  { type: "gas",    x: 340, y: 560, label: "YPF Eje Sur",          sub: "Tarifa Gas Plus" },
  { type: "noche",  x: 355, y: 610, label: "Hotel Llao Llao",      sub: "1 noche · USD 220" },
  { type: "comida", x: 480, y: 480, label: "Parador El Trapiche",  sub: "Cabrito al asador" },
  { type: "poi",    x: 410, y: 300, label: "Quebrada de las Conchas", sub: "Mirador 30 min" },
];

const wpColors: Record<WaypointType, string> = {
  gas: "#F5C443",
  noche: "#1E3F6E",
  comida: "#E07A2A",
  poi: "#4F9F6F",
  fiesta: "#2B7BD6",
};

const wpLabel: Record<WaypointType, string> = {
  fiesta: "Fiesta",
  gas: "Combustible",
  noche: "Pernocte",
  comida: "Parador",
  poi: "Punto de interés",
};

function WaypointIcon({ type, size = 14, color }: { type: WaypointType; size?: number; color: string }) {
  if (type === "gas") return <GasIcon size={size} color={color} />;
  if (type === "noche") return <BedIcon size={size} color={color} />;
  if (type === "comida") return <ForkIcon size={size} color={color} />;
  if (type === "poi") return <SparkleIcon size={size} color={color} />;
  return <PinIcon size={size} color={color} />;
}

export function TripPlanner() {
  const [origen, setOrigen] = React.useState("Buenos Aires");
  const [selectedSlugs, setSelectedSlugs] = React.useState<string[]>([
    "vendimia-mendoza",
    "cosquin-folklore",
    "pachamama-jujuy",
  ]);
  const [activeBubble, setActiveBubble] = React.useState<Bubble | null>({
    type: "gas",
    x: 340,
    y: 560,
    label: "YPF Eje Sur",
    sub: "87 km · Próxima parada",
  });
  const [showExport, setShowExport] = React.useState(false);

  const selected: Fiesta[] = selectedSlugs
    .map((s) => FIESTAS.find((f) => f.slug === s))
    .filter((f): f is Fiesta => Boolean(f));

  const toggle = (slug: string) => {
    setSelectedSlugs((prev) =>
      prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug],
    );
  };

  const buildPath = () => {
    if (selected.length === 0) return "";
    const start = { x: 540, y: 600 };
    const points = [start, ...selected.map((f) => TRIP_COORDS[f.slug]).filter(Boolean)];
    let d = `M ${points[0].x} ${points[0].y}`;
    for (let i = 1; i < points.length; i++) {
      const prev = points[i - 1];
      const curr = points[i];
      const cx = (prev.x + curr.x) / 2 + (i % 2 === 0 ? 30 : -30);
      const cy = (prev.y + curr.y) / 2;
      d += ` Q ${cx} ${cy} ${curr.x} ${curr.y}`;
    }
    return d;
  };

  const routePath = buildPath();
  const km = selected.length === 0 ? 0 : 980 + selected.length * 420;
  const dias = Math.max(1, selected.length * 3 + 2);
  const nafta = Math.round(km * 0.085);

  return (
    <div
      data-screen-label="03 Trip Planner"
      style={{ minHeight: "100vh", background: "var(--cream)" }}
    >
      <div
        className="tp-layout"
        style={{
          display: "grid",
          gridTemplateColumns: "380px 1fr",
          minHeight: "calc(100vh - 72px)",
        }}
      >
        {/* Sidebar izquierdo */}
        <aside
          className="tp-sidebar"
          style={{
            display: "flex",
            flexDirection: "column",
            background: "white",
            borderRight: "1px solid var(--n-100)",
            maxHeight: "calc(100vh - 72px)",
            position: "sticky",
            top: 72,
          }}
        >
          <div style={{ padding: "24px 24px 16px" }}>
            <div className="t-eyebrow" style={{ color: "var(--azure)", marginBottom: 8 }}>
              Tu itinerario
            </div>
            <h1
              style={{
                fontFamily: "var(--f-serif)",
                fontSize: 28,
                fontWeight: 600,
                margin: "0 0 4px",
                lineHeight: 1.1,
              }}
            >
              Viaje por{" "}
              <span style={{ fontFamily: "var(--f-display)", fontWeight: 400 }}>
                {selected.length} fiesta{selected.length === 1 ? "" : "s"}
              </span>
            </h1>
            <div className="t-mono" style={{ fontSize: 13, color: "var(--n-500)" }}>
              {km.toLocaleString("es-AR")} km · {dias} días · ~ ${(nafta * 1500).toLocaleString("es-AR")} en nafta
            </div>
          </div>

          {/* Origen */}
          <div style={{ padding: "12px 24px", borderBottom: "1px solid var(--n-100)" }}>
            <label style={labelStyle}>Salgo desde</label>
            <div style={inputWrapStyle}>
              <PinIcon size={16} color="var(--ink-soft)" />
              <input value={origen} onChange={(e) => setOrigen(e.target.value)} style={inputStyle} />
            </div>
          </div>

          {/* Lista de fiestas seleccionadas */}
          <div style={{ padding: "16px 24px", flex: 1, overflowY: "auto" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 12,
              }}
            >
              <label style={labelStyle}>Fiestas seleccionadas</label>
              <span className="t-mono" style={{ fontSize: 12, color: "var(--n-500)" }}>
                {selected.length} de 3000+
              </span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {selected.length === 0 && (
                <div
                  style={{
                    textAlign: "center",
                    padding: "32px 16px",
                    background: "var(--n-50)",
                    borderRadius: 12,
                    border: "1.5px dashed var(--n-200)",
                  }}
                >
                  <div style={{ fontSize: 32, marginBottom: 8 }} aria-hidden>
                    🎪
                  </div>
                  <p
                    style={{
                      fontSize: 13.5,
                      color: "var(--n-500)",
                      lineHeight: 1.5,
                      margin: "0 0 14px",
                    }}
                  >
                    Todavía no elegiste fiestas.
                    <br />
                    Tocá una en el mapa para sumarla.
                  </p>
                </div>
              )}
              {selected.map((f, i) => (
                <div
                  key={f.slug}
                  style={{
                    background: "var(--n-50)",
                    borderRadius: 10,
                    padding: "12px 14px",
                    border: "1px solid var(--n-100)",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                    <div
                      style={{
                        width: 24,
                        height: 24,
                        borderRadius: "50%",
                        background: f.color,
                        color: "white",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 12,
                        fontWeight: 700,
                        flexShrink: 0,
                      }}
                    >
                      {i + 1}
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div
                        style={{
                          fontFamily: "var(--f-serif)",
                          fontSize: 15,
                          fontWeight: 600,
                          color: "var(--ink)",
                          lineHeight: 1.2,
                        }}
                      >
                        {f.nombre}
                      </div>
                      <div
                        style={{
                          fontSize: 11,
                          color: "var(--n-500)",
                          marginTop: 3,
                          display: "flex",
                          alignItems: "center",
                          gap: 6,
                        }}
                      >
                        <CalendarIcon size={11} /> {f.fecha} · {f.provincia}
                      </div>
                    </div>
                    <button
                      onClick={() => toggle(f.slug)}
                      aria-label={`Quitar ${f.nombre}`}
                      style={{
                        background: "transparent",
                        border: "none",
                        padding: 4,
                        cursor: "pointer",
                        color: "var(--n-500)",
                        borderRadius: 6,
                      }}
                    >
                      <CloseIcon size={14} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Sugeridas */}
            <div style={{ marginTop: 24 }}>
              <label style={labelStyle}>Sugeridas en tu ruta</label>
              <div style={{ display: "flex", flexDirection: "column", gap: 6, marginTop: 10 }}>
                {FIESTAS.filter((f) => !selectedSlugs.includes(f.slug))
                  .slice(0, 3)
                  .map((f) => (
                    <button
                      key={f.slug}
                      onClick={() => toggle(f.slug)}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 10,
                        padding: "10px 12px",
                        background: "transparent",
                        border: "1px solid var(--n-200)",
                        borderRadius: 10,
                        cursor: "pointer",
                        textAlign: "left",
                        width: "100%",
                      }}
                    >
                      <div style={{ flex: 1, textAlign: "left" }}>
                        <div style={{ fontSize: 13, fontWeight: 500, color: "var(--ink)" }}>
                          {f.nombre}
                        </div>
                        <div style={{ fontSize: 11, color: "var(--n-500)" }}>
                          {f.provincia} · {f.fecha}
                        </div>
                      </div>
                      <span
                        style={{
                          width: 24,
                          height: 24,
                          borderRadius: "50%",
                          background: "var(--ink)",
                          color: "white",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: 14,
                          fontWeight: 600,
                          flexShrink: 0,
                        }}
                      >
                        +
                      </span>
                    </button>
                  ))}
              </div>
            </div>
          </div>

          {/* Resumen + acciones */}
          <div
            style={{
              padding: "18px 24px",
              borderTop: "1px solid var(--n-100)",
              background: "var(--cream)",
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3,1fr)",
                gap: 8,
                marginBottom: 14,
              }}
            >
              <Stat n={km.toLocaleString("es-AR")} l="km" />
              <Stat n={String(dias)} l="días" />
              <Stat n={`${nafta}L`} l="nafta" />
            </div>
            <button
              onClick={() => setShowExport(true)}
              className="btn btn-primary"
              style={{ width: "100%", justifyContent: "center" }}
            >
              <ShareIcon size={16} /> Exportar viaje
            </button>
          </div>
        </aside>

        {/* Mapa principal */}
        <main
          className="tp-map"
          style={{ position: "relative", overflow: "hidden", background: "#BFE0F4" }}
        >
          <div style={{ position: "absolute", inset: 0 }}>
            <svg viewBox="0 0 800 900" style={{ width: "100%", height: "100%", display: "block" }}>
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(43,123,214,.06)" strokeWidth="1" />
                </pattern>
                <radialGradient id="seaGrad" cx="50%" cy="50%">
                  <stop offset="0%" stopColor="#D8EAF7" />
                  <stop offset="100%" stopColor="#BFE0F4" />
                </radialGradient>
              </defs>
              <rect width="800" height="900" fill="url(#seaGrad)" />
              <rect width="800" height="900" fill="url(#grid)" />

              {/* Argentina simplificada */}
              <path
                d="M 350 60 Q 400 50 440 80 L 470 130 Q 490 170 480 220 L 510 270 Q 530 320 510 360 L 540 420 Q 560 480 540 540 L 570 600 Q 580 650 540 700 L 500 760 Q 460 810 420 830 L 380 850 Q 340 830 320 790 L 290 730 Q 270 670 290 620 L 270 560 Q 250 500 270 450 L 240 390 Q 230 330 260 280 L 250 220 Q 270 160 310 110 Z"
                fill="#FBF6EC"
                stroke="var(--ink)"
                strokeWidth="1.2"
              />

              <text
                x="400"
                y="450"
                textAnchor="middle"
                fontFamily="var(--f-display)"
                fontSize="42"
                fill="rgba(14,30,58,.06)"
                style={{ userSelect: "none" }}
              >
                Argentina
              </text>

              {/* Ruta animada */}
              {routePath && (
                <g>
                  <path
                    d={routePath}
                    stroke="var(--amber)"
                    strokeWidth="3.5"
                    fill="none"
                    strokeDasharray="8 6"
                    strokeLinecap="round"
                    opacity="0.85"
                  >
                    <animate
                      attributeName="stroke-dashoffset"
                      from="0"
                      to="-28"
                      dur="1s"
                      repeatCount="indefinite"
                    />
                  </path>
                  <path d={routePath} stroke="var(--amber)" strokeWidth="1" fill="none" opacity="0.3" />
                </g>
              )}

              {/* Origen */}
              <g>
                <circle cx="540" cy="600" r="14" fill="var(--ink)" stroke="white" strokeWidth="3" />
                <text x="560" y="604" fontSize="13" fill="var(--ink)" fontWeight="600">
                  Buenos Aires (origen)
                </text>
              </g>

              {/* Waypoints intermedios */}
              {intermediateWaypoints.map((w, i) => (
                <g key={i} style={{ cursor: "pointer" }} onClick={() => setActiveBubble(w)}>
                  <circle
                    cx={w.x}
                    cy={w.y}
                    r="14"
                    fill="white"
                    stroke={wpColors[w.type]}
                    strokeWidth="2.5"
                  />
                  <foreignObject x={w.x - 8} y={w.y - 8} width="16" height="16">
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "100%",
                        height: "100%",
                      }}
                    >
                      <WaypointIcon type={w.type} color={wpColors[w.type]} />
                    </div>
                  </foreignObject>
                </g>
              ))}

              {/* Fiestas seleccionadas */}
              {selected.map((f, i) => {
                const c = TRIP_COORDS[f.slug];
                if (!c) return null;
                return (
                  <g
                    key={f.slug}
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      setActiveBubble({
                        type: "fiesta",
                        x: c.x,
                        y: c.y,
                        label: f.nombre,
                        sub: `${f.fecha} · ${f.provincia}`,
                        color: f.color,
                      })
                    }
                  >
                    <circle cx={c.x} cy={c.y} r="20" fill={f.color} opacity="0.18">
                      <animate
                        attributeName="r"
                        values="18;28;18"
                        dur="2.4s"
                        begin={`${i * 0.3}s`}
                        repeatCount="indefinite"
                      />
                      <animate
                        attributeName="opacity"
                        values="0.25;0;0.25"
                        dur="2.4s"
                        begin={`${i * 0.3}s`}
                        repeatCount="indefinite"
                      />
                    </circle>
                    <path
                      d={`M ${c.x} ${c.y - 22} C ${c.x - 10} ${c.y - 22} ${c.x - 10} ${c.y - 8} ${c.x} ${c.y + 2} C ${c.x + 10} ${c.y - 8} ${c.x + 10} ${c.y - 22} ${c.x} ${c.y - 22} Z`}
                      fill={f.color}
                      stroke="white"
                      strokeWidth="2"
                    />
                    <circle cx={c.x} cy={c.y - 15} r="4" fill="white" />
                    <text
                      x={c.x + 14}
                      y={c.y - 12}
                      fontSize="11"
                      fill="var(--ink)"
                      fontWeight="600"
                      fontFamily="Inter"
                    >
                      {i + 1}. {f.provincia}
                    </text>
                  </g>
                );
              })}

              {/* Autito recorriendo */}
              {routePath && selected.length > 0 && (
                <g>
                  <animateMotion
                    dur={`${Math.max(8, selected.length * 4)}s`}
                    repeatCount="indefinite"
                    rotate="auto"
                  >
                    <mpath href="#tripRoute" />
                  </animateMotion>
                  <g transform="translate(-22,-15) scale(0.55)">
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
                    <rect
                      x="48"
                      y="20"
                      width="22"
                      height="10"
                      rx="2"
                      fill="#C2502E"
                      stroke="#0E1E3A"
                      strokeWidth="2.2"
                    />
                    <circle cx="32" cy="68" r="9" fill="#0E1E3A" />
                    <circle cx="90" cy="68" r="9" fill="#0E1E3A" />
                    <circle
                      cx="103"
                      cy="50"
                      r="3.5"
                      fill="white"
                      stroke="#0E1E3A"
                      strokeWidth="2"
                    />
                  </g>
                </g>
              )}
              <path id="tripRoute" d={routePath} fill="none" stroke="none" />
            </svg>

            {/* Bubble flotante */}
            {activeBubble && (
              <div
                style={{
                  position: "absolute",
                  left: `${(activeBubble.x / 800) * 100}%`,
                  top: `${(activeBubble.y / 900) * 100}%`,
                  transform: "translate(-50%, calc(-100% - 22px))",
                  zIndex: 20,
                }}
              >
                <div
                  style={{
                    background: "white",
                    padding: "14px 18px",
                    borderRadius: 12,
                    boxShadow: "0 8px 30px rgba(14,30,58,.18)",
                    minWidth: 200,
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
                    <div
                      style={{
                        width: 8,
                        height: 8,
                        borderRadius: "50%",
                        background:
                          wpColors[activeBubble.type] || activeBubble.color || "var(--azure)",
                      }}
                    />
                    <span
                      className="t-eyebrow"
                      style={{
                        fontSize: 10,
                        color:
                          wpColors[activeBubble.type] || activeBubble.color || "var(--azure)",
                      }}
                    >
                      {wpLabel[activeBubble.type]}
                    </span>
                    <button
                      onClick={() => setActiveBubble(null)}
                      aria-label="Cerrar"
                      style={{
                        marginLeft: "auto",
                        background: "transparent",
                        border: "none",
                        padding: 0,
                        cursor: "pointer",
                        color: "var(--n-500)",
                      }}
                    >
                      <CloseIcon size={14} />
                    </button>
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--f-serif)",
                      fontSize: 16,
                      fontWeight: 600,
                      color: "var(--ink)",
                      marginBottom: 4,
                    }}
                  >
                    {activeBubble.label}
                  </div>
                  <div className="t-mono" style={{ fontSize: 12, color: "var(--n-600)" }}>
                    {activeBubble.sub}
                  </div>
                </div>
                <svg
                  width="20"
                  height="12"
                  style={{
                    position: "absolute",
                    bottom: -10,
                    left: "50%",
                    transform: "translateX(-50%)",
                  }}
                  aria-hidden
                >
                  <polygon points="0,0 10,12 20,0" fill="white" />
                </svg>
              </div>
            )}

            {/* Toolbar */}
            <div
              style={{
                position: "absolute",
                top: 20,
                right: 20,
                background: "white",
                borderRadius: 10,
                padding: 4,
                boxShadow: "var(--sh-card)",
                display: "flex",
                flexDirection: "column",
                gap: 2,
              }}
            >
              <ToolBtn>+</ToolBtn>
              <ToolBtn>−</ToolBtn>
              <div style={{ height: 1, background: "var(--n-200)", margin: "4px 0" }} />
              <ToolBtn>
                <PinIcon size={14} />
              </ToolBtn>
            </div>

            {/* Legend */}
            <div
              style={{
                position: "absolute",
                bottom: 20,
                left: 20,
                background: "rgba(255,255,255,.95)",
                backdropFilter: "blur(8px)",
                borderRadius: 10,
                padding: "10px 14px",
                display: "flex",
                gap: 14,
                boxShadow: "var(--sh-card)",
                flexWrap: "wrap",
                maxWidth: "calc(100% - 40px)",
              }}
            >
              {(
                [
                  { t: "fiesta", l: "Fiesta" },
                  { t: "gas", l: "Combustible" },
                  { t: "noche", l: "Hospedaje" },
                  { t: "comida", l: "Comida" },
                  { t: "poi", l: "POI" },
                ] as const
              ).map((x) => (
                <div
                  key={x.t}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    fontSize: 12,
                    color: "var(--n-700)",
                  }}
                >
                  <span
                    style={{
                      width: 10,
                      height: 10,
                      borderRadius: "50%",
                      background: wpColors[x.t],
                    }}
                  />
                  {x.l}
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>

      {/* Modal exportar */}
      {showExport && (
        <div
          onClick={() => setShowExport(false)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(14,30,58,.6)",
            backdropFilter: "blur(8px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 100,
            padding: 24,
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: "white",
              borderRadius: "var(--r-2xl)",
              padding: "40px 36px",
              maxWidth: 520,
              width: "100%",
              position: "relative",
              boxShadow: "var(--sh-pop)",
            }}
          >
            <button
              onClick={() => setShowExport(false)}
              aria-label="Cerrar"
              style={{
                position: "absolute",
                top: 16,
                right: 16,
                background: "transparent",
                border: "none",
                cursor: "pointer",
              }}
            >
              <CloseIcon size={18} />
            </button>
            <div style={{ textAlign: "center", marginBottom: 24 }}>
              <div
                style={{
                  fontFamily: "var(--f-display)",
                  fontSize: 48,
                  color: "var(--ink)",
                  lineHeight: 1,
                  marginBottom: 8,
                }}
              >
                ¡Tu viaje está listo!
              </div>
              <div
                style={{
                  fontFamily: "var(--f-serif)",
                  fontSize: 17,
                  fontStyle: "italic",
                  color: "var(--n-600)",
                }}
              >
                Elegí cómo querés llevártelo:
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              <ExportBtn icon="🗺" title="Google Maps" sub="Abrir en navegador" />
              <ExportBtn icon="📅" title="Calendario .ics" sub="Descargar archivo" />
              <ExportBtn icon="🔗" title="Link compartible" sub="Copiar URL" />
              <ExportBtn icon="🖨" title="Imprimir PDF" sub="Versión papel" />
            </div>
            <div
              style={{
                marginTop: 24,
                padding: "16px 20px",
                background: "var(--n-50)",
                borderRadius: 12,
                fontSize: 13,
                color: "var(--n-700)",
                lineHeight: 1.5,
              }}
            >
              <strong>Resumen:</strong> {km.toLocaleString("es-AR")} km · {dias} días ·{" "}
              {selected.length} fiestas · ~{nafta}L de nafta · clima esperado 18°—32°C
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: 11,
  fontWeight: 600,
  textTransform: "uppercase",
  letterSpacing: ".08em",
  color: "var(--n-500)",
  marginBottom: 6,
};

const inputWrapStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: 8,
  padding: "10px 14px",
  background: "var(--n-50)",
  borderRadius: 10,
  border: "1px solid var(--n-200)",
};

const inputStyle: React.CSSProperties = {
  border: "none",
  outline: "none",
  background: "transparent",
  flex: 1,
  fontSize: 14,
  fontFamily: "var(--f-sans)",
  color: "var(--ink)",
};

function Stat({ n, l }: { n: string; l: string }) {
  return (
    <div
      style={{
        background: "white",
        borderRadius: 8,
        padding: "10px 8px",
        textAlign: "center",
        border: "1px solid var(--n-200)",
      }}
    >
      <div className="t-mono" style={{ fontSize: 16, fontWeight: 600, color: "var(--ink)", lineHeight: 1 }}>
        {n}
      </div>
      <div
        style={{
          fontSize: 10,
          color: "var(--n-500)",
          textTransform: "uppercase",
          letterSpacing: ".06em",
          marginTop: 3,
        }}
      >
        {l}
      </div>
    </div>
  );
}

function ToolBtn({ children }: { children: React.ReactNode }) {
  return (
    <button
      style={{
        width: 36,
        height: 36,
        border: "none",
        background: "transparent",
        cursor: "pointer",
        borderRadius: 8,
        fontSize: 16,
        fontWeight: 600,
        color: "var(--ink)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {children}
    </button>
  );
}

function ExportBtn({ icon, title, sub }: { icon: string; title: string; sub: string }) {
  return (
    <button
      style={{
        background: "var(--cream)",
        border: "1.5px solid var(--n-200)",
        borderRadius: 14,
        padding: "18px 16px",
        cursor: "pointer",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 4,
        transition: "all .15s",
      }}
    >
      <div style={{ fontSize: 28, marginBottom: 6 }} aria-hidden>
        {icon}
      </div>
      <div style={{ fontWeight: 600, fontSize: 15 }}>{title}</div>
      <div style={{ fontSize: 12, color: "var(--n-500)" }}>{sub}</div>
    </button>
  );
}
