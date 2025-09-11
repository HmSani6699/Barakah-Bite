import React from "react";
import { FaArrowLeft, FaPlus } from "react-icons/fa6";
import { TbMapPinSearch, TbMapSearch } from "react-icons/tb";
import { Link } from "react-router";

const Address = () => {
  return (
    <div>
      <Link to={"/"}>
        <div className="bg-white h-[65px]  flex items-center gap-[15px] px-[15px] top_header_shadow">
          <FaArrowLeft className="bg-white text-[20px]" />
          <h2 className="bg-white font-bold text-[20px]">আমার ঠিকানা</h2>
        </div>
      </Link>
      <div className="px-[15px]">
        <div className="text-center my-[30px] ">
          {/* <TbMapSearch className="text-[120px]  text-[#ff6347] inline-block" /> */}
          <TbMapPinSearch className="text-[120px]  text-[#a7a6a6] inline-block" />

          <h2 className="mt-[20px]">কোনো ঠিকানা এখনো যোগ করা হয়নি।</h2>
        </div>

        <button className=" rounded-[10px] bg-white  p-[15px] w-full flex items-center justify-center gap-[10px] border-[2px] border-[#ff6347] border-dashed text-[#ff6347]  ">
          <FaPlus />
          নতুন ঠিকানা যোগ করুন
        </button>
      </div>
    </div>
  );
};

export default Address;
