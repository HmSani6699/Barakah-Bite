import axios from "axios";
import React, { useEffect, useState } from "react";
import { CiFilter } from "react-icons/ci";
import { FaRegClock } from "react-icons/fa";
import { FiFilter } from "react-icons/fi";
import Loading from "../../../Component/Loading/Loading";
import Swal from "sweetalert2";

const FoodShopOrders = () => {
  const baseUrl = import.meta.env.VITE_API_URL;
  const baseImageUrl = import.meta.env.VITE_API_URL_IMAGE;

  const [loading, setLoading] = useState(false);
  const [allOrders, setAllOrders] = useState([]);
  const [isOpenFilter, setIsOpenFilter] = useState(false);

  // Filter orders
  const [isFilterTrue, setIsFilterTrue] = useState(false);
  const [date, setDate] = useState("");
  const [filters, setFilters] = useState({
    all: false,
    confirm: false,
    cancel: false,
  });

  const [errors, setErrors] = useState("");

  // checkbox handle
  const handleCheckbox = (name) => {
    if (name === "all") {
      // যদি all select করে -> সবগুলো true হবে
      const newValue = !filters.all;
      setFilters({
        all: newValue,
        confirm: newValue,
        cancel: newValue,
      });
    } else {
      // আলাদা checkbox control
      const newFilters = { ...filters, [name]: !filters[name] };
      // confirm + cancel যদি দুটোই select হয়, তবে all = true
      newFilters.all = newFilters.confirm && newFilters.cancel;
      setFilters(newFilters);
    }
  };

  const handleFilterOrders = () => {
    if (!date) {
      setErrors("Data is requerid!");
      return;
    }

    setIsFilterTrue(true);
    handleGetShopOrders();
  };

  // Get all products
  const handleGetShopOrders = async () => {
    setLoading(true);
    try {
      const user = JSON.parse(localStorage.getItem("user"));

      let url;

      if (!isFilterTrue) {
        url = `${baseUrl}/shop/${user?.phone}/orders`;
      }

      if (isFilterTrue) {
        if (filters?.all) {
          url = `${baseUrl}/shop/${user?.phone}/orders?date=${date}`;
        } else if (filters?.confirm) {
          url = `${baseUrl}/shop/${user?.phone}/orders?date=${date}&status=accepted`;
        } else if (filters?.cancel) {
          url = `${baseUrl}/shop/${user?.phone}/orders?date=${date}&status=cancelled`;
        }
      }

      const res = await axios.get(url);

      if (res?.status === 200) {
        setAllOrders(res?.data?.orders);
        setLoading(false);
      } else {
        setAllOrders([]);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
      setAllOrders([]); // fallback empty if error
      setLoading(false);
    }
  };

  useEffect(() => {
    handleGetShopOrders();
  }, []);

  // Order time
  function getTimeAgoBangla(dateString) {
    const inputDate = new Date(dateString);
    const now = new Date();

    const diffInSeconds = Math.floor((now - inputDate) / 1000);

    if (diffInSeconds < 0) {
      return "ভবিষ্যতের সময়"; // future time
    }

    const units = [
      { name: "বছর", seconds: 31536000 },
      { name: "মাস", seconds: 2592000 },
      { name: "সপ্তাহ", seconds: 604800 },
      { name: "দিন", seconds: 86400 },
      { name: "ঘণ্টা", seconds: 3600 },
      { name: "মিনিট", seconds: 60 },
      { name: "সেকেন্ড", seconds: 1 },
    ];

    for (const unit of units) {
      const interval = Math.floor(diffInSeconds / unit.seconds);
      if (interval >= 1) {
        return `${convertToBanglaNumber(interval)} ${unit.name} আগে`;
      }
    }

    return "এইমাত্র";
  }

  function convertToBanglaNumber(number) {
    const enToBnDigits = {
      0: "০",
      1: "১",
      2: "২",
      3: "৩",
      4: "৪",
      5: "৫",
      6: "৬",
      7: "৭",
      8: "৮",
      9: "৯",
    };

    return number
      .toString()
      .split("")
      .map((d) => enToBnDigits[d] || d)
      .join("");
  }

  // update status
  const handleUpdateStatuse = async (shopOrderId, status) => {
    try {
      const res = await axios.put(
        `${baseUrl}/shop-orders/${shopOrderId}/status`,
        { status } // body তে পাঠাতে হবে
      );

      if (res.data.success) {
        handleGetShopOrders();
        Swal.fire("Success!", "Statuse update successfully!", "success");
      }
    } catch (error) {
      console.log("❌ Error updating status:", error);
      Swal.fire(
        "Error!",
        error?.response?.data?.message || "Something went wrong!",
        "error"
      );
    }
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="px-[15px] mb-[100px] mt-[20px]  relative">
          {/* Orders Tab */}

          <div className="">
            <div className="flex items-center justify-between mb-[20px] ">
              <h2 className="text-[20px] font-bold">অর্ডার ম্যানেজমেন্ট</h2>

              <button
                onClick={() => setIsOpenFilter(!isOpenFilter)}
                className="flex items-center gap-[10px] bg-[#ff6347] text-white px-[15px] py-[8px] rounded-[6px]"
              >
                <FiFilter />
                ফিল্টার
              </button>
            </div>

            {isOpenFilter && (
              <div className="absolute top-[50px] right-[40px] bg-white shadow-lg p-5 z-[100] lg:w-[300px] rounded-2xl border border-gray-200">
                {/* Date Filter */}
                <div className="mb-5">
                  <label className="block mb-2 text-gray-700 font-medium">
                    তারিখ
                  </label>
                  <input
                    type="date"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#ff6347]"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                  />
                  {errors && (
                    <p className="text-[12px] text-red-500">{errors}</p>
                  )}
                </div>

                {/* Status Filters */}
                <div className="space-y-3">
                  <p className="text-gray-700 font-medium">অর্ডার স্ট্যাটাস</p>

                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={filters.all}
                      onChange={() => handleCheckbox("all")}
                      className="h-4 w-4 text-[#ff6347] focus:ring-[#ff6347] border-gray-300 rounded"
                    />
                    <span className="text-gray-600">সকল</span>
                  </label>

                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={filters.confirm}
                      onChange={() => handleCheckbox("confirm")}
                      className="h-4 w-4 text-[#ff6347] focus:ring-[#ff6347] border-gray-300 rounded"
                    />
                    <span className="text-gray-600">কনফার্ম</span>
                  </label>

                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={filters.cancel}
                      onChange={() => handleCheckbox("cancel")}
                      className="h-4 w-4 text-[#ff6347] focus:ring-[#ff6347] border-gray-300 rounded"
                    />
                    <span className="text-gray-600">বাতিল</span>
                  </label>
                </div>

                {/* Action Buttons */}
                <div className="flex justify-end gap-3 mt-6">
                  <button
                    onClick={() => setIsOpenFilter(false)}
                    className="px-4 py-2 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-100 transition"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => handleFilterOrders()}
                    className="px-4 py-2 rounded-lg bg-[#ff6347] text-white hover:bg-[#e5533c] transition"
                  >
                    Apply
                  </button>
                </div>
              </div>
            )}
          </div>

          <div className="flex flex-col gap-[20px] lg:pr-[20px]">
            {allOrders?.length > 0 ? (
              allOrders?.map((item, i) => (
                <div key={i} className={` bg-white rounded-[10px] `}>
                  <div className="flex  justify-between gap-3 mb-2 bg-gray-300 rounded-t-[10px] p-[16px]">
                    <div>
                      <p className="font-medium lg:text-[18px] text-[14px]">
                        কাস্টমার নাম: {item?.orderId?.deliveryInfo?.name}
                      </p>
                      <p className="font-medium lg:text-[14px] text-[10px] mt-[5px]">
                        অর্ডার আইডি: {item?.orderId?.orderNumber}
                      </p>
                    </div>
                    <div>
                      <p className="flex items-center gap-[6px] text-[10px] lg:text-[14px]">
                        <FaRegClock />
                        {getTimeAgoBangla(item?.createdAt)}
                      </p>
                    </div>
                  </div>

                  <div className="lg:flex items-center justify-between p-[20px]">
                    <div className="">
                      {/* Order items */}
                      <div className="flex flex-col gap-[16px]">
                        {item?.items?.map((item, i) => (
                          <div key={i} className="flex items-center gap-[16px]">
                            <div className="h-full w-[100px] lg:w-[150px] border">
                              <img
                                className="w-full h-full"
                                src={`${baseImageUrl}/${item?.img}`}
                                alt="item img"
                              />
                            </div>
                            <div>
                              <h2 className="font-semibold mb-[10px]">
                                {item?.productName}
                              </h2>
                              <p className="text-[14px]">
                                প্রতি ইউনিট মূল্য:{" "}
                                {convertToBanglaNumber(item?.pricePerUnit)}
                              </p>
                              <p className="text-[14px]">
                                অর্ডার পরিমাণ:{" "}
                                {convertToBanglaNumber(item?.quantity)}
                              </p>
                              <p className="text-[14px]">
                                ভেরিয়েন্টের নাম: {item?.variantName}
                              </p>
                              <p className="text-[14px]">
                                সাব টোটাল :{" "}
                                {convertToBanglaNumber(item?.totalPrice)}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center gap-4 my-[30px] lg:my-0">
                      <p className="font-bold lg:text-lg text-[16px]">
                        মোট মূল্য =
                        {convertToBanglaNumber(
                          item?.items?.reduce((total, i) => {
                            return total + i?.totalPrice;
                          }, 0)
                        )}
                        টাকা
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      {/* Pending */}
                      {item?.status === "pending" && (
                        <button className="text-white bg-yellow-500 rounded-md py-[3px] px-[10px] text-sm text-[9px] shadow-sm">
                          অপেক্ষমান
                        </button>
                      )}

                      {/* Confirmed */}
                      {item?.status === "confirmed" && (
                        <div className="flex items-center gap-3">
                          <button className="text-white bg-green-600 rounded-md py-[3px] px-[10px] text-sm text-[9px] shadow-sm">
                            নিশ্চিত হয়েছে
                          </button>
                        </div>
                      )}

                      {/* Partially Accepted */}
                      {item?.status === "partially_accepted" && (
                        <div className="flex items-center gap-3">
                          <button className="text-white bg-amber-600 rounded-md py-[3px] px-[10px] text-sm text-[9px] shadow-sm">
                            আংশিকভাবে গৃহীত
                          </button>
                        </div>
                      )}

                      {/* Preparing */}
                      {item?.status === "preparing" && (
                        <div className="flex items-center gap-3">
                          <button className="text-white bg-blue-500 rounded-md py-[3px] px-[10px] text-sm text-[9px] shadow-sm animate-pulse">
                            প্রস্তুত হচ্ছে...
                          </button>
                        </div>
                      )}

                      {/* Out for Delivery */}
                      {item?.status === "out_for_delivery" && (
                        <div className="flex items-center gap-3">
                          <button className="text-white bg-indigo-500 rounded-md py-[3px] px-[10px] text-sm text-[9px] shadow-sm animate-bounce">
                            ডেলিভারির পথে 🚚
                          </button>
                        </div>
                      )}

                      {/* Delivered */}
                      {item?.status === "delivered" && (
                        <button className="text-white bg-emerald-600 rounded-md py-[3px] px-[10px] text-sm text-[9px] shadow-sm">
                          ডেলিভারি সম্পন্ন
                        </button>
                      )}

                      {/* Cancelled */}
                      {item?.status === "cancelled" && (
                        <button className="text-white bg-red-500 rounded-md py-[3px] px-[10px] text-sm font-medium shadow-sm">
                          অর্ডার বাতিল
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="flex flex-col items-center justify-center h-[250px] text-gray-600">
                <span className="text-4xl mb-2">😊</span>
                <h2 className="text-lg font-semibold">
                  এই মুহূর্তে কোনো অর্ডার নেই
                </h2>
                <p className="text-sm text-gray-500 mt-1">
                  নতুন অর্ডার আসলে এখানে দেখতে পাবেন।
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default FoodShopOrders;
