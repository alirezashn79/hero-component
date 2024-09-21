import { TypeAnimation } from "react-type-animation";
import Img from "../assets/image.png";
import LeftSideImg from "../assets/Left Side Fade.png";

export default function Contect() {
  return (
    <section className="h-auto lg:min-h-screen relative">
      <div className="flex md:flex-row gap-y-8 flex-col-reverse items-center md:items-start lg:items-center justify-between px-16 pb-10 lg:pb-0">
        <div className="md:basis-2/5 text-center md:text-left z-[4]">
          {/* <h4 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-10 md:leading-[60px] font-bold text-white md:max-w-md">
            Everything You’re Not Doing Digitally
          </h4> */}
          <div className="h-20 md:h-[180px] lg:h-36 xl:h-24">
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Everything",
                30, // wait 1s before replacing "Mice" with "Hamsters"
                "Everything You’re",
                30,
                "Everything You’re Not Doing",
                30,
                "Everything You’re Not Doing Digitally",
                1000,
              ]}
              wrapper="h4"
              speed={50}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-10 md:leading-[60px] font-bold text-white md:max-w-lg h-full"
              repeat={Infinity}
            />
          </div>
          <h3 className="text-5xl md:text-6xl lg:text-8xl text-cuPink font-bold my-3 animate-pulse">
            WE DO
          </h3>

          <p className="text-cuBlue text-lg md:text-xl lg:text-2xl md:max-w-xs">
            Pink Gorilla was created to be a perfect partner to your business.
            We are a full scale online digital creative agency to handle your
            online business, image, customers, payments and much more!
          </p>
          <div className="mt-8 flex flex-col items-center md:items-start gap-y-8 md:gap-y-14">
            <button className="bg-cuBlue rounded-full font-semibold py-2 px-3 border-2 border-cuBlue hover:border-cuPurple transition-all">
              Materialize your vision
            </button>
            <button className="bg-white text-base flex flex-col items-center p-2 rounded-2xl lg:translate-x-1/2 group transition-all border-2 border-white hover:border-cuPink">
              <span className="text-cuPink group-hover:text-cuPurple">
                {" "}
                LET US MAKE YOUR BUSINESS
              </span>
              <span className="text-cuPurple group-hover:text-cuPink">
                {" "}
                GROWN UP
              </span>
            </button>
          </div>
        </div>
        <div className="md:translate-y-[13.5%] md:basis-3/5">
          <img src={Img} alt="Monkey" />
        </div>
      </div>
      <div className="absolute left-0 bottom-0 z-[3] hidden lg:block">
        <img src={LeftSideImg} alt="left" />
      </div>
    </section>
  );
}
