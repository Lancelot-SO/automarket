import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
function ImageList() {
  return (
    <div className="flex  flex-col w-full">
      <div className="flex flex-row w-full py-6">
        <a href="/product/car/1" className="pr-4 self-center w-1/4">
          <img src="/images/sparepart.jpg" alt="" />
        </a>
        <div className="flex flex-col w-3/4 self-center space-y-4">
          <div className="flex flex-row justify-between">
            <a href="/product/car/1" className="text-xl hover:text-[#F98A22]">
              <strong>Brake/Hose</strong>
            </a>
            <p className="text-[#F98A22]">54980 GHS</p>
          </div>
          <div className="flex flex-row bg-[#F2F2F2] py-2 text-sm justify-between">
            <p>Brand New</p>
            <p>Brake</p>
            <p>230 HP</p>
            <p>Body Coupe</p>
            <p>Strong</p>
          </div>
          <div className="flex flex-row text-sm justify-between">
            <p>Location: Spintex, Ghana</p>
            <a href="">
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

export default ImageList;
