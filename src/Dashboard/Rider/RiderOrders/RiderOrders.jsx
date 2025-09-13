import { FiPackage } from "react-icons/fi";
import SearchInputField from "../../../Component/SearchInputField/SearchInputField";
import { IoLocationOutline } from "react-icons/io5";
import { FaRegClock, FaStar } from "react-icons/fa";
import { FaMoneyBill1Wave } from "react-icons/fa6";
import { PiMoneyWavyLight } from "react-icons/pi";
import { useState } from "react";

const RiderOrders = () => {
  // Sample delivery data
  const deliveries = [
    {
      id: "1001",
      customerName: "রহিম উদ্দিন",
      pickup: "কেএফসি, ধানমন্ডি",
      delivery: "বাড়ি ৪৫, গুলশান-২",
      amount: 150,
      tip: 20,
      status: "সম্পন্ন",
      date: "২০২৪-১২-১০",
      time: "২:৩০ PM",
      rating: 5,
      distance: "৩.২ কিমি",
    },
    {
      id: "1002",
      customerName: "ফাতেমা খাতুন",
      pickup: "বার্গার কিং, বনানী",
      delivery: "অফিস, মতিঝিল",
      amount: 280,
      tip: 30,
      status: "সম্পন্ন",
      date: "২০২৪-১২-১০",
      time: "১:১৫ PM",
      rating: 4,
      distance: "৫.৮ কিমি",
    },
    {
      id: "1003",
      customerName: "করিম আহমেদ",
      pickup: "পিৎজা হাট, উত্তরা",
      delivery: "বাসা ২৩, উত্তরা সেক্টর ৭",
      amount: 420,
      tip: 50,
      status: "সম্পন্ন",
      date: "২০২৪-১২-০৯",
      time: "৮:৪৫ PM",
      rating: 5,
      distance: "২.১ কিমি",
    },
    {
      id: "1004",
      customerName: "নাসির হোসেন",
      pickup: "চাইনিজ রেস্টুরেন্ট, ধানমন্ডি",
      delivery: "বাড়ি ১২, লালমাটিয়া",
      amount: 320,
      tip: 0,
      status: "বাতিল",
      date: "২০২৪-১২-০৯",
      time: "৭:২০ PM",
      rating: 0,
      distance: "৪.৫ কিমি",
    },
  ];

  const [selectedFilter, setSelectedFilter] = useState("all");

  return (
    <div className="p-[20px] mb-[100px]">
      <div className="flex items-center justify-between gap-[10px] text-[14px] text-center">
        <div className="bg-white shadow-md rounded-[10px]  p-[10px]">
          <h2 className="text-[16px] font-semibold mb-[8px] text-[#0d6d22]">
            ১২৪৭
          </h2>
          <p className="text-gray-600">মোট ডেলিভারি</p>
        </div>
        <div className="bg-white shadow-md rounded-[10px]  p-[10px]">
          <h2 className="text-[16px] font-semibold mb-[8px] text-[#37b757]">
            ২৪৭
          </h2>
          <p className="text-gray-600">সফল ডেলিভারি</p>
        </div>
        <div className="bg-white shadow-md rounded-[10px]  p-[10px]">
          <h2 className="text-[16px] font-semibold mb-[8px] text-[#ff6347]">
            ১২
          </h2>
          <p className="text-gray-600">বাতিল অর্ডার</p>
        </div>
      </div>

      {/* Search */}
      <div className="mt-[20px] ">
        <SearchInputField />{" "}
      </div>
      {/*  */}

      <div className="flex items-end justify-end mt-[20px]">
        <div className="flex items-center justify-between gap-[10px]">
          <button
            className={` rounded-[8px] py-[4px] px-[15px] ${
              selectedFilter === "all"
                ? "bg-[#ff6347] text-white"
                : "bg-white text-black"
            }`}
            onClick={() => setSelectedFilter("all")}
          >
            সব
          </button>
          <button
            className={` rounded-[8px] py-[4px] px-[15px] ${
              selectedFilter === "সম্পন্ন"
                ? "bg-[#ff6347] text-white"
                : "bg-white text-black"
            }`}
            onClick={() => setSelectedFilter("সম্পন্ন")}
          >
            সম্পন্ন
          </button>
          <button
            className={` rounded-[8px] py-[4px] px-[15px] ${
              selectedFilter === "বাতিল"
                ? "bg-[#ff6347] text-white"
                : "bg-white text-black"
            }`}
            onClick={() => setSelectedFilter("বাতিল")}
          >
            বাতিল
          </button>
        </div>
      </div>

      {/* Delivery List */}
      <div className="space-y-4 mt-[20px]">
        {deliveries.map((delivery) => (
          <div className="space-y-4 bg-white p-[20px] rounded-[10px]">
            {/* Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 bg-[#ff6347] text-white rounded-full flex items-center justify-center">
                  <FiPackage className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">অর্ডার #{delivery.id}</p>
                  <p className="text-sm text-muted-foreground">
                    {delivery.customerName}
                  </p>
                </div>
              </div>
              <div className="bg-[#85c69d70] text-[#093d1c] px-[10px] py-[4px] rounded-full">
                {delivery.status}
              </div>
            </div>

            {/* Route */}
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <IoLocationOutline className="h-4 w-4 text-green-600 mt-0.5" />
                <div>
                  <p className="text-sm font-medium">পিকআপ</p>
                  <p className="text-sm text-muted-foreground">
                    {delivery.pickup}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <IoLocationOutline className="h-4 w-4 text-red-600 mt-0.5" />
                <div>
                  <p className="text-sm font-medium">ডেলিভারি</p>
                  <p className="text-sm text-muted-foreground">
                    {delivery.delivery}
                  </p>
                </div>
              </div>
            </div>

            {/* Details */}
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  <FaRegClock className="h-4 w-4 text-muted-foreground" />
                  <span>
                    {delivery.date} - {delivery.time}
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <IoLocationOutline className="h-4 w-4 text-muted-foreground" />
                  <span>{delivery.distance}</span>
                </div>
              </div>
              {delivery.rating > 0 && (
                <div className="flex items-center gap-1">
                  <FaStar className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span>{delivery.rating}</span>
                </div>
              )}
            </div>

            {/* Earnings */}
            <div className="flex items-center justify-between pt-2 border-t">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  <PiMoneyWavyLight className="text-[25px] text-primary" />
                  <span className="font-semibold">
                    {" "}
                    <span className="font-extrabold"> ৳ </span>
                    {delivery.amount}
                  </span>
                </div>
                {delivery.tip > 0 && (
                  <div className="text-sm text-muted-foreground">
                    টিপ: <span className="font-extrabold"> ৳ </span>
                    {delivery.tip}
                  </div>
                )}
              </div>
              <div className="text-lg font-bold text-primary">
                <span className="font-extrabold"> ৳ </span>
                {delivery.amount + delivery.tip}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RiderOrders;
