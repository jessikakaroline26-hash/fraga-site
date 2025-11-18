import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Hero from "./components/Hero";
import ProductCard from "./components/ProductCard";
import Footer from "./components/Footer";

import { kits } from "./data/kits";
import { cortes } from "./data/cortes";

import CartPage from "./pages/CartPage";
import ProductPage from "./pages/ProductPage";
import KitsPage from "./pages/KitsPage";
import CortesPage from "./pages/CortesPage";
import ContatoPage from "./pages/ContatoPage";
import CheckoutPage from "./pages/CheckoutPage";
import PedidoConfirmado from "./pages/PedidoConfirmado";
import SobrePage from "./pages/SobrePage";
import FretePage from "./pages/FretePage";
import GarantiaPage from "./pages/GarantiaPage";
import PoliticaPage from "./pages/PoliticaPage";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0c0c0c] text-white font-sans">

      <Header />

      <Routes>

        {/* ---------------- HOME ---------------- */}
        <Route
          path="/"
          element={
            <>
              <Hero />

              {/* KITS */}
              <section className="py-16 px-6 md:px-20">
                <h3 className="text-3xl font-bold text-[#d9b26f] mb-10 text-center">
                  Kits Premium
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                  {kits.map((kit) => (
                    <ProductCard
                      key={kit.id}
                      id={kit.id}
                      title={kit.title}
                      price={kit.price}
                      images={kit.images}  // CORRETO
                    />
                  ))}
                </div>
              </section>

              {/* CORTES */}
              <section className="py-16 px-6 md:px-20 bg-[#0f0f0f] border-t border-[#2a2a2a]">
                <h3 className="text-3xl font-bold text-[#d9b26f] mb-10 text-center">
                  Cortes Individuais
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
                  {cortes.map((cut) => (
                    <ProductCard
                      key={cut.id}
                      id={cut.id}
                      title={cut.title}
                      price={cut.price}
                      images={cut.images}  // CORREÇÃO AQUI!
                    />
                  ))}
                </div>
              </section>

              <Footer />
            </>
          }
        />

        {/* ---------------- PÁGINA DE PRODUTO ---------------- */}
        <Route path="/produto/:id" element={<ProductPage />} />

        {/* ---------------- PÁGINA DO CARRINHO ---------------- */}
        <Route path="/carrinho" element={<CartPage />} />

        {/* ---------------- PÁGINAS DO MENU ---------------- */}
        <Route path="/kits" element={<KitsPage />} />
        <Route path="/cortes" element={<CortesPage />} />
        <Route path="/contato" element={<ContatoPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/pedido-confirmado" element={<PedidoConfirmado />} />
        <Route path="/sobre" element={<SobrePage />} />
        <Route path="/frete" element={<FretePage />} />
        <Route path="/garantia" element={<GarantiaPage />} />
        <Route path="/politica" element={<PoliticaPage />} />

      </Routes>

    </div>
  );
}
