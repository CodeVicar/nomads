import Image from "next/image";
import Hero from "@/components/homepage/Hero";
import About from "@/components/homepage/About";
import Services from "@/components/homepage/Services";
import Faq from "@/components/homepage/Faq";
import Cta from "@/components/homepage/Cta";
import Benefit from "@/components/homepage/Benefit";
import Testi from "@/components/homepage/Testi";
import Portfolio from "@/components/homepage/Portfolio";
import Steps from "@/components/steps";
import Cta2 from "@/components/homepage/Cta2";

export default function Home() {
  return (
    <main className="bg-white">
      <Hero />
      <About />
      <Steps />
      <Cta />
      <Benefit />
      <Cta2 />
      <Faq />
    </main>
  );
}
