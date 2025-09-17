import SearchInputField from "../SearchInputField/SearchInputField";
import { FaArrowLeft } from "react-icons/fa6";
import { Link } from "react-router";
import GroceryCard from "../GroceryCard/GroceryCard";
import { useState } from "react";

const GroceryCategoryCard = () => {
  const [isTabeButton, setIsTabeButton] = useState("চাউল");

  const allItems = [
    {
      title: "চাউল",
      img: "https://i.postimg.cc/MGcDnyd1/rice.webp",
      items: "10",
      url: "/grocery-itms/চাউল",
    },
    {
      title: "লবণ ও চিনি",
      img: "https://i.postimg.cc/RFBHvf8S/salt-sugar.webp",
      items: "10",
      url: "/grocery-itms/লবণ ও চিনি",
    },
    {
      title: "ডাল বা মসুর ডাল",
      img: "https://i.postimg.cc/QxtWNj6T/dal-or-lentil.webp",
      items: "10",
    },
    {
      title: "তেল",
      img: "https://i.postimg.cc/QCnCKW6W/oil.webp",
      items: "10",
    },
    {
      title: "মশলা",
      img: "https://i.postimg.cc/T1S23vwV/spices.webp",
      items: "10",
    },
    {
      title: "শেমাই ও সুজি",
      img: "https://i.postimg.cc/TYzY8xBG/shemai-suji.webp",
      items: "10",
    },
    {
      title: "রেডি মিক্স",
      img: "https://i.postimg.cc/138CFhzg/ready-mix.webp",
      items: "10",
    },
  ];

  const allTabButton = [
    "চাউল",
    "লবণ ও চিনি",
    "তেল",
    "মশলা",
    "শেমাই ও সুজি",
    "রেডি মিক্স",
  ];

  return (
    <div className="mb-[16px]">
      <div className="bg-white h-[65px]   px-[15px] top_header_shadow flex items-center justify-between">
        <Link to={"/"} className="flex items-center gap-[15px]">
          <FaArrowLeft className="bg-white text-[20px] text-[#6b7280]" />
          <h2 className="bg-white font-bold text-[16px] text-[#6b7280]">
            Barakha Mart
          </h2>
        </Link>
      </div>

      <h2 className=" font-bold text-[20px] mt-[16px] text-center">
        রান্নার উপকরণ
      </h2>
      <p className="text-[#ff6347] text-[12px] text-center"> ( 10 আইটেম )</p>

      <div className="mt-[16px] px-[15px]">
        <SearchInputField />
      </div>

      {/*  */}

      <div>
        {allTabButton ? (
          <div className="px-[15px] flex items-center gap-[16px] overflow-auto scrollbar-hide  mt-[16px]">
            {allTabButton?.map((item, i) => (
              <button
                key={i}
                className={` ${
                  isTabeButton === item
                    ? "main_bg_color text-white"
                    : " bg-white text_black_color"
                }     border-[1px] border-gray-300 py-[6px] px-[20px]  rounded-[8px] shadow-sm whitespace-nowrap`}
                onClick={() => setIsTabeButton(item)}
              >
                {item}
              </button>
            ))}
          </div>
        ) : (
          <p>NO Item Found !</p>
        )}

        {/* card */}
        <div className="grid grid-cols-2 gap-[16px]  rounded-[15px] p-[16px] ">
          {allItems?.map((item) => (
            <GroceryCard
              style_clss={{
                heigh: "h-[130px]",
                rounded: "rounded-[10px]",
                bg: "bg-white",
                padding: "px-[4px] pb-[20px]",
              }}
              item={item}
              url={item.url}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GroceryCategoryCard;
