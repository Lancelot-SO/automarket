"use client";
import React, { useRef } from "react";

function Carousel() {
  const sliderRef = useRef(null);

  const leftClickHandler = () => {
    if (sliderRef.current) {
      sliderRef.current.style.scrollBehavior = "smooth";
      if (sliderRef.current.scrollLeft === 0) {
        sliderRef.current.scrollLeft =
          sliderRef.current.scrollWidth - sliderRef.current.offsetWidth;
      } else {
        sliderRef.current.scrollLeft -= sliderRef.current.offsetWidth;
      }
    }
  };

  const rightClickHandler = () => {
    if (sliderRef.current) {
      sliderRef.current.style.scrollBehavior = "smooth";
      if (
        sliderRef.current.scrollLeft >=
        sliderRef.current.scrollWidth - sliderRef.current.offsetWidth
      ) {
        sliderRef.current.scrollLeft = 0;
      } else {
        sliderRef.current.scrollLeft += sliderRef.current.offsetWidth;
      }
    }
  };
  return (
    <div
      className='carousel w-full rounded-md '
      style={{ overflowX: "scroll" }}
    >
      <div
        ref={sliderRef}
        className='carousel-container'
        style={{
          display: "flex",
          scrollSnapType: "x mandatory",
          overflowX: "hidden",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        <div
          id='slide1'
          className='carousel-item relative w-full flex flex-col justify-center '
          style={{ scrollSnapAlign: "start" }}
        >
          <img
            src='/images/mercedes_full.jpg'
            alt='mercedes'
            className='w-full rounded-md  sm:h-[40rem] h-[20rem]'
          />
          <div className='absolute flex justify-between transform -translate-y-1/2 left-1 right-1 top-1/2'>
            <button
              className='bg-white w-10 h-10 rounded-md hover:bg-[#F88220] transition duration-300 ease-in-out'
              onClick={leftClickHandler}
            >
              ❮
            </button>
            <button
              className='bg-white w-10 h-10 rounded-md hover:bg-[#F88220] transition duration-300 ease-in-out'
              onClick={rightClickHandler}
            >
              ❯
            </button>
          </div>
          <div className='relative mt-[-3rem]'>
            <div className='flex sm:flex-row flex-col justify-between bg-[#414141] text-2xl py-2 px-4'>
              <p className='text-white'>Mercedes-Benz CLS 630</p>
              <p className='text-[#F88220]'>54980 GHS</p>
            </div>
          </div>
        </div>
        <div
          id='slide2'
          className='carousel-item relative w-full flex flex-col justify-center'
          style={{ scrollSnapAlign: "start" }}
        >
          <img
            src='/images/mercedes_picture.jpg'
            alt='Burger'
            className='w-full rounded-md sm:h-[40rem] h-[20rem] '
          />
          <div className='absolute flex justify-between transform -translate-y-1/2 left-1 right-1 top-1/2'>
            <button
              className='bg-white w-10 h-10 rounded-md hover:bg-[#F88220] transition duration-300 ease-in-out '
              onClick={leftClickHandler}
            >
              ❮
            </button>
            <button
              className='bg-white w-10 h-10 rounded-md hover:bg-[#F88220] transition duration-300 ease-in-out'
              onClick={rightClickHandler}
            >
              ❯
            </button>
          </div>
          <div className='relative mt-[-3rem]'>
            <div className='flex sm:flex-row flex-col justify-between bg-[#414141] text-2xl py-2 px-4'>
              <p className='text-white'>Mercedes-Benz CLS 630</p>
              <p className='text-[#F88220]'>54980 Euro</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
