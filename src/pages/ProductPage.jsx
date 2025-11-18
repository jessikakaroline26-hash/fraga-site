import { useParams } from "react-router-dom";
import { kits } from "../data/kits";
import { cortes } from "../data/cortes";
import { useCart } from "../context/CartContext";
import { useState } from "react";

export default function ProductPage() {
  const { id } = useParams();
  const { addToCart } = useCart();

  const allProducts = [...kits, ...cortes];
  const product = allProducts.find((item) => item.id === id);

  // Se não houver imagens, evita erro
  const initialImage =
    product?.images && product.images.length > 0
      ? product.images[0]
      : product?.image;

  const [selectedImage, setSelectedImage] = useState(initialImage);

  if (!product) {
    return (
      <div className="p-10 text-center text-red-400">
        Produto não encontrado.
      </div>
    );
  }

  return (
    <div className="py-16 px-6 md:px-20 text-white">

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">

        {/* GALERIA */}
        <div>
          {/* Imagem grande */}
          <div
            className="w-full h-96 bg-cover bg-center rounded-xl border border-[#2a2a2a] shadow-xl"
            style={{ backgroundImage: `url(${selectedImage})` }}
          ></div>

          {/* Miniaturas */}
          <div className="flex gap-4 mt-4 flex-wrap">
            {product.images && product.images.length > 0 ? (
              product.images.map((img, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedImage(img)}
                  className={`w-20 h-20 rounded-lg bg-cover bg-center border cursor-pointer transition ${
                    selectedImage === img
                      ? "border-[#d9b26f] scale-105"
                      : "border-[#2a2a2a]"
                  }`}
                  style={{ backgroundImage: `url(${img})` }}
                ></div>
              ))
            ) : (
              <div
                className="w-20 h-20 bg-cover bg-center rounded-lg border border-[#2a2a2a]"
                style={{ backgroundImage: `url(${product.image})` }}
              ></div>
            )}
          </div>
        </div>

        {/* INFORMAÇÕES */}
        <div className="flex flex-col">

          {/* Título */}
          <h1 className="text-3xl font-bold text-[#d9b26f]">
            {product.title}
          </h1>

          {/* Preço */}
          <p className="text-4xl font-bold mt-4 text-white">
            R$ {product.price.toFixed(2)}
          </p>

          {/* Selos premium */}
          <div className="flex gap-3 mt-6">
            <span className="px-4 py-1 border border-[#d9b26f] text-[#d9b26f] rounded-full text-sm">
              Angus
            </span>
            <span className="px-4 py-1 border border-[#d9b26f] text-[#d9b26f] rounded-full text-sm">
              Resfriado
            </span>
            <span className="px-4 py-1 border border-[#d9b26f] text-[#d9b26f] rounded-full text-sm">
              Premium
            </span>
          </div>

          {/* Descrição */}
          <p className="text-gray-300 mt-8 leading-relaxed">
            Corte selecionado com padrão superior de marmoreio, garantindo
            maciez e suculência excepcionais. Ideal para churrascos de alto
            nível, refeições especiais e momentos gourmet.
          </p>

          {/* Entrega */}
          <p className="mt-6 text-gray-400 text-sm">
            🚚 Entrega refrigerada direto na sua casa — frescor e qualidade garantidos.
          </p>

          {/* Botões */}
          <div className="flex gap-4 mt-10">
            <button
              className="bg-[#d9b26f] text-black font-bold px-8 py-3 rounded-lg hover:opacity-90 transition"
              onClick={() => addToCart(product)}
            >
              Adicionar ao Carrinho
            </button>

            <button
              onClick={() => addToCart(product) || navigate("/checkout")}
              className="border border-[#d9b26f] text-[#d9b26f] font-bold px-8 py-3 rounded-lg hover:bg-[#d9b26f] hover:text-black transition"
            >
              Comprar Agora
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
