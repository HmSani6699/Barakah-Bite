import React, { useState } from "react";
import GroceryCard from "../../../Component/GroceryCard/GroceryCard";
import { FaArrowLeft } from "react-icons/fa6";
import { Link } from "react-router";
import SearchInputField from "../../../Component/SearchInputField/SearchInputField";

const AllGroseryShope = () => {
  const [isTabeButton, setIsTabeButton] = useState("সকল");
  const allTabBtn = ["সকল", "বিরিয়ানি", "বার্গার", "নুডুলস", "পিৎজা", "পানীয়"];

  const allItems = [
    {
      title: "রান্নার উপকরণ",
      img: "https://i.postimg.cc/0jC2VnwK/cooking.webp",
      items: "10",
    },
    {
      title: "শাক-সবজি",
      img: "https://i.postimg.cc/m2qK0MyP/fresh-vegetables.webp",
      items: "10",
    },
    {
      title: "মাছ ও মাংস",
      img: "https://i.postimg.cc/VvsdQ21W/meat-fish.webp",
      items: "10",
    },
    {
      title: "তাজা ফল",
      img: "https://i.postimg.cc/CMcB0Mty/fresh-fruits.webp",
      items: "10",
    },
    {
      title: "সস ও আচার",
      img: "https://i.postimg.cc/5txc3Jmg/sauces-pickles.webp",
      items: "10",
    },
    {
      title: "দুধজাত ও ডিম",
      img: "https://i.postimg.cc/634N70cx/dairy-eggs.webp",
      items: "10",
    },
    {
      title: "পানীয় ও জুস",
      img: "https://i.postimg.cc/k5Fb0QK9/beverages.webp",
      items: "10",
    },
    {
      title: "নানান খাবার",
      img: "https://i.postimg.cc/pX6YCJY6/snacks.webp",
      items: "10",
    },
  ];

  return (
    <div className="mb-[16px]">
      <Link to={"/"}>
        <div className="bg-white h-[65px]  flex items-center gap-[15px] px-[15px] top_header_shadow">
          <FaArrowLeft className="bg-white text-[20px] text-[#6b7280]" />
          <h2 className="bg-white font-bold text-[16px] text-[#6b7280]">
            Barakha Mart
          </h2>
        </div>
      </Link>
      <div className="bg-white h-[80px] text-center flex items-center justify-center relative">
        <img
          className="h-full w-full object-cover"
          src="https://i.postimg.cc/QNH0fRzB/download-3.jpg"
          alt="banner"
        />

        <div className="h-[65px] w-[65px] rounded-full  border-[4px] border-[#eff1f1] -mb-[90px] shadow-md absolute">
          <img
            className="h-full w-full rounded-full"
            src="https://i.postimg.cc/QNH0fRzB/download-3.jpgg"
            alt="logo"
          />
        </div>
      </div>
      <div className="mt-[60px] px-[15px]">
        <SearchInputField />
      </div>

      {/*  */}

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

        <div className="grid grid-cols-3 gap-[20px] bg-white  p-[20px] mt-[16px]">
          {allItems &&
            allItems?.map((item, i) => (
              <GroceryCard
                style_clss={{
                  heigh: "h-[100px]",
                }}
                item={item}
                url={"/grocery-itms"}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default AllGroseryShope;
