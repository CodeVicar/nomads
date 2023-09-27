import Image from "next/image";
import Hero from "@/components/web/Hero";
import About from "@/components/web/About";
import Cta from "@/components/web/Cta";




export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Cta />
    </main>
  );
}
