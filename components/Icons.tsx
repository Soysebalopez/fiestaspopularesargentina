import * as React from "react";

type IconProps = {
  size?: number;
  color?: string;
};

export const PinIcon = ({ size = 20, color = "currentColor" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden>
    <path d="M12 22s7-7.58 7-13a7 7 0 1 0-14 0c0 5.42 7 13 7 13Z" stroke={color} strokeWidth="1.6" strokeLinejoin="round" />
    <circle cx="12" cy="9" r="2.5" stroke={color} strokeWidth="1.6" />
  </svg>
);

export const CalendarIcon = ({ size = 20, color = "currentColor" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden>
    <rect x="3.5" y="5" width="17" height="15" rx="2" stroke={color} strokeWidth="1.6" />
    <path d="M3.5 9h17M8 3v4M16 3v4" stroke={color} strokeWidth="1.6" strokeLinecap="round" />
    <circle cx="8" cy="13" r="1" fill={color} />
    <circle cx="12" cy="13" r="1" fill={color} />
    <circle cx="16" cy="13" r="1" fill={color} />
  </svg>
);

export const SearchIcon = ({ size = 20, color = "currentColor" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden>
    <circle cx="11" cy="11" r="6.5" stroke={color} strokeWidth="1.8" />
    <path d="m20 20-4.2-4.2" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

type ArrowProps = IconProps & { dir?: "left" | "right" | "up" | "down" };
export const ArrowIcon = ({ size = 20, color = "currentColor", dir = "right" }: ArrowProps) => {
  const rotate =
    dir === "left" ? "rotate(180deg)" :
    dir === "down" ? "rotate(90deg)" :
    dir === "up" ? "rotate(-90deg)" : "";
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={{ transform: rotate }} aria-hidden>
      <path d="M5 12h14m-5-5 5 5-5 5" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

export const SparkleIcon = ({ size = 20, color = "currentColor" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden>
    <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M6 18l2.5-2.5M15.5 8.5 18 6" stroke={color} strokeWidth="1.6" strokeLinecap="round" />
    <circle cx="12" cy="12" r="2" fill={color} />
  </svg>
);

type HeartProps = IconProps & { fill?: string };
export const HeartIcon = ({ size = 20, color = "currentColor", fill = "none" }: HeartProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} aria-hidden>
    <path d="M12 21s-7-4.5-9.5-9.5C.5 7 4 3 8 3c2 0 3.5 1 4 2.5C12.5 4 14 3 16 3c4 0 7.5 4 5.5 8.5C19 16.5 12 21 12 21Z" stroke={color} strokeWidth="1.6" strokeLinejoin="round" />
  </svg>
);

export const MenuIcon = ({ size = 24, color = "currentColor" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden>
    <path d="M4 7h16M4 12h16M4 17h16" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

export const CloseIcon = ({ size = 18, color = "currentColor" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden>
    <path d="m6 6 12 12M18 6 6 18" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

export const CheckIcon = ({ size = 18, color = "currentColor" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden>
    <path d="m5 12 5 5 9-11" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const GasIcon = ({ size = 20, color = "currentColor" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden>
    <rect x="4" y="3" width="9" height="18" rx="1.5" stroke={color} strokeWidth="1.6" />
    <path d="M4 8h9M16 8l3 3v8a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-9Z" stroke={color} strokeWidth="1.6" strokeLinejoin="round" />
    <path d="M16 6V4" stroke={color} strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);

export const BedIcon = ({ size = 20, color = "currentColor" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden>
    <path d="M3 18v-9M21 18v-6a3 3 0 0 0-3-3H10v6" stroke={color} strokeWidth="1.6" strokeLinecap="round" />
    <path d="M3 14h18M3 18h2M19 18h2" stroke={color} strokeWidth="1.6" strokeLinecap="round" />
    <circle cx="6.5" cy="11.5" r="1.5" stroke={color} strokeWidth="1.6" />
  </svg>
);

export const ForkIcon = ({ size = 20, color = "currentColor" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden>
    <path d="M7 3v7a2 2 0 0 0 2 2v9M5 3v5a2 2 0 0 0 2 2M11 3v5a2 2 0 0 1-2 2M16 3c-2 0-3 2-3 5s1 4 3 4v9" stroke={color} strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);

export const ShareIcon = ({ size = 18, color = "currentColor" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden>
    <circle cx="6" cy="12" r="2.5" stroke={color} strokeWidth="1.6" />
    <circle cx="17" cy="6" r="2.5" stroke={color} strokeWidth="1.6" />
    <circle cx="17" cy="18" r="2.5" stroke={color} strokeWidth="1.6" />
    <path d="m8 11 7-4M8 13l7 4" stroke={color} strokeWidth="1.6" />
  </svg>
);

export const CameraIcon = ({ size = 20, color = "currentColor" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden>
    <path d="M3.5 8h3l1.5-2.5h8L17.5 8h3a1.5 1.5 0 0 1 1.5 1.5v9A1.5 1.5 0 0 1 20.5 20h-17A1.5 1.5 0 0 1 2 18.5v-9A1.5 1.5 0 0 1 3.5 8Z" stroke={color} strokeWidth="1.6" />
    <circle cx="12" cy="13.5" r="3.5" stroke={color} strokeWidth="1.6" />
  </svg>
);
