import FilterTab from "../FilterTab/FilterTab";
import GroseryShop from "../GroseryShop/GroseryShop";
import PopularItem from "../PopularItem/PopularItem";
import RestaurantsShops from "../RestaurantsShops/RestaurantsShops";
import HomeTopNavber from "../../Navber/HomeTopNavber";
import HomeBottomNavber from "../../Navber/HomeBottomNavber";

const Home = () => {
  return (
    <div className="max-w-[1200px] mx-auto">
      <HomeTopNavber />
      <RestaurantsShops />
      <FilterTab />
      <PopularItem />
      <GroseryShop />
    </div>
  );
};

export default Home;
