import React from "react";
import { FaPhone, FaMapMarkedAlt, FaEnvelope, FaGlobe } from "react-icons/fa";

function DealerDetailAddress() {
  return (
    <fieldset className="flex flex-col w-full space-x-5 space-y-3 bg-[#F2F2F2] rounded-sm">
      <div className="pt-2 px-5 text-[1.6rem]">
        <strong>About </strong> us
      </div>
      <div className="text-xs pr-6">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          dictum, nisi id vulputate ullamcorper, tellus libero venenatis neque,
          in egestas enim lorem ut felis. Suspendisse potenti. Donec nec sapien
          mauris, vitae aliquam quam. Donec aliquam tortor felis. Sed acsapien
        </p>
      </div>
      <div className="flex flex-col w-full px-1">
        <div className="py-4 text-[1.6rem]">
          <strong>Contact </strong> details
        </div>
        <div className="text-sm space-y-2">
          <div className="flex flex-row space-x-3">
            <FaPhone className="bg-[#F89120] text-white rounded-sm w-8 h-8 p-1 self-center" />
            <div className="text-xs">
              <p>0556 318 804</p>
              <p>0556 318 804</p>
            </div>
          </div>
          <div className="flex flex-row space-x-3">
            <FaMapMarkedAlt className="bg-[#F89120] text-white rounded-sm w-8 h-8 p-1 self-center" />
            <p className="text-xs self-center">Spintex, Accra- Ghana</p>
          </div>
          <div className="flex flex-row space-x-3">
            <FaEnvelope className="bg-[#F89120] text-white rounded-sm w-8 h-8 p-1 self-center" />
            <p className="text-xs self-center">office@automarket.com </p>
          </div>
          <div className="flex flex-row space-x-3">
            <FaGlobe className="bg-[#F89120] text-white rounded-sm w-8 h-8 p-1 self-center" />
            <a className="text-xs self-center">http://www.automarket.com</a>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full px-1 pb-10">
        <div className="py-4 text-[1.6rem]">
          <strong>Schedule </strong>
        </div>
        <div className="text-sm space-y-2 w-3/4">
          <div>
            <div className="flex flex-row justify-between py-2">
              <p>Monday </p>
              <p>09:00-18:00</p>
            </div>
            <hr />
            <div className="flex flex-row justify-between py-2">
              <p>Tuesday </p>
              <p>09:00-18:00</p>
            </div>
            <hr />
            <div className="flex flex-row justify-between py-2">
              <p>Wednesday </p>
              <p>09:00-18:00</p>
            </div>
            <hr />
            <div className="flex flex-row justify-between py-2">
              <p>Thursday </p>
              <p>09:00-18:00</p>
            </div>
            <hr />
            <div className="flex flex-row justify-between py-2">
              <p>Friday </p>
              <p>09:00-18:00</p>
            </div>
            <hr />
            <div className="flex flex-row justify-between py-2">
              <p>Saturday </p>
              <p>10:00-18:00</p>
            </div>
            <hr />
            <div className="flex flex-row justify-between py-2">
              <p>Sunday </p>
              <p>closed</p>
            </div>
            <hr />
          </div>
        </div>
      </div>
    </fieldset>
  );
}

export default DealerDetailAddress;
