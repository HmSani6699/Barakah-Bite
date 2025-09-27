import { useEffect, useState } from "react";
import FoodCard from "../../../Component/FoodCard/FoodCard";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { Link } from "react-router";

const FilterTab = ({
  setIsFullImageOpen,
  haldleAddToCard,
  allRestaurantActiveItems,
}) => {
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
                haldleAddToCard={haldleAddToCard}
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
      <div className="lg:block hidden px-[15px]">
        <Swiper slidesPerView={3} spaceBetween={20} className="mySwiper">
          {allRestaurantActiveItems.map((item, i) => (
            <SwiperSlide key={i}>
              <FoodCard
                // setIsFullImageOpen={setIsFullImageOpen}
                height="h-[140px]"
                item={item}
                // haldleAddToCard={haldleAddToCard}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default FilterTab;
