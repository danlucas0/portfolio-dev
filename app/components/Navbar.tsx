"use client";

import { useState } from "react";

export default function Navbar() {
  const [menuAberto, setMenuAberto] = useState(false);

  const fecharMenu = () => setMenuAberto(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-black/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6">
        <a
          href="#inicio"
          className="text-lg font-bold tracking-wide text-white transition hover:opacity-90 md:text-xl"
        >
          daniellucas<span className="text-zinc-400">.dev</span>
        </a>

        <nav className="hidden items-center gap-2 md:flex">
          <a
            href="#projetos"
            className="rounded-xl px-3 py-2 text-sm font-medium text-white transition hover:bg-white/10"
          >
            Projetos
          </a>

          <a
            href="#experiencia"
            className="rounded-xl px-3 py-2 text-sm font-medium text-white transition hover:bg-white/10"
          >
            Trajetória
          </a>

          <a
            href="#skills"
            className="rounded-xl px-3 py-2 text-sm font-medium text-white transition hover:bg-white/10"
          >
            Skills
          </a>

          <a
            href="#contato"
            className="rounded-xl px-3 py-2 text-sm font-medium text-white transition hover:bg-white/10"
          >
            Contato
          </a>

          <a
            href="#contato"
            className="ml-2 rounded-2xl bg-white px-5 py-2.5 text-sm font-semibold text-black transition hover:scale-105 hover:bg-zinc-200"
          >
            Falar comigo
          </a>
        </nav>

        <button
          onClick={() => setMenuAberto(!menuAberto)}
          className="flex flex-col gap-1.5 md:hidden"
          aria-label="Abrir menu"
        >
          <span className="h-0.5 w-6 rounded bg-white"></span>
          <span className="h-0.5 w-6 rounded bg-white"></span>
          <span className="h-0.5 w-6 rounded bg-white"></span>
        </button>
      </div>

      {menuAberto && (
        <nav className="border-t border-white/10 bg-black/95 backdrop-blur-xl md:hidden">
          <ul className="flex flex-col px-4 py-4 text-sm">
            <li>
              <a
                href="#projetos"
                onClick={fecharMenu}
                className="block rounded-xl px-3 py-3 font-medium text-white transition hover:bg-white/10"
              >
                Projetos
              </a>
            </li>

            <li>
              <a
                href="#experiencia"
                onClick={fecharMenu}
                className="block rounded-xl px-3 py-3 font-medium text-white transition hover:bg-white/10"
              >
                Trajetória
              </a>
            </li>

            <li>
              <a
                href="#skills"
                onClick={fecharMenu}
                className="block rounded-xl px-3 py-3 font-medium text-white transition hover:bg-white/10"
              >
                Skills
              </a>
            </li>

            <li>
              <a
                href="#contato"
                onClick={fecharMenu}
                className="block rounded-xl px-3 py-3 font-medium text-white transition hover:bg-white/10"
              >
                Contato
              </a>
            </li>

            <li className="mt-2">
              <a
                href="#contato"
                onClick={fecharMenu}
                className="block rounded-2xl bg-white px-3 py-3 text-center font-semibold text-black transition hover:bg-zinc-200"
              >
                Falar comigo
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}