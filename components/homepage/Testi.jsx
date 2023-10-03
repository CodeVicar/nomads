export default function Example() {
  return (
    <section className="bg-[#f1f8ff] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col pb-10 sm:pb-16 lg:pb-0 lg:pr-8 xl:pr-20">
            <img className="h-12 self-start" src="images/guard.png" alt="" />
            <figure className="mt-10 flex flex-auto flex-col justify-between">
              <blockquote className="text-lg leading-8 text-gray-900">
                <p>
                  “ I can confidently say that their team's dedication and
                  innovative solutions have been pivotal in our growth journey.
                  Highly recommended for any business looking to make a digital
                  impact”
                </p>
              </blockquote>
              <figcaption className="mt-10 flex items-center gap-x-6">
                <img
                  className="h-14 w-14 rounded-full bg-gray-50"
                  src="images/naaman.jpeg"
                  alt=""
                />
                <div className="text-base">
                  <div className="font-semibold text-gray-900">Norman</div>
                  <div className="mt-1 text-gray-900">
                    CEO of Guard Match Ltd{" "}
                  </div>
                </div>
              </figcaption>
            </figure>
          </div>
          <div className="flex flex-col border-t border-gray-900/10 pt-10 sm:pt-16 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0 xl:pl-20">
            <img
              className="h-12 self-start"
              src="images/mai.jpeg"
              alt=""
            />
            <figure className="mt-10 flex flex-auto flex-col justify-between">
              <blockquote className="text-lg leading-8 text-gray-900">
                <p>
                  “I couldn't be happier with the website Digital Nomad created for
                  my business. Their attention to detail and creativity truly
                  set them apart. Our online presence has significantly
                  improved, and it's all thanks to their top-notch web design
                  services”
                </p>
              </blockquote>
              <figcaption className="mt-10 flex items-center gap-x-6">
                <img
                  className="h-14 w-14 rounded-full bg-gray-50"
                  src="images/mai.jpeg"
                  alt=""
                />
                <div className="text-base">
                  <div className="font-semibold text-gray-100">
                    Joseph Rodriguez
                  </div>
                  <div className="mt-1 text-gray-100">CEO of Reform</div>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
