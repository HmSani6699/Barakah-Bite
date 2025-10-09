import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import Loading from "../../Component/Loading/Loading";
import {
  FaArrowLeft,
  FaRegCalendarAlt,
  FaRegClock,
  FaUserAlt,
} from "react-icons/fa";
import { Link } from "react-router";

const MyOrders = () => {
  const baseUrl = import.meta.env.VITE_API_URL;
  const baseImageUrl = import.meta.env.VITE_API_URL_IMAGE;

  const [loading, setLoading] = useState(false);

  const [allOrders, setAllOrders] = useState([]);

  const handleGetAllOrders = async () => {
    const user = JSON.parse(localStorage.getItem("user"));
    setLoading(true);
    try {
      const res = await axios.get(`${baseUrl}/orders/user/${user?.phone}`);
      if (res?.data?.success) {
        setAllOrders(res?.data?.order);
      }
    } catch (error) {
      Swal.fire(
        "Error!",
        error?.response?.data?.message || "Something went wrong!",
        "error"
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleGetAllOrders();
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

  return (
    <>
      {loading ? (
        <div className="mt-[400px]">
          <Loading />
        </div>
      ) : (
        <div className="mb-[120px]">
          <div className="bg-white h-[65px]   px-[15px] top_header_shadow flex items-center justify-between lg:hidden">
            <Link to={"/profile"} className="flex items-center gap-[15px]">
              <FaArrowLeft className="bg-white text-[20px] text-[#6b7280]" />
              <h2 className="bg-white font-bold text-[14px] text-[#6b7280]">
                আমার অর্ডারসমূহ
              </h2>
            </Link>
          </div>

          {/* order card */}
          <div className=" rounded-t-[10px] px-[16px] mt-[16px]">
            <div className="flex flex-col gap-[20px] ">
              {allOrders?.length > 0 ? (
                allOrders?.map((order, i) => {
                  let price = 0;

                  return (
                    <div
                      key={i}
                      className="bg-white rounded-[10px] flex flex-col gap-[20px]"
                    >
                      <div className="flex  justify-between gap-3 mb-2 bg-gray-300 rounded-t-[10px] p-[16px] ">
                        <div>
                          <p className="lg:text-[18px] text-[14px] flex items-center gap-[4px]">
                            <FaUserAlt className="text-gray-500" />

                            {order?.deliveryInfo?.name}
                          </p>
                          <p className="font-medium lg:text-[14px] text-[10px] mt-[5px]">
                            অর্ডার আইডি: {order?.orderNumber}
                          </p>
                        </div>

                        <div>
                          <p className="flex items-center gap-[6px] text-[10px] lg:text-[14px]">
                            <FaRegClock />
                            {getTimeAgoBangla(
                              order?.shopOrders[0]?.createdAt
                            )}{" "}
                          </p>
                          <p className="flex items-center gap-[6px] text-[10px] lg:text-[14px] mt-[6px]">
                            <FaRegCalendarAlt />

                            {convertToBanglaNumber(
                              order?.shopOrders[0]?.createdAt.slice(0, 10)
                            )}
                          </p>
                        </div>
                      </div>

                      <div className="p-[16px] flex flex-col gap-[16px]">
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
                            <div key={i}>
                              <div className="flex items-center justify-between">
                                <div className="w-full flex flex-col gap-[16px]">
                                  {shopOrder?.items?.map((item, i) => (
                                    <div
                                      key={i}
                                      className="flex items-center justify-between gap-[16px]"
                                    >
                                      <div className="flex items-center gap-[16px]">
                                        <div className=" h-[70px] lg:h-full w-[70px] rounded-[10px]  lg:w-[100px] border">
                                          <img
                                            className="w-full h-full rounded-[10px]"
                                            src={`${baseImageUrl}/${item?.img}`}
                                            alt="item img"
                                          />
                                        </div>
                                        <div>
                                          <h2 className="font-semibold text-[14px] ">
                                            {item?.productName}
                                          </h2>
                                          <p className="text-[11px]">
                                            প্রতি ইউনিট মূল্য:{" "}
                                            {convertToBanglaNumber(
                                              item?.pricePerUnit
                                            )}
                                          </p>
                                          <p className="text-[11px]">
                                            অর্ডার পরিমাণ:{" "}
                                            {convertToBanglaNumber(
                                              item?.quantity
                                            )}
                                          </p>
                                          <p className="text-[11px]">
                                            ভেরিয়েন্ট: {item?.variantName}
                                          </p>
                                        </div>
                                      </div>

                                      <div>
                                        <p className="text-[11px]">
                                          সাব টোটাল :{" "}
                                          {convertToBanglaNumber(
                                            item?.totalPrice
                                          )}
                                        </p>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>

                      <div className="bg-gray-300  flex items-center justify-between px-[16px] py-[10px]">
                        {/* Accion */}
                        <div className="flex items-center gap-2">
                          {/* Pending */}
                          {order?.status === "pending" && (
                            <button className="text-white bg-yellow-500 rounded-md py-[3px] px-[10px] text-sm text-[9px] shadow-sm">
                              অপেক্ষমান
                            </button>
                          )}

                          {/* Confirmed */}
                          {order?.status === "confirmed" && (
                            <div className="flex items-center gap-3">
                              <button className="text-white bg-green-600 rounded-md py-[3px] px-[10px] text-sm text-[9px] shadow-sm">
                                নিশ্চিত হয়েছে
                              </button>
                              <Link
                                to={"/tracking-order"}
                                state={{
                                  orderID: order?.orderNumber,
                                  orderNumber: order?.orderNumber,
                                }}
                                className="text-white bg-[#ff6347] rounded-md py-[3px] px-[10px] text-sm text-[9px] hover:bg-[#e85a3f] transition"
                              >
                                অর্ডার ট্র্যাক করুন
                              </Link>
                            </div>
                          )}

                          {/* Partially Accepted */}
                          {order?.status === "partially_accepted" && (
                            <div className="flex items-center gap-3">
                              <button className="text-white bg-amber-600 rounded-md py-[3px] px-[10px] text-sm text-[9px] shadow-sm">
                                আংশিকভাবে গৃহীত
                              </button>
                              <Link
                                to={"/tracking-order"}
                                state={{
                                  orderID: order?.orderNumber,
                                  orderNumber: order?.orderNumber,
                                }}
                                className="text-white bg-[#ff6347] rounded-md py-[3px] px-[10px] text-sm text-[9px] hover:bg-[#e85a3f] transition"
                              >
                                অর্ডার ট্র্যাক করুন
                              </Link>
                            </div>
                          )}

                          {/* Preparing */}
                          {order?.status === "preparing" && (
                            <div className="flex items-center gap-3">
                              <button className="text-white bg-blue-500 rounded-md py-[3px] px-[10px] text-sm text-[9px] shadow-sm animate-pulse">
                                প্রস্তুত হচ্ছে...
                              </button>
                              <Link
                                to={"/tracking-order"}
                                state={{
                                  orderID: order?.orderNumber,
                                  orderNumber: order?.orderNumber,
                                }}
                                className="text-white bg-[#ff6347] rounded-md py-[3px] px-[10px] text-sm text-[9px] hover:bg-[#e85a3f] transition"
                              >
                                অর্ডার ট্র্যাক করুন
                              </Link>
                            </div>
                          )}

                          {/* Out for Delivery */}
                          {order?.status === "out_for_delivery" && (
                            <div className="flex items-center gap-3">
                              <button className="text-white bg-indigo-500 rounded-md py-[3px] px-[10px] text-sm text-[9px] shadow-sm animate-bounce">
                                ডেলিভারির পথে 🚚
                              </button>
                              <Link
                                to={"/tracking-order"}
                                state={{
                                  orderID: order?.orderNumber,
                                  orderNumber: order?.orderNumber,
                                }}
                                className="text-white bg-[#ff6347] rounded-md py-[3px] px-[10px] text-sm text-[9px] hover:bg-[#e85a3f] transition"
                              >
                                অর্ডার ট্র্যাক করুন
                              </Link>
                            </div>
                          )}

                          {/* Delivered */}
                          {order?.status === "delivered" && (
                            <button className="text-white bg-emerald-600 rounded-md py-[3px] px-[10px] text-sm text-[9px] shadow-sm">
                              ডেলিভারি সম্পন্ন
                            </button>
                          )}

                          {/* Cancelled */}
                          {order?.status === "cancelled" && (
                            <button className="text-white bg-red-500 rounded-md py-[3px] px-[10px] text-sm font-medium shadow-sm">
                              অর্ডার বাতিল
                            </button>
                          )}
                        </div>

                        <p className="font-bold lg:text-lg text-[12px]">
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

export default MyOrders;
