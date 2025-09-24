import { Navigate } from "react-router";
import { useAuth } from "../Context/AuthContext";

const roleRedirectMap = {
  customer: "/",
  rider: "/rider",
  seller: "/food-shop",
  admin: "/super-admin",
};

const ProtectedRoute = ({ allowedRoles, children }) => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/" replace />;
  }

  if (allowedRoles && !allowedRoles.includes(user.role)) {
    const redirectPath = roleRedirectMap[user.role] || "/";
    return <Navigate to={redirectPath} replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
