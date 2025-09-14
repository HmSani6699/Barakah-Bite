import { FaArrowLeft } from "react-icons/fa6";
import { Link } from "react-router";
import FoodCard from "../FoodCard/FoodCard";
import SearchInputField from "../SearchInputField/SearchInputField";

const ShopeProfile = () => {
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
      <h2 className=" font-bold text-[20px] mt-[80px] text-center">
        Barakha Mart
        <span className="text-[#ff6347] text-[12px]"> ( 10 আইটেম )</span>
      </h2>

      <div className="px-[15px] pt-[20px]">
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
        <div className="px-[15px] mt-[20px] flex flex-col gap-[20px] mb-[20px]">
          <FoodCard height="h-[190px]" />
          <FoodCard height="h-[190px]" />
          <FoodCard height="h-[190px]" />
          <FoodCard height="h-[190px]" />
          <FoodCard height="h-[190px]" />
          <FoodCard height="h-[190px]" />
        </div>
      </div>
    </div>
  );
};

export default ShopeProfile;
