import { useState } from "react";

export default function FiltersBar({ onFilter }) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [price, setPrice] = useState("all");
  const [order, setOrder] = useState("relevance");

  const handleChange = () => {
    onFilter({
      search,
      category,
      price,
      order,
    });
  };

  return (
    <div className="w-full mb-10 bg-[#111] border border-[#2a2a2a] p-6 rounded-xl">

      {/* BUSCA */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Pesquisar..."
          className="w-full px-4 py-3 rounded-lg bg-[#0c0c0c] border border-[#333] text-white"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            handleChange();
          }}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">

        {/* CATEGORIA */}
        <div>
          <label className="block text-sm text-gray-400 mb-2">Categoria</label>
          <select
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
              handleChange();
            }}
            className="w-full px-4 py-3 bg-[#0c0c0c] border border-[#333] text-white rounded-lg"
          >
            <option value="all">Todas</option>
            <option value="churrasco">Churrasco</option>
            <option value="premium">Premium</option>
            <option value="familia">Família</option>
            <option value="economico">Econômico</option>
            <option value="diaadia">Dia a Dia</option>
          </select>
        </div>

        {/* PREÇO */}
        <div>
          <label className="block text-sm text-gray-400 mb-2">Preço</label>
          <select
            value={price}
            onChange={(e) => {
              setPrice(e.target.value);
              handleChange();
            }}
            className="w-full px-4 py-3 bg-[#0c0c0c] border border-[#333] text-white rounded-lg"
          >
            <option value="all">Todos</option>
            <option value="1">Até R$ 100</option>
            <option value="2">R$ 100 - R$ 200</option>
            <option value="3">Acima de R$ 200</option>
          </select>
        </div>

        {/* ORDENAR */}
        <div>
          <label className="block text-sm text-gray-400 mb-2">Ordenar por</label>
          <select
            value={order}
            onChange={(e) => {
              setOrder(e.target.value);
              handleChange();
            }}
            className="w-full px-4 py-3 bg-[#0c0c0c] border border-[#333] text-white rounded-lg"
          >
            <option value="relevance">Relevância</option>
            <option value="priceAsc">Menor preço</option>
            <option value="priceDesc">Maior preço</option>
          </select>
        </div>

      </div>
    </div>
  );
}
