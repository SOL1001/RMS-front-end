import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const token = localStorage.getItem("token");

  // If no token, redirect to login
  if (!token) {
    return <Navigate to="/login" />;
  }

  // If token exists, render the requested component
  return <Outlet />;
};

export default ProtectedRoute;
