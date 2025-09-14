import React from "react";
import { Outlet } from "react-router";
import SuperAdminBottomNavber from "../../Pages/Navber/SuperAdminBottomNavber";

const SuperAdminLayout = () => {
  return (
    <div>
      <Outlet />
      <SuperAdminBottomNavber />
    </div>
  );
};

export default SuperAdminLayout;
