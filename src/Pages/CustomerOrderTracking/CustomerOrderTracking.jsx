import { FaMotorcycle, FaStar, FaUtensils } from "react-icons/fa";
import { MdDone } from "react-icons/md";
import { TiHome } from "react-icons/ti";
import TextareaField from "../../Component/TextareaField/TextareaField";

const CustomerOrderTracking = () => {
  return (
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
  );
};

export default CustomerOrderTracking;
