import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#0c0c0c] border-t border-[#2a2a2a] pt-16 pb-10 px-6 md:px-20">

      {/* Logo central */}
      <div className="flex justify-center mb-10">
        <img
          src="/logo/logo.png"
          alt="Fraga Logo"
          className="h-20 w-auto object-contain"
          style={{
            filter: "drop-shadow(0px 0px 4px rgba(217,178,111,0.4))",
          }}
        />
      </div>

      {/* Links */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-center md:text-left">

        <div>
          <h3 className="text-[#d9b26f] font-bold text-lg mb-4">Fraga</h3>
          <ul className="space-y-2 text-gray-400">
            <li><Link to="/" className="hover:text-[#d9b26f]">Home</Link></li>
            <li><Link to="/sobre" className="hover:text-[#d9b26f]">Sobre</Link></li>
            <li><Link to="/contato" className="hover:text-[#d9b26f]">Contato</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-[#d9b26f] font-bold text-lg mb-4">Produtos</h3>
          <ul className="space-y-2 text-gray-400">
            <li><Link to="/kits" className="hover:text-[#d9b26f]">Kits</Link></li>
            <li><Link to="/cortes" className="hover:text-[#d9b26f]">Cortes Individuais</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-[#d9b26f] font-bold text-lg mb-4">Ajuda</h3>
          <ul className="space-y-2 text-gray-400">
            <li><Link to="/frete" className="hover:text-[#d9b26f]">Frete & Entrega</Link></li>
            <li><Link to="/garantia" className="hover:text-[#d9b26f]">Garantia & Troca</Link></li>
            <li><Link to="/politica" className="hover:text-[#d9b26f]">Política da Loja</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-[#d9b26f] font-bold text-lg mb-4">WhatsApp</h3>
          <p className="text-gray-400">
            <a
              href="https://wa.me/11940473687"
              target="_blank"
              className="hover:text-[#d9b26f]"
            >
              (11) 94047-3687
            </a>
          </p>
        </div>

      </div>

      {/* Linha */}
      <div className="w-full h-px bg-[#2a2a2a] my-10" />

      {/* Rodapé final */}
      <div className="text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Fraga Premium Meat Co.  
        <span className="text-[#d9b26f]"> • </span>
        Todos os direitos reservados.
      </div>

    </footer>
  );
}
