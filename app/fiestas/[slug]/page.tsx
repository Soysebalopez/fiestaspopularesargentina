import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { FichaFiesta } from "@/components/FichaFiesta";
import { FIESTAS, FIESTA_DETAILS } from "@/lib/data";

type Params = { slug: string };

export async function generateStaticParams() {
  return FIESTAS.filter((f) => FIESTA_DETAILS[f.slug]).map((f) => ({ slug: f.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<Params> },
): Promise<Metadata> {
  const { slug } = await params;
  const fiesta = FIESTAS.find((f) => f.slug === slug);
  if (!fiesta) return { title: "Fiesta no encontrada — FiestasAR" };
  return {
    title: `${fiesta.nombre} — FiestasAR`,
    description: fiesta.short,
    openGraph: {
      title: `${fiesta.nombre} — FiestasAR`,
      description: fiesta.short,
      images: [fiesta.img],
    },
  };
}

export default async function FichaPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const fiesta = FIESTAS.find((f) => f.slug === slug);
  const detail = FIESTA_DETAILS[slug];
  if (!fiesta || !detail) notFound();

  return (
    <div data-screen-label="02 Ficha" style={{ minHeight: "100vh" }}>
      <Header active="ficha" />
      <main>
        <FichaFiesta fiesta={fiesta} detail={detail} />
      </main>
      <Footer />
    </div>
  );
}
