import React from "react";
import SearchInputField from "../../../Component/SearchInputField/SearchInputField";
import { FaPlus } from "react-icons/fa";
import { TbEdit } from "react-icons/tb";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { BsThreeDotsVertical } from "react-icons/bs";

const AllRiders = () => {
  const dummyData = Array.from({ length: 20 }).map((_, i) => ({
    id: i + 1,
    foodShop: {
      logo: "https://i.postimg.cc/bJqXjHd5/FB-IMG-1757409260966.jpg",
    },
    owner: `মালিক ${i + 1}`,
    status: "019924353",
    order: "Dhaka",
    income: "09/14/2025",
  }));
  return (
    <div className="px-[15px] pt-[10px] mb-[100px]">
      <div className="flex items-center justify-between my-[20px]">
        <h2 className="text-[18px] font-bold">রাইডার ব্যবস্থাপনা</h2>
        <button className="py-[8px] px-[15px] text-white bg-[#ff6347] rounded-[10px] flex items-center gap-[4px] text-[14px]">
          <FaPlus />
          নতুন রাইডার
        </button>
      </div>
      <SearchInputField />

      {/* List */}
      <div className="overflow-x-auto mt-[20px]">
        <table className="min-w-full border-collapse border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="whitespace-nowrap text-left p-3  ">ছবি</th>
              <th className="whitespace-nowrap text-left p-3  ">নাম</th>
              <th className="whitespace-nowrap text-left p-3  ">
                মোবাইল নম্বর
              </th>
              <th className="whitespace-nowrap text-left p-3  ">ঠিকানা</th>
              <th className="whitespace-nowrap text-left p-3  ">
                যোগদানের তারিখ
              </th>

              <th className="whitespace-nowrap text-left p-3  ">অ্যাকশন</th>
            </tr>
          </thead>
          <tbody>
            {dummyData.map((item) => (
              <tr
                key={item.id}
                className="hover:bg-gray-50 even:bg-gray-100 transition-colors border-b border-b-gray-200"
              >
                <td className="flex items-center gap-3 p-3 whitespace-nowrap">
                  <div className="h-[40px] w-[40px] rounded-full border-[2px] border-white overflow-hidden flex-shrink-0">
                    <img
                      src={item.foodShop.logo}
                      alt={`${item.foodShop.name} logo`}
                      className="h-full w-full object-cover rounded-full"
                    />
                  </div>
                  <span>{item.foodShop.name}</span>
                </td>
                <td className="p-3 whitespace-nowrap">{item.owner}</td>
                <td className="p-3 whitespace-nowrap">{item.status}</td>
                <td className="p-3 whitespace-nowrap">{item.order}</td>
                <td className="p-3 whitespace-nowrap">{item.income}</td>

                <td className="p-3 whitespace-nowrap">
                  <div className="flex items-center gap-[20px]">
                    <button>
                      <TbEdit className="text-[20px]" />
                    </button>
                    <button>
                      <MdOutlineRemoveRedEye className="text-[20px]" />
                    </button>
                    <button>
                      <BsThreeDotsVertical className="text-[20px]" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllRiders;
