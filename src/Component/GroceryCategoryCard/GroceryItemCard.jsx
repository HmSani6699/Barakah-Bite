import SearchInputField from "../SearchInputField/SearchInputField";
import { FaArrowLeft } from "react-icons/fa6";
import { Link } from "react-router";
import GroceryCard from "../GroceryCard/GroceryCard";
import { useState } from "react";

const GroceryItemCard = () => {
  const [isTabeButton, setIsTabeButton] = useState("চাউল");

  const allItems = [
    {
      title: "চাউল",
      img: "https://i.postimg.cc/RFQ1n9nz/chashi-aromatic-chinigura-rice-2-kg.webp",
      items: "10",
      url: "/grocery_shop_card/চাউল",
    },
    {
      title: "লবণ ও চিনি",
      img: "https://i.postimg.cc/RFBHvf8S/salt-sugar.webp",
      items: "10",
      url: "/grocery_shop_card/লবণ ও চিনি",
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
    <div className="mb-[120px]">
      <Link to={"/"}>
        <div className="bg-white h-[65px]  flex items-center gap-[15px] px-[15px] top_header_shadow">
          <FaArrowLeft className="bg-white text-[20px]" />
          <h2 className="bg-white text-[#171717] font-semibold text-[18px]">
            Barakha Mart
          </h2>
        </div>
      </Link>

      <h2 className=" font-bold text-[20px] mt-[20px] text-center text-[#171717]">
        চাউল
      </h2>
      <p className="text-[#ff6347] text-[12px] text-center"> ( 10 আইটেম )</p>

      <div className="mt-[20px] px-[15px]">
        <SearchInputField />
      </div>

      {/*  */}

      <div>
        {allTabButton ? (
          <div className="px-[15px] flex items-center gap-[20px] overflow-auto scrollbar-hide  mt-[20px]">
            {allTabButton?.map((item, i) => (
              <button
                key={i}
                className={` ${
                  isTabeButton === item
                    ? "main_bg_color text-white"
                    : " bg-white text_black_color"
                }     border-[1px] border-gray-300 py-[6px] px-[20px]  rounded-full shadow-sm whitespace-nowrap`}
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
        <div className="grid grid-cols-2 gap-[20px]  rounded-[15px] p-[20px] ">
          {allItems?.map((item) => (
            <div className="bg-white rounded-[15px]  relative">
              <div className="absolute top-[15px] left-0 bg-[#ff6347] text-[12px] text-white px-[10px] py-[5px] rounded-r-[10px]">
                10 % OFF
              </div>
              <div
                className={`h-[150px] bg-white rounded-t-[15px] w-full object-cover`}
              >
                <img
                  className="h-full w-full bg-cover rounded-t-[15px]"
                  src={item?.img}
                  alt=""
                />
              </div>

              {/* boday */}
              <div className="px-[15px] bg-white rounded-b-[15px] w-full">
                <h2 className="bg-white text-[14px] font-bold pt-[5px]">
                  {item?.title}
                </h2>

                <div className=" bg-white pb-[15px] rounded-b-[15px] w-full">
                  <div className="flex items-center justify-between mb-[6px]">
                    <div className="flex items-center gap-[10px] bg-white">
                      <h2 className="bg-white font-extrabold p-0 text-gray-500 line-through text-[14px]">
                        <span className=" font-extrabold  bg-white p-0">৳</span>{" "}
                        250
                      </h2>

                      <h2 className="bg-white font-extrabold p-0 main_color text-[14px]">
                        <span className="font-extrabold  bg-white p-0">৳</span>{" "}
                        200
                      </h2>
                    </div>
                    <h2 className="bg-white font-extrabold  main_color text-[14px]">
                      1 kg
                    </h2>
                  </div>
                  <button
                    className={`main_bg_color text-white border-[1px] border-gray-300 py-[4px] px-[30px] 
                        rounded-[8px] shadow-sm  w-full text-[14px]`}
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GroceryItemCard;
