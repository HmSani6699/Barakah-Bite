import FilterTab from "../FilterTab/FilterTab";
import GroseryShop from "../GroseryShop/GroseryShop";
import PopularItem from "../PopularItem/PopularItem";
import RestaurantsShops from "../RestaurantsShops/RestaurantsShops";
import HomeTopNavber from "../../Navber/HomeTopNavber";

const Home = () => {
  return (
    <div className="max-w-[1200px] mx-auto relative">
      <HomeTopNavber />
      <RestaurantsShops />
      <FilterTab />
      <GroseryShop />
      <PopularItem />
    </div>
  );
};

export default Home;
