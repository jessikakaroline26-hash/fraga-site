export default function Hero() {
  return (
    <section
      className="w-full h-[420px] bg-cover bg-center flex flex-col items-center justify-center text-center px-4"
      style={{ backgroundImage: "url('/assets/hero.jpg')" }}
    >
      <h2 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
        Excelência em cada corte.
      </h2>
      <p className="mt-4 text-lg text-gray-200 max-w-2xl">
        Seleção Angus, frescor garantido e entrega refrigerada direto para sua casa.
      </p>
    </section>
  );
}
