import React, { useEffect, useState } from "react";
import SearchInputField from "../../../Component/SearchInputField/SearchInputField";
import { FaPlus } from "react-icons/fa";
import FoodShopCreateUpdate from "./FoodShopCreateUpdate/FoodShopCreateUpdate";
import FoodShopList from "./FoodShopList/FoodShopList";
import FoodShopView from "./FoodShopView/FoodShopView";
import axios from "axios";
import Loading from "../../../Component/Loading/Loading";

const AllFoodsShops = () => {
  const baseUrl = import.meta.env.VITE_API_URL;
  const [loading, setLoading] = useState(false);
  const [openForm, setOpenForm] = useState(false);
  const [viewForm, setViewForm] = useState("create");
  const [viewShop, setViewShop] = useState(false);
  const [viewShopData, setViewShopData] = useState(null);
  const [data, setData] = useState([]);

  // Handle view shop
  const handleViewShop = (data) => {
    setViewShop(true);
    setViewShopData(data);
  };

  // Handle update shop
  const handleShopCreateUpdateType = (item) => {
    if (item?.type === "update") {
      setOpenForm(true);
      setViewForm(item?.type);
      setViewShopData(item?.data);
    } else {
      setOpenForm(true);
      setViewForm(item?.type);
    }
  };

  // Get all Shop
  const handleGetShop = async () => {
    setLoading(true);
    try {
      const getAllData = await axios.get(baseUrl + "/shops");

      if (getAllData?.status === 200) {
        setData(getAllData?.data?.data);
        setLoading(false);
      } else {
        setData([]);
      }
    } catch (error) {
      console.error("Error fetching shop:", error);
      setData([]); // fallback empty if error
      setLoading(false);
    }
  };

  useEffect(() => {
    handleGetShop();
  }, []);

  return (
    <div className="px-[15px] pt-[10px] mb-[100px]">
      <div className="flex items-center justify-between my-[20px]">
        <h2 className="text-[18px] font-bold">রেস্তোরাঁ ব্যবস্থাপনা</h2>
        <button
          onClick={() =>
            handleShopCreateUpdateType({ type: "create", data: {} })
          }
          className="py-[8px] px-[15px] text-white bg-[#ff6347] rounded-[10px] flex items-center gap-[4px] text-[14px]"
        >
          <FaPlus />
          নতুন রেস্তোরাঁ
        </button>
      </div>
      <SearchInputField />

      {/* List */}

      {loading && !data?.length > 0 ? (
        <Loading />
      ) : (
        <FoodShopList
          allShop={data}
          handleViewShop={handleViewShop}
          handleShopCreateUpdateType={handleShopCreateUpdateType}
          handleGetShop={handleGetShop}
        />
      )}

      {openForm && (
        <FoodShopCreateUpdate
          setOpenForm={setOpenForm}
          viewForm={viewForm}
          setViewForm={setViewForm}
          handleGetShop={handleGetShop}
          updateData={viewShopData}
        />
      )}
      {viewShop && (
        <FoodShopView setViewShop={setViewShop} viewShopData={viewShopData} />
      )}
    </div>
  );
};

export default AllFoodsShops;
