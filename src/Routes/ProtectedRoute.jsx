// src/Routes/ProtectedRoute.jsx
import { Navigate, Outlet } from "react-router";
import { useAuth } from "../Context/AuthContext";

const ProtectedRoute = ({ allowedRoles }) => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (allowedRoles && !allowedRoles.includes(user.role)) {
    return <Navigate to="/" replace />; // or a 403 page
  }

  return <Outlet />;
};

export default ProtectedRoute;
