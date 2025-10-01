import React, { useEffect, useState } from "react";
import GroceryCard from "../../../Component/GroceryCard/GroceryCard";
import { FaArrowLeft } from "react-icons/fa6";
import { Link } from "react-router";
import SearchInputField from "../../../Component/SearchInputField/SearchInputField";
import Loading from "../../../Component/Loading/Loading";
import axios from "axios";
import Swal from "sweetalert2";
import { useCart } from "../../../Component/CartContext/CartContext";
import { LiaShoppingCartSolid } from "react-icons/lia";
import { TiHomeOutline } from "react-icons/ti";
import { IoIosArrowForward } from "react-icons/io";
import HomeTopNavber from "../../Navber/HomeTopNavber";
import { ToastContainer } from "react-toastify";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";

import { FreeMode, Navigation } from "swiper/modules";

const AllGroseryShope = () => {
  const baseUrl = import.meta.env.VITE_API_URL;
  const baseImageUrl = import.meta.env.VITE_API_URL_IMAGE;
  const [loading, setLoading] = useState(false);
  const { addToCart, totalCardCount } = useCart();
  const [contentloading, setContentLoading] = useState(false);

  const [allSubCategory, setallSubCategory] = useState([]);
  const [singleSubCategory, setSingleSubCategory] = useState([]);

  const [isTabeButton, setIsTabeButton] = useState("সকল");
  const [oldTabButton, setOldTabButton] = useState("");

  const [search, setSearch] = useState("");

  const [subCategory, setSubCategory] = useState("");
  // get sub category
  const handleGetAllSubCategory = async () => {
    setLoading(true);
    try {
      let res = await axios.get(baseUrl + "/subcategoryProductsCount");

      if (res?.data?.success) {
        setallSubCategory(res?.data?.data);
        setSingleSubCategory(res?.data?.data);
        setLoading(false);
        setOldTabButton("");
      }
    } catch (error) {
      Swal.fire(
        "Error!",
        error?.response?.data?.message || "Something went wrong!",
        "error"
      );
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!search) {
      handleGetAllSubCategory();
    }
  }, [search]);

  // filter single sub gategory
  const handleGetSingleSubCategory = async () => {
    setContentLoading(true);
    try {
      let url;

      if (isTabeButton !== "সকল" || search) {
        url = `
          ${baseUrl}/grocerySubCategoryProducts?subCategoryName=${
          (isTabeButton !== "সকল" && isTabeButton) || search
        }`;
      }

      const res = await axios.get(url);

      if (res?.data?.success) {
        setSingleSubCategory(res?.data?.categories);
        setContentLoading(false);
      }
    } catch (error) {
      Swal.fire(
        "Error!",
        error?.response?.data?.message || "Something went wrong!",
        "error"
      );
      setContentLoading(false);
    } finally {
      setContentLoading(false);
    }
  };

  useEffect(() => {
    if (isTabeButton !== "সকল" || search) {
      handleGetSingleSubCategory(search);
    }
  }, [isTabeButton, search]);

  function calculateDiscountPercentageFromDiscount(price, discountAmount) {
    if (!price || !discountAmount || price === 0) return 0;

    const discount = (discountAmount / price) * 100;
    return Math.round(discount);
  }

  return (
    <>
      {" "}
      {loading ? (
        <div className="lg:h-screen">
          <Loading />
        </div>
      ) : (
        <div className="mb-[16px]">
          <div className="hidden  lg:mt-[90px] px-[16px] lg:flex items-center gap-[10px]">
            <TiHomeOutline className="text-[25px] text-[#6b7280]" />
            <Link to={"/"} className="text-[#6b7280] hover:underline">
              হোম
            </Link>
            <IoIosArrowForward className="text-[#6b7280]" />
            <h2>অল ক্যাটাগরি</h2>
          </div>

          <HomeTopNavber />

          <div className="bg-white h-[65px]   px-[15px] top_header_shadow flex items-center justify-between lg:hidden">
            <Link to={"/"} className="flex items-center gap-[15px]">
              <FaArrowLeft className="bg-white text-[20px] text-[#6b7280]" />
              <h2 className="bg-white font-bold text-[14px] text-[#6b7280]">
                সকল আইটেম
              </h2>
            </Link>
            <Link to={"/card"} className="relative">
              <LiaShoppingCartSolid className="bg-white text-[35px] text-[#6b7280]" />
              {totalCardCount > 0 && (
                <span className="absolute top-0 -right-[5px] text-[#fff] z-[20] text-[10px] bg-[#ff6347] rounded-full h-[15px] w-[15px] flex items-center justify-center">
                  {totalCardCount}
                </span>
              )}
            </Link>
          </div>
          <div className="bg-white h-[80px] text-center flex items-center justify-center relative lg:hidden ">
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
          <div className="mt-[60px] lg:mt-[30px] px-[15px]">
            <SearchInputField value={search} setValue={setSearch} />
          </div>

          {/*  */}

          <div>
            {!search && allSubCategory && (
              <div className="px-[15px] flex items-center gap-[10px] overflow-auto scrollbar-hide my-[16px] lg:hidden">
                <button
                  className={` ${
                    isTabeButton === "সকল"
                      ? "main_bg_color text-white"
                      : " bg-white text_black_color"
                  }    border-gray-300 py-[6px] px-[15px]  rounded-[8px] shadow-sm whitespace-nowrap`}
                  onClick={() => {
                    setIsTabeButton("সকল");
                    handleGetAllSubCategory();
                  }}
                >
                  সকল
                </button>
                {allSubCategory?.map((item, i) => (
                  <button
                    key={i}
                    className={` ${
                      isTabeButton === item?.name || item?.name === oldTabButton
                        ? "main_bg_color text-white"
                        : " bg-white text_black_color"
                    }      border-gray-300 py-[6px] px-[15px]  rounded-[8px] shadow-sm whitespace-nowrap`}
                    onClick={() => {
                      setIsTabeButton(item?.name);
                      setSubCategory(item?.name);
                    }}
                  >
                    {item?.name}
                  </button>
                ))}
              </div>
            )}

            <div className="lg:block hidden px-[70px] relative ">
              <div className="horizontal-menu-wrapper relative ">
                {" "}
                {/* Add horizontal padding here */}
                <Swiper
                  slidesPerView={"auto"}
                  spaceBetween={10}
                  freeMode={true}
                  navigation={{
                    nextEl: ".custom-next",
                    prevEl: ".custom-prev",
                  }}
                  modules={[FreeMode, Navigation]}
                  className="horizontal-menu-swiper "
                >
                  {/* "সকল" button */}
                  <SwiperSlide className="menu-slide">
                    <button
                      className={` ${
                        isTabeButton === "সকল"
                          ? "main_bg_color text-white"
                          : " bg-white text_black_color"
                      } border-gray-300 py-[6px] px-[15px] rounded-[8px] shadow-sm whitespace-nowrap`}
                      onClick={() => {
                        setIsTabeButton("সকল");
                        handleGetAllSubCategory();
                      }}
                    >
                      সকল
                    </button>
                  </SwiperSlide>

                  {/* Dynamic buttons */}
                  {allSubCategory.map((item, index) => (
                    <SwiperSlide key={index} className="menu-slide">
                      <button
                        onClick={() => {
                          setOldTabButton("");
                          setIsTabeButton(item?.name);
                          setSubCategory(item?.name);
                        }}
                        className={`${
                          isTabeButton === item?.name ||
                          item?.name === oldTabButton
                            ? "main_bg_color text-white"
                            : "bg-white text_black_color"
                        } border-gray-300 py-[6px] px-[15px] rounded-[8px] shadow-sm whitespace-nowrap`}
                      >
                        {item?.name}
                      </button>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              {/* Custom Prev Button */}
              <div className="custom-prev absolute left-[30px] top-1/2 -translate-y-1/2 bg-white w-10 h-10 flex items-center justify-center rounded-full shadow cursor-pointer hover:bg-gray-100 transition z-[100]">
                <IoIosArrowForward className="rotate-180" />
              </div>

              {/* Custom Next Button */}
              <div className="custom-next absolute right-[30px] top-1/2 -translate-y-1/2 bg-white w-10 h-10 flex items-center justify-center rounded-full shadow cursor-pointer hover:bg-gray-100 transition z-[100]">
                <IoIosArrowForward />
              </div>
            </div>

            {/* all content  */}

            {contentloading ? (
              <div className="lg:pt-[400px]">
                <Loading />
              </div>
            ) : (
              <>
                {singleSubCategory && singleSubCategory?.length > 0 ? (
                  <div className="grid grid-cols-2 lg:grid-cols-5 gap-[20px] bg-white  p-[20px] mt-[16px] lg:mb-[20px]">
                    {singleSubCategory?.map((item, i) => (
                      <>
                        {" "}
                        {!item?.status ? (
                          <GroceryCard
                            style_clss={{
                              heigh: "h-[100px]",
                            }}
                            item={item}
                            setIsTabeButton={setIsTabeButton}
                            isTabeButton={isTabeButton}
                            setOldTabButton={setOldTabButton}
                          />
                        ) : (
                          <div
                            key={i}
                            className="bg-white rounded-[15px] relative border"
                          >
                            {/* Discount Badge */}
                            {item?.variants?.[0]?.price &&
                              item?.variants?.[0]?.discount && (
                                <div className="absolute top-[20px] left-0 bg-[#ff6347] text-[12px] text-white px-[10px] py-[5px] rounded-r-[10px] shadow-md">
                                  {calculateDiscountPercentageFromDiscount(
                                    item.variants[0].price,
                                    item.variants[0].discount
                                  )}
                                  % OFF
                                </div>
                              )}

                            {/* Product Image */}
                            <div
                              onClick={() => setIsFullImageOpen(true)}
                              className="h-[130px] w-full object-cover rounded-t-[15px] overflow-hidden"
                            >
                              <img
                                className="h-full w-full  rounded-t-[15px]"
                                src={baseImageUrl + "/" + item?.img}
                                alt={item?.name}
                              />
                            </div>

                            {/* Product Info */}
                            <div className="bg-white rounded-b-[15px] w-full p-[10px]">
                              <h2 className="text-[14px] font-bold text-[#4f4a4a] text-center mb-[10px]">
                                {item?.name}{" "}
                              </h2>
                              <h2 className="text-[10px] text-center font-bold text-[#4f4a4a]">
                                {item?.variants?.[0]?.label}
                              </h2>

                              <div className="flex items-center justify-center gap-[10px]">
                                {/* Cut Price */}
                                {item?.variants?.[0]?.cutPrice && (
                                  <h2 className="font-extrabold text-gray-500 line-through text-[18px]">
                                    ৳ {item.variants[0].cutPrice}
                                  </h2>
                                )}

                                {/* Price */}
                                <h2 className="font-extrabold main_color text-[18px]">
                                  ৳ {item?.variants?.[0]?.price}
                                </h2>
                              </div>

                              <button
                                onClick={() => addToCart(item)}
                                className="main_bg_color text-white py-[5px] px-[30px] rounded-[8px] shadow-sm w-full mt-[16px]"
                              >
                                Add
                              </button>
                            </div>
                          </div>
                        )}{" "}
                      </>
                    ))}
                  </div>
                ) : (
                  <div className="text-center mt-10 px-[16px] lg:max-w-[500px] mx-auto lg:mb-[100px]">
                    <p className="text-gray-600 mt-[10px] text-[14px] ">
                      দুঃখিত! আপনার খোঁজা আইটেমটি আমরা এই মুহূর্তে খুঁজে পাইনি।
                      আপনি চাইলে আমাদের সাথে হোয়াটসঅ্যাপে যোগাযোগ করতে পারেন,
                      আমরা আপনার প্রয়োজন অনুযায়ী সর্বোচ্চ চেষ্টা করব আইটেমটি
                      সরবরাহ করতে।
                    </p>
                    <a
                      href="https://wa.me/8801996359111"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-4 bg-green-500 text-white px-5 py-2 rounded-lg shadow hover:bg-green-600 transition"
                    >
                      WhatsApp এ মেসেজ করুন
                    </a>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      )}
      {/* <ToastContainer /> */}
    </>
  );
};

export default AllGroseryShope;
