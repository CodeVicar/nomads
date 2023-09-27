const faqs = [
  {
    question: "What services does Digital Nomad offer?",
    answer:
      "Digital Nomad provides a diverse range of digital solutions, including web development, graphic design, logo creation, and mobile app development. Our goal is to craft a digital presence that resonates with your target audience and stands out in the digital landscape.",
  },
  {
    question: "How long does a website design project usually take?",
    answer:
      "The duration for a website design project varies based on its complexity and specific requirements. Typically, a basic website might take 2-4 weeks, while more complex designs can extend over several months. We always prioritize delivering quality within the agreed timeframe.",
  },
  {
    question: "Do you offer post-launch website support?",
    answer:
      "Yes, we believe in fostering long-term relationships with our clients. We provide post-launch support to ensure your website operates seamlessly and stays updated with the latest digital trends and technologies.",
  },
  {
    question: "How do you ensure website security?",
    answer:
      "Website security is paramount for us. We employ industry best practices, including SSL certificates, frequent backups, and advanced security plugins, to safeguard the websites we develop from potential threats.",
  },
  {
    question: "Can Digital Nomad assist with digital marketing?",
    answer:
      "Absolutely! We specialize in comprehensive digital marketing strategies designed to amplify your brand",
  },
];

export default function Example() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:pt-32 lg:px-8 lg:py-40">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">
              Frequently asked questions
            </h2>
            <p className="mt-4 text-base leading-7 text-gray-600">
              Can’t find the answer you’re looking for? Reach out to our{" "}
              <a
                href="/contact"
                className="font-semibold text-indigo-600 hover:text-indigo-500"
              >
                customer support
              </a>{" "}
              team.
            </p>
          </div>
          <div className="mt-10 lg:col-span-7 lg:mt-0">
            <dl className="space-y-10">
              {faqs.map((faq) => (
                <div key={faq.question}>
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    {faq.question}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">
                    {faq.answer}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
