import React from "react";
import { FaMotorcycle } from "react-icons/fa";
import { FaMoneyBill1Wave } from "react-icons/fa6";
import { FiTrendingUp } from "react-icons/fi";
import { ImManWoman } from "react-icons/im";
import { IoReaderOutline } from "react-icons/io5";
import { MdAttachMoney } from "react-icons/md";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const SuperAdmin = () => {
  const cuisineData = [
    { name: "বাঙালি", value: 35, color: "#4f46e5" },
    { name: "চাইনিজ", value: 25, color: "#ec4899" },
    { name: "ফাস্ট ফুড", value: 20, color: "#fbbf24" },
    { name: "ভারতীয়", value: 15, color: "#34d399" },
    { name: "অন্যান্য", value: 5, color: "#f87171" },
  ];
  return (
    <div className="px-[15px] pt-[20px] mb-[120px] relative">
      <div className="p-[20px] bg-white rounded-[10px] shadow-md border mb-[20px]">
        <div className="flex items-center justify-between ">
          <div>
            <p className="text-sm text-muted-foreground mb-[15px]">মোট আয়</p>
            <p className="text-xl font-bold text-[#ff6347]">
              <span className="font-extrabold">৳</span> ১২5645
            </p>
            <p className="flex items-center gap-[4px] text-green-700 my-[6px] text-[12px]">
              <FiTrendingUp />
              +১২.৫%
            </p>
            <p className="mtext-[12px] text-gray-500">গত মাস থেকে</p>
          </div>
          <FaMoneyBill1Wave className=" text-[#ff6347] text-[40px]" />
        </div>
      </div>
      {/* Today's Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="p-[20px] bg-white rounded-[10px] shadow-md border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">আজকের আয়</p>
              <p className="text-xl font-bold text-[#ff6347]">
                <span className="font-extrabold">৳</span> ১২
              </p>
            </div>
            <MdAttachMoney className=" text-[#ff6347] text-[30px]" />
          </div>
        </div>

        <div className="p-[20px] bg-white rounded-[10px] shadow-md border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">আজকের অর্ডার</p>
              <p className="text-xl font-bold text-[#ff6347]">১২</p>
            </div>
            <IoReaderOutline className=" text-[#ff6347] text-[30px]" />
          </div>
        </div>
        <div className="p-[20px] bg-white rounded-[10px] shadow-md border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">সক্রিয় রেস্তোরাঁ</p>
              <p className="text-xl font-bold text-[#307848]">২0 </p>
              <p className="flex items-center gap-[4px] text-green-700 my-[6px] text-[12px]">
                <FiTrendingUp />
                +১২
              </p>
              <p className="mtext-[12px] text-gray-500">নতুন এই মাসে</p>
            </div>
            <SiHomeassistantcommunitystore className=" text-[#307848] text-[30px]" />
          </div>
        </div>
        <div className="p-[20px] bg-white rounded-[10px] shadow-md border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">সক্রিয় রাইডার</p>
              <p className="text-xl font-bold text-[#307848]">১২ কিমি</p>
              <p className="flex items-center gap-[4px] text-green-700 my-[6px] text-[12px]">
                <FiTrendingUp />
                +5
              </p>
              <p className="mtext-[12px] text-gray-500">গত মাস থেকে</p>
            </div>
            <FaMotorcycle className=" text-[#307848] text-[30px]" />
          </div>
        </div>
      </div>
      <div className="p-[20px] bg-white rounded-[10px] shadow-md border mt-[20px]">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-muted-foreground mb-[8px]">মোট গ্রাহক</p>
            <p className="text-xl font-bold text-[#307848]">১২0 </p>
            <p className="flex items-center gap-[4px] text-green-700 my-[6px] text-[12px]">
              <FiTrendingUp />
              +১২6
            </p>
            <p className="mtext-[12px] text-gray-500">এই মাসে নতুন</p>
          </div>
          <ImManWoman className=" text-[#307848] text-[30px]" />
        </div>
      </div>

      {/* chatr */}
      <div
        style={{ width: "100%", height: 300 }}
        className="bg-white mt-[20px] rounded-[10px]"
      >
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={cuisineData}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={({ name, percent }) =>
                `${name} ${(percent * 100).toFixed(0)}%`
              }
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
              isAnimationActive={false}
            >
              {cuisineData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SuperAdmin;
