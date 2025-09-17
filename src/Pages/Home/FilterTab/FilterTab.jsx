import { useState } from "react";
import FoodCard from "../../../Component/FoodCard/FoodCard";

const FilterTab = ({ setIsFullImageOpen }) => {
  const [isTabeButton, setIsTabeButton] = useState("সকল");
  const allTabBtn = ["সকল", "বিরিয়ানি", "বার্গার", "নুডুলস", "পিৎজা", "পানীয়"];

  const allFoods = [
    {
      title: "বিরিয়ানি",
      img: "https://i.postimg.cc/zXBTG8qp/Biriyani1.jpg",
      price: "150",
      cutPrice: "180",
    },
    {
      title: "পিৎজা",
      img: "https://images.deliveryhero.io/image/fd-bd/LH/cu0zf-listing.jpg",
      price: "190",
      cutPrice: "200",
    },

    {
      title: "বার্গার",
      img: "https://images.deliveryhero.io/image/fd-bd/products/9010848.jpg",
      price: "150",
      cutPrice: "180",
    },
    {
      title: "বিরিয়ানি",
      img: "https://i.postimg.cc/zXBTG8qp/Biriyani1.jpg",
      price: "150",
      cutPrice: "180",
    },
    {
      title: "পিৎজা",
      img: "https://images.deliveryhero.io/image/fd-bd/LH/cu0zf-listing.jpg",
      price: "190",
      cutPrice: "180",
    },
  ];

  return (
    <div>
      {allTabBtn ? (
        <div className="px-[15px] flex items-center gap-[10px] overflow-auto scrollbar-hide my-[16px]">
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

      {allFoods ? (
        <div className="px-[15px]  flex items-center gap-[16px] overflow-auto scrollbar-hide mb-[16px]">
          {allFoods?.map((item, i) => (
            <FoodCard
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
  );
};

export default FilterTab;
