export default function PoliticaPage() {
  return (
    <div className="min-h-screen bg-[#0c0c0c] text-white py-20 px-6 md:px-32">

      <h1 className="text-4xl font-bold text-[#d9b26f] text-center mb-12">
        Política da Loja & FAQ
      </h1>

      <div className="max-w-4xl mx-auto text-lg leading-relaxed space-y-16">

        {/* POLÍTICA DA LOJA */}
        <section className="bg-[#111] p-8 rounded-xl border border-[#2a2a2a]">
          <h2 className="text-2xl font-bold text-[#d9b26f] mb-4">
            📜 Política da Loja
          </h2>

          <ul className="list-disc list-inside text-gray-300 space-y-3">
            <li>Todos os produtos são enviados embalados a vácuo.</li>
            <li>A entrega é sempre refrigerada, garantindo padrão premium.</li>
            <li>Pedidos são preparados após confirmação de pagamento.</li>
            <li>Em caso de dúvidas sobre frete, consulte nossa página de entrega.</li>
            <li>Não trabalhamos com devoluções de alimentos já manipulados.</li>
            <li>Se houver problemas na entrega, siga a Política de Garantia & Troca.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="bg-[#111] p-8 rounded-xl border border-[#2a2a2a]">
          <h2 className="text-2xl font-bold text-[#d9b26f] mb-6">
            ❓ Perguntas Frequentes (FAQ)
          </h2>

          <div className="space-y-8">

            <div>
              <h3 className="text-xl text-[#d9b26f] font-bold mb-2">
                Como a carne chega na minha casa?
              </h3>
              <p className="text-gray-300">
                Sempre refrigerada, em embalagens seguras e em caixa térmica.
              </p>
            </div>

            <div>
              <h3 className="text-xl text-[#d9b26f] font-bold mb-2">
                Posso agendar horário de entrega?
              </h3>
              <p className="text-gray-300">
                Sim! Basta combinar pelo WhatsApp após o pedido.
              </p>
            </div>

            <div>
              <h3 className="text-xl text-[#d9b26f] font-bold mb-2">
                Os produtos vêm congelados ou frescos?
              </h3>
              <p className="text-gray-300">
                Trabalhamos com produtos resfriados, conservados a baixa temperatura.
              </p>
            </div>

            <div>
              <h3 className="text-xl text-[#d9b26f] font-bold mb-2">
                Qual a validade dos produtos?
              </h3>
              <p className="text-gray-300">
                Cada corte possui validade indicada na embalagem e no lacre.
              </p>
            </div>

            <div>
              <h3 className="text-xl text-[#d9b26f] font-bold mb-2">
                E se o produto chegar com algum problema?
              </h3>
              <p className="text-gray-300">
                Entre em contato imediatamente via WhatsApp para analisarmos o caso e efetuarmos a troca.
              </p>
            </div>

          </div>
        </section>

      </div>

      <div className="text-center mt-20">
        <p className="text-[#d9b26f] text-2xl font-bold">
          Nossa prioridade é sua confiança.  
        </p>
        <p className="text-gray-400 mt-2">
          Transparência e qualidade em cada entrega.
        </p>
      </div>

    </div>
  );
}
