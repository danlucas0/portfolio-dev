"use client";

import { useState } from "react";

export default function Navbar() {
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-black/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6">
        {/* Logo / Nome */}
        <a
          href="#inicio"
          className="text-lg font-bold tracking-wide md:text-xl"
        >
          daniellucas<span className="text-zinc-400">.dev</span>
        </a>

        {/* Menu Desktop */}
        <nav className="hidden md:block">
          <ul className="flex gap-3 text-sm md:text-base">
            <li>
              <a
                href="#projetos"
                className="rounded-xl px-3 py-1.5 transition hover:bg-white/10 hover:backdrop-blur-sm"
              >
                Projetos
              </a>
            </li>
            <li>
              <a
                href="#experiencia"
                className="rounded-xl px-3 py-1.5 transition hover:bg-white/10 hover:backdrop-blur-sm"
              >
                Trajetória
              </a>
            </li>
            <li>
              <a
                href="#contato"
                className="rounded-xl px-3 py-1.5 transition hover:bg-white/10 hover:backdrop-blur-sm"
              >
                Contato
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="rounded-xl px-3 py-1.5 transition hover:bg-white/10 hover:backdrop-blur-sm"
              >
                Skills
              </a>
            </li>
          </ul>
        </nav>

        {/* Botão Mobile */}
        <button
          onClick={() => setMenuAberto(!menuAberto)}
          className="flex flex-col gap-1 md:hidden"
          aria-label="Abrir menu"
        >
          <span className="h-0.5 w-6 bg-white"></span>
          <span className="h-0.5 w-6 bg-white"></span>
          <span className="h-0.5 w-6 bg-white"></span>
        </button>
      </div>

      {/* Menu Mobile */}
      {menuAberto && (
        <nav className="border-t border-white/10 bg-black/90 backdrop-blur-xl md:hidden">
          <ul className="flex flex-col px-4 py-4 text-sm">
            <li>
              <a
                href="#projetos"
                onClick={() => setMenuAberto(false)}
                className="block rounded-xl px-3 py-2 transition hover:bg-white/10"
              >
                Projetos
              </a>
            </li>
            <li>
              <a
                href="#experiencia"
                onClick={() => setMenuAberto(false)}
                className="block rounded-xl px-3 py-2 transition hover:bg-white/10"
              >
                Experiência
              </a>
            </li>
            <li>
              <a
                href="#contato"
                onClick={() => setMenuAberto(false)}
                className="block rounded-xl px-3 py-2 transition hover:bg-white/10"
              >
                Contato
              </a>
            </li>
            <li>
              <a
                href="#skills"
                onClick={() => setMenuAberto(false)}
                className="block rounded-xl px-3 py-2 transition hover:bg-white/10"
              >
                Skills
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}