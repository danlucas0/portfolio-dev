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

  const ferramentas = ["Git", "GitHub"];


  return (
    <section id="skills" className="min-h-screen flex items-center px-6 py-28 bg-black">
      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold">Skills</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-zinc-400">
            Tecnologias e ferramentas que venho utilizando para desenvolver
            interfaces, APIs e projetos práticos.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* FRONT-END */}
          <div className="group rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-white/20 hover:shadow-[0_20px_80px_rgba(255,255,255,0.06)]">
            <div className="mb-8">
              <h3 className="text-3xl font-semibold text-white">Front-end</h3>
              <p className="mt-3 text-zinc-400">
                Criação de interfaces modernas, responsivas e com foco em boa
                experiência do usuário.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {frontend.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-zinc-200 transition duration-300 hover:scale-105 hover:border-white/20 hover:bg-white/[0.08]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* BACK-END */}
          <div className="group rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-white/20 hover:shadow-[0_20px_80px_rgba(255,255,255,0.06)]">
            <div className="mb-8">
              <h3 className="text-3xl font-semibold text-white">Back-end</h3>
              <p className="mt-3 text-zinc-400">
                Construção de APIs e organização da lógica do sistema.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {backend.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-zinc-200 transition duration-300 hover:scale-105 hover:border-white/20 hover:bg-white/[0.08]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* DADOS */}
          <div className="group rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-white/20 hover:shadow-[0_20px_80px_rgba(255,255,255,0.06)]">
            <div className="mb-8">
              <h3 className="text-3xl font-semibold text-white">Dados</h3>
              <p className="mt-3 text-zinc-400">
                Consultas, modelagem e manipulação de dados em sistemas.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {dados.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-zinc-200 transition duration-300 hover:scale-105 hover:border-white/20 hover:bg-white/[0.08]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* FERRAMENTAS */}
          <div className="group rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-white/20 hover:shadow-[0_20px_80px_rgba(255,255,255,0.06)]">
            <div className="mb-8">
              <h3 className="text-3xl font-semibold text-white">Ferramentas</h3>
              <p className="mt-3 text-zinc-400">
                Recursos que ajudam na organização e versionamento dos projetos.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {ferramentas.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-zinc-200 transition duration-300 hover:scale-105 hover:border-white/20 hover:bg-white/[0.08]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
