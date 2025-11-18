export default function ContatoPage() {
  return (
    <div className="min-h-screen bg-[#0c0c0c] text-white py-20 px-6 md:px-32">

      <h1 className="text-4xl font-bold text-[#d9b26f] text-center mb-12">
        Fale Conosco
      </h1>

      <p className="text-center text-gray-300 max-w-2xl mx-auto mb-16 text-lg">
        Estamos à disposição para dúvidas, pedidos personalizados, informações
        sobre frete ou qualquer suporte necessário.
      </p>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* WHATSAPP */}
        <div className="bg-[#111] border border-[#2a2a2a] p-8 rounded-xl text-center">
          <h2 className="text-2xl font-bold text-[#25D366] mb-4">WhatsApp</h2>
          <p classiaName="text-gray-400 mb-6">
            Atendimento rápido e direto, clique abaixo para conversar.
          </p>
          <a
            href="https://wa.me/11940473687"
            target="_blank"
            className="bg-[#25D366] text-black font-bold px-6 py-3 rounded-lg hover:opacity-90 transition inline-block"
          >
            Chamar no WhatsApp
          </a>
        </div>

        {/* E-MAIL */}
        <div className="bg-[#111] border border-[#2a2a2a] p-8 rounded-xl text-center">
          <h2 className="text-2xl font-bold text-[#d9b26f] mb-4">E-mail</h2>
          <p className="text-gray-400 mb-4">
            Preferiu um contato formal? Envie sua mensagem.
          </p>
          <p className="text-gray-300 font-semibold">
            contato@fragapremium.com
          </p>
        </div>

        {/* HORÁRIO */}
        <div className="bg-[#111] border border-[#2a2a2a] p-8 rounded-xl text-center">
          <h2 className="text-2xl font-bold text-[#d9b26f] mb-4">Horário</h2>
          <p className="text-gray-400 mb-2">Segunda à Sexta</p>
          <p className="text-gray-300 font-semibold">09h às 20h</p>
          <p className="text-gray-400 mt-4">Sábado até 19h e Domingo/feriado até 12h</p>
        </div>

      </div>

      {/* LOCALIZAÇÃO (OPCIONAL) */}
      <div className="max-w-3xl mx-auto mt-16 text-center">
        <h2 className="text-2xl font-bold text-[#d9b26f] mb-4">Localização</h2>
        <p className="text-gray-400">
          Entregamos em toda região. Consulte disponibilidade pelo WhatsApp.
        </p>
      </div>

      {/* FRASE FINAL */}
      <div className="mt-20 text-center">
        <p className="text-[#d9b26f] text-2xl font-bold">
          Estamos aqui para oferecer a melhor experiência em carnes premium.
        </p>
      </div>

    </div>
  );
}
