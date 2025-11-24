import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useState } from "react";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const { cart } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="w-full bg-[#0c0c0c] border-b border-[#2a2a2a] py-6 px-6 md:px-16 flex items-center justify-between">

        {/* LOGO */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/logo/logo.png"
            alt="Logo Fraga"
            className="h-24 md:h-28 w-auto object-contain"
            style={{
              filter: "drop-shadow(0px 0px 5px rgba(217,178,111,0.4))",
            }}
          />
        </Link>

        {/* MENU DESKTOP */}
        <nav className="hidden md:flex items-center gap-10 text-lg">

          <Link to="/" className="text-gray-300 hover:text-[#d9b26f] transition">Home</Link>
          <Link to="/sobre" className="text-gray-300 hover:text-[#d9b26f] transition">Sobre</Link>

          {/* 🔥 NOVO ITEM: MONTAR KIT */}
          <Link
            to="/kit"
            className="text-[#d9b26f] font-semibold hover:text-white transition"
          >
            Montar Kit
          </Link>

          <Link to="/kits" className="text-gray-300 hover:text-[#d9b26f] transition">Kits</Link>
          <Link to="/cortes" className="text-gray-300 hover:text-[#d9b26f] transition">Cortes</Link>
          <Link to="/frete" className="text-gray-300 hover:text-[#d9b26f] transition">Frete & Entrega</Link>
          <Link to="/garantia" className="text-gray-300 hover:text-[#d9b26f] transition">Garantia & Troca</Link>
          <Link to="/politica" className="text-gray-300 hover:text-[#d9b26f] transition">Política da Loja</Link>
          <Link to="/contato" className="text-gray-300 hover:text-[#d9b26f] transition">Contato</Link>

          <Link
            to="/carrinho"
            className="relative text-gray-300 hover:text-[#d9b26f] transition"
          >
            Carrinho
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-4 bg-[#d9b26f] text-black text-xs font-bold px-2 py-0.5 rounded-full">
                {cart.length}
              </span>
            )}
          </Link>
        </nav>

        {/* MENU MOBILE */}
        <button
          className="md:hidden text-gray-300 text-3xl"
          onClick={() => setMenuOpen(true)}
        >
          ☰
        </button>

      </header>

      {/* MENU MOBILE COMPONENT */}
      <MobileMenu
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
        cartCount={cart.length}
      />
    </>
  );
}
