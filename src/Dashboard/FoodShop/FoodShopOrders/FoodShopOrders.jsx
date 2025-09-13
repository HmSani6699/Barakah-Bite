import React from "react";
import { CiFilter } from "react-icons/ci";
import { FiFilter } from "react-icons/fi";

const FoodShopOrders = () => {
  const recentOrders = [
    {
      id: "#001",
      customer: "রহিম উদ্দিন",
      items: "বিরিয়ানি, রসগোল্লা",
      amount: 850,
      status: "pending",
      time: "১০ মিনিট আগে",
    },
    {
      id: "#002",
      customer: "ফাতেমা খাতুন",
      items: "ইলিশ ভাজা, ভাত",
      amount: 650,
      status: "completed",
      time: "২৫ মিনিট আগে",
    },
    {
      id: "#003",
      customer: "করিম মিয়া",
      items: "চিকেন কারি, নান",
      amount: 450,
      status: "preparing",
      time: "৩৫ মিনিট আগে",
    },
    {
      id: "#004",
      customer: "সালমা বেগম",
      items: "ফুচকা, চটপটি",
      amount: 180,
      status: "completed",
      time: "১ ঘন্টা আগে",
    },
    {
      id: "#004",
      customer: "সালমা বেগম",
      items: "ফুচকা, চটপটি",
      amount: 180,
      status: "completed",
      time: "১ ঘন্টা আগে",
    },
    {
      id: "#004",
      customer: "সালমা বেগম",
      items: "ফুচকা, চটপটি",
      amount: 180,
      status: "completed",
      time: "১ ঘন্টা আগে",
    },
    {
      id: "#004",
      customer: "সালমা বেগম",
      items: "ফুচকা, চটপটি",
      amount: 180,
      status: "completed",
      time: "১ ঘন্টা আগে",
    },
  ];
  return (
    <div className="px-[15px] mb-[100px] mt-[20px]">
      {/* Orders Tab */}

      <div className="flex items-center justify-between mb-[20px]">
        <h2 className="text-[20px] font-bold">অর্ডার ম্যানেজমেন্ট</h2>
        <div className="flex gap-2">
          <button className="flex items-center gap-[10px] bg-[#ff6347] text-white px-[15px] py-[4px] rounded-[6px]">
            <FiFilter className="h-4 w-4 mr-2" />
            ফিল্টার
          </button>
        </div>
      </div>

      <div className="space-y-0 bg-white rounded-[10px]">
        {recentOrders.map((order, index) => (
          <div
            key={order.id}
            className={`p-4 ${
              index !== recentOrders.length - 1 ? "border-b" : ""
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="">
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-medium text-lg">{order.id}</span>
                </div>
                <p className="font-medium">{order.customer}</p>
                <p className="text-sm text-muted-foreground">{order.items}</p>
                <p className="text-xs text-muted-foreground mt-1">
                  {order.time}
                </p>
              </div>
              <div className="flex items-center gap-4">
                <p className="font-bold text-lg">
                  <span className="font-extrabold  bg-white p-0">৳ </span>
                  {order.amount}
                </p>
              </div>
              <div className="flex gap-2">
                <button className="text-white bg-red-500 rounded-[6px] py-[2px] px-[10px]">
                  বাতিল
                </button>
                <button className="text-white bg-green-700 rounded-[6px] py-[2px] px-[10px]">
                  কন্ফার্ম
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodShopOrders;
