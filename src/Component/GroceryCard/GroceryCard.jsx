import { Link } from "react-router";
import notImage from "../../../public/images/notimage.svg";

const GroceryCard = ({ item, style_clss, url }) => {
  return (
    <Link to={url}>
      <div
        className={` ${style_clss?.bg} ${style_clss?.rounded}  ${style_clss?.padding} flex flex-col items-center`}
      >
        <div className={`${style_clss?.height} w-full   object-cover `}>
          {item?.img ? (
            <img
              className={`h-full w-full ${style_clss?.rounded} `}
              src={item?.img}
              alt="logo"
            />
          ) : (
            <img
              className={`h-full w-full ${style_clss?.rounded} `}
              src={notImage}
              alt="logo"
            />
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
