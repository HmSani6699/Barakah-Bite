import { Outlet } from "react-router";
import HomeBottomNavber from "../../Pages/Navber/HomeBottomNavber";
import RiderHomeBottomNavber from "../../Pages/Navber/RiderHomeBottomNavber";

const RiderLayout = () => {
  return (
    <div>
      <Outlet />
      <RiderHomeBottomNavber />
    </div>
  );
};

export default RiderLayout;
