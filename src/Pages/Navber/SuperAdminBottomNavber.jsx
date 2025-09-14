import { FaUser } from "react-icons/fa";
import { HiClipboardList, HiHome } from "react-icons/hi";
import "./Navber.css";
import { Link, useLocation } from "react-router";
import HomeBottomNavList from "../../Component/Navlist/HomeBottomNavList";
import { MdOutlineRestaurantMenu } from "react-icons/md";

const SuperAdminBottomNavber = () => {
  const { pathname } = useLocation();
  console.log(pathname);

  return (
    <div
      className={`bg-white fixed bottom-0 w-full  flex items-center justify-around text-gray-500 top_shadow py-[10px] z-[100] ${
        pathname === "/card" ||
        pathname === "/success" ||
        pathname === "/aboutus"
          ? "hidden"
          : "block"
      }`}
    >
      {/* Customer Navlist  Start*/}
      <HomeBottomNavList
        title={"হোম"}
        url={"/food-shop"}
        icon={<HiHome className="text-[25px] mb-[3px]  bg-white" />}
      />
      <HomeBottomNavList
        title={"অর্ডারস"}
        url={"/food-shop/orders"}
        icon={<HiClipboardList className="text-[22px] mb-[3px]0 bg-white" />}
      />
      <HomeBottomNavList
        title={"মেনু"}
        url={"/food-shop/menu"}
        icon={
          <MdOutlineRestaurantMenu className="text-[25px] mb-[3px]  bg-white" />
        }
      />
      <Link
        to={"/food-shop/profile"}
        className={` ${
          pathname === "/rider/profile" ||
          pathname === "/contactus" ||
          pathname === "/aboutus" ||
          pathname === "/address"
            ? "text-[#ff6347]"
            : "text-gray-500"
        }`}
      >
        <div className="flex flex-col items-center bg-white ">
          <FaUser className="text-[22px] mb-[3px]  bg-white" />
          <h2 className="text-[14px] bg-white">প্রোফাইল</h2>
        </div>
      </Link>
    </div>
  );
};

export default SuperAdminBottomNavber;
