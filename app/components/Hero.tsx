import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="min-h-screen bg-black px-6 pt-32 pb-20 text-white"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-14 md:grid-cols-2">
        
        {/* TEXTO */}
        <div>
          <p className="text-sm text-zinc-500">Olá, eu sou</p>

          <h1 className="mt-3 text-5xl font-bold leading-tight md:text-6xl">
            Daniel Lucas
          </h1>

          <p className="mt-4 text-2xl text-zinc-300">
            Desenvolvedor em formação
          </p>

          <p className="mt-4 text-zinc-500">
            Criando projetos web e evoluindo na programação.
          </p>

          <div className="mt-8 flex gap-4">
            <a
              href="#projetos"
              className="rounded-xl bg-white px-6 py-3 font-semibold text-black transition hover:scale-105 hover:bg-zinc-200"
            >
              Projetos
            </a>

            <a
              href="#contato"
              className="rounded-xl border border-white/20 px-6 py-3 text-white transition hover:bg-white/10"
            >
              Contato
            </a>
          </div>
        </div>

        {/* IMAGEM */}
        <div className="flex justify-center">
          <div className="relative w-[280px] h-[350px] md:w-[320px] md:h-[400px] rounded-3xl overflow-hidden border border-white/10 bg-white/[0.03] shadow-[0_20px_80px_rgba(255,255,255,0.06)]">
            
            <Image
              src="/minha-foto.jpg"
              alt="Daniel Lucas"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 280px, 320px"
              priority
            />

          </div>
        </div>

      </div>
    </section>
  );
}