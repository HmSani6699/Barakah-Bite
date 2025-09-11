import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import FoodCard from "../../../Component/FoodCard/FoodCard";
import { Link } from "react-router";

const PopularItem = () => {
  return (
    <div className="mb-[120px] mt-[50px]">
      <div className="flex items-center justify-between  px-[15px]">
        <h2 className="text-[20px] font-bold ">জনপ্রিয় খাবার</h2>
        <Link to={"/all_populer_item"}>
          <button className="flex  items-center gap-[10px] main_color">
            আরো দেখুন <MdKeyboardDoubleArrowRight />
          </button>
        </Link>
      </div>

      <div className="px-[15px] mt-[20px] flex items-center gap-[20px] overflow-auto scrollbar-hide">
        <FoodCard height="h-[150px]" />
        <FoodCard height="h-[150px]" />
        <FoodCard height="h-[150px]" />
        <FoodCard height="h-[150px]" />
        <FoodCard height="h-[150px]" />
        <FoodCard height="h-[150px]" />
      </div>
    </div>
  );
};

export default PopularItem;
