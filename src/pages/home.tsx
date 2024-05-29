import About from "@/components/about";
import Experience from "@/components/experience";
import Feature from "@/components/feature";
import Guide from "@/components/guide";
import Hero from "@/components/hero";

export default function HomePage() {
  return (
    <main className="w-full ">
      <Hero />
      <About />
      <Feature />
      <Guide/>
      <Experience/>
    </main>
  );
}
