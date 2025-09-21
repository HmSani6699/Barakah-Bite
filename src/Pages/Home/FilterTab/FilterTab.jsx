import { useEffect, useState } from "react";
import FoodCard from "../../../Component/FoodCard/FoodCard";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import axios from "axios";

const FilterTab = ({ setIsFullImageOpen, haldleAddToCard }) => {
  const [isTabeButton, setIsTabeButton] = useState("সকল");
  const allTabBtn = ["সকল", "বিরিয়ানি", "বার্গার", "নুডুলস", "পিৎজা", "পানীয়"];

  // const allFoods = [
  //   {
  //     title: "বিরিয়ানি",
  //     img: "https://i.postimg.cc/zXBTG8qp/Biriyani1.jpg",
  //     price: "150",
  //     cutPrice: "180",
  //   },
  //   {
  //     title: "পিৎজা",
  //     img: "https://images.deliveryhero.io/image/fd-bd/LH/cu0zf-listing.jpg",
  //     price: "190",
  //     cutPrice: "200",
  //   },

  //   {
  //     title: "বার্গার",
  //     img: "https://images.deliveryhero.io/image/fd-bd/products/9010848.jpg",
  //     price: "150",
  //     cutPrice: "180",
  //   },
  //   {
  //     title: "বিরিয়ানি",
  //     img: "https://i.postimg.cc/zXBTG8qp/Biriyani1.jpg",
  //     price: "150",
  //     cutPrice: "180",
  //   },
  //   {
  //     title: "পিৎজা",
  //     img: "https://images.deliveryhero.io/image/fd-bd/LH/cu0zf-listing.jpg",
  //     price: "190",
  //     cutPrice: "180",
  //   },
  // ];

  const allFoods = [
    {
      id: "prod001",
      name: "বিরিয়ানি",
      category: "Grocery",
      defaultUnit: "litre",
      variants: [
        {
          id: "v1",
          label: "1 Litre",
          unit: "litre",
          price: 220,
          cutPrice: 250,
          discount: "10 tk",
          qty_step: 1,
          stock: 50,
        },
        {
          id: "v2",
          label: "500 ml",
          unit: "ml",
          price: 120,
          qty_step: 1,
          stock: 100,
        },
      ],

      img: "https://i.postimg.cc/zXBTG8qp/Biriyani1.jpg",
    },
    {
      id: "prod002",
      name: "বার্গার",
      category: "Grocery",
      defaultUnit: "kg",
      variants: [
        {
          id: "v1",
          label: "1 kg",
          unit: "kg",
          price: 40,
          qty_step: 1,
          cutPrice: 250,
          discount: "10%",
          stock: 200,
        },
        {
          id: "v2",
          label: "500 g",
          unit: "g",
          price: 25,
          qty_step: 1,
          stock: 150,
        },
      ],
      img: "https://i.postimg.cc/zXBTG8qp/Biriyani1.jpg",
    },
    {
      id: "prod003",
      name: "নুডুলস",
      category: "Food",
      defaultUnit: "piece",
      variants: [
        {
          id: "small",
          label: "Sm (6 inch)",
          unit: "piece",
          price: 450,
          qty_step: 1,
          stock: 20,
        },
        {
          id: "lg",
          label: "Lg(12 inch)",
          unit: "piece",
          price: 800,
          qty_step: 1,
          stock: 10,
        },
      ],
      img: "https://i.postimg.cc/zXBTG8qp/Biriyani1.jpg",
    },
    {
      id: "prod004",
      name: "পিৎজা",
      category: "Food",
      defaultUnit: "piece",
      variants: [
        {
          id: "v1",
          label: "Single Patty",
          unit: "piece",
          price: 150,
          qty_step: 1,
          stock: 30,
        },
        {
          id: "v2",
          label: "Double Patty",
          unit: "piece",
          price: 250,
          qty_step: 1,
          stock: 15,
        },
      ],
      img: "https://i.postimg.cc/zXBTG8qp/Biriyani1.jpg",
    },
  ];

  // Get all data

  const handleGetallData = async () => {
    const getAllData = await axios.get("http://localhost:3000/api/products");
    console.log("=====>", getAllData);
  };

  useEffect(() => {
    handleGetallData();
  }, []);

  return (
    <div>
      {allTabBtn ? (
        <div className="px-[15px]  flex items-center gap-[10px] overflow-auto scrollbar-hide my-[16px] lg:my-[30px]">
          {allTabBtn?.map((item, i) => (
            <button
              key={i}
              className={` ${
                isTabeButton === item
                  ? "main_bg_color text-white"
                  : " bg-white text_black_color"
              }      border-gray-300 py-[6px] px-[15px]  rounded-[8px] shadow-sm`}
              onClick={() => setIsTabeButton(item)}
            >
              {item}
            </button>
          ))}
        </div>
      ) : (
        <p>NO Item Found !</p>
      )}

      <div className="lg:hidden block">
        {allFoods ? (
          <div className="px-[15px]  flex items-center gap-[16px] overflow-auto scrollbar-hide mb-[16px]">
            {allFoods?.map((item, i) => (
              <FoodCard
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
          {allFoods.map((item, i) => (
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
