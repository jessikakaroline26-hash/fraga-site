import { useState, useMemo } from "react";
import { kits } from "../data/kits";
import ProductCard from "../components/ProductCard";
import FiltersBar from "../components/FiltersBar";
import Badge from "../components/Badge";

export default function KitsPage() {
  const [filters, setFilters] = useState({
    search: "",
    category: "all",
    price: "all",
    order: "relevance",
  });

  // ---------------------------
  // FILTRAGEM COMPLETA
  // ---------------------------
  const filteredKits = useMemo(() => {
    let data = [...kits];

    // 🔎 Busca
    if (filters.search.trim() !== "") {
      const s = filters.search.toLowerCase();
      data = data.filter((kit) =>
        kit.title.toLowerCase().includes(s)
      );
    }

    // 📂 Categoria
    if (filters.category !== "all") {
      data = data.filter((kit) => kit.category === filters.category);
    }

    // 💰 Preço
    if (filters.price === "1") {
      data = data.filter((kit) => kit.price <= 100);
    } else if (filters.price === "2") {
      data = data.filter((kit) => kit.price >= 100 && kit.price <= 200);
    } else if (filters.price === "3") {
      data = data.filter((kit) => kit.price > 200);
    }

    // ↕️ Ordenar
    if (filters.order === "priceAsc") {
      data = data.sort((a, b) => a.price - b.price);
    } else if (filters.order === "priceDesc") {
      data = data.sort((a, b) => b.price - a.price);
    }

    return data;
  }, [filters]);

  return (
    <div className="min-h-screen bg-[#0c0c0c] text-white py-20 px-6 md:px-20">

      {/* TÍTULO */}
      <h1 className="text-4xl font-bold text-center text-[#d9b26f] mb-10 drop-shadow-lg">
        Kits Premium
      </h1>

      <p className="text-center text-gray-300 mb-16 max-w-2xl mx-auto text-lg">
        Escolha um dos nossos kits selecionados ou personalize
        tudo do seu jeito. Qualidade premium para um churrasco
        inesquecível.
      </p>

      {/* ⭐ FILTROS PREMIUM */}
      <FiltersBar onFilter={setFilters} />

      {/* GRID DOS KITS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">

        {filteredKits.map((kit, index) => (
          <div
            key={kit.id}
            className="
              bg-[#111] border border-[#2a2a2a]
              rounded-xl overflow-hidden shadow-lg relative
              hover:shadow-[0_0_25px_rgba(217,178,111,0.3)]
              hover:scale-[1.02] transition-all duration-300
            "
          >
            {/* BADGES AUTOMÁTICOS */}
            {index === 0 && <Badge color="#d9b26f">🔥 Mais Vendido</Badge>}
            {kit.category === "premium" && (
              <Badge color="#b28c4a">⭐ Premium</Badge>
            )}

            {/* CARD DO PRODUTO */}
            <ProductCard
              id={kit.id}
              title={kit.title}
              price={kit.price}
              images={kit.images}
            />

            {/* BOTÃO */}
            <div className="p-6 flex justify-center">
              <a
                href={`/produto/${kit.id}`}
                className="
                  mt-4 inline-block px-6 py-3 rounded-full text-black font-semibold
                  bg-gradient-to-r from-[#d9b26f] to-[#b28c4a]
                  hover:shadow-[0_0_20px_rgba(217,178,111,0.5)]
                  transition-all duration-300
                "
              >
                Ver Kit Completo
              </a>
            </div>
          </div>
        ))}

      </div>

      {/* Se não encontrar nada */}
      {filteredKits.length === 0 && (
        <p className="text-center text-gray-400 text-lg mt-10">
          Nenhum kit encontrado com esses filtros.
        </p>
      )}

    </div>
  );
}
