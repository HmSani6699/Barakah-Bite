import { Outlet, useLocation } from "react-router";
import HomeBottomNavber from "../../Pages/Navber/HomeBottomNavber";
import { useCart } from "../../Component/CartContext/CartContext";

import Footer from "../../Pages/Footer/Footer";
import { ToastContainer } from "react-toastify";

const MainLayout = () => {
  const location = useLocation();

  return (
    <div className="relative">
      {/* Mobile */}
      <div className=" max-w-[1200px] mx-auto relative">
        <Outlet />

        {/* {cartItems?.length > 0 && (
          <div className="fixed bottom-[70px] left-0 z-[500] w-full py-[10px] text-white px-[16px] ">
            <div className="bg-[#ff5733] shadow-lg flex items-center justify-between px-[16px] py-[6px] rounded-full">
              <h2 className="text-[14px]"> {cartItems?.length} আইটেম</h2>

              <button className="text-[14px] flex items-center gap-[4px]">
                আইটেম লিস্ট দেখুন <MdOutlineArrowOutward />
              </button>
            </div>
          </div>
        )} */}
        <HomeBottomNavber />
      </div>

      <div
        className={`${
          location?.pathname === "/login" || location?.pathname === "/signup"
            ? "hidden"
            : "block"
        } hidden lg:block`}
      >
        <Footer />
      </div>
      <ToastContainer />
    </div>
  );
};

export default MainLayout;
