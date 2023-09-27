import React from "react";
import {
  LifebuoyIcon,
  NewspaperIcon,
  PhoneIcon,
} from "@heroicons/react/20/solid";
import Link from "next/link";
import Image from "next/image";

const cards = [
  {
    name: "SEO SERVICES",
    imageUrl: "/images/seo.jpg",
    description:
      "Boost your website's rankings and attract quality traffic with our expert SEO strategies. We focus on optimizing your site for both users and search engines, ensuring sustainable growth.",
    icon: PhoneIcon,
  },
  {
    name: "PPC SERVICES",
    imageUrl: "/images/ppc.jpeg",
    description:
      "Maximize your online reach with our tailored PPC campaigns. Through meticulous keyword selection and ad optimization, we aim to deliver the best ROI, connecting you with your target audience efficiently.",
    icon: LifebuoyIcon,
  },
  {
    name: "SOCIAL MEDIA MARKETING",
    imageUrl: "/images/social.jpeg",
    description:
      "Engage and captivate your audience on social platforms. Our team crafts compelling content and runs strategic campaigns to amplify your brand's voice and drive meaningful interactions.",
    icon: NewspaperIcon,
  },
];

export default function Services() {
  return (
    <div className="relative isolate overflow-hidden bg-[#fff] py-24 sm:py-32">
      {/* <Image
        src="/images/wall.jpg"
        alt="Brickwork Background"
        className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
        height={500}
        width={500}
      /> */}

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Our <span className="text-[#f7be00]">Services</span>
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-900;lk985">
            Navigating the digital landscape with expertise and creativity. Dive
            into unparalleled solutions, unwavering quality, and our commitment
            in each endeavor.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8">
          {cards.map((card) => (
            <div
              key={card.name}
              className="rounded overflow-hidden shadow-lg bg-[#1b2338] p-6 ring-1 ring-inset ring-white/20"
            >
              <Image
                src={card.imageUrl}
                alt={card.name}
                className="h-[200px] w-full object-cover"
                height={500}
                width={500}
              />
              <div className="p-4">
                <h3 className="font-semibold text-white mb-2">{card.name}</h3>
                <p className="text-white mb-4">{card.description}</p>
                {/* <button className="bg-white text-[#000] px-4 py-2 rounded-md">
                  <Link href={`/Service`}>
                    <p className="bg-[white] text-[#000] px-4 py-2 rounded-md">
                      {card.buttonText}
                    </p>
                  </Link>
                </button> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
