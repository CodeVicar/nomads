import React from "react";

const benefit = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="mt-2 md:mt-0 py-12 pb-6 sm:py-16 lg:pb-24 overflow-hidden">
        <h1>
          <span className="block text-center text-3xl font-extrabold tracking-tight text-green-600 sm:text-4xl">
            Why Us{" "}
          </span>
        </h1>

        <p className="mt-6 text-xl leading-8 text-gray-900 max-w-5xl mx-auto text-center">
          Get a cash advance on selected invoices before they’re due. Access
          fast working capital when you need it on a pay-as-you-go basis.
        </p>
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 relative">
          <div className="relative mt-12 lg:mt-20">
            <div className="relative grid grid-cols-1 text-center gap-y-8 sm:gap-y-10 md:gap-y-12 md:grid-cols-3 gap-x-12">
              <div>
                <div className="flex items-center justify-center w-16 h-16 mx-auto dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-full shadow">
                  <span className="text-green-500">&#10003;</span>
                </div>
                <h3 className="mt-4 sm:mt-6 text-xl font-semibold leading-tight text-gray-900 dark:text-white md:mt-10">
                  Access to Cash Fast
                </h3>
                <p className="mt-3 sm:mt-4 text-base text-gray-600 dark:text-gray-400">
                  Access cashflow for your business as soon as your invoices are
                  raised.
                </p>
              </div>
              <div>
                <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-full shadow">
                  <span className="text-green-500">&#10003;</span>
                </div>
                <h3 className="mt-4 sm:mt-6 text-xl font-semibold leading-tight text-gray-900 dark:text-white md:mt-10">
                  Cashflow without Debt
                </h3>
                <p className="mt-3 sm:mt-4 text-base text-gray-600 dark:text-gray-400">
                  No need to worry about debt. Only release funds that are owed
                  to you by your customers!
                </p>
              </div>
              <div>
                <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-full shadow">
                  <span className="text-green-500">&#10003;</span>
                </div>
                <h3 className="mt-4 sm:mt-6 text-xl font-semibold leading-tight text-gray-900 dark:text-white md:mt-10">
                  Flexible Terms
                </h3>
                <p className="mt-3 sm:mt-4 text-base text-gray-600 dark:text-gray-400">
                  Release as Much or as Little of Your Sales Ledger as your
                  Business Needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default benefit;
