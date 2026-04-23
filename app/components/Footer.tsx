export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black py-6 text-center text-sm text-zinc-500">
      © {new Date().getFullYear()} Daniel Lucas — Desenvolvedor Fullstack em formação
    </footer>
  );
}