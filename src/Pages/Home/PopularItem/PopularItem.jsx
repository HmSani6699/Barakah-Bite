import FoodCard from "../../../Component/FoodCard/FoodCard";

const PopularItem = () => {
  return (
    <div className="px-[15px] mt-[20px] flex items-center gap-[20px] overflow-auto scrollbar-hide mb-[200px]">
      <FoodCard />
      <FoodCard />
      <FoodCard />
    </div>
  );
};

export default PopularItem;
