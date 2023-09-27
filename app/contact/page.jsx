"use client";
// import EmailSuccessModal from "../../components/modal/EmailSuccessModal";
import { Oval } from "react-loader-spinner";
import {
  BuildingOffice2Icon,
  EnvelopeIcon,
  PhoneIcon,
  BugAntIcon,
  ChatBubbleLeftRightIcon,
  ComputerDesktopIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";

export default function ContactUs() {
  return (
    <section className="relative bg-white py-20 md:py-32 overflow-hidden">
      {/* <img
        className="absolute top-0 left-0 md:mt-24"
        src="/./images/brickoffice.jpg"
        alt=""
      /> */}
      {/* <img
        className="absolute bottom-0 right-0 mb-8 lg:mb-24"
        src="/./images/brickoffice.jpg"
        alt=""
      /> */}
      <div className="relative container px-4 mx-auto">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl text-center mx-auto mb-20">
            <span className="inline-block py-1 px-3 mb-4 text-xs font-semibold text-orange-900 bg-white rounded-full">
              LET'S COLLABORATE
            </span>

            <p className="text-xl text-gray-900 font-semibold">
              Your digital aspirations, our expertise. Let's shape the future
              together.
            </p>
          </div>
          <div className="max-w-md lg:max-w-5xl mx-auto">
            <div className="flex flex-wrap -mx-4">
              <div className="w-full lg:w-1/2 px-4 order-last lg:order-first">
                <img
                  className="h-full w-full max-w-md"
                  src="images/contact.jpeg"
                  alt=""
                />
              </div>
              <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
                <div className="max-w-md py-6 lg:ml-auto">
                  <div className="flex mb-12 items-center">
                    <div className="flex flex-shrink-0 mr-5 sm:mr-8 items-center justify-center p-1 w-16 sm:w-20 h-16 sm:h-20 rounded-full bg-gray-100">
                      {/* <img
                        src="saturn-assets/images/contact/icon-phone.svg"
                        alt=""
                      /> */}
                    </div>
                    <div>
                      <span className="text-lg text-gray-500">Phone</span>
                      <span className="block text-lg font-semibold text-gray-900">
                        +254 724 419991{" "}
                      </span>
                    </div>
                  </div>
                  <div className="flex mb-12 items-center">
                    <div className="flex flex-shrink-0 mr-5 sm:mr-8 items-center justify-center p-1 w-16 sm:w-20 h-16 sm:h-20 rounded-full bg-gray-300">
                      {/* <img
                        src="saturn-assets/images/contact/icon-email.svg"
                        alt=""
                      /> */}
                    </div>
                    <div>
                      <span className="text-lg text-gray-500">Email</span>
                      <span className="block text-lg font-semibold text-gray-900">
                        info@digitalnomad.com
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="flex flex-shrink-0 mr-5 sm:mr-8 items-center justify-center p-1 w-16 sm:w-20 h-16 sm:h-20 rounded-full bg-gray-100">
                      <img
                        className="h-8"
                        src="saturn-assets/images/contact/icon-location.svg"
                        alt=""
                      />
                    </div>
                    <div>
                      <span className="text-lg text-gray-500">Office</span>
                      <span className="block text-lg font-semibold text-gray-900">
                        Tech Hub, Nairobi, Kenya
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
