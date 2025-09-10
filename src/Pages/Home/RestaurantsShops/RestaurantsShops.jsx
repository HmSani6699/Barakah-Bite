import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// import required modules
import { Autoplay, FreeMode } from "swiper/modules";

const RestaurantsShops = () => {
  return (
    <div>
      <h2 className="text-[20px] font-bold px-[20px] mt-[10px]">
        রেস্টুরেন্ট এন্ড শপসমূহ
      </h2>

      <div className="mt-[20px]">
        <Swiper
          slidesPerView={4} // একসাথে কয়টা দেখাবে
          spaceBetween={20}
          loop={true} // infinite loop
          freeMode={true} // smooth marquee effect
          speed={4000} // speed control
          autoplay={{
            delay: 0, // কোন delay নাই
            disableOnInteraction: false,
          }}
          modules={[Autoplay, FreeMode]}
          className="mySwiper"
        >
          {[...Array(10)].map((_, i) => (
            <SwiperSlide key={i}>
              <div className="flex flex-col items-center">
                <div className="h-[70px] w-[70px] rounded-full border-[3px] border-white">
                  <img
                    className="h-full w-full rounded-full"
                    src="../../../public/images/dal.jpeg"
                    alt="logo"
                  />
                </div>
                <h2 className="font-semibold mt-[10px] text-[13px]">
                  Barakah Bite
                </h2>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default RestaurantsShops;
