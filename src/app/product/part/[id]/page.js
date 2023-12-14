import React from "react";
import { FaLocationDot, FaShareNodes } from "react-icons/fa6";
import { IoMdArrowDropright } from "react-icons/io";
import { GiRotaryPhone } from "react-icons/gi";
import { ImLocation2 } from "react-icons/im";
import PartHoverText from "@/app/components/PartHoverText";
import LoanCalculator from "@/app/components/LoanCalculator";

function CarDetailPage() {
  const carDetails = [
    {
      label: "Model:",
      value: "Mercedes-Benz CLS 320 Coupe",
    },
    {
      label: "Fabrication:",
      value: "2010",
    },
    {
      label: "Type:",
      value: "C43",
    },
    {
      label: "Bolt:",
      value: "Double Bolt",
    },
    {
      label: "Transmision:",
      value: "Automatic",
    },
    {
      label: "Color:",
      value: "Black",
    },
    {
      label: "Pad:",
      value: "Flat pad",
    },
    {
      label: "Valve",
      value: "Double Valve",
    },
  ];
  return (
    <div>
      <div className="flex flex-col bg-pink-50 w-full h-36 border-b-2">
        <div className="flex px-8 lg:px-20 flex-col pt-4">
          <h1 className="text-2xl font-bold">Sell your Sparepart</h1>
          <div className="flex flex-row pt-2">
            <small>
              <a href="/" className="cursor-pointer text-black">
                Home
              </a>
            </small>
            <IoMdArrowDropright className="pt-1" />
            <small>
              <a href="/" className="cursor-pointer text-black">
                Add an offer
              </a>
            </small>
          </div>
          <div className="flex flex-row items-center gap-4 justify-between">
            <div className="flex flex-row gap-2">
              <a
                href="/"
                className="flex items-center justify-center w-40 h-10 font-bold mt-6  bg-[#F88220] text-white rounded-sm drop-shadow-md"
              >
                Part description
              </a>
              <a
                href="/"
                className="lg:flex hidden items-center justify-center w-40 h-10 font-bold mt-6 gap-1 bg-gray-500 text-white rounded-sm drop-shadow-md"
              >
                <FaLocationDot />
                Vehicle location
              </a>
            </div>
            <div className="flex flex-row gap-2 mr-24">
              <a
                href="/"
                className="lg:flex hidden items-center justify-center w-40 h-10 font-bold mt-6 gap-1 bg-gray-500 hover:bg-[#F88220] text-white rounded-sm drop-shadow-md"
              >
                <FaShareNodes />
                Click to share
              </a>
              <a
                href="/offer/buyer"
                className="flex items-center justify-center w-40 h-10 font-bold mt-6 gap-1 bg-[#F88220] text-white rounded-sm drop-shadow-md"
              >
                Purchase Sparepart
              </a>
            </div>
          </div>
        </div>
      </div>
      <section className="  border-b-2 mt-2  flex flex-col lg:flex-row">
        <div className="lg:w-1/2 px-8 lg:px-20">
          <img
            src="/images/sparepart.jpg"
            alt="mercedes"
            className="w-3/3 h-82 pt-4 mb-2"
          />
          <div className="flex flex-row lg:px-8 gap-4">
            <img
              src="/images/sparepart.jpg"
              alt="mercedes"
              className="w-24 h-20 py-4 rounded-md"
            />
            <img
              src="/images/sparepart.jpg"
              alt="mercedes"
              className="w-24 h-20 py-4 rounded-md"
            />
            <img
              src="/images/sparepart.jpg"
              alt="mercedes"
              className="w-24 h-20 py-4 rounded-md"
            />
            <img
              src="/images/sparepart.jpg"
              alt="mercedes"
              className="w-24 h-20 py-4 rounded-md lg:flex hidden"
            />
            <img
              src="/images/sparepart.jpg"
              alt="mercedes"
              className="w-24 h-20 py-4 rounded-md lg:flex hidden"
            />
          </div>
        </div>
        <div className="lg:w-1/2 px-8 lg:px-0 flex flex-col">
          <div className="flex flex-row pt-4 mb-2">
            <h1 className="text-[#F88220] font-bold text-3xl">54.980 GHS</h1>
            <small className="mt-1">*Price Negotiable</small>
          </div>
          <div className="w-full">
            <table className="w-3/3">
              <tbody>
                {carDetails.map((detail, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? "bg-gray-200" : ""}
                  >
                    <td className=" p-2">{detail.label}</td>
                    <th className=" p-2">{detail.value}</th>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex gap-10 mt-4 items-center">
            <small className="font-bold text-md">
              You want to sell a similar part?
            </small>
            <a
              href="/product/part/formpage"
              className="text-[#F88220] font-bold"
            >
              +Add offer
            </a>
          </div>
        </div>
      </section>
      <section className=" mt-2 flex flex-col lg:flex-row">
        <div className="lg:w-2/3 px-8 lg:px-20 mt-4 flex-col flex">
          <div className="border-b-2 pb-4">
            <h1 className="text-xl">
              <b>Vehicle</b> information
            </h1>
            <div className="flex mt-4 flex-col">
              <span className="font-bold">Features:</span>
              <p>alloy wheels, xenon headlights, fog lights, tinted glass</p>
            </div>
            <div className="flex mt-4 flex-col">
              <span className="font-bold">Other parameters:</span>
              <p>service book</p>
            </div>
            <div className="flex mt-4 flex-col">
              <span className="font-bold">Safety:</span>
              <p>
                ABS, traction control, alarm, airbags, immobilizer, anti-theft,
                ESP, EDS, protection framework
              </p>
            </div>
            <div className="flex mt-4 flex-col">
              <span className="font-bold">Comfort:</span>
              <p>
                electric windows, electric mirrors, air conditioning, leather
                upholstery, navigation system, central locking, radio / CD,
                power steering, onboard computer, cruise control, heated seats,
                rain sensor, steering wheel controls, parking sensors
              </p>
            </div>
          </div>
          <div className="border-b-2 pb-4 mt-4">
            <h1 className="text-xl pb-8">
              <b>More</b> information
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              aliquet fringilla metus, a ultricies ligula consequat at. Maecenas
              eget massa at eros ornare rhoncus. In sit amet enim risus, in
              mattis felis. Donec lorem arcu, tempor quis fermentum et, viverra
              in turpis. Nam non nunc vitae justo tincidunt lobortis eu sit amet
              dui. Nam ut dui aliquet nisl fermentum mollis sit amet eget
              lectus. Vivamus iaculis massa sit amet velit convallis aliquam.
              Vestibulum dolor erat, congue nec viverra eget, aliquet sit amet
              nunc. Donec vitae arcu orci.
            </p>
          </div>
        </div>
        <div className="lg:w-1/3 px-8 lg:px-0 mt-4 lg:mr-20">
          <LoanCalculator />
        </div>
      </section>
      <section>
        <div className="lg:w-2/3 px-8 lg:px-20 mt-4 flex-col flex mb-12">
          <div className="border-b-2 pb-20">
            <h1 className="text-xl">
              <b>Contact</b> details
            </h1>
            <p className="flex mb-4 text-gray-500">
              AutoMarket does not store additional information about the seller
              except for those contained in the announcement.
            </p>

            <div className="flex flex-col my-4 text-gray-500">
              <div className="flex flex-col lg:flex-row mb-6 justify-between pr-38 gap-4 lg:gap-0">
                <div className="flex flex-row items-center gap-4">
                  <div className="flex bg-[#F88220] w-10 h-10 rounded-md items-center justify-center ">
                    <GiRotaryPhone className="text-white" size={30} />
                  </div>
                  <span className="ml-2">+40 722 222 222</span>
                </div>
                <div className="flex flex-row items-center gap-4">
                  <div className="flex bg-[#F88220] w-10 h-10 rounded-md items-center justify-center ">
                    <ImLocation2 className="text-white" size={30} />
                  </div>
                  <span className="ml-2">Spintex, Accra- Ghana </span>
                </div>
              </div>
              <div className="flex flex-col lg:flex-row justify-between pr-38 gap-4 lg:gap-0">
                <div className="flex flex-row items-center gap-4">
                  <div className="flex bg-[#F88220] w-10 h-10 rounded-md items-center justify-center ">
                    <GiRotaryPhone className="text-white" size={30} />
                  </div>
                  <span className="ml-2">+40 722 222 222</span>
                </div>
                <div className="flex flex-row items-center gap-4">
                  <div className="flex bg-[#F88220] w-10 h-10 rounded-md items-center justify-center ">
                    <ImLocation2 className="text-white" size={30} />
                  </div>
                  <span className="ml-2">Spintex, Accra- Ghana</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 mt-4 lg:flex hidden"></div>
      </section>
      <section className="lg:px-20 px-8">
        <div>
          <h1 className="text-xl mb-4">
            <b>Similar</b> offers
          </h1>{" "}
        </div>
        <div className="flex flow-row gap-8">
          <div className="w-72">
            <PartHoverText />
          </div>
          <div className="w-72">
            <PartHoverText />
          </div>
          <div className="w-72">
            <PartHoverText />
          </div>
        </div>
      </section>
    </div>
  );
}

export default CarDetailPage;
