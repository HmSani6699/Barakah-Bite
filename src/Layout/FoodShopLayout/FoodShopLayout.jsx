import React from "react";
import { Outlet } from "react-router";
import FoodShopBottomNavber from "../../Pages/Navber/FoodShopBottomNavber";

const FoodShopLayout = () => {
  return (
    <div>
      <Outlet />
      <FoodShopBottomNavber />
    </div>
  );
};

export default FoodShopLayout;
