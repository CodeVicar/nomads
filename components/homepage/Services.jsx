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
    name: "Creative Web Design",
    imageUrl: "/images/web.jpeg",
    description:
    "Crafting innovative web designs tailored to your brand's identity is our forte. We ensure your online presence is both visually stunning and functionally seamless.",
      buttonText: "Discover",

    icon: PhoneIcon,
  },
  {
    name: "Digital Marketing",
    imageUrl: "/images/digital.jpeg",
    description:
    "Elevate your brand's reach with our comprehensive digital marketing strategies. We offer safe and affordable campaigns to connect you with a broader audience.",
    buttonText: "Discover",
    icon: LifebuoyIcon,
  },
  {
    name: "Mobile Apps",
    imageUrl: "/images/amobile.jpeg",
    description:
    "Dive into the digital age with our bespoke mobile app solutions. Tailored to your needs, we craft applications that offer both functionality and a superior user experience.",
    buttonText: "Get Started",
    icon: NewspaperIcon,
  },
];

export default function Services() {
  return (
    <div className="relative isolate overflow-hidden bg-[#1b2338] py-24 sm:py-32">
      {/* <Image
        src="/images/wall.jpg"
        alt="Brickwork Background"
        className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
        height={500}
        width={500}
      /> */}

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Our <span className="text-[#f7be00]">Services</span>
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-100">
            Your trusted partner for all brickwork and building projects.
            Experience craftsmanship, quality, and dedication with every brick
            laid.
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
                <button className="bg-white text-[#000] px-4 py-2 rounded-md">
                  <Link href={`/Service`}>
                    <p className="bg-[white] text-[#000] px-4 py-2 rounded-md">
                      {card.buttonText}
                    </p>
                  </Link>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
