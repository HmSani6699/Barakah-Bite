import axios, { all } from "axios";
import React, { useEffect, useState } from "react";
import { FiFilter } from "react-icons/fi";
import Loading from "../../../Component/Loading/Loading";
import { FaPhone, FaRegClock, FaRegUser, FaUserAlt } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";

const OrderHistory = () => {
  const baseUrl = import.meta.env.VITE_API_URL;
  const baseImageUrl = import.meta.env.VITE_API_URL_IMAGE;

  const [loading, setLoading] = useState(false);
  const [isOpenFilter, setIsOpenFilter] = useState(false);
  const [isOpenFilterTitle, setIsOpenFilterTitle] = useState(null);

  const [allOrders, setAllOrders] = useState([]);
  const [date, setDate] = useState("");
  const [filters, setFilters] = useState({
    all: false,
    confirm: false,
    cancel: false,
    pending: false,
  });
  const [errors, setErrors] = useState("");

  const [totalPrice, setTotalPrice] = useState(0);

  // handle check box
  const handleCheckbox = (name) => {
    if (name === "all") {
      // যদি all select করে -> সবগুলো true হবে
      const newValue = !filters.all;
      setFilters({
        all: newValue,
        confirm: newValue,
        cancel: newValue,
        pending: newValue,
      });
    } else {
      // আলাদা checkbox control
      const newFilters = { ...filters, [name]: !filters[name] };
      // confirm + cancel যদি দুটোই select হয়, তবে all = true
      newFilters.all =
        newFilters.confirm && newFilters.cancel && newFilters.pending;
      setFilters(newFilters);
    }
  };

  // handle clear filte
  const handleClearFilter = () => {
    setIsOpenFilter(false);
    setFilters({
      all: false,
      confirm: false,
      cancel: false,
      pending: false,
    });
    setDate("");
  };

  // iflter
  const handleFilterOrders = () => {
    if (!date) {
      setErrors("Data is requerid!");
      return;
    }
    handleGetShopOrders();
  };

  // Get all orders
  const handleGetShopOrders = async () => {
    setLoading(true);
    try {
      let url;

      if (filters?.all) {
        url = `${baseUrl}/orders?date=${date}`;
        setIsOpenFilterTitle(`${date} All`);
      } else if (filters?.confirm) {
        url = `${baseUrl}/orders?date=${date}&status=accepted`;
        setIsOpenFilterTitle(`${date} accepted`);
      } else if (filters?.pending) {
        url = `${baseUrl}/orders?date=${date}&status=pending`;
        setIsOpenFilterTitle(`${date} pending`);
      } else if (filters?.cancel) {
        url = `${baseUrl}/orders?date=${date}&status=cancelled`;
        setIsOpenFilterTitle(`${date} cancelled`);
      } else {
        url = `${baseUrl}/orders`;
      }

      const res = await axios.get(url);

      if (res?.status === 200) {
        console.log(res?.data?.orders);
        setAllOrders(res?.data?.orders);
        handleClearFilter();
        setErrors("");
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
                      checked={filters.pending}
                      onChange={() => handleCheckbox("pending")}
                      className="h-4 w-4 text-[#ff6347] focus:ring-[#ff6347] border-gray-300 rounded"
                    />
                    <span className="text-gray-600">pending</span>
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
                    onClick={() => handleClearFilter()}
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

          {isOpenFilterTitle && (
            <div className="mb-[16px] border-[2px] px-[20px] py-[4px] rounded-full flex items-center justify-between">
              <h2 className="text-[18px] ">
                {allOrders?.length} Orders {isOpenFilterTitle}
              </h2>
              <button
                onClick={() => {
                  handleGetShopOrders();
                  setIsOpenFilterTitle(null);
                }}
              >
                <IoClose />
              </button>
            </div>
          )}

          {/* main content */}
          <div className=" rounded-[10px] ">
            <div className="flex flex-col gap-[20px] ">
              {allOrders?.length > 0 ? (
                allOrders?.map((order, i) => {
                  console.log(order);

                  let price = 0;

                  return (
                    <div className="bg-white flex flex-col gap-[20px]">
                      <div className="flex  justify-between gap-3 mb-2 bg-gray-300 rounded-t-[10px] p-[16px] ">
                        <div>
                          <p className="font-medium lg:text-[14px] text-[10px] mt-[5px]">
                            অর্ডার আইডি: {order?.orderNumber}
                          </p>
                          <p className="font-medium lg:text-[18px] text-[14px] flex items-center gap-[4px]">
                            <FaUserAlt className="text-gray-500" />

                            {order?.deliveryInfo?.name}
                          </p>
                          <p className="flex items-center gap-[4px] text-[14px]">
                            <FaPhone className="text-gray-500" />
                            {order?.deliveryInfo?.phone}
                          </p>
                          <p className="flex items-center gap-[4px] text-[14px]">
                            <FaLocationDot className="text-gray-500" />
                            {order?.deliveryInfo?.gram},
                            {order?.deliveryInfo?.elaka},
                            {order?.deliveryInfo?.area}
                          </p>
                        </div>

                        <div>
                          <p className="flex items-center gap-[6px] text-[10px] lg:text-[14px]">
                            <FaRegClock />
                            {getTimeAgoBangla(
                              order?.shopOrders[0]?.createdAt
                            )}{" "}
                            (
                            {convertToBanglaNumber(
                              order?.shopOrders[0]?.createdAt.slice(0, 10)
                            )}
                            )
                          </p>
                        </div>
                      </div>

                      <div className="p-[16px]">
                        {/* shop and item */}
                        {order?.shopOrders?.map((shopOrder, i) => {
                          const subtotal = shopOrder?.items?.reduce(
                            (total, i) => {
                              return total + i?.totalPrice;
                            },
                            0
                          );
                          price = price + subtotal;

                          return (
                            <div className="">
                              <div className="flex items-center justify-between">
                                {/* shop */}
                                <div className="text-left  flex flex-col items-center">
                                  <div className="h-[30px] w-[30px] rounded-full">
                                    <img
                                      className="w-full h-full rounded-full"
                                      src={`${baseImageUrl}/${shopOrder?.shopId?.logo}`}
                                      alt="logo"
                                    />
                                  </div>
                                  <p className="text-[12px]">
                                    {shopOrder?.shopId?.name}
                                  </p>
                                  <p className="text-[12px]">
                                    {shopOrder?.shopId?.address}
                                  </p>
                                  <p className="text-[12px]">
                                    {shopOrder?.shopId?.phone}
                                  </p>
                                </div>
                                {/* items */}
                                <div>
                                  {shopOrder?.items?.map((item, i) => (
                                    <div
                                      key={i}
                                      className="flex items-center gap-[16px]"
                                    >
                                      {console.log(item)}

                                      <div className="h-full w-[70px] lg:w-[100px] border">
                                        <img
                                          className="w-full h-full"
                                          src={`${baseImageUrl}/${item?.img}`}
                                          alt="item img"
                                        />
                                      </div>
                                      <div>
                                        <h2 className="font-semibold ">
                                          {item?.productName}
                                        </h2>
                                        <p className="text-[12px]">
                                          প্রতি ইউনিট মূল্য:{" "}
                                          {convertToBanglaNumber(
                                            item?.pricePerUnit
                                          )}
                                        </p>
                                        <p className="text-[12px]">
                                          অর্ডার পরিমাণ:{" "}
                                          {convertToBanglaNumber(
                                            item?.quantity
                                          )}
                                        </p>
                                        <p className="text-[12px]">
                                          ভেরিয়েন্টের নাম: {item?.variantName}
                                        </p>
                                        <p className="text-[12px]">
                                          সাব টোটাল :{" "}
                                          {convertToBanglaNumber(
                                            item?.totalPrice
                                          )}
                                        </p>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                                {/* total price */}
                                <div className="flex items-center gap-4 my-[30px] lg:my-0">
                                  <p className="font-bold lg:text-lg text-[16px]">
                                    সাব টোটাল=
                                    {convertToBanglaNumber(
                                      shopOrder?.items?.reduce((total, i) => {
                                        return total + i?.totalPrice;
                                      }, 0)
                                    )}
                                    টাকা
                                  </p>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>

                      <div className="bg-gray-300 rounded-b-[10px] flex items-center justify-between px-[16px] py-[10px]">
                        {/* Accion */}
                        <div className="flex items-center gap-2">
                          {order?.status === "pending" ? (
                            <button className="text-white bg-yellow-500 rounded-[6px] py-[2px] px-[10px]">
                              pending
                            </button>
                          ) : order?.status === "confirmed" ? (
                            <button className="text-white bg-green-700 rounded-[6px] py-[2px] px-[10px]">
                              কন্ফার্ম
                            </button>
                          ) : (
                            <button className="text-white bg-red-500 rounded-[6px] py-[2px] px-[10px]">
                              বাতিল
                            </button>
                          )}
                        </div>
                        <p className="font-bold lg:text-lg text-[16px]">
                          মোট মূল্য ={convertToBanglaNumber(price)}
                          টাকা
                        </p>
                      </div>
                    </div>
                  );
                })
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
        </div>
      )}
    </>
  );
};

export default OrderHistory;
