import React from "react";

const About = () => {
  return (
    <div>
      {/* about intro */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <p className="text-base font-semibold leading-7 text-gray-900">
              About Us{" "}
            </p>
            <h3 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              WE'RE A FULL-SERVICE DIGITAL AGENCY{" "}
            </h3>
            <div className="mt-10  max-w-xl grid-cols-1 gap-8 text-base leading-7 text-gray-900 lg:max-w-none lg:grid-cols-2">
              <div>
                <p>
                  Whether you’re in the market for a new website, extra oomph
                  for an existing one or something completely different, our
                  London-based web design agency has years of experience.
                </p>
                <p className="mt-8">
                  We build lasting relationships with like-minded businesses. As
                  an agency, we work closely with clients to identify and create
                  tailor-made web design solutions for start-ups, SME’s or
                  multinational organisations.
                </p>
                <h3 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Focussed design and clean code
                </h3>{" "}
                <p className="mt-8">
                  Our web design and web development teams pride themselves on
                  writing fast, clean, industry-spec code. Creating bespoke
                  systems or working with off-the-shelf platforms such as
                  WordPress, Shopify or WooCommerce.
                </p>
              </div>
            </div>
            {/* <dl className="mt-16 grid grid-cols-1 gap-x-8 gap-y-12 sm:mt-20 sm:grid-cols-2 sm:gap-y-16 lg:mt-28 lg:grid-cols-4">
              {stats.map((stat, statIdx) => (
                <div
                  key={statIdx}
                  className="flex flex-col-reverse gap-y-3 border-l border-black/90 pl-6"
                >
                  <dt className="text-base leading-7 text-gray-900">
                    {stat.label}
                  </dt>
                  <dd className="text-3xl font-semibold tracking-tight text-gray-900">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
