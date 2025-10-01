import { Link, useLocation, useNavigate } from "react-router";
import notImage from "../../../public/images/notimage.svg";
import { ToastContainer } from "react-toastify";

const GroceryCard = ({
  item,
  style_clss,
  url,
  isTabeButton,
  setIsTabeButton,
  setOldTabButton,
}) => {
  const baseImageUrl = import.meta.env.VITE_API_URL_IMAGE;
  const navigate = useNavigate();

  return (
    <div
      onClick={() => {
        if (url) {
          navigate(url, { state: { categoryName: item?.name } });
        } else {
          setIsTabeButton(item?.name);
          setOldTabButton && setOldTabButton(isTabeButton);
        }
      }}
      className={` ${style_clss?.bg} ${style_clss?.rounded}  ${style_clss?.padding} flex flex-col items-center cursor-pointer`}
    >
      <div className={`${style_clss?.height} w-full   object-cover `}>
        {item?.icon || item?.productCategory?.icon ? (
          <img
            className={`h-full w-full ${style_clss?.rounded}`}
            src={
              item?.icon
                ? `${baseImageUrl}/${item.icon}`
                : item?.productCategory?.icon
                ? `${baseImageUrl}/${item.productCategory.icon}`
                : "/default-image.png" // optional fallback
            }
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
        <h2 className=" font-bold text-[12px]">{item?.name}</h2>
        <p className=" font-normal text-gray-600 text-[10px]">
          {item?.totalItems > 0 && (
            <span className="main_color font-bold pr-[4px]">
              ( {item?.totalItems} )
            </span>
          )}
          আইটেম
        </p>
      </div>

      <ToastContainer />
    </div>
  );
};

export default GroceryCard;
