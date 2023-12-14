import React from "react";
import { FaSearch } from "react-icons/fa";

const state = [
  "Accra",
  "Takoradi",
  "Kumasi",
  "Cape Coast",
  "Sunyani",
  "Tema",
  "Shama",
  "Nzema",
  "Tamale",
  "Wa",
  "Bolgatanga",
  "Ho",
];

function DealerSearchFilter() {
  return (
    <fieldset className="flex flex-col w-full space-x-5 space-y-3 bg-[#F2F2F2] rounded-sm">
      <div className="pt-2 px-5 text-[1.6rem]">
        <strong>Search</strong> filters
      </div>

      <div className="w-full text-sm space-y-2">
        <div className="form-control flex flex-row space-x-4 ">
          <input
            type="radio"
            name="radio-10"
            className="radio checked:bg-blue-500 "
          />
          <span className="label-text">Dealer</span>
        </div>
        <div className="form-control flex flex-row space-x-4 ">
          <input
            type="radio"
            name="radio-10"
            className="radio checked:bg-blue-500"
          />
          <span className="label-text">Leasing Companies</span>
        </div>
      </div>
      <div className="w-full flex flex-col space-y-1 text-lg">
        <label htmlFor="name">Name:</label>
        <input type="text" className="w-3/4 border shadow-md  h-[2rem]" />
        <div className="py-2">
          <button
            type="submit"
            className="flex items-center w-24 mr-2 p-2 h-10 self-center bg-[#F88220] text-white rounded-md uppercase drop-shadow-md"
          >
            <FaSearch className="mr-1" /> Search
          </button>
        </div>
      </div>
      <div className="w-full flex-col space-y-1">
        <p className="text-xl">
          <strong>City / Country</strong>
        </p>
        <div className="form-control pt-4 pb-6">
          {state.map((item, index) => (
            <div className="flex flex-row space-x-2 pb-2" key={index}>
              <input type="checkbox" className="checkbox" />
              <div className="label-text justify-center self-center text-sm ">
                {item}
              </div>
            </div>
          ))}
        </div>
      </div>
    </fieldset>
  );
}

export default DealerSearchFilter;
