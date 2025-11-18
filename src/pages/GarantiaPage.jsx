export default function GarantiaPage() {
  return (
    <div className="min-h-screen bg-[#0c0c0c] text-white py-20 px-6 md:px-32">

      <h1 className="text-4xl font-bold text-[#d9b26f] text-center mb-12">
        Garantia & Política de Troca
      </h1>

      <div className="max-w-4xl mx-auto text-lg leading-relaxed text-gray-300 space-y-10">

        {/* SOBRE A GARANTIA */}
        <section className="bg-[#111] border border-[#2a2a2a] p-8 rounded-xl space-y-4">
          <h2 className="text-2xl font-bold text-[#d9b26f]">
            🛡️ Garantia de Qualidade
          </h2>

          <p>
            A <span className="text-[#d9b26f] font-semibold">Fraga Premium Meat Co.</span> trabalha exclusivamente com 
            cortes selecionados, embalados a vácuo e mantidos sob controle rigoroso de temperatura.
          </p>

          <p>
            Garantimos a integridade, o frescor e a qualidade de cada produto até a entrega final ao cliente.
          </p>
        </section>

        {/* TROCAS */}
        <section className="bg-[#111] border border-[#2a2a2a] p-8 rounded-xl space-y-4">
          <h2 className="text-2xl font-bold text-[#d9b26f]">
            🔄 Trocas & Reclamações
          </h2>

          <p>
            Por serem alimentos perecíveis, as trocas seguem normas específicas. 
            Caso identifique qualquer problema no momento da entrega, você deve:
          </p>

          <ul className="list-disc list-inside space-y-3 text-gray-400">
            <li>Verificar o estado da embalagem no ato do recebimento.</li>
            <li>Conferir o lacre e a integridade da embalagem a vácuo.</li>
            <li>Registrar fotos e vídeos em caso de qualquer irregularidade.</li>
            <li>Entrar em contato conosco em até <span className="text-[#d9b26f]">24 horas</span> após a entrega.</li>
          </ul>

          <p>
            Quando constatado defeito ou inconformidade, fazemos a troca sem custo.
          </p>
        </section>

        {/* O QUE NÃO PODE SER TROCADo */}
        <section className="bg-[#111] border border-[#2a2a2a] p-8 rounded-xl space-y-4">
          <h2 className="text-2xl font-bold text-[#d9b26f]">
            ⚠️ Situações que NÃO são elegíveis para troca
          </h2>

          <ul className="list-disc list-inside space-y-3 text-gray-400">
            <li>Produtos já manipulados após a entrega.</li>
            <li>Produtos fora de refrigeração adequada por responsabilidade do cliente.</li>
            <li>Alteração natural de cor após exposição ao ar (oxigenação).</li>
            <li>Pedidos feitos incorretamente pelo cliente (quantidade/variedade).</li>
          </ul>
        </section>

        {/* CONTATO */}
        <section className="text-center mt-16">
          <p className="text-lg text-gray-400">
            Precisando de ajuda? Entre em contato conosco pelo WhatsApp:
          </p>

          <p className="text-[#d9b26f] text-2xl font-bold mt-2">
            (xx) xxxxx-xxxx
          </p>
        </section>

      </div>

    </div>
  );
}
