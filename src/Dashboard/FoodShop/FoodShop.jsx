import React from "react";
import { FaStar } from "react-icons/fa";
import { FaMoneyBill1Wave } from "react-icons/fa6";
import { FiPackage } from "react-icons/fi";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const FoodShop = () => {
  return (
    <div className="px-[15px] pt-[20px] mb-[120px] relative">
      {/* Today's Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="p-[20px] bg-white rounded-[10px] shadow-md border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">আজকের আয়</p>
              <p className="text-xl font-bold text-[#ff6347]">
                <span className="font-extrabold">৳</span> ১২
              </p>
            </div>
            <FaMoneyBill1Wave className=" text-[#ff6347] text-[30px]" />
          </div>
        </div>

        <div className="p-[20px] bg-white rounded-[10px] shadow-md border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">আজকের অর্ডার</p>
              <p className="text-xl font-bold text-[#ff6347]">১২</p>
            </div>
            <FiPackage className=" text-[#ff6347] text-[30px]" />
          </div>
        </div>
      </div>

      {/* Total earn */}
      <div className="p-[20px] bg-white rounded-[10px] shadow-md border my-[20px]">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-muted-foreground">মোট আয়</p>
            <p className="text-xl font-bold text-[#ff6347]">
              <span className="font-extrabold">৳</span> ১২
            </p>
          </div>
          <FaMoneyBill1Wave className=" text-[#ff6347] text-[30px]" />
        </div>
      </div>

      {/* Overall Performance */}
      <div className="space-y-4 bg-white p-[20px] rounded-[10px] mt-[20px]">
        <h3 className="text-lg font-semibold">সামগ্রিক পারফরমেন্স</h3>

        <div className="grid grid-cols-3 sm:grid-cols-3 gap-6 ">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <FaStar className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              <span className="text-2xl font-bold">3.4</span>
            </div>
            <p className="text-sm text-muted-foreground">গড় রেটিং</p>
          </div>

          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <FiPackage className="h-5 w-5 text-primary" />
              <span className="text-2xl font-bold">234</span>
            </div>
            <p className="text-sm text-muted-foreground">মোট ডেলিভারি</p>
          </div>

          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              {/* <TrendingUp className="h-5 w-5 text-green-600" /> */}
              <span className="text-2xl font-bold">৯৬.৭%</span>
            </div>
            <p className="text-sm text-muted-foreground">সফলতার হার</p>
          </div>
        </div>
      </div>

      {/* order record */}
      <div className="mt-[20px]">
        <div className="flex items-center justify-between mb-[15px]">
          <h2 className="text-lg font-semibold">সাম্প্রতিক অর্ডার</h2>
          <button className="text-[#ff6347] flex items-center gap-[4px]">
            সব দেখুন <MdKeyboardDoubleArrowRight />
          </button>
        </div>
        <div className="flex flex-col gap-[20px]">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="flex items-center justify-between p-3 bg-muted rounded-lg bg-white "
            >
              <div className="flex items-center gap-3">
                <div>
                  <div className="flex gap-[10px] mb-[6px]">
                    <p className="font-medium">#{1000 + item}</p>
                    <p className="text-[12px] bg-green-100 px-[15px] rounded-[6px] py-[2px]">
                      সম্পন্ন
                    </p>
                  </div>
                  <p className="text-[16px] font-semibold mb-[6px]">
                    রহিম উদ্দিন
                  </p>
                  <p className="text-sm text-muted-foreground">
                    বিরিয়ানি, রসগোল্লা
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-semibold text-primary">
                  <span className="font-extrabold  bg-white p-0">৳</span>{" "}
                  {120 + item * 10}
                </p>
                <p>১০ মিনিট আগে</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FoodShop;
