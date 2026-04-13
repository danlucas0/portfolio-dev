export default function Projetos() {
  const projetos = [
    {
      nome: "Sistema de Estoque",
      descricao: "Sistema de controle de estoque com login, painel e CRUD.",
      site: "#",
      github: "#",
    },
    {
      nome: "Landing Page",
      descricao: "Landing page moderna e responsiva com foco em design.",
      site: "#",
      github: "#",
    },
  ];

  return (
    <section
      id="projetos"
      className="min-h-screen flex items-center px-6 py-28 bg-black"
    >
      <div className="mx-auto w-full max-w-6xl">
        <h2 className="mb-12 text-center text-4xl font-bold">Projetos</h2>

        <div className="grid gap-8 md:grid-cols-2">
          {projetos.map((proj) => (
            <div
              key={proj.nome}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition hover:-translate-y-1 hover:border-white/20"
            >
              <h3 className="mb-3 text-2xl font-semibold">{proj.nome}</h3>

              <p className="mb-6 text-zinc-400">{proj.descricao}</p>

              <div className="flex gap-4">
                <a
                  href={proj.site}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-black transition hover:scale-105"
                >
                  Ver projeto
                </a>

                <a
                  href={proj.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl border border-white/20 px-4 py-2 text-sm transition hover:bg-white/10"
                >
                  Código
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}