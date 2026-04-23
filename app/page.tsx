import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projetos from "./components/Projetos";
import Trajetoria from "./components/Trajetoria";
import Skills from "./components/Skills";
import Contato from "./components/Contato";
import Footer from "./components/Footer";
import MusicToggle from "./components/MusicToggle";

export default function Home() {
  return (
    <main className="bg-black text-white">
      <Navbar />
      <Hero />
      <Projetos />
      <Trajetoria />
      <Skills />
      <Contato />
      <Footer />
      <MusicToggle />
    </main>
  );
}