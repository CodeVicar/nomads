const stats = [
  { id: 1, name: "Creators on the platform", value: "8,000+" },
  { id: 2, name: "Flat platform fee", value: "3%" },
  { id: 3, name: "Uptime guarantee", value: "99.9%" },
  { id: 4, name: "Paid out to creators", value: "$70M" },
];

export default function Example() {
  return (
    <div className="relative bg-white">
      <img
        className="h-56 w-full bg-gray-50 object-cover lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-1/2"
        src="/images/logestic.jpeg"
        alt=""
      />
      <div className="mx-auto grid max-w-7xl lg:grid-cols-2 bg-[#061948]">
        <div className="px-6 pb-24 pt-16 sm:pb-32 sm:pt-20 lg:col-start-2 lg:px-8 lg:pt-32">
          <div className="mx-auto max-w-2xl lg:mr-0 lg:max-w-lg">
            <h2 className="text-base font-semibold leading-8 text-white">
              Is Invoice Factoring right for you?
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl">
              Unlock your cash flow potential
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-100">
              Unlike a traditional bank, we are more flexible and can provide an
              alternative to loans, overdrafts and credit cards if you:
            </p>
            <ul className="mt-6 text-lg leading-8 text-gray-100 list-disc pl-6">
              <li>
                Engaged in transporting goods for other businesses within the
                supply chain.
              </li>
              <li>Your invoices are business to business</li>
              <li>
                You would be interested in financing all of your invoices or
                just a few{" "}
              </li>
              <li>
                If you need access to fast capital to unlock your cash flow
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
