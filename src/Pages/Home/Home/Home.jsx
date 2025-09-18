import FilterTab from "../FilterTab/FilterTab";
import GroseryShop from "../GroseryShop/GroseryShop";
import PopularItem from "../PopularItem/PopularItem";
import RestaurantsShops from "../RestaurantsShops/RestaurantsShops";
import HomeTopNavber from "../../Navber/HomeTopNavber";

import Banner from "../Banner/Banner";
import { useState } from "react";
import { ToastContainer } from "react-toastify";

const Home = () => {
  const [localStorageItems, setLocalStorageItems] = useState([]);

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

  return (
    <div
      className={`max-w-[1200px] mx-auto relative ${
        localStorageItems?.length > 0 && "pb-[50px]"
      }`}
    >
      <>
        <HomeTopNavber />
        <Banner />

        <FilterTab haldleAddToCard={haldleAddToCard} />
        <GroseryShop />
        <RestaurantsShops />
        <PopularItem />

        {localStorageItems?.length > 0 && (
          <div className="bg-red-400 fixed bottom-[80px] left-0 z-[500] w-full py-[10px] text-white">
            {localStorageItems?.length} আইটেম
          </div>
        )}
      </>

      <ToastContainer />
    </div>
  );
};

export default Home;
