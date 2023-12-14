import Link from "next/link";
import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
function ImageList() {
  return (
    <div className='flex  flex-col sm:w-[100%] w-[95%] md:pl-10 pl-0'>
      <div className='flex flex-row w-full py-6'>
        <Link
          href='/product/car/1'
          className='pr-4 self-center w-1/4 sm:h-auto h-[4rem]'
        >
          <img
            src='/images/mercedes_thumb.jpg'
            alt=''
            className='sm:h-auto h-[5rem]'
          />
        </Link>
        <div className='flex flex-col w-3/4 self-center space-y-4'>
          <div className='flex flex-row justify-between'>
            <Link
              href='/product/car/1'
              className='text-md hover:text-[#F98A22]'
            >
              <strong>Mercedes-Benz CLS</strong>
            </Link>
            <p className='text-[#F98A22] text-md'>54980 GHS</p>
          </div>
          <div className='flex flex-row bg-[#F2F2F2] py-2 text-xs justify-between'>
            <p>Brand New</p>
            <p>3.0 Diesel</p>
            <p>230 HP</p>
            <p>Body Coupe</p>
            <p>120.000 KM</p>
          </div>
          <div className='flex flex-row text-xs justify-between'>
            <p>Location: Spintex, Ghana</p>
            <Link href=''>
              View Details{" "}
              <FaLongArrowAltRight className='inline-block w-4 h-4 pl-1 text-[#F88220]' />
            </Link>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default ImageList;
