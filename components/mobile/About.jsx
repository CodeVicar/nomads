import {
  LifebuoyIcon,
  NewspaperIcon,
  PhoneIcon,
} from "@heroicons/react/20/solid";
const cards = [
    {
      name: "Android App Development",
      description:
        "Tailored solutions for the Android ecosystem, ensuring optimal performance and a user-friendly experience on a wide range of devices.",
    },
    {
      name: "iOS App Development",
      description:
        "Crafting premium applications for Apple devices, leveraging the latest iOS features to deliver a seamless and engaging user experience.",
    },
    {
      name: "Cross-Platform Development",
      description:
        "Develop once and deploy everywhere. Our cross-platform solutions ensure consistent functionality and design across Android, iOS, and other platforms.",
    },
  ];
  
export default function About() {
  return (
    <div className="relative isolate overflow-hidden bg-gray-100 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            DIGITAL NOMAD: LEADING THE MOBILE REVOLUTION
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-900">
            Our dedicated in-house team of app developers and designers are
            fervent about creating immersive, contemporary, and user-centric
            mobile applications that encapsulate your brand's essence and reach.
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
