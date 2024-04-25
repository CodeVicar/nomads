export default function Example() {
  return (
    <div className="relative bg-white">
      <div className="relative h-80 overflow-hidden bg-white md:absolute md:left-0 md:h-full md:w-1/3 lg:w-1/2">
        <img
          className="h-full w-full object-cover"
          src="/images/supply.webp"
          alt=""
        />
      </div>
      <div className="relative mx-auto max-w-7xl py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="pl-6 pr-6 md:ml-auto md:w-2/3 md:pl-16 lg:w-1/2 lg:pl-24 lg:pr-0 xl:pl-32">
          <p className="mt-2 text-3xl font-bold tracking-tight text-green-500 sm:text-4xl">
            Why Choose WareFlow:
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We understand the difficulties of ensuring a steady cash flow to
            cover crucial expenses like your employee's payments, fuel costs,
            and routine maintenance.
          </p>
          <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
            <div className="relative pl-9">
              <dt className="inline font-semibold text-green-500">
              
                Tailored Solutions:{" "}
              </dt>
              <dd className="inline">
                We believe in personalization, which is why we tailor our
                services to fit your business needs like a glove.
              </dd>
            </div>
            <div className="relative pl-9">
              <dt className="inline font-semibold text-green-500">Transparency: </dt>
              <dd className="inline">
                No hidden fees, no fine print. We believe in transparency every
                step of the way.
              </dd>
            </div>
            <div className="relative pl-9">
              <dt className="inline font-semibold text-green-500">
                Speed and Efficiency:{" "}
              </dt>
              <dd className="inline">
                Say goodbye to long waits and hello to fast, efficient service.
                With WareFlow, you can access the funds you need when you need
                them most.
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}