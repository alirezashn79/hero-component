export default function Details() {
  return (
    <section className="text-white flex items-start flex-col md:flex-row gap-8 px-24 py-6">
      <div className="lg:basis-1/3 basis-1/2">
        <h4 className="font-bold text-xl text-cuPink">
          Our Mission
          <span className="w-16 h-0.5 mt-1 bg-cuPink block"></span>
        </h4>
        <ul className="mt-4">
          <li className="flex items-start gap-1">
            <span className="block translate-y-1.5 shrink-0 h-4 w-4 rounded-full border-2 border-cuPink"></span>
            <span>
              We aim to provide a true dollar value to your company, so you can
              either sell it, grow it or both.
            </span>
          </li>

          <li className="flex items-start gap-1">
            <span className="block translate-y-1.5 shrink-0 h-4 w-4 rounded-full border-2 border-cuPink"></span>
            <span>
              Pink Gorilla will operate with your companies net value (what its
              worth) and what it can be worth.
            </span>
          </li>
          <li className="flex items-start gap-1">
            <span className="block translate-y-1.5 shrink-0 h-4 w-4 rounded-full border-2 border-cuPink"></span>
            <span>
              Our Partnership is zoomed out, we aim to be part of your mission
              for as long as it takes.
            </span>
          </li>
        </ul>
        <a
          className="bg-cuPurple block w-fit rounded-full px-4 py-2 mt-4"
          href="#"
        >
          Learn More
        </a>
      </div>

      <div className="lg:basis-1/3 basis-1/2">
        <h4 className="font-bold text-xl text-cuPink">
          how we do it
          <span className="w-16 h-0.5 mt-1 bg-cuPink block"></span>
        </h4>
        <ul className="mt-4">
          <li className="flex items-start gap-1">
            <span className="block translate-y-1.5 shrink-0 h-4 w-4 rounded-full border-2 border-cuPink"></span>
            <span>
              Over 100 artistic designers, engineers, and experts from all over
              the world
            </span>
          </li>

          <li className="flex items-start gap-1">
            <span className="block translate-y-1.5 shrink-0 h-4 w-4 rounded-full border-2 border-cuPink"></span>
            <span>
              Dedicated account managers, you will always talk to a person.
            </span>
          </li>
          <li className="flex items-start gap-1">
            <span className="block translate-y-1.5 shrink-0 h-4 w-4 rounded-full border-2 border-cuPink"></span>
            <span>
              Content creators & social media experts that make sure your
              content is optimized.
            </span>
          </li>
        </ul>
        <a
          className="bg-cuPink block w-fit rounded-full px-4 py-2 mt-4"
          href="#"
        >
          Learn More
        </a>
      </div>
    </section>
  );
}
