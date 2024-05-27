import About from "@/components/about";
import Feature from "@/components/feature";
import Hero from "@/components/hero";

export default function HomePage() {
  return (
    <main className="w-full overflow-hidden">
      <Hero />
      <About />
      <Feature />
    </main>
  );
}
