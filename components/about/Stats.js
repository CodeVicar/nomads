const invoiceStats = [
  { id: 1, name: "Supply chain", value: "Industries" },
  { id: 2, name: "Affordable Rate", value: "Fee Structure" },
  { id: 3, name: "Fast onboarding", value: "On bording" },
  { id: 4, name: "24-48 hours", value: "Processing time" },
];

export default function InvoiceStats() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Trusted for Invoice Financing
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Whether you're a small startup or a large enterprise, we're here
              to support your growth by offering personalized Invoice financing options{" "}
            </p>
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
            {invoiceStats.map((stat) => (
              <div key={stat.id} className="flex flex-col bg-gray-400/5 p-8">
                <dt className="text-sm font-semibold leading-6 text-gray-600">
                  {stat.name}
                </dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
