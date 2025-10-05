import { FaRegUser, FaUser } from "react-icons/fa";

import "./Navber.css";
import { Link, useLocation } from "react-router";
import HomeBottomNavList from "../../Component/Navlist/HomeBottomNavList";

import { CiGrid41 } from "react-icons/ci";
import shopCard from "../../../public/images/card.svg";
import homeIcon from "../../../public/images/home.svg";
import homeIconActibe from "../../../public/images/homeIconActibe.svg";
import { useCart } from "../../Component/CartContext/CartContext";

const HomeBottomNavber = () => {
  const { pathname } = useLocation();

  // check করলাম dynamic route কিনা
  const isShopProfile = pathname.startsWith("/shope-profile/");
  const isShopProfile1 = pathname.startsWith("/grocery-itms/");

  const { totalCardCount } = useCart();

  return (
    <div
      className={`bg-white fixed bottom-0 w-full  flex items-center justify-around text-gray-500 top_shadow py-[10px] z-[100] lg:hidden ${
        pathname === "/card" ||
        pathname === "/all-categories" ||
        pathname === "/grocery-itms" ||
        pathname === "/all-popular-items" ||
        pathname === "/checkOut" ||
        pathname === "/tracking-order" ||
        pathname === "/success" ||
        pathname === "/aboutus" ||
        pathname === "/developer" ||
        pathname === "/login" ||
        pathname === "/signup" ||
        isShopProfile ||
        isShopProfile1
          ? "hidden"
          : "block"
      }`}
    >
      {/* Customer Navlist  Start*/}
      {/* <HomeBottomNavList
        title={"হোম"}
        url={"/"}
        icon={<img className="mb-[3px]" src={homeIcon} alt="card" />}
      /> */}

      <Link
        to={"/"}
        className={` ${pathname === "/" ? "text-[#ff6347]" : "text-gray-500"}`}
      >
        <div className="flex flex-col items-center bg-white ">
          {pathname === "/" ? (
            <img className="mb-[3px]" src={homeIconActibe} alt="card" />
          ) : (
            <img className="mb-[3px]" src={homeIcon} alt="card" />
          )}
          <h2 className="text-[14px] bg-white">হোম</h2>
        </div>
      </Link>

      <HomeBottomNavList
        title={"ক্যাটাগরি"}
        url={"/categories"}
        // icon={<HiClipboardList className="text-[22px] mb-[3px]0 bg-white" />}
        icon={<CiGrid41 className="text-[25px] mb-[3px] bg-white" />}
      />
      {/* <HomeBottomNavList
        title={"কার্ড"}
        url={"/card"}
        icon={<img className="mb-[3px] w-[25px]" src={shopCard} alt="card" />}
      />

      {totalCount} */}

      <Link
        to={"/card"}
        className={` ${
          pathname === "/card" ? "text-[#ff6347]" : "text-gray-500"
        }`}
      >
        <div className="flex flex-col items-center bg-white relative">
          <img className="mb-[3px] w-[25px]" src={shopCard} alt="card" />
          <h2 className="text-[14px] bg-white">কার্ড</h2>
          {totalCardCount > 0 && (
            <span className="absolute top-0 -right-[5px] text-[#fff] z-[20] text-[10px] bg-[#ff6347] rounded-full h-[15px] w-[15px] flex items-center justify-center">
              {totalCardCount}
            </span>
          )}
        </div>
      </Link>

      <Link
        to={"/profile"}
        className={` ${
          pathname === "/profile" ||
          pathname === "/contactus" ||
          pathname === "/aboutus" ||
          pathname === "/address"
            ? "text-[#ff6347]"
            : "text-gray-500"
        }`}
      >
        <div className="flex flex-col items-center bg-white ">
          <FaRegUser className="text-[22px] mb-[4px]  bg-white" />
          <h2 className="text-[14px] bg-white">প্রোফাইল</h2>
        </div>
      </Link>
    </div>
  );
};

export default HomeBottomNavber;
