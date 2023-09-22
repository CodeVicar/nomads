import Image from "next/image";
import Hero from "@/components/homepage/Hero";
import About from "@/components/homepage/About";
import Services from "@/components/homepage/Services";
import Faq from "@/components/homepage/Faq";
import Cta from "@/components/homepage/Cta";
import Process from "@/components/homepage/Process";
import Testi from "@/components/homepage/Testi";







export default function Home() {
  return (
    <main >
      <Hero />
      <About />
      <Services />
      <Process />
      <Cta />
      <Testi />
      <Faq />
    </main>
  );
}
