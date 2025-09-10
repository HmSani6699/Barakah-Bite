import FilterTab from "../FilterTab/FilterTab";
import GroseryShop from "../GroseryShop/GroseryShop";
import PopularItem from "../PopularItem/PopularItem";
import RestaurantsShops from "../RestaurantsShops/RestaurantsShops";
import HomeTopNavber from "../../Navber/HomeTopNavber";
import HomeBottomNavber from "../../Navber/HomeBottomNavber";

const Home = () => {
  return (
    <div>
      <HomeTopNavber />
      <RestaurantsShops />
      <FilterTab />
      <PopularItem />
      <GroseryShop />
    </div>
  );
};

export default Home;
