import Hero from "./components/Hero"
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-6 py-12 sm:py-20 sm:px-10 gap-12">
      <Hero />
      <Projects />
      <Contact />
    </main>
  );
}