import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";

const FoodCard = ({ height, item }) => {
  const [isFullImageOpen, setIsFullImageOpen] = useState(false);

  return (
    <div>
      <div className="bg-white rounded-[15px] min-w-[290px] relative">
        <div className="absolute top-[20px] left-0 bg-[#ff6347] text-[12px] text-white px-[10px] py-[5px] rounded-r-[10px] shadow-md">
          10 % OFF
        </div>
        <div className="absolute top-[60px] left-0 bg-[#1c8645] text-[12px] text-white px-[10px] py-[5px] rounded-r-[10px] shadow-md">
          Sold Out
        </div>
        <div
          onClick={() => setIsFullImageOpen(true)}
          className={`${height} bg-white rounded-t-[15px] w-full object-cover`}
        >
          <img
            className="h-full w-full bg-cover rounded-t-[15px]"
            src={item?.img}
            alt=""
          />
        </div>

        {/* boday */}
        <div className="px-[15px] bg-white rounded-b-[15px] w-full">
          <h2 className="bg-white text-[20px] font-bold pt-[15px] text-[#4f4a4a]">
            {item?.title}
          </h2>
          <div className="flex items-center gap-[8px] bg-white mt-[6px]">
            <div className="h-[30px] w-[30px] rounded-full  border-[3px] border-white">
              <img
                className="h-full w-full rounded-full"
                src="https://i.postimg.cc/zXBTG8qp/Biriyani1.jpg"
                alt="logo"
              />
            </div>
            <div className="flex items-center gap-[10px] bg-white">
              <h2 className="text-[16px]  bg-white whitespace-nowrap text-gray-500">
                Barakah Mart
              </h2>
              <div className="flex items-center bg-white gap-[10px]">
                <p>
                  <FaStar className="text-[#ff6347] bg-white" />
                </p>
                <p className="bg-white text-gray-500 font-semibold"> 5.5</p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between bg-white pb-[15px] rounded-b-[15px] pt-[8px] w-full">
            <div className="flex items-center gap-[10px] bg-white">
              <h2 className="bg-white font-extrabold p-0 text-gray-500 line-through text-[20px]">
                <span className=" font-extrabold  bg-white p-0">৳</span>{" "}
                {item?.cutPrice}
              </h2>

              <h2 className="bg-white font-extrabold p-0 main_color text-[20px]">
                <span className="font-extrabold  bg-white p-0">৳</span>{" "}
                {item?.price}
              </h2>
            </div>
            <button
              className={`main_bg_color text-white border-[1px] border-gray-300 py-[6px] px-[30px] 
        rounded-[8px] shadow-sm mt-[6px]`}
            >
              Add
            </button>
          </div>
        </div>
      </div>
      {/* Open Full image model */}
      {isFullImageOpen && (
        <div className="fixed inset-0 bg-[#000000d9] z-[200] flex items-center justify-center">
          <div className=" mx-[15px] p-[20px] rounded-[10px]">
            <div className="flex items-end justify-end mb-[20px]">
              <IoMdCloseCircle
                onClick={() => setIsFullImageOpen(false)}
                className="text-white text-[30px]"
              />
            </div>
            <div>
              <img
                className="h-full w-full rounded-[10px]"
                src="https://i.postimg.cc/zXBTG8qp/Biriyani1.jpg"
                alt="logo"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FoodCard;
