export default function FretePage() {
  return (
    <div className="min-h-screen bg-[#0c0c0c] text-white py-20 px-6 md:px-32">

      <h1 className="text-4xl font-bold text-[#d9b26f] text-center mb-12">
        Frete & Entrega Refrigerada
      </h1>

      <div className="max-w-4xl mx-auto space-y-8 text-lg leading-relaxed text-gray-300">

        <p>
          A <span className="text-[#d9b26f] font-semibold">Fraga Premium Meat Co.</span> trabalha com um sistema 
          de entrega especializado para garantir que seu pedido chegue sempre fresco, seguro e na temperatura ideal.
        </p>

        <div className="bg-[#111] border border-[#2a2a2a] p-8 rounded-xl space-y-6">
          <h2 className="text-2xl font-bold text-[#d9b26f]">📦 Como funciona a entrega?</h2>

          <ul className="list-disc list-inside space-y-3 text-gray-300">
            <li>Carnes enviadas em <span className="text-[#d9b26f]">embalagem a vácuo</span> para máxima conservação.</li>
            <li>Transporte realizado em <span className="text-[#d9b26f]">caixas térmicas</span> para manter temperatura correta.</li>
            <li>Entrega sempre em <span className="text-[#d9b26f]">baixa temperatura (refrigerado)</span>.</li>
            <li>Seu pedido não perde textura, cor ou maciez.</li>
          </ul>
        </div>

        <div className="bg-[#111] border border-[#2a2a2a] p-8 rounded-xl space-y-6">
          <h2 className="text-2xl font-bold text-[#d9b26f]">🚚 Prazo de entrega</h2>

          <p>
            Entregamos de acordo com a rota diária da região.  
            Após a confirmação do pagamento, seu pedido é preparado e enviado no mesmo dia ou no próximo dia útil.
          </p>
        </div>

        <div className="bg-[#111] border border-[#2a2a2a] p-8 rounded-xl space-y-6">
          <h2 className="text-2xl font-bold text-[#d9b26f]">📍 Área de atendimento</h2>

          <p>
            Atendemos toda região local. Para verificar disponibilidade de entrega para o seu endereço,
            entre em contato pelo WhatsApp:
          </p>

          <p className="text-[#d9b26f] font-bold text-xl text-center">
            (xx) xxxxx-xxxx
          </p>
        </div>

        <div className="text-center mt-12">
          <p className="text-[#d9b26f] text-2xl font-bold">
            Frescor Garantido. Qualidade Incomparável.
          </p>
        </div>

      </div>
    </div>
  );
}
