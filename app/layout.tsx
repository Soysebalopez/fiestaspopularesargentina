import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://fiestasar.com"),
  title: "FiestasAR — Todas las fiestas populares de Argentina",
  description:
    "Portal turístico de Argentina. Descubrí 3000+ fiestas populares y armá tu viaje con el Trip Planner.",
  openGraph: {
    title: "FiestasAR — Todas las fiestas populares de Argentina",
    description:
      "Descubrí 3000+ fiestas populares de Argentina y armá tu viaje en minutos.",
    locale: "es_AR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" data-mode="collage" data-density="loose">
      <body>{children}</body>
    </html>
  );
}
