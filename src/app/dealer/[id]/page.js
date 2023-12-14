"use client";
import DealerDetailAddress from "@/app/components/DealerDetailAddress";
import DealerImage from "@/app/components/DealerImage";
import ImageList from "@/app/components/ImageList";
import SpareList from "@/app/components/SpareList";
import React from "react";

const listRender = (listLength) => {
  return Array.from({ length: listLength }).map((_, index) => (
    <ImageList key={index} />
  ));
};

const Renderlist = (listLength) => {
  return Array.from({ length: listLength }).map((_, index) => (
    <SpareList key={index} />
  ));
};

function DealerDetailPage() {
  return (
    <div className="w-full flex flex-col  pt-6 drop-shadow-md bg-[#F7F3F7] ">
      {/* page one */}
      <section className="w-full flex flex-col px-2 lg:pl-20 pr-[11rem]">
        <div className="flex w-full flex-col space-y-20">
          <div>
            <h2 className="text-2xl">
              <strong>Dealer</strong> name here
            </h2>
            <div className="text-sm breadcrumbs">
              <ul>
                <li>
                  <a>Home</a>
                </li>
                <li>
                  <a>Dealers</a>
                </li>

                <li>Dealer name</li>
              </ul>
            </div>
          </div>
          <div className="flex w-full flex-row justify-between ">
            <nav>
              <div className="space-x-2 ">
                <button className="btn bg-[#F37D1A] text-white btn-sm capitalize h-[2.5rem]">
                  Search vehicles from dealers
                </button>
              </div>
            </nav>
          </div>
        </div>
      </section>
      {/* page two */}
      <section className=" bg-white lg:pl-20 px-4 lg:pr-[11rem]">
        <div className="flex flex-col lg:flex-row py-8">
          <form action="" className="flex flex-col lg:w-1/4 space-y-8 ">
            <DealerDetailAddress />
          </form>

          <div className="flex flex-col  lg:w-3/4 lg:pl-4">
            {/* layer one */}
            <div className="flex felx-row mt-4 lg:mt-0 justify-between">
              <DealerImage />
            </div>
            <div className="flex flex-row justify-between  pl-10 pt-16">
              <p className="self-center">
                offers: <strong>24</strong>
              </p>
              <button className="bg-[#E3E3E3] p-2 rounded-md hover:bg-[#414141] hover:text-white">
                View all offers
              </button>
            </div>
            <div className="pt-8 pb-2">
              <hr className="w-full " />
            </div>
            {/* layer two  */}
            <div className="w-full">
              <div>{listRender(4)}</div>
              <div>{Renderlist(4)}</div>
            </div>
            <div className="pb-8 pt-2">
              <hr className="w-full hidden" />
            </div>
            {/* layer three */}

            <div className="join space-x-2 self-end">
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

export default DealerDetailPage;
