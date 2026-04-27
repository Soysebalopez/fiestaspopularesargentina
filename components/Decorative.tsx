import * as React from "react";

type SunProps = {
  size?: number;
  rays?: number;
  color?: string;
  spin?: boolean;
  className?: string;
  style?: React.CSSProperties;
};

export const Sun = ({ size = 80, rays = 8, color = "#F4B83E", spin = false, className = "", style }: SunProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    className={`sun-deco ${className} ${spin ? "sun-rays" : ""}`}
    style={style}
    aria-hidden
  >
    {Array.from({ length: rays }).map((_, i) => {
      const a = (i / rays) * Math.PI * 2;
      const x1 = 50 + Math.cos(a) * 26;
      const y1 = 50 + Math.sin(a) * 26;
      const x2 = 50 + Math.cos(a) * 44;
      const y2 = 50 + Math.sin(a) * 44;
      return (
        <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={color} strokeWidth="6" strokeLinecap="round" />
      );
    })}
    <circle cx="50" cy="50" r="14" fill={color} />
  </svg>
);

type BrushProps = {
  color?: string;
  width?: number;
  height?: number;
  style?: React.CSSProperties;
};

export const BrushStroke = ({ color = "#2B7BD6", width = 200, height = 30, style }: BrushProps) => (
  <svg width={width} height={height} viewBox="0 0 200 30" style={style} className="brush" aria-hidden>
    <path
      d="M2 18 C 30 8, 60 22, 100 14 S 170 6, 198 16"
      stroke={color}
      strokeWidth="14"
      strokeLinecap="round"
      fill="none"
      opacity="0.85"
    />
    <path
      d="M8 22 C 40 18, 80 26, 120 22 S 180 18, 195 22"
      stroke={color}
      strokeWidth="3"
      strokeLinecap="round"
      fill="none"
      opacity="0.6"
    />
  </svg>
);

type ConfettiProps = {
  style?: React.CSSProperties;
  count?: number;
};

export const Confetti = ({ style, count = 14 }: ConfettiProps) => (
  <svg viewBox="0 0 200 200" style={style} className="confetti" aria-hidden>
    {Array.from({ length: count }).map((_, i) => {
      const x = (i * 37) % 200;
      const y = (i * 53) % 200;
      const r = (i * 19) % 360;
      const colors = ["#2B7BD6", "#F4B83E", "#0E1E3A", "#2F8C82"];
      const c = colors[i % 4];
      const shapes = ["line", "dot", "tri"] as const;
      const shape = shapes[i % 3];
      if (shape === "line")
        return (
          <rect
            key={i}
            x={x}
            y={y}
            width="10"
            height="3"
            fill={c}
            transform={`rotate(${r} ${x + 5} ${y + 1.5})`}
            rx="1.5"
          />
        );
      if (shape === "dot") return <circle key={i} cx={x} cy={y} r="2.5" fill={c} />;
      return <polygon key={i} points={`${x},${y} ${x + 6},${y} ${x + 3},${y - 5}`} fill={c} />;
    })}
  </svg>
);

export const PaperPlane = ({ size = 36, color = "#2B7BD6" }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 60 60" aria-hidden>
    <path
      d="M5 30 L55 8 L48 50 L32 38 L22 48 L24 36 Z"
      fill={color}
      stroke={color}
      strokeWidth="1"
      strokeLinejoin="round"
    />
    <path d="M22 48 L32 38 L24 36 Z" fill="#0E1E3A" opacity=".4" />
  </svg>
);

export const HeartHand = ({
  size = 28,
  color = "#2B7BD6",
  fill = "#F4B83E",
}: {
  size?: number;
  color?: string;
  fill?: string;
}) => (
  <svg width={size} height={size} viewBox="0 0 32 28" fill="none" aria-hidden>
    <path
      d="M16 25 C 8 20, 2 14, 2 9 C 2 5, 5 2, 9 2 C 12 2, 14 4, 16 7 C 18 4, 20 2, 23 2 C 27 2, 30 5, 30 9 C 30 14, 24 20, 16 25 Z"
      stroke={color}
      strokeWidth="2.2"
      strokeLinejoin="round"
      fill={fill}
      fillOpacity=".25"
    />
  </svg>
);

export const Autito = ({ size = 80, rotate = 0 }: { size?: number; rotate?: number }) => (
  <svg
    width={size}
    height={size * 0.7}
    viewBox="0 0 120 84"
    style={{ transform: `rotate(${rotate}deg)` }}
    aria-hidden
  >
    <ellipse cx="60" cy="76" rx="44" ry="4" fill="#0E1E3A" opacity=".18" />
    <path
      d="M10 60 Q 8 44 24 42 L 32 32 Q 38 22 50 22 L 78 22 Q 88 22 94 30 L 102 42 Q 112 44 112 56 L 112 64 Q 112 68 108 68 L 100 68 Q 98 76 90 76 Q 82 76 80 68 L 42 68 Q 40 76 32 76 Q 24 76 22 68 L 14 68 Q 10 68 10 64 Z"
      fill="#F4B83E"
      stroke="#0E1E3A"
      strokeWidth="2.4"
      strokeLinejoin="round"
    />
    <path
      d="M34 42 Q 38 28 50 28 L 76 28 Q 86 28 92 36 L 96 42 Z"
      fill="#BFE0F4"
      stroke="#0E1E3A"
      strokeWidth="2.4"
      strokeLinejoin="round"
    />
    <path d="M60 28 L 60 42" stroke="#0E1E3A" strokeWidth="2.2" />
    <circle cx="103" cy="50" r="3.5" fill="#FFFFFF" stroke="#0E1E3A" strokeWidth="2" />
    <rect x="13" y="48" width="6" height="6" rx="1.5" fill="#C03A2B" stroke="#0E1E3A" strokeWidth="2" />
    <rect x="48" y="20" width="22" height="10" rx="2" fill="#C2502E" stroke="#0E1E3A" strokeWidth="2.2" />
    <line x1="59" y1="20" x2="59" y2="30" stroke="#0E1E3A" strokeWidth="1.5" />
    <circle cx="32" cy="68" r="9" fill="#0E1E3A" />
    <circle cx="32" cy="68" r="4" fill="#9D9079" />
    <circle cx="90" cy="68" r="9" fill="#0E1E3A" />
    <circle cx="90" cy="68" r="4" fill="#9D9079" />
    <path d="M44 50 L 56 50" stroke="#0E1E3A" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);
