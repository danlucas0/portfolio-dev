export default function Trajetoria() {
  const experiencias = [
    {
      titulo: "SENAI - Desenvolvimento de Sistemas",
      periodo: "2025 - 2026",
      descricao:
        "Formação técnica com foco em programação, desenvolvimento web, banco de dados, APIs e criação de soluções digitais.",
    },
    {
      titulo: "Curso de Manutenção de Computadores e Celulares",
      periodo: "2023 - 2024",
      descricao:
        "Aprendizado em hardware, montagem, formatação, instalação de sistemas e diagnóstico de problemas.",
    },
    {
      titulo: "Projetos práticos",
      periodo: "Atualmente",
      descricao:
        "Desenvolvimento de sistemas e páginas web para consolidar conhecimentos técnicos e evoluir na prática.",
    },
  ];

  return (
    <section
      id="experiencia"
      className="min-h-screen bg-black px-6 py-28 text-white"
    >
      <div className="mx-auto w-full max-w-5xl">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold">Minha trajetória até aqui</h2>
          <p className="mx-auto mt-4 max-w-2xl text-zinc-400">
            Formação, aprendizado técnico e prática constante construindo minha
            evolução na área de tecnologia.
          </p>
        </div>

        <div className="relative ml-2 border-l border-white/10 pl-8">
          {experiencias.map((item) => (
            <div key={item.titulo} className="relative pb-12 last:pb-0">
              <span className="absolute -left-[41px] top-1 flex h-5 w-5 items-center justify-center rounded-full border border-white/20 bg-white"></span>

              <span className="inline-flex rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium text-zinc-400">
                {item.periodo}
              </span>

              <div className="mt-4 rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition hover:border-white/20 hover:shadow-[0_20px_80px_rgba(255,255,255,0.05)]">
                <h3 className="mb-3 text-xl font-semibold">{item.titulo}</h3>
                <p className="leading-relaxed text-zinc-400">
                  {item.descricao}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}