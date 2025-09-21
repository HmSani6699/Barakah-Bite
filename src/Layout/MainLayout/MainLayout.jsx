import { Outlet } from "react-router";
import HomeBottomNavber from "../../Pages/Navber/HomeBottomNavber";
import { CartProvider } from "../../Component/CartContext/CartContext";
import Cetegories from "../../Pages/Home/Cetegories/Cetegories";
import HomeTopNavber from "../../Pages/Navber/HomeTopNavber";

const MainLayout = () => {
  return (
    <div>
      <CartProvider>
        <div className="hidden lg:block">
          {/* <HomeTopNavber />

          <div className="flex relative gap-[20px]">
            <div className="w-[20%]  fixed left-0 top-0 h-full z-[50] pt-[80px]">
              <div className="bg-white h-[83vh] overflow-y-scroll rounded-r-[15px] border">
                <Cetegories />
              </div>
            </div>
            <div className="w-[80%] ml-[20%] px-[50px]">
              <Outlet />
            </div>
          </div> */}

          <div className="flex items-center justify-center h-screen">
            <div className="w-[600px] bg-white p-[20px] rounded-[10px]">
              <h2 className="text-[20px] font-bold">
                আসসালামুয়ালাইকুম, ডেইলি হাটে! আপনাকে স্বাগতম
              </h2>
              <p className="text-center mt-[10px]">
                বর্তমানে আমাদের ওয়েবসাইটটি মোবাইল ভার্সনের জন্য উপলব্ধ। খুব
                শীঘ্রই আমরা পিসি, ল্যাপটপ এবং ডেস্কটপ ব্যবহারকারীদের জন্যও
                পূর্ণাঙ্গ ভার্সন নিয়ে আসছি। ডেইলি হাটের সাথে থাকার জন্য আপনাকে
                আন্তরিক শুভেচ্ছা ও অভিনন্দন।
              </p>
            </div>
          </div>
        </div>

        {/* Mobile */}
        <div className="block lg:hidden">
          <Outlet />
          <HomeBottomNavber />
        </div>
      </CartProvider>
    </div>
  );
};

export default MainLayout;
