import FilterTab from "../FilterTab/FilterTab";
import GroseryShop from "../GroseryShop/GroseryShop";
import RestaurantsShops from "../RestaurantsShops/RestaurantsShops";
import HomeTopNavber from "../../Navber/HomeTopNavber";

import Banner from "../Banner/Banner";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import Swal from "sweetalert2";
import axios from "axios";
import Loading from "../../../Component/Loading/Loading";
import Hero from "../Hero/Hero";

import resImage from "../../../../public/images/restaurant.png";
import groceryImage from "../../../../public/images/grocery.png";
import { ImSearch } from "react-icons/im";
import FoodCard from "../../../Component/FoodCard/FoodCard";
import { IoClose } from "react-icons/io5";

const Home = () => {
  const baseUrl = import.meta.env.VITE_API_URL;
  const [loading, setLoading] = useState(false);
  const [contentLoading, setContentLoading] = useState(false);
  const [localStorageItems, setLocalStorageItems] = useState([]);
  const [allRestaurantActiveItems, setAllRestaurantActiveItems] = useState([]);
  const [allSubCategory, setallSubCategory] = useState([]);
  const [tabValue, setTabValue] = useState("সকল");
  const [allHeroData, setAllHeroData] = useState([
    {
      name: "রেস্টুরেন্ট খাবার",
      img: resImage,
    },
    {
      name: "বাজার আইটেম",
      img: groceryImage,
    },
  ]);

  const [allRestaurent, setAllrestaurent] = useState([]);

  const [openPopulerSearchBox, setOpenPopulerSearchBox] = useState(false);
  const [allPopulerSearch, setAllPopulerSearch] = useState([]);
  const [searchValue, setsearchValue] = useState("");
  const [allSearchItem, setallSearchItem] = useState([]);
  const [title, setTitle] = useState("");
  const [openSearchItem, setOpenSearchItem] = useState(false);

  const haldleAddToCard = (item) => {
    const getItems = JSON.parse(localStorage.getItem("card"));

    if (getItems) {
      const newCard = [...getItems, item];
      localStorage.setItem("card", JSON.stringify(newCard));

      // get item
      setLocalStorageItems(JSON.parse(localStorage.getItem("card")));
    } else {
      const updateItem = [item];
      localStorage.setItem("card", JSON.stringify(updateItem));

      // get item
      setLocalStorageItems(JSON.parse(localStorage.getItem("card")));
    }
  };

  // Get all main category
  const handleGetAllMainCategory = async () => {
    setLoading(true);
    try {
      let res = await axios.get(baseUrl + "/mainCategoryes");
      if (res?.data?.success) {
        setAllHeroData(res?.data?.data);
        setLoading(false);
      }
    } catch (error) {
      Swal.fire(
        "Error!",
        error?.response?.data?.message || "Something went wrong!",
        "error"
      );
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  // get all active restaurant
  const handleGetRestaurantItems = async () => {
    setLoading(true);
    try {
      let res = await axios.get(baseUrl + "/populerItems");

      if (res?.data?.success) {
        setAllRestaurantActiveItems(res?.data?.data);
        setLoading(false);
      }
    } catch (error) {
      Swal.fire(
        "Error!",
        error?.response?.data?.message || "Something went wrong!",
        "error"
      );
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  // get sub category
  const handleGetAllSubCategory = async () => {
    setLoading(true);
    try {
      let res = await axios.get(baseUrl + "/subcategoryProductsCount");

      if (res?.data?.success) {
        setallSubCategory(res?.data?.data);
        setLoading(false);
      }
    } catch (error) {
      Swal.fire(
        "Error!",
        error?.response?.data?.message || "Something went wrong!",
        "error"
      );
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  // get sub category
  const handleGetAllShop = async () => {
    setLoading(true);
    try {
      let res = await axios.get(baseUrl + "/allShops");

      if (res?.data?.success) {
        setAllrestaurent(res?.data?.data);
        setLoading(false);
      }
    } catch (error) {
      Swal.fire(
        "Error!",
        error?.response?.data?.message || "Something went wrong!",
        "error"
      );
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleGetAllMainCategory();
    handleGetAllSubCategory();
    handleGetRestaurantItems();
    handleGetAllShop();
  }, [tabValue]);

  // handle top Search
  // Get all populer search
  const handleGetPopulerSearch = async () => {
    setOpenPopulerSearchBox(true);

    try {
      const res = await axios.get(baseUrl + "/populerSearch");
      if (res?.data?.success) {
        setAllPopulerSearch(res?.data?.data);
      }
    } catch (error) {
      console.log(error);

      Swal.fire(
        "Error!",
        error?.response?.data?.message || "Something went wrong!",
        "error"
      );
    }
  };

  // handle get search product & item
  const handleGetSearchItem = async (value) => {
    setContentLoading(true);
    try {
      let url;

      if (value) {
        url = `${baseUrl}/searchProduct?productName=${value}`;
        setTitle(value);
      }
      if (searchValue) {
        url = `${baseUrl}/searchProduct?productName=${searchValue}`;
        setTitle(searchValue);
      }

      const res = await axios.get(url);
      if (res?.data?.success) {
        setallSearchItem(res?.data?.data);
        setOpenPopulerSearchBox(false);
        setsearchValue("");
        setContentLoading(false);
      }
    } catch (error) {
      console.log(error);
      Swal.fire(
        "Error!",
        error?.response?.data?.message || "Something went wrong!",
        "error"
      );
      setContentLoading(false);
    } finally {
      setContentLoading(false);
    }
  };

  // convert english to bangla number
  function toBanglaDigits(input) {
    const map = {
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
    return String(input).replace(/\d/g, (d) => map[d]);
  }

  return (
    <div
      className={`max-w-[1200px] mx-auto relative ${
        localStorageItems?.length > 0 && "pb-[50px]"
      }`}
    >
      <>
        {!loading ? (
          <>
            <HomeTopNavber
              handleGetPopulerSearch={handleGetPopulerSearch}
              openPopulerSearchBox={openPopulerSearchBox}
              setOpenPopulerSearchBox={setOpenPopulerSearchBox}
              searchValue={searchValue}
              setsearchValue={setsearchValue}
              handleGetSearchItem={handleGetSearchItem}
            />

            {openSearchItem ? (
              <div>
                {contentLoading ? (
                  <Loading />
                ) : (
                  <div>
                    {" "}
                    {allSearchItem?.length > 0 ? (
                      <div className="mt-[85px] mb-[90px] lg:mt-[60px] px-[16px]">
                        <div className="flex items-center justify-between rounded-full px-[20px] py-[4px] bg-white  border-[2px] border-gray-300 w-[60%] ">
                          <div className="flex items-center gap-[10px] ">
                            <ImSearch className="text-[20px] text-gray-500 bg-white" />
                            <h1> {title && title}</h1>
                          </div>
                          <button
                            onClick={() => {
                              setallSearchItem([]);
                              setsearchValue("");
                              setOpenSearchItem(false);
                            }}
                          >
                            <IoClose />
                          </button>
                        </div>
                        <h2 className="my-[16px]">
                          {toBanglaDigits(allSearchItem?.length)} টি
                          শপ/রেস্তোরাঁয় পাওয়া গেছে
                        </h2>
                        {allSearchItem?.map((item, i) => (
                          <FoodCard key={i} item={item} height="h-[200px]" />
                        ))}
                      </div>
                    ) : (
                      <div className="mt-[85px] mb-[90px] lg:mt-[60px] px-[16px]">
                        <div className="flex items-center justify-between rounded-full px-[20px] py-[4px] bg-white  border-[2px] border-gray-300 w-[60%] ">
                          <div className="flex items-center gap-[10px] ">
                            <ImSearch className="text-[20px] text-gray-500 bg-white" />
                            <h1> {title && title}</h1>
                          </div>
                          <button
                            onClick={() => {
                              setallSearchItem([]);
                              setsearchValue("");
                              setOpenSearchItem(false);
                            }}
                          >
                            <IoClose />
                          </button>
                        </div>

                        <div className="text-center mt-10 px-[16px]">
                          <p className="text-gray-600 mt-2">
                            দুঃখিত! আপনার খোঁজা আইটেমটি আমরা এই মুহূর্তে খুঁজে
                            পাইনি। আপনি চাইলে আমাদের সাথে হোয়াটসঅ্যাপে যোগাযোগ
                            করতে পারেন, আমরা আপনার প্রয়োজন অনুযায়ী সর্বোচ্চ
                            চেষ্টা করব আইটেমটি সরবরাহ করতে।
                          </p>
                          <a
                            href="https://wa.me/8801996359111"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block mt-4 bg-green-500 text-white px-5 py-2 rounded-lg shadow hover:bg-green-600 transition"
                          >
                            WhatsApp এ মেসেজ করুন
                          </a>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ) : (
              <div>
                {" "}
                <Banner />
                <Hero allData={allHeroData} />
                <FilterTab
                  haldleAddToCard={haldleAddToCard}
                  allRestaurantActiveItems={allRestaurantActiveItems}
                  setTabValue={setTabValue}
                  tabValue={tabValue}
                />
                <GroseryShop allSubCategory={allSubCategory} />
                <RestaurantsShops allRestaurent={allRestaurent} />
              </div>
            )}

            {/* <PopularItem /> */}
            {localStorageItems?.length > 0 && (
              <div className="bg-red-400 fixed bottom-[80px] left-0 z-[500] w-full py-[10px] text-white">
                {localStorageItems?.length} আইটেম
              </div>
            )}
          </>
        ) : (
          <div className="mt-[100px]">
            <Loading />
          </div>
        )}
      </>

      {openPopulerSearchBox && (
        <div>
          <div
            onClick={() => {
              setOpenPopulerSearchBox(false);
              setsearchValue("");
            }}
            className="fixed inset-0 bg-[#000000d9] z-[200] flex items-start justify-center overflow-y-scroll h-screen w-full top-[70px]"
          ></div>

          <div className="fixed  bg-[#fff] z-[200] flex items-start justify-center overflow-y-scroll rounded-[15px] top-[85px] left-[16px] right-[16px]">
            <div className=" p-[16px] rounded-[15px] bg-white w-full">
              <h2 className="text-[#2E3138] text-[16px] font-semibold">
                জনপ্রিয় অনুসন্ধান
              </h2>
              <div className="mt-[16px] flex flex-wrap gap-[16px]">
                {allPopulerSearch?.length > 0 &&
                  allPopulerSearch?.map((item, i) => (
                    <button
                      onClick={() => {
                        setOpenSearchItem(true);
                        handleGetSearchItem(item?.name);
                      }}
                      key={i}
                      className=" bg-[#ff6347] text-white px-[20px] py-[4px] rounded-full text-[12px] "
                    >
                      {item?.name}
                    </button>
                  ))}
              </div>
            </div>
          </div>
        </div>
      )}

      <ToastContainer />
    </div>
  );
};

export default Home;
