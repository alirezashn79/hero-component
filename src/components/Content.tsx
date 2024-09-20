import Img from "../assets/image.png";
import LeftSideImg from "../assets/Left Side Fade.png";

export default function Contect() {
  return (
    <section className="min-h-screen relative">
      <div className="flex md:flex-row gap-y-8 flex-col-reverse items-center md:items-start lg:items-center justify-between px-16">
        <div className="md:basis-2/5 text-center md:text-left z-[4]">
          <h4 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-10 md:leading-[60px] font-bold text-white md:max-w-md">
            Everything You’re Not Doing Digitally
          </h4>
          <h3 className="text-5xl md:text-6xl lg:text-8xl text-cuPink font-bold my-3">
            WE DO
          </h3>
          <p className="text-cuBlue text-lg md:text-xl lg:text-2xl md:max-w-xs">
            Pink Gorilla was created to be a perfect partner to your business.
            We are a full scale online digital creative agency to handle your
            online business, image, customers, payments and much more!
          </p>
          <div className="mt-8 flex flex-col items-center md:items-start gap-y-8 md:gap-y-14">
            <button className="bg-cuBlue rounded-full font-semibold py-2 px-3">
              Materialize your vision
            </button>
            <button className="bg-white text-base flex flex-col items-center p-2 rounded-2xl lg:translate-x-1/2">
              <span className="text-cuPink"> LET US MAKE YOUR BUSINESS</span>
              <span className="text-cuPurple"> GROWN UP</span>
            </button>
          </div>
        </div>
        <div className="md:translate-y-[13.5%] md:basis-3/5">
          <img className="" src={Img} alt="Monkey" />
        </div>
      </div>
      <div className="absolute left-0 bottom-0 z-[3] hidden lg:block">
        <img src={LeftSideImg} alt="" />
      </div>
    </section>
  );
}
