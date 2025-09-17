import { FaMotorcycle, FaStar, FaUtensils } from "react-icons/fa";
import { MdDone } from "react-icons/md";
import { TiHome } from "react-icons/ti";
import TextareaField from "../../Component/TextareaField/TextareaField";
import { Link, useLocation } from "react-router";
import InputField from "../InputField/InputField";
import { FaArrowLeft } from "react-icons/fa6";
import { LiaShoppingCartSolid } from "react-icons/lia";
import { useState } from "react";

const TrackOrder = () => {
  const location = useLocation();
  const stateId = location.state?.id;
  const [isStateId, setIsStateId] = useState(stateId);

  const handleSearch = () => {
    setIsStateId("1");
  };

  return (
    <div>
      {isStateId ? (
        <div>
          {" "}
          <div className="bg-white h-[65px]   px-[15px] top_header_shadow flex items-center justify-between">
            <Link to={"/"} className="flex items-center gap-[15px]">
              <FaArrowLeft className="bg-white text-[20px] text-[#6b7280]" />
              <h2 className="bg-white font-bold text-[16px] text-[#6b7280]">
                Barakha Mart
              </h2>
            </Link>
          </div>{" "}
          <div className="px-[15px]">
            <h2 className="text-[25px] text-center mt-[30px] font-bold">
              আপনার খাবার আসছে!
            </h2>
            <p className="text-center text-gray-500 text-[14px] mt-[10px]">
              অর্ডার আইডি: #LQHRQW
            </p>

            <div className="relative mx-[15px] overflow-hidden flex items-center justify-center mt-[30px]">
              <div className="h-[3px] bg-gray-300 absolute w-full top-[13px]"></div>
              <div className="flex items-center justify-between w-[90%]">
                <div className="flex flex-col items-center justify-center">
                  <div className="bg-green-600 h-[30px] w-[30px] rounded-full flex items-center justify-center relative z-[20] border-[1px] border-white">
                    <MdDone className="text-white bg-green-600" />
                  </div>
                  <p className="text-[10px] whitespace-nowrap mt-[10px] text-gray-400">
                    অর্ডার কনফার্মড
                  </p>
                </div>

                <div className="flex flex-col items-center justify-center">
                  <div className="bg-gray-200 text-gray-400 h-[30px] w-[30px] rounded-full flex items-center justify-center relative z-[20] border-[1px] border-white">
                    <FaUtensils />
                  </div>
                  <p className="text-[10px] whitespace-nowrap mt-[10px] text-gray-400">
                    খাবার তৈরি হচ্ছে
                  </p>
                </div>

                <div className="flex flex-col items-center justify-center">
                  <div className="bg-gray-200 text-gray-400 h-[30px] w-[30px] rounded-full flex items-center justify-center relative z-[20] border-[1px] border-white">
                    <FaMotorcycle />
                  </div>
                  <p className="text-[10px] whitespace-nowrap mt-[10px] text-gray-400">
                    ডেলিভারির পথে
                  </p>
                </div>

                <div className="flex flex-col items-center justify-center">
                  <div className="bg-gray-200 text-gray-400 h-[30px] w-[30px] rounded-full flex items-center justify-center relative z-[20] border-[1px] border-white">
                    <TiHome />
                  </div>
                  <p className="text-[10px] whitespace-nowrap mt-[10px] text-gray-400">
                    ডেলিভার্ড
                  </p>
                </div>
              </div>
            </div>

            {/* Revidew box */}

            <div className=" mt-[30px] rounded-[15px]  p-[15px]  ">
              <div className="mb-[20px]">
                <p className="mb-[10px]">রেটিং দিন</p>
                <div className="flex items-center gap-[20px]">
                  <FaStar className="text-[#ff6347]  text-[30px] shadow-sm" />
                  <FaStar className="text-gray-300  text-[30px] shadow-sm" />
                  <FaStar className="text-gray-300  text-[30px] shadow-sm" />
                  <FaStar className="text-gray-300  text-[30px] shadow-sm" />
                  <FaStar className="text-gray-300  text-[30px] shadow-sm" />
                </div>
              </div>
              <TextareaField />
            </div>

            <div className="flex items-end justify-end mt-[10px] px-[15px]">
              <button className="main_bg_color text-white border-[1px] border-gray-300 py-[8px] px-[20px]  rounded-[8px] shadow-sm mt-[6px]">
                Submit
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="bg-white h-[65px]   px-[15px] top_header_shadow flex items-center justify-between">
            <Link to={"/profile"} className="flex items-center gap-[15px]">
              <FaArrowLeft className="bg-white text-[20px] text-[#6b7280]" />
              <h2 className="bg-white font-bold text-[16px] text-[#6b7280]">
                Barakha Mart
              </h2>
            </Link>
            <LiaShoppingCartSolid className="bg-white text-[35px] text-[#6b7280]" />
          </div>
          <div className="bg-white pt-[30px] px-[20px]">
            <h2 className="text-[20px] text-center font-semibold">
              আপনার অর্ডার ট্র্যাক করুন
            </h2>
            <p className="text-[12px] text-center text-gray-500">
              অর্ডার আইডি লিখুন এবং "ট্র্যাক অর্ডার" টিপুন।
            </p>

            <div className="mt-[20px]">
              <p className="mb-[10px] text-[16px]">অর্ডার আইডি</p>
              <input
                type="text"
                className="bg-[#eff1f1] outline-none rounded-[10px] py-[8px] w-full px-[20px] border"
                placeholder="অর্ডার আইডি লিখুন"
              />
            </div>
            <div className="flex items-center justify-center">
              <button
                onClick={() => handleSearch("2")}
                className="mt-[16px] mb-[30px] text-center bg-[#ff6347] text-white px-[30px] py-[8px] rounded-[8px]"
              >
                ট্র্যাক অর্ডার
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TrackOrder;
