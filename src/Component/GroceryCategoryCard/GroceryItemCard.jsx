import { FaArrowLeft } from "react-icons/fa6";
import { Link, useParams } from "react-router";
import { useEffect, useState } from "react";
import { LiaShoppingCartSolid } from "react-icons/lia";
import { useCart } from "../CartContext/CartContext";
import axios from "axios";
import Swal from "sweetalert2";
import Loading from "../Loading/Loading";
import { ToastContainer } from "react-toastify";
import HomeTopNavber from "../../Pages/Navber/HomeTopNavber";
import { IoIosArrowForward } from "react-icons/io";
import { TiHomeOutline } from "react-icons/ti";

const GroceryItemCard = () => {
  const baseUrl = import.meta.env.VITE_API_URL;
  const baseImageUrl = import.meta.env.VITE_API_URL_IMAGE;
  const { addToCart, totalCardCount } = useCart();

  const paramsTitle = useParams();

  const [isTabeButton, setIsTabeButton] = useState("সকল");

  const { category } = useParams();
  const [pageTitle, setpageTitle] = useState("");
  const [loading, setLoading] = useState(false);
  const [contentLoading, setContentLoading] = useState(false);
  const [allcategoriesTabButton, setAllcategoriesTabButton] = useState([]);
  const [allData, setAllData] = useState([]);

  // get all active restaurant
  const handleGetCategory = async () => {
    setLoading(true);
    try {
      let res = await axios.get(
        `${baseUrl}/productCategoryByTabButton?categoryName=${category}`
      );

      if (res?.data?.success) {
        setAllcategoriesTabButton(res?.data?.data);
        setLoading(false);
        // setpageTitle(res?.data?.data[0]?.name);
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
    handleGetCategory();
  }, []);

  // get all active restaurant
  const handleGetFilterCategory = async () => {
    setContentLoading(true);
    try {
      let url;

      if (isTabeButton === "সকল") {
        url = `${baseUrl}/productCategoryByTabButton?categoryName=${category}`;
      }

      if (isTabeButton !== "সকল") {
        url = `${baseUrl}/searchProduct?productName=${isTabeButton}`;
      }

      let res = await axios.get(url);

      if (res?.data?.success) {
        setAllData(res?.data?.data);
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
    handleGetFilterCategory();
  }, [isTabeButton]);

  console.log(useParams());

  return (
    <div className="mb-[30px]">
      <div className="bg-white h-[65px]   px-[15px] top_header_shadow flex items-center justify-between">
        <Link to={"/categories"} className="flex items-center gap-[15px]">
          <FaArrowLeft className="bg-white text-[20px] text-[#6b7280]" />
          <h2 className="bg-white font-bold text-[16px] text-[#6b7280]">
            {(pageTitle && pageTitle) ||
              (paramsTitle?.category && paramsTitle?.category)}
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

      <HomeTopNavber />

      <div className="hidden  lg:mt-[30px] px-[16px] lg:flex items-center gap-[10px] mb-[30px]">
        <TiHomeOutline className="text-[25px] text-[#6b7280]" />
        <Link to={"/"} className="text-[#6b7280] hover:underline">
          হোম
        </Link>
        <IoIosArrowForward className="text-[#6b7280]" />
        <h2>
          {(pageTitle && pageTitle) ||
            (paramsTitle?.category && paramsTitle?.category)}
        </h2>
      </div>

      <h2 className=" font-bold text-[20px] mt-[16px] text-center text-[#171717]">
        {(pageTitle && pageTitle) ||
          (paramsTitle?.category && paramsTitle?.category)}
      </h2>

      {allcategoriesTabButton?.length > 0 && (
        <p className="text-[#ff6347] text-[12px] text-center">
          ( {allcategoriesTabButton?.length} আইটেম )
        </p>
      )}

      {/* <div className="mt-[16px] px-[15px]">
        <SearchInputField />
      </div> */}

      {/*  */}

      <div>
        {allcategoriesTabButton?.length > 0 && (
          <div className="px-[15px] flex items-center gap-[16px] overflow-auto scrollbar-hide  mt-[20px]">
            <button
              className={` ${
                isTabeButton === "সকল"
                  ? "main_bg_color text-white"
                  : " bg-white text_black_color"
              }      py-[6px] px-[20px]  rounded-[8px] shadow-sm whitespace-nowrap`}
              onClick={() => setIsTabeButton("সকল")}
            >
              সকল
            </button>
            {allcategoriesTabButton?.map((item, i) => (
              <button
                key={i}
                className={` ${
                  isTabeButton === item?.name
                    ? "main_bg_color text-white"
                    : " bg-white text_black_color"
                }      py-[6px] px-[20px]  rounded-[8px] shadow-sm whitespace-nowrap`}
                onClick={() => setIsTabeButton(item?.name)}
              >
                {item?.name}
              </button>
            ))}
          </div>
        )}

        {/* card */}

        {contentLoading ? (
          <Loading />
        ) : (
          <div>
            {" "}
            {allData?.length > 0 ? (
              <div className="grid grid-cols-2 lg:grid-cols-5 gap-[16px]  rounded-[15px] p-[20px] ">
                {allData?.map((item) => (
                  <div className="bg-white rounded-[10px]  relative">
                    {item?.variants?.[0]?.price &&
                    item?.variants?.[0]?.discount ? (
                      <div className="absolute top-[20px] left-0 bg-[#ff6347] text-[12px] text-white px-[10px] py-[5px] rounded-r-[10px] shadow-md">
                        {calculateDiscountPercentageFromDiscount(
                          item?.variants[0]?.price,
                          item?.variants[0]?.discount
                        )}
                        % OFF
                      </div>
                    ) : null}
                    {/* <div className="absolute top-[50px] left-0 bg-[#1e9947] text-[10px] text-white px-[10px] py-[5px] rounded-r-[10px]">
                  Solt out
                </div> */}
                    <div
                      className={`h-[130px] bg-white rounded-t-[15px] w-full object-cover`}
                    >
                      <img
                        className="h-full w-full bg-cover rounded-t-[15px]"
                        src={`${baseImageUrl}/${item?.img}`}
                        alt=""
                      />
                    </div>

                    {/* boday */}
                    <div className="px-[15px] bg-white rounded-b-[15px] w-full">
                      <h2 className="bg-white text-[14px] font-bold pt-[5px] text-center mt-[8px] ">
                        {item?.name}{" "}
                      </h2>

                      <h2 className="text-[14px] text-center">
                        {item?.variants?.[0]?.label}
                      </h2>

                      <div className=" bg-white pb-[15px] rounded-b-[15px] w-full">
                        <div className="flex items-center justify-between mb-[6px]">
                          <div className="flex  items-center justify-center text-center gap-[10px] bg-white my-[10px]">
                            {item?.variants?.[0]?.cutPrice && (
                              <h2 className="bg-white font-extrabold p-0 text-gray-500 line-through text-[18px]">
                                <div>
                                  <span className=" font-extrabold  bg-white p-0">
                                    ৳
                                  </span>{" "}
                                  {item?.variants?.[0]?.cutPrice}
                                </div>
                              </h2>
                            )}

                            <h2 className="bg-white font-extrabold p-0 main_color text-[18px]">
                              <span className="font-extrabold  bg-white p-0">
                                ৳
                              </span>{" "}
                              {item?.variants?.[0]?.price}
                            </h2>
                          </div>
                        </div>
                        <button
                          onClick={() => addToCart(item)}
                          className={`main_bg_color text-white  py-[4px] px-[30px]
                      rounded-[6px] shadow-sm  w-full text-[14px]`}
                        >
                          Add
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center mt-10 px-[16px] lg:max-w-[500px] mx-auto  mb-[100px]">
                <p className="text-gray-600 mt-2">
                  দুঃখিত! আপনার খোঁজা আইটেমটি আমরা এই মুহূর্তে খুঁজে পাইনি। আপনি
                  চাইলে আমাদের সাথে হোয়াটসঅ্যাপে যোগাযোগ করতে পারেন, আমরা আপনার
                  প্রয়োজন অনুযায়ী সর্বোচ্চ চেষ্টা করব আইটেমটি সরবরাহ করতে।
                </p>
                <a
                  href="https://wa.me/8801830630365"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 bg-green-500 text-white px-5 py-2 rounded-lg shadow hover:bg-green-600 transition"
                >
                  WhatsApp এ মেসেজ করুন
                </a>
              </div>
            )}
          </div>
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

export default GroceryItemCard;
