import React from "react";
import SearchInputField from "../SearchInputField/SearchInputField";
import { FaArrowLeft } from "react-icons/fa6";
import { Link } from "react-router";

const GroceryShopCaed = () => {
  return (
    <div className="mb-[120px]">
      <Link to={"/"}>
        <div className="bg-white h-[65px]  flex items-center gap-[15px] px-[15px] top_header_shadow">
          <FaArrowLeft className="bg-white text-[20px]" />
          <h2 className="bg-white font-bold text-[20px]">Barakha Mart</h2>
        </div>
      </Link>
      {/* <div className="bg-white h-[150px] text-center flex items-center justify-center relative">
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
      </div> */}

      <h2 className=" font-bold text-[20px] mt-[20px] text-center">
        চাউল
        <span className="text-[#ff6347] text-[12px]"> ( 10 আইটেম )</span>
      </h2>

      <div className="mt-[20px] px-[15px]">
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

        {/* card */}
        <div className="grid grid-cols-2 gap-[20px]  rounded-[15px] p-[20px] mt-[20px]">
          {[0, 1, 3, 4, 5, 6, 7, 8].map(() => (
            <div className="bg-white rounded-[15px]  relative">
              <div className="absolute top-[15px] left-0 bg-[#ff6347] text-[12px] text-white px-[10px] py-[5px] rounded-r-[10px]">
                10 % OFF
              </div>
              <div
                className={`h-[100px] bg-white rounded-t-[15px] w-full object-cover`}
              >
                <img
                  className="h-full w-full bg-cover rounded-t-[15px]"
                  src="https://i.postimg.cc/zXBTG8qp/Biriyani1.jpg"
                  alt=""
                />
              </div>

              {/* boday */}
              <div className="px-[15px] bg-white rounded-b-[15px] w-full">
                <h2 className="bg-white text-[14px] font-bold pt-[5px]">
                  বিরিয়ানি
                </h2>

                <div className=" bg-white pb-[15px] rounded-b-[15px] w-full">
                  <div className="flex items-center justify-between mb-[6px]">
                    <div className="flex items-center gap-[10px] bg-white">
                      <h2 className="bg-white font-extrabold p-0 text-gray-500 line-through text-[14px]">
                        <span className=" font-extrabold  bg-white p-0">৳</span>{" "}
                        250
                      </h2>

                      <h2 className="bg-white font-extrabold p-0 main_color text-[14px]">
                        <span className="font-extrabold  bg-white p-0">৳</span>{" "}
                        200
                      </h2>
                    </div>
                    <h2 className="bg-white font-extrabold  main_color text-[14px]">
                      1 kg
                    </h2>
                  </div>
                  <button
                    className={`main_bg_color text-white border-[1px] border-gray-300 py-[4px] px-[30px] 
                        rounded-[8px] shadow-sm  w-full text-[14px]`}
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GroceryShopCaed;
