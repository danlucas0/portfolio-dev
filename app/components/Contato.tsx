export default function Contato() {
  const contatos = [
    {
      nome: "Email",
      valor: "daniellucasdevv@gmail.com",
      link: "mailto:daniellucasdevv@gmail.com",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="1.8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.75 7.5v9A2.25 2.25 0 0119.5 18.75h-15A2.25 2.25 0 012.25 16.5v-9m19.5 0A2.25 2.25 0 0019.5 5.25h-15A2.25 2.25 0 002.25 7.5m19.5 0l-8.69 5.52a2.25 2.25 0 01-2.12 0L2.25 7.5"
          />
        </svg>
      ),
    },
    {
      nome: "GitHub",
      valor: "danlucas0",
      link: "https://github.com/danlucas0",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 2C6.48 2 2 6.58 2 12.23c0 4.52 2.87 8.35 6.84 9.7.5.1.66-.22.66-.49 0-.24-.01-1.03-.01-1.87-2.78.62-3.37-1.21-3.37-1.21-.46-1.2-1.11-1.52-1.11-1.52-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.35 1.12 2.92.86.09-.67.35-1.12.64-1.38-2.22-.26-4.56-1.14-4.56-5.08 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.3 9.3 0 0112 6.84c.85 0 1.71.12 2.51.35 1.9-1.33 2.74-1.05 2.74-1.05.56 1.41.21 2.45.11 2.71.64.72 1.03 1.63 1.03 2.75 0 3.95-2.34 4.81-4.57 5.07.36.32.68.95.68 1.92 0 1.39-.01 2.5-.01 2.84 0 .27.17.59.67.49A10.23 10.23 0 0022 12.23C22 6.58 17.52 2 12 2z" />
        </svg>
      ),
    },
    {
      nome: "LinkedIn",
      valor: "linkedin.com/in/seuusuario",
      link: "https://linkedin.com/in/seuusuario",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M6.94 8.5H3.56V19h3.38V8.5zM5.25 3A1.97 1.97 0 003.25 5c0 1.1.88 2 1.97 2h.02a1.99 1.99 0 001.99-2A1.98 1.98 0 005.25 3zM20.44 12.3c0-3.13-1.67-4.58-3.9-4.58-1.8 0-2.6.99-3.05 1.69V8.5H10.1c.04.6 0 10.5 0 10.5h3.38v-5.86c0-.31.02-.62.11-.84.25-.62.82-1.25 1.77-1.25 1.25 0 1.75.94 1.75 2.33V19h3.38v-6.7z" />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="contato"
      className="min-h-screen flex items-center px-6 py-28 bg-black"
    >
      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold">Contato</h2>
          <p className="mt-4 text-zinc-400">
            Vamos trocar uma ideia ou trabalhar juntos?
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {contatos.map((item) => (
            <a
              key={item.nome}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-[0_0_40px_rgba(255,255,255,0.05)]"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-white">
                {item.icon}
              </div>

              <h3 className="mb-2 text-2xl font-semibold">{item.nome}</h3>
              <p className="break-words text-zinc-400">{item.valor}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}