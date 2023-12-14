import React from "react";
import Carousel from "./Carousel";

import { BiSolidCaretDownSquare, BiSolidCaretUpSquare } from "react-icons/bi";
import ImageHoverText from "./ImageHoverText";

function HeroPage() {
  return (
    <div className='max-w-[85rem] mx-auto px-4 sm:px-2 lg:px-16 pb-4'>
      {/* <!-- Grid --> */}
      <div className='grid md:grid-cols-3 gap-4 md:gap-2 xl:gap-16 md:items-center'>
        <div className='col-span-2'>
          <div>
            <h3 className='text-2xl pt-6 pb-2 '>
              <strong>Best </strong>Offer
            </h3>
          </div>
          <div className='flex fle-col pr-3'>
            <Carousel />
          </div>
        </div>
        {/* <!-- End Col --> */}

        <div className='relative ml-2 '>
          <div className='flex flex-row justify-between'>
            <h3 className='text-2xl pb-2 sm:mt-[1.5rem] '>
              <strong>Latest</strong> offers
            </h3>
            <div className='flex flex-row pb-2 sm:mt-[1.5rem]'>
              <BiSolidCaretDownSquare className='text-3xl text-[#CACACA] hover:text-[#F88220]' />
              <BiSolidCaretUpSquare className='text-3xl text-[#CACACA] hover:text-[#F88220]' />
            </div>
          </div>
          <div>
            <ul className='flex sm:flex-row md:flex-col md:space-x-0 space-x-4 items-center sm:items-stretch'>
              {[...Array(3)].map((_, i) => (
                <li key={i} className='md:w-auto '>
                  <ImageHoverText />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroPage;
