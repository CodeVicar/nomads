const people = [
    {
      name: 'HMB BrickWork',
      role: 'Custom Next Js',
      imageUrl:
      "images/port1.png",
      location: 'London, United Kingdom',
    },
    {
        name: 'Guard Match',
        role: 'Landing Page',
        imageUrl:
        "images/port2.png",
        location: 'London, UK',
      },
      {
        name: 'Leslie Alexander',
        role: 'Co-Founder / CEO',
        imageUrl:
        "images/port3.png",
        location: 'Nairobi Kenya',
      },
      {
        name: 'Leslie Alexander',
        role: 'Co-Founder / CEO',
        imageUrl:
        "images/port1.png",
        location: 'Toronto, Canada',
      },
    // More people...
  ]
  
  export default function Example() {
    return (
      <div className="bg-gray-900 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Our team</h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              We’re a dynamic group of individuals who are passionate about what we do and dedicated to delivering the
              best results for our clients.
            </p>
          </div>
          <ul
            role="list"
            className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 xl:grid-cols-4"
          >
            {people.map((person) => (
              <li key={person.name}>
                <img className=" w-full rounded-2xl object-cover" src={person.imageUrl} alt="" />
                <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-white">{person.name}</h3>
                <p className="text-base leading-7 text-gray-300">{person.role}</p>
                <p className="text-sm leading-6 text-gray-500">{person.location}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
  