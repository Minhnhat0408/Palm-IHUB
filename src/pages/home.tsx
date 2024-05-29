import About from "@/components/about";
import Advantages from "@/components/advantage";
import Customer from "@/components/customer";
import Experience from "@/components/experience";
import FAQ from "@/components/faq";
import Feature from "@/components/feature";
import Guide from "@/components/guide";
import Hero from "@/components/hero";

export default function HomePage() {
  return (
    <main className="w-full ">
      <Hero />
      <About />
      <Feature />
      <Guide />
      <Experience />
      <Advantages />
      <Customer/>
      <FAQ />
    </main>
  );
}
