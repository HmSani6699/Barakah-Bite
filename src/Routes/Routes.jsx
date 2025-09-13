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
import GroceryShopCaed from "../Component/GroceryShopCaed/GroceryShopCaed";
import RiderLayout from "../Layout/RiderLayout/RiderLayout";
import Rider from "../Dashboard/Rider/Rider";
import RiderOrders from "../Dashboard/Rider/RiderOrders/RiderOrders";
import RiderEarningHistroy from "../Dashboard/Rider/RiderEarningHistroy/RiderEarningHistroy";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";

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
        path: "/all_populer_item",
        element: <AllPopularItem />,
      },
      {
        path: "/all_grocery_shop",
        element: <AllGroseryShope />,
      },
      {
        path: "/grocery_shop_card",
        element: <GroceryShopCaed />,
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
    ],
  },
]);

export default router;
