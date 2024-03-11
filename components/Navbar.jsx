"use client";
import Link from "next/link";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon, PhoneIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Home", href: "./" },
  // { name: "Web Design", href: "./web-design" },
  // { name: "Digital Marketing", href: "./digital-marketing" },
  // { name: "Mobile Apps", href: "mobile-app" },
  { name: "About us", href: "./about" },
  { name: "Contact", href: "./contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // change nav background on scroll

  //

  return (
    // <header className="inset-x-0 top-0 z-50 bg-transparent sticky">
    <header className="sticky inset-x-0 top-0 z-50 bg-white border-b-2 ">
      <nav
        className="flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="font-bold text-gray-900">
            <span className="text-3xl">Ware</span>
            <span className="text-3xl text-green-500">Flow</span>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-green-500 font-bold"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-8 w-8" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-md font-semibold leading-6 text-gray0500"
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="hidden lg:flex gap-2 lg:flex-1 lg:justify-end">
          <a href="https://dashboard-demo.wareflowafrica.com/login" className="text-md font-bold leading-6 py-3 px-4 underline ">
            Login{" "}
          </a>
          <a
            href="./contact"
            className="text-md font-semibold leading-6 py-3 px-4 rounded-md text-gray-100 bg-green-500 "
          >
            Book a demo{" "}
          </a>
        </div>
        {/* <div className="py-6 px-8">
          <a
            href=""
            className="text-sm font-semibold leading-6 py-3 px-4 rounded-md text-gray- "
          >
            Login{" "}
          </a>
        </div> */}
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="text-green-800 font-bold">WareFlow</span>
              {/* <img
                className="h-14 w-auto"
                src="./images/thebrick.jpeg"
                alt=""
              /> */}
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-900 font-bold"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-8 w-8" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-bold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="py-6">
                <a
                  href="./contact"
                  className="text-sm font-semibold leading-6 py-3 px-4 rounded-md text-gray-100 bg-green-500 "
                >
                  Book a demo{" "}
                </a>
              </div>
              <div className="py-6">
                <a
                  href="https://dashboard-demo.wareflowafrica.com/login"
                  className="text-sm font-semibold leading-6 py-3 px-4 rounded-md text-gray-900 "
                >
                  Login{" "}
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
