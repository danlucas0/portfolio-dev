import Hero from "./components/Hero";
import Projetos from "./components/Projetos";
import Experiencia from "./components/Trajetoria";
import Contato from "./components/Contato";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="bg-black text-white">
      <Hero />
      <Projetos />
      <Experiencia />
      <Contato />
      <Skills />
      <Footer />
    </main>
  );
}