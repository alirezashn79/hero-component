import { cn } from "cn-func";
import { useEffect, useState } from "react";
import Logo from "../assets/logo.svg";

export default function Navbar() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  useEffect(() => {
    if (isOpenMenu) {
      document.querySelector("body")?.classList.add("lock-body-scroll");
    } else {
      document.querySelector("body")?.classList.remove("lock-body-scroll");
    }
  }, [isOpenMenu]);
  return (
    <header className="sticky left-0 right-0 top-0 bg-[#371665] md:bg-transparent z-10 md:static md:left-auto md:right-auto">
      <nav className="h-32 lg:h-[182px] w-full">
        <div className="container mx-auto h-full px-6">
          {/* desktop */}
          <div className="hidden md:flex items-center h-full justify-between text-nowrap">
            <div className="shrink-0">
              <img className="w-20 lg:w-auto" src={Logo} alt="Logo" />
            </div>

            <div className="flex items-center gap-8 lg:gap-x-[60px] text-sm lg:text-base xl:text-xl font-semibold">
              <ul className="flex items-center gap-x-8 lg:gap-10  xl:gap-x-[70px] text-white">
                <li>
                  <a href="#">Services</a>
                </li>
                <li>
                  <a href="#">Pricing</a>
                </li>
                <li>
                  <a href="#">Meet us</a>
                </li>
                <li>
                  <a href="#">Meet Tools</a>
                </li>
              </ul>

              <div className="flex items-center gap-x-4 text-sm lg:text-base xl:text-xl">
                <a
                  className="bg-white text-cuPink rounded-full px-2.5 py-1 lg:px-6 lg:py-2.5"
                  href="#"
                >
                  Signin
                </a>
                <a
                  className="bg-white text-cuPink rounded-full px-2.5 py-1 lg:px-6 lg:py-2.5"
                  href="#"
                >
                  Book a meeting
                </a>
              </div>
            </div>
          </div>
          {/* mobile */}
          <div className="h-full flex items-center justify-between md:hidden">
            {/* hamburger icon */}
            <button
              onClick={() => setIsOpenMenu(true)}
              className="p-2 rounded-lg bg-cuPink w-fit"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>

            <div className="shrink-0">
              <img className="w-20 lg:w-auto" src={Logo} alt="Logo" />
            </div>
          </div>
        </div>
      </nav>

      <div
        className={cn(
          "absolute md:hidden left-0 top-0 bottom-0 w-52 sm:w-64 h-screen bg-slate-900 text-white transition-all z-30",
          isOpenMenu
            ? "translate-x-0 sm:translate-x-0 shadow-2xl shadow-cuPink"
            : "-translate-x-52 sm:-translate-x-64"
        )}
      >
        <div className="flex justify-end mt-4 mr-2">
          <button
            onClick={() => setIsOpenMenu(false)}
            className="text-rose-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <ul className="text-base text-nowrap mt-4">
          <li className="p-4 px-5 hover:bg-slate-300 rounded-md">
            <a href="#">Services</a>
          </li>
          <li className="p-4 px-5 hover:bg-slate-300 rounded-md">
            <a href="#">Pricing</a>
          </li>
          <li className="p-4 px-5 hover:bg-slate-300 rounded-md">
            <a href="#">Meet us</a>
          </li>
          <li className="p-4 px-5 hover:bg-slate-300 rounded-md">
            <a href="%=#">Meet Tools</a>
          </li>
        </ul>
        <div className="flex flex-col items-center gap-y-6 mt-10">
          <a className="bg-white text-cuPink rounded-full px-6 py-2.5" href="#">
            Signin
          </a>
          <a className="bg-white text-cuPink rounded-full px-6 py-2.5" href="#">
            Book a meeting
          </a>
        </div>
      </div>
      <div
        className={cn(
          "fixed inset-0 backdrop-blur-sm z-20 transition-all",
          !isOpenMenu && "hidden"
        )}
        onClick={() => setIsOpenMenu(false)}
      ></div>
    </header>
  );
}
