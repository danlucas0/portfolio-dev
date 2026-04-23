import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen overflow-hidden bg-black px-6 pt-32 pb-20 text-white"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[8%] top-[18%] h-56 w-56 rounded-full bg-white/[0.04] blur-3xl" />
        <div className="absolute right-[10%] bottom-[15%] h-72 w-72 rounded-full bg-white/[0.03] blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-16 md:grid-cols-2">
        
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

          <div className="mt-8 flex flex-wrap gap-4">
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

        {/* FOTO COM GLOW */}
        <div className="flex justify-center">
          <div className="relative">

            {/* GLOW SUAVE */}
            <div className="absolute -inset-6 bg-white/20 blur-2xl opacity-60 rounded-3xl" />

            {/* IMAGEM */}
            <div className="relative h-[350px] w-[280px] overflow-hidden rounded-3xl md:h-[400px] md:w-[320px]">
              <Image
                src="/ney.jpg"
                alt="Daniel Lucas"
                fill
                className="object-cover object-center grayscale"
                sizes="(max-width: 768px) 280px, 320px"
                priority
              />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}