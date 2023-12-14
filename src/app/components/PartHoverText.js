import React from "react";

function PartHoverText() {
  return (
    <div className="flex items-center justify-center mt-2 rounded-md flex-col">
      <a className="relative block group w-full" href="/product/part/2">
        <div className="w-24">
          <img
            className="absolute inset-0 object-cover w-full h-full group-hover:opacity-50 rounded-t-md"
            src="/images/sparepart.jpg"
          />
        </div>
        <div className="relative h-auto">
          <div className="">
            {/* Hidden content */}
            <div
              className="transition-all transform
              opacity-0
              group-hover:opacity-100
              group-hover:translate-y-0
              bg-black bg-opacity-70
               rounded-t-md
              "
            >
              <div className="flex flex-col w-full text-xs h-auto py-4 px-2 text-[#B7B8B8] space-y-2">
                <p className=" ">Brake</p>
                <p className=" ">Hose</p>
                <p className=" ">Body Coupe</p>
                <p className="">silver</p>
              </div>
            </div>
          </div>
        </div>
      </a>
      <div className="w-full flex flex-row p-2 bg-[#414141] text-white justify-between px-3 rounded-b-md ">
        <p className="text-xs">Brakes</p>
        <p className="text-[#F88220] text-xs">549 GHS</p>
      </div>
    </div>
  );
}

export default PartHoverText;
