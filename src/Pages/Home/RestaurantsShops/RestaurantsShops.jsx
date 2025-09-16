import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// import required modules
import { Autoplay, FreeMode } from "swiper/modules";
import { Link } from "react-router";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const RestaurantsShops = () => {
  return (
    <div className="bg-white my-[30px] py-[20px]">
      <div className="px-[20px] flex items-center justify-between">
        <h2 className="text-[18px] font-bold  ">রেস্টুরেন্ট এন্ড শপসমূহ</h2>

        <button className="flex  items-center gap-[10px] main_color ">
          আরো দেখুন <MdKeyboardDoubleArrowRight />
        </button>
      </div>

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
              <Link to={"/shope-profile/1"}>
                {" "}
                <div className="flex flex-col items-center">
                  <div className="h-[70px] w-[70px] rounded-full border-[3px] border-white">
                    <img
                      className="h-full w-full rounded-full"
                      src="https://i.postimg.cc/bJqXjHd5/FB-IMG-1757409260966.jpg"
                      alt="logo"
                    />
                  </div>
                  <h2 className="font-semibold mt-[10px] text-[13px] whitespace-nowrap">
                    Barakah Mart
                  </h2>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default RestaurantsShops;
