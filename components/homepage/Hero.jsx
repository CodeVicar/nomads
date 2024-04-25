"use client";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import mixpanel from "mixpanel-browser";

export default function Example() {
  return (
    <div className="bg-white py-4">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="mx-auto max-w-7xl">
          <div className="relative z-10 pt-4 lg:w-full lg:max-w-2xl">
            {/* <svg
              className="absolute inset-y-0 right-8 hidden h-full w-80 translate-x-1/2 transform fill-white lg:block"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="0,0 90,0 50,100 0,100" />
            </svg> */}

            <div className="relative px-6 py-2 sm:py-40 lg:px-8 lg:py-20 lg:pr-0">
              <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
                <div className=" sm:mb-10 sm:flex">
                  <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-green-500">
                    <p className="font-semibold">SME Invoice Finance</p>
                  </div>
                </div>
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                  Turn outstanding invoices <span>into </span>
                  <span className="text-green-600  font-bold">
                    instant capital
                  </span>
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-900">
                  Get instant cash flow by leveraging your outstanding invoices
                  with us. Our streamlined process ensures quick access to
                  working capital, empowering you to focus on growth while we
                  handle the rest.
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  <a
                    href="/contact"
                    className="rounded-md bg-green-500 border-2 px-3.5 py-3.5 text-lg font-bold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    onClick={() => mixpanel.track("Apply Now ")}

                  >
                    Apply Now
                  </a>
                  <a
                    href="/about"
                    className="text-sm font-semibold leading-6 text-gray-900"
                  >
                    Learn more{" "}
                    <span aria-hidden="true" className="text-xl font-bold">
                      →
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 lg:w-1/2">
          <img
            className="aspect-[3/2] object-cover lg:aspect-auto lg:h-full lg:w-full"
            src="images/invoice.jpeg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
