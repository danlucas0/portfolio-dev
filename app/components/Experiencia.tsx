export default function Experiencia() {
  const experiencias = [
    {
      titulo: "SENAI - Desenvolvimento de Sistemas",
      descricao:
        "Formação técnica com foco em programação, desenvolvimento web, banco de dados e criação de soluções digitais.",
    },
    {
      titulo: "Curso de Manutenção de Computadores e Celulares",
      descricao:
        "Aprendizado em manutenção de hardware, montagem, formatação, instalação de sistemas e diagnóstico de problemas.",
    },
    {
      titulo: "Projetos práticos",
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
        <h2 className="mb-12 text-center text-4xl font-bold">Experiências</h2>

        <div className="grid gap-8 md:grid-cols-3">
          {experiencias.map((item) => (
            <div
              key={item.titulo}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition hover:-translate-y-1 hover:border-white/20"
            >
              <h3 className="mb-3 text-xl font-semibold">{item.titulo}</h3>
              <p className="text-zinc-400">{item.descricao}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}   