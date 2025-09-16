import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import FoodCard from "../../../Component/FoodCard/FoodCard";
import { Link } from "react-router";

const PopularItem = () => {
  const allFoods = [
    {
      title: "বিরিয়ানি",
      img: "https://i.postimg.cc/zXBTG8qp/Biriyani1.jpg",
      price: "150",
      cutPrice: "180",
    },
    {
      title: "পিৎজা",
      img: "https://images.deliveryhero.io/image/fd-bd/LH/cu0zf-listing.jpg",
      price: "190",
      cutPrice: "200",
    },

    {
      title: "বার্গার",
      img: "https://images.deliveryhero.io/image/fd-bd/products/9010848.jpg",
      price: "150",
      cutPrice: "180",
    },
    {
      title: "বিরিয়ানি",
      img: "https://i.postimg.cc/zXBTG8qp/Biriyani1.jpg",
      price: "150",
      cutPrice: "180",
    },
    {
      title: "পিৎজা",
      img: "https://images.deliveryhero.io/image/fd-bd/LH/cu0zf-listing.jpg",
      price: "190",
      cutPrice: "180",
    },
  ];
  return (
    <div className="mb-[120px] mt-[30px]">
      <div className="flex items-center justify-between  px-[15px]">
        <h2 className="text-[18px] font-bold text_black_color">
          জনপ্রিয় খাবার
        </h2>
        <Link to={"/all_populer_item"}>
          <button className="flex  items-center gap-[10px] main_color">
            আরো দেখুন <MdKeyboardDoubleArrowRight />
          </button>
        </Link>
      </div>

      {allFoods ? (
        <div className="px-[15px] mt-[20px] flex items-center gap-[20px] overflow-auto scrollbar-hide mb-[20px]">
          {allFoods?.map((item, i) => (
            <FoodCard key={i} height="h-[150px]" item={item} />
          ))}
        </div>
      ) : (
        <div>
          <h1>Item Not Found !</h1>
        </div>
      )}
    </div>
  );
};

export default PopularItem;
