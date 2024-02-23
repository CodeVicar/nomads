"use client";
import { Disclosure } from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";

const faqs = [
  {
    question: "How does invoice factoring contribute to business growth?",
    answer:
      "Invoice factoring enables businesses to unlock liquidity from unpaid invoices, providing immediate access to funds for investment, operational expenses, and growth opportunities.",
  },
  {
    question: "What are the key benefits of invoice factoring?",
    answer:
      "The benefits of invoice factoring include improved cash flow, reduced risk of bad debt, flexibility in financing, and streamlined credit control processes.",
  },
  {
    question: "Is invoice factoring subject to regulatory oversight?",
    answer:
      "Yes, invoice factoring operates within a regulated framework to ensure transparency, compliance, and consumer protection.",
  },
  {
    question: "How does invoice factoring mitigate the risk of non-payment?",
    answer:
      "Invoice factoring employs risk mitigation strategies such as credit assessments, recourse or non-recourse options, and proactive collection efforts to minimize the impact of non-payment.",
  },
  {
    question:
      "Can businesses of all sizes and industries benefit from invoice factoring?",
    answer:
      "Yes, invoice factoring is suitable for businesses of various sizes and industries, offering tailored financing solutions to meet diverse needs and objectives.",
  },
  {
    question: "What role does customer support play in the factoring process?",
    answer:
      "Dedicated customer support provides personalized assistance throughout the factoring process, ensuring smooth operations and customer satisfaction.",
  },
  {
    question: "How can invoice factoring optimize cash flow management?",
    answer:
      "By converting outstanding invoices into immediate cash flow, invoice factoring helps businesses improve liquidity, reduce reliance on credit, and enhance financial stability.",
  },
  {
    question:
      "What factors should businesses consider when evaluating invoice factoring?",
    answer:
      "Businesses should consider factors such as cost, contract terms, customer service quality, and compatibility with operational needs when evaluating invoice factoring.",
  },
  {
    question: "Why choose invoice factoring as your financing partner?",
    answer:
      "Invoice factoring offers businesses a reliable source of working capital, personalized support, and a collaborative partnership dedicated to driving success.",
  },
];

export default function Example() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">
            Frequently asked questions
          </h2>
          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                        <span className="text-base font-semibold leading-7">
                          {faq.question}
                        </span>
                        <span className="ml-6 flex h-7 items-center">
                          {open ? (
                            <MinusSmallIcon
                              className="h-6 w-6"
                              aria-hidden="true"
                            />
                          ) : (
                            <PlusSmallIcon
                              className="h-6 w-6"
                              aria-hidden="true"
                            />
                          )}
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base leading-7 text-gray-600">
                        {faq.answer}
                      </p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
