import { Link } from "react-router-dom";

export default function MobileMenu({ isOpen, onClose, cartCount }) {
  return (
    <div
      className={`fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 z-40 ${
        isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
      onClick={onClose}
    >
      {/* Painel lateral */}
      <div
        className={`absolute right-0 top-0 h-full w-72 bg-[#111] border-l border-[#2a2a2a] p-6 z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header do menu */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-xl font-bold text-[#d9b26f]">Menu</h2>
          <button
            className="text-gray-300 text-2xl hover:text-[#d9b26f] transition"
            onClick={onClose}
          >
            ✕
          </button>
        </div>

        {/* Links */}
        <div className="flex flex-col gap-6 text-lg">
          <Link to="/" onClick={onClose} className="text-gray-300 hover:text-[#d9b26f]">
            Home
          </Link>

          <Link to="/sobre" onClick={onClose} className="text-gray-300 hover:text-[#d9b26f]">
            Sobre
          </Link>

          {/* 🔥 NOVO ITEM — MONTAR KIT */}
          <Link
            to="/kit"
            onClick={onClose}
            className="text-[#d9b26f] font-semibold hover:text-white transition"
          >
            Montar Kit
          </Link>

          <Link to="/kits" onClick={onClose} className="text-gray-300 hover:text-[#d9b26f]">
            Kits
          </Link>

          <Link to="/cortes" onClick={onClose} className="text-gray-300 hover:text-[#d9b26f]">
            Cortes
          </Link>

          <Link to="/frete" onClick={onClose} className="text-gray-300 hover:text-[#d9b26f]">
            Frete & Entrega
          </Link>

          <Link to="/garantia" onClick={onClose} className="text-gray-300 hover:text-[#d9b26f]">
            Garantia & Troca
          </Link>

          <Link to="/politica" onClick={onClose} className="text-gray-300 hover:text-[#d9b26f]">
            Política da Loja
          </Link>

          <Link to="/contato" onClick={onClose} className="text-gray-300 hover:text-[#d9b26f]">
            Contato
          </Link>

          <Link
            to="/carrinho"
            onClick={onClose}
            className="relative text-gray-300 hover:text-[#d9b26f]"
          >
            Carrinho
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-5 bg-[#d9b26f] text-black text-xs font-bold px-2 py-0.5 rounded-full">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </div>
  );
}
