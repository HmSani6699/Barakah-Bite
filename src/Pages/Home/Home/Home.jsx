import FilterTab from "../FilterTab/FilterTab";
import GroseryShop from "../GroseryShop/GroseryShop";
import PopularItem from "../PopularItem/PopularItem";
import RestaurantsShops from "../RestaurantsShops/RestaurantsShops";
import HomeTopNavber from "../../Navber/HomeTopNavber";

import Banner from "../Banner/Banner";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import Swal from "sweetalert2";
import axios from "axios";
import Loading from "../../../Component/Loading/Loading";
import Hero from "../Hero/Hero";

const Home = () => {
  const baseUrl = import.meta.env.VITE_API_URL;
  const [loading, setLoading] = useState(false);
  const [localStorageItems, setLocalStorageItems] = useState([]);
  const [allRestaurantActiveItems, setAllRestaurantActiveItems] = useState([]);
  const [tabValue, setTabValue] = useState("সকল");

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

  // get all active restaurant
  const handleGetRestaurantItems = async () => {
    setLoading(true);
    try {
      let res;
      if (tabValue === "সকল") {
        res = await axios.get(baseUrl + "/restaurantsItems");
      } else {
        res = await axios.get(
          `${baseUrl}/restaurantsItems?productCategory=${encodeURIComponent(
            tabValue
          )}`
        );
      }

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

  useEffect(() => {
    handleGetRestaurantItems();
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
            <Hero />
            <FilterTab
              haldleAddToCard={haldleAddToCard}
              allRestaurantActiveItems={allRestaurantActiveItems}
              setTabValue={setTabValue}
              tabValue={tabValue}
            />
            <GroseryShop />
            <RestaurantsShops />
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
