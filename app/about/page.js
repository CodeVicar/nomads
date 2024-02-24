import React from 'react'
import Hero from "@/components/about/Hero";
import Cta from "@/components/about/Cta";
import Team from "@/components/about/Team";
import Stats from "@/components/about/Stats";



const page = () => {
  return (
    <div>
      <Hero />
      <Stats />
      <Cta />
      <Team />
    </div>
  )
}

export default page