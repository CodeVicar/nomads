import { ChevronRightIcon } from "@heroicons/react/20/solid";

export default function Example() {
  return (
    <div className="bg-white">
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20">
        <div className="mx-auto max-w-7xl pb-24 pt-10 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-30">
          <div className="px-6 lg:px-0 lg:pt-4">
            <div className="mx-auto max-w-2xl">
              <div className="max-w-lg">
                <div className="mt-24 sm:mt-32 lg:mt-16"></div>
                <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                  About WareFlow
                </h1>

                <p className="pt-6">
                  As a forward-thinking fintech platform, WareFlow is committed
                  to breaking down barriers and providing frictionless access to
                  essential financial services.
                </p>
                <p className="mt-6">
                  We are a dynamic team dedicated to revolutionizing the
                  financial landscape for businesses in Kenya and across Africa.
                  Founded with a vision to streamline financial services,
                  particularly in the realm of invoice factoring for the supply
                  chain, we are committed to empowering businesses to thrive and
                  succeed.
                </p>
                <p className="mt-6">
                  Driven by a passion for empowering businesses, WareFlow was
                  founded with a clear mission: to make financial services as
                  accessible and instant as the internet itself.
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  <a
                    href="#"
                    className="rounded-md bg-green-500 px-3.5 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Get started
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-20 sm:mt-24 md:mx-auto md:max-w-2xl lg:mx-0 lg:mt-0 lg:w-screen">
            <img
              className="h-full w-full object-cover"
              src="/images/paid.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
      </div>
    </div>
  );
}
