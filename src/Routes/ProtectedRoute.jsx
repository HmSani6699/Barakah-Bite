// import { Navigate, useNavigate } from "react-router";
// import { useAuth } from "../Context/AuthContext";

// const roleRedirectMap = {
//   customer: "/",
//   rider: "/rider",
//   seller: "/food-shop",
//   admin: "/super-admin",
// };

// const ProtectedRoute = ({ allowedRoles, children }) => {
//   const { user } = useAuth();

//   const navigate = useNavigate();
//   console.log(user, "dskjfsdlkjo3iu5oi");

//   if (!user) {
//     navigate("/");
//     return;
//   }

//   if (allowedRoles && !allowedRoles.includes(user.role)) {
//     const redirectPath = roleRedirectMap[user.role] || "/";
//     return <Navigate to={redirectPath} replace />;
//   }

//   return <>{children}</>;
// };

// export default ProtectedRoute;

// import { Navigate, useNavigate } from "react-router";
// import { useAuth } from "../Context/AuthContext";

// const roleRedirectMap = {
//   customer: "/",
//   rider: "/rider",
//   seller: "/food-shop",
//   admin: "/super-admin",
// };

// const ProtectedRoute = ({ allowedRoles, children }) => {
//   const { user } = useAuth();

//   // const navigate = useNavigate();
//   // console.log(user, "dskjfsdlkjo3iu5oi");

//   if (!user) {
//     // navigate("/");
//     return;
//   }

//   if (allowedRoles && !allowedRoles.includes(user.role)) {
//     const redirectPath = roleRedirectMap[user.role] || "/";
//     return <Navigate to={redirectPath} replace />;
//   }

//   return <>{children}</>;
// };

// export default ProtectedRoute;

import { Navigate } from "react-router";
import { useAuth } from "../Context/AuthContext";

const roleRedirectMap = {
  customer: "/",
  rider: "/rider",
  seller: "/food-shop",
  admin: "/admin",
};

const ProtectedRoute = ({ allowedRoles, children }) => {
  const { user } = useAuth();
  const localUser = JSON.parse(localStorage.getItem("user"));

  // user না থাকলে সরাসরি home এ পাঠাও
  if (!user && !localUser) {
    console.log("no user", localUser);

    // return <Navigate to="/" replace />;
    return <>{children}</>;
  }

  // role mismatch হলে redirect করো
  if (allowedRoles && !allowedRoles.includes(user?.role || localUser?.role)) {
    console.log("yes user");

    const redirectPath = roleRedirectMap[user?.role] || "/";
    return <Navigate to={redirectPath} replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
