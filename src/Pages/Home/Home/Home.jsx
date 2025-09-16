import FilterTab from "../FilterTab/FilterTab";
import GroseryShop from "../GroseryShop/GroseryShop";
import PopularItem from "../PopularItem/PopularItem";
import RestaurantsShops from "../RestaurantsShops/RestaurantsShops";
import HomeTopNavber from "../../Navber/HomeTopNavber";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { MdNotifications } from "react-icons/md";
import SearchInputField from "../../../Component/SearchInputField/SearchInputField";
import Banner from "../Banner/Banner";

const Home = () => {
  return (
    <div className="max-w-[1200px] mx-auto relative ">
      <>
        <HomeTopNavber />
        <Banner />

        <FilterTab />
        <GroseryShop />
        <RestaurantsShops />
        <PopularItem />
      </>
    </div>
  );
};

export default Home;
