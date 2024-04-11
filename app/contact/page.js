
"use client";import { useState } from "react";
import EmailSuccessModal from "../../components/EmailSuccessModal";
import { Oval } from "react-loader-spinner";
import {
BuildingOffice2Icon,
EnvelopeIcon,
PhoneIcon,
} from "@heroicons/react/24/outline";

export default function ContactUs() {
const [formData, setFormData] = useState({
  firstName: "",
  lastName: "",
  companyName: "",
  email: "",
  country: "",
  phoneNumber: "",
  annualRevenue: "",
  requirements: "",
  referralSource: "",
});
const [success, setSuccess] = useState(false);
const [loading, setLoading] = useState(false);

const handleSubmit = async (event) => {
  event.preventDefault();
  if (
    !formData.firstName ||
    !formData.lastName ||
    !formData.email ||
    !formData.phoneNumber ||
    !formData.requirements
  ) {
    alert("Please fill the entire form");
    return;
  }
  const data = {
    ...formData,
    status: "new",
  };
  try {
    setLoading(true);
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    if (response.status === 200) {
      setSuccess(true);
    }
  } catch (error) {
    console.error("Error occurred during POST request:", error);
  }
  setLoading(false);
  setFormData({
    firstName: "",
    lastName: "",
    companyName: "",
    email: "",
    country: "",
    phoneNumber: "",
    annualRevenue: "",
    requirements: "",
    referralSource: "",
  });
};

const handleChange = (event) => {
  const { name, value } = event.target;
  setFormData((prevFormData) => ({
    ...prevFormData,
    [name]: value,
  }));
};

const modalClose = () => {
  setSuccess(false);
};

return (
  <div className="relative isolate bg-white">
    {success && <EmailSuccessModal modal={modalClose} />}
    <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
      <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
        <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
          <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden ring-1 ring-white/5 lg:w-1/2">
            <div
              className="absolute -left-56 top-[calc(100%-13rem)] transform-gpu blur-3xl lg:left-[max(-14rem,calc(100%-59rem))] lg:top-[calc(50%-7rem)]"
              aria-hidden="true"
            >
              <div
                className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-br from-[#80caff] to-[#26feb7] opacity-20"
                style={{
                  clipPath:
                    "polygon(74.1% 56.1%, 100% 38.6%, 97.5% 73.3%, 85.5% 100%, 80.7% 98.2%, 72.5% 67.7%, 60.2% 37.8%, 52.4% 32.2%, 47.5% 41.9%, 45.2% 65.8%, 27.5% 23.5%, 0.1% 35.4%, 17.9% 0.1%, 27.6% 23.5%, 76.1% 2.6%, 74.1% 56.1%)",
                }}
              />
            </div>
          </div>
          <h2 className="text-4xl font-bold tracking-tight text-gray-900">
            Request a free no-obligation Demo
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-900">
            We will get back to you within 24 hours to discuss in more detail.
          </p>
          <dl className="mt-10 space-y-4 text-base leading-7 text-gray-900">
            <div className="flex gap-x-4">
              <dt className="flex-none">
                <span className="sr-only">Address</span>
                <BuildingOffice2Icon
                  className="h-7 w-6 text-gray-900"
                  aria-hidden="true"
                />
              </dt>
              <dd>
                Merchant Square <br />
                Ikigai (Riverside) , <br />
                Nairobi, Kenya{" "}
              </dd>
            </div>
            <div className="flex gap-x-4">
              <dt className="flex-none">
                <span className="sr-only">Telephone</span>
                <PhoneIcon
                  className="h-7 w-6 text-gray-900"
                  aria-hidden="true"
                />
              </dt>
              <dd>
                <a className="hover:text-gray-900" href="tel:+254 20 5616004">
                  +254722758705{" "}
                </a>
              </dd>
            </div>
            <div className="flex gap-x-4">
              <dt className="flex-none">
                <span className="sr-only">Email</span>
                <EnvelopeIcon
                  className="h-7 w-6 text-gray-900"
                  aria-hidden="true"
                />
              </dt>
              <dd>
                <a
                  className="hover:text-gray-900"
                  href="mailto:info@peslac.com"
                >
                  info@wareflowafrica.com
                </a>
              </dd>
            </div>
          </dl>
        </div>
      </div>
      <form
        onSubmit={handleSubmit}
        action="#"
        method="POST"
        className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48"
      >
        <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                First name
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  value={formData.firstName}
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-white/1 focus:ring-2 focus:ring-blue-500 sm:text-sm sm:leading-6 focus:outline-none"
                  onChange={handleChange}
                  placeholder="First Name"
                />
              </div>
            </div>
<<<<<<< HEAD
            <h2 className="text-4xl font-bold tracking-tight text-gray-900">
              Request a free, no-obligation Demo,
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-900">
              We will get back to you within 24 hours to discuss your project in
              more detail.
            </p>
            <dl className="mt-10 space-y-4 text-base leading-7 text-gray-900">
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Address</span>
                  <BuildingOffice2Icon
                    className="h-7 w-6 text-gray-900"
                    aria-hidden="true"
                  />
                </dt>
                <dd>
                  Merchant Square <br />
                  Ikigai (Riverside) , <br />
                  Nairobi, Kenya{" "}
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Telephone</span>
                  <PhoneIcon
                    className="h-7 w-6 text-gray-900"
                    aria-hidden="true"
                  />
                </dt>
                <dd>
                  <a className="hover:text-gray-900" href="tel:+254 20 5616004">
                    254722758705{" "}
                  </a>
                </dd>
=======
            <div>
              <label
                htmlFor="lastName"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Last name
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  value={formData.lastName}
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 bg-white/9 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-white/1 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6 focus:outline-none"
                  onChange={handleChange}
                  placeholder="Last Name"
                />
>>>>>>> 3b36823e65545ad3ec2b5c2110afcf15fd3d380c
              </div>
            </div>
            <div>
              <label
                htmlFor="companyName"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Company Name
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="companyName"
                  id="companyName"
                  value={formData.companyName}
                  autoComplete="organization"
                  className="block w-full rounded-md border-0 bg-white/9 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-white/1 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6 focus:outline-none"
                  onChange={handleChange}
                  placeholder="Company Name"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Email
              </label>
              <div className="mt-2.5">
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  autoComplete="email"
                  className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-white/1 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6 focus:outline-none"
                  onChange={handleChange}
                  placeholder="Email"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="country"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Country
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="country"
                  id="country"
                  value={formData.country}
                  autoComplete="country"
                  className="block w-full rounded-md border-0 bg-white/9 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-white/1 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6 focus:outline-none"
                  onChange={handleChange}
                  placeholder="Country"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="phoneNumber"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Phone number
              </label>
              <div className="mt-2.5">
                <input
                  type="tel"
                  name="phoneNumber"
                  id="phoneNumber"
                  value={formData.phoneNumber}
                  autoComplete="tel"
                  className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-white/1 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6 focus:outline-none"
                  onChange={handleChange}
                  placeholder="Phone Number"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="annualRevenue"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Annual Revenue
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="annualRevenue"
                  id="annualRevenue"
                  value={formData.annualRevenue}
                  autoComplete="off"
                  className="block w-full rounded-md border-0 bg-white/9 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-white/1 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6 focus:outline-none"
                  onChange={handleChange}
                  placeholder="Annual Revenue"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="requirements"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Requirements
              </label>
              <div className="mt-2.5">
                <textarea
                  name="requirements"
                  id="requirements"
                  rows={4}
                  value={formData.requirements}
                  className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-white/1 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6 focus:outline-none"
                  onChange={handleChange}
                  placeholder="Your Requirements"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="referralSource"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Referral Source
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="referralSource"
                  id="referralSource"
                  value={formData.referralSource}
                  autoComplete="off"
                  className="block w-full rounded-md border-0 bg-white/9 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-white/1 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6 focus:outline-none"
                  onChange={handleChange}
                  placeholder="Referral Source"
                />
              </div>
            </div>
          </div>
          <div className="mt-8 flex justify-end">
            {loading ? (
              <Oval
                height={30}
                width={40}
                color="#26feb7"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                ariaLabel="oval-loading"
                secondaryColor="#4fa94d"
                strokeWidth={2}
                strokeWidthSecondary={2}
              />
            ) : (
              <button
                type="submit"
                className="rounded-md bg-green-500 px-4 py-3.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-green-600"
              >
                Submit Form
              </button>
            )}
          </div>
        </div>
      </form>
    </div>
  </div>
);
}
