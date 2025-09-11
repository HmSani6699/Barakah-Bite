import { Outlet, useLocation } from "react-router";
import HomeBottomNavber from "../../Pages/Navber/HomeBottomNavber";

const MainLayout = () => {
  const { pathname } = useLocation();
  console.log(pathname);

  return (
    <div>
      <Outlet />
      <HomeBottomNavber />
    </div>
  );
};

export default MainLayout;
