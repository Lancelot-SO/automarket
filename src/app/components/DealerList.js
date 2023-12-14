import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
function DealerList() {
  return (
    <div className="flex  flex-col w-full">
      <div className="flex flex-row w-full py-6">
        <a href="/dealer/1" className="pr-4 self-center w-1/4">
          <img src="/images/dealer_thumb.jpg" alt="" />
        </a>
        <div className="flex flex-col w-3/4 self-center space-y-4">
          <div className="flex flex-row justify-between">
            <a href="/dealer/1" className="text-xl hover:text-[#F98A22]">
              <strong>Emmanuel Doe</strong>
            </a>
            <p className="text-[#F98A22]">183 OFFERS</p>
          </div>
          <div className="flex flex-row bg-[#F2F2F2] py-2 text-sm justify-between">
            <p className="pl-2">Spintex, Accra- Ghana</p>
          </div>
          <div className="flex flex-row text-sm justify-between">
            <div className="flex flex-row space-x-2">
              <p className="flex flex-row items-center">View on map</p>
              <p className="flex flex-row items-center">
                <BsFillTelephoneFill />
                (233) 556 318 804
              </p>
            </div>
            <a href="/dealer/1">
              View Details{" "}
              <FaLongArrowAltRight className="inline-block w-4 h-4 pl-1 text-[#F88220]" />
            </a>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default DealerList;
