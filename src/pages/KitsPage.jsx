import { kits } from "../data/kits";
import ProductCard from "../components/ProductCard";

export default function KitsPage() {
  return (
    <div className="py-16 px-6 md:px-20">
      <h1 className="text-3xl font-bold text-[#d9b26f] mb-10 text-center">
        Kits Premium
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {kits.map((kit) => (
          <ProductCard key={kit.id} {...kit} />
        ))}
      </div>
    </div>
  );
}
