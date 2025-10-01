import { Outlet, useLocation } from "react-router";
import HomeBottomNavber from "../../Pages/Navber/HomeBottomNavber";
import { CartProvider } from "../../Component/CartContext/CartContext";
import Cetegories from "../../Pages/Home/Cetegories/Cetegories";
import HomeTopNavber from "../../Pages/Navber/HomeTopNavber";

import restura from "../../../public/images/notimage.svg";
import Footer from "../../Pages/Footer/Footer";
import { ToastContainer } from "react-toastify";

const MainLayout = () => {
  const location = useLocation();
  return (
    <div className="relative">
      <CartProvider>
        {/* Mobile */}
        <div className="lg:flex max-w-[1200px] mx-auto relative">
          <div className=" hidden">
            <div className="w-[250px] fixed p-[16px]  top-[80px] bg-gray-300 h-[85vh] z-[2000] rounded-r-[20px] overflow-y-scroll">
              <div className="flex items-center justify-between gap-[10px]">
                <div className="flex flex-col items-center w-full bg-[#ff6347] p-[8px] rounded-[6px]">
                  <img src={restura} alt="" />
                  <h2 className="text-[12px] mt-[8px] text-white">রেস্তোরাঁ</h2>
                </div>

                <div className="flex flex-col items-center w-full bg-[#ffe5e0] text-[#ff6347] p-[8px] rounded-[6px]">
                  <img src={restura} alt="" />
                  <h2 className="text-[12px] mt-[8px]">বাজার</h2>
                </div>

                <div className="flex flex-col items-center w-full bg-[#ffe5e0] text-[#ff6347] p-[8px] rounded-[6px]">
                  <img src={restura} alt="" />
                  <h2 className="text-[12px] mt-[8px]">ফার্মেসি</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="block w-full  ">
            <Outlet />
          </div>
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
      </CartProvider>
    </div>
  );
};

export default MainLayout;
