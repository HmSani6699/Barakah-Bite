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

const Home = () => {
  const baseUrl = import.meta.env.VITE_API_URL;
  const [loading, setLoading] = useState(false);
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

  return (
    <div
      className={`max-w-[1200px] mx-auto relative ${
        localStorageItems?.length > 0 && "pb-[50px]"
      }`}
    >
      <>
        {!loading ? (
          <>
            <HomeTopNavber />
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

      <ToastContainer />
    </div>
  );
};

export default Home;
