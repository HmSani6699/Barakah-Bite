import { useEffect, useState } from "react";
import FoodCard from "../../../Component/FoodCard/FoodCard";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { Link } from "react-router";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import { IoIosArrowForward } from "react-icons/io";
import { ToastContainer } from "react-toastify";

const FilterTab = ({ setIsFullImageOpen, allRestaurantActiveItems }) => {
  return (
    <div>
      <div className="flex items-center justify-between  px-[15px] my-[16px]">
        <h2 className="text-[18px] font-bold text_black_color">
          জনপ্রিয় খাবার
        </h2>
        <Link to={"/all-popular-items"}>
          <button className="flex  items-center gap-[10px] main_color">
            আরো দেখুন <MdKeyboardDoubleArrowRight />
          </button>
        </Link>
      </div>

      <div className="lg:hidden block">
        {allRestaurantActiveItems ? (
          <div className="px-[15px]  flex items-center gap-[16px] overflow-auto scrollbar-hide mb-[16px]">
            {allRestaurantActiveItems?.map((item, i) => (
              <FoodCard
                key={i}
                setIsFullImageOpen={setIsFullImageOpen}
                height="h-[140px]"
                item={item}
              />
            ))}
          </div>
        ) : (
          <div>
            <h1>Item Not Found !</h1>
          </div>
        )}
      </div>

      {/* PC Device */}
      <div className="lg:block hidden px-[15px] relative">
        <Swiper
          slidesPerView={4}
          spaceBetween={20}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          modules={[Navigation]}
          className="mySwiper"
        >
          {allRestaurantActiveItems.map((item, i) => (
            <SwiperSlide key={i}>
              <FoodCard height="h-[140px]" item={item} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Prev Button */}
        <div className="custom-prev absolute left-[30px] top-1/2 -translate-y-1/2 bg-white w-10 h-10 flex items-center justify-center rounded-full shadow cursor-pointer hover:bg-gray-100 transition z-[100] ">
          <IoIosArrowForward className="rotate-[180deg] text-[25px]" />
        </div>

        {/* Custom Next Button */}
        <div className="custom-next absolute right-[30px] top-1/2 -translate-y-1/2 bg-white w-10 h-10 flex items-center justify-center rounded-full shadow cursor-pointer hover:bg-gray-100 transition z-[100] ">
          <IoIosArrowForward className="text-[25px]" />
        </div>
      </div>
      {/* <ToastContainer /> */}
    </div>
  );
};

export default FilterTab;
