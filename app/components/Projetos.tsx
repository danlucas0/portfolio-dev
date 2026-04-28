export default function Projetos() {
  const projetos = [
    {
      nome: "FutPanel",
      descricao:
        "Sistema para gestão de partidas de futsal com sorteio de equipes, placar em tempo real e ranking de jogadores.",
      site: "https://futpanel.vercel.app/login",
      github: "https://github.com/danlucas0",
      imagem: "/fut.png",
      stack: ["Next.js", "Prisma", "JWT", "TypeScript"],
    },

    {
      nome: "Sistema de Estoque",
      descricao:
        "Sistema de estoque com login, controle de produtos, movimentações e painel administrativo.",
      site: "https://projeto-frontend-estoque-api-master.vercel.app/Login",
      github: "https://github.com/danlucas0",
      imagem: "/estoque.png",
      stack: ["Next.js", "NestJS", "MySQL", "JWT"],
    },

    {
      nome: "Sistema de Restaurante",
      descricao:
        "Sistema com login, pedidos por mesa ou entrega, escolha de pagamento e fluxo de atendimento integrado.",
      site: "https://ap-is-res-tful-with-java-script-tau.vercel.app/",
      github: "https://github.com/danlucas0",
      imagem: "/restaurante.png",
      stack: ["REST API", "Express", "MySQL", "JWT"],
    },

    {
      nome: "E-commerce",
      descricao:
        "E-commerce integrado com API de produtos, carrinho de compras e busca automática de endereço por CEP.",
      site: "https://api-store-cart-frete.vercel.app/",
      github: "https://github.com/danlucas0",
      imagem: "/loja.png",
      stack: ["Next.js", "Tailwind", "Cart State", "CEP API"],
    },

    {
      nome: "Cat Gallery API",
      descricao:
        "Aplicação que consome API externa de gatos, exibindo imagens dinâmicas com foco em UX, responsividade e integração com serviços REST.",
      site: "https://cat-gallery-premium.vercel.app",
      github: "https://github.com/danlucas0",
      imagem: "/gatos1.png",
      stack: ["Next.js", "TheCatAPI", "Tailwind", "React"],
    },
  ];

  return (
    <section
      id="projetos"
      className="min-h-screen bg-black px-6 py-28 text-white"
    >
      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-14 text-center">
          <h2 className="text-4xl font-bold">Projetos</h2>

          <p className="mx-auto mt-4 max-w-2xl text-zinc-400">
            Alguns dos projetos que venho desenvolvendo para praticar
            front-end, back-end, integração com APIs e experiência do usuário.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">
          {projetos.map((proj) => (
            <div
              key={proj.nome}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-white/20 hover:shadow-[0_20px_80px_rgba(255,255,255,0.05)]"
            >
              <div className="relative h-56 w-full overflow-hidden border-b border-white/10 bg-zinc-900">
                <img
                  src={proj.imagem}
                  alt={proj.nome}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-6">
                <div className="mb-4 flex flex-wrap gap-2">
                  {proj.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-zinc-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <h3 className="mb-3 text-2xl font-semibold">
                  {proj.nome}
                </h3>

                <p className="mb-6 leading-relaxed text-zinc-400">
                  {proj.descricao}
                </p>

                <div className="flex flex-wrap gap-3">
                  <a
                    href={proj.site}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-black transition hover:scale-105 hover:bg-zinc-200"
                  >
                    Ver projeto
                  </a>

                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl border border-white/20 px-5 py-2.5 text-sm text-white transition hover:bg-white/10"
                  >
                    Ver código
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}