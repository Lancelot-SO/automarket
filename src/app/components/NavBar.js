"use client";
import React, { useEffect, useState } from "react";
import { PowerIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { FaCarSide, FaMotorcycle, FaTruck, FaGears } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { GiMechanicGarage } from "react-icons/gi";
import { usePathname, useRouter } from "next/navigation";

function NavBar() {
  const router = useRouter();
  const pathname = usePathname();
  const [iconColor, setIconColor] = useState({
    car: "text-[#F88220]",
    bike: "text-[#989898]",
    truck: "text-[#989898]",
    part: "text-[#989898]",
  });
  useEffect(() => {
    if (pathname === "/product/car")
      setIconColor({
        car: "text-[#F88220]",
        bike: "text-[#989898]",
        truck: "text-[#989898]",
        part: "text-[#989898]",
      });
    else if (pathname === "/product/bike") {
      setIconColor({
        car: "text-[#989898]",
        bike: "text-[#F88220]",
        truck: "text-[#989898]",
        part: "text-[#989898]",
      });
    } else if (pathname === "/product/truck") {
      setIconColor({
        car: "text-[#989898]",
        bike: "text-[#989898]",
        truck: "text-[#F88220]",
        part: "text-[#989898]",
      });
    } else if (pathname === "/product/part") {
      setIconColor({
        car: "text-[#989898]",
        bike: "text-[#989898]",
        truck: "text-[#989898]",
        part: "text-[#F88220]",
      });
    }
  }, [pathname]);

  const [nav, setNav] = useState(false);
  return (
    <div>
      <header className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-white border-b border-gray-200 text-sm py-3 sm:py-0 dark:bg-[#414141] dark:border-[#414141]">
        <nav
          className="relative max-w-7xl w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex items-center justify-between">
            <Link
              className="flex-none text-2xl font-semibold dark:text-white uppercase tracking-wider pr-3"
              href="/"
              aria-label="Brand"
            >
              AutoMarket
            </Link>

            <div className="flex flex-row divide-solid divide-[#575757] items-center">
              <div className="text-[#A5A2A5] uppercase text-md  px-5 flex-none hidden lg:inline-block sm:border-l sm:border-gray-500 sm:border-1 ">
                This is a title
              </div>
            </div>
            <div className="sm:items-center sm:pl-[4rem] pl-0 flex-none">
              <Link
                className="text-[#B4BCBC] text-base font-bold sm:px-4 px-0  flex-none  sm:border-gray-500 sm:border-r sm:border-l"
                href="/dealer"
              >
                Dealer Name
              </Link>
            </div>

            <div className="sm:hidden">
              <button
                type="button"
                className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-[#4D4D4D] dark:hover:bg-[#595959] dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-[#595959]"
                data-hs-collapse="#navbar-collapse-with-animation"
                aria-controls="navbar-collapse-with-animation"
                aria-label="Toggle navigation"
              >
                <svg
                  className="hs-collapse-open:hidden w-4 h-4"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                  />
                </svg>
                <svg
                  className="hs-collapse-open:block hidden w-4 h-4"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                </svg>
              </button>
            </div>
          </div>
          <div
            id="navbar-collapse-with-animation"
            className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block"
          >
            <div className="flex flex-col gap-y-4 gap-x-0 mt-5 sm:flex-row sm:items-center sm:justify-end sm:gap-y-0 sm:gap-x-7 sm:mt-0 sm:pl-7">
              <Link
                className="font-medium text-gray-600 hover:text-gray-400 sm:py-3 sm:px-2 sm:rounded-sm flex-none dark:text-gray-100 dark:hover:text-gray-400 uppercase sm:bg-[#4D4D4D] sm:hover:bg-[#595959]"
                href="/offer/new"
              >
                + add an offer
              </Link>

              <div className="hs-dropdown [--strategy:static] sm:[--strategy:fixed] [--adaptive:none] sm:[--trigger:hover] sm:py-4">
                <button
                  type="button"
                  className="flex sm:items-center w-full text-gray-500 hover:text-gray-400 font-medium dark:text-gray-100 dark:hover:text-gray-400 self sm:py-3 sm:px-2 sm:rounded-sm flex-none uppercase sm:bg-[#4D4D4D] sm:hover:bg-[#595959] "
                >
                  PAGES
                  <svg
                    className="ml-2 w-2.5 h-3.5 text-gray-100 pt-1"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    ></path>
                  </svg>
                </button>

                <div className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] sm:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 sm:w-48 hidden z-10 bg-white sm:shadow-md rounded-lg p-2 dark:bg-[#414141] sm:dark:border dark:border-gray-700 dark:divide-gray-700 before:absolute top-full sm:border before:-top-5 before:left-0 before:w-full before:h-5">
                  <Link
                    className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                    href="/"
                  >
                    Home Page
                  </Link>
                  <Link
                    className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                    href="/offer/new"
                  >
                    Add an offer
                  </Link>
                  <Link
                    className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                    href="/Auth/login"
                  >
                    Login Page
                  </Link>
                  <div className="hs-dropdown relative [--strategy:static] sm:[--strategy:absolute] [--adaptive:none] sm:[--trigger:hover]">
                    <button
                      type="button"
                      className="w-full flex justify-between  items-center text-sm text-gray-800 rounded-md py-2 px-3 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                      onClick={() => {
                        router.push("/product/car");
                      }}
                    >
                      Car List
                      <svg
                        className="sm:-rotate-90 ml-2 w-2.5 h-2.5 text-gray-400"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        ></path>
                      </svg>
                    </button>

                    <div className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] sm:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 sm:w-48 hidden z-10 sm:mt-2 bg-white sm:shadow-md rounded-lg p-2 dark:bg-[#414141]  sm:dark:border dark:border-gray-700 dark:divide-gray-700 before:absolute sm:border before:-right-5 before:top-0 before:h-full before:w-5 top-0 right-full !mx-[10px]">
                      <Link
                        className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                        href="/product/car/1"
                      >
                        Car Details
                      </Link>
                    </div>
                  </div>

                  <Link
                    className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                    href="/dealer"
                  >
                    Dealer page
                  </Link>

                  <div className="hs-dropdown relative [--strategy:static] sm:[--strategy:absolute] [--adaptive:none] sm:[--trigger:hover]">
                    <button
                      type="button"
                      className="w-full flex justify-between  items-center text-sm text-gray-800 rounded-md py-2 px-3 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                      onClick={() => {
                        router.push("/manufucturer/");
                      }}
                    >
                      Manufacturer
                      <svg
                        className="sm:-rotate-90 ml-2 w-2.5 h-2.5 text-gray-400"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        ></path>
                      </svg>
                    </button>

                    <div className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] sm:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 sm:w-48 hidden z-10 sm:mt-2 bg-white sm:shadow-md rounded-lg p-2 dark:bg-[#414141]  sm:dark:border dark:border-gray-700 dark:divide-gray-700 before:absolute sm:border before:-right-5 before:top-0 before:h-full before:w-5 top-0 right-full !mx-[10px]">
                      <Link
                        className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                        href="/manufucturer/1"
                      >
                        List
                      </Link>
                    </div>
                  </div>
                  <div className="hs-dropdown relative [--strategy:static] sm:[--strategy:absolute] [--adaptive:none] sm:[--trigger:hover]">
                    <button
                      type="button"
                      className="w-full flex justify-between  items-center text-sm text-gray-800 rounded-md py-2 px-3 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                      onClick={() => {
                        router.push("/dealer/");
                      }}
                    >
                      Dealer
                      <svg
                        className="sm:-rotate-90 ml-2 w-2.5 h-2.5 text-gray-400"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        ></path>
                      </svg>
                    </button>

                    <div className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] sm:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 sm:w-48 hidden z-10 sm:mt-2 bg-white sm:shadow-md rounded-lg p-2 dark:bg-[#414141]  sm:dark:border dark:border-gray-700 dark:divide-gray-700 before:absolute sm:border before:-right-5 before:top-0 before:h-full before:w-5 top-0 right-full !mx-[10px]">
                      <Link
                        className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                        href="/dealer/1"
                      >
                        Dealer Detail
                      </Link>
                    </div>
                  </div>
                  <Link
                    className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                    href="/manufucturer_form"
                  >
                    Manufacturer Form
                  </Link>
                  <Link
                    className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                    href="/contact"
                  >
                    contact
                  </Link>
                </div>
              </div>

              <Link
                className="flex items-center gap-x-2 font-medium text-gray-500 hover:text-blue-500 sm:border-l sm:border-gray-300 sm:my-6 sm:pl-6 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white"
                href="/auth/login"
              >
                <PowerIcon className="h-6 w-6 text-[#838994] font-bold" />
                <p className="flex-none">Sign Out</p>
              </Link>
            </div>
          </div>
        </nav>
      </header>
      <header className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-white border-b border-gray-200 text-sm py-4 sm:py-4 dark:bg-white dark:border-white">
        <nav className="relative max-w-7xl w-full mx-auto px-6 lg:flex sm:items-center lg:justify-between border-md">
          <ul className="flex flex-row divide-x-2 divide-solid divide-[#DEDFDE] lg:justify-start sm:justify-center lg:pb-0 pb-4">
            <li className="pr-3">
              <Link href="/product/car">
                <FaCarSide className={`text-3xl ${iconColor.car}`} />
                <span className="uppercase font-semibold">Cars</span>
              </Link>
            </li>
            <li className="px-3">
              <Link href="/product/bike">
                <FaMotorcycle
                  className={`text-3xl ${iconColor.bike} hover:text-[#F88220]`}
                />
                <span className="uppercase font-semibold">Bikes</span>
              </Link>
            </li>
            <li className="px-3">
              <Link href="/product/truck">
                <FaTruck
                  className={`text-3xl ${iconColor.truck} hover:text-[#F88220]`}
                />
                <span className="uppercase font-semibold">Trucks</span>
              </Link>
            </li>
            <li className="px-3">
              <Link href="/product/part">
                <FaGears className="text-3xl text-[#989898] hover:text-[#F88220]" />
                <span className="uppercase font-semibold">Parts</span>
              </Link>
            </li>

            <li className="px-3">
              <Link href="/product/mechanic">
                <GiMechanicGarage className="text-3xl text-[#989898] hover:text-[#F88220]" />
                <span className="uppercase font-semibold">Mechanic</span>
              </Link>
            </li>
            <li className="pr-12">
              <hr className="divide-x-2 divide-solid divide-[#DEDFDE] rotate-90" />
            </li>
          </ul>
          <form
            action=""
            method="post"
            className="flex flex-row place-items-center grow sm:pb-0 pb-12"
          >
            <div className="flex sm:flex-row flex-col grow drop-shadow-md h-10  ">
              <input
                type="text"
                name="quick_search"
                placeholder="Ex: Mercedes-Benz E220"
                className="block  w-full  focus:outline-none py-1.5 pl-7 border-0 mr-4 rounded-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-grey-400 "
              />
              <div className="flex sm:flex-row  sm:ml-8 sm:mt-0 mt-4 justify-between">
                <select
                  name="type-option"
                  id=""
                  className="w-[10rem] sm:w-24 px-2 sm:py-[0.65rem] py-2.5  sm:mb-0   mr-2 drop-shadow-md rounded-md border-0 focus:outline-none  ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-grey-400"
                >
                  <option value="cars" defaultValue="cars">
                    Cars
                  </option>
                  <option value="bikes">Bikes</option>
                  <option value="trucks">Trucks</option>
                  <option value="parts">Parts</option>
                  <option value="mechanic">Mechanic</option>
                </select>
                <div className="flex sm:ml-0">
                  <button
                    type="submit"
                    className="flex items-center justify-center w-[10rem] sm:w-24  p-[1] h-[2.6rem]  bg-[#F88220] text-white rounded-md uppercase drop-shadow-md"
                  >
                    <FaSearch className="mr-1" /> Search
                  </button>
                </div>
              </div>
            </div>
          </form>
        </nav>
      </header>
    </div>
  );
}

export default NavBar;
