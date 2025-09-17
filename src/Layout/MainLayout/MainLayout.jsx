import { Outlet, useLocation } from "react-router";
import HomeBottomNavber from "../../Pages/Navber/HomeBottomNavber";

const MainLayout = () => {
  return (
    <div>
      <Outlet />
      <HomeBottomNavber />
    </div>
  );
};

export default MainLayout;
