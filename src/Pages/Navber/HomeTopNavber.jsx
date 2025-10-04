import { ImSearch } from "react-icons/im";
import { IoLocationOutline } from "react-icons/io5";
import { LiaShoppingCartSolid } from "react-icons/lia";
import { LuLogIn } from "react-icons/lu";
import { useCart } from "../../Component/CartContext/CartContext";
import { Link, useLocation } from "react-router";
import { FaRegUser } from "react-icons/fa6";
import { useEffect, useState } from "react";
import notImage from "../../../public/images/notimage.svg";
import { IoIosArrowForward } from "react-icons/io";

const HomeTopNavber = ({
  handleGetPopulerSearch,
  openPopulerSearchBox,
  searchValue,
  setsearchValue,
  handleGetSearchItem,
  setIsFormOpen,
  address,
}) => {
  const { totalCardCount } = useCart();

  const [oldAddress, setOldAddress] = useState("");
  const [userData, setUserData] = useState("");
  const [isOpenProfile, setIsOpenProfile] = useState(false);

  useEffect(() => {
    const getAddress = JSON.parse(localStorage.getItem("deliveryAddress"));
    const userData = JSON.parse(localStorage.getItem("user"));
    setOldAddress(getAddress);
    setUserData(userData);
  }, []);

  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUserData("");
  };

  return (
    <div>
      <div
        className={`${
          location?.pathname === "/" ? "block" : "hidden"
        } top_header_shadow bg-white px-[20px] py-[16px] fixed w-full top-0 z-[200] lg:hidden`}
      >
        <div
          className={`flex items-center justify-between border rounded-full pl-[10px] pr-[4px] ${
            openPopulerSearchBox && "border border-[#ff6347]"
          }`}
        >
          <div className={`flex items-center w-[80%]`}>
            <ImSearch className="text-[20px] text-gray-500 bg-white" />

            <input
              value={searchValue}
              onClick={() => handleGetPopulerSearch()}
              onChange={(e) => setsearchValue(e.target.value)}
              type="text"
              className={`bg-white outline-none rounded-full  w-full  h-full pl-[6px] py-[8px] `}
              placeholder="খাবার বা দোকানের নাম দিয়ে "
            />
          </div>

          {searchValue && (
            <button
              onClick={handleGetSearchItem}
              className="bg-[#ff6347] text-white text-[12px] px-[15px] py-[5px] rounded-full w-[20%]"
            >
              খুঁজুন
            </button>
          )}
        </div>
      </div>

      {/* Pc */}
      <div className="bg-[#0f172a] fixed top-0 left-0 w-full z-[500] top_header_shadow px-[20px] py-[10px] lg:block hidden">
        <div className="max-w-[1100px] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-[10px] ">
            <div className="h-[40px] w-[40px] flex items-center justify-center rounded-full   bg-white shadow-md ">
              <img
                className="h-full w-full rounded-full"
                src="https://i.postimg.cc/bJqXjHd5/FB-IMG-1757409260966.jpg"
                alt="logo"
              />
            </div>
            <h2 className="font-semibold text-[20px] text-white">
              Barakh Mart
            </h2>
          </div>
          {/* Location */}
          <div className="min-w-[500px]">
            <button
              onClick={() => setIsFormOpen(true)}
              className=" bg-[#eff1f1]  w-full px-[20px] py-[10px] rounded-full flex items-center gap-[10px]"
            >
              <IoLocationOutline />
              <p className="text-[14px]">
                {address?.gram || oldAddress?.gram || "Dhaka"},
                {address?.elaka || oldAddress?.elaka || "Bangladash"},
                {address?.area || oldAddress?.area}
              </p>
            </button>
          </div>
          {/* Login  */}
          <div className="flex items-center gap-[20px] relative">
            <Link to={"/card"} className="relative">
              <LiaShoppingCartSolid className="text-[40px] text-white" />

              {totalCardCount > 0 && (
                <div className="h-[15px] w-[15px] bg-[#ff6347] flex items-center justify-center rounded-full absolute -top-[2px] -right-[5px]">
                  <p className="text-[10px] text-white">{totalCardCount}</p>
                </div>
              )}
            </Link>

            {userData ? (
              <div className="relative">
                <div
                  onClick={() => setIsOpenProfile(!isOpenProfile)}
                  className="text-white flex items-center gap-[10px] cursor-pointer"
                >
                  <h2>{userData?.name}</h2>
                  <div className="bg-white  h-[40px] w-[40px] rounded-full flex items-center justify-center">
                    <FaRegUser className="text-black text-[20px]" />
                  </div>
                </div>

                {isOpenProfile && (
                  <div className="absolute top-[50px] right-0 bg-[#0f172a] text-white  w-[200px] p-[16px] rounded-b-[10px]">
                    <div className="flex flex-col gap-[20px]">
                      <Link className="flex  items-center justify-between">
                        <div className="flex  items-center gap-[10px]">
                          <FaRegUser /> Profile
                        </div>
                        <IoIosArrowForward />
                      </Link>
                      <Link
                        onClick={() => handleLogout()}
                        className="flex  items-center justify-between"
                      >
                        <div className="flex  items-center gap-[10px]">
                          <LuLogIn />
                          Logout
                        </div>
                        <IoIosArrowForward />
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center text-white gap-[8px]">
                <FaRegUser className="text-[25px]" />
                <Link to={"/login"} className="hover:underline">
                  Login
                </Link>
                /
                <Link to={"/signup"} className="hover:underline">
                  Signup
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeTopNavber;
