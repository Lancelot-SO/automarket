import Image from "next/image";
import { FaSearch, FaDollarSign, FaLongArrowAltRight } from "react-icons/fa";
import { BsFillCircleFill } from "react-icons/bs";
import HeroPage from "./components/HeroPage";
export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-cneter'>
      <div className='bg-[#F7F3F7]'>
        <HeroPage />
      </div>

      {/* section two */}
      <div className='max-w-[85rem] mx-auto  lg:px-10 pb-4 bg-white pt-4'>
        <section className='grid lg:grid-cols-2 gap-4 lg:gap-2 xl:gap-[15rem] md:items-center place-items-start'>
          <div className='space-x-4 bg-[#F2F2F2] rounded-md py-6 px-10 h-[6rem] sm:mx-0 mx-2'>
            <div className='flex flex-row space-x-4 h-[6rem]'>
              <a
                href=''
                className='block bg-[#F88220] p-2 rounded-md h-[3rem] '
              >
                <FaSearch className='w-7 h-7 text-white' />
              </a>
              <div>
                <h3 className='sm:text-md text-sm'>
                  <strong>Looking</strong> for a car ?
                </h3>
                <p className='text-xs'>
                  1.000 new offers every day. 35.000 offers on site
                </p>
              </div>
              <a
                className='px-4 py-2 bg-[#D6D6D6] font-bold uppercase rounded-md h-[3rem]'
                href=''
              >
                Search
              </a>
            </div>
          </div>
          <div className='relative space-x-4 bg-[#F2F2F2] rounded-md  py-6 px-10 h-[6rem] sm:mx-0 mx-2'>
            <div className='flex flex-row space-x-4 h-[6rem]'>
              <a className='block bg-[#F88220] p-2 rounded-md h-[3rem]' href=''>
                <FaDollarSign className='w-8 h-8 text-white' />
              </a>
              <div>
                <h3 className='sm:text-md text-sm'>
                  <strong>Want</strong> to sell a car?
                </h3>
                <p className='text-xs'>
                  200.000 visitors every day. Add your offer now!
                </p>
              </div>
              <a
                className='px-6 py-2 bg-[#D6D6D6] font-bold uppercase rounded-md h-[3rem]'
                href=''
              >
                sell+
              </a>
            </div>
          </div>
        </section>
      </div>
      {/* section three */}
      <div>
        <hr className='w-full' />
      </div>
      <div className='max-w-[85rem] mx-auto  lg:px-10 pb-4 bg-white pt-4 '>
        <section className='grid lg:grid-cols-3 gap-4 lg:gap-2 xl:gap-[1rem] md:items-center place-items-start'>
          <div className='space-x-2 py-2 sm:mx-0 mx-2 px-2 flex flex-col w-[95%] md:border-none border '>
            <h3 className='text-lg pb-2'>
              <strong>Popular</strong> Articles
            </h3>
            <ul className='flex flex-col space-y-2'>
              <li className='flex flex-row space-x-3'>
                <img src='/images/icon.gif' alt='icon' />
                <div>
                  <p className='text-sm font-bold'>
                    Here are many variations of passages of Lorem Ipsum..
                  </p>
                  <a className='text-xs hover:text-[#F88220]' href=''>
                    Read more
                    <FaLongArrowAltRight className='inline-block w-4 h-4 pl-1 text-[#F88220]' />
                  </a>
                </div>
              </li>
              <li className='flex flex-row space-x-3'>
                <img src='/images/icon.gif' alt='icon' />
                <div>
                  <p className='text-sm font-bold'>
                    Here are many variations of passages of Lorem Ipsum..
                  </p>
                  <a className='text-xs hover:text-[#F88220]' href=''>
                    Read more
                    <FaLongArrowAltRight className='inline-block w-4 h-4 pl-1 text-[#F88220]' />
                  </a>
                </div>
              </li>
            </ul>
          </div>
          <div className='space-x-2 py-2 sm:mx-0 mx-2 flex flex-col w-[95%] px-2 md:border-none border'>
            <div className='text-xl pb-2 flex flex-row space-x-16'>
              <h3>
                <strong>Car </strong>dealers
              </h3>
              <a className='text-sm hover:text-[#F88220] self-end mb-1' href=''>
                See all dealers
                <FaLongArrowAltRight className='inline-block w-4 h-4 pl-1 text-[#F88220]' />
              </a>
            </div>
            <ul className='space-y-2 bg-[#F4F4F4] divide divide-x-0'>
              <li className='flex flex-row space-x-24 p-1'>
                <a
                  href=''
                  className='text-sm font-semibold self-end hover:text-[#F88220]'
                >
                  <BsFillCircleFill className='inline-block w-4 h-4 pr-1 text-[#F88220] pb-1' />
                  Dealer name
                </a>
                <span className='text-sm'>162 offer</span>
              </li>
              <li className='flex flex-row space-x-24 bg-[#F9F9F9] p-1'>
                <a
                  href=''
                  className='text-sm font-semibold self-end hover:text-[#F88220]'
                >
                  <BsFillCircleFill className='inline-block w-4 h-4 pr-1 text-[#F88220] pb-1' />
                  Dealer name
                </a>
                <span className='text-sm'>162 offer</span>
              </li>
              <li className='flex flex-row space-x-24 p-1'>
                <a
                  href=''
                  className='text-sm font-semibold self-end hover:text-[#F88220]'
                >
                  <BsFillCircleFill className='inline-block w-4 h-4 pr-1 text-[#F88220] pb-1' />
                  Dealer name
                </a>
                <span className='text-sm'>162 offer</span>
              </li>
              <li className='flex flex-row space-x-24 bg-[#F9F9F9] p-1'>
                <a
                  href=''
                  className='text-sm font-semibold self-end hover:text-[#F88220]'
                >
                  <BsFillCircleFill className='inline-block w-4 h-4 pr-1 text-[#F88220] pb-1' />
                  Dealer name
                </a>
                <span className='text-sm'>162 offer</span>
              </li>
            </ul>
          </div>
          <div className='space-x-2 py-2 sm:mx-0 mx-2 px-2 flex flex-col w-[95%] md:border-none border'>
            <h3 className='text-xl pb-2'>
              <strong>Get</strong> daily offers
            </h3>
            <form action='post' className='pt-2 space-y-2'>
              <input
                type='email'
                name='email'
                placeholder='email address'
                className='block grow-[1]  focus:outline-none py-1.5 pl-7 border-0 mr-4 rounded-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-grey-400 w-3/4 '
              />
              <p className='text-xs w-3/4 text-justify text-grey'>
                Available, but have suffered alteration in some form injected
                humour, or randomised words which don't look even slightly
                believable.
              </p>
              <div className='flex flex-row space-x-16'>
                <input
                  type='submit'
                  value='Subscribe'
                  className='bg-[#F88220] p-2 uppercase text-white rounded-md text-sm'
                />
                <p className='text-xs self-center'>15,000+ other subscribers</p>
              </div>
            </form>
          </div>
        </section>
      </div>
    </main>
  );
}
