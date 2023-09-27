import Link from "next/link";
import Image from "next/image";

export default function Example() {
  return (
    <div className="relative bg-[#1b2338]">
      <div className="relative h-80 overflow-hidden bg-gray-900 md:absolute md:left-0 md:h-full md:w-1/3 lg:w-1/2">
        <Image
          className="h-full w-full object-cover"
          src="/images/landing.jpg"
          alt=""
          height={500}
          width={500}
        />
        <svg
          viewBox="0 0 926 676"
          aria-hidden="true"
          className="absolute -bottom-24 left-24 w-[57.875rem] transform-gpu blur-[118px]"
        >
          <path
            fill="url(#60c3c621-93e0-4a09-a0e6-4c228a0116d8)"
            fillOpacity=".4"
            d="m254.325 516.708-90.89 158.331L0 436.427l254.325 80.281 163.691-285.15c1.048 131.759 36.144 345.144 168.149 144.613C751.171 125.508 707.17-93.823 826.603 41.15c95.546 107.978 104.766 294.048 97.432 373.585L685.481 297.694l16.974 360.474-448.13-141.46Z"
          />
          <defs>
            <linearGradient
              id="60c3c621-93e0-4a09-a0e6-4c228a0116d8"
              x1="926.392"
              x2="-109.635"
              y1=".176"
              y2="321.024"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4f0064" />
              <stop offset={1} stopColor="#4f0064" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="relative mx-auto max-w-7xl py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="pl-6 pr-6 md:ml-auto md:w-2/3 md:pl-16 lg:w-1/2 lg:pl-24 lg:pr-0 xl:pl-32">
          <h2 className="text-base font-semibold leading-7 text-[#fff]">
            Mobile First’ Website Design{" "}
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-[#fff] sm:text-4xl">
            Let’s get creative.
          </p>
          <p className="mt-6 text-base leading-7 text-[#fff]">
            Consumers are increasingly turning to their mobiles & tablets to
            search online, meaning that it is now essential that your website
            performs well on all devices.
          </p>
          <p className="mt-6 text-base leading-7 text-[#fff]">
            Not only this, but search engines now favour websites that are fast
            and perform well on mobile devices too. Without a ‘mobile first’
            website, you risk being pushed down the rankings in Google and other
            search engines.
          </p>

        
          <div className="mt-8">
            <Link
              href="./contact"
              className="inline-flex rounded-md bg-[#000] px-3.5 py-2.5 text-sm font-semibold text-[#fff] shadow-sm "
            >
              Get A New Website{" "}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
