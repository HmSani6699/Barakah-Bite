import React from "react";
import { IoMdCloseCircle } from "react-icons/io";

const FoodShopView = ({ viewShopData, setViewShop }) => {
  return (
    <div
      onClick={() => setViewShop(false)}
      className="fixed inset-0 bg-[#000000d9] z-[200] flex items-center justify-center"
    >
      <div
        className="bg-white w-full max-w-[600px] mx-[16px] rounded-lg shadow-lg 
                        max-h-[90vh] overflow-y-auto p-[20px]"
      >
        {/* Close button */}
        <div className="flex items-end justify-end mb-[20px] sticky top-0 bg-white z-10">
          <IoMdCloseCircle
            onClick={() => setViewShop(false)}
            className="text-red-500 text-[30px] cursor-pointer"
          />
        </div>
        {/* Card */}
        hallo shop view
      </div>
    </div>
  );
};

export default FoodShopView;
