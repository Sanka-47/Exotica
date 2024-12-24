import React from "react";
import BasicCard from "@/components/RevievCard";
import UnstyledInputIntroduction from "@/components/UnstyledInputIntroduction";
import UnstyledButtonsIntroduction from "@/components/UnstyledButtonsIntroduction";

function EndNavbar() {
  return (
    <div>
      <div className="bg-[#0d1521] h-[18rem] p-10 flex justify-between">
        <div className="w-[24rem]">
          <h1 className="text-[#f6ddce] text-xl m-2">Why EXOTICA</h1>
          <div className="grid grid-cols-2 grid-rows-2 gap-4 p-4">
            <h1 className="text-[#f6ddce] text-base">
              <span className="font-bold text-white">
                14000+
                <br />
              </span>
              Auction Completed
            </h1>
            <h1 className="text-[#f6ddce] text-base justify-self-end">
              <span className="font-bold text-white">
                $550M+
                <br />
              </span>
              Value of cars sold
            </h1>
            <h1 className="text-[#f6ddce] text-base">
              <span className="font-bold text-white">
                685k+
                <br />
              </span>
              Registered members
            </h1>
            <h1 className="text-[#f6ddce] text-base justify-self-end">
              <span className="font-bold text-white">
                83%+
                <br />
              </span>
              Sell-through rate
            </h1>
          </div>
        </div>
        <div className="w-[28rem]">
          <BasicCard />
        </div>
        <div className="w-[28rem]">
          <h1 className="text-[#f6ddce] text-xl mb-4">Get the daily Email</h1>
          <div className="mb-3">
            <UnstyledInputIntroduction />
          </div>
          <div>
            <UnstyledButtonsIntroduction />
          </div>
        </div>
      </div>
    </div>
  );
}

export default EndNavbar;
