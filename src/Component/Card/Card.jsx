import { GrSubtract } from "react-icons/gr";
import { FiPlus } from "react-icons/fi";
import { useCart } from "../CartContext/CartContext";
import { FaArrowLeft, FaPlus } from "react-icons/fa6";
import { Link } from "react-router";
import { LiaShoppingCartSolid } from "react-icons/lia";
import { RiDeleteBin6Line, RiFileList2Line } from "react-icons/ri";
import { useEffect, useState } from "react";
import nolistImage from "../../../public/images/noList.png";
import { ToastContainer } from "react-toastify";
import { TiHomeOutline } from "react-icons/ti";
import { IoIosArrowForward } from "react-icons/io";
import HomeTopNavber from "../../Pages/Navber/HomeTopNavber";

const Cart = () => {
  const baseImageUrl = import.meta.env.VITE_API_URL_IMAGE;
  const { cartItems, removeItem, totalCardCount, updateCart } = useCart();

  const [subTotal, setSubTotal] = useState(0);
  const [grandTotal, setGrandTotal] = useState(0);

  // ✅ Subtotal & GrandTotal Calculation
  useEffect(() => {
    if (cartItems?.length > 0) {
      const sub = cartItems.reduce((acc, item) => {
        const selectedVariant =
          item.selectedVariant ||
          item.variants.find((v) => v._id === item.variantId) ||
          item.variants[0];

        return acc + selectedVariant.price * item.quantity;
      }, 0);

      setSubTotal(sub);
      setGrandTotal(sub); // এখানে future এ delivery charge, discount ইত্যাদি add করতে পারবে
    } else {
      setSubTotal(0);
      setGrandTotal(0);
    }
  }, [cartItems]);

  // ✅ Increase Function
  const increaseQuantity = (item) => {
    const updatedItem = { ...item, quantity: item.quantity + 1 };

    updateCart(updatedItem);
    const audio = new Audio("/public/images/calculet.mp3");
    audio.play();
  };

  // ✅ Decrease Function
  const decreaseQuantity = (item) => {
    if (item.quantity > 1) {
      const updatedItem = { ...item, quantity: item.quantity - 1 };
      updateCart(updatedItem);
      const audio = new Audio("/public/images/calculet.mp3");
      audio.play();
    }
  };

  // ✅ Variant Change Function
  const handleVariantChange = (item, variantId) => {
    const selectedVariant = item.variants.find((v) => v._id === variantId);
    const updatedItem = { ...item, selectedVariant };
    updateCart(updatedItem);
  };

  // const paylod
  const orderPayload = {
    items: cartItems.map((item) => {
      const variant =
        item.selectedVariant ||
        item.variants.find((v) => v._id === item.variantId) ||
        item.variants[0];

      return {
        productId: item._id,
        img: item?.img,
        productName: item.name,
        variantId: variant._id,
        variantName: variant.label,
        quantity: item.quantity,
        pricePerUnit: variant.price,
        totalPrice: item.quantity * variant.price,
        shopId: item?.shop?._id ? item?.shop?._id : item?.shop,
      };
    }),
    subtotal: subTotal,
    totalAmount: grandTotal,
  };

  return (
    <>
      <div className="relative">
        <div className="bg-white h-[65px]   px-[15px] top_header_shadow flex items-center justify-between lg:hidden">
          <Link to={"/"} className="flex items-center gap-[15px]">
            <FaArrowLeft className="bg-white text-[20px] text-[#6b7280]" />
            <h2 className="bg-white font-bold text-[16px] text-[#6b7280]">
              আমার কার্ট
            </h2>
          </Link>

          <div className="relative">
            <LiaShoppingCartSolid className="bg-white text-[35px] text-[#6b7280]" />
            {totalCardCount > 0 && (
              <div className="h-[15px] w-[15px] rounded-full bg-[#ff6347] flex items-center justify-center absolute top-0 right-0 text-white text-[10px] ">
                <h2>{totalCardCount}</h2>
              </div>
            )}
          </div>
        </div>

        <HomeTopNavber />
        <div className="hidden  lg:mt-[90px] px-[16px] lg:flex items-center gap-[10px]">
          <TiHomeOutline className="text-[25px] text-[#6b7280]" />
          <Link to={"/"} className="text-[#6b7280] hover:underline">
            হোম
          </Link>
          <IoIosArrowForward className="text-[#6b7280]" />
          <h2>নির্বাচিত আইটেম</h2>
        </div>

        <div className="lg:w-[500px] mx-auto">
          {/* All items */}
          {cartItems?.length > 0 ? (
            <div className="mt-[16px] flex flex-col gap-[16px]">
              {cartItems?.map((item) => {
                const selectedVariant =
                  item.selectedVariant ||
                  item.variants.find((v) => v._id === item._id) ||
                  item.variants[0];

                return (
                  <div
                    key={item._id}
                    className="flex gap-[6px]  bg-white rounded-[10px] p-4 relative shadow-sm overflow-hidden"
                  >
                    <div className="h-[70px] w-[30%] rounded-[10px] border-2 border-[#eff1f1] overflow-hidden">
                      <img
                        src={baseImageUrl + "/" + item.img}
                        alt={item.name}
                        className="h-full w-full object-cover"
                      />
                    </div>

                    <div className="w-full">
                      <div className="flex  justify-between  w-full">
                        <p className="font-semibold text-[14px] text-[#404040]">
                          {item.name}
                        </p>
                        <button
                          onClick={() => removeItem(item)}
                          className="-mt-[15px]"
                        >
                          <RiDeleteBin6Line className="text-red-500 text-[20px]" />
                        </button>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex flex-col  mt-1">
                          {selectedVariant.cutPrice && (
                            <span className="text-gray-400 line-through text-[14px]">
                              ৳{selectedVariant.cutPrice}
                            </span>
                          )}
                          <span
                            className={` text-main_color font-bold text-sm`}
                          >
                            ৳{selectedVariant.price}
                          </span>
                        </div>

                        {/* ✅ Variant Select */}
                        <select
                          className={`border border-gray-300 rounded px-1 py-1 text-[10px] outline-none ${
                            !selectedVariant.cutPrice && "mt-[15px]"
                          }`}
                          value={selectedVariant._id}
                          onChange={(e) =>
                            handleVariantChange(item, e.target.value)
                          }
                        >
                          {item.variants.map((v) => (
                            <option key={v._id} value={v._id}>
                              {v.label} - ৳ {v.price}
                            </option>
                          ))}
                        </select>

                        {/* ✅ Quantity Control */}
                        <div
                          className={`flex items-center gap-2 border rounded-full ${
                            !selectedVariant.cutPrice && "mt-[15px]"
                          }`}
                        >
                          <button
                            onClick={() => decreaseQuantity(item)}
                            className="bg-gray-200 rounded-full p-[5px] text-[15px]"
                          >
                            <GrSubtract />
                          </button>
                          <span className="w-[15px] text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => increaseQuantity(item)}
                            className="bg-gray-200 rounded-full p-[5px] text-[15px]"
                          >
                            <FiPlus />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="text-center my-[30px] lg:mt-[50px] lg:h-screen">
              <img className="w-[400px] h-full" src={nolistImage} alt="" />
              <h2 className="mt-[20px]">কোনো আইটেম এখনো যোগ করা হয়নি।</h2>
              <div className=" flex items-center justify-center mt-[16px]">
                <Link
                  to={"/"}
                  className=" rounded-[10px]  text-white  px-[25px] py-[8px]  flex items-center justify-center gap-[10px] border-[2px] border-[#ff6347] bg-[#ff6347]  "
                >
                  <FaPlus />
                  নতুন আইটেম যোগ করুন
                </Link>
              </div>
            </div>
          )}
        </div>

        {totalCardCount > 0 && (
          <div className="fixed lg:relative lg:mb-[50px] lg:mt-[20px] lg:w-[500px] lg:mx-auto bottom-0 left-0 w-full flex items-center justify-between bg-white px-[16px] py-[16px]">
            <button className="text-[14px] font-semibold">
              সাব-টোটাল:
              <span className="text-[#ff6347]">
                <span className="font-extrabold bg-[#ffffff80]"> ৳ </span>
                {subTotal}
              </span>
            </button>
            <Link
              to={"/checkOut"}
              state={orderPayload}
              className="text-[14px] bg-[#ff6347] text-white px-[20px] py-[8px] rounded-[8px]"
            >
              চেকআউটে এগিয়ে যান
            </Link>
          </div>
        )}
      </div>
      <ToastContainer />
    </>
  );
};

export default Cart;
