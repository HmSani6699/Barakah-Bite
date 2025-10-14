import axios, { all } from "axios";
import React, { useEffect, useState } from "react";
import { FiFilter } from "react-icons/fi";
import Loading from "../../../Component/Loading/Loading";
import {
  FaBell,
  FaPhone,
  FaRegCalendarAlt,
  FaRegClock,
  FaUserAlt,
} from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
// import { requestFCMToken } from "../../../Utils/firebaseUtils";
// import { useNotification } from "../../../Context/NotificationContext";
import { ToastContainer } from "react-toastify";
import OrderHistoryFilterForm from "./OrderHistoryFilterForm";
import Swal from "sweetalert2";

const OrderHistory = () => {
  const baseUrl = import.meta.env.VITE_API_URL;
  const baseImageUrl = import.meta.env.VITE_API_URL_IMAGE;

  const [loading, setLoading] = useState(false);
  const [isOpenFilter, setIsOpenFilter] = useState(false);
  const [isOpenFilterTitle, setIsOpenFilterTitle] = useState(null);

  const { notificationCount } = useNotification();

  const [allOrders, setAllOrders] = useState([]);
  const [date, setDate] = useState("");
  const [filters, setFilters] = useState({
    all: false,
    pending: false, // যখন order place হলো
    partially_accepted: false, // কিছু shop accept করলো, কিছু করলো না
    confirmed: false, // সব shop accept করলো
    preparing: false,
    out_for_delivery: false,
    delivered: false,
    cancelled: false,
  });
  const [errors, setErrors] = useState("");

  // handle check box
  const handleCheckbox = (name) => {
    if (name === "all") {
      // যদি all select করে -> সবগুলো true হবে
      const newValue = !filters.all;
      setFilters({
        all: newValue,
        pending: newValue, // যখন order place হলো
        partially_accepted: newValue, // কিছু shop accept করলো, কিছু করলো না
        confirmed: newValue, // সব shop accept করলো
        preparing: newValue,
        out_for_delivery: newValue,
        delivered: newValue,
        cancelled: newValue,
      });
    } else {
      // আলাদা checkbox control
      const newFilters = { ...filters, [name]: !filters[name] };
      // confirm + cancel যদি দুটোই select হয়, তবে all = true
      newFilters.all =
        newFilters.pending &&
        newFilters.partially_accepted &&
        newFilters.confirmed &&
        newFilters.preparing &&
        newFilters.out_for_delivery &&
        newFilters.delivered &&
        newFilters.cancelled;
      setFilters(newFilters);
    }
  };

  // handle clear filte
  const handleClearFilter = () => {
    setIsOpenFilter(false);
    setFilters({
      all: false,
      pending: false, // যখন order place হলো
      partially_accepted: false, // কিছু shop accept করলো, কিছু করলো না
      confirmed: false, // সব shop accept করলো
      preparing: false,
      out_for_delivery: false,
      delivered: false,
      cancelled: false,
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

      const selectedStatuses = Object.keys(filters).filter(
        (key) => filters[key] && key !== "all"
      ); // যেগুলো select করা হয়েছে

      if (filters.all) {
        // ✅ সব দেখাবে
        url = `${baseUrl}/orders?date=${date}`;
        setIsOpenFilterTitle(`${date} - All Orders`);
      } else if (selectedStatuses.length > 0) {
        // ✅ একাধিক status দেখাবে
        url = `${baseUrl}/orders?date=${date}&status=${selectedStatuses.join(
          ","
        )}`;
        setIsOpenFilterTitle(`${date} - ${selectedStatuses.join(", ")}`);
      } else {
        // ✅ default (pending)
        url = `${baseUrl}/orders?date=${date}&status=pending`;
      }

      const res = await axios.get(url);

      if (res?.status === 200) {
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
    // Collect admin token
    requestFCMToken().then((token) => {
      fetch(`${baseUrl}/register-token`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token }),
      });
    });

    handleGetShopOrders(); // initial fetch
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
  const handleUpdateStatus = async (orderId, newStatus) => {
    try {
      const res = await axios.put(`${baseUrl}/orders/${orderId}`, {
        status: newStatus,
      });

      if (res.data.success) {
        Swal.fire("Success!", "Statuse update successfully!", "success");
        handleGetShopOrders();
      }
    } catch (error) {
      console.error("❌ Error updating order:", error);
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

              <div className="flex items-center gap-[30px]">
                <div className="flex items-center gap-2 relative">
                  <FaBell className="text-2xl text-gray-700" />
                  {notificationCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-sm rounded-full px-2">
                      {notificationCount}
                    </span>
                  )}
                </div>
                {/* filter */}
                <button
                  onClick={() => setIsOpenFilter(!isOpenFilter)}
                  className="flex items-center gap-[10px] bg-[#ff6347] text-white px-[15px] py-[8px] rounded-[6px]"
                >
                  <FiFilter />
                  ফিল্টার
                </button>
              </div>
            </div>

            {isOpenFilter && (
              <OrderHistoryFilterForm
                filters={filters}
                data={date}
                setDate={setDate}
                errors={errors}
                handleCheckbox={handleCheckbox}
                handleClearFilter={handleClearFilter}
                handleFilterOrders={handleFilterOrders}
              />
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
                  let price = 0;

                  return (
                    <div
                      key={i}
                      className="bg-white rounded-[10px] flex flex-col"
                    >
                      <div className="mb-2 bg-gray-300 rounded-t-[10px] p-[16px] ">
                        <div>
                          <div className="flex  justify-between">
                            <p className="font-medium lg:text-[14px] text-[10px] mt-[5px]">
                              অর্ডার আইডি: {order?.orderNumber}
                            </p>
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
                      </div>

                      <div className="">
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
                            <div key={i} className="">
                              {/* shop */}
                              <div className="bg-red-200 w-[150px] rounded-r-full p-[16px]">
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
                              <div className="flex items-center justify-between p-[16px] gap-[16px]">
                                {/* items */}
                                <div className="flex flex-col gap-[16px] ">
                                  {shopOrder?.items?.map((item, i) => (
                                    <div
                                      key={i}
                                      className="flex items-center gap-[16px]"
                                    >
                                      <div className="h-full w-[50px] lg:w-[100px] border">
                                        <img
                                          className="w-full h-full"
                                          src={`${baseImageUrl}/${item?.img}`}
                                          alt="item img"
                                        />
                                      </div>
                                      <div>
                                        <h2 className="font-semibold text-[14px] lg:text-[16px]">
                                          {item?.productName}
                                        </h2>
                                        <p className=" text-[9px] lg:text-[12px]">
                                          প্রতি ইউনিট মূল্য:{" "}
                                          {convertToBanglaNumber(
                                            item?.pricePerUnit
                                          )}
                                        </p>
                                        <p className=" text-[9px] lg:text-[12px]">
                                          অর্ডার পরিমাণ:{" "}
                                          {convertToBanglaNumber(
                                            item?.quantity
                                          )}
                                        </p>
                                        <p className=" text-[9px] lg:text-[12px]">
                                          ভেরিয়েন্টের নাম: {item?.variantName}
                                        </p>
                                        <p className=" text-[9px] lg:text-[12px]">
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
                                  <p className="font-bold lg:text-lg text-[14px]">
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

                      <div className="bg-gray-300 rounded-b-[10px] lg:flex items-center justify-between px-[16px] py-[10px]">
                        <div className="mb-[20px] lg:mb-0 lg:block flex  justify-between ">
                          <div>
                            <h2>Current status</h2>
                            <p className="bg-[#ff5733] text-white p-[8px] rounded-[10px] mt-[10px]">
                              {order?.status}
                            </p>
                          </div>
                          <p className="font-bold lg:text-lg text-[16px] lg:hidden block">
                            মোট মূল্য ={convertToBanglaNumber(price)}
                            টাকা
                          </p>
                        </div>

                        {/* Accion */}
                        <div className="flex  flex-col-reverse lg:flex-row lg:items-center gap-2">
                          <button
                            onClick={() =>
                              handleUpdateStatus(
                                order?._id,
                                "partially_accepted"
                              )
                            }
                            className="text-white bg-yellow-500 rounded-[6px] py-[2px] px-[10px]"
                          >
                            Partially Accepted
                          </button>
                          <button
                            onClick={() =>
                              handleUpdateStatus(order?._id, "confirmed")
                            }
                            className="text-white bg-green-700 rounded-[6px] py-[2px] px-[10px]"
                          >
                            Confirmed
                          </button>

                          <button
                            onClick={() =>
                              handleUpdateStatus(order?._id, "preparing")
                            }
                            className="text-white bg-yellow-500 rounded-[6px] py-[2px] px-[10px]"
                          >
                            Preparing
                          </button>
                          <button
                            onClick={() =>
                              handleUpdateStatus(order?._id, "out_for_delivery")
                            }
                            className="text-white bg-yellow-500 rounded-[6px] py-[2px] px-[10px]"
                          >
                            Out for delivery
                          </button>

                          <button
                            onClick={() =>
                              handleUpdateStatus(order?._id, "delivered")
                            }
                            className="text-white bg-yellow-500 rounded-[6px] py-[2px] px-[10px]"
                          >
                            Delivered
                          </button>

                          <button
                            onClick={() =>
                              handleUpdateStatus(order?._id, "cancelled")
                            }
                            className="text-white bg-red-500 rounded-[6px] py-[2px] px-[10px]"
                          >
                            Cancelled
                          </button>
                        </div>
                        <p className="font-bold lg:text-lg text-[16px] lg:block hidden">
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
          <ToastContainer />
        </div>
      )}
    </>
  );
};

export default OrderHistory;
