"use client";
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
import { useEffect } from "react";
import initMixpanel from "@/lib/mixpanel";

import mixpanel from "mixpanel-browser";


// mixpanel.init("11c66f8a82188d2591e985b37929f760", { track_pageview: true });


export default function Home() {
  useEffect(() => {
    initMixpanel();
    mixpanel.track("pageView");
  }, []);

  const trackLearnMoreClick = () => {
    mixpanel.track("landingPageClick", { learnMore: true });
  };

  const trackFAQClick = () => {
    mixpanel.track("landingPageClick", { FAQ: true });
  };

  const loginPage = () => {
    mixpanel.track("loginPageClick", { login: true });
  }

  return (
    <main className="bg-white">
      <Hero />
      <About />
      <Steps />
      <Cta />
      <Benefit />
      <Cta2 />
      <Faq trackFAQClick={trackFAQClick} />    </main>
  );
}
