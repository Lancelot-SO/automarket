import React from "react";
import { IoMdArrowDropright } from "react-icons/io";

function NechanicPage() {
  return (
    <div>
      <div className="flex flex-col bg-pink-50 w-full h-36 border-b-2">
        <div className="flex px-8 lg:px-20 flex-col pt-4">
          <h1 className="text-2xl font-bold">Our repair services</h1>
          <div className="flex flex-row pt-2">
            <small>
              <a href="/" className="cursor-pointer text-black">
                Home
              </a>
            </small>
            <IoMdArrowDropright className="pt-1" />
            <small>
              <a href="/" className="cursor-pointer text-black">
                Mechanic
              </a>
            </small>
          </div>
          <div className="flex flex-row gap-2">
            <a
              href="/"
              className="flex items-center justify-center w-28 h-10 font-bold mt-6  bg-[#F88220] text-white rounded-sm drop-shadow-md"
            >
              1. New offer
            </a>
            <a
              href="/"
              className="flex items-center justify-center w-28 h-10 font-bold mt-6  bg-gray-500 text-white rounded-sm drop-shadow-md"
            >
              2. Preview
            </a>
            <a
              href="/"
              className="flex items-center justify-center w-28 h-10 font-bold mt-6  bg-gray-500 text-white rounded-sm drop-shadow-md"
            >
              3. Submit
            </a>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 px-8 h-50 mr-44  ml-20 py-4 pr-12 my-6 lg:flex flex-col hidden">
        <h2 className="text-2xl mb-4">
          Order ​​your mechanic on <b>AutoMarket</b> and benefit from more than
          1 million potential buyers every month!
        </h2>
        <ul>
          <li>Required fields are marked with *</li>
          <li>
            Please post offers only on the car (parts are a special category).
          </li>
          <li>If you are a dealer, please visit the dealers section</li>
          <li>
            If you have difficulties in posting an offer on the website, please
            call 055 631 880 4
          </li>
        </ul>
      </div>
      <section className="flex px-8 lg:px-20 flex-col">
        <div>
          <h1 className="pb-4 text-2xl">
            <b>Vehicle</b> data
          </h1>
          <form className="flex flex-col">
            <div className="border-b-2 pb-2 mb-4">
              <div className="flex flex-col lg:flex-row pb-2 pl-10 gap-8">
                <div className="flex flex-col">
                  <label htmlFor="manufacturer" className="text-xs">
                    Manufacturer:
                    <small className="text-red-500 text-lg">*</small>
                  </label>
                  <select
                    id="manufacturer"
                    name="manufacturer"
                    className="block w-60 mt-1 p-1 border border-gray-200 rounded-md"
                  >
                    <option value="select">select</option>
                    <option value="option1">Mercedes Benz</option>
                    <option value="option2">Toyota</option>
                    <option value="option3">Ford</option>
                  </select>
                </div>

                <div className="flex flex-col">
                  <label htmlFor="model" className="text-xs">
                    Model:<small className="text-red-500 text-lg">*</small>
                  </label>
                  <select
                    id="model"
                    name="model"
                    className="block w-60 mt-1 p-1 border border-gray-200 rounded-md"
                  >
                    <option value="select">select</option>
                    <option value="option1">Merceded Benz CLS 320</option>
                    <option value="option2">Toyota Supra</option>
                    <option value="option3">Fusion</option>
                  </select>
                </div>

                <div className="flex flex-col">
                  <label htmlFor="year" className="text-xs">
                    Year:
                    <small className="text-red-500 text-lg">*</small>
                  </label>
                  <select
                    id="year"
                    name="year"
                    className="block w-60 mt-1 p-1 border border-gray-200 rounded-md"
                  >
                    <option value="select">select</option>
                    <option value="option1">2022</option>
                    <option value="option2">2019</option>
                    <option value="option3">2021</option>
                  </select>
                </div>

                <div className="flex flex-col">
                  <label htmlFor="body" className="text-xs">
                    Body Type:<small className="text-red-500 text-lg">*</small>
                  </label>
                  <select
                    id="body"
                    name="body"
                    className="block w-60 mt-1 p-1 border border-gray-200 rounded-md"
                  >
                    <option value="select">select</option>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                  </select>
                </div>
              </div>
            </div>
            <h1 className="pb-4 text-2xl">
              <b>Repair</b> services
            </h1>
            <div className="border-b-2 pb-2 mb-4">
              <div className="flex flex-row pb-2 pl-10 gap-8">
                <div className="flex flex-col">
                  <label htmlFor="partName" className="text-xs">
                    Choose a category from the following list:
                    <small className="text-red-500 text-lg">*</small>
                  </label>
                  <select
                    id="partName"
                    name="partName"
                    className="block w-60 mt-1 p-1 border border-gray-200 rounded-md"
                  >
                    <option value="select">select</option>
                    <option value="option1">Break Repair</option>
                    <option value="option2">Lube, Oil and Filter Change</option>
                    <option value="option3">Tire Services</option>
                    <option value="option3">
                      Electrical and Electronic Services
                    </option>
                    <option value="option3">Diesel Engine Repair</option>
                    <option value="option3">Cooling System Repair</option>
                  </select>
                </div>
              </div>
            </div>

            <h1 className="pb-4 text-2xl">
              <b>Fault</b> description
            </h1>

            <div className="pl-10 flex flex-col border-b-2">
              <label htmlFor="technical" className="text-xs">
                Some text:
              </label>
              <textarea
                id="desc"
                name="desc"
                rows="8"
                cols="50"
                className="border-2 mr-64 mb-6 w-72 lg:w-96"
              ></textarea>
            </div>

            <div className="flex flow-row items-center justify-between">
              <div className="flex items-center gap-2 pl-10 mb-8 mt-4">
                <input
                  type="checkbox"
                  id="abs-checkbox"
                  className="ml-2 h-3 w-3 text-indigo-600"
                />
                <label htmlFor="abs-checkbox" className="text-gray-700">
                  I agree to the Terms and Conditions.
                </label>
              </div>
              <button
                type="submit"
                className="flex items-center lg:mr-24 justify-center mb-8 w-28 h-10 font-bold mt-6  bg-[#F88220] text-white rounded-sm drop-shadow-md"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default NechanicPage;
