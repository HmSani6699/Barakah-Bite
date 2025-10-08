import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";
import { useCart } from "../CartContext/CartContext";

const FoodCard = ({ height, item }) => {
  const baseImageUrl = import.meta.env.VITE_API_URL_IMAGE;
  const [isFullImageOpen, setIsFullImageOpen] = useState(false);
  const { addToCart } = useCart();

  function calculateDiscountPercentageFromDiscount(price, discountAmount) {
    if (!price || !discountAmount || price === 0) return 0;

    const discount = (discountAmount / price) * 100;
    return Math.round(discount);
  }

  return (
    <div className="">
      <div className="bg-white rounded-[15px] min-w-[240px] lg:w-full relative border cursor-pointer">
        {item?.variants?.[0]?.price && item?.variants?.[0]?.discount ? (
          <div className="absolute top-[20px] left-0 bg-[#ff6347] text-[12px] text-white px-[10px] py-[5px] rounded-r-[10px] shadow-md">
            {calculateDiscountPercentageFromDiscount(
              item?.variants[0]?.price,
              item?.variants[0]?.discount
            )}
            % OFF
          </div>
        ) : null}

        {/* <div className="absolute top-[60px] left-0 bg-[#1c8645] text-[12px] text-white px-[10px] py-[5px] rounded-r-[10px] shadow-md">
          Sold Out
        </div> */}
        <div
          onClick={() => setIsFullImageOpen(true)}
          className={`${height} bg-white rounded-t-[15px] w-full object-cover`}
        >
          <img
            className="h-full w-full bg-cover rounded-t-[15px]"
            src={baseImageUrl + "/" + item?.img}
            alt=""
          />
        </div>

        {/* boday */}
        <div className=" bg-white rounded-b-[15px] w-full p-[10px]">
          <h2 className="bg-white text-[18px] font-bold  text-[#4f4a4a]">
            {item?.name}{" "}
            <span className="text-[10px]">
              ( {item?.variants?.[0]?.label} )
            </span>
          </h2>
          <div className="flex items-center gap-[4px] bg-white ">
            <div className="h-[30px] w-[30px] rounded-full  border-[3px] border-white">
              <img
                className="h-full w-full rounded-full"
                src="https://i.postimg.cc/zXBTG8qp/Biriyani1.jpg"
                alt="logo"
              />
            </div>
            <div className="flex items-center gap-[10px] bg-white">
              <h2 className="text-[14px]  bg-white whitespace-nowrap text-gray-500">
                {item?.shop?.name}
              </h2>
              <div className="flex items-center bg-white gap-[10px]">
                <p>
                  <FaStar className="text-[#ff6347] bg-white" />
                </p>
                <p className="bg-white text-gray-500 font-semibold"> 5.5</p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between bg-white rounded-b-[15px] pt-[8px] w-full">
            <div className="flex items-center gap-[10px] bg-white">
              <h2 className="bg-white font-extrabold p-0 text-gray-500 line-through text-[18px]">
                {item?.variants?.[0]?.cutPrice && (
                  <div>
                    <span className=" font-extrabold  bg-white p-0">৳</span>{" "}
                    {item?.variants?.[0]?.cutPrice}
                  </div>
                )}
              </h2>

              <h2 className="bg-white font-extrabold p-0 main_color text-[18px]">
                <span className="font-extrabold  bg-white p-0">৳</span>{" "}
                {item?.variants?.[0]?.price}
              </h2>
            </div>
            <button
              onClick={() => addToCart(item)}
              className={`main_bg_color text-white  py-[5px] px-[30px] 
        rounded-[8px] shadow-sm `}
            >
              Add
            </button>
          </div>
        </div>
      </div>
      {/* Open Full image model */}
      {isFullImageOpen && (
        <div className="fixed inset-0 bg-[#000000d9] z-[200] flex items-center justify-center">
          <div className=" mx-[15px] p-[20px] rounded-[10px]">
            <div className="flex items-end justify-end mb-[20px]">
              <IoMdCloseCircle
                onClick={() => setIsFullImageOpen(false)}
                className="text-white text-[30px]"
              />
            </div>
            <div>
              <img
                className="h-full w-full rounded-[10px]"
                src="https://i.postimg.cc/zXBTG8qp/Biriyani1.jpg"
                alt="logo"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FoodCard;
