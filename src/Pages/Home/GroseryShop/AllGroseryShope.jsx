import React from "react";
import GroceryCard from "../../../Component/GroceryCard/GroceryCard";
import { FaArrowLeft } from "react-icons/fa6";
import { Link } from "react-router";
import SearchInputField from "../../../Component/SearchInputField/SearchInputField";

const AllGroseryShope = () => {
  return (
    <div className="mb-[120px]">
      <Link to={"/"}>
        <div className="bg-white h-[65px]  flex items-center gap-[15px] px-[15px] top_header_shadow">
          <FaArrowLeft className="bg-white text-[20px]" />
          <h2 className="bg-white font-bold text-[20px]">Barakha Mart</h2>
        </div>
      </Link>
      <div className="bg-white h-[150px] text-center flex items-center justify-center relative">
        <img
          className="h-full w-full object-cover"
          src="https://i.postimg.cc/QNH0fRzB/download-3.jpg"
          alt="banner"
        />

        <div className="h-[120px] w-[120px] rounded-full  border-[4px] border-[#eff1f1] -mb-[160px] shadow-md absolute">
          <img
            className="h-full w-full rounded-full"
            src="https://i.postimg.cc/QNH0fRzB/download-3.jpgg"
            alt="logo"
          />
        </div>
      </div>
      <div className="mt-[90px] px-[15px]">
        <SearchInputField />
      </div>

      {/*  */}

      <div>
        <div className="px-[15px] flex items-center gap-[20px] overflow-auto scrollbar-hide pb-[15px] mt-[30px]">
          <button className="main_bg_color text-white border-[1px] border-gray-300 py-[6px] px-[20px]  rounded-full shadow-sm">
            সকল
          </button>
          <button className="bg-white border-[1px] border-gray-300 py-[6px] px-[20px]  rounded-full shadow-sm">
            বিরিয়ানি
          </button>
          <button className="bg-white border-[1px] border-gray-300 py-[6px] px-[20px]  rounded-full shadow-sm">
            বার্গার{" "}
          </button>
          <button className="bg-white border-[1px] border-gray-300 py-[6px] px-[20px]  rounded-full shadow-sm">
            নুডুলস{" "}
          </button>
          <button className="bg-white border-[1px] border-gray-300 py-[6px] px-[20px]  rounded-full shadow-sm">
            পিৎজা{" "}
          </button>
          <button className="bg-white border-[1px] border-gray-300 py-[6px] px-[20px]  rounded-full shadow-sm">
            পানীয়{" "}
          </button>
        </div>
        <div className="grid grid-cols-3 gap-[20px] bg-white rounded-[15px] p-[20px] mt-[20px]">
          <GroceryCard />
          <GroceryCard />
          <GroceryCard />
          <GroceryCard />
          <GroceryCard />
          <GroceryCard />
          <GroceryCard />
          <GroceryCard />
          <GroceryCard />
          <GroceryCard />
          <GroceryCard />
          <GroceryCard />
        </div>
      </div>
    </div>
  );
};

export default AllGroseryShope;
