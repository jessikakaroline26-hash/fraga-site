import { useNavigate } from "react-router-dom";

export default function ProductCard({ id, title, price, image, images }) {
  const navigate = useNavigate();

  const displayImage = image || (images && images.length > 0 ? images[0] : null);

  return (
    <div
      onClick={() => navigate(`/produto/${id}`)}
      className="cursor-pointer bg-[#111] p-4 rounded-xl border border-[#2a2a2a] hover:border-[#d9b26f] transition"
    >
      {/* FOTO */}
      <div
        className="w-full h-48 bg-cover bg-center rounded-lg mb-4"
        style={{
          backgroundImage: displayImage ? `url(${displayImage})` : "none",
        }}
      ></div>

      {/* TÍTULO */}
      <h2 className="text-[#d9b26f] font-semibold text-lg">{title}</h2>

      {/* PREÇO */}
      <p className="text-white font-bold text-xl mt-2">
        R$ {price.toFixed(2)}
      </p>
    </div>
  );
}
