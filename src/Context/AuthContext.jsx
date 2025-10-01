// src/Context/AuthContext.jsx

import { createContext, useContext, useEffect, useState } from "react";
import { Navigate } from "react-router";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // example user: { role: "customer", name: "John" }

  // Load from localStorage when app loads (optional)
  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const login = (userData) => {
    setUser(userData); // call this after successful login
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user"); // optional
    window.location.href = "/";
    // <Navigate to="/" replace />;
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

export default AuthProvider;
