import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";

export default function AboutHMB() {


  return (
    <div className=" bg-white">
      {/* About Hero */}
      <div className="mx-auto w-full lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8 bg-gray-900">
        <div className="px-6 pb-24 pt-10 sm:pb-32 lg:col-span-7 lg:px-0 lg:pb-56 xl:col-span-6">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h1 className="text-xl font-bold tracking-tight text-gray-100 sm:mt-10 sm:text-6xl">
              Nairobi's Pioneers in Digital Solutions
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-100">
              At Digital Nomad, we do more than just develop websites and apps;
              we craft digital experiences. Drawing from a rich tapestry of
              technological expertise, we are committed to bridging the gap
              between businesses and their digital aspirations.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <a
                href="/contact"
                className="rounded-md bg-[#fe5b0e] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
              >
                Embark on Your Digital Transformation
              </a>
            </div>
          </div>
        </div>
        <div className="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
          <img
            className="aspect-[3/2] w-full bg-gray-50 object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full"
            src="/images/office.jpg"
            alt="HMB Office"
          />
        </div>
      </div>
      {/* about intro */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <p className="text-base font-semibold leading-7 text-gray-900">
              About Us{" "}
            </p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Merging Creativity with Cutting-Edge Technology
            </h1>
            <div className="mt-10  max-w-xl grid-cols-1 gap-8 text-base leading-7 text-gray-900 lg:max-w-none lg:grid-cols-2">
              <div>
                <p>
                  At Digital Nomad, our ethos is rooted in innovation,
                  precision, and a relentless pursuit of excellence. We don't
                  just create digital platforms; we sculpt digital legacies.
                  Strategically based in Nairobi, we extend our services across
                  the globe, helping businesses of all sizes thrive in the
                  digital age.
                </p>
                <p className="mt-8">
                  Our expertise spans beyond just web and app development. We
                  excel in digital marketing, graphic design, and creating
                  user-centric experiences. We believe that in the digital
                  realm, first impressions are paramount, which is why we're
                  dedicated to crafting interfaces that captivate and convert.
                  Our comprehensive portfolio also includes brand strategy and
                  content creation, offering a 360-degree solution for all
                  digital needs.
                </p>
              </div>
            </div>
        
          </div>
        </div>
      </div>
      {/* About long */}
      <div className="relative bg-gray-800">
        <div className="mx-auto max-w-7xl lg:flex lg:justify-between lg:px-8 xl:justify-end">
          <div className="lg:flex lg:w-1/2 lg:shrink lg:grow-0 xl:absolute xl:inset-y-0 xl:right-1/2 xl:w-1/2">
            <div className="relative h-80 lg:-ml-8 lg:h-auto lg:w-full lg:grow xl:ml-0">
              <img
                className="absolute inset-0 h-full w-full bg-gray-50 object-cover"
                src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-x=.4&w=2560&h=3413&&q=80"
                alt="Crafted Work"
              />
            </div>
          </div>
          <div className="px-6 lg:contents">
            <div className="mx-auto max-w-2xl pb-24 pt-16 sm:pb-32 sm:pt-20 lg:ml-8 lg:mr-0 lg:w-full lg:max-w-lg lg:flex-none lg:pt-32 xl:w-1/2">
              <p className="text-base font-semibold leading-7 text-white">
                Innovation, Artistry, and Digital Mastery
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl">
                Tradition, Craftsmanship, and Innovation
              </h1>
              <p className="mt-6 text-xl leading-8 text-gray-100">
                At the core of Digital Nomad is a narrative of evolution and
                growth. Our journey is marked by continuous learning, adapting
                to the ever-changing digital landscape, and ensuring that our
                solutions are both contemporary and timeless.
              </p>
              <div className="mt-10 max-w-xl text-base leading-7 text-gray-100 lg:max-w-none">
                <p>
                  From designing intuitive user interfaces to executing
                  impactful digital marketing campaigns, our expertise covers
                  the entire digital spectrum. Our promise is straightforward:
                  impeccable craftsmanship, innovative strategies, and an
                  unwavering dedication to your vision.
                </p>
                <ul role="list" className="mt-8 space-y-8 text-gray-100">
                  <li className="flex gap-x-3">
                    {/* <CloudArrowUpIcon
                        className="mt-1 h-5 w-5 flex-none text-white"
                        aria-hidden="true"
                      /> */}
                    <span>
                      <strong className="font-semibold text-gray-100">
                        Innovation Through Experience:{" "}
                      </strong>{" "}
                      We are not just developers; we are visionaries in the
                      digital realm. Our solutions reflect a blend of creativity
                      and technology.
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    {/* <LockClosedIcon
                        className="mt-1 h-5 w-5 flex-none text-white"
                        aria-hidden="true"
                      /> */}
                    <span>
                      <strong className="font-semibold text-gray-100">
                        Trusted Collaboration:{" "}
                      </strong>{" "}
                      With Digital Nomad, you're not just getting a service;
                      you're entering a partnership. Every pixel we craft, every
                      code we write is a testament to that collaboration.
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    {/* <ServerIcon
                        className="mt-1 h-5 w-5 flex-none text-white"
                        aria-hidden="true"
                      /> */}
                    <span>
                      <strong className="font-semibold text-gray-100">
                        Art Meets Algorithm:{" "}
                      </strong>{" "}
                      While we celebrate creativity, we also harness the power
                      of data and technology to deliver results-driven solutions
                      to our clients.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
