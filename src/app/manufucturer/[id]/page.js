"use client";
import ImageList from "@/app/components/ImageList";
import LoanCalculator from "@/app/components/LoanCalculator";
import ManufucturerList from "@/app/components/ManufucturerList";
import SearchFilter from "@/app/components/SearchFilter";
import React, { useState } from "react";
import { BsGrid3X2GapFill, BsList } from "react-icons/bs";
const imageRender = (imageLength) => {
  return Array.from({ length: imageLength }).map((_, index) => (
    <ManufucturerList key={index} />
  ));
};

const listRender = (listLength) => {
  return Array.from({ length: listLength }).map((_, index) => (
    <ImageList key={index} />
  ));
};

function CarListPage() {
  const [listDisplay, setListDisplay] = useState(false);
  const imageLength = 12;
  return (
    <div className="w-full flex flex-col  pt-6 drop-shadow-md bg-[#F7F3F7] ">
      {/* page one */}
      <section className="w-full flex flex-row lg:flex-col px-4 lg:pl-20 lg:pr-[11rem]">
        <div className="flex lg:w-full flex-col space-y-20">
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
                <li className="hidden lg:flex">Mercedes-Benz CLS</li>
              </ul>
            </div>
          </div>
          <div className="flex w-full flex-row justify-between ">
            <nav>
              <div className="space-x-2 ">
                <button className="btn bg-[#F37D1A] text-white btn-sm capitalize h-[2.5rem]">
                  All Cars
                </button>
                <button className="btn  text-white bg-[#777777] btn-sm hover:bg-[#F37D1A] capitalize h-[2.5rem]">
                  New Cars
                </button>
                <button className="btn text-white bg-[#777777] btn-sm hover:bg-[#F37D1A] capitalize h-[2.5rem]">
                  Used Cars
                </button>
              </div>
            </nav>
            <div className="hidden lg:flex flex-row space-x-1">
              <button
                onClick={() => setListDisplay(!listDisplay)}
                className={`block ${
                  listDisplay ? "bg-[#F88220]" : "bg-[#D6D6D6]"
                } hover:bg-[#F37D1A] p-1 rounded-md`}
              >
                <BsList className="w-7 h-7 text-white" />
              </button>
              <button
                onClick={() => setListDisplay(!listDisplay)}
                className={`block ${
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

          <div className="flex flex-col px-4 lg:w-3/4">
            {/* layer one */}
            <div className="flex flex-row justify-between">
              <div className="flex flex-row space-x-2 mt-2 lg:mt-0">
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
              <hr className="w-full " />
            </div>
            {/* layer two  */}
            <div className="w-full">
              {listDisplay ? (
                <div>{listRender(12)}</div>
              ) : (
                <div className="">
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

            <div className="join space-x-2 lg:self-end lg:mr-0 mr-16">
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

export default CarListPage;
