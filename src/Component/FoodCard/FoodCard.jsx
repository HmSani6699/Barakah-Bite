import { FaStar } from "react-icons/fa";

const FoodCard = () => {
  return (
    <div className="bg-white rounded-[15px] min-w-[290px]">
      <div className="h-[150px] bg-white rounded-t-[15px] w-full">
        <img
          className="h-full w-full bg-cover rounded-t-[15px]"
          src="../../../public/images/Biriyani1.jpg"
          alt=""
        />
      </div>

      {/* boday */}
      <div className="px-[15px] bg-white rounded-b-[15px] w-full">
        <h2 className="bg-white text-[20px] font-bold pt-[15px]">বিরিয়ানি</h2>
        <div className="flex items-center gap-[8px] bg-white mt-[6px]">
          <div className="h-[30px] w-[30px] rounded-full  border-[3px] border-white">
            <img
              className="h-full w-full rounded-full"
              src="../../../public/images/dal.jpeg"
              alt="logo"
            />
          </div>
          <div className="flex items-center gap-[10px] bg-white">
            <h2 className="text-[16px]  bg-white whitespace-nowrap">
              Barakah Mart
            </h2>
            <div className="flex items-center bg-white gap-[10px]">
              <p>
                <FaStar className="text-[#ff6347] bg-white" />
              </p>
              <p className="bg-white"> 5.5</p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between bg-white pb-[15px] rounded-b-[15px] pt-[8px] w-full">
          <div className="flex items-center gap-[10px] bg-white">
            <h2 className="bg-white font-extrabold p-0 text-gray-500 line-through text-[20px]">
              <span className=" font-extrabold  bg-white p-0">৳</span> 250
            </h2>

            <h2 className="bg-white font-extrabold p-0 text-red-600 text-[20px]">
              <span className="font-extrabold  bg-white p-0">৳</span> 200
            </h2>
          </div>
          <button className="main_bg_color text-white border-[1px] border-gray-300 py-[2px] px-[15px]  rounded-[8px] shadow-sm mt-[6px]">
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
