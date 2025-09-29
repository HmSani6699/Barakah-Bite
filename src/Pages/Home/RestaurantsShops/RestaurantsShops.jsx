import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, FreeMode } from "swiper/modules";
import { Link } from "react-router";
import { FaStar } from "react-icons/fa";
import noImage from "../../../../public/images/notimage.svg";

const RestaurantsShops = ({ allRestaurent }) => {
  const baseImageUrl = import.meta.env.VITE_API_URL_IMAGE;

  return (
    <div className=" my-[16px] py-[20px] lg:rounded-[10px] rounded-none mb-[90px]">
      <div className="px-[20px] flex items-center justify-between">
        <h2 className="text-[18px] font-bold  ">রেস্টুরেন্ট এন্ড শপসমূহ</h2>

        {/* <button className="flex  items-center gap-[10px] main_color ">
          আরো দেখুন <MdKeyboardDoubleArrowRight />
        </button> */}
      </div>

      {/* MObile */}
      <div className="mt-[20px] lg:hidden block">
        <Swiper
          slidesPerView={4} // একসাথে কয়টা দেখাবে
          spaceBetween={15}
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
          {allRestaurent.map((item, i) => (
            <SwiperSlide key={i}>
              <Link to={`/shope-profile/${item?._id}`}>
                <div className="flex flex-col items-center">
                  <div className="h-[60px] w-[60px] flex items-center justify-center rounded-full   bg-white shadow-md p-[10px]">
                    {item?.logo ? (
                      <img
                        className="h-full w-full rounded-full"
                        src={`${baseImageUrl}/${item?.logo}`}
                        alt="logo"
                      />
                    ) : (
                      <img
                        className="h-full w-full rounded-full"
                        src={noImage}
                        alt="logo"
                      />
                    )}
                  </div>
                  <p className="text-[12px] flex items-center gap-[4px] mt-[10px]">
                    <FaStar className="text-[12px] text-yellow-400" /> 5.0
                  </p>
                  <h2 className="font-semibold  text-[12px] whitespace-nowrap text-gray-700">
                    {item?.name}
                  </h2>

                  {item?.productCount > 0 && (
                    <p className=" font-normal text-gray-600 text-[10px]">
                      <span className="main_color font-bold ">
                        {item?.productCount}
                      </span>
                      আইটেম
                    </p>
                  )}
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Dekstop */}
      <div className="mt-[20px] lg:block hidden">
        <Swiper
          slidesPerView={7} // একসাথে কয়টা দেখাবে
          spaceBetween={15}
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
                <div className="flex flex-col items-center">
                  <div className="h-[80px] w-[80px] flex items-center justify-center rounded-full   bg-white shadow-md p-[10px]">
                    <img
                      className="h-full w-full rounded-full"
                      src="https://i.postimg.cc/bJqXjHd5/FB-IMG-1757409260966.jpg"
                      alt="logo"
                    />
                  </div>
                  <p className="text-[12px] flex items-center gap-[4px] mt-[10px]">
                    <FaStar className="text-[12px] text-yellow-400" /> 5.0
                  </p>
                  <h2 className="font-semibold  text-[12px] whitespace-nowrap text-gray-700">
                    Barakah Mart
                  </h2>
                  <p className=" font-normal text-gray-600 text-[10px]">
                    <span className="main_color font-bold ">10 </span>
                    আইটেম
                  </p>
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
