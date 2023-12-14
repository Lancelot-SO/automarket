"use client";

import React, { useRef } from "react";
import { IoMdArrowDropright } from "react-icons/io";
import { PiUploadSimpleBold } from "react-icons/pi";

function AddOfferPage() {
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
      <div className="flex flex-col bg-pink-50 w-full h-36 border-b-2">
        <div className="flex px-4 lg:px-20 flex-col pt-4">
          <h1 className="text-xl lg:text-2xl font-bold">Sell your vehicle</h1>
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
      <div className="bg-gray-100 hidden px-8 h-50 mr-44  ml-20 py-4 pr-12 my-6 lg:flex flex-col">
        <h2 className="text-2xl mb-4">
          Sell ​​your car on <b>AutoMarket</b> and benefit from more than 1
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
      <div className="flex lg:px-20 flex-col">
        <h2 className="pb-4 text-2xl">
          <b>Vehicle</b> data
        </h2>
        <form className="flex flex-col">
          <div className=" border-b-2 pb-2 mb-4">
            <div className="flex flex-col lg:flex-row pb-2 pl-10 gap-8">
              <div className="flex flex-col">
                <label htmlFor="manufacturer" className="text-xs">
                  Manufacturer:<small className="text-red-500 text-lg">*</small>
                </label>
                <select
                  id="manufacturer"
                  name="manufacturer"
                  className="block w-60 mt-1 p-1 border border-gray-200 rounded-md"
                >
                  <option value="select">select</option>
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
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
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </select>
              </div>

              <div className="flex flex-col">
                <label htmlFor="fabrication" className="text-xs">
                  Fabrication:<small className="text-red-500 text-lg">*</small>
                </label>
                <select
                  id="fabrication"
                  name="fabrication"
                  className="block w-60 mt-1 p-1 border border-gray-200 rounded-md"
                >
                  <option value="select">select</option>
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </select>
              </div>

              <div className="flex flex-col">
                <label htmlFor="body" className="text-xs">
                  Body Type:<small className="text-red-500 text-lg">*</small>
                </label>
                <select
                  id="body"
                  name="body"
                  className="block w-60 mb-4 lg:mb-0 mt-1 p-1 border border-gray-200 rounded-md"
                >
                  <option value="select">select</option>
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </select>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row pb-2 pl-10 gap-8">
              <div className="flex flex-col">
                <label htmlFor="fuel" className="text-xs">
                  Fuel Type:<small className="text-red-500 text-lg">*</small>
                </label>
                <select
                  id="fuel"
                  name="fuel"
                  className="block w-60 mt-1 p-1 border border-gray-200 rounded-md"
                >
                  <option value="select">select</option>
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </select>
              </div>

              <div className="flex flex-col">
                <label htmlFor="transmission" className="text-xs">
                  Transmission:<small className="text-red-500 text-lg">*</small>
                </label>
                <select
                  id="transmission"
                  name="transmission"
                  className="block w-60 mt-1 p-1 border border-gray-200 rounded-md"
                >
                  <option value="select">select</option>
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </select>
              </div>

              <div className="flex flex-col">
                <label htmlFor="doors" className="text-xs">
                  Doors:<small className="text-red-500 text-lg">*</small>
                </label>
                <select
                  id="doors"
                  name="doors"
                  className="block w-60 mt-1 p-1 border border-gray-200 rounded-md"
                >
                  <option value="select">select</option>
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </select>
              </div>

              <div className="flex flex-col">
                <label htmlFor="Cilindrics" className="text-xs">
                  Cilindrics(in cm³):
                  <small className="text-red-500 text-lg">*</small>
                </label>
                <select
                  id="Cilindrics"
                  name="Cilindrics"
                  className="block w-60 mb-4 lg:mb-0 mt-1 p-1 border border-gray-200 rounded-md"
                >
                  <option value="select">select</option>
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </select>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row pb-2 pl-10 gap-8">
              <div className="flex flex-col">
                <label htmlFor="hp" className="text-xs">
                  Hp / Kw:<small className="text-red-500 text-lg">*</small>
                </label>
                <select
                  id="hp"
                  name="hp"
                  className="block w-60 mt-1 p-1 border border-gray-200 rounded-md"
                >
                  <option value="select">select</option>
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </select>
              </div>

              <div className="flex flex-col">
                <label htmlFor="chassis" className="text-xs">
                  VIN / chassis number: *:
                  <small className="text-red-500 text-lg">*</small>
                </label>
                <input
                  id="chassis"
                  name="chassis"
                  className="block w-60 lg:w-96 mt-1 p-1 border border-gray-200 rounded-md"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="Color" className="text-xs">
                  Color:<small className="text-red-500 text-lg">*</small>
                </label>
                <select
                  id="Color"
                  name="Color"
                  className="block w-60  mt-1 p-1 border border-gray-200 rounded-md"
                >
                  <option value="select">select</option>
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </select>
              </div>
            </div>
          </div>

          <h2 className="pb-4 text-2xl">
            <b>Vehicle</b> equipment
          </h2>
          <div className="flex flex-row lg:flex-col border-b-2 mb-4">
            <div className="flex flex-col lg:flex-row gap-12">
              <div className="flex items-center gap-2 pl-6 lg:pl-10">
                <input
                  type="checkbox"
                  id="abs-checkbox"
                  className="ml-2 h-3 w-3 text-indigo-600"
                />
                <label htmlFor="abs-checkbox" className="text-gray-700">
                  ABS
                </label>
              </div>
              <div className="flex items-center gap-2 pl-6 lg:pl-10">
                <input
                  type="checkbox"
                  id="abs-checkbox"
                  className="ml-2 h-3 w-3 text-indigo-600"
                />
                <label htmlFor="eds-checkbox" className="text-gray-700">
                  EDS
                </label>
              </div>
              <div className="flex items-center gap-2 pl-6 lg:pl-10">
                <input
                  type="checkbox"
                  id="esp-checkbox"
                  className="ml-2 h-3 w-3 text-indigo-600"
                />
                <label htmlFor="abs-checkbox" className="text-gray-700">
                  ESP
                </label>
              </div>
              <div className="flex items-center gap-2 pl-6 lg:pl-10">
                <input
                  type="checkbox"
                  id="ac-checkbox"
                  className="ml-2 h-3 w-3 text-indigo-600"
                />
                <label htmlFor="abs-checkbox" className="text-gray-700">
                  Air Conditioning
                </label>
              </div>
              <div className="flex items-center gap-2 pl-6 lg:pl-10">
                <input
                  type="checkbox"
                  id="ac-checkbox"
                  className="ml-2 h-3 w-3 text-indigo-600"
                />
                <label htmlFor="abs-checkbox" className="text-gray-700">
                  Air Conditioning
                </label>
              </div>
              <div className="flex items-center gap-2 pl-6 lg:pl-10">
                <input
                  type="checkbox"
                  id="ac-checkbox"
                  className="ml-2 h-3 w-3 text-indigo-600"
                />
                <label htmlFor="abs-checkbox" className="text-gray-700">
                  Air Conditioning
                </label>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-8 lg:pb-4">
              <div className="flex items-center gap-2 pl-6 lg:pl-10">
                <input
                  type="checkbox"
                  id="panoramic-checkbox"
                  className="ml-2 h-3 w-3 text-indigo-600"
                />
                <label htmlFor="abs-checkbox" className="text-gray-700">
                  Panoramic roof
                </label>
              </div>
              <div className="flex items-center gap-2 pl-6 lg:pl-10">
                <input
                  type="checkbox"
                  id="abs-checkbox"
                  className="ml-2 h-3 w-3 text-indigo-600"
                />
                <label htmlFor="protection-checkbox" className="text-gray-700">
                  Protection framework
                </label>
              </div>
              <div className="flex items-center gap-2 pl-6 lg:pl-10">
                <input
                  type="checkbox"
                  id="esp-checkbox"
                  className="ml-2 h-3 w-3 text-indigo-600"
                />
                <label htmlFor="tow-checkbox" className="text-gray-700">
                  Tow
                </label>
              </div>
              <div className="flex items-center gap-2 pl-6 lg:pl-10">
                <input
                  type="checkbox"
                  id="ac-checkbox"
                  className="ml-2 h-3 w-3 text-indigo-600"
                />
                <label htmlFor="abtractions-checkbox" className="text-gray-700">
                  Traction control
                </label>
              </div>
              <div className="flex items-center gap-2 pl-6 lg:pl-10">
                <input
                  type="checkbox"
                  id="ac-checkbox"
                  className="ml-2 h-3 w-3 text-indigo-600"
                />
                <label htmlFor="board-checkbox" className="text-gray-700">
                  Board computer
                </label>
              </div>
              <div className="flex items-center gap-2 pl-6 lg:pl-10">
                <input
                  type="checkbox"
                  id="ac-checkbox"
                  className="ml-2 h-3 w-3 text-indigo-600"
                />
                <label htmlFor="steer-checkbox" className="text-gray-700">
                  Steering wheel controls
                </label>
              </div>
            </div>
          </div>

          <h2 className="pb-4 text-2xl">
            <b>Vehicle</b> description
          </h2>
          <div className="pl-6 lg:pl-10 flex flex-col border-b-2">
            <label htmlFor="technical" className="text-xs">
              Some text:
            </label>
            <textarea
              id="desc"
              name="desc"
              rows="8"
              cols="50"
              className="border-2 lg:mr-64 mb-6 w-60 lg:w-96"
            ></textarea>
          </div>
          <h2 className="pb-4 text-2xl">
            <b>Vehicle</b> Registration
          </h2>
          <div className="flex flex-col lg:flex-row gap-8 pl-6 lg:pl-10 border-b-2 mb-4 pb-4">
            <div className="flex flex-col">
              <label htmlFor="origin" className="text-xs">
                Country of Origin:
                <small className="text-red-500 text-lg">*</small>
              </label>
              <select
                id="origin"
                name="origin"
                className="block w-60 mt-1 p-1 border border-gray-200 rounded-md"
              >
                <option value="select">select</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
            </div>

            <div className="flex flex-col">
              <label htmlFor="registration" className="text-xs">
                Country of registration:
                <small className="text-red-500 text-lg">*</small>
              </label>
              <select
                id="registration"
                name="registration"
                className="block w-60 mt-1 p-1 border border-gray-200 rounded-md"
              >
                <option value="select">select</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
            </div>

            <div className="flex flex-col">
              <label htmlFor="firstRegistration" className="text-xs">
                Date of first registration:
                <small className="text-red-500 text-lg">*</small>
              </label>
              <select
                id="firstRegistration"
                name="firstRegistration"
                className="block w-60 mt-1 p-1 border border-gray-200 rounded-md"
              >
                <option value="select">Month</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
            </div>

            <div className="flex flex-col">
              <label htmlFor="firstRegistration" className="text-xs">
                Date of first registration:
                <small className="text-red-500 text-lg">*</small>
              </label>
              <select
                id="fabrication"
                name="fabrication"
                className="block w-60 mt-1 p-1 border border-gray-200 rounded-md"
              >
                <option value="select">Year</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
            </div>
          </div>

          <h2 className="pb-4 text-2xl">
            <b>Vehicle</b> condition
          </h2>
          <div className="flex flex-col lg:flex-row gap-8 pl-6 lg:pl-10 border-b-2 mb-4 pb-4">
            <div className="flex flex-col">
              <label htmlFor="technical" className="text-xs">
                Technical condition:
                <small className="text-red-500 text-lg">*</small>
              </label>
              <select
                id="technical"
                name="technical"
                className="block w-60 mt-1 p-1 border border-gray-200 rounded-md"
              >
                <option value="select">select</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
            </div>

            <div className="flex flex-col">
              <label htmlFor="kilometers" className="text-xs">
                Kilometers:
                <small className="text-red-500 text-lg">*</small>
              </label>
              <input
                id="kilometers"
                name="kilometers"
                className="block w-60 mt-1 p-1 border border-gray-200 rounded-md"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="eurotype" className="text-xs">
                Euro type:
                <small className="text-red-500 text-lg">*</small>
              </label>
              <select
                id="eurotype"
                name="eurotype"
                className="block w-60 mt-1 p-1 border border-gray-200 rounded-md"
              >
                <option value="select">Month</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
            </div>

            <div className="flex flex-col">
              <label htmlFor="emissions" className="text-xs">
                CO2 emissions:
                <small className="text-red-500 text-lg">*</small>
              </label>
              <input
                id="emissions"
                name="emissions"
                className="block w-60 mt-1 p-1 border border-gray-200 rounded-md"
              />
            </div>
          </div>

          <h2 className="pb-4 text-2xl">
            <b>Vehicle</b> price
          </h2>
          <div className="flex flex-col lg:flex-row gap-8 pl-6 lg:pl-10 border-b-2 mb-4 pb-4">
            <div className="flex flex-col">
              <label htmlFor="price" className="text-xs">
                Price:
                <small className="text-red-500 text-lg">*</small>
              </label>
              <input
                id="price"
                name="price"
                className="block w-60 mt-1 p-1 border border-gray-200 rounded-md"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="technical" className="text-xs">
                Currency:
                <small className="text-red-500 text-lg">*</small>
              </label>
              <select
                id="technical"
                name="technical"
                className="block w-60 mt-1 p-1 border border-gray-200 rounded-md"
              >
                <option value="select">Euro</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
            </div>
            <div className="flex items-center gap-2 mt-8">
              <input
                type="checkbox"
                id="abs-checkbox"
                className="ml-2 h-3 w-3 text-indigo-600"
              />
              <label htmlFor="priceNegotiable" className="text-gray-700">
                Price Negotiable
              </label>
            </div>
          </div>

          <h2 className="pb-4 text-2xl">
            <b>Vehicle</b> photos
          </h2>
          <div className="flex flex-col lg:flex-row pl-12 lg:pl-10 border-b-2 mb-4 pb-4 gap-5">
            <div
              className="w-40 h-36 bg-zinc-400 flex items-center justify-center flex-col rounded-md cursor-pointer"
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

            <div
              className="w-40 h-36 bg-zinc-400 flex items-center justify-center flex-col rounded-md cursor-pointer"
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

            <div className="lg:flex hidden lg:gap-5">
              <div
                className="w-40 h-36 bg-zinc-400 flex items-center justify-center flex-col rounded-md cursor-pointer"
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
              <div
                className="w-40 h-30 bg-zinc-400 flex items-center justify-center flex-col rounded-md cursor-pointer"
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

              <div
                className="w-40 h-36 bg-zinc-400 flex items-center justify-center flex-col rounded-md cursor-pointer"
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

              <div
                className="w-40 h-36 bg-zinc-400 flex items-center justify-center flex-col rounded-md cursor-pointer"
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

          <h2 className="pb-4 text-2xl">
            <b>Seller</b> details
          </h2>
          <div className=" border-b-2 pb-2 mb-4">
            <div className="flex flex-col lg:flex-row pb-2 pl-6 lg:pl-10 gap-8">
              <div className="flex flex-col">
                <label htmlFor="name" className="text-xs">
                  Name:<small className="text-red-500 text-lg">*</small>
                </label>
                <input
                  id="name"
                  name="name"
                  className="block w-60 mt-1 p-1 border border-gray-200 rounded-md"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="phone" className="text-xs">
                  Phone:<small className="text-red-500 text-lg">*</small>
                </label>
                <input
                  id="phone"
                  name="phone"
                  className="block w-60 mt-1 p-1 border border-gray-200 rounded-md"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="phone2" className="text-xs">
                  Phone 2:<small className="text-red-500 text-lg">*</small>
                </label>
                <input
                  id="phone2"
                  name="phone2"
                  className="block w-60 mt-1 p-1 border border-gray-200 rounded-md"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="city" className="text-xs">
                  City:<small className="text-red-500 text-lg">*</small>
                </label>
                <input
                  id="city"
                  name="city"
                  className="block w-60 mt-1 p-1 border border-gray-200 rounded-md"
                />
              </div>
            </div>
            <div className="flex flex-col lg:flex-row pb-2 pl-6 lg:pl-10 gap-8">
              <div className="flex flex-col">
                <label htmlFor="country" className="text-xs">
                  Country:<small className="text-red-500 text-lg">*</small>
                </label>
                <select
                  id="country"
                  name="country"
                  className="block w-60 mt-1 p-1 border border-gray-200 rounded-md"
                >
                  <option value="select">select</option>
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </select>
              </div>

              <div className="flex flex-col">
                <label htmlFor="state" className="text-xs">
                  State:<small className="text-red-500 text-lg">*</small>
                </label>
                <select
                  id="state"
                  name="state"
                  className="block w-60 mt-1 p-1 border border-gray-200 rounded-md"
                >
                  <option value="select">select</option>
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </select>
              </div>

              <div className="flex flex-col">
                <label htmlFor="email" className="text-xs">
                  Email:<small className="text-red-500 text-lg">*</small>
                </label>
                <input
                  id="email"
                  name="email"
                  className="block w-60 mt-1 p-1 border border-gray-200 rounded-md"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="password" className="text-xs">
                  Password:<small className="text-red-500 text-lg">*</small>
                </label>
                <input
                  id="password"
                  name="password"
                  className="block w-60 mt-1 p-1 border border-gray-200 rounded-md"
                />
              </div>
            </div>
          </div>
          <h2 className="pb-4 text-2xl">
            <b>Vehicle</b> Condition
          </h2>
          <div className="flex flex-row border-b-2 pb-2 mb-4">
            <div className="flex items-center gap-2 pl-6 lg:pl-10 mb-8 mt-4">
              <input
                type="radio"
                id="condition"
                className="ml-2 h-3 w-3 text-indigo-600"
              />
              <label htmlFor="condition" className="text-gray-700">
                Brand New
              </label>
            </div>
            <div className="flex items-center gap-2 pl-10 mb-8 mt-4">
              <input
                type="radio"
                id="condition"
                className="ml-2 h-3 w-3 text-indigo-600"
              />
              <label htmlFor="condition" className="text-gray-700">
                Used
              </label>
            </div>
          </div>

          <div className="flex flow-row items-center justify-between">
            <div className="flex items-center gap-2 pl-6 lg:pl-10 mb-8 mt-4">
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
              className="flex items-center mr-24 justify-center mb-8 w-28 h-10 font-bold mt-6  bg-[#F88220] text-white rounded-sm drop-shadow-md"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddOfferPage;
