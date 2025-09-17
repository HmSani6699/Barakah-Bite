import React from "react";
import { FaArrowLeft, FaPlus } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";
import { GrFormSubtract, GrSubtract } from "react-icons/gr";
import { RiDeleteBin6Line } from "react-icons/ri";

const Card = () => {
  return (
    <div className="flex items-center justify-between bg-[#ffffff]  rounded-[15px] p-[16px]">
      <div className=" flex items-center gap-[10px] bg-[#ffffff]">
        <div className="h-[65px] w-[65px] rounded-[15px]  border-[3px] border-[#eff1f1] ">
          <img
            className="h-full w-full rounded-[15px]"
            src="https://i.postimg.cc/QNH0fRzB/download-3.jpgg"
            alt="logo"
          />
        </div>
        <div className="bg-[#ffffff]">
          <h2 className="bg-[#ffffff] text-[10px] text-gray-500 mb-[3px]">
            অর্ডার আইডি #LSKF&
          </h2>
          <h2 className="bg-[#ffffff] text-[14px] font-semibold">
            সাহি বিরিয়ানি
          </h2>
          <div className="flex items-center gap-[15px] bg-[#ffffff]">
            <h2 className="bg-[#ffffff] font-extrabold p-0 text-gray-500 line-through text-[16px]">
              <span className=" font-extrabold  bg-[#ffffff] p-0">৳</span> 250
            </h2>
            <h2 className="bg-[#ffffff] font-extrabold p-0 main_color text-[16px]">
              <span className="font-extrabold  bg-[#ffffff] p-0">৳</span> 200
            </h2>
          </div>
        </div>
      </div>

      <div className="bg-[#ffffff] flex items-center gap-[10px]">
        <GrSubtract className="bg-gray-200 p-[5px]  rounded-full text-[20px]" />
        <p className="bg-[#ffffff]">1</p>
        <FiPlus className="bg-gray-200 p-[5px]  rounded-full text-[20px]" />
        <RiDeleteBin6Line className="bg-[#ffffff] text-red-500 text-[20px]" />
      </div>
    </div>
  );
};

export default Card;
