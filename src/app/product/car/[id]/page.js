"use client";
import React, { useState } from "react";
import { GiRotaryPhone } from "react-icons/gi";
import { ImLocation2 } from "react-icons/im";
import ImageHoverText from "@/app/components/ImageHoverText";
import LoanCalculator from "@/app/components/LoanCalculator";
import NavigatorCommon from "@/app/components/NavigatorCommon";
import Link from "next/link";

function CarDetailPage() {
  const [leftActiveButtonIndex, setLeftActiveButtonIndex] = useState(0);
  const [rightActiveButtonIndex, setRightActiveButtonIndex] = useState(0);
  const breadcrumbs = [
    { text: "Home", link: "/" },
    { text: "Add an offer", link: "/" },
  ];

  const leftButtons = [
    {
      text: "Vehicle Description",
      active: true,
      onClick: () => {
        setLeftActiveButtonIndex(0);
      },
    },
    {
      text: "Vehicle Location",
      active: false,
      onClick: () => {
        setLeftActiveButtonIndex(1);
      },
    },
  ];
  const rightButtons = [
    {
      text: "click to share",
      active: true,
      onClick: () => {
        setRightActiveButtonIndex(0);
      },
    },
    {
      text: "Purchase Vehicle",
      active: false,
      onClick: () => {
        setRightActiveButtonIndex(1);
      },
    },
  ];
  const carDetails = [
    {
      label: "Model:",
      value: "Mercedes-Benz CLS 320 Coupe",
    },
    {
      label: "Fabrication:",
      value: "2010",
    },
    {
      label: "Fuel:",
      value: "Diesel",
    },
    {
      label: "Engine:",
      value: "3200 cm³ (373 kW / 507 CP)",
    },
    {
      label: "Transmision:",
      value: "Automatic",
    },
    {
      label: "Color:",
      value: "Black",
    },
    {
      label: "Doors:",
      value: "4/5",
    },
    {
      label: "CO2 Emissions combined:",
      value: "ca 423 g/km",
    },
  ];
  return (
    <div>
      <div className='bg-[#F7F3F7]'>
        <div className='max-w-[85rem] mx-auto px-2 lg:px-14 pb-4 pt-4'>
          {/* page one */}
          <NavigatorCommon
            title='Sell your vehicle'
            breadcrumbs={breadcrumbs}
            leftButtons={leftButtons}
            leftActiveButtonIndex={leftActiveButtonIndex}
            rightButtons={rightButtons}
            rightActiveButtonIndex={rightActiveButtonIndex}
          />
        </div>
      </div>
      <div className='bg-white'>
        <section className='max-w-[85rem] mx-auto px-2 lg:px-14 pb-4 pt-4'>
          <div className='grid md:grid-cols-3 gap-4 md:gap-4 xl:gap-4 '>
            <div className='sm:col-span-2 col-span-1'>
              <img
                src='/images/mercedes_picture.jpg'
                alt='mercedes'
                className=' w-full h-82 pt-4 mb-2'
              />
              <div className='flex flex-row px-8 gap-4 justify-center'>
                <img
                  src='/images/mercedes_picture.jpg'
                  alt='mercedes'
                  className='w-24 h-24 py-4 rounded-md'
                />
                <img
                  src='/images/mercedes_picture.jpg'
                  alt='mercedes'
                  className='w-24 h-24 py-4 rounded-md'
                />
                <img
                  src='/images/mercedes_picture.jpg'
                  alt='mercedes'
                  className='w-24 h-24 py-4 rounded-md'
                />
                <img
                  src='/images/mercedes_picture.jpg'
                  alt='mercedes'
                  className='w-24 h-24 py-4 rounded-md  md:block hidden'
                />
                <img
                  src='/images/mercedes_picture.jpg'
                  alt='mercedes'
                  className='w-24 h-24 py-4 rounded-md md:block hidden'
                />
              </div>
            </div>

            <div className='relative mx-[3%]'>
              <div className='flex flex-col'>
                <div className='flex flex-row mb-4 mt-2 '>
                  <h1 className='text-[#F88220] font-bold text-xl'>
                    54.980 GHS
                  </h1>
                  <small className='mt-1'>*Price Negotiable</small>
                </div>
                <div className='w-full border '>
                  <div className='text-md flex flex-col'>
                    <div>
                      {carDetails.map((detail, index) => (
                        <div
                          key={index}
                          className={index % 2 === 0 ? "bg-gray-200" : ""}
                        >
                          <div className='flex flex-row w-full justify-between '>
                            <div className='self-center p-2'>
                              {detail.label}
                            </div>
                            <div className=' py-3 px-2 font-semibold self-end'>
                              {detail.value}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className='flex flex-row w-full justify-between px-1 pt-4 '>
                  <small className='font-bold text-md'>
                    You want to sell a similar car?
                  </small>
                  <Link
                    href='/product/part/formpage'
                    className='text-[#F88220] font-bold flex-none text-md'
                  >
                    +Add offer
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className=' max-w-[85rem] mx-auto px-2 lg:px-14 pb-4 pt-4'>
          <div className='grid md:grid-cols-3 gap-4 md:gap-4 xl:gap-4 '>
            <div className='sm:col-span-2 col-span-1'>
              <div className='border-b-2 pb-4'>
                <h1 className='text-xl'>
                  <b>Vehicle</b> information
                </h1>
                <div className='flex mt-4 flex-col'>
                  <span className='font-bold'>Features:</span>
                  <p>
                    alloy wheels, xenon headlights, fog lights, tinted glass
                  </p>
                </div>
                <div className='flex mt-4 flex-col'>
                  <span className='font-bold'>Other parameters:</span>
                  <p>service book</p>
                </div>
                <div className='flex mt-4 flex-col'>
                  <span className='font-bold'>Safety:</span>
                  <p>
                    ABS, traction control, alarm, airbags, immobilizer,
                    anti-theft, ESP, EDS, protection framework
                  </p>
                </div>
                <div className='flex mt-4 flex-col'>
                  <span className='font-bold'>Comfort:</span>
                  <p>
                    electric windows, electric mirrors, air conditioning,
                    leather upholstery, navigation system, central locking,
                    radio / CD, power steering, onboard computer, cruise
                    control, heated seats, rain sensor, steering wheel controls,
                    parking sensors
                  </p>
                </div>
              </div>
              <div className='border-b-2 pb-4 mt-4'>
                <h1 className='text-xl pb-8'>
                  <b>More</b> information
                </h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean aliquet fringilla metus, a ultricies ligula consequat
                  at. Maecenas eget massa at eros ornare rhoncus. In sit amet
                  enim risus, in mattis felis. Donec lorem arcu, tempor quis
                  fermentum et, viverra in turpis. Nam non nunc vitae justo
                  tincidunt lobortis eu sit amet dui. Nam ut dui aliquet nisl
                  fermentum mollis sit amet eget lectus. Vivamus iaculis massa
                  sit amet velit convallis aliquam. Vestibulum dolor erat,
                  congue nec viverra eget, aliquet sit amet nunc. Donec vitae
                  arcu orci.
                </p>
              </div>
            </div>
            <div className='col-span-1 place-self-center sm:place-self-end'>
              <div className='flex flex-col w-[16rem]'>
                <LoanCalculator />
              </div>
            </div>
          </div>
        </section>
        <section className='max-w-[85rem] mx-auto px-2 lg:px-14 pb-2 pt-4'>
          <div className='mt-2 flex-col flex mb-12 border-b-2 pb-1'>
            <div className='flex flex-col'>
              <h1 className='text-xl pb-2'>
                <b>Contact</b> details
              </h1>
              <p className='flex mb-4 text-gray-500'>
                AutoMarket does not store additional information about the
                seller except for those contained in the announcement.
              </p>
            </div>
            <div className='flex flex-row sm:w-[65%] w-full space-x-10 justify-between pb-4 text-sm'>
              <div className='flex flex-col space-y-8  justify-between'>
                <div className='flex flex-row items-center gap-4'>
                  <div className='flex bg-[#F88220] w-10 h-10 rounded-md items-center justify-center '>
                    <GiRotaryPhone className='text-white' size={30} />
                  </div>
                  <span className='ml-2'>+40 722 222 222</span>
                </div>
                <div className='flex flex-row items-center gap-4'>
                  <div className='flex bg-[#F88220] w-10 h-10 rounded-md items-center justify-center '>
                    <GiRotaryPhone className='text-white' size={30} />
                  </div>
                  <span className='ml-2'>Spintex, Accra- Ghana </span>
                </div>
              </div>
              <div className='flex flex-col space-y-8  justify-between'>
                <div className='flex flex-row items-center gap-4'>
                  <div className='flex bg-[#F88220] w-10 h-10 rounded-md items-center justify-center '>
                    <GiRotaryPhone className='text-white' size={30} />
                  </div>
                  <span className='ml-2'>+40 722 222 222</span>
                </div>
                <div className='flex flex-row items-center gap-4'>
                  <div className='flex bg-[#F88220] w-10 h-10 rounded-md items-center justify-center '>
                    <GiRotaryPhone className='text-white' size={30} />
                  </div>
                  <span className='ml-2'>
                    Berlin, Germany, nr. 250330, main street
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='max-w-[85rem] mx-auto px-2 lg:px-14 pb-6'>
          <div>
            <h1 className='text-xl mb-4'>
              <b>Similar</b> offers
            </h1>{" "}
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-stretch gap-6 sm:mx-0 mx-2'>
            <ImageHoverText />

            <ImageHoverText />

            <ImageHoverText />

            <ImageHoverText />
          </div>
        </section>
      </div>
    </div>
  );
}

export default CarDetailPage;
