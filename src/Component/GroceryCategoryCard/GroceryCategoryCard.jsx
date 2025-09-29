import SearchInputField from "../SearchInputField/SearchInputField";
import { FaArrowLeft } from "react-icons/fa6";
import { Link, useLocation } from "react-router";
import GroceryCard from "../GroceryCard/GroceryCard";
import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import Loading from "../Loading/Loading";
import { LiaShoppingCartSolid } from "react-icons/lia";
import { useCart } from "../CartContext/CartContext";
import { ToastContainer } from "react-toastify";

const GroceryCategoryCard = () => {
  const baseUrl = import.meta.env.VITE_API_URL;
  const baseImageUrl = import.meta.env.VITE_API_URL_IMAGE;
  const [loading, setLoading] = useState(false);
  const [contentLoading, setContentLoading] = useState(false);
  const { addToCart, totalCardCount } = useCart();
  const location = useLocation();
  const { categoryName } = location.state || {};

  const [allCategories, setAllcategories] = useState([]);
  const [allCategoriesCount, setAllcategoriesCount] = useState([]);

  const [isTabeButton, setIsTabeButton] = useState("সকল");

  const [pageTitle, setpageTitle] = useState("");

  const [search, setSearch] = useState("");

  // get all active restaurant
  const handleGetGroceryItems = async () => {
    setLoading(true);
    try {
      let res = await axios.get(
        `${baseUrl}/grocerySubCategoryProducts?subCategoryName=${categoryName}`
      );

      if (res?.data?.success) {
        setAllcategoriesCount(res?.data?.categories);
        setLoading(false);
        setpageTitle(res?.data?.subCategory);
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
    handleGetGroceryItems();
  }, []);

  // get all active restaurant
  const handleGetFilterGroceryItems = async () => {
    setContentLoading(true);
    try {
      let url = "";
      if (isTabeButton === "সকল" && !search) {
        url = `${baseUrl}/grocerySubCategoryProducts?subCategoryName=${categoryName}`;
      } else {
        const itemName = search || isTabeButton;
        url = `${baseUrl}/filterGroceryItems?categoryName=${categoryName}&itemName=${itemName}`;
      }

      const res = await axios.get(url);

      if (res?.data?.success) {
        setAllcategories(res.data?.categories || res.data?.data || []);
      }
    } catch (error) {
      Swal.fire(
        "Error!",
        error?.response?.data?.message || "Something went wrong!",
        "error"
      );
    } finally {
      setContentLoading(false);
    }
  };

  useEffect(() => {
    handleGetFilterGroceryItems();
  }, [isTabeButton, search]);

  function calculateDiscountPercentageFromDiscount(price, discountAmount) {
    if (!price || !discountAmount || price === 0) return 0;

    const discount = (discountAmount / price) * 100;
    return Math.round(discount);
  }

  return (
    <div>
      {" "}
      {loading ? (
        <Loading />
      ) : (
        <div className="mb-[16px]">
          <div className="bg-white h-[65px]   px-[15px] top_header_shadow flex items-center justify-between">
            <Link to={"/"} className="flex items-center gap-[15px]">
              <FaArrowLeft className="bg-white text-[20px] text-[#6b7280]" />
              <h2 className="bg-white font-bold text-[14px] text-[#6b7280]">
                {pageTitle && pageTitle}
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
          <div>
            <h2 className=" font-bold text-[20px] mt-[16px] text-center">
              {pageTitle && pageTitle}
            </h2>

            {allCategoriesCount?.length > 0 && (
              <p className="text-[#ff6347] text-[12px] text-center">
                ( {allCategoriesCount?.length} আইটেম )
              </p>
            )}

            <div className="mt-[16px] px-[15px]">
              <SearchInputField value={search} setValue={setSearch} />
            </div>
          </div>

          {!search && (
            <>
              {allCategoriesCount && (
                <div className="px-[15px] flex items-center gap-[16px] overflow-auto scrollbar-hide  mt-[16px]">
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
                  {allCategoriesCount?.map((item, i) => (
                    <button
                      key={i}
                      className={` ${
                        isTabeButton === item?.name
                          ? "main_bg_color text-white"
                          : " bg-white text_black_color"
                      }     border-[1px] border-gray-300 py-[6px] px-[20px]  rounded-[8px] shadow-sm whitespace-nowrap`}
                      onClick={() => setIsTabeButton(item?.name)}
                    >
                      {item?.name}
                    </button>
                  ))}
                </div>
              )}
            </>
          )}

          {/* main content */}

          {contentLoading ? (
            <Loading />
          ) : (
            <>
              {allCategories?.length > 0 ? (
                <div className="grid grid-cols-2 gap-[20px] bg-white  p-[20px] mt-[16px]">
                  {allCategories?.map((item, i) => (
                    <>
                      {!item?.status ? (
                        <GroceryCard
                          style_clss={{
                            heigh: "h-[130px]",
                            rounded: "rounded-[10px]",
                            bg: "bg-white",
                            padding: "px-[4px] pb-[20px]",
                          }}
                          item={item}
                          setIsTabeButton={setIsTabeButton}
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
                <div className="text-center mt-10 px-[16px]">
                  <p className="text-gray-600 mt-2">
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
      )}
    </div>
  );
};

export default GroceryCategoryCard;
