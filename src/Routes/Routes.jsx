import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import MyOrders from "../Pages/MyOrders/MyOrders";
import CustomerOrderTracking from "../Pages/CustomerOrderTracking/CustomerOrderTracking";
import Card from "../Component/Card/Card";
import CheckOut from "../Component/Card/CheckOut";
import Profile from "../Component/Profile/Profile";
import OrderSuccess from "../Component/OrderSuccess/OrderSuccess";
import Address from "../Component/Address/Address";
import AboutUs from "../Pages/Home/AboutUs/AboutUs";
import ContactUs from "../Pages/Home/ContactUs/ContactUs";
import ShopeProfile from "../Component/ShopeProfile/ShopeProfile";
import AllPopularItem from "../Pages/Home/PopularItem/AllPopularItem";
import AllGroseryShope from "../Pages/Home/GroseryShop/AllGroseryShope";
import GroceryShopCaed from "../Component/GroceryCategoryCard/GroceryCategoryCard";
import RiderLayout from "../Layout/RiderLayout/RiderLayout";
import Rider from "../Dashboard/Rider/Rider";
import RiderOrders from "../Dashboard/Rider/RiderOrders/RiderOrders";
import RiderEarningHistroy from "../Dashboard/Rider/RiderEarningHistroy/RiderEarningHistroy";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import FoodShop from "../Dashboard/FoodShop/FoodShop";
import FoodShopLayout from "../Layout/FoodShopLayout/FoodShopLayout";
import FoodShopOrders from "../Dashboard/FoodShop/FoodShopOrders/FoodShopOrders";
import Menu from "../Dashboard/FoodShop/Menu/Menu";
import SuperAdminLayout from "../Layout/SuperAdminLayout/SuperAdminLayout";
import SuperAdmin from "../Dashboard/SuperAdmin/SuperAdmin";
import MenuPage from "../Dashboard/SuperAdmin/MenuPage/MenuPage";
import AllFoodsShops from "../Dashboard/SuperAdmin/AllFoodsShops/AllFoodsShops";
import AllRiders from "../Dashboard/SuperAdmin/AllRiders/AllRiders";
import GroceryCategoryCard from "../Component/GroceryCategoryCard/GroceryCategoryCard";
import GroceryItemCard from "../Component/GroceryCategoryCard/GroceryItemCard";
import Cetegories from "../Pages/Home/Cetegories/Cetegories";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/myorders",
        element: <MyOrders />,
      },
      {
        path: "/myorderstracking/:id",
        element: <CustomerOrderTracking />,
      },
      {
        path: "/card",
        element: <CheckOut />,
      },
      {
        path: "/success",
        element: <OrderSuccess />,
      },
      {
        path: "/address",
        element: <Address />,
      },
      {
        path: "/aboutus",
        element: <AboutUs />,
      },
      {
        path: "/contactus",
        element: <ContactUs />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/shope-profile/:id",
        element: <ShopeProfile />,
      },
      {
        path: "/all-popular-items",
        element: <AllPopularItem />,
      },
      {
        path: "/all-categories",
        element: <AllGroseryShope />,
      },
      {
        path: "/grocery-itms",
        element: <GroceryCategoryCard />,
      },
      {
        path: "/grocery-itms/:category",
        element: <GroceryItemCard />,
      },
      {
        path: "/categories",
        element: <Cetegories />,
      },
      {
        path: "/categories/item/:category",
        element: <GroceryItemCard />,
      },
    ],
  },
  // Rider Route //
  {
    path: "/rider",
    element: <RiderLayout />,
    children: [
      {
        path: "/rider",
        element: <Rider />,
      },
      {
        path: "/rider/delivery-history",
        element: <RiderOrders />,
      },
      {
        path: "/rider/earnings-history",
        element: <RiderEarningHistroy />,
      },
      {
        path: "/rider/profile",
        element: <Profile />,
      },
    ],
  },
  // Food and Shop Route //
  {
    path: "/food-shop",
    element: <FoodShopLayout />,
    children: [
      {
        path: "/food-shop",
        element: <FoodShop />,
      },
      {
        path: "/food-shop/orders",
        element: <FoodShopOrders />,
      },
      {
        path: "/food-shop/menu",
        element: <Menu />,
      },
      {
        path: "/food-shop/profile",
        element: <Profile />,
      },
    ],
  },
  // Super Admin Route //
  {
    path: "/super-admin",
    element: <SuperAdminLayout />,
    children: [
      {
        path: "/super-admin",
        element: <SuperAdmin />,
      },
      {
        path: "/super-admin/all-foods-shops",
        element: <AllFoodsShops />,
      },
      {
        path: "/super-admin/all-riders",
        element: <AllRiders />,
      },
      {
        path: "/super-admin/menu",
        element: <MenuPage />,
      },
    ],
  },
]);

export default router;
