import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { TripPlanner } from "@/components/TripPlanner";

export const metadata: Metadata = {
  title: "Trip Planner — FiestasAR",
  description:
    "Armá tu viaje por las fiestas populares de Argentina: ruta, paradas, combustible, clima y exportación a Google Maps en minutos.",
};

export default function PlannerPage() {
  return (
    <>
      <Header active="planner" />
      <TripPlanner />
    </>
  );
}
