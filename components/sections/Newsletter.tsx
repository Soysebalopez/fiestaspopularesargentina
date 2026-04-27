"use client";

import * as React from "react";

export function Newsletter() {
  const [email, setEmail] = React.useState("");
  const [sent, setSent] = React.useState(false);

  return (
    <section style={{ padding: "var(--pad-section, 80px) 0 40px", background: "var(--cream)" }}>
      <div className="container-fr">
        <div
          style={{
            background: "white",
            border: "2px dashed var(--ink)",
            borderRadius: "var(--r-2xl)",
            padding: "48px 40px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 32,
            flexWrap: "wrap",
          }}
        >
          <div>
            <div
              style={{
                fontFamily: "var(--f-display)",
                fontSize: 42,
                color: "var(--ink)",
                lineHeight: 1,
                marginBottom: 12,
                transform: "rotate(-1deg)",
                display: "inline-block",
              }}
            >
              Las fiestas del próximo trimestre,
            </div>
            <div
              style={{
                fontFamily: "var(--f-serif)",
                fontSize: 22,
                fontWeight: 500,
                color: "var(--ink-soft)",
                fontStyle: "italic",
              }}
            >
              en tu correo, una vez por mes.
            </div>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            style={{ display: "flex", gap: 8, flex: "1 1 320px", maxWidth: 480 }}
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="vos@correo.com.ar"
              style={{
                flex: 1,
                padding: "14px 18px",
                border: "1.5px solid var(--n-200)",
                borderRadius: "var(--r-pill)",
                fontSize: 15,
                fontFamily: "var(--f-sans)",
                outline: "none",
                background: "var(--n-50)",
              }}
            />
            <button type="submit" className="btn btn-dark">
              {sent ? "¡Listo! ✓" : "Suscribirme"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
