import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

export default function CartPage() {
  const { cart, removeFromCart } = useCart();
  const navigate = useNavigate();

  const total = cart.reduce((sum, item) => sum + (item.price || 0), 0);

  return (
    <div className="py-20 px-6 md:px-20">

      <h1 className="text-3xl font-bold text-[#d9b26f] mb-10">
        Seu Carrinho
      </h1>

      {cart.length === 0 ? (
        <p className="text-gray-400">Seu carrinho está vazio.</p>
      ) : (
        <div className="space-y-6">

          {cart.map((item) => (
            <div
              key={item.id}
              className="bg-[#111] p-6 rounded-xl border border-[#2a2a2a] flex items-center gap-6"
            >
              <div
                className="w-32 h-32 bg-cover bg-center rounded-lg"
                style={{ backgroundImage: `url(${item.image})` }}
              ></div>

              <div className="flex-1">
                <h2 className="text-[#d9b26f] text-xl font-semibold">
                  {item.title}
                </h2>
                <p className="text-[#d9b26f] font-bold">
                  R$ {item.price.toFixed(2)}
                </p>
              </div>

              <button
                className="text-red-400 hover:text-red-300"
                onClick={() => removeFromCart(item.id)}
              >
                Remover
              </button>
            </div>
          ))}

          {/* TOTAL */}
          <h2 className="text-2xl font-bold text-[#d9b26f] mt-10">
            Total: R$ {total.toFixed(2)}
          </h2>

          {/* BOTÃO FINALIZAR */}
          <button
            onClick={() => navigate("/checkout")}
            className="mt-6 bg-[#d9b26f] text-black font-bold px-6 py-3 rounded-lg hover:opacity-90 transition"
          >
            Finalizar Compra
          </button>

        </div>
      )}

    </div>
  );
}
