import Image from "next/image";

export default function Hero() {
  return (
    <section id="inicio" className="min-h-screen flex items-center px-6 pt-28">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-zinc-400">Olá, eu sou</p>
          <h1 className="text-5xl font-bold">Daniel Lucas</h1>
          <h2 className="text-2xl text-zinc-300 mt-2">Desenvolvedor Full Stack</h2>

          <p className="text-zinc-400 mt-4">
            Criando projetos web e evoluindo na programação.
          </p>

          <div className="flex gap-4 mt-6">
            <a
              href="#projetos"
              className="bg-white text-black px-5 py-2 rounded-xl"
            >
              Projetos
            </a>
            <a
              href="#contato"
              className="border border-white px-5 py-2 rounded-xl"
            >
              Contato
            </a>
          </div>
        </div>

        <div className="relative h-[350px] w-[280px] mx-auto">
          <Image
            src="/minha-foto.jpg"
            alt="Daniel Lucas"
            fill
            className="object-cover rounded-2xl"
            sizes="(max-width: 768px) 260px, 340px"
            priority
          />
        </div>
      </div>
    </section>
  );
}