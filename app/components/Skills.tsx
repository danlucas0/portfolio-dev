export default function Skills() {
  const frontend = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Tailwind CSS",
  ];

  const backend = ["Node.js", "NestJS"];
  const dados = ["SQL", "MySQL", "Workbench"];
  const ferramentas = ["Git", "GitHub", "VS Code", "Thunder Client"];

  const grupos = [
    {
      titulo: "Front-end",
      descricao:
        "Criação de interfaces modernas, responsivas e com foco em experiência do usuário.",
      items: frontend,
    },
    {
      titulo: "Back-end",
      descricao:
        "Construção de APIs, regras de negócio e organização da lógica do sistema.",
      items: backend,
    },
    {
      titulo: "Dados",
      descricao:
        "Consultas, modelagem e manipulação de dados em aplicações e sistemas.",
      items: dados,
    },
    {
      titulo: "Ferramentas",
      descricao:
        "Recursos que ajudam na produtividade, versionamento e testes dos projetos.",
      items: ferramentas,
    },
  ];

  return (
    <section
      id="skills"
      className="min-h-screen bg-black px-6 py-28 text-white"
    >
      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-14 text-center">
          <h2 className="text-4xl font-bold">Skills</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-zinc-400">
            Tecnologias e ferramentas que venho utilizando para desenvolver
            interfaces, APIs e projetos práticos.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {grupos.map((grupo) => (
            <div
              key={grupo.titulo}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-white/20 hover:shadow-[0_20px_80px_rgba(255,255,255,0.05)]"
            >
              <div className="mb-8">
                <h3 className="text-3xl font-semibold text-white">
                  {grupo.titulo}
                </h3>
                <p className="mt-3 text-zinc-400">{grupo.descricao}</p>
              </div>

              <div className="flex flex-wrap gap-3">
                {grupo.items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-zinc-200 transition duration-300 hover:scale-105 hover:border-white/20 hover:bg-white/[0.08]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}