import React, { useEffect, useState } from "react";
import create from "zustand";

// -------------------------
// Mock product data (replace by API)
// -------------------------
const mockProducts = [
  {
    id: "p1",
    name: "Picanha Fraga Black",
    brand: "Frigorífico Fraga",
    weight: "1kg",
    type: "Resfriado",
    category: "Dia a Dia",
    price: 89.9,
    image: "https://via.placeholder.com/400x300?text=Picanha",
  },
  {
    id: "p2",
    name: "Contra-filé Premium",
    brand: "Frigorífico Alfa",
    weight: "1kg",
    type: "Resfriado",
    category: "Dia a Dia",
    price: 49.9,
    image: "https://via.placeholder.com/400x300?text=Contra-fil%C3%A9",
  },
  {
    id: "c1",
    name: "Carvão 5kg",
    brand: "Carvões Brasil",
    weight: "5kg",
    type: "Acessório",
    category: "Acessórios",
    price: 29.9,
    image: "https://via.placeholder.com/400x300?text=Carv%C3%A3o",
  },
  {
    id: "g1",
    name: "Gelo 5kg",
    brand: "Gelo Rápido",
    weight: "5kg",
    type: "Acessório",
    category: "Acessórios",
    price: 9.9,
    image: "https://via.placeholder.com/400x300?text=Gelo",
  },
];

// -------------------------
// Zustand store: cart/kit
// -------------------------
const useCartStore = create((set, get) => ({
  items: [],
  kitName: "Meu Kit",
  addItem: (product) => {
    const items = get().items.slice();
    const idx = items.findIndex((i) => i.id === product.id);
    if (idx >= 0) {
      items[idx].qty += 1;
    } else {
      items.push({ ...product, qty: 1 });
    }
    set({ items });
    // persist
    localStorage.setItem("cart_items", JSON.stringify(items));
  },
  removeItem: (id) => {
    const items = get().items.filter((i) => i.id !== id);
    set({ items });
    localStorage.setItem("cart_items", JSON.stringify(items));
  },
  updateQty: (id, qty) => {
    const items = get().items.slice();
    const idx = items.findIndex((i) => i.id === id);
    if (idx >= 0) {
      items[idx].qty = qty;
      if (items[idx].qty <= 0) items.splice(idx, 1);
    }
    set({ items });
    localStorage.setItem("cart_items", JSON.stringify(items));
  },
  clear: () => {
    set({ items: [] });
    localStorage.removeItem("cart_items");
  },
  loadFromStorage: () => {
    try {
      const raw = localStorage.getItem("cart_items");
      if (raw) set({ items: JSON.parse(raw) });
    } catch (e) {
      console.warn("Could not load cart from storage", e);
    }
  },
}));

// -------------------------
// Utility: currency
// -------------------------
const formatBRL = (v) =>
  v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

// -------------------------
// Main component
// -------------------------
export default function KitPage() {
  const [products, setProducts] = useState(mockProducts);
  const [filterCategory, setFilterCategory] = useState("All");
  const [filterBrand, setFilterBrand] = useState("All");
  const [search, setSearch] = useState("");
  const [toast, setToast] = useState(null);

  const { items, addItem, removeItem, updateQty, clear, loadFromStorage } =
    useCartStore((s) => ({
      items: s.items,
      addItem: s.addItem,
      removeItem: s.removeItem,
      updateQty: s.updateQty,
      clear: s.clear,
      loadFromStorage: s.loadFromStorage,
    }));

  useEffect(() => {
    // Simulate fetch products -> replace with real API
    // fetch('/api/products')...
    setProducts(mockProducts);
    loadFromStorage();
  }, []);

  const brands = ["All", ...new Set(products.map((p) => p.brand))];
  const categories = ["All", ...new Set(products.map((p) => p.category))];

  const filtered = products.filter((p) => {
    if (filterCategory !== "All" && p.category !== filterCategory) return false;
    if (filterBrand !== "All" && p.brand !== filterBrand) return false;
    if (search && !(`${p.name} ${p.brand}`.toLowerCase()).includes(search.toLowerCase())) return false;
    return true;
  });

  const subtotal = items.reduce((s, it) => s + it.price * it.qty, 0);

  function handleAdd(p) {
    addItem(p);
    setToast(`${p.name} adicionado ao kit`);
    setTimeout(() => setToast(null), 1600);
  }

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="max-w-7xl mx-auto">
        <header className="mb-6 flex items-center justify-between">
          <h1 className="text-3xl font-semibold">Montar Kit — Linha Dia a Dia</h1>
          <div className="flex gap-3 items-center">
            <input
              className="bg-gray-900 text-sm px-3 py-2 rounded-md border border-gray-800"
              placeholder="Pesquisar..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button
              className="px-4 py-2 bg-red-600 rounded-md text-white text-sm"
              onClick={() => {}}
            >
              Assinatura (em breve)
            </button>
          </div>
        </header>

        <div className="grid grid-cols-12 gap-6">
          {/* filtros + grid */}
          <aside className="col-span-3 bg-gray-900 p-4 rounded-lg h-fit">
            <h3 className="font-semibold mb-2">Filtros</h3>
            <div className="mb-3">
              <label className="block text-sm text-gray-300">Categoria</label>
              <select
                value={filterCategory}
                onChange={(e) => setFilterCategory(e.target.value)}
                className="mt-1 w-full bg-gray-800 text-white px-2 py-2 rounded-md text-sm"
              >
                {categories.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-3">
              <label className="block text-sm text-gray-300">Marca</label>
              <select
                value={filterBrand}
                onChange={(e) => setFilterBrand(e.target.value)}
                className="mt-1 w-full bg-gray-800 text-white px-2 py-2 rounded-md text-sm"
              >
                {brands.map((b) => (
                  <option key={b} value={b}>
                    {b}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <h4 className="text-sm text-gray-300">Observações</h4>
              <p className="text-xs text-gray-400 mt-2">Lembre-se: evite termos de raça (ex: Angus) no nome do produto — mantenha apenas dados fornecidos pelo frigorífico.</p>
            </div>
          </aside>

          <main className="col-span-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-4">
              {filtered.map((p) => (
                <article key={p.id} className="bg-gray-900 rounded-lg overflow-hidden shadow-sm">
                  <img src={p.image} alt={p.name} className="w-full h-44 object-cover" />
                  <div className="p-3">
                    <h3 className="font-semibold">{p.name}</h3>
                    <p className="text-sm text-gray-400">{p.brand} · {p.weight} · {p.type}</p>
                    <div className="mt-3 flex items-center justify-between">
                      <strong className="text-lg">{formatBRL(p.price)}</strong>
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleAdd(p)}
                          className="px-3 py-1 rounded-md bg-red-600 text-sm"
                        >
                          Adicionar ao Kit
                        </button>
                        <button className="px-3 py-1 rounded-md border border-gray-700 text-sm">Comprar</button>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </main>

          {/* barra do kit */}
          <aside className="col-span-3 bg-gray-900 p-4 rounded-lg h-fit sticky top-6">
            <h3 className="font-semibold mb-2">Seu Kit</h3>
            <div className="mb-3">
              <input
                value={useCartStore.getState().kitName}
                onChange={(e) => useCartStore.setState({ kitName: e.target.value })}
                className="w-full px-2 py-2 bg-black border border-gray-800 rounded-md text-white text-sm"
              />
            </div>

            <div className="space-y-3 mb-4">
              {items.length === 0 && <p className="text-sm text-gray-400">Nenhum item no kit.</p>}

              {items.map((it) => (
                <div key={it.id} className="flex items-center justify-between bg-black p-2 rounded">
                  <div>
                    <div className="text-sm font-medium">{it.name}</div>
                    <div className="text-xs text-gray-400">{it.brand} · {it.weight}</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button onClick={() => updateQty(it.id, it.qty - 1)} className="px-2 py-1 border rounded">-</button>
                    <div className="w-6 text-center">{it.qty}</div>
                    <button onClick={() => updateQty(it.id, it.qty + 1)} className="px-2 py-1 border rounded">+</button>
                    <button onClick={() => removeItem(it.id)} className="ml-2 text-xs text-red-400">Remover</button>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-gray-800 pt-3">
              <div className="flex justify-between text-sm text-gray-300 mb-3">
                <span>Subtotal</span>
                <span>{formatBRL(subtotal)}</span>
              </div>
              <button className="w-full py-2 bg-red-600 rounded-md mb-2">Finalizar Kit</button>
              <button onClick={() => clear()} className="w-full py-2 border border-gray-700 rounded-md text-sm">Limpar</button>
            </div>
          </aside>
        </div>
      </div>

      {/* toast */}
      {toast && (
        <div className="fixed right-6 bottom-6 bg-white text-black px-4 py-2 rounded shadow">{toast}</div>
      )}
    </div>
  );
}
