import React from "react";
import { Navigate } from "react-router";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  !user ? <Navigate to="/login" /> : children;
};

export default ProtectedRoute;
