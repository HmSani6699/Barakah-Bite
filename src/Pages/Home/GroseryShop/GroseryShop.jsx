// import { MdKeyboardDoubleArrowRight } from "react-icons/md";
// import GroceryCard from "../../../Component/GroceryCard/GroceryCard";
// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";

// // import required modules
// import { Pagination } from "swiper/modules";
// import { Link } from "react-router";

// const GroseryShop = ({ allSubCategory }) => {
//   // Slide এর জন্য chunk create function
//   const createChunks = (array, chunkSize) => {
//     const result = [];
//     for (let i = 0; i < array.length; i += chunkSize) {
//       result.push(array.slice(i, i + chunkSize));
//     }
//     return result;
//   };

//   // Breakpoints অনুযায়ী chunk size
//   const getChunks = () => {
//     if (!allSubCategory) return [];
//     // Mobile: 6, Desktop: 8
//     const chunkSize = window.innerWidth >= 1024 ? 8 : 6;
//     return createChunks(allSubCategory, chunkSize);
//   };

//   const slides = getChunks();

//   return (
//     <div className="  bg-white lg:bg-[#eff1f1] px-[20px] py-[20px]">
//       <div className="flex items-center justify-between  bg-white lg:bg-[#eff1f1] ">
//         <h2 className="text-[18px] font-bold text_black_color bg-white lg:bg-[#eff1f1]">
//           নিত্যপ্রয়োজনীয় বাজার
//         </h2>

//         <Link to={"/all-categories"}>
//           <button className="flex  items-center gap-[10px] main_color bg-white lg:bg-[#eff1f1]">
//             আরো দেখুন <MdKeyboardDoubleArrowRight />
//           </button>
//         </Link>
//       </div>
//       {/*  */}

//       <div className="block">
//         <Swiper
//           pagination={{
//             clickable: true,
//           }}
//           modules={[Pagination]}
//           className="mySwiper custom-pagination "
//         >
//           {slides.map((slideItems, index) => (
//             <SwiperSlide key={index}>
//               <div className="grid grid-cols-3 gap-[10px] rounded-[15px] mt-[16px]">
//                 {slideItems.map((item, i) => (
//                   <GroceryCard
//                     key={i}
//                     style_clss={{ heigh: "h-[100px]" }}
//                     item={item}
//                     url={"/grocery-itms"}
//                   />
//                 ))}
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </div>
//   );
// };

// export default GroseryShop;

import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import GroceryCard from "../../../Component/GroceryCard/GroceryCard";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

// import required modules
import { Link } from "react-router";
import { Grid, Pagination } from "swiper/modules";

const GroseryShop = ({ allSubCategory = [] }) => {
  return (
    <div className="bg-white px-[20px] py-[20px] rounded-[10px] lg:mt-[16px]">
      {/* Header */}
      <div className="flex items-center justify-between  bg-white  lg:mb-[16px]">
        <h2 className="text-[18px] font-bold text_black_color bg-white ">
          নিত্যপ্রয়োজনীয় বাজার
        </h2>

        <Link to={"/all-categories"}>
          <button className="flex  items-center gap-[10px] main_color bg-white ">
            আরো দেখুন <MdKeyboardDoubleArrowRight />
          </button>
        </Link>
      </div>

      {/* Slider */}
      <div className="">
        <Swiper
          slidesPerView={3}
          slidesPerGroup={3} // প্রতি গ্রুপে কতগুলো স্লাইড যাবে
          grid={{
            rows: 2,
            fill: "row", // grid সঠিকভাবে কাজ করার জন্য দরকার
          }}
          spaceBetween={20}
          pagination={{
            clickable: true,
          }}
          modules={[Grid, Pagination]}
          className="mySwiper custom-pagination"
          breakpoints={{
            320: {
              slidesPerView: 3,
              slidesPerGroup: 3,
              grid: { rows: 2, fill: "row" },
              spaceBetween: 15,
            },
            640: {
              slidesPerView: 3,
              slidesPerGroup: 3,
              grid: { rows: 2, fill: "row" },
              spaceBetween: 15,
            },
            1024: {
              slidesPerView: 4,
              slidesPerGroup: 4,
              grid: { rows: 2, fill: "row" },
              spaceBetween: 20,
            },
            1200: {
              slidesPerView: 5,
              slidesPerGroup: 5,
              grid: { rows: 2, fill: "row" },
              spaceBetween: 20,
            },
          }}
        >
          {allSubCategory.map((item, i) => (
            <SwiperSlide key={i}>
              <GroceryCard
                className="h-[100px]"
                item={item}
                url="/grocery-itms"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default GroseryShop;
