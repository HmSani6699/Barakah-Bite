import React, { useEffect, useState } from "react";
import ShopeProfile from "../../../Component/ShopeProfile/ShopeProfile";
import { FaArrowLeft } from "react-icons/fa";
import { LiaShoppingCartSolid } from "react-icons/lia";
import SearchInputField from "../../../Component/SearchInputField/SearchInputField";
import { Link } from "react-router";
import Swal from "sweetalert2";
import axios from "axios";
import Loading from "../../../Component/Loading/Loading";

const AllPopularItem = () => {
  const baseUrl = import.meta.env.VITE_API_URL;
  const baseImageUrl = import.meta.env.VITE_API_URL_IMAGE;

  const [isTabeButton, setIsTabeButton] = useState("সকল");
  const [search, setSearch] = useState("");

  const [loading, setLoading] = useState(false);
  const [allPopulerItems, setAllPopulerItems] = useState([]);
  const [allItems, setAllItems] = useState([]);

  // get all active restaurant
  const handleGetAllPopulerItems = async () => {
    try {
      let res = await axios.get(baseUrl + "/populerItems");

      if (res?.data?.success) {
        setAllItems(res?.data?.data);
      }
    } catch (error) {
      Swal.fire(
        "Error!",
        error?.response?.data?.message || "Something went wrong!",
        "error"
      );
    }
  };

  useEffect(() => {
    handleGetAllPopulerItems();
  }, []);

  // get all active restaurant
  const handleGetPopulerItems = async () => {
    setLoading(true);
    try {
      let res;

      // if (isTabeButton == "সকল") {
      //   res = await axios.get(baseUrl + "/populerItems");
      // } else if (search) {
      //   res = await axios.get(`${baseUrl}/populerItems?search=${search}`);
      // } else {
      //   res = await axios.get(`${baseUrl}/populerItems?name=${isTabeButton}`);
      // }

      if (search) {
        res = await axios.get(`${baseUrl}/populerItems?search=${search}`);
      } else if (isTabeButton !== "সকল") {
        res = await axios.get(`${baseUrl}/populerItems?name=${isTabeButton}`);
      } else {
        res = await axios.get(baseUrl + "/populerItems");
      }

      if (res?.data?.success) {
        setAllPopulerItems(res?.data?.data);
        setLoading(false);
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
    handleGetPopulerItems();
  }, [isTabeButton, search]);

  function calculateDiscountPercentageFromDiscount(price, discountAmount) {
    if (!price || !discountAmount || price === 0) return 0;

    const discount = (discountAmount / price) * 100;
    return Math.round(discount);
  }

  return (
    <div>
      <div className="bg-white h-[65px]   px-[15px] top_header_shadow flex items-center justify-between">
        <Link to={"/"} className="flex items-center gap-[15px]">
          <FaArrowLeft className="bg-white text-[20px] text-[#6b7280]" />
          <h2 className="bg-white font-bold text-[14px] text-[#6b7280]">
            জনপ্রিয় খাবার
          </h2>
        </Link>
        <LiaShoppingCartSolid className="bg-white text-[35px] text-[#6b7280]" />
      </div>

      <h2 className=" font-bold text-[20px] mt-[16px] text-center text-[#171717]">
        জনপ্রিয় খাবার
      </h2>

      {allItems?.length > 0 && (
        <p className="text-[#ff6347] text-[12px] text-center">
          ( {allItems?.length} আইটেম )
        </p>
      )}

      <div className="mt-[16px] px-[15px]">
        <SearchInputField
          value={search}
          setValue={setSearch}
          placeholder={"খাবার নাম দিয়ে খুঁজুন"}
        />
      </div>

      {!search && allItems && (
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
          {allItems?.map((item, i) => (
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

      {loading ? (
        <Loading />
      ) : (
        <div>
          {allPopulerItems?.length > 0 ? (
            <div className="grid grid-cols-2 gap-[16px]  rounded-[15px] p-[20px] ">
              {allPopulerItems?.map((item) => (
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
                      src={baseImageUrl + "/" + item?.img}
                      alt=""
                    />
                  </div>

                  {/* boday */}
                  <div className="px-[15px] bg-white rounded-b-[15px] w-full">
                    <h2 className="bg-white text-[14px] font-bold pt-[5px]">
                      {item?.name}
                      {item?.variants?.[0]?.label && (
                        <span className="bg-white font-extrabold  main_color text-[10px] pl-[5px]">
                          ( {item?.variants?.[0]?.label} )
                        </span>
                      )}
                    </h2>

                    <div className=" bg-white pb-[15px] rounded-b-[15px] w-full">
                      <div className="flex items-center justify-between mb-[6px]">
                        <div className="flex items-center gap-[10px] bg-white">
                          {item?.variants?.[0]?.cutPrice && (
                            <h2 className="bg-white font-extrabold p-0 text-gray-500 line-through text-[14px]">
                              <span className=" font-extrabold  bg-white p-0">
                                ৳
                              </span>{" "}
                              {item?.variants?.[0]?.cutPrice}
                            </h2>
                          )}

                          {item?.variants?.[0]?.price && (
                            <h2 className="bg-white font-extrabold p-0 main_color text-[14px]">
                              <span className="font-extrabold  bg-white p-0">
                                ৳
                              </span>{" "}
                              {item?.variants?.[0]?.price}
                            </h2>
                          )}
                        </div>
                      </div>
                      <button
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
            <div className="text-center mt-10 px-[16px]">
              <p className="text-gray-600 mt-2">
                দুঃখিত! আপনার খোঁজা আইটেমটি আমরা এই মুহূর্তে খুঁজে পাইনি। আপনি
                চাইলে আমাদের সাথে হোয়াটসঅ্যাপে যোগাযোগ করতে পারেন, আমরা আপনার
                প্রয়োজন অনুযায়ী সর্বোচ্চ চেষ্টা করব আইটেমটি সরবরাহ করতে।
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
        </div>
      )}
    </div>
  );
};

export default AllPopularItem;
