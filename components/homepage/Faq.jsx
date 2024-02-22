"use client";
import { Disclosure } from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";

const faqs = [
  {
    question: "What is the purpose of invoice factoring?",
    answer:
      "The purpose of invoice factoring is to provide businesses with immediate access to cash by selling their accounts receivable (unpaid invoices) to a factoring company at a discount.",
  },
  {
    question: "How does factoring improve cash flow?",
    answer:
      "Factoring improves cash flow by providing immediate funds from unpaid invoices, allowing businesses to meet their financial obligations, invest in growth opportunities, and cover day-to-day expenses.",
  },
  {
    question: "What are the benefits of invoice factoring?",
    answer:
      "The benefits of invoice factoring include improved cash flow, access to immediate funds, reduced risk of bad debt, outsourcing of credit control and collections, and flexibility to focus on business growth.",
  },
  {
    question: "Is invoice factoring regulated in the UK?",
    answer:
      "Yes, invoice factoring is regulated in the UK by the Financial Conduct Authority (FCA) under the Financial Services and Markets Act 2000.",
  },
  {
    question:
      "What is the difference between factoring and invoice discounting?",
    answer:
      "The main difference between factoring and invoice discounting is ownership of the sales ledger. With factoring, the factoring company manages sales ledger and credit control, while with invoice discounting, the business retains control of the sales ledger and credit control.",
  },
  {
    question: "What is debt factoring?",
    answer:
      "Debt factoring is another term for invoice factoring, where a business sells its accounts receivable (unpaid invoices) to a factoring company in exchange for immediate cash.",
  },
  {
    question: "Can I factor a single invoice or debtor?",
    answer:
      "Yes, some factoring companies offer selective invoice factoring, allowing businesses to factor individual invoices or debtors instead of their entire sales ledger.",
  },
  {
    question: "Can I get invoice factoring if my business has bad credit?",
    answer:
      "Yes, invoice factoring is often available to businesses with bad credit since the factoring company's decision is based on the creditworthiness of the business's customers rather than the business itself.",
  },
  {
    question:
      "What happens if a client doesn’t pay the invoice to the factoring company?",
    answer:
      "If a client fails to pay the invoice, the factoring company may either pursue the payment directly from the client or charge back the amount to the business depending on the terms of the factoring agreement, which may be recourse or non-recourse.",
  },
  {
    question:
      "What is the difference between recourse and non-recourse invoice factoring?",
    answer:
      "In recourse factoring, the business retains the risk of non-payment, and if the client fails to pay, the business must repurchase the invoice from the factoring company. In non-recourse factoring, the factoring company assumes the risk of non-payment, and if the client fails to pay due to insolvency or other reasons covered by the agreement, the factoring company absorbs the loss.",
  },
  {
    question: "What is the CHOCCs Factoring?",
    answer:
      "CHOCCs Factoring stands for 'Construction, Housebuilding, Offshore, Commercial and Contracting sectors' Factoring. It is a specialized form of invoice factoring tailored to businesses operating in these sectors, providing tailored funding solutions to meet their unique needs.",
  },
  {
    question: "Why should you use an invoice factoring broker?",
    answer:
      "An invoice factoring broker can help businesses find the most suitable factoring company for their needs by providing expert advice, negotiating terms, and comparing multiple offers from different factoring companies, saving time and ensuring the best possible deal.",
  },
  // More questions...
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
