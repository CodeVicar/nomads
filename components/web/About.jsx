import {
  LifebuoyIcon,
  NewspaperIcon,
  PhoneIcon,
} from "@heroicons/react/20/solid";
const cards = [
  {
    name: "Static Sites",
    description:
      "Fast, secure, and efficient websites tailored for businesses that require a strong online presence without the complexities.",
    icon: PhoneIcon,
  },
  {
    name: "Content Management",
    description: "Empower your brand with a dynamic platform that lets you manage, update, and publish content with ease.",
    // icon: LifebuoyIcon,
  },
  {
    name: "Custom Web Applications",
    description: "Bespoke web solutions designed to cater to your unique business needs, ensuring scalability and robust performance.",
    // icon: NewspaperIcon,
  },
];


export default function About() {
  return (
    <div className="relative isolate overflow-hidden bg-gray-100 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            DIGITAL NOMAD: PIONEERS IN WEB DESIGN
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-900">
            Our dedicated in-house team of developers and designers are
            passionate about sculpting immersive, up-to-date, and adaptive
            websites that amplify your brand's essence and digital footprint.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8">
          {cards.map((card) => (
            <div
              key={card.name}
              className="flex gap-x-4 rounded-xl bg-white/5 p-6 ring-1 ring-inset ring-red/10"
            >
              {/* <card.icon
                className="h-7 w-5 flex-none text-gray-900"
                aria-hidden="true"
              /> */}
              <div className="text-base leading-7">
                <h3 className="font-semibold text-gray-900">{card.name}</h3>
                <p className="mt-2 text-gray-900">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
