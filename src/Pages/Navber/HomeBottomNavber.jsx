import { FaUser } from "react-icons/fa";
import { HiClipboardList, HiHome, HiShoppingCart } from "react-icons/hi";
import "./Navber.css";

const HomeBottomNavber = () => {
  return (
    <div className="bg-white fixed bottom-0 w-full  flex items-center justify-around text-gray-500 top_shadow py-[10px] ">
      <div className="flex flex-col items-center bg-white ">
        <HiHome className="text-[25px] mb-[3px] text-gray-500 bg-white" />
        <h2 className="text-[14px]">হোম</h2>
      </div>
      <div className="flex flex-col items-center bg-white ">
        <HiClipboardList className="text-[22px] mb-[3px] text-gray-500 bg-white" />
        <h2 className="text-[14px]"> অর্ডারস</h2>
      </div>
      <div className="flex flex-col items-center bg-white ">
        <HiShoppingCart className="text-[25px] mb-[3px] text-gray-500 bg-white" />
        <h2 className="text-[14px]"> কার্ড</h2>
      </div>
      <div className="flex flex-col items-center bg-white ">
        <FaUser className="text-[22px] mb-[3px] text-gray-500 bg-white" />
        <h2 className="text-[14px]">প্রোফাইল</h2>
      </div>
    </div>
  );
};

export default HomeBottomNavber;
