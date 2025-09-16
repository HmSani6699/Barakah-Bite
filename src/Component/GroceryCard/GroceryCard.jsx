import { Link } from "react-router";
import notImage from "../../../public/images/notimage.svg";

const GroceryCard = ({ item }) => {
  return (
    <Link to={"/grocery_shop_card"}>
      <div className="bg-white flex flex-col items-center">
        <div className="h-[100px] w-full   object-cover ">
          {item?.url ? (
            <img className="h-full w-full " src={item?.url} alt="logo" />
          ) : (
            <img className="h-full w-full " src={notImage} alt="logo" />
          )}
        </div>
        <div className=" text-center  mt-[8px]">
          <h2 className=" font-bold text-[12px]">{item?.title}</h2>
          <p className=" font-normal text-gray-600 text-[10px]">
            <span className="main_color font-bold ">{item?.items} </span> আইটেম
          </p>
        </div>
      </div>
    </Link>
  );
};

export default GroceryCard;
