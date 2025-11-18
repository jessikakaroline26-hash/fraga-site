export default function SobrePage() {
  return (
    <div className="min-h-screen bg-[#0c0c0c] text-white py-20 px-6 md:px-32">

      {/* TÍTULO */}
      <h1 className="text-4xl font-bold text-[#d9b26f] mb-10 text-center">
        Sobre a Fraga Premium Meat Co.
      </h1>

      {/* TEXTO PRINCIPAL */}
      <div className="max-w-4xl mx-auto text-lg leading-relaxed text-gray-300 space-y-6">

        <p>
          A <span className="text-[#d9b26f] font-semibold">Fraga Premium Meat Co.</span> nasceu com um propósito claro:
          elevar a experiência de consumo de carnes nobres, oferecendo cortes cuidadosamente selecionados, 
          padrão superior de qualidade e entrega refrigerada diretamente na sua porta.
        </p>

        <p>
          Trabalhamos com carnes de alto padrão, provenientes de animais com 
          excelente qualidade, criação responsável e rastreabilidade completa.
          Cada corte passa por um rígido processo de seleção, garantindo maciez,
          sabor e suculência acima da média.
        </p>

        <p>
          Nosso compromisso é unir tradição, qualidade e praticidade — para que você receba em casa cortes 
          frescos, embalados a vácuo, prontos para uso e com a segurança que sua família merece.
        </p>

        <p>
          Aqui, excelência não é um diferencial.  
          <span className="text-[#d9b26f] font-semibold">É o mínimo que entregamos.</span>
        </p>

      </div>

      {/* SEÇÃO DE VALORES */}
      <div className="max-w-5xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-3 gap-10">

        <div className="bg-[#111] p-8 rounded-xl border border-[#2a2a2a] text-center">
          <h3 className="text-xl font-bold text-[#d9b26f] mb-4">Qualidade Premium</h3>
          <p className="text-gray-400">
            Cortes selecionados com rigor técnico, marmoreio superior e padronização garantida.
          </p>
        </div>

        <div className="bg-[#111] p-8 rounded-xl border border-[#2a2a2a] text-center">
          <h3 className="text-xl font-bold text-[#d9b26f] mb-4">Embalagem a Vácuo</h3>
          <p className="text-gray-400">
            Conservação perfeita: sem alteração de sabor, textura ou aparência.
          </p>
        </div>

        <div className="bg-[#111] p-8 rounded-xl border border-[#2a2a2a] text-center">
          <h3 className="text-xl font-bold text-[#d9b26f] mb-4">Entrega Refrigerada</h3>
          <p className="text-gray-400">
            Transporte seguro, mantendo temperatura ideal até chegar na sua casa.
          </p>
        </div>

      </div>

      {/* FRASE FINAL */}
      <div className="mt-20 text-center">
        <p className="text-[#d9b26f] text-2xl font-bold">
          Fraga Premium Meat Co. – Excelência Embalada, Sabor Garantido.
        </p>
      </div>

    </div>
  );
}
