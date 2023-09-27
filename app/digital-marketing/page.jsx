import Image from "next/image";
import Hero from "@/components/digital/Hero";
import Cta from "@/components/digital/Cta";
import Services from "@/components/digital/Services";





export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Cta />
    </main>
  );
}
