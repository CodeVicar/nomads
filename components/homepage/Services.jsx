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
    name: "Submit invoice",
    imageUrl: "/images/web.jpeg",
    description: "You supply goods and services in the normal way",
    buttonText: "Discover",
    href: "/web-design",
    icon: PhoneIcon,
  },
  {
    name: "Factoring",
    imageUrl: "/images/digital.jpeg",
    description: "We make available up to 80% of the value of each invoice.",
    buttonText: "Discover",
    href: "/digital-marketing",
    icon: LifebuoyIcon,
  },
  {
    name: "We collect the payment",
    imageUrl: "/images/amobile.jpeg",
    description:
      "Our deal with the collection, you focus on running your business",
    buttonText: "Get Started",
    href: "/mobile-app",
    icon: NewspaperIcon,
  },
  {
    name: "Settlements",
    imageUrl: "/images/amobile.jpeg",
    description:
      "Your client settle the invoices, you will get the remaining balance less an agreed fee",
    buttonText: "Get Started",
    href: "/mobile-app",
    icon: NewspaperIcon,
  },
];

export default function Services() {
  return (
    <div className="relative isolate overflow-hidden bg-white py-24 sm:py-32">
      {/* <Image
        src="/images/wall.jpg"
        alt="Brickwork Background"
        className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
        height={500}
        width={500}
      /> */}

      <div className="">
        <div className="flex flex-col px-24 bg-white  mx-auto  lg:mx-0 ">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900  sm:text-6xl">
            Our <span className="text-green-500 ">Process</span>
          </h2>
          <p className="mt-6 text-lg leading-8  text-gray-900">
            Empowering your digital journey with precision and innovation.
            Experience top-tier solutions, quality, and dedication in every
            project we undertake.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-4 lg:gap-8">
          {cards.map((card) => (
            <div
              key={card.name}
              className="rounded overflow-hidden shadow-lg bg-[#fff] p-6 ring-1 ring-inset ring-white/20"
            >
              <Image
                src={card.imageUrl}
                alt={card.name}
                className="h-[200px] w-full object-cover"
                height={500}
                width={500}
              />
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2">
                  {card.name}
                </h3>
                <p className="text-gray-900 mb-4">{card.description}</p>
                {/* <button className="bg-[#f61011] text-[#000] px-4 py-2 rounded-md">
                  <Link href={card.href}>
                    <p className="text-[#fff] px-4 py-2 rounded-md">
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
