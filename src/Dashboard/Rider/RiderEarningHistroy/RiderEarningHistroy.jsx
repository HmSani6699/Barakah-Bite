import React from "react";
import { FaArrowTrendUp } from "react-icons/fa6";
import { LuWallet } from "react-icons/lu";
import { MdAttachMoney } from "react-icons/md";

const RiderEarningHistroy = () => {
  return (
    <div className="p-[20px] mb-[100px]">
      <div className="flex items-center justify-between gap-[10px] text-[14px] text-center">
        <div className="bg-white shadow-md rounded-[10px]  p-[10px] w-full">
          <h2 className="text-[16px] font-semibold mb-[8px] text-[#0d6d22]">
            ১২৪৭
          </h2>
          <p className="text-gray-600">আজকের আয়</p>
        </div>
        <div className="bg-white shadow-md rounded-[10px]  p-[10px] w-full">
          <h2 className="text-[16px] font-semibold mb-[8px] text-[#37b757]">
            ২৪৭
          </h2>
          <p className="text-gray-600">এই সপ্তাহে</p>
        </div>
        <div className="bg-white shadow-md rounded-[10px]  p-[10px] w-full">
          <h2 className="text-[16px] font-semibold mb-[8px] text-[#ff6347]">
            ১২
          </h2>
          <p className="text-gray-600">মোট আয়</p>
        </div>
      </div>

      {/* Earn details */}
      <div className="mt-[20px]">
        <h2 className="text-[20px] font-semibold mb-[20px]">আয়ের বিস্তারিত</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-muted rounded-lg bg-white">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 bg-[#43e7f93b] rounded-full flex items-center justify-center">
                <MdAttachMoney className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="font-medium">ডেলিভারি ফি</p>
                <p className="text-sm text-muted-foreground">১২০৫ ডেলিভারি</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-semibold text-primary">৳৩৬,১৫০</p>
              <p className="text-sm text-muted-foreground">৭৯.২%</p>
            </div>
          </div>

          <div className="flex items-center justify-between p-4 bg-muted rounded-lg bg-white">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 bg-green-100 rounded-full flex items-center justify-center">
                <LuWallet className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <p className="font-medium">টিপস</p>
                <p className="text-sm text-muted-foreground">৮৯৫ অর্ডার</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-semibold text-green-600">৳৭,২৫০</p>
              <p className="text-sm text-muted-foreground">১৫.৯%</p>
            </div>
          </div>

          <div className="flex items-center justify-between p-4 bg-muted rounded-lg bg-white">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center">
                <FaArrowTrendUp className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <p className="font-medium">বোনাস</p>
                <p className="text-sm text-muted-foreground">
                  পারফরমেন্স বোনাস
                </p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-semibold text-blue-600">৳২,২৫০</p>
              <p className="text-sm text-muted-foreground">৪.৯%</p>
            </div>
          </div>
        </div>
      </div>

      {/* Pay out  */}
      <div className="bg-white mt-[20px] p-[20px] rounded-[10px]">
        <h2 className="text-[20px] font-semibold mb-[20px]">পেআউট অপশন</h2>
        <div className="flex items-center justify-between p-4 bg-muted rounded-lg bg-white">
          <div>
            <p className="font-medium">উপলব্ধ ব্যালেন্স</p>
            <p className="text-[18px] font-bold text-[#ff6347]">
              {" "}
              <span className="font-extrabold"> ৳ </span> ৮৯৫{" "}
            </p>
          </div>

          <div>
            <button className="flex items-center gap-[5px] bg-[#ff6347] text-white py-[8px] px-[10px] rounded-[8px]">
              <LuWallet /> উইথড্র করুন
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RiderEarningHistroy;
