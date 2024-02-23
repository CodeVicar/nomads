export default function Example() {
  return (
    <div className="bg-white">
      <div className="relative overflow-hidden bg-[#061948] px-6 py-12 md:py-24 text-center shadow-2xl sm:px-16">
        <h2 className="mx-auto max-w-7xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
          What is Invoice Factoring?
        </h2>
        <p className="mx-auto mt-6 max-w-5xl  font-semibold text-lg leading-8 text-white">
          Invoice Factoring provides early access to the funds owed to you in
          unpaid invoices. Whilst you’re waiting for invoices to be paid by your
          customers, we can advance up to 80% of the invoice cash value to you,
          usually within 24 hours.
        </p>
        {/* <p className="mx-auto mt-6 max-w-3xl font-semibold text-lg leading-8 text-white">
          Our Invoice Finance solutions include Selective Invoice Finance,
          Invoice Factoring, and Invoice Discounting, all designed to help you
          access funds quickly so you can strengthen cash flow and support your
          growth ambitions.
        </p> */}
        <div className="mt-10 flex flex-col items-center gap-y-4 md:flex-row md:justify-center md:gap-x-6">
          <a
            href="/contact"
            className="rounded-md bg-white border-2 px-3.5 py-3.5 text-lg font-bold text-green-500 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Book a demo
          </a>
      
        </div>
        <div className="absolute inset-0 pointer-events-none">
          <svg
            viewBox="0 0 1024 1024"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
            aria-hidden="true"
          >
            <circle
              cx={512}
              cy={512}
              r={512}
              fill="url(#gradient)"
              fillOpacity="0.7"
            />
            <defs>
              <radialGradient id="gradient">
                <stop stopColor="#7775D6" />
                <stop offset={1} stopColor="#E935C1" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}
