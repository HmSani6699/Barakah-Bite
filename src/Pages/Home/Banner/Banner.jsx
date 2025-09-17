// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";

const Banner = () => {
  return (
    <div className="mt-[85px]">
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 2500, // প্রতি 2.5 সেকেন্ডে auto slide হবে
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper custom-pagination1"
      >
        <SwiperSlide>
          <div className="h-[160px] px-[15px]">
            <img
              className="h-full w-full object-cover"
              src="https://packly-local.s3.ap-southeast-1.amazonaws.com/media/20250717_195153_e5d77285-62a4-4b4c-b3ad-0c2a30e92621.jpg"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[160px] px-[15px]">
            <img
              className="h-full w-full object-cover"
              src="https://packly-local.s3.ap-southeast-1.amazonaws.com/media/20250717_195009_d0893a5c-167f-402e-8a01-a501356cd16c.jpg"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[160px] px-[15px]">
            <img
              className="h-full w-full object-cover"
              src="https://packly-local.s3.ap-southeast-1.amazonaws.com/media/20250717_195153_e5d77285-62a4-4b4c-b3ad-0c2a30e92621.jpg"
              alt=""
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
