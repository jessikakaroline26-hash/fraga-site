import { useNavigate } from "react-router-dom";

export default function PedidoConfirmado() {
  const navigate = useNavigate();

  return (
    <div className="py-20 px-6 text-center text-white">
<img
  src="/logo/logo.png"
  className="h-28 mx-auto mb-6"
  style={{ filter: "drop-shadow(0px 0px 6px rgba(217,178,111,0.35))" }}
/>


      <h1 className="text-3xl font-bold text-[#d9b26f]">
        Pagamento Confirmado! 🎉
      </h1>

      <p className="text-gray-300 mt-4 max-w-xl mx-auto">
        Seu pedido foi confirmado com sucesso.  
        Nossa equipe já está separando seus cortes premium.
      </p>

      <p className="text-gray-400 mt-6 text-sm">
        Entrega refrigerada diretamente na sua casa.
      </p>

      <button
        onClick={() => navigate("/")}
        className="mt-10 bg-[#d9b26f] text-black px-8 py-3 rounded-lg font-bold hover:opacity-90"
      >
        Voltar para Home
      </button>
    </div>
  );
}
