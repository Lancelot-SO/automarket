"use client";
import ImageHoverText from "@/app/components/ImageHoverText";
import ImageList from "@/app/components/ImageList";
import LoanCalculator from "@/app/components/LoanCalculator";
import SearchFilter from "@/app/components/SearchFilter";
import React, { useState } from "react";
import { BsGrid3X2GapFill, BsList } from "react-icons/bs";
const imageRender = (imageLength) => {
  return Array.from({ length: imageLength }).map((_, index) => (
    <ImageHoverText key={index} />
  ));
};

const listRender = (listLength) => {
  return Array.from({ length: listLength }).map((_, index) => (
    <ImageList key={index} />
  ));
};

function ManufucturerPage() {
  const [listDisplay, setListDisplay] = useState(false);
  const imageLength = 12;
  return (
    <div className="w-full flex flex-col  pt-6 drop-shadow-md bg-[#F7F3F7] ">
      {/* page one */}
      <section className="w-full flex flex-row lg:flex-row lg:pl-20 pr-[11rem]">
        <div className="flex lg:w-full flex-col space-y-20 px-4 lg:px-0">
          <div>
            <h2 className="text-2xl">
              <strong>Mercedes-Benz</strong> CLS 320
            </h2>
            <div className="text-sm breadcrumbs">
              <ul>
                <li>
                  <a>Home</a>
                </li>
                <li>
                  <a>Cars</a>
                </li>
                <li>
                  <a href="">Mercedes-Benz</a>
                </li>
                <li className="hidden lg:flex">Mercedes-Benz CLS 320</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-row justify-between">
            <div className="flex mt-16 gap-4">
              <a
                href="/product/car"
                className="w-30 border p-2 btn text-white bg-[#F37D1A] btn-sm hover:bg-[#777777]"
              >
                All Cars
              </a>
              <a
                href="/product/part"
                className="w-30 border p-2 btn text-white bg-[#777777] btn-sm hover:bg-[#F37D1A]"
              >
                All Spareparts
              </a>
            </div>
            <div className="flex flex-row space-x-1 mr-4 lg:mr-0">
              <a
                href="/dealer"
                className="btn text-white bg-[#777777] btn-sm hover:bg-[#F37D1A] capitalize h-[2.5rem] mt-16"
              >
                My dealers
              </a>
              <button
                onClick={() => setListDisplay(!listDisplay)}
                className={`lg:block hidden h-10 lg:mt-16  ${
                  listDisplay ? "bg-[#F88220]" : "bg-[#D6D6D6]"
                } hover:bg-[#F37D1A] p-1 rounded-md`}
              >
                <BsList className="w-7 h-7 text-white" />
              </button>
              <button
                onClick={() => setListDisplay(!listDisplay)}
                className={`lg:block hidden h-10 lg:mt-16 ${
                  listDisplay ? "bg-[#D6D6D6]" : "bg-[#F88220]"
                } p-1 rounded-sm`}
              >
                <BsGrid3X2GapFill className="w-7 h-7 text-white" />
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* page two */}
      <section className=" bg-white lg:pl-20 lg:pr-[11rem]">
        <div className="flex flex-col lg:flex-row py-8">
          <form
            action=""
            className="flex flex-col w-70 lg:w-1/4 space-y-8 px-4 lg:px-0"
          >
            <SearchFilter />
            <LoanCalculator />
          </form>

          <div className="flex flex-col lg:pl-4 lg:w-3/4">
            {/* layer one */}
            <div className="flex flex-row justify-between">
              <div className="flex flex-row space-x-2 px-4 lg:px-0 mt-4 lg:mt-0">
                <div>
                  <select
                    name="sort_by"
                    id="sort_by "
                    className=" h-[2.5rem] border border-[#D6D6D6] rounded-xs px-2 py-1"
                  >
                    <option>Sort by</option>
                    <option>Date</option>
                    <option>Price</option>
                    <option>Views</option>
                  </select>
                </div>

                <div>
                  <select
                    name="sort_by"
                    id="sort_by"
                    className=" h-[2.5rem] border border-[#D6D6D6] rounded-xs px-2 py-1"
                  >
                    <option>view amount</option>
                    <option>10</option>
                    <option>20</option>
                    <option>30</option>
                  </select>
                </div>
              </div>
              <div>
                <div className="lg:flex hidden join space-x-2">
                  <button className="join-item btn btn-active">1</button>
                  <button className="join-item btn ">2</button>
                  <button className="join-item btn ">3</button>
                  <button className="join-item btn btn-disabled">...</button>
                  <button className="join-item btn">8</button>
                  <button className="join-item btn">Next</button>
                </div>
              </div>
            </div>
            <div className="pt-8 pb-2">
              <hr className="lg:w-full px-8 lg:px-0" />
            </div>
            {/* layer two  */}
            <div className="w-full">
              {listDisplay ? (
                <div>{listRender(12)}</div>
              ) : (
                <div className="grid px-4 lg:px-0 lg:grid-cols-3 lg:gap-3">
                  {
                    // imageLength

                    imageRender(imageLength)
                  }
                </div>
              )}
            </div>
            <div className="pb-8 pt-2">
              <hr className={`w-full  ${listDisplay ? "hidden" : "block"}`} />
            </div>
            {/* layer three */}

            <div className="join space-x-2 lg:self-end lg:mr-0 mr-16 px-8 lg:px-8">
              <button className="join-item btn btn-active ">1</button>
              <button className="join-item btn ">2</button>
              <button className="join-item btn ">3</button>
              <button className="join-item btn btn-disabled">...</button>
              <button className="join-item btn">8</button>
              <button className="join-item btn">Next</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ManufucturerPage;
