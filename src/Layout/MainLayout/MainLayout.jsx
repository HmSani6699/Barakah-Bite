import { Outlet, useLocation } from "react-router";
import HomeBottomNavber from "../../Pages/Navber/HomeBottomNavber";
import { useEffect, useState } from "react";
import { CartProvider } from "../../Component/CartContext/CartContext";

const MainLayout = () => {
  return (
    <div>
      <CartProvider>
        <Outlet />
        <HomeBottomNavber />
      </CartProvider>
    </div>
  );
};

export default MainLayout;
