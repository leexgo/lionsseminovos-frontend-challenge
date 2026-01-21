import { CarCard } from "@/components/Card";
import { CatalogCar, catalogDb } from "@/data/db";

export default function catalog() {
  return (
    <div className="bg-black min-h-screen flex flex-col my-10 text-center justify-center align-center font-sans text-white">
      <div className="">
        <h1 className="text-lg md:text-2xl font-semibold mb-6">
          Aqui você encontrará uma seleção dos nossos veículos disponíveis.
        </h1>
      </div>
      <section className="w-full px-4 py-8">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2">
          {catalogDb.map((car: CatalogCar) => (
            <CarCard key={car.id} data={car} />
          ))}
        </div>
      </section>
    </div>
  );
}
