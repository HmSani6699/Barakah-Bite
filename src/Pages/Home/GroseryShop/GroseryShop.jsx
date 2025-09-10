import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import GroceryCard from "../../../Component/GroceryCard/GroceryCard";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const GroseryShop = () => {
  return (
    <div className="px-[15px] mt-[20px] ">
      <div className="flex items-center justify-between">
        <h2 className="text-[20px] font-bold ">নিত্যপ্রয়োজনীয় বাজার</h2>
        <button className="flex  items-center gap-[10px] main_color">
          আরো দেখুন <MdKeyboardDoubleArrowRight />
        </button>
      </div>
      {/*  */}

      <Swiper
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper custom-pagination"
      >
        <SwiperSlide>
          <div className="grid grid-cols-3 gap-[20px] bg-white rounded-[15px] p-[20px] mt-[20px]">
            <GroceryCard />
            <GroceryCard />
            <GroceryCard />
            <GroceryCard />
            <GroceryCard />
            <GroceryCard />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="grid grid-cols-3 gap-[20px] bg-white rounded-[15px] p-[20px] mt-[20px]">
            <GroceryCard />
            <GroceryCard />
            <GroceryCard />
            <GroceryCard />
            <GroceryCard />
            <GroceryCard />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="grid grid-cols-3 gap-[20px] bg-white rounded-[15px] p-[20px] mt-[20px]">
            <GroceryCard />
            <GroceryCard />
            <GroceryCard />
            <GroceryCard />
            <GroceryCard />
            <GroceryCard />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="grid grid-cols-3 gap-[20px] bg-white rounded-[15px] p-[20px] mt-[20px]">
            <GroceryCard />
            <GroceryCard />
            <GroceryCard />
            <GroceryCard />
            <GroceryCard />
            <GroceryCard />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="grid grid-cols-3 gap-[20px] bg-white rounded-[15px] p-[20px] mt-[20px]">
            <GroceryCard />
            <GroceryCard />
            <GroceryCard />
            <GroceryCard />
            <GroceryCard />
            <GroceryCard />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default GroseryShop;
