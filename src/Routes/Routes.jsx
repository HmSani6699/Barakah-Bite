import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import MyOrders from "../Pages/MyOrders/MyOrders";
import CustomerOrderTracking from "../Pages/CustomerOrderTracking/CustomerOrderTracking";
import Card from "../Component/Card/Card";
import CheckOut from "../Component/Card/CheckOut";
import Profile from "../Component/Profile/Profile";
import OrderSuccess from "../Component/OrderSuccess/OrderSuccess";

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
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
]);

export default router;
