import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FaFacebook, FaTwitter, FaGoogle } from "react-icons/fa6";
function Footer() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer>
      <div className='bg-[#F2F2F2]'>
        <div className='max-w-[85rem] py-10 px-4 sm:px-6 lg:px-10 lg:pt-20 mx-auto'>
          <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4'>
            <div className='col-span-1'>
              <Link href='/dealer'>
                <div className='mb-6 text-xl'>
                  <strong>About</strong> us
                </div>
              </Link>
              <ul className='text-xs space-y-2'>
                <li>
                  <Link href='/' className='hover:text-[#F88220]'>
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href='/' className='hover:text-[#F88220]'>
                    Our Partners
                  </Link>
                </li>
                <li>
                  <Link href='/' className='hover:text-[#F88220]'>
                    Advertising Online
                  </Link>
                </li>
                <li>
                  <Link href='/' className='hover:text-[#F88220]'>
                    Site Map
                  </Link>
                </li>
              </ul>
            </div>

            <div className='col-span-1'>
              <div className='grid'>
                <Link href='/'>
                  <div className='mb-6 text-xl'>
                    <strong>Need</strong> Help?
                  </div>
                </Link>
                <ul className='text-xs space-y-2'>
                  <li>
                    <Link href='/' className='hover:text-[#F88220]'>
                      How do i add an offer?
                    </Link>
                  </li>
                  <li>
                    <Link href='/' className='hover:text-[#F88220]'>
                      How do I find a vehicle
                    </Link>
                  </li>
                  <li>
                    <Link href='/' className='hover:text-[#F88220]'>
                      Price list
                    </Link>
                  </li>
                  <li>
                    <Link href='/' className='hover:text-[#F88220]'>
                      Office for car dealers
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className='col-span-1'>
              <Link href='/'>
                <div className='mb-6 text-xl'>
                  <strong>User </strong>area
                </div>
              </Link>
              <ul className='text-xs space-y-2'>
                <li>
                  <Link href='' className='hover:text-[#F88220]'>
                    Add an offer
                  </Link>
                </li>
                <li>
                  <Link href='' className='hover:text-[#F88220]'>
                    Register dealer
                  </Link>
                </li>
                <li>
                  <Link href='' className='hover:text-[#F88220]'>
                    Login Dealer
                  </Link>
                </li>
                <li>
                  <Link href='' className='hover:text-[#F88220]'>
                    News
                  </Link>
                </li>
              </ul>
            </div>

            <div className='col-span-1'>
              <h3 className='mb-6 text-xl'>
                <strong>Find</strong> us Here
              </h3>

              <form>
                <ul className='flex flex-row space-x-6'>
                  <li className='bg-white w-12 h-12 flex flex-row items-center justify-center shadow-md rounded-md'>
                    <Link href='/'>
                      <FaFacebook className='text-4xl  text-[#6D6E71] hover:text-[#F88220]' />
                    </Link>
                  </li>
                  <li className='bg-white w-12 h-12 flex flex-row items-center justify-center shadow-md rounded-md'>
                    <Link href=''>
                      <FaTwitter className='text-4xl  text-[#6D6E71] hover:text-[#F88220]' />
                    </Link>
                  </li>
                  <li className='bg-white w-12 h-12 flex flex-row items-center justify-center shadow-md rounded-md'>
                    <Link href=''>
                      <FaGoogle className='text-4xl  text-[#6D6E71] hover:text-[#F88220]' />
                    </Link>
                  </li>
                </ul>
                <p className='mt-3 text-sm text-gray-400'>
                  Become our fan, and we will love you forever
                </p>
              </form>
            </div>
          </div>
        </div>

        <div className='bg-[#414141] text-[#BCBCA0]'>
          <div className='max-w-[85rem] px-4 sm:px-6 lg:px-10  mx-auto '>
            <div className='sm:mt-12 grid gap-y-2 sm:gap-y-4 py-4 sm:flex sm:justify-between sm:space-x-6  sm:items-center  text-[#BCBCA0]'>
              <div className=''>
                <p>&copy; {currentYear} Automarket. All Rights Reserved</p>{" "}
              </div>
              <div className='flex flex-row justify-start'>
                <Link href=''>Web design by Automarket</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
