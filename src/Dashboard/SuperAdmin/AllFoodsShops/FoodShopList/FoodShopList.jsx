import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { TbEdit } from "react-icons/tb";
import notimage from "../../../../../public/images/notimage.svg";

const FoodShopList = ({
  allShop,
  handleViewShop,
  handleShopCreateUpdateType,
}) => {
  console.log(allShop);

  return (
    <div className="overflow-x-auto mt-[20px]">
      <table className="min-w-full border-collapse border border-gray-200">
        <thead className="bg-gray-100">
          <tr>
            <th className="whitespace-nowrap text-left p-3  ">Food & Shop</th>
            <th className="whitespace-nowrap text-left p-3  ">মালিক</th>
            <th className="whitespace-nowrap text-left p-3  ">অবস্থা</th>
            <th className="whitespace-nowrap text-left p-3  ">অর্ডার</th>
            <th className="whitespace-nowrap text-left p-3  ">আয়</th>
            <th className="whitespace-nowrap text-left p-3  ">কমিশন রেট</th>
            <th className="whitespace-nowrap text-left p-3  ">অ্যাকশন</th>
          </tr>
        </thead>
        <tbody>
          {allShop.map((item) => (
            <tr
              key={item.id}
              className="hover:bg-gray-50 even:bg-gray-100 transition-colors border-b border-b-gray-200"
            >
              <td className="flex items-center gap-3 p-3 whitespace-nowrap">
                <div className="h-[40px] w-[40px] rounded-full border-[2px] border-white overflow-hidden flex-shrink-0">
                  {item?.logo ? (
                    <img
                      src={item.logo}
                      alt={`${item.name} logo`}
                      className="h-full w-full object-cover rounded-full"
                    />
                  ) : (
                    <img src={notimage} alt="" />
                  )}
                </div>
                <span>{item.name}</span>
              </td>
              <td className="p-3 whitespace-nowrap">{item?.owner?.name}</td>
              <td className="p-3 whitespace-nowrap">{item?.status}</td>
              <td className="p-3 whitespace-nowrap">{item?.order}</td>
              <td className="p-3 whitespace-nowrap">
                <span className="font-extrabold   p-0">৳ </span>
                {item.income}
              </td>
              <td className="p-3 whitespace-nowrap">
                {item?.sharePricing &&
                  Object.entries(item.sharePricing).map(([range, percent]) => (
                    <td key={range} className="odd:bg-gray-100">
                      <td className="border border-gray-300 px-2 py-1">
                        {range}
                      </td>
                      <td className="border border-gray-300 px-2 py-1">
                        {percent}%
                      </td>
                    </td>
                  ))}
              </td>

              <td className="p-3 whitespace-nowrap">
                <div className="flex items-center gap-[20px]">
                  <button
                    onClick={() =>
                      handleShopCreateUpdateType({ type: "update", data: item })
                    }
                  >
                    <TbEdit className="text-[20px]" />
                  </button>
                  <button onClick={() => handleViewShop(item)}>
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
  );
};

export default FoodShopList;
