import { FaArrowLeft } from "react-icons/fa6";
import { Link } from "react-router";
import FoodCard from "../FoodCard/FoodCard";
import SearchInputField from "../SearchInputField/SearchInputField";
import { HiShoppingCart } from "react-icons/hi";
import { LiaShoppingCartSolid } from "react-icons/lia";
import { MdVerified } from "react-icons/md";
import { useState } from "react";

const ShopeProfile = () => {
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
    <div className="mb-[120px] relative">
      <div className="bg-white h-[65px]   px-[15px] top_header_shadow flex items-center justify-between">
        <Link to={"/"} className="flex items-center gap-[15px]">
          <FaArrowLeft className="bg-white text-[20px] text-[#6b7280]" />
          <h2 className="bg-white font-bold text-[16px] text-[#6b7280]">
            Barakha Mart
          </h2>
        </Link>
        <LiaShoppingCartSolid className="bg-white text-[35px] text-[#6b7280]" />
      </div>

      <div className="bg-white h-[80px] text-center flex items-center justify-center relative">
        <img
          className="h-full w-full object-cover"
          src="https://i.postimg.cc/QNH0fRzB/download-3.jpg"
          alt="banner"
        />
      </div>

      <div className="px-[20px] absolute top-[110px] left-0 w-full">
        <div className="h-[80px] w-[80px] rounded-full  border-[4px] border-[#eff1f1] shadow-md ">
          <img
            className="h-full w-full rounded-full"
            src="https://i.postimg.cc/QNH0fRzB/download-3.jpgg"
            alt="logo"
          />
        </div>

        <div className="flex items-center gap-[15px]">
          <h2 className=" font-bold text-[16px] text-[#171717]">
            Barakha Mart
          </h2>

          <MdVerified className="text-blue-600 text-[20px]" />

          <button className="py-[5px] px-[20px] rounded-[8px] bg-[#ff6347] text-white">
            Follow
          </button>
        </div>
        <p className="text-gray-600">10 followers</p>
        <hr className="mt-[20px]" />
      </div>

      <div className="px-[15px] mt-[135px]">
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

        {allFoods ? (
          <div className="px-[15px] mt-[20px] flex flex-col gap-[20px] mb-[20px]">
            {allFoods?.map((item, i) => (
              <FoodCard height="h-[190px]" item={item} />
            ))}
          </div>
        ) : (
          <div>
            <h1>Item Not Found !</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShopeProfile;
