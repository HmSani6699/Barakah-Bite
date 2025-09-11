import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import Card from "./Card";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router";

const CheckOut = () => {
  return (
    <div className="">
      <Link to={"/"}>
        <div className="bg-white h-[65px]  flex items-center gap-[15px] px-[15px]">
          <FaArrowLeft className="bg-white text-[20px]" />
          <h2 className="bg-white font-bold text-[20px]">আমার কার্ট</h2>
        </div>
      </Link>
      {/*  */}
      <div className="px-[15px] mt-[20px]">
        <Card />
      </div>
      <div className="flex items-center gap-[10px] rounded-[15px] bg-[#ffffff80] mx-[15px] mt-[20px] p-[20px] border-[1px] border-dashed border-[#ff6347]">
        <FaLocationDot className="text-[20px] text-[#ff6347] bg-[#ffffff80]" />
        <p className="bg-[#ffffff80] text-gray-400">ডেলিভারি ঠিকানা যোগ করুন</p>
      </div>
      <div className="bg-[#ffffff80] mx-[15px] rounded-[15px] mt-[20px] p-[20px]">
        <h2 className="font-bold mb-[10px] bg-[#ffffff80]">বিল বিবরণী</h2>
        <div className="flex items-center justify-between mb-[8px] bg-[#ffffff80]">
          <p className="text-[14px]  bg-[#ffffff80]">সাব-টোটাল</p>
          <p className="bg-[#ffffff80]">
            <span className="font-extrabold bg-[#ffffff80]">৳</span> 200
          </p>
        </div>
        <div className="flex items-center justify-between mb-[8px] bg-[#ffffff80]">
          <p className="text-[14px] ">ডেলিভারি চার্জ</p>
          <p className="bg-[#ffffff80]">
            <span className="font-extrabold bg-[#ffffff80]">৳</span> 200
          </p>
        </div>
        <div className="flex items-center justify-between mb-[8px] bg-[#ffffff80]">
          <p className="bg-[#ffffff80] text-[14px] ">ডিসকাউন্ট</p>
          <p className="bg-[#ffffff80]">
            <span className="font-extrabold bg-[#ffffff80]">৳</span> 200
          </p>
        </div>

        <div className=" border-t-2 border-t-gray-200 bg-[#ffffff80] flex items-center justify-between">
          <p className="pt-[8px] bg-[#ffffff80] text-[14px] font-semibold">
            সর্বমোট
          </p>
          <p className="font-bold pt-[8px] bg-[#ffffff80]">
            <span className="font-extrabold bg-[#ffffff80]">৳</span> 200
          </p>
        </div>
      </div>{" "}
      <Link to={"/success"}>
        {" "}
        <div className="px-[15px] mb-[30px]">
          <button className="main_bg_color text-white border-[1px] border-gray-300 py-[8px] px-[20px]  w-full rounded-[8px] shadow-sm  mt-[30px]">
            অর্ডার করুন
          </button>
        </div>
      </Link>
    </div>
  );
};

export default CheckOut;
