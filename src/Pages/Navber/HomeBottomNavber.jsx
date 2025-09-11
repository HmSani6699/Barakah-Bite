import { FaUser } from "react-icons/fa";
import { HiClipboardList, HiHome, HiShoppingCart } from "react-icons/hi";
import "./Navber.css";
import { Link, useLocation } from "react-router";

const HomeBottomNavber = () => {
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
      <Link
        to={"/"}
        className={` ${pathname === "/" ? "text-[#ff6347]" : "text-gray-500"}`}
      >
        <div className="flex flex-col items-center bg-white ">
          <HiHome className="text-[25px] mb-[3px]  bg-white" />
          <h2 className="text-[14px] bg-white">হোম</h2>
        </div>
      </Link>

      <Link
        to={"/myorders"}
        className={` ${
          pathname === "/myorders" ? "text-[#ff6347]" : "text-gray-500"
        }`}
      >
        <div className="flex flex-col items-center bg-white ">
          <HiClipboardList className="text-[22px] mb-[3px]0 bg-white" />
          <h2 className="text-[14px] bg-white"> অর্ডারস</h2>
        </div>
      </Link>

      <Link
        to={"/card"}
        className={` ${
          pathname === "/card" ? "text-[#ff6347]" : "text-gray-500"
        }`}
      >
        <div className="flex flex-col items-center bg-white ">
          <HiShoppingCart className="text-[25px] mb-[3px]  bg-white" />
          <h2 className="text-[14px] bg-white"> কার্ড</h2>
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
          <FaUser className="text-[22px] mb-[3px]  bg-white" />
          <h2 className="text-[14px] bg-white">প্রোফাইল</h2>
        </div>
      </Link>
    </div>
  );
};

export default HomeBottomNavber;
