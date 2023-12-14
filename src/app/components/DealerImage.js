import React from "react";

function DealerImage() {
  return (
    <div className='flex items-center justify-center rounded-sm flex-col pl-10'>
      <div className='relative flex  flex-row self-start top-[10%] z-10'>
        <div className=' w-[130px] h-10 bg-[#F88220] pl-2 pt-1 font-semibold text-white text-2xl'>
          Best offer
        </div>
      </div>
      <a className='w-full mt-[-40px]' href='/product/car/2'>
        <div className='w-full'>
          <img
            className='w-full h-full group-hover:opacity-50 rounded-t-sm'
            src='/images/best_offer.jpg'
          />
        </div>
      </a>

      <div className='w-full flex flex-row  py-4 bg-[#414141] text-white justify-between px-3 rounded-b-sm h-[3rem] '>
        <p className='text-sm'>Mercedes-Benz 1</p>
        <p className='text-[#F88220] text-sm'>54980 Euro</p>
      </div>
    </div>
  );
}

export default DealerImage;
