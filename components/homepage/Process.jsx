import {
  LifebuoyIcon,
  NewspaperIcon,
  PhoneIcon,
} from "@heroicons/react/20/solid";

const cards = [
  {
    name: "Rapid Cash Access:",
    description: "Instant access to cash flow when invoices are raised.",
    icon: PhoneIcon,
  },
  {
    name: "Debt-Free Cash Flow:",
    description: "Access cash flow without incurring debt.",
    icon: LifebuoyIcon,
  },
  {
    name: "Tailored Flexibility:",
    description: "Cash flow solutions to match your business needs.",
    icon: NewspaperIcon,
  },
];

export default function Example() {
  return (
    <div className="relative isolate overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Unlock the Wareflo Advantage:
          </h2>
        </div>
        <div className="flex  items-center gap-y-6">
          {cards.map((card) => (
            <div
              key={card.name}
              className="flex flex-col items-center rounded-xl bg-[#fff] p-6 ring-1 ring-inset ring-white/10 py-16"
            >
              <div className="text-center">
                <card.icon
                  className="h-7 w-5 mb-2 flex-none text-indigo-400 items-center"
                  aria-hidden="true"
                />
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
