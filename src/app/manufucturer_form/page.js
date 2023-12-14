"use client";

import React, { useRef } from "react";
import { IoMdArrowDropright } from "react-icons/io";
import { PiUploadSimpleBold } from "react-icons/pi";

function UnderConstructionPage() {
  const fileInputRef = useRef(null);

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    // Handle the file here, you can upload it to a server or perform other actions.
  };

  return (
    <div>
      <div className="flex flex-col bg-pink-50 w-full lg:h-36 border-b-2">
        <div className="flex px-4 lg:px-20 flex-col pt-4">
          <h1 className="text-2xl font-bold">Manufucterer Registration Form</h1>
          <div className="flex flex-row pt-2">
            <small>
              <a href="/" className="cursor-pointer text-black">
                Home
              </a>
            </small>
            <IoMdArrowDropright className="pt-1" />
            <small>
              <a href="/" className="cursor-pointer text-black">
                Manufacturer
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
      <div className="bg-gray-100 px-8 h-50 mr-44  ml-20 py-4 pr-12 my-6 lg:flex hidden flex-col">
        <h2 className="text-2xl mb-4">
          Register with us on <b>AutoMarket</b> and benefit from more than 1
          million potential buyers every month!
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
      <section className="flex px-4 lg:px-20 flex-col">
        <div>
          <h1 className="pb-4 text-2xl">
            <b>Manufacturer</b> details
          </h1>
          <form className="flex flex-col">
            <div className="border-b-2 pb-2 mb-4">
              <div className="flex flex-col lg:flex-row pb-2 pl-10 gap-8">
                <div className="flex flex-col">
                  <label htmlFor="companyName" className="text-xs">
                    Company Name:
                    <small className="text-red-500 text-lg">*</small>
                  </label>
                  <input
                    id="companyName"
                    name="companyName"
                    className="block w-60 mt-1 p-1 border border-gray-200 rounded-md"
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="brandName" className="text-xs">
                    Brand Name:<small className="text-red-500 text-lg">*</small>
                  </label>
                  <input
                    id="brandName"
                    name="brandName"
                    className="block w-60 mt-1 p-1 border border-gray-200 rounded-md"
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="address" className="text-xs">
                    Address:<small className="text-red-500 text-lg">*</small>
                  </label>
                  <input
                    id="address"
                    name="address"
                    className="block w-60 mt-1 p-1 border border-gray-200 rounded-md"
                  />
                </div>
              </div>
              <div className="pl-10 flex flex-col lg:flex-row gap-8">
                <div className="flex flex-col">
                  <label htmlFor="repPhone" className="text-xs">
                    Rep. Phone No.:
                    <small className="text-red-500 text-lg">*</small>
                  </label>
                  <input
                    id="repPhone"
                    name="repPhone"
                    className="block w-60 mt-1 p-1 border border-gray-200 rounded-md"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="repEmail" className="text-xs">
                    Rep. Email:<small className="text-red-500 text-lg">*</small>
                  </label>
                  <input
                    id="repEmail"
                    name="repEmail"
                    className="block w-60 mt-1 p-1 border border-gray-200 rounded-md"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-10">
              <div className="flex flex-col">
                <h1 className="pb-4 text-2xl">
                  <b>Registration</b> documents
                </h1>

                <div className="flex flex-row pl-10 mb-4 pb-4 gap-5">
                  <div
                    className="w-44 h-36 bg-zinc-400 flex items-center justify-center flex-col rounded-md cursor-pointer"
                    onClick={handleUploadClick}
                  >
                    <input
                      type="file"
                      ref={fileInputRef}
                      style={{ display: "none" }}
                      onChange={handleFileChange}
                      accept=".pdf,.doc,.docx"
                    />
                    <PiUploadSimpleBold className="text-white" size={30} />
                    <span className="text-white">UPLOAD A DOCUMENTS</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col lg:pl-20">
                <h2 className="pb-4 text-2xl lg:pl-10">
                  <b>Brand</b> logo
                </h2>

                <div className="flex flex-row pl-10 mb-4 pb-4 gap-5">
                  <div
                    className="w-44 h-36 bg-zinc-400 flex items-center justify-center flex-col rounded-md cursor-pointer"
                    onClick={handleUploadClick}
                  >
                    <input
                      type="file"
                      ref={fileInputRef}
                      style={{ display: "none" }}
                      onChange={handleFileChange}
                    />
                    <PiUploadSimpleBold className="text-white" size={30} />
                    <span className="text-white">UPLOAD A PHOTO</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col lg:pl-20">
                <h2 className="pb-4 text-2xl lg:pl-10">
                  <b>Operating</b> Liccense{" "}
                </h2>

                <div className="flex flex-row pl-10 mb-4 pb-4 gap-5">
                  <div
                    className="w-44 h-36 bg-zinc-400 flex items-center justify-center flex-col rounded-md cursor-pointer"
                    onClick={handleUploadClick}
                  >
                    <input
                      type="file"
                      ref={fileInputRef}
                      style={{ display: "none" }}
                      onChange={handleFileChange}
                    />
                    <PiUploadSimpleBold className="text-white" size={30} />
                    <span className="text-white">UPLOAD LICENSE</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flow-row items-center justify-between">
              <div className="flex items-center gap-2 lg:pl-10 mb-8 mt-4">
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

export default UnderConstructionPage;
