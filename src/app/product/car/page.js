"use client";
import ImageHoverText from "@/app/components/ImageHoverText";
import ImageList from "@/app/components/ImageList";
import LoanCalculator from "@/app/components/LoanCalculator";
import Navigator from "@/app/components/Navigator";
import SearchFilter from "@/app/components/SearchFilter";
import React, { useState } from "react";
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

function CarListPage() {
  const [listDisplay, setListDisplay] = useState(false);
  const [activeButtonIndex, setActiveButtonIndex] = useState(0);
  const breadcrumbs = [
    { text: "Home", link: "/" },
    { text: "Cars", link: "/cars" },
    { text: "Mercedes-Benz", link: "/mercedes" },
    { text: "Mercedes-Benz CLS 320" },
  ];
  const ListButtonTexts = ["Click to share", "Purchase Vehicle"];
  const buttons = [
    {
      text: "All Cars",
      active: true,
      onClick: () => {
        setActiveButtonIndex(0);
      },
    },
    {
      text: "New Cars",
      active: false,
      onClick: () => {
        setActiveButtonIndex(1);
      },
    },
    {
      text: "Used Cars",
      active: false,
      onClick: () => {
        setActiveButtonIndex(2);
      },
    },
  ];

  const imageLength = 12;
  return (
    <div>
      <div className='bg-[#F7F3F7] '>
        <div className='max-w-[85rem] mx-auto px-2 lg:px-14 pb-4 pt-4'>
          {/* page one */}
          <Navigator
            title='Mercedes-Benz CLS 320'
            breadcrumbs={breadcrumbs}
            buttons={buttons}
            listDisplay={listDisplay}
            setListDisplay={setListDisplay}
            activeButtonIndex={activeButtonIndex}
          />
        </div>
      </div>
      <div className='bg-white'>
        <section className='max-w-[85rem] mx-auto px-2 lg:px-14 pb-4 pt-4'>
          <div className='grid md:grid-cols-5 gap-4 md:gap-[8rem] xl:gap-4 sm:content-start'>
            <form
              action=''
              className='sm:col-span-2  md:col-span-1 flex md:flex-col flex-row space-x-1 md:space-x-0 space-y-0 md:space-y-3'
            >
              <div className='flex flex-col w-[11.5rem]  '>
                <SearchFilter />
              </div>

              <div className='flex flex-col w-[11.5rem]'>
                <LoanCalculator />
              </div>
            </form>

            <div className='col-span-4'>
              {/* layer one */}
              <div className='flex flex-row justify-between'>
                <div className='flex flex-row space-x-2 md:pl-8 pl-0'>
                  <div>
                    <select
                      name='sort_by'
                      id='sort_by '
                      className=' h-[2.5rem] border border-[#D6D6D6] rounded-xs px-2 py-1'
                    >
                      <option>Sort by</option>
                      <option>Date</option>
                      <option>Price</option>
                      <option>Views</option>
                    </select>
                  </div>

                  <div>
                    <select
                      name='sort_by'
                      id='sort_by'
                      className=' h-[2.5rem] border border-[#D6D6D6] rounded-xs px-2 py-1'
                    >
                      <option>view amount</option>
                      <option>10</option>
                      <option>20</option>
                      <option>30</option>
                    </select>
                  </div>
                </div>
                <div>
                  <div className='lg:flex hidden join space-x-2'>
                    <button className='join-item btn btn-active'>1</button>
                    <button className='join-item btn '>2</button>
                    <button className='join-item btn '>3</button>
                    <button className='join-item btn btn-disabled'>...</button>
                    <button className='join-item btn'>8</button>
                    <button className='join-item btn'>Next</button>
                  </div>
                </div>
              </div>
              <div className='pt-8 pb-2'>
                <hr className='w-full ' />
              </div>
              {/* layer two  */}
              <div className='sm:w-full   w-[90%]'>
                {listDisplay ? (
                  <div>{listRender(12)}</div>
                ) : (
                  <div className='grid px-4 lg:px-0 lg:grid-cols-3 md:grid-cols-2 md:gap-2 lg:gap-3 gap-2 '>
                    {
                      // imageLength

                      imageRender(imageLength)
                    }
                  </div>
                )}
              </div>
              <div className='pb-8 pt-2'>
                <hr className={`w-full  ${listDisplay ? "hidden" : "block"}`} />
              </div>
              {/* layer three */}

              <div className='join space-x-2 lg:self-end lg:mr-0 mr-16'>
                <button className='join-item btn btn-active '>1</button>
                <button className='join-item btn '>2</button>
                <button className='join-item btn '>3</button>
                <button className='join-item btn btn-disabled'>...</button>
                <button className='join-item btn'>8</button>
                <button className='join-item btn'>Next</button>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* page two */}
    </div>
  );
}

export default CarListPage;
