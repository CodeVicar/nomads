import Image from "next/image";
import Hero from "@/components/mobile/Hero";
import About from "@/components/mobile/About";
import Cta from "@/components/mobile/Cta";




export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Cta />
    </main>
  );
}
