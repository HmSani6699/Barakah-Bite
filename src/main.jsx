import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import router from "./Routes/Routes";
import AuthProvider from "./Context/AuthContext.jsx";
import { NotificationProvider } from "./Context/NotificationContext.jsx";
import { CartProvider } from "./Component/CartContext/CartContext.jsx";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <AuthProvider>
    <CartProvider>
      {" "}
      <NotificationProvider>
        <RouterProvider router={router} />
      </NotificationProvider>{" "}
    </CartProvider>
  </AuthProvider>

  // </StrictMode>
);
