import React from "react";
import BasicCard from "@/components/RevievCard";
import UnstyledInputIntroduction from "@/components/UnstyledInputIntroduction";
import UnstyledButtonsIntroduction from "@/components/UnstyledButtonsIntroduction";

function EndNavbar() {
  return (
    <div className="bg-[#0d1521] min-h-[18rem]">
      <div className="container mx-auto px-4 py-8 sm:py-10">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-4 lg:justify-between">
          {/* Why EXOTICA Section */}
          <div className="w-full lg:w-1/3">
            <h1 className="text-[#f6ddce] text-xl mb-4 sm:mb-6">Why EXOTICA</h1>
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              <div className="text-[#f6ddce] text-sm sm:text-base">
                <span className="font-bold text-white block mb-1">14000+</span>
                Auction Completed
              </div>
              <div className="text-[#f6ddce] text-sm sm:text-base text-right">
                <span className="font-bold text-white block mb-1">$550M+</span>
                Value of cars sold
              </div>
              <div className="text-[#f6ddce] text-sm sm:text-base">
                <span className="font-bold text-white block mb-1">685k+</span>
                Registered members
              </div>
              <div className="text-[#f6ddce] text-sm sm:text-base text-right">
                <span className="font-bold text-white block mb-1">83%+</span>
                Sell-through rate
              </div>
            </div>
          </div>

          {/* Review Card Section */}
          <div className="w-full lg:w-1/3 mt-8 lg:mt-0">
            <BasicCard />
          </div>

          {/* Email Subscription Section */}
          <div className="w-full lg:w-1/3 mt-8 lg:mt-0">
            <h1 className="text-[#f6ddce] text-xl mb-4">Get the daily Email</h1>
            <div className="space-y-3">
              <div className="w-full">
                <UnstyledInputIntroduction />
              </div>
              <div className="w-full">
                <UnstyledButtonsIntroduction />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EndNavbar;