import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ComoFunciona } from "@/components/sections/ComoFunciona";
import { FiestasProximas } from "@/components/sections/FiestasProximas";
import { MapaRegiones } from "@/components/sections/MapaRegiones";
import { Newsletter } from "@/components/sections/Newsletter";
import { Organizadores } from "@/components/sections/Organizadores";

export default function HomePage() {
  return (
    <div data-screen-label="01 Landing" style={{ minHeight: "100vh" }}>
      <Header active="home" />
      <main>
        <Hero />
        <FiestasProximas />
        <ComoFunciona />
        <MapaRegiones />
        <Organizadores />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
