import { cortes } from "../data/cortes";
import ProductCard from "../components/ProductCard";

export default function CortesPage() {
  return (
    <div className="py-16 px-6 md:px-20">
      <h1 className="text-3xl font-bold text-[#d9b26f] mb-10 text-center">
        Cortes Individuais
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {cortes.map((cut) => (
          <ProductCard key={cut.id} {...cut} />
        ))}
      </div>
    </div>
  );
}
