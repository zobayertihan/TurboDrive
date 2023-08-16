import { Hero } from "@/components";
import PopularCars from "@/components/PopularCars";

export default async function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <PopularCars />
    </main>
  );
}
