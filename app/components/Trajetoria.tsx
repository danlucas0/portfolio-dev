export default function Experiencia() {
  const experiencias = [
    {
      titulo: "SENAI - Desenvolvimento de Sistemas",
      periodo: "2025 - 2026",
      descricao:
        "Formação técnica com foco em programação, desenvolvimento web, banco de dados e criação de soluções digitais.",
    },
    {
      titulo: "Curso de Manutenção de Computadores e Celulares",
      periodo: "2023 - 2024",
      descricao:
        "Aprendizado em manutenção de hardware, montagem, formatação, instalação de sistemas e diagnóstico de problemas.",
    },
    {
      titulo: "Projetos práticos",
      periodo: "Atualmente",
      descricao:
        "Desenvolvimento de aplicações e páginas web como forma de praticar e consolidar conhecimento técnico.",
    },
  ];

  return (
    <section
      id="experiencia"
      className="min-h-screen flex items-center px-6 py-28 bg-black"
    >
      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold">Minha trajetória até aqui</h2>
          <p className="mt-4 text-zinc-400">
            Formação, cursos e prática que vêm construindo meu caminho na área de tecnologia.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {experiencias.map((item) => (
            <div
              key={item.titulo}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition hover:-translate-y-1 hover:border-white/20 hover:shadow-[0_0_40px_rgba(255,255,255,0.05)]"
            >
              <span className="mb-4 inline-block rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium text-zinc-400">
                {item.periodo}
              </span>

              <h3 className="mb-3 text-xl font-semibold">{item.titulo}</h3>

              <p className="text-zinc-400">{item.descricao}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}